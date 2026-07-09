import React from 'react';

export default function Hero({ onApply }) {
  return (
    <section className="hero-section" id="hero">
      {/* Subtle blur blobs for visual style */}
      <div className="hero-blur-blob blob-1" style={{ backgroundColor: 'rgba(204, 85, 255, 0.06)', filter: 'blur(100px)' }}></div>
      <div className="hero-blur-blob blob-2" style={{ backgroundColor: 'rgba(102, 255, 204, 0.04)', filter: 'blur(100px)' }}></div>

      <div className="container">
        {/* Top Header */}
        <div className="hero-top-header">
          <div className="hero-header-left" style={{ width: '100%' }}>
            <div className="hero-tagline-eyebrow">
              <span className="eyebrow-dot" style={{ backgroundColor: 'var(--color-brand)' }}></span>
              July 2026 Internship Program
            </div>
            <h1 className="hero-title-main" style={{ color: 'var(--color-brand-dark)' }}>
              Launch Your Career with <br />
              <span className="highlight-text-gradient">Real Industry Experience</span>
            </h1>
          </div>
        </div>

        {/* Middle Image Container (replacing the metrics card) */}
        <div className="hero-illustration-wrapper">
          <img src="/hero-illustration.png" alt="Internship Journey" className="hero-illustration-img" />
        </div>

        {/* Metrics Container (placed outside, below the image) */}
        <div className="hero-metrics-outside">
          <div className="metric-row-item">
            <span className="metric-icon-box" style={{ color: 'var(--color-brand)', background: 'rgba(58, 20, 69, 0.05)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="6"></line><line x1="6" y1="12" x2="18" y2="12"></line></svg>
            </span>
            <div>
              <h3 className="metric-title-text" style={{ color: 'var(--color-brand-dark)' }}>Monthly Allowance</h3>
              <p className="metric-detail-text" style={{ color: 'var(--color-gray-dark)' }}>₹2,000 (Probation) to ₹5,000 (Performance Track)</p>
            </div>
          </div>

          <div className="metric-row-item">
            <span className="metric-icon-box" style={{ color: 'var(--color-brand)', background: 'rgba(58, 20, 69, 0.05)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            </span>
            <div>
              <h3 className="metric-title-text" style={{ color: 'var(--color-brand-dark)' }}>Target Applicants</h3>
              <p className="metric-detail-text" style={{ color: 'var(--color-gray-dark)' }}>2nd and 3rd Year Engineering Students</p>
            </div>
          </div>

          <div className="metric-row-item">
            <span className="metric-icon-box" style={{ color: 'var(--color-brand)', background: 'rgba(58, 20, 69, 0.05)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </span>
            <div>
              <h3 className="metric-title-text" style={{ color: 'var(--color-brand-dark)' }}>Global Deployment</h3>
              <p className="metric-detail-text" style={{ color: 'var(--color-gray-dark)' }}>Project staging across DE, SG, and AE servers</p>
            </div>
          </div>
        </div>

        {/* Bottom Actions Row: 5 Pill Buttons */}
        <div className="hero-bottom-pills" style={{ marginTop: '36px' }}>
          <button className="hero-pill-btn primary-pill" onClick={onApply}>
            Apply Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <a href="#about" className="hero-pill-btn">
            Explore Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </a>

          <div className="hero-pill-btn" style={{ cursor: 'default' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            Work From Office
          </div>

          <div className="hero-pill-btn" style={{ cursor: 'default' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            KSR Campus
          </div>

          <div className="hero-pill-btn" style={{ cursor: 'default' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            Limited Positions
          </div>
        </div>
      </div>
    </section>
  );
}
