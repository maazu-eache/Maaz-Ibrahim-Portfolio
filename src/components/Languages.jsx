import React from 'react';
import { languagesData } from '../data/portfolioData';
import { Globe2, CheckCircle2 } from 'lucide-react';

export default function Languages() {
  return (
    <section id="languages" className="section-wrapper languages-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Globe2 size={14} />
            <span>Communication</span>
          </div>
          <h2 className="section-title">
            Spoken <span className="text-gradient">Languages</span>
          </h2>
          <p className="section-subtitle">
            Multilingual fluency facilitating seamless team communication and cross-functional technical collaboration.
          </p>
        </div>

        <div className="languages-grid-clean">
          {languagesData.map((lang, idx) => (
            <div key={idx} className="language-card-clean pro-card">
              <div className="lang-header-row">
                <span className="lang-flag-emoji">{lang.flag}</span>
                <div className="lang-text-meta">
                  <h3 className="lang-name-title">{lang.name}</h3>
                  <span className="lang-level-sub">{lang.level}</span>
                </div>
              </div>

              <div className="lang-progress-area">
                <div className="lang-track">
                  <div 
                    className="lang-fill"
                    style={{ width: `${lang.score}%` }}
                  ></div>
                </div>
                <div className="lang-footer-meta">
                  <span className="lang-status-text">
                    <CheckCircle2 size={13} className="text-emerald" /> Fluent & Working
                  </span>
                  <span className="lang-pct">{lang.score}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
