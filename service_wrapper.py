#!/usr/bin/env python
# -*- coding: gbk -*-

import win32serviceutil
import win32service
import win32event
import servicemanager
import socket
import sys
import os
from waitress import serve
import logging

# 配置日志
logging.basicConfig(
    filename='C:\\Windows\\Temp\\it_service.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

# 确保Flask应用可以正确导入
# 假设您的主应用文件名为app.py，根据实际情况修改
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from app import app  # 从您的主文件导入Flask应用

class ITService(win32serviceutil.ServiceFramework):
    _svc_name_ = "IT运维服务系统"  # 服务名称
    _svc_display_name_ = "IT运维服务系统"  # 服务显示名称
    _svc_description_ = "基于Flask的IT运维服务工单系统"  # 服务描述

    def __init__(self, args):
        win32serviceutil.ServiceFramework.__init__(self, args)
        self.hWaitStop = win32event.CreateEvent(None, 0, 0, None)
        socket.setdefaulttimeout(60)
        self.is_running = True

    def SvcStop(self):
        """服务停止时调用"""
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        win32event.SetEvent(self.hWaitStop)
        self.is_running = False
        logging.info("服务停止请求已接收")

    def SvcDoRun(self):
        """服务启动时调用"""
        self.ReportServiceStatus(win32service.SERVICE_START_PENDING)
        self.ReportServiceStatus(win32service.SERVICE_RUNNING)
        servicemanager.LogMsg(
            servicemanager.EVENTLOG_INFORMATION_TYPE,
            servicemanager.PYS_SERVICE_STARTED,
            (self._svc_name_, '')
        )
        logging.info("IT运维服务系统已启动")
        self.main()

    def main(self):
        """服务主逻辑"""
        try:
            # 确保数据库路径正确
            basedir = os.path.dirname(os.path.abspath(__file__))
            db_path = os.path.join(basedir, 'site.db')
            app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
            
            # 启动服务
            serve(app, host='0.0.0.0', port=8080)
        except Exception as e:
            logging.error(f"服务运行错误: {str(e)}")
            self.SvcStop()

if __name__ == '__main__':
    if len(sys.argv) == 1:
        servicemanager.Initialize()
        servicemanager.PrepareToHostSingle(ITService)
        servicemanager.StartServiceCtrlDispatcher()
    else:
        win32serviceutil.HandleCommandLine(ITService)