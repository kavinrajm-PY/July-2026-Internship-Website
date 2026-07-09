import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#eligibility">Who Can Apply</a></li>
            <li><a href="#benefits">Why Join</a></li>
            <li><a href="#journey">Program Journey</a></li>
            <li><a href="#location">Office Location</a></li>
            <li><a href="#faq">FAQ</a></li>
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.452 5.43 0 9.85-4.42 9.854-9.85.002-2.63-1.023-5.101-2.887-6.963C16.46 1.93 13.992.905 11.36.905c-5.43 0-9.85 4.42-9.854 9.852 0 1.71.448 3.385 1.3 4.872l-1.023 3.732 3.828-1.005zm13.102-7.53c-.27-.135-1.59-.785-1.84-.875-.25-.09-.43-.135-.61.135-.18.27-.695.875-.855 1.055-.16.18-.32.2-.59.065-1.125-.565-1.92-1-2.685-2.315-.2-.345.2-.32.57-1.06.06-.115.03-.223-.015-.313-.045-.09-.43-1.035-.59-1.42-.155-.38-.325-.33-.445-.336-.115-.005-.25-.005-.385-.005-.135 0-.36.05-.55.255-.19.205-.72.705-.72 1.72s.74 2 1.02 2.375c.28.375 1.455 2.22 3.525 3.113.49.21.875.337 1.173.43.495.158.948.135 1.303.08.397-.06 1.59-.65 1.815-1.275.225-.625.225-1.16.16-1.275-.065-.115-.245-.18-.515-.315z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
