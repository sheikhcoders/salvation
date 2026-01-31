import React from 'react';
import { Layout, Typography, Button, Row, Col, Card, Space } from 'antd';
import {
  RocketOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  DeploymentUnitOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import styles from './App.module.css';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <RocketOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '10px' }} />
          <Title level={4} style={{ margin: 0 }}>Agentic Solutions</Title>
        </div>
        <Space>
          <Button type="text">Features</Button>
          <Button type="text">Solutions</Button>
          <Button type="primary">Get Started</Button>
        </Space>
      </Header>

      <Content>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <Title className={styles.heroTitle}>
            Prebuilt Agents with Proven AI Solutions
          </Title>
          <Paragraph className={styles.heroSubtitle}>
            Ready for your data and requirements, for tailored and repeatable agentic work.
            Streamline your daily tasks and cross-functional work with expert-level AI.
          </Paragraph>
          <Space size="middle">
            <Button type="primary" size="large" icon={<ThunderboltOutlined />}>
              Try it Now
            </Button>
            <Button size="large">View Demo</Button>
          </Space>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '60px' }}>
            General-Purpose Agent for Complex Tasks
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                variant="borderless"
                className={styles.featureCard}
              >
                <DeploymentUnitOutlined style={{ fontSize: '40px', color: '#1890ff', marginBottom: '20px' }} />
                <Title level={4}>Multi-Agent System</Title>
                <Paragraph>
                  Supported by a robust multi-agent architecture that allows for collaborative problem solving.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                variant="borderless"
                className={styles.featureCard}
              >
                <ThunderboltOutlined style={{ fontSize: '40px', color: '#722ed1', marginBottom: '20px' }} />
                <Title level={4}>Multi-Step Planning</Title>
                <Paragraph>
                  Formulate expert-level solutions through sophisticated multi-step planning and reasoning.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                hoverable
                variant="borderless"
                className={styles.featureCard}
              >
                <TeamOutlined style={{ fontSize: '40px', color: '#52c41a', marginBottom: '20px' }} />
                <Title level={4}>Sub-Task Execution</Title>
                <Paragraph>
                  Flexibly break down task requirements and execute multiple sub-tasks to deliver final results.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Detailed Description Section */}
        <div className={styles.detailsSection}>
          <Row gutter={64} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2}>Tailored and Repeatable Agentic Work</Title>
              <Paragraph style={{ fontSize: '16px' }}>
                Our agents are designed to handle complex, long-horizon tasks that traditional automation struggles with.
                By leveraging a multi-agent system, we can provide:
              </Paragraph>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Expert-level solution formulation',
                  'Flexible requirement breakdown',
                  'Concurrent sub-task execution',
                  'Continuous learning and adaptation'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.codeBlock}>
                <pre style={{ margin: 0, color: '#1890ff', fontWeight: 'bold' }}>
                  {`// Example Task Breakdown
{
  "goal": "Optimize cross-functional workflow",
  "steps": [
    "Analyze current requirements",
    "Identify bottlenecks",
    "Formulate multi-step plan",
    "Execute sub-tasks",
    "Verify results"
  ]
}`}
                </pre>
              </div>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className={styles.footer}>
        Agentic Solutions ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default App;
