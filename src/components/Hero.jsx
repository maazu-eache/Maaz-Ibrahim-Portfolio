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
  Building2,
  CheckCircle2,
  Terminal,
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
          {/* Left Column: Introduction & Primary Actions */}
          <div className="hero-content">
            <div className="hero-status-row">
              <div className="status-badge-hero">
                <span className="status-dot-pulse"></span>
                <span>Available for Opportunities</span>
              </div>
              <span className="exp-badge">3+ Years Experience</span>
            </div>

            <h1 className="hero-heading">
              Hi, I'm <span className="highlight-text">{personalData.name}</span>
              <span className="role-subheading">{personalData.role}</span>
            </h1>

            <p className="hero-bio">
              {personalData.bio}
            </p>

            {/* Core Competency Highlights */}
            <div className="hero-tags-row">
              <span className="pill-tag">
                <Code2 size={15} className="text-primary" /> React & React Native
              </span>
              <span className="pill-tag">
                <Database size={15} className="text-primary" /> Node.js & MongoDB
              </span>
              <span className="pill-tag">
                <ShieldCheck size={15} className="text-primary" /> JWT & RBAC Security
              </span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary btn-lg" id="hero-view-projects">
                <span>View Projects</span>
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
                  <span className="detail-key">Current Role</span>
                  <span className="detail-val">
                    Full Stack Dev at <a href={personalData.company.url} target="_blank" rel="noopener noreferrer" className="link-inline">SAFPRO Tech</a>
                  </span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Experience</span>
                  <span className="detail-val">3+ Years Building Web & Mobile Apps</span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Primary Stack</span>
                  <div className="detail-tags">
                    <span className="tech-tag blue">React</span>
                    <span className="tech-tag blue">React Native</span>
                    <span className="tech-tag emerald">Node.js</span>
                    <span className="tech-tag emerald">MongoDB</span>
                  </div>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Security & Auth</span>
                  <span className="detail-val">JWT, Role-Based Access Control (RBAC)</span>
                </div>

                <div className="spec-detail-item">
                  <span className="detail-key">Payments</span>
                  <span className="detail-val">PayPal & Stripe UI & Backend Integration</span>
                </div>
              </div>

              {/* Code Standard Banner */}
              <div className="spec-footer-banner">
                <div className="banner-icon">
                  <Terminal size={16} />
                </div>
                <div className="banner-text">
                  <span>Component-Based Architecture • Responsive UI • Clean Code</span>
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
              <div className="stat-number comp-acronym">SAFPRO</div>
              <div className="stat-title">Technology Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
