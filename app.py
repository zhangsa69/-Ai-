from flask import Flask, render_template, request, redirect, url_for, flash, send_file
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import pandas as pd
import asyncio
import aiohttp
from concurrent.futures import ThreadPoolExecutor
import atexit
import secrets
from werkzeug.utils import secure_filename

# 初始化Flask应用
app = Flask(__name__)
app.secret_key = secrets.token_hex(16)  # 安全的随机密钥

# 配置数据库
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# 登录管理
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
login_manager.session_protection = 'strong'  # 增强会话保护

# 创建全局线程池
executor = ThreadPoolExecutor(max_workers=4)


# 注册应用退出时的清理函数
def shutdown_executor():
    executor.shutdown(wait=False)


atexit.register(shutdown_executor)


# 数据库模型
class FaultCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    contact_email = db.Column(db.String(120), nullable=False)

    def __repr__(self):
        return f"FaultCategory('{self.name}', '{self.contact_email}')"


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"


# 创建数据库表并初始化故障类别
with app.app_context():
    db.create_all()
    # 添加默认管理员账户
    if not User.query.filter_by(username='zhangsa').first():
        hashed_password = generate_password_hash('hbjc@123')
        admin_user = User(username='zhangsa', password=hashed_password)
        db.session.add(admin_user)
        db.session.commit()

    # 初始化故障类别（仅当表为空时）
    if not FaultCategory.query.first():
        initial_categories = [
            {"name": "电脑或打印机故障", "contact_email": "377409755@qq.com"},
            {"name": "网络故障", "contact_email": "377409755@qq.com"},
            {"name": "弱电故障", "contact_email": "377409755@qq.com"},
            {"name": "ERP系统", "contact_email": "377409755@qq.com"},
            {"name": "WMS系统", "contact_email": "377409755@qq.com"},
            {"name": "MES系统", "contact_email": "377409755@qq.com"},
            {"name": "MPM系统", "contact_email": "377409755@qq.com"},
            {"name": "PLM系统", "contact_email": "377409755@qq.com"},
            {"name": "OA系统", "contact_email": "377409755@qq.com"},
            {"name": "邮箱系统", "contact_email": "377409755@qq.com"},
        ]
        for category in initial_categories:
            new_category = FaultCategory(name=category["name"], contact_email=category["contact_email"])
            db.session.add(new_category)
        db.session.commit()


# 用户加载函数
@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))  # 使用 Session.get 替代 Query.get


# 获取当前文件所在目录
current_directory = os.path.dirname(os.path.realpath(__file__))

# Excel文件的绝对路径
excel_file_path = r'C:\yunwei\baoxiu.xlsx'

# 邮箱配置
email_config = {
    'sender_email': 'ityunwei2023@163.com',
    'sender_password': 'LAPIIDBGKCXOHKTI',
    'receiver_email': 'ityunwei_back@163.com',
    'smtp_server': 'smtp.163.com',
    'smtp_port': 465
}

# 硅基流动API配置
AI_API_CONFIG = {
    'api_url': 'https://api.siliconflow.cn/v1/chat/completions',
    'api_key': 'sk-bjoqalsawembeucnuebgtrwqcuivwkssxkiabmkdanarndfe',
    'timeout': 60
}

UPLOAD_FOLDER = os.path.join('static', 'uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'}
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ===== 工单数据辅助函数 =====
REQUIRED_COLUMNS = ['Timestamp', 'Description', 'Name', 'Phone', 'Category', 'department', 'Photos', '是否解决', '维修备注']

def ensure_excel_schema():
    """确保Excel存在并包含所需列，缺失列将补齐。"""
    try:
        df = pd.read_excel(excel_file_path, engine='openpyxl')
        changed = False
        for col in REQUIRED_COLUMNS:
            if col not in df.columns:
                if col == '是否解决':
                    df[col] = '待解决'
                elif col == '维修备注':  # === 新增这行 ===
                    df[col] = ''  # === 新增这行 ===
                else:
                    df[col] = ''
                changed = True
        if changed:
            df.to_excel(excel_file_path, index=False)
    except FileNotFoundError:
        # 创建空表并写入表头
        df = pd.DataFrame(columns=REQUIRED_COLUMNS)
        df.to_excel(excel_file_path, index=False)


