import React from 'react';
import Button from '../components/Button';
import { Code, Palette, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <Code className="hero-icon" />
          <h1 className="hero-title">About ThemeSwitch</h1>
          <p className="hero-description">
            A cutting-edge demonstration of modern web development practices, 
            showcasing the power of React, TypeScript, and intelligent design systems.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-grid">
          <div className="content-card">
            <Palette className="card-icon" />
            <h3>Design Philosophy</h3>
            <p>
              We believe that great design is not just about aesthetics—it's about creating 
              experiences that adapt to users' needs and preferences. Our theme system 
              demonstrates how the same content can feel completely different with thoughtful 
              design variations.
            </p>
          </div>

          <div className="content-card">
            <Smartphone className="card-icon" />
            <h3>Responsive First</h3>
            <p>
              Every theme is built with mobile-first principles, ensuring optimal performance 
              and user experience across all devices. From smartphones to desktop monitors, 
              the experience remains consistent and beautiful.
            </p>
          </div>

          <div className="content-card">
            <Code className="card-icon" />
            <h3>Modern Technology</h3>
            <p>
              Built with the latest web technologies including React 18, TypeScript, 
              Tailwind CSS, and modern browser APIs. The codebase follows best practices 
              for maintainability, performance, and accessibility.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <h2 className="section-title">Project Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Unique Themes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Responsive</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">300ms</span>
            <span className="stat-label">Theme Transition</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to explore?</h2>
          <p>Try switching between themes using the dropdown in the header!</p>
          <Button size="large">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;