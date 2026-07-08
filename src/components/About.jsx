import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const headerRef = useScrollReveal();
  const contentRef = useScrollReveal({ threshold: 0.05 });
  const cardsRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-label">About the Program</span>
          <h2 className="section-title">
            What is this <span className="gradient-text">Program?</span>
          </h2>
        </div>

        <div className="about-content">
          <div ref={contentRef} className="about-text reveal">
            <div className="about-notice">
              <div className="about-notice-title">
                <span>⚠️</span> Important Notice
              </div>
              <p>
                This is an internship opportunity only. This is <strong>not</strong> a hiring,
                recruitment, or placement process.
              </p>
            </div>

            <p>
              This is not a conventional internship focused on observation or basic tasks.
              It is an <strong>industry-oriented development program</strong> designed for students
              who already possess intermediate-level development skills and are eager to gain
              real project experience.
            </p>

            <p>
              You will work alongside experienced developers, understand professional software
              development workflows, and contribute to live projects used by international clients.
            </p>

            <p>
              Throughout the program, you'll learn how software companies operate, collaborate
              in teams, follow development standards, and deliver production-ready solutions.
            </p>
          </div>

          <div ref={cardsRef} className="about-highlights reveal">
            <div className="about-highlight-card">
              <div className="about-highlight-icon purple">💻</div>
              <div>
                <div className="about-highlight-title">Real Project Experience</div>
                <div className="about-highlight-desc">
                  Work on live client projects alongside experienced developers, not mock exercises.
                </div>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="about-highlight-icon cyan">🌐</div>
              <div>
                <div className="about-highlight-title">International Clients</div>
                <div className="about-highlight-desc">
                  Contribute to projects used by clients across Germany, Singapore, Dubai, and India.
                </div>
              </div>
            </div>

            <div className="about-highlight-card">
              <div className="about-highlight-icon emerald">📈</div>
              <div>
                <div className="about-highlight-title">Professional Growth</div>
                <div className="about-highlight-desc">
                  Learn industry standards, code reviews, agile development, and production workflows.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
