import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Opportunities
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Arvindh AP</span>
        </h1>
        
        <p className="hero-subtitle">
          Cash Operations Analyst | CPA & CMA Pursuing | Risk Management Specialist
        </p>
        
        <p className="hero-description">
          Detail-oriented professional with expertise in banking operations, risk control, 
          and regulatory compliance based in Bengaluru, India
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleScrollToContact}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Get in Touch
          </button>
          <button className="btn btn-secondary" onClick={handleScrollToAbout}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Learn More
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Teams Managed</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">15%</div>
            <div className="stat-label">Error Reduction</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
