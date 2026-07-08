import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function ProgramJourney() {
  const headerRef = useScrollReveal();
  const timelineRef = useStaggerReveal({ staggerDelay: 200 });

  return (
    <section className="section section-alt" id="journey">
      <div className="container">
        <div ref={headerRef} className="journey-header reveal">
          <span className="section-label">Program Roadmap</span>
          <h2 className="section-title">
            Program <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Your path from trainee to industry-ready developer.
          </p>
        </div>

        <div ref={timelineRef} className="timeline">
          {/* Phase 1 */}
          <div className="timeline-item stagger-item">
            <div className="timeline-dot phase-1">1</div>
            <div className="timeline-card">
              <div className="timeline-phase-label phase-1">Phase 1</div>
              <h3 className="timeline-title">Month 1 – Training</h3>
              <p className="timeline-desc">
                During your first month, you'll receive structured training covering everything
                you need to work on live projects. This phase prepares you for the real work ahead.
              </p>
              <div className="timeline-list">
                {[
                  'Company Workflow',
                  'Development Standards',
                  'Project Structure',
                  'Coding Practices',
                  'Tools & Technologies',
                  'Team Collaboration',
                  'Industry Best Practices',
                ].map((item, i) => (
                  <span key={i} className="timeline-list-item">
                    <span style={{ color: 'var(--accent-indigo)' }}>▸</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="timeline-item stagger-item">
            <div className="timeline-dot phase-2">2</div>
            <div className="timeline-card">
              <div className="timeline-phase-label phase-2">Phase 2</div>
              <h3 className="timeline-title">Months 2 & 3 – Project Deployment</h3>
              <p className="timeline-desc">
                After successfully completing the training phase, you'll be deployed into real
                client projects. You'll work with the development team, contribute to actual
                project deliverables, and gain hands-on industrial experience.
              </p>
              <div className="timeline-stipend">
                💰 ₹2,000 per Month
              </div>
              <p className="timeline-stipend-note">
                This amount is provided as a support allowance to help cover your travel and
                food expenses while attending the office.
              </p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="timeline-item stagger-item">
            <div className="timeline-dot phase-3">3</div>
            <div className="timeline-card">
              <div className="timeline-phase-label phase-3">Phase 3</div>
              <h3 className="timeline-title">Performance Evaluation</h3>
              <p className="timeline-desc">
                At the end of the probation period, your performance will be evaluated based on:
              </p>
              <div className="timeline-list">
                {[
                  'Learning Ability',
                  'Technical Skills',
                  'Project Contributions',
                  'Attendance',
                  'Communication',
                  'Teamwork',
                  'Professionalism',
                  'Commitment',
                ].map((item, i) => (
                  <span key={i} className="timeline-list-item">
                    <span style={{ color: 'var(--accent-cyan)' }}>▸</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="timeline-item stagger-item">
            <div className="timeline-dot phase-4">4</div>
            <div className="timeline-card">
              <div className="timeline-phase-label phase-4">Phase 4</div>
              <h3 className="timeline-title">Long-Term Internship Opportunity</h3>
              <p className="timeline-desc">
                Based on your overall performance, you'll move into one of the following categories:
              </p>
              <div className="performance-tiers">
                <div className="tier-card high">
                  <div className="tier-card-label">⭐ High Performers</div>
                  <div className="tier-card-title">Performance-Based Internship</div>
                  <p>
                    Students who consistently demonstrate strong technical skills, dedication,
                    and professionalism will be offered a Performance-Based Internship with a
                    commitment of at least one year.
                  </p>
                  <div className="tier-stipend">Up to ₹5,000/month</div>
                </div>
                <div className="tier-card developing">
                  <div className="tier-card-label">📈 Developing Performers</div>
                  <div className="tier-card-title">Continued Learning & Growth</div>
                  <p>
                    Students who require additional time to improve may continue as interns while
                    receiving guidance and working on projects to help them grow further.
                  </p>
                  <div className="tier-stipend">₹2,000/month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
