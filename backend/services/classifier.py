"""Fault classifier - uses LLM to determine the category from ticket text."""
import json
import logging
import re

from services.dify_service import LLMService

log = logging.getLogger("classifier")

CLASSIFY_PROMPT = """你是企业 IT 运维工单分类器。请根据工单内容判定故障分类，仅返回 JSON。

分类规则：
- desktop（桌面运维类）：电脑/打印机/显示器/办公软件/系统安装/账号密码/外设/投影仪/会议室设备 等
- network（网络类）：网络无法上网/Wi-Fi/VPN/路由器/交换机/丢包/网速慢/IP 冲突/DNS 等
- weak_current（弱电类）：门禁/监控/摄像头/对讲/广播/电话/布线/机柜/弱电井/光缆 等
- unknown：无法判定

要求：仅返回严格 JSON，不要任何解释、Markdown 代码块或多余文本。格式：
{{"category": "desktop" | "network" | "weak_current" | "unknown", "reason": "<简短原因>"}}

工单内容：
{description}"""


async def classify_ticket(text: str, cfg: dict) -> str:
    """Classify a fault into one of: desktop / network / weak_current / unknown."""
    base_url = cfg.get("llm_base_url", "").strip()
    api_key = cfg.get("llm_api_key", "").strip()
    model = cfg.get("llm_model", "gpt-4o-mini").strip() or "gpt-4o-mini"

    if not base_url or not api_key:
        return _rule_based_classify(text)

    try:
        llm = LLMService(base_url, api_key, model)
        raw = await llm.chat(
            messages=[
                {"role": "system", "content": "你是 IT 运维工单分类器。"},
                {"role": "user", "content": CLASSIFY_PROMPT.format(description=text[:2000])},
            ],
            temperature=0.1,
            max_tokens=120,
        )
        # Extract JSON from response
        m = re.search(r"\{[\s\S]*?\}", raw)
        if m:
            obj = json.loads(m.group(0))
            cat = obj.get("category", "unknown")
            if cat in ("desktop", "network", "weak_current"):
                return cat
    except Exception as e:
        log.warning("LLM classification failed, falling back to rule-based: %s", e)

    return _rule_based_classify(text)


def _rule_based_classify(text: str) -> str:
    """Keyword-based fallback classifier."""
    t = text.lower()
    desktop_kw = ["电脑", "笔记本", "台式", "打印机", "显示器", "office", "软件", "系统", "密码", "账号", "登录", "蓝屏", "死机", "键盘", "鼠标", "投影", "会议室", "外设", "u盘", "驱动"]
    network_kw = ["网络", "wifi", "wi-fi", "vpn", "路由", "交换", "丢包", "网速", "上网", "ip", "dns", "光纤", "光猫", "宽带", "无法访问", "断网"]
    weak_kw = ["门禁", "监控", "摄像头", "对讲", "广播", "电话", "布线", "机柜", "弱电", "光缆", "网线", "闸机", "人脸", "道闸"]

    if any(k in t for k in weak_kw):
        return "weak_current"
    if any(k in t for k in network_kw):
        return "network"
    if any(k in t for k in desktop_kw):
        return "desktop"
    return "unknown"
