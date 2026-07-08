export default function Hero({ onApply }) {
  return (
    <section className="hero" id="hero">
      {/* Background Effects */}
      <div className="hero-grid-bg"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Paid Internship Opportunity
        </div>

        <h1 className="hero-title">
          Launch Your Career with{' '}
          <span className="highlight">Real Industry Experience</span>
        </h1>

        <div className="hero-subtitle-badge">
          For Intermediate Developers
        </div>

        <p className="hero-description">
          Designed for passionate 2nd and 3rd year Engineering students who are ready to work on
          real-world software projects, learn industry practices, and gain practical
          experience while earning a monthly allowance.
        </p>

        <div className="hero-tags">
          <span className="hero-tag">
            <span className="hero-tag-icon">🏢</span>
            Work From Office
          </span>
          <span className="hero-tag-divider"></span>
          <span className="hero-tag">
            <span className="hero-tag-icon">📍</span>
            KSR Campus
          </span>
          <span className="hero-tag-divider"></span>
          <span className="hero-tag">
            <span className="hero-tag-icon">⚡</span>
            Limited Positions
          </span>
        </div>

        <div className="hero-cta-group">
          <button className="btn-primary" id="hero-apply-btn" onClick={onApply}>
            Apply Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <a href="#about">
            <button className="btn-secondary" id="hero-learn-btn">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse"></div>
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
