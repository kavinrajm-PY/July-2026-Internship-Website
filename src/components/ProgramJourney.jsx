import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function ProgramJourney() {
  const headerRef = useScrollReveal();
  const timelineRef = useStaggerReveal({ staggerDelay: 150 });

  return (
    <section className="section journey-section-redesign" id="journey">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">ROADMAP & EVALUATION TIMELINE</div>
          <h2 className="section-title-large">
            Program <span className="text-highlight-accent">Journey</span>
          </h2>
        </div>

        {/* Roadmap Timeline */}
        <div ref={timelineRef} className="roadmap-timeline-wrapper">
          {/* Phase 1 */}
          <div className="roadmap-phase-node stagger-item">
            <div className="roadmap-meta-column">
              <span className="phase-badge-corporate">PHASE 1</span>
              <span className="phase-duration-tag">Month 1</span>
            </div>
            
            <div className="roadmap-content-card">
              <h3 className="phase-heading-title">Structured Developer Training</h3>
              <p className="phase-body-desc">
                Receive hands-on, structured guidance covering professional software development workflows 
                and standards. This phase equips you to safely collaborate on live projects.
              </p>
              
              <div className="phase-topics-tags">
                {[
                  'Company Workflow',
                  'Development Standards',
                  'Project Structure',
                  'Coding Practices',
                  'Tools & Technologies',
                  'Team Collaboration',
                  'Industry Best Practices',
                ].map((item, i) => (
                  <span key={i} className="topic-pill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="roadmap-phase-node stagger-item">
            <div className="roadmap-meta-column">
              <span className="phase-badge-corporate">PHASE 2</span>
              <span className="phase-duration-tag">Months 2 & 3</span>
            </div>
            
            <div className="roadmap-content-card">
              <h3 className="phase-heading-title">Live Project Deployment</h3>
              <p className="phase-body-desc">
                Transition to real project tasks. Work alongside senior engineers to develop, review, 
                and push codebase updates for international systems.
              </p>
              
              <div className="allowance-block-details">
                <span className="allowance-label">SUPPORT ALLOWANCE</span>
                <span className="allowance-value">₹2,000 / Month</span>
                <span className="allowance-purpose">Provided to support local travel and food expenses.</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="roadmap-phase-node stagger-item">
            <div className="roadmap-meta-column">
              <span className="phase-badge-corporate">PHASE 3</span>
              <span className="phase-duration-tag">End of M3</span>
            </div>
            
            <div className="roadmap-content-card">
              <h3 className="phase-heading-title">Performance Evaluation</h3>
              <p className="phase-body-desc">
                Your performance will be thoroughly evaluated to determine long-term alignment across multiple vectors:
              </p>

              <div className="evaluation-indicators-grid">
                {[
                  'Learning Ability',
                  'Technical Skills',
                  'Project Contributions',
                  'Attendance',
                  'Communication',
                  'Teamwork',
                  'Professionalism',
                  'Commitment',
                ].map((item, i) => (
                  <div key={i} className="eval-indicator-pill">
                    <span className="eval-bullet">■</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="roadmap-phase-node stagger-item">
            <div className="roadmap-meta-column">
              <span className="phase-badge-corporate">PHASE 4</span>
              <span className="phase-duration-tag">Long-Term Track</span>
            </div>
            
            <div className="roadmap-content-card">
              <h3 className="phase-heading-title">Long-Term Placement Categories</h3>
              <p className="phase-body-desc">
                Successful candidates move into long-term developer tracks based on their probation evaluation:
              </p>

              <div className="placement-categories-flex">
                <div className="placement-card-item high-track">
                  <div className="placement-badge">HIGH PERFORMERS</div>
                  <h4 className="placement-title">Performance-Based SDE Intern</h4>
                  <p className="placement-desc">
                    Offered a long-term internship (minimum 1-year commitment) with advanced responsibilities.
                  </p>
                  <div className="placement-allowance-badge">Up to ₹5,000 / month</div>
                </div>

                <div className="placement-card-item growth-track">
                  <div className="placement-badge">DEVELOPING PERFORMERS</div>
                  <h4 className="placement-title">Extended Internship & Training</h4>
                  <p className="placement-desc">
                    Provided additional guidance and ongoing project tasks to foster further skill growth.
                  </p>
                  <div className="placement-allowance-badge">₹2,000 / month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
