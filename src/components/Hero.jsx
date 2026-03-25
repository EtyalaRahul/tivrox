import React from 'react';
import './Hero.css';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background-effects">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up">
            <Sparkles size={16} className="badge-icon" />
            <span>Web • App • Branding • Growth</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Transforming Dreams into <br />
            <span className="text-gradient">Digital Reality</span>
          </h1>
          
          <div className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p>Your Business, Fully Online. From offline operations to online growth, we build experiences that matter.</p>
          </div>
          
          <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#features" className="primary-btn">
              Explore Services <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="https://wa.me/917986955634?text=Hi%20Tivrox!%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="secondary-btn whatsapp-btn">
              <MessageCircle size={20} className="btn-icon" />
              WhatsApp Us
            </a>
          </div>
          
          <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Delivery</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card main-mockup">
            <div className="mockup-top-bar">
              <div className="traffic-lights">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="mockup-content">
              <div className="skeleton-line title shimmer"></div>
              <div className="skeleton-line shimmer"></div>
              <div className="skeleton-line shimmer" style={{ width: '70%' }}></div>
              <div className="cards-grid">
                <div className="skeleton-card shimmer delay-1"></div>
                <div className="skeleton-card shimmer delay-2"></div>
                <div className="skeleton-card shimmer delay-3"></div>
                <div className="skeleton-card shimmer delay-4"></div>
              </div>
            </div>
          </div>
          
          <div className="floating-element float-1">
             <div className="accent-blob"></div>
          </div>
          <div className="floating-element float-2">
             <div className="glass-badge">🚀 Accelerate Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
