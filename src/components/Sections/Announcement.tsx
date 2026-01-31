import React from 'react';
import { Typography, Button, Row, Col, Space, Tag } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import styles from '../../App.module.css';

const { Title, Text, Paragraph } = Typography;

export const Announcement: React.FC = () => {
  return (
    <section className={styles.announcementSection}>
      <div className={styles.announcementBox}>
        <Tag color="blue" className={styles.newBadge}>NEW MODEL</Tag>
        <Title level={2} style={{ color: '#fff', marginTop: '16px' }}>Introducing Salvation-M2.1</Title>
        <Paragraph style={{ color: '#bfbfbf', fontSize: '18px' }}>
          Our most advanced model yet, specifically engineered for complex agentic workflows and tool use.
        </Paragraph>
        <Row gutter={[32, 16]} style={{ marginBottom: '32px' }}>
          <Col span={24} md={12}>
            <Space align="start">
              <CheckCircleOutlined style={{ color: '#52c41a', marginTop: '4px' }} />
              <Text style={{ color: '#fff' }}>Superior multilingual coding capabilities across 50+ languages.</Text>
            </Space>
          </Col>
          <Col span={24} md={12}>
            <Space align="start">
              <CheckCircleOutlined style={{ color: '#52c41a', marginTop: '4px' }} />
              <Text style={{ color: '#fff' }}>Advanced tool use for seamless integration with real-world APIs.</Text>
            </Space>
          </Col>
          <Col span={24} md={12}>
            <Space align="start">
              <CheckCircleOutlined style={{ color: '#52c41a', marginTop: '4px' }} />
              <Text style={{ color: '#fff' }}>Enhanced reasoning for long-horizon task execution.</Text>
            </Space>
          </Col>
          <Col span={24} md={12}>
            <Space align="start">
              <CheckCircleOutlined style={{ color: '#52c41a', marginTop: '4px' }} />
              <Text style={{ color: '#fff' }}>Digital employee framework for enterprise-scale automation.</Text>
            </Space>
          </Col>
        </Row>
        <Button type="primary" size="large" shape="round">Try Salvation-M2.1</Button>
      </div>
    </section>
  );
};
