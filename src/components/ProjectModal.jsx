import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-bar">
          <div>
            <div className="modal-badge-group">
              <span className="tag-pill yellow">{project.category}</span>
              {project.badge && <span className="tag-pill">{project.badge}</span>}
            </div>
            <h3 className="modal-heading">{project.title}</h3>
            <p className="modal-subheading">{project.subtitle}</p>
          </div>

          <button 
            type="button" 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-content-area">
          <div className="modal-section-unit">
            <h4 className="modal-unit-title">Overview</h4>
            <p className="modal-unit-desc">{project.tagline}</p>
          </div>

          <div className="modal-section-unit">
            <h4 className="modal-unit-title">Key Contributions</h4>
            <ul className="modal-list">
              {project.highlights.map((bullet, idx) => (
                <li key={idx} className="modal-list-item">
                  <CheckCircle2 size={15} className="item-check" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section-unit">
            <h4 className="modal-unit-title">Architecture & System</h4>
            <div className="modal-arch-grid">
              <div className="arch-card">
                <span className="arch-label">Frontend & Mobile</span>
                <p>{project.architecture.frontend}</p>
              </div>
              <div className="arch-card">
                <span className="arch-label">Backend & APIs</span>
                <p>{project.architecture.backend}</p>
              </div>
              <div className="arch-card">
                <span className="arch-label">Database</span>
                <p>{project.architecture.database}</p>
              </div>
              <div className="arch-card">
                <span className="arch-label">Security & Logic</span>
                <p>{project.architecture.security || project.architecture.performance}</p>
              </div>
            </div>
          </div>

          <div className="modal-section-unit">
            <h4 className="modal-unit-title">Tech Stack</h4>
            <div className="modal-tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tag-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer-bar">
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
            Close
          </button>
          <a href="#contact" className="btn btn-black btn-sm" onClick={onClose}>
            <span>Get In Touch</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
