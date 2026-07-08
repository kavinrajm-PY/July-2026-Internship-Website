import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const benefits = [
  { icon: '🚀', title: 'Real Client Projects' },
  { icon: '⚙️', title: 'Industry Standard Development Practices' },
  { icon: '🧑‍🏫', title: 'Mentorship from Experienced Developers' },
  { icon: '🤝', title: 'Professional Team Collaboration' },
  { icon: '🔄', title: 'Agile Development Exposure' },
  { icon: '🌍', title: 'International Project Experience' },
  { icon: '📊', title: 'Performance-Based Growth' },
  { icon: '🏆', title: 'Internship Certificate upon Successful Completion' },
];

export default function WhyJoin() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 80 });

  return (
    <section className="section section-alt" id="benefits">
      <div className="container">
        <div ref={headerRef} className="why-join-header reveal">
          <span className="section-label">Why Join</span>
          <div className="why-join-tagline">Learn. Build. Earn.</div>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Unlike traditional internships, this program allows you to gain practical industry
            experience while receiving financial support throughout your journey.
          </p>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 600,
          marginBottom: '24px',
          color: 'var(--text-secondary)',
          textAlign: 'center'
        }}>
          You'll Get
        </h3>

        <div ref={gridRef} className="benefits-grid">
          {benefits.map((item, i) => (
            <div key={i} className="benefit-card stagger-item">
              <div className="benefit-icon">{item.icon}</div>
              <div className="benefit-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
