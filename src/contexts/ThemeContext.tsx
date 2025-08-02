import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as ThemeType;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('app-theme', theme);
    
    // Add transition class to body for smooth theme switching
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <div className={`app-container ${currentTheme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};