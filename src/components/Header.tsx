import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md bg-white/60 shadow-md py-2'
        : 'backdrop-blur-md bg-white/30 py-4'
      }`}
      style={{
      borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.2)' : 'none',
      boxShadow: isScrolled ? '0 4px 24px 0 rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-[#D01F2E] h-12 w-16 md:h-16 md:w-20 flex flex-col items-center justify-center rounded-xl shadow-lg bg-opacity-90">
        {/* Top "St." text with dot */}
        <div className="flex items-end justify-center">
          <span className="text-white logo-text text-[24px] md:text-[32px] font-bold leading-none tracking-tighter">st</span>
          <span className="text-white logo-text text-[14px] md:text-[20px] font-bold leading-none -ml-[-2px] mb-[-4px]">•</span>
        </div>
        {/* Bottom "Student Tribe" text */}
        <span className="text-white logo-text text-[8px] md:text-[10px] font-bold mt-[2px] leading-none whitespace-nowrap">Student Tribe</span>
        </div>
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-8">
        <a href="#what-is" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
        About
        </a>
        <a href="#coverage" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
        Coverage
        </a>
        <a href="#pricing" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
        Pricing
        </a>
        <a href="#faq" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
        FAQ
        </a>
      </nav>
      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className={`relative z-50 p-2 rounded-lg transition-colors focus:outline-none ${mobileOpen ? 'bg-red-100' : 'bg-white/70'}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg className="h-7 w-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className="hidden md:block">
        <a
          href="https://shield.studenttribe.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600/90 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700/90 transition-colors font-medium inline-block text-center backdrop-blur-sm"
        >
          Get Covered
        </a>
      </div>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMobileOpen(false)}
        >
          {/* Sidebar slides in from the right */}
          <div
            className={`fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-2xl p-8 flex flex-col gap-6 transition-transform duration-300 transform ${
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            } ${isScrolled ? 'pt-8' : 'pt-12'}`}
            style={{
              borderTopLeftRadius: '1rem',
              borderBottomLeftRadius: '1rem',
              minHeight: '100vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-6">
              <a
                href="#what-is"
                className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg"
                onClick={() => setMobileOpen(false)}
              >
                About
              </a>
              <a
                href="#coverage"
                className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg"
                onClick={() => setMobileOpen(false)}
              >
                Coverage
              </a>
              <a
                href="#pricing"
                className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </a>
              <a
                href="https://shield.studenttribe.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600/90 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700/90 transition-colors font-medium text-center backdrop-blur-sm mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Get Covered
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;