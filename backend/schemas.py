"""Pydantic request/response schemas — 所有接口的输入输出定义"""

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field


# ============================================================
# 🔐 认证相关
# ============================================================

class LoginRequest(BaseModel):
    """管理员登录请求"""
    username: str = Field(..., description="管理员用户名", example="admin")
    password: str = Field(..., description="管理员密码", example="<CHANGE_ME>")


class LoginResponse(BaseModel):
    """登录成功后返回的 Token"""
    access_token: str = Field(..., description="JWT 访问令牌（复制这个值用于后续请求）")
    token_type: str = Field("bearer", description="令牌类型，固定为 bearer")
    expires_in: int = Field(..., description="令牌有效期（秒），默认 86400 = 24 小时")


# ============================================================
# ⚙️ 系统配置相关
# ============================================================

class ConfigItem(BaseModel):
    """单条系统配置"""
    key: str = Field(..., description="配置项的名称（英文 key）", example="llm_base_url")
    value: str = Field(..., description="配置项的值", example="https://api.openai.com/v1")
    description: str = Field("", description="配置项的说明文字", example="大模型 API 地址")


class ConfigUpdate(BaseModel):
    """批量修改系统配置"""
    items: List[ConfigItem] = Field(..., description="要修改的配置项列表，只传需要修改的即可")


class ConfigTestRequest(BaseModel):
    """连通性测试请求"""
    service: str = Field(
        ...,
        description='要测试的服务类型："llm"（大模型）或 "dify"（Dify 知识库）',
        example="dify",
    )


class ConfigTestResponse(BaseModel):
    """连通性测试结果"""
    success: bool = Field(..., description="是否连通成功")
    message: str = Field(..., description="测试结果说明")
    detail: Optional[str] = Field(None, description="失败时的详细错误信息")


# ============================================================
# 💬 对话相关
# ============================================================

class ChatAskRequest(BaseModel):
    """用户提问请求"""
    message: str = Field(..., description="用户输入的问题", example="我的电脑蓝屏了怎么办？")
    conversation_id: Optional[str] = Field(
        None,
        description="会话 ID。首次对话不传，后续对话传上次返回的 conversation_id 以保持上下文",
        example="conv_a1b2c3d4e5f6g7h8",
    )


class ChatTicketSubmit(BaseModel):
    """用户提交工单"""
    conversation_id: str = Field(..., description="对话会话 ID", example="conv_a1b2c3d4e5f6g7h8")
    name: str = Field(..., description="报修人姓名", example="张三")
    phone: str = Field(..., description="报修人手机号", example="13800138000")
    location: str = Field(..., description="故障发生位置", example="办公楼 3 层 301 会议室")
    description: str = Field(..., description="故障详细描述", example="投影仪无法开机，电源灯不亮")
    images: List[str] = Field(
        default_factory=list,
        description="上传的故障图片路径列表（先调上传接口得到路径后填入）",
        example=["uploads/conv_abc/img001.jpg"],
    )


# ============================================================
# 🎫 工单相关
# ============================================================

class TicketOut(BaseModel):
    """工单详情"""
    id: int = Field(..., description="工单编号")
    conversation_id: str = Field(..., description="关联的对话会话 ID")
    name: str = Field(..., description="报修人姓名")
    phone: str = Field(..., description="报修人手机号")
    location: str = Field(..., description="故障位置")
    description: str = Field(..., description="故障描述")
    images: List[str] = Field(..., description="故障图片路径列表")
    category: str = Field(
        ...,
        description="故障分类：desktop（桌面运维）/ network（网络）/ weak_current（弱电）/ unknown（未分类）",
    )
    email_status: str = Field(
        ...,
        description="邮件发送状态：pending（待发送）/ sent（已发送）/ failed（发送失败）",
    )
    email_to: str = Field(..., description="邮件收件人")
    email_error: str = Field(..., description="邮件发送失败时的错误信息")
    resend_count: int = Field(..., description="邮件重发次数")
    created_at: datetime = Field(..., description="工单创建时间")
    updated_at: datetime = Field(..., description="工单最后更新时间")

    class Config:
        from_attributes = True


class TicketListResponse(BaseModel):
    """工单列表（分页）"""
    total: int = Field(..., description="符合条件的工单总数")
    items: List[TicketOut] = Field(..., description="当前页的工单列表")


class TicketResendResponse(BaseModel):
    """重发邮件结果"""
    success: bool = Field(..., description="是否发送成功")
    message: str = Field(..., description="发送结果说明")
    email_status: str = Field(..., description="发送后的邮件状态")


class ImageUploadResponse(BaseModel):
    """图片上传结果"""
    url: str = Field(..., description="图片的访问 URL", example="/uploads/conv_abc/img001.jpg")
    filename: str = Field(..., description="图片在服务器上的文件名", example="conv_abc/img001.jpg")


# ============================================================
# 📊 访问统计相关
# ============================================================

class VisitLogRequest(BaseModel):
    """记录一次页面访问"""
    platform: str = Field(..., description="平台：pc 或 mobile", example="pc")
    path: str = Field("/", description="访问的页面路径", example="/chat.html")


class VisitStatsResponse(BaseModel):
    """访问统计数据"""
    total: int = Field(..., description="总访问次数")
    pc_total: int = Field(..., description="PC端总访问次数")
    mobile_total: int = Field(..., description="移动端总访问次数")
    today_total: int = Field(..., description="今日总访问次数")
    today_pc: int = Field(..., description="今日PC端访问次数")
    today_mobile: int = Field(..., description="今日移动端访问次数")
    daily_trend: list = Field(..., description="最近7天每日访问量 [{date, pc, mobile, total}]")
