import React from 'react';

export default function Hero({ onApply }) {
  return (
    <section className="hero-section" id="hero">
      {/* Soft gradient blobs for a premium modern aesthetic */}
      <div className="hero-blur-blob blob-1"></div>
      <div className="hero-blur-blob blob-2"></div>
      
      <div className="container hero-grid">
        {/* Left Column: Heading Copy */}
        <div className="hero-left-content">
          <div className="hero-tagline-eyebrow">
            <span className="eyebrow-dot"></span>
            July 2026 Internship Program
          </div>
          
          <h1 className="hero-title-main">
            Launch Your Career with <br />
            <span className="highlight-text-gradient">Real Industry Experience</span>
          </h1>

          <p className="hero-paragraph-desc">
            Designed for passionate 2nd and 3rd year Engineering students who are ready to work on
            real-world software projects, learn industry practices, and gain practical
            experience while earning a monthly allowance.
          </p>

          <div className="hero-meta-features">
            <div className="meta-feature-pill">
              <span className="meta-icon">🏢</span>
              <span>Work From Office</span>
            </div>
            <div className="meta-feature-pill">
              <span className="meta-icon">📍</span>
              <span>KSR Campus</span>
            </div>
            <div className="meta-feature-pill">
              <span className="meta-icon">⚡</span>
              <span>Limited Positions</span>
            </div>
          </div>

          <div className="hero-actions-container">
            <button className="btn-brand-primary" onClick={onApply}>
              Apply Now
              <span className="btn-arrow">→</span>
            </button>
            <a href="#about" className="btn-brand-secondary">
              Explore Details
            </a>
          </div>
        </div>

        {/* Right Column: Premium Program Card Dashboard */}
        <div className="hero-right-visual">
          <div className="program-highlight-card">
            <div className="card-accent-header">
              <span className="card-badge-status">OPEN FOR APPLICATIONS</span>
            </div>
            
            <div className="program-metrics-container">
              <div className="metric-row-item">
                <span className="metric-icon-box">💰</span>
                <div>
                  <h3 className="metric-title-text">Monthly Allowance</h3>
                  <p className="metric-detail-text">₹2,000 (Probation) to ₹5,000 (Performance Track)</p>
                </div>
              </div>

              <div className="metric-row-item">
                <span className="metric-icon-box">🎓</span>
                <div>
                  <h3 className="metric-title-text">Target Applicants</h3>
                  <p className="metric-detail-text">2nd and 3rd Year Engineering Students</p>
                </div>
              </div>

              <div className="metric-row-item">
                <span className="metric-icon-box">🌍</span>
                <div>
                  <h3 className="metric-title-text">Global Deployment</h3>
                  <p className="metric-detail-text">Project staging across DE, SG, and AE servers</p>
                </div>
              </div>
            </div>

            <div className="program-card-footer">
              <span className="footer-small-notice">📍 Tiruchengode, Namakkal, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
