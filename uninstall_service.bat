@echo off
echo 正在卸载IT运维服务系统...

REM 检查是否以管理员权限运行
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo 错误: 请以管理员权限运行此脚本!
    goto :eof
)

REM 获取Python解释器路径
for /f "usebackq tokens=*" %%a in (`where python`) do set PYTHON_PATH=%%a

echo Python路径: %PYTHON_PATH%

REM 获取当前脚本所在目录
set SCRIPT_DIR=%~dp0

REM 停止服务
%PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" stop

REM 卸载服务
%PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" remove

if %errorlevel% neq 0 (
    echo 服务卸载失败!
    goto :eof
)

echo 服务已成功卸载!
pause