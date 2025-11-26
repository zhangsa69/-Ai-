document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，开始初始化背景动画...'); // 调试信息

    // ==================== 星空背景动画 ====================
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('找不到canvas元素！');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('无法获取canvas上下文！');
        return;
    }

    console.log('Canvas初始化成功'); // 调试信息

    // 设置canvas大小为窗口大小
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // 初始化时设置canvas大小
    resizeCanvas();

    // 窗口大小改变时重新设置canvas大小
    window.addEventListener('resize', resizeCanvas);

    // 线条数组
    let lines = [];
    const lineCount = 60;
    const maxConnections = 3;
    const maxDistance = 150;

    // 线条类
    class Line {
        constructor() {
            this.reset();
            this.size = Math.random() * 2 + 1;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.connections = 0;
            this.hue = Math.floor(Math.random() * 60) + 180; // 蓝色调
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // 边界检测
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            // 随机改变方向
            if (Math.random() < 0.02) this.speedX = Math.random() * 2 - 1;
            if (Math.random() < 0.02) this.speedY = Math.random() * 2 - 1;

            this.connections = 0;
        }
    }

    // 创建线条
    for (let i = 0; i < lineCount; i++) {
        lines.push(new Line());
    }

    // 鼠标交互
    let mouseX = null;
    let mouseY = null;

    window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    window.addEventListener('mouseout', function() {
        mouseX = null;
        mouseY = null;
    });

    // 动画循环
    function animateBackground() {
        ctx.fillStyle = 'rgba(10, 10, 26, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 更新和绘制线条
        for (let i = 0; i < lines.length; i++) {
            lines[i].update();

            // 绘制点
            ctx.beginPath();
            ctx.arc(lines[i].x, lines[i].y, lines[i].size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${lines[i].hue}, 100%, 50%, 0.8)`;
            ctx.fill();

            // 鼠标交互 - 吸引附近的点
            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - lines[i].x;
                const dy = mouseY - lines[i].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    lines[i].x += dx * 0.0005;
                    lines[i].y += dy * 0.0005;
                }
            }

            // 绘制连接线
            for (let j = i + 1; j < lines.length; j++) {
                const dx = lines[i].x - lines[j].x;
                const dy = lines[i].y - lines[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance && lines[i].connections < maxConnections && lines[j].connections < maxConnections) {
                    ctx.beginPath();
                    ctx.moveTo(lines[i].x, lines[i].y);
                    ctx.lineTo(lines[j].x, lines[j].y);
                    ctx.strokeStyle = `hsla(${lines[i].hue}, 100%, 50%, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();

                    lines[i].connections++;
                    lines[j].connections++;
                }
            }
        }

        requestAnimationFrame(animateBackground);
    }

    // 启动背景动画
    animateBackground();
    console.log('背景动画启动成功'); // 调试信息

    // ==================== 已解决事件计数器功能 ====================
    // 获取计数器元素
    const resolvedCountEl = document.getElementById('resolvedCount');
    // 获取提交按钮
    const submitBtn = document.querySelector('.submit-btn');

    // 初始化计数器数值（从localStorage读取，若无则使用默认值605）
    if (resolvedCountEl) {
        let resolvedCount = parseInt(localStorage.getItem('resolvedEvents')) || 605;
        resolvedCountEl.textContent = resolvedCount;
        console.log('计数器初始化成功，当前值：', resolvedCount);

        // 为提交按钮添加点击事件监听器
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                // 数值累加
                resolvedCount += 1;
                // 更新本地存储
                localStorage.setItem('resolvedEvents', resolvedCount);
                // 更新显示并添加动画效果
                resolvedCountEl.style.transform = 'scale(1.3)';
                resolvedCountEl.textContent = resolvedCount;
                // 恢复原大小
                setTimeout(() => {
                    resolvedCountEl.style.transform = 'scale(1)';
                }, 300);
                console.log('计数器已更新，当前值：', resolvedCount);
            });
        } else {
            console.warn('未找到提交按钮，计数器累加功能无法启用');
        }
    } else {
        console.warn('未找到计数器元素，计数器功能无法初始化');
    }
});
