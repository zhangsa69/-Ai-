import os
import sys
import subprocess
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent

def run_cmd(cmd, cwd=None):
    print(f"\n>>> Running: {cmd} (in {cwd or PROJECT_ROOT})")
    # On Windows, shell=True is required to invoke npm and python correctly in all shells
    res = subprocess.run(cmd, shell=True, cwd=cwd)
    if res.returncode != 0:
        print(f"\n[Error] Command failed with exit code {res.returncode}")
        sys.exit(res.returncode)

def main():
    print("=" * 60)
    print(" JC小智 · AI 智能对话助手 - 一键集成启动器")
    print("=" * 60)

    # 1. Initialize and seed SQLite database
    print("\n[1/3] 初始化/同步 SQLite 数据库...")
    init_db_script = PROJECT_ROOT / "backend" / "init_db.py"
    if not init_db_script.exists():
        print(f"[Error] 数据库初始化脚本未找到: {init_db_script}")
        sys.exit(1)
    run_cmd(f'"{sys.executable}" "{init_db_script}"')

    # 2. Check and build admin panel
    print("\n[2/3] 检查并构建管理后台 React SPA...")
    admin_dir = PROJECT_ROOT / "admin-frontend"
    admin_dist = admin_dir / "dist"
    
    if not admin_dir.exists():
        print(f"[Warning] admin-frontend 目录不存在，将跳过前端托管。")
    else:
        if not admin_dist.exists():
            print("管理后台编译产物 dist/ 不存在，开始自动打包...")
            if not (admin_dir / "node_modules").exists():
                print("未检测到 node_modules，开始安装前端依赖包...")
                run_cmd("npm install", cwd=admin_dir)
            print("开始执行打包构建...")
            run_cmd("npm run build", cwd=admin_dir)
        else:
            print("管理后台已编译，将直接托管 `admin-frontend/dist/`。")

    # 3. Start FastAPI server
    print("\n[3/3] 启动 FastAPI 后端服务...")
    backend_dir = PROJECT_ROOT / "backend"
    run_cmd(f'"{sys.executable}" main.py', cwd=backend_dir)

if __name__ == "__main__":
    main()
