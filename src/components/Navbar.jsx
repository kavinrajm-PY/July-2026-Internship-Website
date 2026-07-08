import { useState, useEffect } from 'react';

export default function Navbar({ onApply, onHome, view }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Journey', href: '#journey' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = () => setMobileOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    onHome();
  };

  return (
    <nav className={`navbar ${scrolled || view === 'apply' ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo-container" onClick={handleLogoClick}>
          <img src="/logo.png" alt="Praskla Technology" className="navbar-logo-img" />
        </a>

        {view === 'landing' ? (
          <div className="navbar-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <button className="navbar-cta" onClick={onApply}>Apply Now</button>
          </div>
        ) : (
          <div className="navbar-links">
            <button className="navbar-cta" onClick={onHome}>Back to Details</button>
          </div>
        )}

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {view === 'landing' ? (
          <>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
            <button 
              className="navbar-cta" 
              style={{ width: '100%', marginTop: '8px' }} 
              onClick={() => { handleNavClick(); onApply(); }}
            >
              Apply Now
            </button>
          </>
        ) : (
          <button 
            className="navbar-cta" 
            style={{ width: '100%', marginTop: '8px' }} 
            onClick={() => { handleNavClick(); onHome(); }}
          >
            Back to Details
          </button>
        )}
      </div>
    </nav>
  );
}
