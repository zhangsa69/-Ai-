"""Application configuration."""
from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict


# Project root (one level up from backend/)
PROJECT_ROOT = Path(__file__).resolve().parent.parent
BACKEND_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = BACKEND_DIR / "uploads"
DATA_DIR = BACKEND_DIR / "data"

# Ensure runtime dirs exist
UPLOAD_DIR.mkdir(exist_ok=True)
DATA_DIR.mkdir(exist_ok=True)


class Settings(BaseSettings):
    """Application settings loaded from environment or defaults."""

    # Server
    host: str = "0.0.0.0"
    port: int = 8000

    # Database
    database_url: str = f"sqlite+aiosqlite:///{DATA_DIR / 'app.db'}"

    # JWT
    jwt_secret: str = "change-me-in-production-please-1234567890"
    jwt_algorithm: str = "HS256"
    jwt_expire_hours: int = 24

    # Default admin (used by init_db)
    default_admin_username: str = "admin"
    default_admin_password: str = "<CHANGE_ME>"

    # Upload
    max_upload_size_mb: int = 10

    # Frontend static
    project_root: str = str(PROJECT_ROOT)

    # Dify knowledge base
    dify_dataset_api_default: str = "/v1/datasets"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


settings = Settings()
