"""FastAPI application entry point."""
import logging
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles


class NoCacheStaticFiles(StaticFiles):
    """StaticFiles variant that forces no-cache so content edits are picked up immediately."""

    def file_response(self, full_path, stat_result, scope, status_code=200):
        resp = super().file_response(full_path, stat_result, scope, status_code)
        resp.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        resp.headers["Pragma"] = "no-cache"
        resp.headers["Expires"] = "0"
        return resp

from config import PROJECT_ROOT, settings
from database import init_db
from init_db import seed
from routers import admin_auth, chat, config as config_router, stats, tickets

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
log = logging.getLogger("app")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup/shutdown."""
    log.info("Initialising database...")
    await init_db()
    await seed()
    log.info("Database ready. Uploads dir: %s", settings.project_root)
    yield
    log.info("Shutting down.")


app = FastAPI(
    title="JC小智 · AI 智能对话助手 — 后台服务",
    description="""
## 📖 使用说明

这是**JC小智**的后台 API 服务。它负责：

- 💬 **智能对话**：接收用户提问，调用 Dify 知识库或大模型回答
- 🎫 **工单管理**：对话未解决时自动创建工单、分类、发邮件给运维
- ⚙️ **系统配置**：设置大模型、Dify、邮箱等参数
- 🔐 **管理员认证**：保护后台管理功能

### 🔑 如何开始使用？

1. 先在 **管理后台**（`/admin`）配置大模型或 Dify 的地址和密钥
2. 在**系统设置**页面点击「测试连通性」确认配置正确
3. 回到首页输入问题即可开始对话

### 🧪 如何测试接口？

1. 点开下方任意接口
2. 点击 `Try it out` 按钮
3. 填写参数（带 * 的是必填项）
4. 点击 `Execute` 发送请求
5. 查看下方的 `Responses` 查看返回结果

> 💡 **提示**：带 🔒 的接口需要先登录获取 token。
> 先执行 `POST /api/auth/login`，把返回的 token 复制下来，
> 点击页面右上角 `Authorize` 按钮粘贴进去，就能访问所有接口了。
""",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_tags=[
        {"name": "chat", "description": "💬 智能对话 — 用户提问、AI 回答、工单提交"},
        {"name": "tickets", "description": "🎫 工单管理 — 查看、筛选、导出、重发邮件（需要管理员登录）"},
        {"name": "auth", "description": "🔐 管理员认证 — 登录获取 Token"},
        {"name": "config", "description": "⚙️ 系统设置 — 配置大模型、Dify、邮箱等参数（需要管理员登录）"},
    ],
)

# CORS for the standalone admin SPA (it may run on a different port during dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
app.include_router(tickets.router, prefix="/api/tickets", tags=["tickets"])
app.include_router(admin_auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(config_router.router, prefix="/api/config", tags=["config"])

# Visit stats
app.include_router(stats.router, prefix="/api/visit", tags=["stats"])

# Static files
project_root = Path(settings.project_root)

# Serve uploads (fault images)
app.mount(
    "/uploads",
    StaticFiles(directory=str(project_root / "backend" / "uploads")),
    name="uploads",
)

# Serve top-level homepage assets
app.mount(
    "/_next",
    NoCacheStaticFiles(directory=str(project_root / "_next")),
    name="next",
)
app.mount(
    "/fonts",
    StaticFiles(directory=str(project_root / "fonts")),
    name="fonts",
)
app.mount(
    "/favicon_io",
    StaticFiles(directory=str(project_root / "favicon_io")),
    name="favicon_io",
)
app.mount(
    "/public",
    StaticFiles(directory=str(project_root / "public")),
    name="public",
)


# Serve the admin SPA (built React app)
admin_dist = project_root / "admin-frontend" / "dist"
if admin_dist.exists():
    app.mount(
        "/admin/assets",
        StaticFiles(directory=str(admin_dist / "assets")),
        name="admin-assets",
    )


@app.get("/admin", include_in_schema=False)
@app.get("/admin/{path:path}", include_in_schema=False)
async def serve_admin(path: str = ""):
    """Serve the admin SPA - all /admin/* paths return index.html (SPA routing)."""
    if not admin_dist.exists():
        return {"error": "Admin SPA not built. Run `npm run build` in admin-frontend/."}
    return FileResponse(admin_dist / "index.html")


# Catch-all for top-level static files (index.html, chat.html, ai.html, etc.)
@app.get("/", include_in_schema=False)
async def serve_index():
    resp = FileResponse(project_root / "index.html")
    resp.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    resp.headers["Pragma"] = "no-cache"
    resp.headers["Expires"] = "0"
    return resp


@app.get("/chat.html", include_in_schema=False)
async def serve_chat():
    return FileResponse(project_root / "chat.html")


@app.get("/{filename}.html", include_in_schema=False)
async def serve_html(filename: str):
    """Serve any other top-level HTML file (ai.html, pricing.html, etc.)."""
    f = project_root / f"{filename}.html"
    if f.exists():
        resp = FileResponse(f)
        resp.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        resp.headers["Pragma"] = "no-cache"
        resp.headers["Expires"] = "0"
        return resp
    return {"error": "Not found"}, 404


@app.get("/{filename}.gif", include_in_schema=False)
async def serve_gif(filename: str):
    """Serve GIF animation files from project root."""
    f = project_root / f"{filename}.gif"
    if f.exists():
        return FileResponse(f, media_type="image/gif")
    return {"error": "Not found"}, 404


@app.get("/health")
async def health():
    return {"status": "ok"}


# Serve Dify uploaded files (mounted from Docker volume)
dify_storage = Path("/home/zhangsa/dify/docker/volumes/app/storage")
if dify_storage.exists():
    app.mount("/dify-storage", StaticFiles(directory=str(dify_storage)), name="dify-storage")


@app.get("/proxy/dify-file/{file_id}")
async def proxy_dify_file(file_id: str):
    """代理 Dify 文件 — 查 DB 获取路径，本地读取."""
    import aiosqlite, subprocess
    from fastapi.responses import Response

    try:
        result = subprocess.run([
            "sg", "docker", "-c",
            f"docker exec docker_db_postgres_1 psql -U postgres -d dify -t -A -c \"SELECT name FROM upload_files WHERE id::text = '{file_id}'\""
        ], capture_output=True, text=True, timeout=5)
        file_name = result.stdout.strip()
        if file_name:
            host_path = dify_storage / file_name
            if host_path.exists():
                import mimetypes
                mime, _ = mimetypes.guess_type(str(host_path))
                return FileResponse(host_path, media_type=mime or "image/png")
    except Exception:
        pass
    return Response(status_code=404)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host=settings.host,
        port=settings.port,
        reload=False,
    )
