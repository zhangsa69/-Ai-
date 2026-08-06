import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { ContainerOutlined, SettingOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: '访问统计',
    },
    {
      key: '/admin/tickets',
      icon: <ContainerOutlined />,
      label: '工单管理',
    },
    {
      key: '/admin/settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          background: '#141416',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}>
          <span style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>JC小智 · 后台</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ background: 'transparent', padding: '16px 0' }}
        />
      </Sider>
      <Layout>
        <Header style={{
          padding: '0 24px',
          background: '#141416',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          height: 64,
        }}>
          <h2 style={{ color: '#fff', fontSize: 18, fontWeight: 500, margin: 0 }}>IT/运维服务台</h2>
          <Button 
            type="text" 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
            style={{ color: '#8a8c93' }}
          >
            退出登录
          </Button>
        </Header>
        <Content style={{ margin: '24px', minHeight: 280 }}>
          <div style={{
            padding: 24,
            minHeight: '100%',
            background: '#1b1b1f',
            borderRadius: 8,
            border: '1px solid rgba(255, 255, 255, 0.04)',
          }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
