"""Initialize the database with default admin and config keys."""
import asyncio
import logging

from sqlalchemy import select

from auth import hash_password
from config import settings
from database import AsyncSessionLocal, init_db
from models import AdminUser, SystemConfig

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("init_db")


# Default system config keys & descriptions
DEFAULT_CONFIG = [
    ("llm_base_url", "", "大模型 API Base URL，例如 https://api.openai.com/v1"),
    ("llm_api_key", "", "大模型 API 密钥"),
    ("llm_model", "gpt-4o-mini", "大模型名称"),
    ("dify_base_url", "", "Dify 服务地址，例如 https://api.dify.ai"),
    ("dify_api_key", "", "Dify API 密钥"),
    ("dify_dataset_id", "", "Dify 知识库 Dataset ID（用于命中/未命中判定）"),
    ("smtp_host", "", "SMTP 服务器地址，例如 smtp.163.com"),
    ("smtp_port", "465", "SMTP 端口"),
    ("smtp_user", "", "SMTP 登录账号（发件邮箱）"),
    ("smtp_password", "", "SMTP 授权码/密码"),
    ("smtp_sender", "", "发件人显示名 <mail@example.com>"),
    ("email_desktop", "desktop@example.com", "桌面运维类收件邮箱"),
    ("email_network", "network@example.com", "网络类收件邮箱"),
    ("email_weak_current", "weakcurrent@example.com", "弱电类收件邮箱"),
]


async def seed():
    await init_db()
    async with AsyncSessionLocal() as session:
        # Seed default admin if not exists
        result = await session.execute(
            select(AdminUser).where(AdminUser.username == settings.default_admin_username)
        )
        admin = result.scalar_one_or_none()
        if not admin:
            admin = AdminUser(
                username=settings.default_admin_username,
                password_hash=hash_password(settings.default_admin_password),
            )
            session.add(admin)
            log.info(
                "Created default admin: %s / %s",
                settings.default_admin_username,
                settings.default_admin_password,
            )
        else:
            log.info("Default admin already exists")

        # Seed default config
        for key, value, desc in DEFAULT_CONFIG:
            result = await session.execute(
                select(SystemConfig).where(SystemConfig.key == key)
            )
            cfg = result.scalar_one_or_none()
            if not cfg:
                cfg = SystemConfig(key=key, value=value, description=desc)
                session.add(cfg)
        log.info("Seeded %d system config keys", len(DEFAULT_CONFIG))

        await session.commit()
    log.info("Database initialized successfully.")


if __name__ == "__main__":
    asyncio.run(seed())
