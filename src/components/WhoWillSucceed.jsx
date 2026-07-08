import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const traits = [
  'Seeking genuine, hands-on industrial exposure.',
  'Truly enjoy developing and building software.',
  'Excited by complex technical problem solving.',
  'Possess high self-motivation and discipline.',
  'Able to read docs and learn independently.',
  'Value practical skill building over theoretical memory.',
  'Aim to secure SDE credentials before graduation.',
];

export default function WhoWillSucceed() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 60 });

  return (
    <section className="section succeed-section-redesign" id="succeed">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">CANDIDATE MINDSET</div>
          <h2 className="section-title-large">
            Who Will <span className="text-highlight-accent">Succeed Here?</span>
          </h2>
          <p className="subtitle-description-text">
            This internship is designed for a specific mindset. It is highly suitable for students who:
          </p>
        </div>

        {/* Traits Vertical Stack / Grid */}
        <div ref={gridRef} className="succeed-traits-grid">
          {traits.map((trait, i) => (
            <div key={i} className="succeed-trait-row-item stagger-item">
              <span className="trait-marker-square">■</span>
              <p className="trait-body-text">{trait}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
