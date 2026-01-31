import React from 'react';
import { Typography, Button, Space } from 'antd';
import styles from '../../App.module.css';

const { Title, Paragraph } = Typography;

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroGlow} />
      <div className={styles.heroContent}>
        <Title className={styles.heroTitle}>
          Supercharge Your Workflow with Intelligent Agents
        </Title>
        <Paragraph className={styles.heroSubtitle}>
          The next generation of AI agents for coding, research, and complex automation.
          Powered by Salvation-M2.1 for expert-level reasoning.
        </Paragraph>
        <Space size="middle">
          <Button type="primary" size="large" shape="round" className={styles.heroCta}>
            Get Started
          </Button>
          <Button size="large" shape="round" ghost>
            View Documentation
          </Button>
        </Space>
      </div>
      <div className={styles.heroVisual}>
         <div className={styles.meshGradient} />
      </div>
    </section>
  );
};
