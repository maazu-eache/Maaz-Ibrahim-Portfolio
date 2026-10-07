import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Code2, 
  Database, 
  ShieldCheck,
  Smartphone,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction & Primary Pitch */}
          <div className="hero-content">
            <div className="hero-status-row">
              <div className="status-badge-hero">
                <span className="status-dot-pulse"></span>
                <span>Available for Hire & Projects</span>
              </div>
              <span className="exp-badge">2+ Years Experience</span>
              <span className="google-play-badge">
                <span>Google Play Publisher</span>
              </span>
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="highlight-text">{personalData.name}</span>
              <span className="role-subheading">{personalData.role}</span>
            </h1>

            {/* Short Hero Version Pitch */}
            <p className="hero-short-pitch">
              {personalData.shortHeroPitch}
            </p>

            <p className="hero-bio">
              {personalData.bio}
            </p>

            {/* Core Competency Highlights */}
            <div className="hero-tags-row">
              <span className="pill-tag">
                <Code2 size={15} className="text-primary" /> MERN Stack & React.js
              </span>
              <span className="pill-tag">
                <Smartphone size={15} className="text-primary" /> React Native (iOS & Android)
              </span>
              <span className="pill-tag">
                <Database size={15} className="text-primary" /> Node.js & MongoDB / MySQL
              </span>
              <span className="pill-tag">
                <ShieldCheck size={15} className="text-primary" /> JWT, RBAC & Payments
              </span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary btn-lg" id="hero-view-projects">
                <span>View Featured Projects</span>
                <ArrowRight size={17} />
              </a>

              <button 
                type="button" 
                className="btn btn-secondary btn-lg" 
                onClick={onOpenResume}
                id="hero-open-resume"
              >
                <FileText size={17} />
                <span>View Resume</span>
              </button>

              <a 
                href={personalData.resumeUrl} 
                download="Maaz_Ibrahim_Resume.pdf"
                className="btn btn-secondary btn-lg download-btn"
                title="Download official PDF resume"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Quick Contact & Company Bar */}
            <div className="hero-meta-strip">
              <div className="email-chip">
                <span className="email-label">Email:</span>
                <span className="email-addr">{personalData.email}</span>
                <button 
                  type="button" 
                  className="copy-chip-btn" 
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="company-chip">
                <span className="comp-label">Working at:</span>
                <a 
                  href={personalData.company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="comp-link"
                >
                  <span>{personalData.company.name}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Executive Profile & Technical Overview */}
          <div className="hero-profile-overview">
            <div className="profile-spec-card pro-card">
              {/* Card Header */}
              <div className="spec-card-header">
                <div className="spec-avatar-badge">
                  <span>MI</span>
                </div>
                <div className="spec-header-text">
                  <h3 className="spec-name">{personalData.name}</h3>
                  <span className="spec-role">{personalData.role}</span>
                </div>
                <div className="spec-status-tag">
                  <span className="mini-dot"></span> Active
                </div>
              </div>

              <div className="spec-divider"></div>

              {/* Quick Details List */}
              <div className="spec-details-list">
                <div className="spec-detail-item">
                  <span className="detail-key">Specialization</span>
                  <span className="detail-val">
                    MERN Stack (MongoDB, Express, React, Node) & React Native
                  </span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Platforms Delivered</span>
                  <span className="detail-val">Web, iOS, and Android (Google Play Published)</span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Core Capabilities</span>
                  <div className="detail-tags">
                    <span className="tech-tag blue">React.js</span>
                    <span className="tech-tag blue">React Native</span>
                    <span className="tech-tag emerald">Node.js</span>
                    <span className="tech-tag emerald">MongoDB</span>
                    <span className="tech-tag purple">REST APIs</span>
                    <span className="tech-tag">RBAC</span>
                  </div>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Payments Integration</span>
                  <span className="detail-val">Stripe, PayPal, Razorpay APIs</span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Education</span>
                  <span className="detail-val">B.Sc. Computer Science • Islamiah College</span>
                </div>
              </div>

              {/* Code Standard Banner */}
              <div className="spec-footer-banner">
                <div className="banner-icon">
                  <Layers size={16} />
                </div>
                <div className="banner-text">
                  <span>Clean Code • Intuitive UX • Production-Ready Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="hero-stats-bar">
          <div className="stats-grid">
            {personalData.stats.map((stat, idx) => (
              <div key={idx} className="stat-box pro-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-title">{stat.label}</div>
              </div>
            ))}
            <div className="stat-box pro-card company-stat">
              <div className="stat-number comp-acronym">MERN</div>
              <div className="stat-title">Stack Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
