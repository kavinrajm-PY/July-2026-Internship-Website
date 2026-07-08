import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const features = [
  { icon: '✓', text: 'Learn Professional Industry Standards' },
  { icon: '✓', text: 'Build Production-Level Applications' },
  { icon: '✓', text: 'Work with Real Global Clients' },
  { icon: '✓', text: 'Experience Professional Development Workflows' },
  { icon: '✓', text: 'Collaborate with Experienced Developers' },
  { icon: '✓', text: 'Build an Impressive Technical Resume' },
  { icon: '✓', text: 'Strengthen Your Software Engineering Portfolio' },
  { icon: '✓', text: 'Gain Genuine Interview-Worthy Project Experience' },
];

export default function WhatMakesDifferent() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 60 });
  const footerRef = useScrollReveal();

  return (
    <section className="section different-section-redesign" id="different">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">VALUE COMPARISON</div>
          <h2 className="section-title-large">
            What Makes This Opportunity <span className="text-highlight-accent">Different?</span>
          </h2>
          <p className="subtitle-description-text">
            Traditional internships focus primarily on observation. Here, you will actively build.
          </p>
        </div>

        {/* Feature Check List Grid */}
        <div ref={gridRef} className="different-checklist-grid">
          {features.map((item, i) => (
            <div key={i} className="checklist-row-item stagger-item">
              <span className="checklist-check-icon">{item.icon}</span>
              <span className="checklist-text-label">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div ref={footerRef} className="reveal different-summary-card">
          <p className="summary-card-text">
            By the end of your internship, you will possess the practical engineering experience 
            needed to confidently explain and defend real-world software architecture choices 
            during future placement interviews.
          </p>
        </div>
      </div>
    </section>
  );
}