def get_recent_events(limit: int = 10):
    """读取最近的工单事件，按Timestamp从新到旧排序，返回前limit条。"""
    ensure_excel_schema()
    try:
        df = pd.read_excel(excel_file_path, engine='openpyxl')
        # 确保必要列存在
        cols = ['Timestamp', 'Description', 'Name', 'department', 'Category', '是否解决']
        for c in cols:
            if c not in df.columns:
                df[c] = ''
        # 解析时间，容错并排序（NaT放最后）
        df['TimestampParsed'] = pd.to_datetime(df['Timestamp'], errors='coerce')
        df = df.sort_values('TimestampParsed', ascending=False, na_position='last').reset_index(drop=True)
        # 取前limit条并构建返回数据
        df_top = df.head(limit)
        events = []
        for _, row in df_top.iterrows():
            # 格式化显示时间
            ts_display = ''
            if pd.notnull(row['TimestampParsed']):
                try:
                    ts_display = row['TimestampParsed'].strftime('%Y-%m-%d %H:%M:%S')
                except Exception:
                    ts_display = str(row['Timestamp']) if pd.notnull(row['Timestamp']) else ''
            else:
                ts_display = str(row['Timestamp']) if pd.notnull(row['Timestamp']) else ''
            events.append({
                'timestamp': ts_display,
                'timestamp_raw': str(row['Timestamp']) if pd.notnull(row['Timestamp']) else '',
                'description': str(row['Description']) if pd.notnull(row['Description']) else '',
                'name': str(row['Name']) if pd.notnull(row['Name']) else '',
                'department': str(row['department']) if pd.notnull(row['department']) else '',
                'category': str(row['Category']) if pd.notnull(row['Category']) else '',
                'status': str(row['是否解决']) if pd.notnull(row['是否解决']) else '待解决'
            })
        return events
    except Exception as e:
        print(f"读取工单事件失败: {e}")
        return []


# 登录路由
@app.route('/login', methods=['GET', 'POST'])
def login():
    print(f"Accessing /login, authenticated: {current_user.is_authenticated}")  # 调试日志
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()

        print(f"Login attempt: username={username}")  # 调试日志
        if user and check_password_hash(user.password, password):
            login_user(user)
            next_page = request.args.get('next')
            print(f"Login successful, next_page: {next_page}")  # 调试日志
            # 验证 next_page 是否安全，避免跳转到不存在的端点
            try:
                if next_page:
                    from urllib.parse import urlparse, urljoin
                    # 确保 next_page 是相对路径且有效
                    parsed = urlparse(next_page)
                    if not parsed.netloc and not parsed.scheme:  # 相对路径
                        return redirect(urljoin(request.url_root, next_page))
                return redirect(url_for('manage_fault_categories'))
            except BuildError as e:
                print(f"BuildError on redirect: {str(e)}")  # 调试日志
                flash('跳转目标无效，重定向到管理页面', 'warning')
                return redirect(url_for('manage_fault_categories'))
        else:
            flash('登录失败，请检查用户名和密码', 'danger')
            print("Login failed: invalid credentials")  # 调试日志

    return render_template('login.html')

@app.route('/export_excel')
@login_required
def export_excel():
    try:
        # 导出文件，文件名包含当前日期，例如: baoxiu_20241126.xlsx
        filename = f"baoxiu_{datetime.now().strftime('%Y%m%d')}.xlsx"
        return send_file(excel_file_path, as_attachment=True, download_name=filename)
    except Exception as e:
        print(f"导出失败: {e}")
        flash('导出文件失败，请检查服务器日志', 'danger')
        return redirect(url_for('manage_fault_categories'))

