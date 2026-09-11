import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { mockProjects } from '../data/mock';

const ProjectCard = ({ project }) => {
  const techBadges = [];
  for (let i = 0; i < project.techStack.length; i++) {
    techBadges.push(
      <Badge key={i} variant="secondary" className="tech-badge">
        {project.techStack[i]}
      </Badge>
    );
  }
  
  return (
    <Card className="project-card" onClick={() => window.open(project.githubUrl, '_blank')}>
      {/* <div className="project-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        <div className="project-overlay"></div>
      </div> */}
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech-stack">
          {techBadges}
        </div>
        
        <div className="project-links">
          <Button variant="ghost" size="sm" className="project-link-btn" >
            <Github size={16} />
            <span>View Code</span>
          </Button>
          {/* <Button variant="ghost" size="sm" className="project-link-btn">
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </Button> */}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projectCards = [];
  for (let i = 0; i < mockProjects.length; i++) {
    projectCards.push(<ProjectCard key={i} project={mockProjects[i]} />);
  }
  
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">PERSONAL PROJECTS</h2>
          <p className="section-subtitle">
            Innovative solutions and technical experiments
          </p>
        </div>

        <div className="projects-grid">
          {projectCards}
        </div>
      </div>
    </section>
  );
};

export default Projects;