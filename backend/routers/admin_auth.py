"""Admin login / authentication."""
from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from auth import (
    create_access_token,
    get_current_user,
    verify_password,
)
from config import settings
from database import get_db
from models import AdminUser
from schemas import LoginRequest, LoginResponse

router = APIRouter()


@router.post("/login", response_model=LoginResponse, summary="管理员登录", description="""
使用管理员账号和密码登录，成功后会返回一个 JWT Token（令牌）。

**如何使用返回的 Token：**
1. 复制返回结果中的 `access_token` 字段的值
2. 点击页面右上角的 🔒 **Authorize** 按钮
3. 在弹出的窗口中粘贴 token，点击 Authorize
4. 之后所有带 🔒 的接口都会自动带上这个 token，无需再次登录

> **默认账号：** admin / <CHANGE_ME>（首次启动时自动创建，请尽快修改密码）
""")
async def login(req: LoginRequest, db: AsyncSession = Depends(get_db)):
    """Authenticate admin and return a JWT access token."""
    result = await db.execute(select(AdminUser).where(AdminUser.username == req.username))
    user = result.scalar_one_or_none()
    if not user or not verify_password(req.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="用户名或密码错误",
        )
    user.last_login_at = datetime.utcnow()
    await db.commit()
    token = create_access_token(user.username)
    return LoginResponse(
        access_token=token,
        expires_in=settings.jwt_expire_hours * 3600,
    )


@router.get("/me", summary="查看当前登录用户", description="""
返回当前已登录管理员的信息（用户名、上次登录时间）。

> 🔒 需要管理员登录（可用于验证 Token 是否有效）
""")
async def me(current_user: AdminUser = Depends(get_current_user)):
    """Return current admin info (useful for the SPA to verify token)."""
    return {
        "id": current_user.id,
        "username": current_user.username,
        "last_login_at": current_user.last_login_at.isoformat() if current_user.last_login_at else None,
    }
