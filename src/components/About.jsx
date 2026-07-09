import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const headerRef = useScrollReveal();
  const noticeRef = useScrollReveal({ threshold: 0.05 });
  const textRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="section about-section-redesign" id="about">
      <div className="container">
        {/* Section Header */}
        <div ref={headerRef} className="reveal section-header-split">
          <div className="section-eyebrow-accent">ABOUT THE PROGRAM</div>
          <h2 className="section-title-large">
            What is this <span className="text-highlight-accent">Program?</span>
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="about-grid-content">
          {/* Left Column: Warning and Main Purpose */}
          <div ref={noticeRef} className="reveal about-left-col">
            <div className="attention-card-warning">
              <div className="warning-eyebrow">IMPORTANT STATEMENT</div>
              <p className="warning-body-text">
                This is an internship opportunity only. This is not a hiring, recruitment,
                or placement process.
              </p>
            </div>

            <h3 className="about-subtitle-tech">
              Bespoke industry-oriented training to bridge the gap between college and the corporate world.
            </h3>

            <div className="about-image-wrapper">
              <img src="/about-workspace.jpg" alt="What is this Program" className="about-tech-image" />
            </div>
          </div>

          {/* Right Column: Detailed Explanation */}
          <div ref={textRef} className="reveal about-right-col">
            <p className="about-lead-paragraph">
              This is not a conventional internship focused on observation or basic administrative tasks. 
              It is an intensive, development-driven program designed specifically for students who already possess 
              intermediate-level development skills and are eager to gain genuine, hands-on project exposure.
            </p>

            <div className="about-features-vertical">
              <div className="about-feature-item-row">
                <span className="feature-number">1</span>
                <div>
                  <h4 className="feature-title-bold">Professional Team Workflows</h4>
                  <p className="feature-desc-text">
                    Understand how code gets tested, reviewed, and integrated in modern SDE environments.
                  </p>
                </div>
              </div>

              <div className="about-feature-item-row">
                <span className="feature-number">2</span>
                <div>
                  <h4 className="feature-title-bold">Contribution to Live Systems</h4>
                  <p className="feature-desc-text">
                    Work alongside seasoned engineering veterans to deliver features that serve international clients.
                  </p>
                </div>
              </div>

              <div className="about-feature-item-row">
                <span className="feature-number">3</span>
                <div>
                  <h4 className="feature-title-bold">Standard Coding Practices</h4>
                  <p className="feature-desc-text">
                    Learn to write production-grade, maintainable code following structured enterprise styling and lint rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
