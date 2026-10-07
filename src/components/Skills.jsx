import React from 'react';
import { coreExpertiseData } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  ShieldCheck, 
  CreditCard, 
  Wrench,
  Terminal,
  CheckCircle2
} from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return <Layout size={20} />;
      case 'Backend': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Mobile': return <Smartphone size={20} />;
      case 'Authentication': return <ShieldCheck size={20} />;
      case 'Payments': return <CreditCard size={20} />;
      case 'Tools': return <Wrench size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="section-title">
            Core <span className="text-gradient">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Specialized skill set spanning the modern MERN stack, cross-platform mobile app development with React Native, secure APIs, and payment integrations.
          </p>
        </div>

        {/* Core Expertise Categories Grid */}
        <div className="expertise-grid">
          {coreExpertiseData.map((item, idx) => (
            <div key={idx} className="expertise-card pro-card">
              <div className="expertise-card-head">
                <div 
                  className="expertise-icon-box"
                  style={{ color: item.color, backgroundColor: `${item.color}12` }}
                >
                  {getCategoryIcon(item.category)}
                </div>
                <div>
                  <h3 className="expertise-cat-title">{item.category}</h3>
                  <span className="expertise-items-count">{item.skills.length} technologies</span>
                </div>
              </div>

              <div className="expertise-skills-pills">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="expertise-pill">
                    <CheckCircle2 size={13} style={{ color: item.color }} />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Rigor & Architecture Philosophy Banner */}
        <div className="clean-philosophy-banner pro-card">
          <div className="philosophy-icon-box">
            <Terminal size={22} />
          </div>
          <div className="philosophy-text-box">
            <h4 className="philosophy-heading">Full Stack & Mobile Development Standard</h4>
            <p className="philosophy-quote">
              "Focusing on clean, maintainable code, creating intuitive user experiences, solving complex technical issues, and delivering reliable applications that are ready for real-world use."
            </p>
          </div>
          <div className="philosophy-chips">
            <span className="tech-tag blue">MERN Stack</span>
            <span className="tech-tag blue">React Native</span>
            <span className="tech-tag emerald">REST APIs</span>
            <span className="tech-tag purple">Payment Flows</span>
          </div>
        </div>
      </div>
    </section>
  );
}
