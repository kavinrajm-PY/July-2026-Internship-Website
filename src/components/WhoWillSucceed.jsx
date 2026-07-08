import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const traits = [
  { icon: '🏭', text: 'Want real industrial exposure' },
  { icon: '💻', text: 'Love building software' },
  { icon: '🧩', text: 'Enjoy solving technical problems' },
  { icon: '🔥', text: 'Are self-motivated' },
  { icon: '📚', text: 'Can learn independently' },
  { icon: '🎯', text: 'Want to build a strong career before graduation' },
  { icon: '🛠️', text: 'Value practical experience over theoretical learning' },
];

export default function WhoWillSucceed() {
  const headerRef = useScrollReveal();
  const gridRef = useStaggerReveal({ staggerDelay: 80 });

  return (
    <section className="section section-alt" id="succeed">
      <div className="container">
        <div ref={headerRef} className="succeed-header reveal">
          <span className="section-label">Ideal Candidate</span>
          <h2 className="section-title">
            Who Will <span className="gradient-text">Succeed Here?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            This program is ideal for students who:
          </p>
        </div>

        <div ref={gridRef} className="succeed-grid">
          {traits.map((item, i) => (
            <div key={i} className="succeed-item stagger-item">
              <div className="succeed-item-icon">{item.icon}</div>
              <div className="succeed-item-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
