# JC小智 · AI 智能对话助手

> 面向企业内部的一站式 AI 智能助手：知识库问答 + 故障报修工单 + 在线办公工具入口。

## 项目简介

JC小智 是部署在企业内网的 AI 对话助手系统，为员工提供：

- **AI 知识库问答** — 基于企业知识库的智能问答，覆盖食堂菜单、制度流程、IT 支持等场景
- **故障报修工单** — 对话式提交工单，AI 自动分类（桌面/网络/弱电），邮件自动派单到对应负责人
- **在线办公工具入口** — PDF 编辑、CAD 查看、思维导图/白板等网页工具直达
- **管理后台** — 工单管理、访问统计、系统配置（SMTP/大模型/收件箱）

## 技术架构

| 层 | 技术 | 说明 |
|----|------|------|
| 用户前端 | Next.js 静态导出 + 原生 JS | 桌面端 `index.html` + 移动端 `m.html`（UA 自动切换） |
| 对话面板 | 原生 JS + SSE 流式 | 无框架，轻量实现流式对话与工单流程 |
| 后端 | FastAPI + SQLAlchemy async | Python 3.10+，端口 8000 |
| 数据库 | SQLite | 工单、会话、配置、访问统计 |
| 管理后台 | React 18 + Vite + Ant Design 5 | 独立 SPA，构建产物 `admin-frontend/dist/` |
| 知识库 | Dify + Weaviate 向量库 | 检索增强生成（RAG） |

```
用户前端 (index.html / m.html)
        │  SSE 流式
        ▼
FastAPI 后端 (backend/)
   ├── /api/chat/ask      对话流式问答（RAG 检索 → LLM 生成）
   ├── /api/chat/ticket   工单提交（AI 分类 → 邮件派单）
   ├── /api/config        系统配置管理（管理员）
   ├── /api/stats         访问统计
   └── /api/tickets       工单管理（管理员）
        │
        ├── Weaviate 向量库（知识检索）
        ├── LLM API（SiliconFlow 等 OpenAI 兼容接口）
        └── SMTP（工单邮件通知）
```

## 快速开始

### 环境要求

- Python 3.10+
- Node.js 18+（构建管理后台时需要）

### 启动

```bash
# 1. 初始化数据库（自动创建表 + 默认管理员 + 默认配置）
python3 backend/init_db.py

# 2. 构建管理后台（可选，已含 dist 则跳过）
cd admin-frontend && npm install && npm run build && cd ..

# 3. 启动后端服务
cd backend && python3 main.py
```

访问：
- 用户端：`http://your-server-ip:8000/`
- 管理后台：`http://your-server-ip:8000/admin/`

### 默认管理员

首次启动自动创建：`admin / <CHANGE_ME>`（**首次登录后请立即修改**）

## 核心功能

### 1. AI 对话与知识库问答

- 桌面端首页输入框 / 移动端页面均可发起对话
- 后端基于企业知识库做检索增强（RAG），流式返回回答
- 支持 Markdown 渲染、图片展示（工单附件、知识库图片）
- 大模型与知识库均可通过管理后台配置（支持 OpenAI 兼容接口）

### 2. 故障报修工单闭环

```
用户描述问题 → AI 自动分类（桌面/网络/弱电）→ 邮件派单 → 工单入库
    → 对话中询问是否解决 → 未解决可补充提交 → 管理员后台处理
```

- AI 根据故障描述自动归类并路由到对应负责人的收件箱
- 每个故障类别支持配置**多个收件邮箱**（逗号分隔），工单同时通知所有邮箱
- 支持附件图片上传（本地存储 + 代理访问）
- 工单状态跟踪、邮件失败重发、Excel 导出

### 3. 管理后台

| 模块 | 功能 |
|------|------|
| 访问统计 | 用户端访问量、平台分布（桌面/移动） |
| 工单管理 | 工单列表、详情、重发邮件、Excel 导出 |
| 系统设置 | 大模型（LLM）配置、Dify 知识库配置、SMTP 邮件配置、各故障类别收件箱配置 |

## 项目结构

```
├── index.html              # 桌面端首页（Next.js 静态导出）
├── m.html                  # 移动端页面（独立单页应用）
├── chat.html               # 对话页
├── guide.html              # 使用指南
├── backend/
│   ├── main.py             # FastAPI 入口
│   ├── init_db.py          # 数据库初始化与种子数据
│   ├── models.py           # SQLAlchemy 模型
│   ├── schemas.py          # Pydantic 模型
│   ├── routers/            # API 路由（chat/tickets/config/stats/admin_auth）
│   └── services/           # 业务逻辑（classifier/dify_service/email_service）
├── admin-frontend/         # 管理后台（React + Vite + Ant Design）
└── _next/                  # Next.js 静态资源
```

## 配置说明

所有配置在管理后台「系统设置」中维护（存于数据库 `system_config` 表）：

| 配置项 | 说明 |
|--------|------|
| `llm_base_url` / `llm_api_key` / `llm_model` | 大模型 API（OpenAI 兼容） |
| `dify_base_url` / `dify_api_key` | Dify 知识库服务 |
| `smtp_host` / `smtp_port` / `smtp_user` / `smtp_password` | SMTP 发信配置 |
| `email_desktop` / `email_network` / `email_weak_current` | 各故障类别收件箱（**支持多个邮箱，逗号分隔**） |

## 数据隐私

- 数据库、环境变量（`.env`）、上传附件、日志文件**不纳入版本控制**
- 部署时请自行配置：大模型密钥、SMTP 授权码、Dify/Weaviate API Key、管理员密码
- 本项目默认面向企业内网部署，请勿直接暴露公网

## License

Internal use only.
