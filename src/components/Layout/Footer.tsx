import React from 'react';
import { Layout, Typography, Row, Col, Space, Input, Divider, message } from 'antd';
import {
  RocketOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import styles from '../../App.module.css';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

export const Footer: React.FC = () => {
  return (
    <AntFooter className={styles.footer}>
      <Row gutter={[48, 32]}>
        <Col xs={24} md={6}>
          <div className={styles.logoContainer}>
            <RocketOutlined className={styles.logoIcon} />
            <Title level={4} className={styles.logoText} style={{ color: '#fff' }}>MiniMax</Title>
          </div>
          <Paragraph style={{ color: '#8c8c8c', marginTop: '16px' }}>
            Empowering the next generation of digital employees through advanced agentic AI.
          </Paragraph>
          <Space size="large" style={{ fontSize: '20px', marginTop: '16px' }}>
            <GithubOutlined style={{ color: '#8c8c8c' }} />
            <TwitterOutlined style={{ color: '#8c8c8c' }} />
            <LinkedinOutlined style={{ color: '#8c8c8c' }} />
          </Space>
        </Col>
        <Col xs={12} md={4}>
          <Title level={5} style={{ color: '#fff' }}>Product</Title>
          <Space direction="vertical" style={{ color: '#8c8c8c' }}>
            <Text className={styles.footerLink}>Lightning</Text>
            <Text className={styles.footerLink}>Pro</Text>
            <Text className={styles.footerLink}>Models</Text>
            <Text className={styles.footerLink}>Pricing</Text>
          </Space>
        </Col>
        <Col xs={12} md={4}>
          <Title level={5} style={{ color: '#fff' }}>Resources</Title>
          <Space direction="vertical" style={{ color: '#8c8c8c' }}>
            <Text className={styles.footerLink}>Documentation</Text>
            <Text className={styles.footerLink}>API Reference</Text>
            <Text className={styles.footerLink}>Community</Text>
            <Text className={styles.footerLink}>Open Source</Text>
          </Space>
        </Col>
        <Col xs={12} md={4}>
          <Title level={5} style={{ color: '#fff' }}>Company</Title>
          <Space direction="vertical" style={{ color: '#8c8c8c' }}>
            <Text className={styles.footerLink}>About Us</Text>
            <Text className={styles.footerLink}>Careers</Text>
            <Text className={styles.footerLink}>Privacy Policy</Text>
            <Text className={styles.footerLink}>Terms of Service</Text>
          </Space>
        </Col>
        <Col xs={24} md={6}>
          <Title level={5} style={{ color: '#fff' }}>Newsletter</Title>
          <Paragraph style={{ color: '#8c8c8c' }}>
            Get the latest updates on model releases and new features.
          </Paragraph>
          <Input.Search
            placeholder="Email address"
            enterButton="Join"
            className={styles.newsletterInput}
            onSearch={(value) => {
              if (value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                message.success('Thank you for joining!');
              } else {
                message.error('Please enter a valid email address.');
              }
            }}
          />
        </Col>
      </Row>
      <Divider style={{ borderColor: '#262626' }} />
      <div style={{ textAlign: 'center', color: '#595959' }}>
        MiniMax AI ©{new Date().getFullYear()} All Rights Reserved. Built with Ant Design.
      </div>
    </AntFooter>
  );
};
