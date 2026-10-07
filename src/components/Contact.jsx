import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, Copy, Check, ExternalLink, Download, MapPin, Building2, Phone } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-wrapper contact-minimal-section">
      <div className="container">
        <div className="contact-box">
          <span className="section-tag">Get in Touch</span>
          <h2 className="contact-heading">Let's Work Together</h2>
          <p className="contact-subtext">
            Available for full-stack engineering roles, React Native mobile apps, and scalable web platforms.
          </p>

          <div className="contact-direct-card">
            {/* Email Row */}
            <div className="contact-row-item">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div className="contact-row-content">
                <span className="contact-row-label">Direct Email</span>
                <div className="contact-email-action">
                  <a href={`mailto:${personalData.email}`} className="contact-email-link">
                    {personalData.email}
                  </a>
                  <button 
                    type="button" 
                    className="copy-btn-action" 
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Row */}
            <div className="contact-row-item">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div className="contact-row-content">
                <span className="contact-row-label">Phone / WhatsApp</span>
                <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="contact-comp-link">
                  {personalData.phone}
                </a>
              </div>
            </div>

            {/* Current Company Row */}
            <div className="contact-row-item">
              <div className="contact-icon-box">
                <Building2 size={20} />
              </div>
              <div className="contact-row-content">
                <span className="contact-row-label">Current Company</span>
                <a 
                  href={personalData.company.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-comp-link"
                >
                  <span>{personalData.company.name}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Location Row */}
            <div className="contact-row-item">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div className="contact-row-content">
                <span className="contact-row-label">Location</span>
                <span className="contact-location-text">India • Remote Friendly</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="contact-actions-bar">
            <a href={`mailto:${personalData.email}`} className="btn btn-yellow">
              <Mail size={16} />
              <span>Send Email</span>
            </a>

            <a 
              href={personalData.resumeUrl} 
              download="Maaz_Ibrahim_Resume.pdf"
              className="btn btn-black"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
