import React from 'react';
import { useProducts } from '../hooks/useApi';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { Loader, AlertCircle, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="animate-spin" size={48} />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <AlertCircle size={48} />
        <p>Error loading products: {error}</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <Sparkles className="hero-icon" />
          <h1 className="hero-title">Welcome to ThemeSwitch</h1>
          <p className="hero-description">
            Experience the power of dynamic theming with our beautiful, responsive design system. 
            Switch between three distinct themes and see how design can transform user experience.
          </p>
          <Button size="large">
            Explore Themes
          </Button>
        </div>
      </section>

      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-description">
            Discover our curated collection of premium products
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Responsive Design</h3>
            <p>Optimized for all devices and screen sizes</p>
          </div>
          <div className="feature-item">
            <h3>Theme Persistence</h3>
            <p>Your theme preference is saved and restored</p>
          </div>
          <div className="feature-item">
            <h3>Smooth Animations</h3>
            <p>Beautiful transitions between theme changes</p>
          </div>
          <div className="feature-item">
            <h3>Modern Architecture</h3>
            <p>Built with React, TypeScript, and Context API</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;