import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Workflow, Glasses } from 'lucide-react';
import { mockExpertise } from '../data/mock';

const iconMap = {
  'Code2': Code2,
  'Workflow': Workflow,
  'Glasses': Glasses
};

const ExpertiseCard = ({ item }) => {
  const Icon = iconMap[item.icon];
  
  const techBadges = [];
  for (let i = 0; i < item.techStack.length; i++) {
    techBadges.push(
      <Badge key={i} variant="secondary" className="tech-badge">
        {item.techStack[i]}
      </Badge>
    );
  }
  
  return (
    <Card className="expertise-card">
      <div className="expertise-card-header">
        <div className="expertise-icon">
          <Icon size={32} />
        </div>
        <h3 className="expertise-title">{item.title}</h3>
      </div>
      <p className="expertise-description">
        {item.description}
      </p>
      <div className="tech-stack">
        {techBadges}
      </div>
    </Card>
  );
};

const Expertise = () => {
  const cards = [];
  for (let i = 0; i < mockExpertise.length; i++) {
    cards.push(<ExpertiseCard key={i} item={mockExpertise[i]} />);
  }
  
  return (
    <section id="expertise" className="expertise-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">EXPERTISE</h2>
          <p className="section-subtitle">
            Specialized skills and technical capabilities
          </p>
        </div>
        
        <div className="expertise-grid">
          {cards}
        </div>
      </div>
    </section>
  );
};

export default Expertise;