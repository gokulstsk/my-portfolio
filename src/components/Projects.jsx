import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { mockProjects } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack & Web', value: 'fullstack' },
    { label: 'Distributed Backend', value: 'backend' },
    { label: 'Security & Forensics', value: 'security' },
  ];

  const filteredProjects = [];
  for (let i = 0; i < mockProjects.length; i++) {
    if (selectedCategory === 'all' || mockProjects[i].category === selectedCategory) {
      filteredProjects.push(mockProjects[i]);
    }
  }

  // Pre-build category buttons
  const categoryButtons = [];
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    categoryButtons.push(
      <button
        key={cat.value}
        onClick={() => setSelectedCategory(cat.value)}
        className={`filter-pill ${selectedCategory === cat.value ? 'active' : ''}`}
      >
        {cat.label}
      </button>
    );
  }

  // Pre-build project cards
  const projectCards = [];
  for (let i = 0; i < filteredProjects.length; i++) {
    const project = filteredProjects[i];
    const hasLiveDemo =
      project.liveUrl &&
      project.liveUrl !== '#' &&
      !project.liveUrl.includes('github.com');

    const techPills = [];
    if (project.techStack) {
      for (let j = 0; j < project.techStack.length; j++) {
        techPills.push(
          <span key={j} className="tech-pill">
            {project.techStack[j]}
          </span>
        );
      }
    }

    projectCards.push(
      <div key={project.id || i} className="project-card-modern">
        <div className="project-card-top">
          <span className="project-category-badge">
            {project.category || 'Engineering'}
          </span>
          {project.stats && (
            <span className="project-stats-pill">{project.stats}</span>
          )}
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          {project.highlight && (
            <div className="project-highlight-line">
              ⚡ {project.highlight}
            </div>
          )}
          <p className="project-card-description">{project.description}</p>

          <div className="project-tech-row">
            {techPills}
          </div>
        </div>

        <div className="project-card-footer">
          {hasLiveDemo && (
            <a
              href={project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-primary"
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn-ghost"
          >
            <Github size={15} />
            <span>View Code</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-container">
        <div style={{ textAlign: 'center' }}>
          <div className="section-header-pill">
            <FolderGit2 size={14} />
            <span>Featured Builds</span>
          </div>
          <h2 className="section-title">Personal & Open Source Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Production web platforms, resilient distributed workers, interactive developer docs,
            and low-level software utilities.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {categoryButtons}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-modern">
          {projectCards}
        </div>
      </div>
    </section>
  );
};

export default Projects;