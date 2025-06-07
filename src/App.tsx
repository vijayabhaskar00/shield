import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatIsSection from './components/WhatIsSection';
import CoverageSection from './components/CoverageSection';
import WhyNeedSection from './components/WhyNeedSection';
import PricingSection from './components/PricingSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the title
    document.title = "Student Shield - Insurance Made for Students";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhatIsSection />
      <CoverageSection />
      <WhyNeedSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;