import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OfficeLocation() {
  const ref = useScrollReveal();

  return (
    <section className="section office-location-section-redesign" id="location">
      <div className="container">
        {/* Section Header */}
        <div ref={ref} className="reveal location-card-wrapper">
          <div className="section-eyebrow-accent">COMPANY HEADQUARTERS</div>
          <h2 className="section-title-large">
            Office <span className="text-highlight-accent">Location</span>
          </h2>
          
          <div className="hq-details-card">
            <div className="hq-card-top">
              <span className="hq-marker-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hq-marker-svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <div>
                <h3 className="hq-company-title">Praskla Technology</h3>
                <p className="hq-address-line">
                  3rd Floor, A Block, KSRCE College,<br />
                  KSR Campus, Tiruchengode,<br />
                  Namakkal, Tamil Nadu - 637 215, India
                </p>
              </div>
            </div>
            
            <div className="hq-card-bottom-tag">
              <span className="hq-badge-label">OFFLINE INTERNSHIP</span>
              <p className="hq-badge-desc">This is a full work-from-office SDE opportunity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
