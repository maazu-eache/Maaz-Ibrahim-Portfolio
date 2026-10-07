import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <img src="/MI.png" alt="MI" className="footer-logo-img" />
          <span className="footer-name">{personalData.name}</span>
          <span className="footer-sep">•</span>
          <span className="footer-role">{personalData.role}</span>
        </div>

        <div className="footer-right">
          <button type="button" className="footer-link" onClick={onOpenResume}>
            Resume
          </button>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
          <button 
            type="button" 
            className="footer-top-btn" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
