"""Visit stats endpoints — log page visits and query aggregate stats."""

import logging
from datetime import datetime, timedelta

from fastapi import APIRouter, Depends, Request
from sqlalchemy import func, select, text
from sqlalchemy.ext.asyncio import AsyncSession

from auth import get_current_user
from database import get_db
from models import VisitLog
from schemas import VisitLogRequest, VisitStatsResponse

log = logging.getLogger("stats")
router = APIRouter()


@router.post("/log", summary="记录一次页面访问（公开接口）")
async def log_visit(req: VisitLogRequest, request: Request, db: AsyncSession = Depends(get_db)):
    """Called by frontend pages on load to record a visit."""
    client_ip = request.client.host if request.client else ""
    user_agent = request.headers.get("user-agent", "")[:500]

    visit = VisitLog(
        platform=req.platform,
        path=req.path,
        ip=client_ip,
        user_agent=user_agent,
    )
    db.add(visit)
    await db.commit()
    return {"ok": True}


@router.get("/stats", response_model=VisitStatsResponse, summary="查询访问统计数据（需认证）")
async def get_stats(db: AsyncSession = Depends(get_db), _=Depends(get_current_user)):
    """Aggregate visit counts: total / today / daily trend."""
    today_start = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)

    # Total counts
    total = (await db.execute(select(func.count(VisitLog.id)))).scalar() or 0
    pc_total = (await db.execute(
        select(func.count(VisitLog.id)).where(VisitLog.platform == "pc")
    )).scalar() or 0
    mobile_total = (await db.execute(
        select(func.count(VisitLog.id)).where(VisitLog.platform == "mobile")
    )).scalar() or 0

    # Today counts
    today_total = (await db.execute(
        select(func.count(VisitLog.id)).where(VisitLog.created_at >= today_start)
    )).scalar() or 0
    today_pc = (await db.execute(
        select(func.count(VisitLog.id)).where(
            VisitLog.platform == "pc", VisitLog.created_at >= today_start
        )
    )).scalar() or 0
    today_mobile = (await db.execute(
        select(func.count(VisitLog.id)).where(
            VisitLog.platform == "mobile", VisitLog.created_at >= today_start
        )
    )).scalar() or 0

    # Daily trend (last 7 days)
    daily_trend = []
    for i in range(6, -1, -1):
        day = (today_start - timedelta(days=i)).date()
        day_start = datetime.combine(day, datetime.min.time())
        day_end = day_start + timedelta(days=1)

        day_pc = (await db.execute(
            select(func.count(VisitLog.id)).where(
                VisitLog.platform == "pc",
                VisitLog.created_at >= day_start,
                VisitLog.created_at < day_end,
            )
        )).scalar() or 0
        day_mobile = (await db.execute(
            select(func.count(VisitLog.id)).where(
                VisitLog.platform == "mobile",
                VisitLog.created_at >= day_start,
                VisitLog.created_at < day_end,
            )
        )).scalar() or 0

        daily_trend.append({
            "date": day.strftime("%m-%d"),
            "pc": day_pc,
            "mobile": day_mobile,
            "total": day_pc + day_mobile,
        })

    return VisitStatsResponse(
        total=total,
        pc_total=pc_total,
        mobile_total=mobile_total,
        today_total=today_total,
        today_pc=today_pc,
        today_mobile=today_mobile,
        daily_trend=daily_trend,
    )
