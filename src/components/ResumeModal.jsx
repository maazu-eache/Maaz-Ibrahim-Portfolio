import React, { useEffect, useState } from 'react';
import { personalData, coreExpertiseData, projectsData, languagesData, educationData } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  GraduationCap
} from 'lucide-react';

export default function ResumeModal({ onClose }) {
  const [viewMode, setViewMode] = useState('interactive');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-container pro-card resume-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="modal-header resume-header-bar">
          <div className="resume-header-title">
            <FileText size={18} className="text-primary" />
            <h3 className="modal-title">Maaz Ibrahim — Resume</h3>
          </div>

          <div className="resume-control-actions">
            <a 
              href="/Maaz_Resume.pdf" 
              download="Maaz_Ibrahim_Resume.pdf"
              className="btn btn-primary btn-sm"
              id="resume-modal-download-btn"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={handlePrint}
            >
              <Printer size={14} />
              <span>Print</span>
            </button>

            <button 
              type="button" 
              className="modal-close-button"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="resume-tabs-row">
          <button 
            type="button" 
            className={`tab-switch-btn ${viewMode === 'interactive' ? 'active' : ''}`}
            onClick={() => setViewMode('interactive')}
          >
            Digital Interactive Resume
          </button>
          <button 
            type="button" 
            className={`tab-switch-btn ${viewMode === 'pdf' ? 'active' : ''}`}
            onClick={() => setViewMode('pdf')}
          >
            Original Document Preview
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body resume-body-scroll">
          {viewMode === 'pdf' ? (
            <div className="pdf-viewer-frame">
              <object 
                data="/Maaz_Resume.pdf" 
                type="application/pdf" 
                className="pdf-render-object"
              >
                <div className="pdf-fallback-box">
                  <p>Your browser doesn't have an inline PDF reader.</p>
                  <a 
                    href="/Maaz_Resume.pdf" 
                    download="Maaz_Ibrahim_Resume.pdf"
                    className="btn btn-primary btn-sm mt-3"
                  >
                    <Download size={15} /> Download Maaz_Resume.pdf
                  </a>
                </div>
              </object>
            </div>
          ) : (
            <div className="clean-resume-document">
              {/* Header */}
              <div className="doc-header">
                <div className="doc-brand-title-wrap">
                  <img src="/MI.png" alt="MI" className="resume-doc-logo" />
                  <div>
                    <h1 className="doc-name">{personalData.name}</h1>
                    <h2 className="doc-title">{personalData.role}</h2>
                  </div>
                </div>

                <div className="doc-company-box">
                  <span className="doc-section-tag">WORKING AT</span>
                  <div className="doc-comp-name">{personalData.company.name}</div>
                  <a 
                    href={personalData.company.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="doc-comp-link"
                  >
                    www.safprotech.com
                  </a>
                </div>
              </div>

              <div className="doc-separator"></div>

              {/* Profile */}
              <div className="doc-block">
                <h3 className="doc-block-title">PROFILE</h3>
                <p className="doc-text">
                  {personalData.bio}
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="doc-grid-cols">
                {/* Left Column: Core Expertise, Education, Languages */}
                <div className="doc-col-left">
                  <div className="doc-block">
                    <h3 className="doc-block-title">CORE EXPERTISE</h3>
                    <div className="doc-skills-group">
                      {coreExpertiseData.map((cat, idx) => (
                        <div key={idx} className="doc-skill-unit">
                          <h4 className="doc-skill-cat">{cat.category}</h4>
                          <p className="doc-skill-names">
                            {cat.skills.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="doc-block">
                    <h3 className="doc-block-title">EDUCATION</h3>
                    {educationData.map((edu, idx) => (
                      <div key={idx} className="doc-edu-unit">
                        <div className="doc-edu-degree">{edu.degree}</div>
                        <div className="doc-edu-school">{edu.institution}, {edu.location}</div>
                        <div className="doc-edu-year">{edu.period}</div>
                      </div>
                    ))}
                  </div>

                  <div className="doc-block">
                    <h3 className="doc-block-title">LANGUAGES</h3>
                    <ul className="doc-lang-list">
                      {languagesData.map((lang, idx) => (
                        <li key={idx} className="doc-lang-row">
                          <span>{lang.flag} {lang.name}</span>
                          <span className="doc-lang-fluency">Fluent</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Projects */}
                <div className="doc-col-right">
                  <div className="doc-block">
                    <h3 className="doc-block-title">FEATURED PROJECTS</h3>
                    <div className="doc-projects-group">
                      {projectsData.map((proj) => (
                        <div key={proj.id} className="doc-proj-unit">
                          <div className="doc-proj-header-line">
                            <span className="doc-proj-name">{proj.title}</span>
                            <span className="doc-proj-time">— {proj.subtitle}</span>
                          </div>
                          <div className="doc-proj-tagline">{proj.tagline}</div>
                          <div className="doc-proj-tech">
                            <strong>Tech Stack:</strong> {proj.techStack.join(', ')}
                          </div>
                          <ul className="doc-proj-bullets">
                            {proj.highlights.map((bullet, bIdx) => (
                              <li key={bIdx}>• {bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
