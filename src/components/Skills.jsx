import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Layers, 
  Palette, 
  Cpu, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Sparkles,
  Terminal
} from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Database': return <Database size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'CreditCard': return <CreditCard size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={14} />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Structured full-stack skills from Maaz's resume honed over 3+ years of building production web applications, backend APIs, and authentication flows.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-grid-clean">
          {skillsData.map((cat, idx) => (
            <div key={idx} className="skill-card-clean pro-card">
              {/* Category Header */}
              <div className="skill-cat-head">
                <div className="skill-icon-wrap" style={{ color: cat.color, backgroundColor: `${cat.color}12` }}>
                  {getCategoryIcon(cat.icon)}
                </div>
                <div className="skill-cat-info">
                  <h3 className="skill-cat-title">{cat.category}</h3>
                  <span className="skill-items-count">{cat.skills.length} competencies</span>
                </div>
              </div>

              <p className="skill-cat-desc">{cat.description}</p>

              {/* Skills List with Progress */}
              <div className="skills-list-wrap">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row-item">
                    <div className="skill-meta-bar">
                      <span className="skill-text-label">
                        {skill.highlight && <span className="highlight-bullet" style={{ backgroundColor: cat.color }}></span>}
                        {skill.name}
                      </span>
                      <span className="skill-pct-num">{skill.level}%</span>
                    </div>

                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: cat.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Rigor Banner */}
        <div className="clean-philosophy-banner pro-card">
          <div className="philosophy-icon-box">
            <Terminal size={22} />
          </div>
          <div className="philosophy-text-box">
            <h4 className="philosophy-heading">Clean Code & Architecture Philosophy</h4>
            <p className="philosophy-quote">
              "Writing clean, modular, and maintainable code with reusable component structures, responsive layouts, robust error handling, and high-performance server logic."
            </p>
          </div>
          <div className="philosophy-chips">
            <span className="tech-tag blue">Component Reusability</span>
            <span className="tech-tag emerald">Clean State Logic</span>
            <span className="tech-tag purple">REST Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}
