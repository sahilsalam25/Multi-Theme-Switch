import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={`layout-wrapper ${currentTheme}`}>
      <Header />
      <main className="main-content">
        {currentTheme === 'theme2' && <div className="sidebar" />}
        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;