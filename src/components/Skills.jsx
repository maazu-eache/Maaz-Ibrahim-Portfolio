import React from 'react';
import { coreExpertiseData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Core Expertise</h2>
          <p className="section-desc">
            Technologies and tools deployed across production web and mobile applications.
          </p>
        </div>

        <div className="skills-minimal-grid">
          {coreExpertiseData.map((group, idx) => (
            <div key={idx} className="skill-group-card">
              <h3 className="skill-group-name">{group.category}</h3>
              <div className="skill-pills-wrap">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
