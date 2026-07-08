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
              <span className="hq-marker-icon">📍</span>
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
