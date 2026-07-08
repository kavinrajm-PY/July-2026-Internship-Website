import { useScrollReveal } from '../hooks/useScrollReveal';

const expectations = [
  { icon: '📅', text: 'Attend the office daily.' },
  { icon: '⏰', text: 'Follow the assigned working schedule.' },
  { icon: '🎯', text: 'Maintain professional discipline.' },
  { icon: '✅', text: 'Complete assigned project tasks on time.' },
];

const leaveAllowed = [
  'Internal Examinations',
  'Semester Examinations',
];

const leaveNotAllowed = [
  'Placement Drives',
  'College Events',
  'Assignment Submission',
  'Project Reviews',
  'Record Work',
  'Workshops',
  'Other Routine Academic Activities',
];

export default function Commitment() {
  const headerRef = useScrollReveal();
  const layoutRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section section-alt" id="commitment">
      <div className="container">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Expectations</span>
          <h2 className="section-title">
            Attendance & <span className="gradient-text">Commitment</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We expect professional commitment from all participants.
          </p>
        </div>

        <div ref={layoutRef} className="commitment-layout reveal">
          {/* Attendance */}
          <div className="commitment-block">
            <div className="commitment-block-title">
              <span>🏢</span> Professional Commitment
            </div>
            <p className="commitment-block-desc">
              This opportunity is designed for students who are serious about building their
              careers. Since you'll be working on live projects, regular office attendance is mandatory.
            </p>
            <div className="commitment-block-desc" style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
              Interns are expected to:
            </div>
            <div className="commitment-list">
              {expectations.map((item, i) => (
                <div key={i} className="commitment-list-item">
                  <span className="commitment-list-icon">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Leave Policy */}
          <div className="commitment-block">
            <div className="commitment-block-title">
              <span>📋</span> Leave Policy
            </div>
            <p className="commitment-block-desc">
              Permission will be granted only for:
            </p>
            <div className="leave-allowed-list">
              {leaveAllowed.map((item, i) => (
                <div key={i} className="leave-allowed-item">
                  <span className="leave-allowed-icon">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="leave-not-allowed-title">
              Leave will not be considered for:
            </div>
            <div className="leave-not-list">
              {leaveNotAllowed.map((item, i) => (
                <div key={i} className="leave-not-item">
                  <span style={{ color: 'var(--accent-rose)' }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="leave-note">
              Students are expected to obtain the necessary permissions from their college before
              joining the program. An <strong style={{ color: 'var(--text-primary)' }}>Internship Offer Letter</strong> will
              be provided to support your request where applicable.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
