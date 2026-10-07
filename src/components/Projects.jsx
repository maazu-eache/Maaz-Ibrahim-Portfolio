import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Layers,
  Code
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Enterprise', 'Mobile & Web', 'Fintech'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Case Studies</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Production web and mobile platforms engineered with clean code, scalable architecture, role-based workflows, and secure payment integrations.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-bar">
            <div className="filter-pill-group">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid without images - Clean, Executive Cards */}
        <div className="projects-grid-clean">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="clean-project-card pro-card"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top Meta */}
              <div className="project-top-row">
                <div className="project-badges">
                  <span className="project-cat-pill">{project.category}</span>
                  <span className="project-duration-pill">
                    <Clock size={12} />
                    <span>{project.duration}</span>
                  </span>
                </div>
                <button 
                  type="button" 
                  className="quick-view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <span>Details</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Title and Subtitle */}
              <div className="project-title-area">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-sub">{project.subtitle}</p>
              </div>

              {/* Summary */}
              <p className="project-tagline-text">
                {project.tagline}
              </p>

              {/* Highlights from Resume */}
              <div className="project-highlights-container">
                <span className="highlights-header">Key Achievements:</span>
                <ul className="highlights-list">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="highlight-point">
                      <CheckCircle2 size={14} className="point-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips & Footer */}
              <div className="project-card-footer">
                <div className="tech-chip-group">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Architecture Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
