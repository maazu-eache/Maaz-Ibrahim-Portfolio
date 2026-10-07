import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp, Code2, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="clean-footer">
      <div className="container">
        <div className="footer-main-row">
          <div className="footer-brand-info">
            <div className="footer-logo-badge">
              <span>MI</span>
            </div>
            <div>
              <h3 className="footer-brand-name">{personalData.name}</h3>
              <p className="footer-brand-sub">
                Full Stack Developer • React, Node.js & MongoDB
              </p>
            </div>
          </div>

          <div className="footer-links-group">
            <a href="#hero">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#languages">Languages</a>
            <button 
              type="button" 
              className="footer-resume-btn-link"
              onClick={onOpenResume}
            >
              Resume
            </button>
            <a href="#contact">Contact</a>
          </div>

          <button 
            type="button" 
            className="clean-back-to-top" 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-rule"></div>

        <div className="footer-bottom-info">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
            
          </p>

          
        </div>
      </div>
    </footer>
  );
}
