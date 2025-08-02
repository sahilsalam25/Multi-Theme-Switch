import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types';
import { Palette, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const themes: { value: ThemeType; label: string }[] = [
    { value: 'theme1', label: 'Minimalist Light' },
    { value: 'theme2', label: 'Professional Dark' },
    { value: 'theme3', label: 'Colorful Creative' },
  ];

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo/Brand */}
        <div className="brand">
          <Palette className="brand-icon" />
          <span className="brand-text">ThemeSwitch</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActivePage(link.to) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Theme Selector */}
        <div className="theme-selector">
          <select
            value={currentTheme}
            onChange={(e) => setTheme(e.target.value as ThemeType)}
            className="theme-dropdown"
            aria-label="Select theme"
          >
            {themes.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-nav-link ${isActivePage(link.to) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;