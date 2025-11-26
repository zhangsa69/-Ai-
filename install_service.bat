@echo off
echo 正在安装IT运维服务系统...

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
echo 脚本目录: %SCRIPT_DIR%

REM 安装服务
%PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" install

if %errorlevel% neq 0 (
    echo 服务安装失败!
    goto :eof
)

echo 服务安装成功!
echo 正在启动服务...

%PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" start

if %errorlevel% neq 0 (
    echo 服务启动失败!
    goto :eof
)

echo 服务已成功启动!
echo.
echo 你可以通过以下方式访问应用:
echo http://服务器IP地址:8080
echo.
echo 如需停止服务，请运行:
echo %PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" stop
echo.
echo 如需卸载服务，请运行:
echo %PYTHON_PATH% "%SCRIPT_DIR%service_wrapper.py" remove

pause