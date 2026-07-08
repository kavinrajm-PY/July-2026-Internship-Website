import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const expectations = [
  'Attend the office daily in accordance with schedule rules.',
  'Follow the assigned team working structure and standards.',
  'Maintain professional workspace discipline and communication.',
  'Complete assigned software deliverables on time.',
];

const leaveAllowed = [
  'Internal College Examinations',
  'Semester University Examinations',
];

const leaveNotAllowed = [
  'Placement Drives',
  'College Events & Cultural Festivals',
  'Academic Assignment Submissions',
  'Academic Project Reviews & Record Works',
  'External Workshops & Seminars',
  'Routine Academic Tasks',
];

export default function Commitment() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section commitment-section-redesign" id="commitment">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">RULES & EXPECTATIONS</div>
          <h2 className="section-title-large">
            Attendance & <span className="text-highlight-accent">Commitment</span>
          </h2>
        </div>

        {/* 2-Column Rules Grid */}
        <div ref={contentRef} className="reveal rules-grid-layout">
          {/* Column 1: Expectations */}
          <div className="rules-card-panel">
            <h3 className="rules-panel-heading">OFFICE EXPECTATIONS</h3>
            <p className="rules-panel-desc">
              This opportunity is built for developers committed to significant career growth. 
              Because you will contribute to production client systems, regular attendance is mandatory.
            </p>
            
            <ul className="rules-bullets-list">
              {expectations.map((item, i) => (
                <li key={i} className="rules-bullet-item">
                  <span className="bullet-prefix">■</span>
                  <span className="bullet-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Leave Policy */}
          <div className="rules-card-panel">
            <h3 className="rules-panel-heading">LEAVE POLICY MANUAL</h3>
            <p className="rules-panel-desc">
              Leave requests are subject to strict corporate policy. Permissions are granted 
              solely for official college examinations:
            </p>

            <div className="leave-rules-subgroup">
              <span className="leave-status-title allowed">APPROVED FOR:</span>
              <div className="leave-status-tags-container">
                {leaveAllowed.map((item, i) => (
                  <span key={i} className="leave-status-tag allowed">✓ {item}</span>
                ))}
              </div>
            </div>

            <div className="leave-rules-subgroup" style={{ marginTop: '20px' }}>
              <span className="leave-status-title rejected">NOT APPROVED FOR:</span>
              <div className="leave-status-tags-container">
                {leaveNotAllowed.map((item, i) => (
                  <span key={i} className="leave-status-tag rejected">✕ {item}</span>
                ))}
              </div>
            </div>

            <div className="leave-declaration-note">
              Applicants must obtain prior approval from their respective academic institutions before joining. 
              An official Internship Offer Letter will be provided to support your college permissions where applicable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
