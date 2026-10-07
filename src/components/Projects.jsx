import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  CheckCircle2, 
  Smartphone,
  Globe,
  Sparkles
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web & Mobile', 'Enterprise', 'Fintech', 'Mobile (Published)'];

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
            <span>Portfolio Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Scalable web and mobile applications built with the MERN stack and React Native, featuring intuitive user flows, RESTful APIs, role-based security, and payment integrations.
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

        {/* Clean Project Cards Grid */}
        <div className="projects-grid-clean">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`clean-project-card pro-card ${project.badge ? 'highlighted-project-card' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top Meta */}
              <div className="project-top-row">
                <div className="project-badges">
                  <span className="project-cat-pill">{project.category}</span>
                  {project.badge && (
                    <span className="project-special-badge">
                      <Sparkles size={12} /> {project.badge}
                    </span>
                  )}
                </div>
                <button 
                  type="button" 
                  className="quick-view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  aria-label={`View architecture for ${project.title}`}
                >
                  <span>Architecture</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Title & Subtitle */}
              <div className="project-title-area">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-sub">{project.subtitle}</p>
              </div>

              {/* Tagline / Summary */}
              <p className="project-tagline-text">
                {project.tagline}
              </p>

              {/* Highlights List */}
              <div className="project-highlights-container">
                <span className="highlights-header">Key Highlights & Features:</span>
                <ul className="highlights-list">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="highlight-point">
                      <CheckCircle2 size={14} className="point-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
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
