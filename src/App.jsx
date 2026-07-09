import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhoCanApply from './components/WhoCanApply';
import WhyJoin from './components/WhyJoin';
import GlobalExposure from './components/GlobalExposure';
import ProgramJourney from './components/ProgramJourney';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import Commitment from './components/Commitment';
import OfficeLocation from './components/OfficeLocation';
import WhoWillSucceed from './components/WhoWillSucceed';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import ApplicationForm from './components/ApplicationForm';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' or 'apply'
  const [scrollTarget, setScrollTarget] = useState(null);

  const navigateToApply = () => {
    setView('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (targetId) => {
    if (view !== 'landing') {
      setView('landing');
      setScrollTarget(targetId);
    } else {
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (view === 'landing' && scrollTarget) {
      const timer = setTimeout(() => {
        if (scrollTarget === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(scrollTarget);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        setScrollTarget(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [view, scrollTarget]);

  return (
    <>
      <Navbar onApply={navigateToApply} onHome={navigateToHome} view={view} />
      <FloatingIcons />
      {view === 'landing' ? (
        <main>
          <Hero onApply={navigateToApply} />
          <About />
          <WhoCanApply />
          <WhyJoin />
          <GlobalExposure />
          <ProgramJourney />
          <WhatMakesDifferent />
          <Commitment />
          <OfficeLocation />
          <WhoWillSucceed />
          <FAQ />
          <FinalCTA onApply={navigateToApply} />
        </main>
      ) : (
        <ApplicationForm onBack={navigateToHome} />
      )}
      <Footer onNavigate={navigateToSection} />
    </>
  );
}
