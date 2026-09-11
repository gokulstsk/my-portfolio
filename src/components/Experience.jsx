import React from 'react';
import { Badge } from './ui/badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import { mockExperience } from '../data/mock';

const TimelineItem = ({ item, isLast }) => {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  const descriptions = [];
  if (item.description) {
    for (let i = 0; i < item.description.length; i++) {
      descriptions.push(<li key={i}>{item.description[i]}</li>);
    }
  }

  const techBadges = [];
  if (item.techStack) {
    for (let i = 0; i < item.techStack.length; i++) {
      techBadges.push(
        <Badge key={i} variant="outline" className="timeline-tech-badge">
          {item.techStack[i]}
        </Badge>
      );
    }
  }

  // Build nested roles using for-loops
  const subItems = [];

  if (item.subItems) {
    for (let i = 0; i < item.subItems.length; i++) {
      const role = item.subItems[i];

      const roleDescriptions = [];
      if (role.description) {
        for (let j = 0; j < role.description.length; j++) {
          roleDescriptions.push(
            <li key={j}>{role.description[j]}</li>
          );
        }
      }

      const roleBadges = [];
      if (role.techStack) {
        for (let j = 0; j < role.techStack.length; j++) {
          roleBadges.push(
            <Badge
              key={j}
              variant="outline"
              className="timeline-tech-badge"
            >
              {role.techStack[j]}
            </Badge>
          );
        }
      }

      subItems.push(
        <div className="experience-role" key={i}>
          <div className="experience-role-header">
            <h4>{role.title}</h4>
            <span>{role.date}</span>
          </div>

          <ul className="timeline-description">
            {roleDescriptions}
          </ul>

          <div className="timeline-tech-stack">
            {roleBadges}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <div className="timeline-icon">
          <Icon size={20} />
        </div>

        {!isLast && <div className="timeline-line"></div>}
      </div>

      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
          </div>

          <span className="timeline-date">{item.date}</span>
        </div>
        {item.techStack && (
          <div className="timeline-tech-stack">
            {techBadges}
          </div>
        )}

        {item.description && (
          <ul className="timeline-description">
            {descriptions}
          </ul>
        )}

        

        {subItems.length > 0 && (
          <div className="nested-experience">
            {subItems}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const timelineItems = [];
  for (let i = 0; i < mockExperience.length; i++) {
    timelineItems.push(
      <TimelineItem 
        key={i} 
        item={mockExperience[i]} 
        isLast={i === mockExperience.length - 1} 
      />
    );
  }
  
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">CAREER JOURNEY</h2>
          <p className="section-subtitle">
            Professional experience and education
          </p>
        </div>

        <div className="timeline">
          {timelineItems}
        </div>
      </div>
    </section>
  );
};

export default Experience;