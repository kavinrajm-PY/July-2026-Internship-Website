import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA({ onApply }) {
  const ref = useScrollReveal();

  return (
    <section className="section final-cta-section-redesign">
      <div className="final-cta-geometric-layer"></div>
      <div className="container">
        <div ref={ref} className="reveal final-cta-wrapper-card">
          <div className="final-cta-content">
            <span className="final-cta-eyebrow-small">START YOUR JOURNEY</span>
            
            <h2 className="final-cta-heading-small">
              Your Career Starts <span className="highlight-text-accent-small">Before Graduation</span>
            </h2>
            
            <p className="final-cta-paragraph-small">
              If you are passionate about software development and ready to challenge yourself with 
              real-world client applications, build your portfolio and master industrial development workflows today.
            </p>
          </div>

          <div className="final-cta-action-container">
            <button className="btn-brand-primary" onClick={onApply}>
              Apply Now & Register
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
