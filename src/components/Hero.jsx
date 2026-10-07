import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Mail,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-box">
          {/* Top Yellow Tag */}
          <div className="hero-badge-wrap">
            <span className="hero-role-tag">
              {personalData.role}
            </span>
            <span className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Hire</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            {personalData.name}
          </h1>

          {/* Punchy Pitch */}
          <p className="hero-pitch">
            {personalData.shortHeroPitch}
          </p>

          <p className="hero-subtext">
            Full Stack Developer with 2+ years of experience building scalable applications using MongoDB, Express.js, React.js, Node.js, and React Native for web, iOS, and Android. Currently at{' '}
            <a 
              href={personalData.company.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-comp-link"
            >
              {personalData.company.name} <ExternalLink size={12} />
            </a>.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-bar">
            <a href="#projects" className="btn btn-black">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href={personalData.resumeUrl} 
              download="Maaz_Ibrahim_Resume.pdf"
              className="btn btn-yellow"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={onOpenResume}
            >
              <FileText size={16} />
              <span>Preview</span>
            </button>
          </div>

          {/* Quick Email Bar */}
          <div className="hero-email-bar">
            <Mail size={16} className="email-icon" />
            <a href={`mailto:${personalData.email}`} className="email-link">
              {personalData.email}
            </a>
            <button 
              type="button" 
              className="copy-mini-btn" 
              onClick={handleCopyEmail}
              title="Copy to clipboard"
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Key Facts Row */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-val">2+ Years</span>
              <span className="stat-lbl">Production Exp</span>
            </div>
            <div className="stat-sep">/</div>
            <div className="stat-item">
              <span className="stat-val">5 Apps</span>
              <span className="stat-lbl">Featured Projects</span>
            </div>
            <div className="stat-sep">/</div>
            <div className="stat-item">
              <span className="stat-val">Google Play</span>
              <span className="stat-lbl">Published Mobile App</span>
            </div>
            <div className="stat-sep">/</div>
            <div className="stat-item">
              <span className="stat-val">MERN & Native</span>
              <span className="stat-lbl">Core Specialization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
