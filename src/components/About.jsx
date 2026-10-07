import React from 'react';
import { personalData, educationData } from '../data/portfolioData';
import { Building2, GraduationCap, ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About & Background</span>
          <h2 className="section-title">Background & Experience</h2>
        </div>

        <div className="about-content-grid">
          {/* Left: Bio */}
          <div className="about-bio">
            <p className="bio-lead">
              I specialize in building modern web and mobile applications from frontend to backend. My experience includes developing responsive React applications, cross-platform React Native apps, Node.js APIs, MongoDB databases, authentication systems, payment workflows, and role-based platforms.
            </p>
            <p className="bio-sub">
              I focus on writing clean, maintainable code, creating intuitive user experiences, solving complex technical issues, and delivering reliable applications ready for real-world production.
            </p>
          </div>

          {/* Right: Quick Work & Education Cards */}
          <div className="about-cards-col">
            {/* Work Card */}
            <div className="info-card">
              <div className="info-card-header">
                <Building2 size={18} />
                <span className="info-card-title">Work Experience</span>
              </div>
              <div className="info-card-body">
                <div className="info-item-role">{personalData.company.role}</div>
                <div className="info-item-comp">
                  <a href={personalData.company.url} target="_blank" rel="noopener noreferrer" className="comp-link">
                    {personalData.company.name} <ExternalLink size={12} />
                  </a>
                </div>
                <div className="info-item-period">
                  <Calendar size={12} /> {personalData.company.period}
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="info-card">
              <div className="info-card-header">
                <GraduationCap size={18} />
                <span className="info-card-title">Education</span>
              </div>
              <div className="info-card-body">
                {educationData.map((edu, idx) => (
                  <div key={idx}>
                    <div className="info-item-role">{edu.degree}</div>
                    <div className="info-item-comp">{edu.institution}</div>
                    <div className="info-item-period">
                      <Calendar size={12} /> {edu.period} • {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
