"""Email service - sends ticket notifications via SMTP."""
import asyncio
import logging
import smtplib
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from typing import Tuple

log = logging.getLogger("email")

UPLOAD_DIR = Path(__file__).resolve().parent.parent / "uploads"

CATEGORY_LABEL = {
    "desktop": "桌面运维",
    "network": "网络",
    "weak_current": "弱电",
    "unknown": "未分类",
}


def _build_message(ticket, cfg: dict) -> MIMEMultipart:
    """Build the email MIME message for a ticket."""
    msg = MIMEMultipart("related")
    sender = cfg.get("smtp_sender", "") or cfg.get("smtp_user", "")
    msg["From"] = sender
    msg["To"] = ticket.email_to
    msg["Subject"] = (
        f"【{CATEGORY_LABEL.get(ticket.category, '未分类')}】"
        f"{ticket.location or '未填写'} - {ticket.name} 报修"
    )

    # HTML body
    image_html = ""
    images = [p for p in (ticket.images or "").split(",") if p.strip()]
    for i, rel in enumerate(images, 1):
        image_html += f'<p style="margin:8px 0">附件 {i}:<br><img src="cid:img{i}" style="max-width:480px;border:1px solid #ddd;border-radius:6px"/></p>'

    html = f"""
    <div style="font-family: -apple-system, 'Segoe UI', Arial, sans-serif; max-width:640px; color:#222; line-height:1.6">
      <h2 style="color:#1a1b1e; border-bottom:2px solid #1677ff; padding-bottom:8px">
        新工单通知 - {CATEGORY_LABEL.get(ticket.category, '未分类')}
      </h2>
      <table style="width:100%; border-collapse:collapse; margin:16px 0">
        <tr><td style="padding:6px 0; color:#666; width:90px">姓名</td><td style="padding:6px 0"><b>{ticket.name}</b></td></tr>
        <tr><td style="padding:6px 0; color:#666">手机号</td><td style="padding:6px 0"><b>{ticket.phone}</b></td></tr>
        <tr><td style="padding:6px 0; color:#666">故障位置</td><td style="padding:6px 0">{ticket.location or '-'}</td></tr>
        <tr><td style="padding:6px 0; color:#666">故障分类</td><td style="padding:6px 0"><span style="background:#1677ff;color:#fff;padding:2px 8px;border-radius:4px">{CATEGORY_LABEL.get(ticket.category, '未分类')}</span></td></tr>
      </table>
      <h3 style="color:#1a1b1e; margin-top:20px">故障详情</h3>
      <div style="background:#f6f8fa; padding:12px 16px; border-left:3px solid #1677ff; border-radius:4px; white-space:pre-wrap">{ticket.description or '-'}</div>
      {f'<h3 style="color:#1a1b1e; margin-top:20px">现场图片</h3>{image_html}' if image_html else ''}
      <p style="color:#999; font-size:12px; margin-top:24px; border-top:1px solid #eee; padding-top:12px">
        工单号 #{ticket.id} · 来自「JC小智」AI 助手
      </p>
    </div>
    """
    msg.attach(MIMEText(html, "html", "utf-8"))

    # Attach images inline
    for i, rel in enumerate(images, 1):
        full = UPLOAD_DIR / rel
        if not full.exists():
            continue
        try:
            with open(full, "rb") as f:
                img = MIMEImage(f.read())
            img.add_header("Content-ID", f"<img{i}>")
            img.add_header("Content-Disposition", "inline", filename=full.name)
            msg.attach(img)
        except Exception as e:
            log.warning("Failed to attach image %s: %s", rel, e)

    return msg


async def send_ticket_email(ticket, cfg: dict) -> Tuple[bool, str]:
    """Send ticket notification email. Returns (success, error_message)."""
    host = cfg.get("smtp_host", "").strip()
    port = int(cfg.get("smtp_port", "465") or "465")
    user = cfg.get("smtp_user", "").strip()
    password = cfg.get("smtp_password", "").strip()
    sender = cfg.get("smtp_sender", "").strip() or user

    if not host or not user or not password:
        return False, "SMTP 未配置（host/user/password 必填）"

    if not ticket.email_to:
        return False, "工单未指定收件邮箱"

    # Support multiple recipients: comma-separated list (e.g. "a@x.com,b@y.com")
    recipients = [e.strip() for e in (ticket.email_to or "").split(",") if e.strip()]
    if not recipients:
        return False, "工单未指定有效收件邮箱"

    msg = _build_message(ticket, cfg)
    # Override From header with sender if specified
    if sender:
        msg["From"] = sender

    def _do_send() -> Tuple[bool, str]:
        try:
            if port == 465:
                with smtplib.SMTP_SSL(host, port, timeout=15) as s:
                    s.login(user, password)
                    s.sendmail(sender or user, recipients, msg.as_string())
            else:
                with smtplib.SMTP(host, port, timeout=15) as s:
                    s.starttls()
                    s.login(user, password)
                    s.sendmail(sender or user, recipients, msg.as_string())
            return True, ""
        except Exception as e:
            return False, f"{type(e).__name__}: {e}"

    success, err = await asyncio.to_thread(_do_send)
    if success:
        log.info("Email sent: ticket #%s -> %s", ticket.id, recipients)
    else:
        log.error("Email failed: ticket #%s -> %s: %s", ticket.id, recipients, err)
    return success, err
