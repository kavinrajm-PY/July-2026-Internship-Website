import React from 'react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, targetId) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(targetId);
    }
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        {/* Column 1: Brand & Contacts */}
        <div className="footer-col brand-col">
          <div className="footer-logo-container">
            <img src="/logo.png" alt="Praskla Technology" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            Innovative Solutions Connecting Brands and Customers. We provide
            full-service IT consulting, digital marketing, and software development.
            Our objective is to use automation and rich media to close the gap that
            exists between brands and consumers.
          </p>
          <div className="footer-contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <a href="tel:+919591310740" className="contact-link">+91 95913 10740</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <a href="mailto:humanresource@prasklatechnology.com" className="contact-link">
                humanresource@prasklatechnology.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
            <li><a href="#eligibility" onClick={(e) => handleLinkClick(e, 'eligibility')}>Who Can Apply</a></li>
            <li><a href="#benefits" onClick={(e) => handleLinkClick(e, 'benefits')}>Why Join</a></li>
            <li><a href="#journey" onClick={(e) => handleLinkClick(e, 'journey')}>Program Journey</a></li>
            <li><a href="#location" onClick={(e) => handleLinkClick(e, 'location')}>Office Location</a></li>
            <li><a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')}>FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links-list">
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Mobile App Development</a></li>
            <li><a href="#services">Software Development</a></li>
            <li><a href="#services">Digital Marketing</a></li>
            <li><a href="#services">Cybersecurity</a></li>
            <li><a href="#services">Sustainability Tech</a></li>
          </ul>
        </div>

        {/* Column 4: Solutions & Socials */}
        <div className="footer-col">
          <h4 className="footer-col-title">Solutions</h4>
          <ul className="footer-links-list" style={{ marginBottom: '24px' }}>
            <li><a href="#solutions">E-commerce & Marketing</a></li>
            <li><a href="#solutions">Software & Marketing</a></li>
            <li><a href="#solutions">Mobile & Marketing</a></li>
            <li><a href="#solutions">Website & SEO</a></li>
            <li><a href="#solutions">Software Support</a></li>
          </ul>

          <h5 className="social-title">Follow Us</h5>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/praskla-technology/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/praskla_technology/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/919591310740" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.003c4.37 0 7.929-3.558 7.93-7.929-.001-2.122-.828-4.117-2.325-5.618zm-5.607 11.045a6.561 6.561 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.618-4.945c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/p/Praskla-Technology-61574464046853/" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://x.com/prasklatech" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-copyright">
            © 2020-2026 Praskla Technology. All rights reserved.
          </div>
          <div className="footer-policy-links">
            <a href="#terms">Terms of Use</a>
            <span className="policy-divider">|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
