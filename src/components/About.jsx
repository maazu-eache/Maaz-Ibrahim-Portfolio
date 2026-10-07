import React from 'react';
import { personalData, educationData } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Smartphone, 
  Database, 
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';

export default function About() {
  const highlights = [
    "Full Stack development with MERN stack (MongoDB, Express, React, Node)",
    "Cross-platform mobile apps for iOS and Android using React Native",
    "Secure JWT Authentication & granular Role-Based Access Control (RBAC)",
    "Multi-gateway payment flows with Stripe, PayPal, and Razorpay",
    "Production deployments including publishing to the Google Play Store"
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate software engineer focused on building robust digital products with clean architecture and intuitive user interfaces.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: About Paragraphs & Highlights */}
          <div className="about-bio-card pro-card">
            <h3 className="about-card-title">Full Stack & Mobile Engineer</h3>
            <div className="about-paragraphs">
              {personalData.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="about-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="about-highlights-group">
              <h4 className="highlights-subtitle">Key Focus Areas:</h4>
              <ul className="about-check-list">
                {highlights.map((item, idx) => (
                  <li key={idx} className="about-check-item">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education & Qualifications Card */}
          <div className="about-side-column">
            {/* Education Card */}
            <div className="education-card pro-card">
              <div className="edu-head">
                <div className="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="edu-title">Education</h3>
                  <span className="edu-sub">Academic Background</span>
                </div>
              </div>

              <div className="edu-divider"></div>

              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-item">
                  <div className="edu-degree-row">
                    <h4 className="degree-title">{edu.degree}</h4>
                    <span className="edu-period-tag">
                      <Calendar size={12} /> {edu.period}
                    </span>
                  </div>

                  <div className="edu-inst-row">
                    <span className="edu-inst-name">{edu.institution}</span>
                    <span className="edu-location">
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>

                  <p className="edu-desc-text">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Summary Pill Box */}
            <div className="quick-summary-box pro-card">
              <h4 className="summary-box-title">Development Philosophy</h4>
              <p className="summary-box-text">
                "Writing clean, modular code, keeping components reusable, and crafting frictionless experiences across web and mobile."
              </p>
              <div className="summary-tags-row">
                <span className="tech-tag blue">MERN Stack</span>
                <span className="tech-tag blue">React Native</span>
                <span className="tech-tag emerald">Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
