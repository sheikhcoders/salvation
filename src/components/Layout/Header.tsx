import React, { useState, useEffect } from 'react';
import { Layout, Typography, Button, Space, Menu, Drawer, Divider } from 'antd';
import { RocketOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons';
import styles from '../../App.module.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const navItems = [
  { key: 'lightning', label: 'Lightning' },
  { key: 'custom', label: 'Custom' },
  { key: 'run', label: 'Run' },
  { key: 'schedules', label: 'Schedules' },
  { key: 'websites', label: 'Websites' },
  { key: 'research', label: 'Research' },
  { key: 'videos', label: 'Videos' },
  {
    key: 'more',
    label: <span>More <DownOutlined style={{ fontSize: '10px' }} /></span>,
    children: [
      { key: 'docs', label: 'Documentation' },
      { key: 'blog', label: 'Blog' },
      { key: 'community', label: 'Community' },
    ]
  },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AntHeader className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.headerLeft}>
        <div className={styles.logoContainer}>
          <img src="/logo.svg" alt="Logo" className={styles.logoSvg} />
          <Title level={4} className={styles.logoText}>MiniMax</Title>
        </div>
      </div>

      <div className={styles.headerCenter}>
        <Menu
          mode="horizontal"
          items={navItems}
          className={styles.desktopMenu}
          disabledOverflow
          theme="dark"
        />
      </div>

      <div className={styles.headerRight}>
        <Space className={styles.desktopActions} size="middle">
          <Button type="text" className={styles.navActionLink}>Contribute</Button>
          <Button type="text" className={styles.navActionLink}>Download</Button>
          <Button type="primary" shape="round" className={styles.signInBtn}>Sign In</Button>
        </Space>
        <Button
          type="text"
          icon={<MenuOutlined />}
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className={styles.mobileDrawer}
      >
        <Menu mode="vertical" items={navItems} theme="dark" />
        <Divider />
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="text" block>Contribute</Button>
          <Button type="text" block>Download</Button>
          <Button type="primary" block shape="round">Sign In</Button>
        </Space>
      </Drawer>
    </AntHeader>
  );
};
