import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const countries = [
  { flag: '🇩🇪', name: 'Germany', code: 'DE / EU' },
  { flag: '🇸🇬', name: 'Singapore', code: 'SG / APAC' },
  { flag: '🇦🇪', name: 'Dubai', code: 'AE / ME' },
  { flag: '🇮🇳', name: 'India', code: 'IN / SA' },
];

export default function GlobalExposure() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 100 });
  const footerRef = useScrollReveal();

  return (
    <section className="section global-exposure-section-redesign" id="global">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">GLOBAL STAGING SERVERS</div>
          <h2 className="section-title-large">
            Global Project <span className="text-highlight-accent">Exposure</span>
          </h2>
        </div>

        {/* Global Cards Grid */}
        <div ref={gridRef} className="global-redesign-grid">
          {countries.map((country, i) => (
            <div key={i} className="global-country-row stagger-item">
              <span className="global-flag-icon">{country.flag}</span>
              <div className="global-country-details">
                <div className="global-country-name">{country.name}</div>
                <div className="global-country-code">{country.code}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Descriptive Footer Info */}
        <div ref={footerRef} className="reveal global-exposure-footer-card">
          <div className="footer-card-inner">
            <span className="info-badge-corporate">PORTFOLIO IMPACT</span>
            <p className="impact-text">
              Working on code deployed to international servers equips you with real-world project stories 
              and technical credentials that will distinguish your profile during competitive SDE placement interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
