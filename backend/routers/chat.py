"""Chat endpoint: KB retrieve → LLM answer → resolve prompt → ticket flow."""

import json
import logging
import uuid
from typing import Optional

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db, AsyncSessionLocal
from models import ChatMessage, SystemConfig
from schemas import ChatAskRequest, ChatTicketSubmit
from services.dify_service import DifyRetrievalService, LLMService

log = logging.getLogger("chat")
router = APIRouter()

SYSTEM_PROMPT = """# 硬性强制约束（必须第一条执行）
1. 全程禁止输出任何思考、分析、判断、推理、解读、内部推演文字，禁止解释你如何匹配知识库、禁止分析用户提问里的数字/标点、禁止描述检索逻辑；
2. 仅输出最终面向用户的答案正文，不出现任何内心推演类内容；
3. 知识库内若包含图片Markdown链接 `![说明](url)`，必须原样保留，放在对应文字段落紧邻下方，图文一一对应。

# 角色
你是河北JC信息管理部的专业知识库问答助手——「JC小智」。
根据【参考知识】回答用户问题，知识库没检索到相关内容时才基于你的专业知识作答。

# 回答要求
- 回答简洁、分点、可操作
- 故障类问题给出排查步骤
- **菜单查询类问题：你必须从参考知识中提取该餐次（早餐/午餐/晚餐）该楼层（一楼/二楼）该星期几的全部菜品，逐一列出，不得遗漏任何一个。参考知识中每个 chunk 包含一周七天的数据，你需要遍历所有 chunk，把所有该天的条目汇总后完整输出。不得概括、不得合并、不得省略。**
- 链接和地址只出现一次，使用 `[描述](URL)` 格式即可，不要同时给出纯文本 URL
- 回答末尾不要主动追问「是否解决」（系统自动处理）"""


async def _get_config_map(db: AsyncSession) -> dict:
    result = await db.execute(select(SystemConfig))
    return {cfg.key: cfg.value for cfg in result.scalars().all()}


@router.post("/ask", summary="Send chat message (SSE stream)", description="KB retrieval + LLM answer + resolve prompt.")
async def ask_question(req: ChatAskRequest, db: AsyncSession = Depends(get_db)):
    cfg = await _get_config_map(db)
    llm_url = cfg.get("llm_base_url", "").strip()
    llm_key = cfg.get("llm_api_key", "").strip()
    llm_model = cfg.get("llm_model", "gpt-4o-mini").strip() or "gpt-4o-mini"
    dify_url = cfg.get("dify_base_url", "").strip()
    dify_key = cfg.get("dify_api_key", "").strip()
    dify_ds = cfg.get("dify_dataset_id", "").strip()

    conversation_id = req.conversation_id or f"conv_{uuid.uuid4().hex[:16]}"

    # Persist user message
    db.add(ChatMessage(conversation_id=conversation_id, role="user", content=req.message))
    await db.commit()

    async def stream_generator():
        answer_text = ""
        sources = []

        try:
            # === Step 1: KB retrieval ===
            kb_chunks = []
            if dify_url and dify_key and dify_ds:
                try:
                    retriever = DifyRetrievalService(dify_url, dify_key, dify_ds)
                    kb_chunks = await retriever.retrieve(req.message, top_k=15)
                    sources = [{"content": c["content"][:200], "score": c["score"], "doc": c["document_name"]} for c in kb_chunks]
                    log.info("Retrieved %d KB chunks", len(kb_chunks))
                except Exception as e:
                    log.warning("KB retrieval failed: %s", e)

            # === Step 2: Build messages ===
            messages = [{"role": "system", "content": SYSTEM_PROMPT}]
            if kb_chunks:
                kb_text = "\n\n---\n".join(f"[来源: {c['document_name']} (相关度: {c['score']:.2f})]\n{c['content']}" for c in kb_chunks)
                messages.append({"role": "system", "content": f"参考知识（来自JC小智知识库）：\n{kb_text}"})
            messages.append({"role": "user", "content": req.message})

            # === Step 3: LLM stream ===
            if llm_url and llm_key:
                llm = LLMService(llm_url, llm_key, llm_model)
                async for chunk in llm.chat_stream(messages, temperature=0.5, max_tokens=1024):
                    answer_text += chunk or ""
                    yield f"data: {json.dumps({'type': 'chunk', 'content': chunk}, ensure_ascii=False)}\n\n"
            else:
                placeholder = "抱歉，AI 助手尚未配置。请联系管理员在后台「系统设置」中完成大模型接入配置。"
                answer_text = placeholder
                yield f"data: {json.dumps({'type': 'chunk', 'content': placeholder}, ensure_ascii=False)}\n\n"

            # === Step 4: Done signal ===
            yield f"data: {json.dumps({'type': 'done', 'conversation_id': conversation_id, 'sources': sources}, ensure_ascii=False)}\n\n"

        except Exception as e:
            log.exception("Chat error: %s", e)
            err_msg = f"对话服务异常: {e}"
            yield f"data: {json.dumps({'type': 'chunk', 'content': err_msg}, ensure_ascii=False)}\n\n"
            yield f"data: {json.dumps({'type': 'done', 'conversation_id': conversation_id, 'sources': []}, ensure_ascii=False)}\n\n"
        finally:
            # Persist assistant message
            async with AsyncSessionLocal() as session:
                try:
                    session.add(ChatMessage(conversation_id=conversation_id, role="assistant", content=answer_text, sources=json.dumps(sources, ensure_ascii=False)))
                    await session.commit()
                except Exception as e:
                    log.error("Failed to save assistant msg: %s", e)
            # === Step 5: Ask if resolved ===
            yield 'data: {"type": "ask_resolved"}\n\n'

    return StreamingResponse(stream_generator(), media_type="text/event-stream")


@router.post("/ticket", summary="提交故障工单")
async def submit_ticket(req: ChatTicketSubmit, db: AsyncSession = Depends(get_db)):
    from models import Ticket
    from services.classifier import classify_ticket
    from services.email_service import send_ticket_email

    cfg = await _get_config_map(db)
    category = await classify_ticket(
        text=f"姓名:{req.name}\n位置:{req.location}\n描述:{req.description}", cfg=cfg
    )
    email_to = {
        "desktop": cfg.get("email_desktop", "desktop@example.com"),
        "network": cfg.get("email_network", "network@example.com"),
        "weak_current": cfg.get("email_weak_current", "weakcurrent@example.com"),
    }.get(category, cfg.get("email_desktop", "desktop@example.com"))

    ticket = Ticket(
        conversation_id=req.conversation_id,
        name=req.name, phone=req.phone,
        location=req.location, description=req.description,
        images=",".join(req.images),
        category=category, email_to=email_to, email_status="pending",
    )
    db.add(ticket)
    await db.commit()
    await db.refresh(ticket)

    success, error = await send_ticket_email(ticket, cfg)
    ticket.email_status = "sent" if success else "failed"
    ticket.email_error = error or ""
    await db.commit()
    await db.refresh(ticket)

    return {"id": ticket.id, "category": ticket.category, "email_status": ticket.email_status, "email_to": ticket.email_to}
