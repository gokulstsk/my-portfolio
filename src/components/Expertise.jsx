import React from 'react';
import { Code2, Workflow, Glasses, Sparkles } from 'lucide-react';
import { mockExpertise } from '../data/mock';

const iconMap = {
  Code2: Code2,
  Workflow: Workflow,
  Glasses: Glasses,
};

const Expertise = () => {
  const cards = [];
  for (let i = 0; i < mockExpertise.length; i++) {
    const item = mockExpertise[i];
    const Icon = iconMap[item.icon] || Code2;

    const techPills = [];
    if (item.techStack) {
      for (let j = 0; j < item.techStack.length; j++) {
        techPills.push(
          <span key={j} className="tech-pill">
            {item.techStack[j]}
          </span>
        );
      }
    }

    cards.push(
      <div key={i} className="expertise-card">
        <div className="expertise-icon-wrapper">
          <Icon size={26} />
        </div>
        <h3 className="expertise-card-title">{item.title}</h3>
        <div className="expertise-tagline">{item.tagline}</div>
        <p className="expertise-card-desc">{item.description}</p>
        <div className="expertise-tech-pills">
          {techPills}
        </div>
      </div>
    );
  }

  return (
    <section id="expertise" className="section-wrapper">
      <div className="section-container">
        <div>
          <div className="section-header-pill">
            <Sparkles size={14} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Specialized engineering capabilities across modern full-stack web platforms,
            business process automation, and emerging technologies.
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