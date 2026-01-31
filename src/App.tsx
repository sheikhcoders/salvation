import React from 'react';
import { Layout } from 'antd';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Sections/Hero';
import { ProductTiers } from './components/Sections/ProductTiers';
import { FeatureGrid } from './components/Sections/FeatureGrid';
import { Announcement } from './components/Sections/Announcement';
import { Footer } from './components/Layout/Footer';
import styles from './App.module.css';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Content className={styles.content}>
        <Hero />
        <ProductTiers />
        <FeatureGrid />
        <Announcement />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
