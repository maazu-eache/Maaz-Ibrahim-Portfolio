import React from 'react';
import { personalData } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    {
      title: "Full-Stack Web & Mobile Architecture",
      desc: "Architecting modular, maintainable React and React Native applications with clean component hierarchy, predictable state management, and optimized rendering."
    },
    {
      title: "High-Throughput Backend & APIs",
      desc: "Engineering RESTful backend services using Node.js and Express.js paired with MongoDB schema design and indexing for fast querying and data integrity."
    },
    {
      title: "Fintech & Payment Gateway Flows",
      desc: "Integrating enterprise checkout experiences with PayPal & Stripe APIs, automated status reconciliation, and responsive transactional UI feedback."
    },
    {
      title: "Security, JWT & Granular RBAC",
      desc: "Implementing multi-tier role-based authentication and authorization mechanisms to protect sensitive administrative, merchant, and user operations."
    },
    {
      title: "Code Quality & Performance Tuning",
      desc: "Refactoring legacy codebases, resolving intricate state bugs, conducting client-side performance audits, and adhering to modern clean code standards."
    }
  ];

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Professional Career</span>
          </div>
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            3+ years of engineering experience architecting scalable full-stack web and mobile applications for enterprise and client platforms.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="experience-wrapper">
          <div className="experience-box pro-card">
            {/* Header / Company Info */}
            <div className="experience-head">
              <div className="experience-brand">
                <div className="company-icon-box">
                  <Building2 size={24} />
                </div>
                <div className="company-details">
                  <div className="role-status-line">
                    <h3 className="role-title">{personalData.company.role}</h3>
                    <span className="badge-status-job">Full-Time</span>
                  </div>
                  <div className="company-link-line">
                    <span className="comp-name-text">{personalData.company.name}</span>
                    <a 
                      href={personalData.company.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="comp-link-external"
                      title="Visit official website"
                    >
                      <span>safprotech.com</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="experience-dates">
                <div className="date-badge">
                  <Calendar size={13} />
                  <span>3+ Years (Active)</span>
                </div>
                <div className="dept-badge">
                  <MapPin size={13} />
                  <span>Full Stack Dev Division</span>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <div className="experience-summary-para">
              <p>
                Leading and contributing to mission-critical full-stack products from concept to deployment. Specializing in architecting responsive React interfaces, mobile applications with React Native, and resilient Node.js / MongoDB backend microservices with payment handling and granular access controls.
              </p>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="experience-contributions">
              <h4 className="contributions-title">Key Core Contributions:</h4>
              <div className="contributions-grid">
                {responsibilities.map((item, index) => (
                  <div key={index} className="contribution-card">
                    <div className="contrib-icon">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <div className="contrib-text">
                      <span className="contrib-title">{item.title}</span>
                      <p className="contrib-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges Used at SAFPRO */}
            <div className="experience-tech-strip">
              <span className="strip-label">Core Technologies Deployed:</span>
              <div className="strip-tags">
                <span className="tech-tag blue">React.js</span>
                <span className="tech-tag blue">React Native</span>
                <span className="tech-tag emerald">Node.js</span>
                <span className="tech-tag emerald">Express.js</span>
                <span className="tech-tag emerald">MongoDB</span>
                <span className="tech-tag purple">Bootstrap</span>
                <span className="tech-tag">REST APIs</span>
                <span className="tech-tag">JWT & RBAC</span>
                <span className="tech-tag">PayPal & Stripe</span>
                <span className="tech-tag">State Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
