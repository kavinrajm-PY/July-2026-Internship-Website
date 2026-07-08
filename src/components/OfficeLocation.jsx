import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OfficeLocation() {
  const ref = useScrollReveal();

  return (
    <section className="section" id="location">
      <div className="container">
        <div ref={ref} className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">📍 Location</span>
            <h2 className="section-title">
              Office <span className="gradient-text">Location</span>
            </h2>
          </div>

          <div className="location-card">
            <span className="location-pin">🏢</span>
            <div className="location-title">Praskla Technology</div>
            <div className="location-subtitle">
              3rd Floor, A Block, KSRCE College,<br />
              KSR Campus, Tiruchengode,<br />
              Namakkal, Tamil Nadu - 637 215, India
            </div>
            <div className="location-badge">
              <span>💼</span>
              Full Work-From-Office Opportunity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
