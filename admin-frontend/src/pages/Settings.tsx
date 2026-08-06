import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, Row, Col, message, Divider, Spin, Modal, Select } from 'antd';
import { SaveOutlined, BulbOutlined, ApiOutlined } from '@ant-design/icons';
import api from '../api';

interface ConfigItem {
  key: string;
  value: string;
  description: string;
}

const Settings: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [testingLlm, setTestingLlm] = useState(false);
  const [testingDify, setTestingDify] = useState(false);

  useEffect(() => {
    loadConfigs();
  }, []);

  const loadConfigs = async () => {
    setLoading(true);
    try {
      const response = await api.get('/config');
      const configItems: ConfigItem[] = response.data;
      
      // Convert list of key/value items into a form object
      const formValues: Record<string, any> = {};
      configItems.forEach(item => {
        // email_* configs store comma-separated emails -> array for Select tags
        if (item.key.startsWith('email_')) {
          formValues[item.key] = (item.value || '').split(',').map(s => s.trim()).filter(Boolean);
        } else {
          formValues[item.key] = item.value;
        }
      });
      form.setFieldsValue(formValues);
    } catch (error) {
      message.error('获取系统配置失败');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (values: any) => {
    setLoading(true);
    try {
      // Map form object back to array list
      const items = Object.keys(values).map(key => {
        let v = values[key];
        // email_* configs are Select tags arrays -> join into comma-separated string
        if (Array.isArray(v)) v = v.join(',');
        return { key, value: String(v || '') };
      });
      await api.put('/config', { items });
      message.success('系统配置保存成功！');
      loadConfigs(); // reload to get masked secrets correctly
    } catch (error: any) {
      message.error('保存系统配置失败');
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async (service: 'llm' | 'dify') => {
    if (service === 'llm') setTestingLlm(true);
    else setTestingDify(true);

    try {
      // We must save configuration before testing because the test endpoint reads settings from DB
      const currentValues = form.getFieldsValue();
      const items = Object.keys(currentValues).map(key => {
        let v = currentValues[key];
        // email_* configs are Select tags arrays -> join into comma-separated string
        if (Array.isArray(v)) v = v.join(',');
        return { key, value: String(v || '') };
      });
      await api.put('/config', { items });

      const response = await api.post('/config/test', { service });
      if (response.data.success) {
        message.success(`${service === 'llm' ? '大模型' : 'Dify'} 连接测试成功: ${response.data.message}`);
      } else {
        Modal.error({
          title: '连接测试失败',
          content: (
            <div>
              <p>{response.data.message}</p>
              {response.data.detail && (
                <pre style={{ background: 'rgba(0,0,0,0.3)', padding: 10, borderRadius: 4, maxHeight: 150, overflow: 'auto', fontSize: 12 }}>
                  {response.data.detail}
                </pre>
              )}
            </div>
          ),
        });
      }
    } catch (error: any) {
      const errMsg = error.response?.data?.detail || '网络连接异常';
      message.error(`连通性测试接口异常: ${errMsg}`);
    } finally {
      if (service === 'llm') setTestingLlm(false);
      else setTestingDify(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        requiredMark={false}
      >
        <Row gutter={[24, 24]}>
          {/* LLM Column */}
          <Col xs={24} md={12}>
            <Card 
              title={<span><ApiOutlined style={{ marginRight: 8, color: '#1677ff' }} />大模型 LLM 配置</span>} 
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)' }}
              actions={[
                <Button 
                  type="link" 
                  icon={<BulbOutlined />} 
                  loading={testingLlm} 
                  onClick={() => testConnection('llm')}
                  key="test"
                >
                  测试大模型连通性
                </Button>
              ]}
            >
              <Form.Item
                label="Base URL"
                name="llm_base_url"
                tooltip="例如：https://api.openai.com/v1"
              >
                <Input placeholder="输入大模型 API 终结点 (如 OpenAI、DeepSeek)" />
              </Form.Item>

              <Form.Item
                label="API Key"
                name="llm_api_key"
              >
                <Input.Password placeholder="输入 API 密钥 (保存后脱敏)" />
              </Form.Item>

              <Form.Item
                label="模型名称"
                name="llm_model"
              >
                <Input placeholder="例如: gpt-4o-mini 或 deepseek-chat" />
              </Form.Item>
            </Card>
          </Col>

          {/* Dify Column */}
          <Col xs={24} md={12}>
            <Card 
              title={<span><ApiOutlined style={{ marginRight: 8, color: '#52c41a' }} />Dify 知识库配置</span>} 
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)' }}
              actions={[
                <Button 
                  type="link" 
                  icon={<BulbOutlined />} 
                  loading={testingDify} 
                  onClick={() => testConnection('dify')}
                  style={{ color: '#52c41a' }}
                  key="test"
                >
                  测试 Dify 连通性
                </Button>
              ]}
            >
              <Form.Item
                label="Dify 服务地址"
                name="dify_base_url"
                tooltip="例如：https://api.dify.ai"
              >
                <Input placeholder="输入 Dify API 域名" />
              </Form.Item>

              <Form.Item
                label="Dify API 密钥"
                name="dify_api_key"
              >
                <Input.Password placeholder="输入 Dify Chat-App API 密钥" />
              </Form.Item>

              <Form.Item
                label="Dify 知识库 Dataset ID"
                name="dify_dataset_id"
                tooltip="用于检测检索命中状态"
              >
                <Input placeholder="输入知识库数据集 Dataset ID" />
              </Form.Item>
            </Card>
          </Col>

          {/* SMTP settings */}
          <Col xs={24} md={12}>
            <Card 
              title="SMTP 邮件发送服务配置" 
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Row gutter={12}>
                <Col span={16}>
                  <Form.Item label="SMTP 服务器地址" name="smtp_host">
                    <Input placeholder="smtp.163.com 或 smtp.qq.com" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="端口" name="smtp_port">
                    <Input placeholder="465" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="发件账号 (用户名)" name="smtp_user">
                <Input placeholder="发信人邮箱账户名" />
              </Form.Item>

              <Form.Item label="授权码 (密码)" name="smtp_password">
                <Input.Password placeholder="第三方 SMTP 授权密码" />
              </Form.Item>

              <Form.Item label="发件人别名" name="smtp_sender" tooltip="例如: JC小智助手 <mail@163.com>">
                <Input placeholder="不填则默认为发信账号" />
              </Form.Item>
            </Card>
          </Col>

          {/* Distribution email */}
          <Col xs={24} md={12}>
            <Card 
              title="故障派单收件箱配置" 
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Form.Item 
                label="桌面运维类工单收件箱 (desktop)" 
                name="email_desktop"
                tooltip="可添加多个收件邮箱，回车确认；工单将同时发送给所有邮箱"
              >
                <Select
                  mode="tags"
                  placeholder="输入邮箱后回车添加，如 desktop@example.com"
                  tokenSeparators={[',', '，', ' ']}
                  open={false}
                  suffixIcon={null}
                />
              </Form.Item>

              <Form.Item 
                label="网络类工单收件箱 (network)" 
                name="email_network"
                tooltip="可添加多个收件邮箱，回车确认；工单将同时发送给所有邮箱"
              >
                <Select
                  mode="tags"
                  placeholder="输入邮箱后回车添加，如 network@example.com"
                  tokenSeparators={[',', '，', ' ']}
                  open={false}
                  suffixIcon={null}
                />
              </Form.Item>

              <Form.Item 
                label="弱电类工单收件箱 (weak_current)" 
                name="email_weak_current"
                tooltip="可添加多个收件邮箱，回车确认；工单将同时发送给所有邮箱"
              >
                <Select
                  mode="tags"
                  placeholder="输入邮箱后回车添加，如 weakcurrent@example.com"
                  tokenSeparators={[',', '，', ' ']}
                  open={false}
                  suffixIcon={null}
                />
              </Form.Item>
            </Card>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            size="large"
            style={{
              width: 180,
              background: 'linear-gradient(135deg, #1677ff 0%, #0958d9 100%)',
              borderColor: 'transparent',
              borderRadius: 6,
            }}
          >
            保存系统配置
          </Button>
        </div>
      </Form>
    </Spin>
  );
};

export default Settings;
