"""System configuration endpoints (LLM, Dify, SMTP)."""
import asyncio
import logging
from typing import Dict, List

import httpx
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from auth import get_current_user
from database import get_db
from models import AdminUser, SystemConfig
from schemas import (
    ConfigItem,
    ConfigTestRequest,
    ConfigTestResponse,
    ConfigUpdate,
)

log = logging.getLogger("config")
router = APIRouter()

# Keys whose values are sensitive and should be masked when returned
SENSITIVE_KEYS = {"llm_api_key", "dify_api_key", "smtp_password"}


def _mask(value: str) -> str:
    """Mask a secret value, preserving only the last 4 characters."""
    if not value:
        return ""
    if len(value) <= 4:
        return "****"
    return f"****{value[-4:]}"


async def _load_all(db: AsyncSession) -> Dict[str, SystemConfig]:
    result = await db.execute(select(SystemConfig))
    return {cfg.key: cfg for cfg in result.scalars().all()}


@router.get("", response_model=List[ConfigItem], summary="获取所有系统配置", description="""
查看当前所有的系统设置项。

> ⚠️ 出于安全考虑，敏感信息（API 密钥、邮箱密码）会显示为 `****xxxx` 脱敏格式，仅显示最后 4 位。

> 🔒 需要管理员登录
""")
async def get_all_configs(
    db: AsyncSession = Depends(get_db),
    _user: AdminUser = Depends(get_current_user),
):
    """Get all system config items (admin only). Sensitive values are masked."""
    cfgs = await _load_all(db)
    items: List[ConfigItem] = []
    for cfg in cfgs.values():
        value = _mask(cfg.value) if cfg.key in SENSITIVE_KEYS else cfg.value
        items.append(ConfigItem(key=cfg.key, value=value, description=cfg.description))
    items.sort(key=lambda x: x.key)
    return items


@router.put("", response_model=List[ConfigItem], summary="修改系统配置", description="""
批量修改系统设置。只需传你要修改的项，其他项保持不变。

**可配置的内容：**

| 配置项 | 说明 | 示例 |
|--------|------|------|
| `llm_base_url` | 大模型 API 地址 | `https://api.openai.com/v1` |
| `llm_api_key` | 大模型 API 密钥 | `sk-xxxxxxxx` |
| `llm_model` | 大模型名称 | `gpt-4o-mini` |
| `dify_base_url` | Dify 服务地址 | `http://your-server-ip`（不要加 /v1） |
| `dify_api_key` | Dify API 密钥 | `dataset-xxxxxxxx` |
| `smtp_host` | 发件邮箱服务器 | `smtp.163.com` |
| `smtp_port` | SMTP 端口 | `465`（SSL）或 `587`（TLS） |
| `smtp_user` | 发件邮箱账号 | `xxx@163.com` |
| `smtp_password` | 邮箱授权码 | （不是登录密码，是 SMTP 授权码） |
| `email_desktop` | 桌面运维收件邮箱（支持多个，逗号分隔） | `desktop@example.com` |
| `email_network` | 网络运维收件邮箱（支持多个，逗号分隔） | `network@example.com` |
| `email_weak_current` | 弱电运维收件邮箱（支持多个，逗号分隔） | `weakcurrent@example.com` |

> 💡 修改后需要点「测试连通性」验证是否配置正确。

> 🔒 需要管理员登录
""")
async def update_configs(
    payload: ConfigUpdate,
    db: AsyncSession = Depends(get_db),
    _user: AdminUser = Depends(get_current_user),
):
    """Update multiple config items at once.

    Items whose value looks like a masked value (`****...`) are left unchanged.
    """
    cfgs = await _load_all(db)
    for item in payload.items:
        # If client sends a masked value, do not overwrite
        if item.key in SENSITIVE_KEYS and item.value.startswith("****"):
            continue
        cfg = cfgs.get(item.key)
        if cfg:
            cfg.value = item.value
            if item.description:
                cfg.description = item.description
        else:
            db.add(SystemConfig(key=item.key, value=item.value, description=item.description))
    await db.commit()
    return await get_all_configs(db, _user)  # type: ignore[arg-type]


@router.post("/test", response_model=ConfigTestResponse, summary="测试服务连通性", description="""
测试已配置的大模型或 Dify 服务是否能正常连接。

**参数：**
- `service` — 要测试的服务：`"llm"`（大模型）或 `"dify"`（Dify 知识库）

**返回值：**
- `success: true` — 连通正常 ✅
- `success: false` — 连接失败，`message` 中会说明原因（地址错误、密钥无效、超时等）

> ⚠️ 测试前请先在「修改系统配置」中填好对应的地址和密钥！

> 🔒 需要管理员登录
""")
async def test_connectivity(
    req: ConfigTestRequest,
    db: AsyncSession = Depends(get_db),
    _user: AdminUser = Depends(get_current_user),
):
    """Test connectivity for either 'llm' or 'dify' based on saved config."""
    cfgs = await _load_all(db)
    cfg_map = {k: v.value for k, v in cfgs.items()}

    if req.service == "llm":
        base = cfg_map.get("llm_base_url", "").rstrip("/")
        key = cfg_map.get("llm_api_key", "")
        if not base or not key:
            return ConfigTestResponse(
                success=False,
                message="未配置 LLM Base URL 或 API Key",
            )
        try:
            async with httpx.AsyncClient(timeout=5.0) as client:
                r = await client.get(
                    f"{base}/models",
                    headers={"Authorization": f"Bearer {key}"},
                )
                if r.status_code == 200:
                    return ConfigTestResponse(
                        success=True, message="LLM 服务连通正常"
                    )
                return ConfigTestResponse(
                    success=False,
                    message=f"LLM 服务响应异常: HTTP {r.status_code}",
                    detail=r.text[:300],
                )
        except asyncio.TimeoutError:
            return ConfigTestResponse(success=False, message="LLM 服务连接超时")
        except Exception as e:
            return ConfigTestResponse(
                success=False, message=f"LLM 服务连接失败: {e}"
            )

    elif req.service == "dify":
        base = cfg_map.get("dify_base_url", "").rstrip("/")
        key = cfg_map.get("dify_api_key", "")
        if not base or not key:
            return ConfigTestResponse(
                success=False, message="未配置 Dify Base URL 或 API Key"
            )
        try:
            async with httpx.AsyncClient(timeout=5.0) as client:
                # 用 datasets 列表接口验证密钥有效性
                test_url = f"{base}/v1/datasets?page=1&limit=1"
                r = await client.get(test_url, headers={"Authorization": f"Bearer {key}"})
                if r.status_code == 200 or r.status_code == 400:
                    return ConfigTestResponse(success=True, message="Dify 服务连通正常")
                return ConfigTestResponse(
                    success=False,
                    message=f"Dify 服务响应异常: HTTP {r.status_code}",
                    detail=r.text[:300],
                )
        except asyncio.TimeoutError:
            return ConfigTestResponse(success=False, message="Dify 服务连接超时")
        except Exception as e:
            return ConfigTestResponse(
                success=False, message=f"Dify 服务连接失败: {e}"
            )

    else:
        raise HTTPException(status_code=400, detail=f"未知服务类型: {req.service}")
