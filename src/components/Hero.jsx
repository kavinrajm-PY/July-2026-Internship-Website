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
              <span className="meta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="16"></line><line x1="15" y1="22" x2="15" y2="16"></line><line x1="9" y1="16" x2="15" y2="16"></line><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path></svg>
              </span>
              <span>Work From Office</span>
            </div>
            <div className="meta-feature-pill">
              <span className="meta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span>KSR Campus</span>
            </div>
            <div className="meta-feature-pill">
              <span className="meta-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </span>
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
                <span className="metric-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="6"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
                </span>
                <div>
                  <h3 className="metric-title-text">Monthly Allowance</h3>
                  <p className="metric-detail-text">₹2,000 (Probation) to ₹5,000 (Performance Track)</p>
                </div>
              </div>

              <div className="metric-row-item">
                <span className="metric-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                </span>
                <div>
                  <h3 className="metric-title-text">Target Applicants</h3>
                  <p className="metric-detail-text">2nd and 3rd Year Engineering Students</p>
                </div>
              </div>

              <div className="metric-row-item">
                <span className="metric-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </span>
                <div>
                  <h3 className="metric-title-text">Global Deployment</h3>
                  <p className="metric-detail-text">Project staging across DE, SG, and AE servers</p>
                </div>
              </div>
            </div>

            <div className="program-card-footer">
              <span className="footer-small-notice">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Tiruchengode, Namakkal, Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
