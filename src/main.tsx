import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider, theme } from 'antd'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        },
        components: {
          Layout: {
            headerBg: 'rgba(0, 0, 0, 0.5)',
            footerBg: '#000000',
            bodyBg: '#000000',
          },
          Card: {
            containerBg: '#141414',
          },
          Menu: {
            darkItemBg: 'transparent',
          }
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
