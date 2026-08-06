import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Statistic, Spin, Table, Typography } from 'antd';
import {
  TeamOutlined,
  DesktopOutlined,
  MobileOutlined,
  RiseOutlined,
} from '@ant-design/icons';
import api from '../api';

const { Title } = Typography;

interface DailyItem {
  date: string;
  pc: number;
  mobile: number;
  total: number;
}

interface StatsData {
  total: number;
  pc_total: number;
  mobile_total: number;
  today_total: number;
  today_pc: number;
  today_mobile: number;
  daily_trend: DailyItem[];
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatsData | null>(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    setLoading(true);
    try {
      const response = await api.get('/visit/stats');
      setStats(response.data);
    } catch (e) {
      console.error('Failed to load stats:', e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 80 }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!stats) {
    return <div style={{ color: '#8a8c93', padding: 40 }}>加载统计数据失败</div>;
  }

  const trendColumns = [
    { title: '日期', dataIndex: 'date', key: 'date' },
    { title: 'PC端', dataIndex: 'pc', key: 'pc' },
    { title: '移动端', dataIndex: 'mobile', key: 'mobile' },
    { title: '合计', dataIndex: 'total', key: 'total' },
  ];

  return (
    <div>
      <Title level={4} style={{ color: '#fff', marginBottom: 24 }}>
        📊 访问统计
      </Title>

      {/* Summary Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
            }}
          >
            <Statistic
              title={<span style={{ color: '#8a8c93' }}>总访问量</span>}
              value={stats.total}
              prefix={<TeamOutlined />}
              valueStyle={{ color: '#818cf8', fontWeight: 600 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            <Statistic
              title={<span style={{ color: '#8a8c93' }}>PC端访问</span>}
              value={stats.pc_total}
              prefix={<DesktopOutlined />}
              valueStyle={{ color: '#60a5fa', fontWeight: 600 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <Statistic
              title={<span style={{ color: '#8a8c93' }}>移动端访问</span>}
              value={stats.mobile_total}
              prefix={<MobileOutlined />}
              valueStyle={{ color: '#4ade80', fontWeight: 600 }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              border: '1px solid rgba(250, 204, 21, 0.2)',
            }}
          >
            <Statistic
              title={<span style={{ color: '#8a8c93' }}>今日访问</span>}
              value={stats.today_total}
              prefix={<RiseOutlined />}
              valueStyle={{ color: '#facc15', fontWeight: 600 }}
              suffix={
                <span style={{ fontSize: 14, color: '#8a8c93' }}>
                  / PC {stats.today_pc} · 移动 {stats.today_mobile}
                </span>
              }
            />
          </Card>
        </Col>
      </Row>

      {/* Daily Trend */}
      <Card
        title={<span style={{ color: '#fff' }}>最近7天趋势</span>}
        style={{
          background: '#1b1b1f',
          border: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        <Table
          dataSource={stats.daily_trend.map((d, i) => ({ ...d, key: i }))}
          columns={trendColumns}
          pagination={false}
          size="small"
          style={{ background: 'transparent' }}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
