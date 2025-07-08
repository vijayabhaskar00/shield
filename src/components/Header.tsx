import React, { useState, useEffect } from 'react';



interface HeaderProps {
  openPolicyForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ openPolicyForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetCovered = () => {
    openPolicyForm();
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/60 shadow-md py-2'
          : 'backdrop-blur-md bg-white/50 py-4'
        }`}
        style={{
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.2)' : 'none',
        boxShadow: isScrolled ? '0 4px 24px 0 rgba(0,0,0,0.07)' : 'none',
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/st.shield_logo-removebg-preview.png" 
            alt="Student Shield" 
            className="h-12 w-auto md:h-16" 
          />
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#what-is" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
          About
          </a>
          <a href="#coverage" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
          Coverage
          </a>
          <a href="#pricing" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
          Pricing
          </a>
          <a href="#faq" className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
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
          <button
            onClick={handleGetCovered}
            className="bg-red-600/90 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700/90 transition-colors font-medium inline-block text-center backdrop-blur-sm"
          >
            Get Covered
          </button>
        </div>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 flex"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${
                mobileOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                borderTopLeftRadius: '1rem',
                borderBottomLeftRadius: '1rem',
                height: 'auto',
                minHeight: 'auto',
                maxHeight: '100vh'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className={`p-6 border-b border-gray-100 ${isScrolled ? 'pt-6' : 'pt-8'}`}>
                <h3 className="text-lg font-bold text-gray-800">Menu</h3>
              </div>

              {/* Mobile Menu Content */}
              <div className="flex-1 px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  <a
                    href="#what-is"
                    className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#coverage"
                    className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    Coverage
                  </a>
                  <a
                    href="#pricing"
                    className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    className="font-medium text-gray-800 hover:text-red-500 transition-colors text-lg py-2 border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    FAQ
                  </a>
                </nav>
              </div>

              {/* Mobile Menu Footer with Get Covered Button */}
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={handleGetCovered}
                  className="w-full bg-red-600/90 text-white px-4 py-3 rounded-lg shadow-md hover:bg-red-700/90 transition-colors font-medium text-center backdrop-blur-sm"
                >
                  Get Covered
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Policy Form Modal handled by parent */}
    </>
  );
};

export default Header;