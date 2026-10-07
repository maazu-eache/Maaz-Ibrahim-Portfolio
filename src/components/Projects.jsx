import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Production Projects</h2>
          <p className="section-desc">
            Production-ready applications built with MERN stack and React Native across web, iOS, and Android.
          </p>
        </div>

        <div className="projects-minimal-list">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-minimal-item ${project.badge ? 'featured-item' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-item-top">
                <div className="project-index">0{index + 1}</div>
                <div className="project-badges">
                  <span className="tag-pill">{project.category}</span>
                  {project.badge && (
                    <span className="tag-pill yellow">
                      <Sparkles size={11} /> {project.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="project-main-info">
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-desc-text">{project.tagline}</p>
              </div>

              <div className="project-footer-row">
                <div className="project-tags">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tag-pill">{tech}</span>
                  ))}
                </div>

                <button 
                  type="button" 
                  className="project-action-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <span>Details</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
