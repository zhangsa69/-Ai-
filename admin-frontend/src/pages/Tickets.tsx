import React, { useState, useEffect, useCallback } from 'react';
import { Table, Select, Button, Tag, Space, Modal, Tooltip, message, Image } from 'antd';
import { MailOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import api from '../api';

interface Ticket {
  id: number;
  conversation_id: string;
  name: string;
  phone: string;
  location: string;
  description: string;
  images: string[];
  category: string;
  email_status: string;
  email_to: string;
  email_error: string;
  resend_count: number;
  created_at: string;
  updated_at: string;
}

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(15);
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [emailStatus, setEmailStatus] = useState<string | undefined>(undefined);

  // Preview Image Modal state
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Resend Loading state
  const [resendingId, setResendingId] = useState<number | null>(null);

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('/tickets', {
        params: {
          category: category || undefined,
          email_status: emailStatus || undefined,
          page,
          page_size: pageSize,
        }
      });
      setTickets(response.data.items);
      setTotal(response.data.total);
    } catch (error) {
      message.error('获取工单列表失败');
    } finally {
      setLoading(false);
    }
  }, [category, emailStatus, page, pageSize]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const handleExport = async () => {
    try {
      message.loading({ content: '正在导出...', key: 'exporting' });
      const response = await api.get('/tickets/export/all.xlsx', {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `工单列表_${new Date().toISOString().slice(0, 10)}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      message.success({ content: '导出 Excel 成功！', key: 'exporting' });
    } catch (err) {
      message.error({ content: '导出失败，请重试', key: 'exporting' });
    }
  };

  const handleResend = async (id: number) => {
    setResendingId(id);
    try {
      const response = await api.post(`/tickets/${id}/resend`);
      if (response.data.success) {
        message.success('邮件发送成功');
        fetchTickets();
      } else {
        message.error(`邮件发送失败: ${response.data.message}`);
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.detail || '请求服务发生异常';
      message.error(`重发异常: ${errMsg}`);
    } finally {
      setResendingId(null);
    }
  };

  const showImages = (images: string[]) => {
    setPreviewImages(images);
    setPreviewOpen(true);
  };

  const categoryMap: Record<string, { label: string; color: string }> = {
    desktop: { label: '桌面运维', color: 'blue' },
    network: { label: '网络', color: 'orange' },
    weak_current: { label: '弱电', color: 'purple' },
    unknown: { label: '未分类', color: 'default' },
  };

  const emailStatusMap: Record<string, { label: string; color: string }> = {
    pending: { label: '待发送', color: 'warning' },
    sent: { label: '发送成功', color: 'success' },
    failed: { label: '发送失败', color: 'error' },
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      width: 130,
    },
    {
      title: '故障位置',
      dataIndex: 'location',
      key: 'location',
      width: 150,
      ellipsis: true,
    },
    {
      title: '详情描述',
      dataIndex: 'description',
      key: 'description',
      width: 250,
      render: (text: string) => (
        <Tooltip title={text}>
          <div style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 240,
          }}>
            {text}
          </div>
        </Tooltip>
      ),
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      width: 110,
      render: (cat: string) => {
        const item = categoryMap[cat] || categoryMap.unknown;
        return <Tag color={item.color}>{item.label}</Tag>;
      },
    },
    {
      title: '发件结果',
      key: 'email',
      width: 200,
      render: (record: Ticket) => {
        const item = emailStatusMap[record.email_status] || { label: record.email_status, color: 'default' };
        return (
          <Space direction="vertical" size={2} style={{ width: '100%' }}>
            <Tag color={item.color}>{item.label}</Tag>
            {record.email_to && (
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                {record.email_to}
              </span>
            )}
            {record.email_status === 'failed' && record.email_error && (
              <Tooltip title={record.email_error}>
                <span style={{ fontSize: 11, color: '#ff4d4f', cursor: 'help', display: 'block', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  原因: {record.email_error}
                </span>
              </Tooltip>
            )}
          </Space>
        );
      },
    },
    {
      title: '重发',
      dataIndex: 'resend_count',
      key: 'resend_count',
      width: 80,
    },
    {
      title: '上报时间',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 170,
      render: (dateStr: string) => new Date(dateStr).toLocaleString('zh-CN'),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      fixed: 'right' as const,
      render: (record: Ticket) => (
        <Space size="middle">
          {record.images && record.images.length > 0 ? (
            <Button 
              type="link" 
              icon={<EyeOutlined />} 
              onClick={() => showImages(record.images)}
              style={{ padding: 0 }}
            >
              图片({record.images.length})
            </Button>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>无图片</span>
          )}
          <Button
            type="link"
            icon={<MailOutlined />}
            loading={resendingId === record.id}
            onClick={() => handleResend(record.id)}
            style={{ padding: 0 }}
          >
            重发
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <Space size="middle">
          <div>
            <span style={{ marginRight: 8, color: 'rgba(255,255,255,0.85)' }}>故障分类:</span>
            <Select
              placeholder="全部"
              allowClear
              style={{ width: 140 }}
              value={category}
              onChange={(val) => { setCategory(val); setPage(1); }}
              options={[
                { value: 'desktop', label: '桌面运维' },
                { value: 'network', label: '网络' },
                { value: 'weak_current', label: '弱电' },
                { value: 'unknown', label: '未分类' },
              ]}
            />
          </div>
          <div>
            <span style={{ marginRight: 8, color: 'rgba(255,255,255,0.85)' }}>邮件状态:</span>
            <Select
              placeholder="全部"
              allowClear
              style={{ width: 140 }}
              value={emailStatus}
              onChange={(val) => { setEmailStatus(val); setPage(1); }}
              options={[
                { value: 'sent', label: '发送成功' },
                { value: 'pending', label: '待发送' },
                { value: 'failed', label: '发送失败' },
              ]}
            />
          </div>
        </Space>
        
        <Button 
          type="primary" 
          icon={<DownloadOutlined />} 
          onClick={handleExport}
          style={{ background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)', borderColor: 'transparent' }}
        >
          导出 Excel
        </Button>
      </div>

      <Table
        dataSource={tickets}
        columns={columns}
        rowKey="id"
        loading={loading}
        scroll={{ x: 1200 }}
        pagination={{
          current: page,
          pageSize: pageSize,
          total: total,
          onChange: (p) => setPage(p),
          showTotal: (t) => `共 ${t} 条工单`,
        }}
      />

      <Modal
        title="现场故障图片预览"
        open={previewOpen}
        onCancel={() => setPreviewOpen(false)}
        footer={[
          <Button key="close" onClick={() => setPreviewOpen(false)}>
            关闭
          </Button>
        ]}
        width={680}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginTop: 16 }}>
          {previewImages.map((img, index) => (
            <div key={index} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 180 }}>
              <Image
                src={`/uploads/${img}`}
                alt={`现场图片 ${index + 1}`}
                style={{ maxHeight: 180, objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Tickets;
