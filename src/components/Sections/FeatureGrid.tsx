import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import {
  CodeOutlined,
  CalendarOutlined,
  GlobalOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  RobotOutlined
} from '@ant-design/icons';
import styles from '../../App.module.css';

const { Title, Paragraph } = Typography;

const features = [
  { icon: <CodeOutlined />, title: 'Intelligent Coding', desc: 'Expert-level code generation and debugging.' },
  { icon: <CalendarOutlined />, title: 'Smart Scheduling', desc: 'Autonomous task management and calendar sync.' },
  { icon: <GlobalOutlined />, title: 'Web Automation', desc: 'Build and manage websites with simple prompts.' },
  { icon: <SearchOutlined />, title: 'Research & Analysis', desc: 'Deep data extraction and synthesis.' },
  { icon: <VideoCameraOutlined />, title: 'Video Generation', desc: 'AI-powered video editing and creation.' },
  { icon: <RobotOutlined />, title: 'Custom Agents', desc: 'Build your own specialized agentic workforce.' },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className={styles.featureGridSection}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '48px', color: '#fff' }}>
        A Complete Toolkit for Agentic Work
      </Title>
      <Row gutter={[24, 24]}>
        {features.map((feature, idx) => (
          <Col xs={24} sm={12} md={8} lg={6} key={idx}>
            <Card hoverable variant="borderless" className={styles.featureGridCard}>
              <div className={styles.featureGridIcon}>{feature.icon}</div>
              <Title level={4} style={{ color: '#fff', marginTop: '16px' }}>{feature.title}</Title>
              <Paragraph style={{ color: '#8c8c8c' }}>{feature.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
