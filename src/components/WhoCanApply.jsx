import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const eligibilityCriteria = [
  { icon: '🎓', text: '2nd or 3rd Year Engineering Students' },
  { icon: '⚡', text: 'Intermediate-level Developers' },
  { icon: '🔥', text: 'Passionate about Software Development' },
  { icon: '🏢', text: 'Ready to Work from Office' },
  { icon: '🎯', text: 'Willing to Commit for Long-Term Growth' },
];

const skills = [
  { text: 'Intermediate-level development skills', bonus: false },
  { text: 'Basic understanding of programming fundamentals', bonus: false },
  { text: 'Passion for learning and building real-world applications', bonus: false },
  { text: 'Testing knowledge is an added advantage', bonus: true },
];

export default function WhoCanApply() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 80 });
  const skillsRef = useScrollReveal();

  return (
    <section className="section" id="eligibility">
      <div className="container">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Eligibility</span>
          <h2 className="section-title">
            Who Can <span className="gradient-text">Apply?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We are looking for students who are:
          </p>
        </div>

        <div ref={gridRef} className="eligibility-grid">
          {eligibilityCriteria.map((item, i) => (
            <div key={i} className="eligibility-card stagger-item">
              <div className="eligibility-card-icon">{item.icon}</div>
              <div className="eligibility-card-text">{item.text}</div>
            </div>
          ))}
        </div>

        <div ref={skillsRef} className="reveal">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Preferred <span className="gradient-text">Skills</span>
            </h3>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We welcome candidates with intermediate-level skills in any area relevant to a
              Software Development Engineer (SDE) Intern role, including web development,
              mobile app development, software development, cloud technologies, and other
              software engineering domains.
            </p>
          </div>

          <div className="skills-section">
            <div className="skills-list">
              {skills.map((skill, i) => (
                <div key={i} className={`skill-item ${skill.bonus ? 'bonus' : ''}`}>
                  <div className="skill-check">✓</div>
                  <span>{skill.text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="skills-intro">
                <p style={{ marginBottom: '16px' }}>
                  We are not looking for complete beginners. We are looking for{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>motivated learners</strong> who already have a solid foundation and are ready to grow.
                </p>
                <p>
                  If you can write clean code, understand basic data structures, and are excited
                  about building real software — you're exactly who we're looking for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
