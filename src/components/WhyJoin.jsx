import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const benefits = [
  { id: '01', title: 'Real Client Projects', desc: 'Contribute direct features to production codebases serving international customers.' },
  { id: '02', title: 'Industry Practices', desc: 'Master production standards, version control systems, and deployment mechanisms.' },
  { id: '03', title: 'Experienced Mentors', desc: 'Get direct guidance and regular constructive feedback from veteran engineers.' },
  { id: '04', title: 'Agile Team Exposure', desc: 'Participate in sprint standups, planning sessions, and task estimations.' },
  { id: '05', title: 'International Scope', desc: 'Gain global perspective working with clients across Germany, Singapore, and Dubai.' },
  { id: '06', title: 'Performance Growth', desc: 'Earn long-term performance-based raises and extension opportunities.' },
];

export default function WhyJoin() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 60 });

  return (
    <section className="section why-join-section-redesign" id="benefits">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">PROGRAM VALUES</div>
          <h2 className="section-title-large">
            Why Join <span className="text-highlight-accent">This Program?</span>
          </h2>

          <div className="why-tagline-block">
            <span className="bold-lead-accent">Learn. Build. Earn.</span>
            <p className="subtitle-description-text">
              Unlike traditional internships, this program allows you to gain practical industry
              experience while receiving financial support throughout your journey.
            </p>
          </div>
        </div>

        {/* Benefits Grid Layout */}
        <div ref={gridRef} className="benefits-redesign-grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-item-card stagger-item">
              <div className="benefit-card-header">
                <span className="benefit-card-id">{item.id}</span>
              </div>
              <h3 className="benefit-card-title">{item.title}</h3>
              <p className="benefit-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
