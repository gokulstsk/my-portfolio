import React from 'react';
import { Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { mockExperience } from '../data/mock';

const Experience = () => {
  const timelineEntries = [];

  for (let idx = 0; idx < mockExperience.length; idx++) {
    const item = mockExperience[idx];
    const isEducation = item.type === 'education';
    const Icon = isEducation ? GraduationCap : Briefcase;
    const isLast = idx === mockExperience.length - 1;

    // Top-level description bullets
    const topDescriptions = [];
    if (item.description) {
      for (let d = 0; d < item.description.length; d++) {
        topDescriptions.push(
          <li key={d}>{item.description[d]}</li>
        );
      }
    }

    // Nested roles (e.g. SE2 and SE1 progression)
    const nestedRoleBlocks = [];
    if (item.subItems) {
      for (let r = 0; r < item.subItems.length; r++) {
        const role = item.subItems[r];

        const roleDescBullets = [];
        if (role.description) {
          for (let rd = 0; rd < role.description.length; rd++) {
            roleDescBullets.push(
              <li key={rd}>{role.description[rd]}</li>
            );
          }
        }

        const roleTechBadges = [];
        if (role.techStack) {
          for (let rt = 0; rt < role.techStack.length; rt++) {
            roleTechBadges.push(
              <span key={rt} className="tech-pill">
                {role.techStack[rt]}
              </span>
            );
          }
        }

        nestedRoleBlocks.push(
          <div key={r} className="nested-role-block">
            <div className="nested-role-header">
              <h4>{role.title}</h4>
              <span>{role.date}</span>
            </div>

            {role.highlight && (
              <div className="nested-role-highlight">
                ⚡ {role.highlight}
              </div>
            )}

            <ul className="timeline-bullet-list">
              {roleDescBullets}
            </ul>

            {roleTechBadges.length > 0 && (
              <div className="expertise-tech-pills">
                {roleTechBadges}
              </div>
            )}
          </div>
        );
      }
    }

    // Top-level tech stack pills
    const topTechPills = [];
    if (item.techStack) {
      for (let t = 0; t < item.techStack.length; t++) {
        topTechPills.push(
          <span key={t} className="tech-pill">
            {item.techStack[t]}
          </span>
        );
      }
    }

    timelineEntries.push(
      <div key={idx} className="timeline-entry">
        <div className="timeline-left-node">
          <div className="timeline-node-circle">
            <Icon size={22} />
          </div>
          {!isLast && <div className="timeline-connector"></div>}
        </div>

        <div className="timeline-card">
          <div className="timeline-card-header">
            <div>
              <h3 className="timeline-role-title">{item.title}</h3>
              <p className="timeline-company-name">{item.company}</p>
            </div>
            <span className="timeline-date-badge">{item.date}</span>
          </div>

          {topDescriptions.length > 0 && (
            <ul className="timeline-bullet-list">
              {topDescriptions}
            </ul>
          )}

          {nestedRoleBlocks.length > 0 && (
            <div className="nested-roles-container">
              {nestedRoleBlocks}
            </div>
          )}

          {topTechPills.length > 0 && (
            <div className="expertise-tech-pills" style={{ marginTop: '20px' }}>
              {topTechPills}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">
        <div>
          <div className="section-header-pill">
            <TrendingUp size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Track record of delivering production-grade web systems, enterprise workflow engines,
            and software engineering leadership.
          </p>
        </div>

        <div className="experience-timeline">
          {timelineEntries}
        </div>
      </div>
    </section>
  );
};

export default Experience;