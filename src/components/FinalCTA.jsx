import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA({ onApply }) {
  const ref = useScrollReveal();

  return (
    <section className="section final-cta" id="apply">
      <div className="final-cta-bg"></div>
      <div className="container">
        <div ref={ref} className="final-cta-content reveal">
          <span className="section-label">🚀 Take Action</span>
          <h2 className="final-cta-title">
            Your Career Starts{' '}
            <span className="highlight">Before Graduation</span>
          </h2>
          <p className="final-cta-desc">
            If you're passionate about software development and ready to challenge yourself
            with real-world projects, this program is built for you. Gain industry exposure,
            work with international projects, build an impressive portfolio, and grow your
            career with us.
          </p>
          <button className="final-cta-btn" id="final-apply-btn" onClick={onApply}>
            Apply Now & Start Your Journey
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
