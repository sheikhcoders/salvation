import React from 'react';
import { Typography, Button, Row, Col, Card, Badge } from 'antd';
import styles from '../../App.module.css';

const { Title, Paragraph } = Typography;

export const ProductTiers: React.FC = () => {
  return (
    <section id="lightning" className={styles.tiersSection}>
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={8}>
          <Card hoverable variant="borderless" className={styles.tierCard}>
            <Title level={3}>Custom</Title>
            <Paragraph>Build your own specialized agentic workforce.</Paragraph>
            <ul className={styles.tierFeatures}>
              <li>Custom Agent Training</li>
              <li>Flexible API Usage</li>
              <li>Personalized Workflows</li>
            </ul>
            <Button block shape="round">Build Custom</Button>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card hoverable variant="borderless" className={`${styles.tierCard} ${styles.tierCardPrimary}`}>
            <Badge.Ribbon text="Popular" color="blue">
              <div style={{ padding: '20px 0' }}>
                <Title level={3} style={{ color: '#fff' }}>Lightning</Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.85)' }}>The primary choice for high-speed, efficient AI work.</Paragraph>
                <ul className={styles.tierFeatures}>
                  <li>Priority GPU Access</li>
                  <li>Advanced Reasoning Models</li>
                  <li>Infinite Context Windows</li>
                  <li>API Integration</li>
                </ul>
                <Button type="primary" block shape="round" className={styles.tierCtaPrimary}>Get Lightning</Button>
              </div>
            </Badge.Ribbon>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card hoverable variant="borderless" className={styles.tierCard}>
            <Title level={3}>Pro</Title>
            <Paragraph>Advanced capabilities for complex multi-agent systems.</Paragraph>
            <ul className={styles.tierFeatures}>
              <li>Custom Agent Training</li>
              <li>Multi-Agent Orchestration</li>
              <li>Enterprise Security</li>
              <li>24/7 Dedicated Support</li>
            </ul>
            <Button block shape="round" ghost>Go Pro</Button>
          </Card>
        </Col>
      </Row>
    </section>
  );
};
