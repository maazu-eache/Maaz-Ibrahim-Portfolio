import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  ArrowRight,
  FolderGit2
} from 'lucide-react';

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
        className="modal-container pro-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <div className="modal-badge-row">
              <span className="modal-cat-tag">{project.category}</span>
              <span className="modal-duration-tag">
                <Clock size={13} /> {project.duration}
              </span>
            </div>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <button 
            type="button" 
            className="modal-close-button" 
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="modal-body">
          {/* Quick Metrics */}
          <div className="modal-metrics-bar">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="metric-cell">
                <span className="cell-label">{m.label}</span>
                <span className="cell-val">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div className="modal-block">
            <h4 className="modal-block-title">Project Overview</h4>
            <p className="modal-block-text">{project.tagline}</p>
          </div>

          {/* Resume Highlights & Contributions */}
          <div className="modal-block">
            <h4 className="modal-block-title">Key Contributions & Features Implemented:</h4>
            <ul className="modal-bullet-list">
              {project.highlights.map((bullet, idx) => (
                <li key={idx} className="modal-bullet-item">
                  <CheckCircle2 size={16} className="bullet-check text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architectural Breakdown */}
          <div className="modal-block">
            <h4 className="modal-block-title">System Architecture:</h4>
            <div className="arch-layout">
              <div className="arch-box">
                <div className="arch-box-head">
                  <Layers size={16} className="text-primary" />
                  <span>Frontend Architecture</span>
                </div>
                <p>{project.architecture.frontend}</p>
              </div>

              <div className="arch-box">
                <div className="arch-box-head">
                  <Server size={16} className="text-primary" />
                  <span>Backend & APIs</span>
                </div>
                <p>{project.architecture.backend}</p>
              </div>

              <div className="arch-box">
                <div className="arch-box-head">
                  <Database size={16} className="text-emerald" />
                  <span>Database Layer</span>
                </div>
                <p>{project.architecture.database}</p>
              </div>

              <div className="arch-box">
                <div className="arch-box-head">
                  <ShieldCheck size={16} className="text-purple" />
                  <span>Security & Logic</span>
                </div>
                <p>{project.architecture.security || project.architecture.performance}</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="modal-block">
            <h4 className="modal-block-title">Technologies & Tools:</h4>
            <div className="modal-tags-wrap">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-tag blue">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>
            <span>Discuss Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
