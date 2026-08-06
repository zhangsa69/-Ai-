import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import api from '../api';

// Ant Design 5 dark algorithm is applied globally, 
// so we only need to take care of the layout positioning.
const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', values);
      const { access_token } = response.data;
      localStorage.setItem('admin_token', access_token);
      message.success('登录成功！');
      navigate('/admin/tickets');
    } catch (error: any) {
      const errorMsg = error.response?.data?.detail || '登录失败，请检查用户名或密码';
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#1a1b1e',
      backgroundImage: 'radial-gradient(circle at center, rgba(22,119,255,0.06) 0%, rgba(12,13,17,0) 70%)',
    }}>
      <Card 
        bordered={false}
        style={{
          width: 380,
          background: 'rgba(26, 27, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 12,
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ color: '#fff', fontSize: 24, fontWeight: 600, margin: '0 0 8px 0' }}>JC小智</h2>
          <p style={{ color: '#8a8c93', fontSize: 14, margin: 0 }}>系统管理后台</p>
        </div>

        <Form
          name="login_form"
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input 
              prefix={<UserOutlined style={{ color: 'rgba(255,255,255,0.45)' }} />} 
              placeholder="管理员用户名" 
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(255,255,255,0.45)' }} />}
              placeholder="密码"
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              style={{ 
                width: '100%', 
                background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)',
                borderColor: 'transparent',
                height: 44,
                borderRadius: 6,
                fontWeight: 500,
                marginTop: 8,
              }}
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
