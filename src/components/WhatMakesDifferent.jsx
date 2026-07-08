import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const features = [
  { icon: '📐', text: 'Learn Industry Standards' },
  { icon: '🏗️', text: 'Build Production-Level Applications' },
  { icon: '🤝', text: 'Work with Real Clients' },
  { icon: '⚙️', text: 'Experience Professional Development Workflows' },
  { icon: '👨‍💻', text: 'Collaborate with Experienced Developers' },
  { icon: '📄', text: 'Build an Impressive Resume' },
  { icon: '💼', text: 'Strengthen Your Technical Portfolio' },
  { icon: '🎤', text: 'Gain Interview-Worthy Project Experience' },
];

export default function WhatMakesDifferent() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 80 });
  const footerRef = useScrollReveal();

  return (
    <section className="section" id="different">
      <div className="container">
        <div ref={headerRef} className="different-header reveal">
          <span className="section-label">Stand Out</span>
          <h2 className="section-title">
            What Makes This Opportunity <span className="gradient-text">Different?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Most internships focus only on training. Here, you will:
          </p>
        </div>

        <div ref={gridRef} className="different-grid">
          {features.map((item, i) => (
            <div key={i} className="different-item stagger-item">
              <div className="different-item-icon">{item.icon}</div>
              <div className="different-item-text">{item.text}</div>
            </div>
          ))}
        </div>

        <div ref={footerRef} className="different-footer reveal">
          By the end of your internship, you'll have <strong style={{ color: 'var(--text-primary)' }}>
          practical experience</strong> that helps you confidently discuss real software projects
          during placement interviews.
        </div>
      </div>
    </section>
  );
}
