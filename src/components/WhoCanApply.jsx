import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const eligibilityCriteria = [
  { term: 'Current Education', detail: '2nd or 3rd Year Engineering Students' },
  { term: 'Coding Level', detail: 'Intermediate-level Developers' },
  { term: 'Motivation', detail: 'Passionate about Software Development' },
  { term: 'Work Environment', detail: 'Ready to Work from Office' },
  { term: 'Commitment Term', detail: 'Willing to commit for long-term growth' },
];

const skills = [
  { text: 'Intermediate-level development skills', status: 'Core Requirement' },
  { text: 'Basic understanding of programming fundamentals', status: 'Core Requirement' },
  { text: 'Passion for learning and building real-world applications', status: 'Core Requirement' },
  { text: 'Testing knowledge is an added advantage', status: 'Preferred Skill' },
];

export default function WhoCanApply() {
  const headerRef = useScrollReveal();
  const criteriaRef = useStaggerReveal({ staggerDelay: 80 });
  const skillsRef = useScrollReveal();

  return (
    <section className="section eligibility-section-redesign" id="eligibility">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">CANDIDATE ELIGIBILITY</div>
          <h2 className="section-title-large">
            Who Can <span className="text-highlight-accent">Apply?</span>
          </h2>
        </div>

        {/* 2-Column Main Layout */}
        <div className="eligibility-grid-layout">
          {/* Left Column: Criteria Table */}
          <div className="eligibility-left-table">
            <h3 className="sub-title-corporate">ELIGIBILITY DETAILS</h3>
            
            <div ref={criteriaRef} className="criteria-table-container">
              {eligibilityCriteria.map((item, i) => (
                <div key={i} className="criteria-row-item stagger-item">
                  <div className="criteria-term">{item.term}</div>
                  <div className="criteria-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Preferred Skills Checklist */}
          <div ref={skillsRef} className="reveal eligibility-right-skills">
            <h3 className="sub-title-corporate">PREFERRED MINDSET & SKILLS</h3>
            
            <div className="skills-checklist-wrapper">
              {skills.map((skill, i) => (
                <div key={i} className={`skill-check-card ${skill.status === 'Preferred Skill' ? 'preferred' : 'required'}`}>
                  <div className="skill-meta-label">
                    <span className="meta-badge">{skill.status}</span>
                  </div>
                  <p className="skill-main-text">{skill.text}</p>
                </div>
              ))}
            </div>

            <div className="skills-warning-footer">
              <p>
                <strong>We are not looking for complete beginners.</strong> We are looking for motivated learners 
                who already have a solid foundation and are ready to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
