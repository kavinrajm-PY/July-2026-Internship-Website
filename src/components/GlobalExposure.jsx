import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const countries = [
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇦🇪', name: 'Dubai' },
  { flag: '🇮🇳', name: 'India' },
];

export default function GlobalExposure() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 120 });
  const footerRef = useScrollReveal();

  return (
    <section className="section" id="global">
      <div className="container">
        <div ref={headerRef} className="global-header reveal">
          <span className="section-label">🌐 Global Reach</span>
          <h2 className="section-title">
            Global Project <span className="gradient-text">Exposure</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            You'll have the opportunity to work on projects serving clients across multiple regions.
          </p>
        </div>

        <div ref={gridRef} className="countries-grid">
          {countries.map((country, i) => (
            <div key={i} className="country-card stagger-item">
              <span className="country-flag">{country.flag}</span>
              <div className="country-name">{country.name}</div>
            </div>
          ))}
        </div>

        <div ref={footerRef} className="global-footer-text reveal">
          This experience helps you build a professional portfolio and gives you valuable
          real-world stories to discuss during future job interviews.
        </div>
      </div>
    </section>
  );
}