# 登出路由
@app.route('/logout')
@login_required
def logout():
    logout_user()
    print("User logged out")  # 调试日志
    return redirect(url_for('login'))


# AI建议函数
async def get_ai_advice(description, category):
    """调用硅基流动API获取维修建议"""
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {AI_API_CONFIG['api_key']}"
    }

    prompt = f"""你是一名专业的IT运维工程师。请根据以下故障信息提供维修建议：

    故障类别: {category}
    故障描述: {description}

    请提供:
    1. 可能的故障原因分析
    2. 详细的维修步骤
    3. 需要的工具或备件
    4. 注意事项

    用中文回答，内容要专业、详细但简洁。"""

    data = {
        "model": "Qwen/Qwen2.5-7B-Instruct",
        "messages": [
            {"role": "system", "content": "你是一名专业的IT运维工程师，负责提供详细的故障维修建议。"},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7,
        "max_tokens": 4096
    }

    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(
                    AI_API_CONFIG['api_url'],
                    headers=headers,
                    json=data,
                    timeout=AI_API_CONFIG['timeout']
            ) as response:
                if response.status == 200:
                    result = await response.json()
                    return result['choices'][0]['message']['content']
                else:
                    error = await response.text()
                    print(f"AI API Error: {error}")
                    return f"获取AI建议失败: {error}"
    except asyncio.TimeoutError:
        return "获取AI建议超时(60秒)，请人工处理"
    except Exception as e:
        return f"获取AI建议时发生错误: {str(e)}"


# 后台异步处理保存数据和发送邮件
def async_save_and_send(description, name, phone, category, department, photos_str=None, host=None):
    """后台异步处理保存数据和发送邮件"""
    with app.app_context():  # 添加应用上下文
        try:
            print(f"Starting async_save_and_send: category={category}")  # 调试日志
            # 保存到Excel
            now = datetime.now()
            timestamp = now.strftime("%Y-%m-%d %H:%M:%S")
            df = pd.DataFrame({
                'Timestamp': [timestamp],
                'Description': [description],
                'Name': [name],
                'Phone': [phone],
                'Category': [category],
                'department': [department],
                'Photos': [photos_str or ''],
                '是否解决': ['待解决']
            })

            try:
                ensure_excel_schema()
                existing_data = pd.read_excel(excel_file_path, engine='openpyxl')
                df = pd.concat([existing_data, df], ignore_index=True)
            except FileNotFoundError:
                pass

            df.to_excel(excel_file_path, index=False)
            print("Excel saved successfully")  # 调试日志

            # 获取AI建议
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
            ai_advice = loop.run_until_complete(get_ai_advice(description, category))
            loop.close()
            print("AI advice retrieved")  # 调试日志

            # 发送邮件
            send_email(category, description, name, phone, department, ai_advice, photos_str, host)
            print("Email sent successfully")  # 调试日志
        except Exception as e:
            print(f"后台任务处理失败: {str(e)}")


# 发送邮件通知
def send_email(category, description, name, phone, department, ai_advice, photos_str=None, host=None):
    """发送邮件通知，支持图片缩略图和附件"""
    print(f"Sending email for category: {category}")  # 调试日志
    # 从数据库获取联系人邮箱
    fault_category = FaultCategory.query.filter_by(name=category).first()
    if fault_category:
        receiver_email = fault_category.contact_email
    else:
        receiver_email = '377409755@qq.com'
    print(f"Receiver email: {receiver_email}")  # 调试日志

    sender_email = email_config['sender_email']
    sender_password = email_config['sender_password']

    # 构造图片缩略图HTML
    img_html = ''
    attachments = []
    if photos_str and host:
        filenames = [fn for fn in photos_str.split(',') if fn.strip()]
        for fn in filenames:
            img_url = f"http://{host}/static/uploads/{fn}"
            img_html += f'<div style="display:inline-block;margin:4px;"><img src="{img_url}" style="width:100px;height:100px;object-fit:cover;border-radius:8px;border:1.5px solid #00b4ff;"></div>'
            attachments.append(os.path.join(UPLOAD_FOLDER, fn))
    elif photos_str:
        filenames = [fn for fn in photos_str.split(',') if fn.strip()]
        for fn in filenames:
            img_html += f'<div style="display:inline-block;margin:4px;"><span style="color:#888">图片：{fn}</span></div>'
            attachments.append(os.path.join(UPLOAD_FOLDER, fn))

    subject = '新工单通知 - 含AI维修建议'
    body_html = f"""
    <p>您有新的工单，请注意查收！</p>
    <p><b>详细信息：</b><br>
    故障描述：{description}<br>
    姓名：{name}<br>
    电话：{phone}<br>
    故障类别：{category}<br>
    部门：{department}</p>
    <p><b>上传照片：</b><br>{img_html if img_html else '无'}</p>
    <p><b>AI维修建议：</b><br>{ai_advice}</p>
    """

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = receiver_email
    message['Subject'] = subject

    message.attach(MIMEText(body_html, 'html', 'utf-8'))

    # 附加Excel
    with open(excel_file_path, 'rb') as attachment:
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(attachment.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', 'attachment; filename=baoxiu.xlsx')
        message.attach(part)

    # 附加图片
    for img_path in attachments:
        try:
            with open(img_path, 'rb') as img_file:
                img_part = MIMEBase('application', 'octet-stream')
                img_part.set_payload(img_file.read())
                encoders.encode_base64(img_part)
                img_part.add_header('Content-Disposition', f'attachment; filename={os.path.basename(img_path)}')
                message.attach(img_part)
        except Exception as e:
            print(f"图片附件失败: {img_path}, 错误: {e}")

    try:
        with smtplib.SMTP_SSL(email_config['smtp_server'], email_config['smtp_port']) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, message.as_string())
    except Exception as e:
        print(f"邮件发送失败: {str(e)}")
        raise  # 抛出异常以便 async_save_and_send 捕获


# 前端路由
@app.route('/')
def index():
    categories = FaultCategory.query.all()
    recent_events = get_recent_events(10)

    # === 新增：计算已解决工单总数 ===
    base_count = 0  # 您的基础历史数据
    resolved_count = base_count

    try:
        ensure_excel_schema()
        # 读取Excel文件
        df = pd.read_excel(excel_file_path, engine='openpyxl')

        # 统计 '是否解决' 列中值为 '已解决' 的行数
        if '是否解决' in df.columns:
            # 过滤出已解决的工单
            real_resolved = len(df[df['是否解决'] == '已解决'])
            resolved_count = base_count + real_resolved

    except Exception as e:
        print(f"统计工单数量失败: {e}")
        # 如果出错，至少显示基础数值
        resolved_count = base_count
    # ===============================

    # 将 resolved_count 传递给模板
    return render_template('index.html',
                           categories=categories,
                           recent_events=recent_events,
                           resolved_count=resolved_count)


@app.route('/success')
def success():
    return render_template('success.html')


@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        description = request.form['description']
        name = request.form.get('name', '')
        phone = request.form.get('phone', '')
        category = request.form['category']
        department = request.form.get('department', '')
        print(f"Submitting ticket: category={category}, description={description}")  # 调试日志

        # 处理图片上传
        photos = request.files.getlist('photos')
        saved_filenames = []
        for photo in photos:
            if photo and allowed_file(photo.filename):
                filename = datetime.now().strftime('%Y%m%d%H%M%S%f_') + secure_filename(photo.filename)
                save_path = os.path.join(UPLOAD_FOLDER, filename)
                photo.save(save_path)
                saved_filenames.append(filename)
        photos_str = ','.join(saved_filenames)

        host = request.host  # 取出host

        # 提交到线程池异步处理
        executor.submit(
            async_save_and_send,
            description, name, phone, category, department, photos_str, host
        )

    return redirect('/success')


@app.route('/try_ai')
def try_ai():
    return redirect("http://10.120.65.148/chat/OCeSxdJSuLh6inAK", code=302)


# 管理故障类别路由
@app.route('/manage_fault_categories', methods=['GET', 'POST'])
@login_required
def manage_fault_categories():
    print(f"Accessing /manage_fault_categories, authenticated: {current_user.is_authenticated}")  # 调试日志
    if request.method == 'POST':
        action = request.form.get('action')

        if action == 'add':
            name = request.form.get('name').strip()
            contact_email = request.form.get('contact_email').strip()

            # 调试日志
            print(f"Adding category: name={name}, email={contact_email}")

            # 验证输入
            if not name or not contact_email:
                flash('请填写所有必填字段', 'danger')
            elif FaultCategory.query.filter_by(name=name).first():
                flash('该故障类别已存在', 'danger')
            else:
                # 添加新故障类别
                new_category = FaultCategory(name=name, contact_email=contact_email)
                db.session.add(new_category)
                db.session.commit()
                flash('故障类别添加成功', 'success')

        elif action == 'edit':
            category_id = request.form.get('category_id')
            category = FaultCategory.query.get_or_404(category_id)
            return render_template('edit_fault_category.html', category=category)

        elif action == 'update':
            category_id = request.form.get('category_id')
            name = request.form.get('name').strip()
            contact_email = request.form.get('contact_email').strip()
            category = FaultCategory.query.get_or_404(category_id)

            # 调试日志
            print(f"Updating category: id={category_id}, name={name}, email={contact_email}")

            # 验证输入
            if not name or not contact_email:
                flash('请填写所有必填字段', 'danger')
            elif FaultCategory.query.filter_by(name=name).filter(FaultCategory.id != category_id).first():
                flash('该故障类别名称已存在', 'danger')
            else:
                # 更新故障类别
                category.name = name
                category.contact_email = contact_email
                db.session.commit()
                flash('故障类别更新成功', 'success')

        elif action == 'delete':
            category_id = request.form.get('category_id')
            category = FaultCategory.query.get_or_404(category_id)
            db.session.delete(category)
            db.session.commit()
            flash('故障类别删除成功', 'success')

        return redirect(url_for('manage_fault_categories'))

    # GET 请求：显示所有故障类别 + 最近事件
    categories = FaultCategory.query.all()
    recent_events = get_recent_events(10)
    return render_template('manage_fault_categories.html', categories=categories, recent_events=recent_events)


# 编辑故障类别页面
@app.route('/edit_fault_category/<int:category_id>', methods=['GET', 'POST'])
@login_required
def edit_fault_category(category_id):
    category = FaultCategory.query.get_or_404(category_id)
    if request.method == 'POST':
        # 直接调用 manage_fault_categories 的 update 逻辑
        return redirect(url_for('manage_fault_categories'))
    return render_template('edit_fault_category.html', category=category)


@app.route('/resolve_ticket', methods=['POST'])
@login_required
def resolve_ticket():
    ts = request.form.get('timestamp', '')
    name = request.form.get('name', '')
    description = request.form.get('description', '')
    remarks = request.form.get('remarks', '')  # === 新增：获取备注 ===

    try:
        ensure_excel_schema()
        df = pd.read_excel(excel_file_path, engine='openpyxl')
        mask = (df.get('Timestamp').astype(str) == str(ts)) & (df.get('Name').astype(str) == str(name)) & (df.get('Description').astype(str) == str(description))
        if mask.any():
            df.loc[mask, '是否解决'] = '已解决'
            df.loc[mask, '维修备注'] = remarks  # === 新增：保存备注 ===
            df.to_excel(excel_file_path, index=False)
            flash('已标记为已解决并保存备注', 'success')
        else:
            flash('未找到对应的事件记录', 'warning')
    except Exception as e:
        print(f"标记已解决失败: {e}")
        flash('标记失败，请稍后再试', 'danger')
    return redirect(url_for('manage_fault_categories'))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)