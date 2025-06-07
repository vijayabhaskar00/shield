import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-[#D01F2E] h-16 w-20 flex flex-col items-center justify-center">
            {/* Top "St." text with dot */}
                    {/* Top "St." text with dot */}
                    <div className="flex items-end justify-center">
              <span className="text-white logo-text text-[32px] font-bold leading-none tracking-tighter">st</span>
              <span className="text-white logo-text text-[20px] font-bold leading-none -ml-[-2px] mb-[-4px]">•</span>
            </div>
            {/* Bottom "Student Tribe" text */}
            <span className="text-white logo-text text-[10px] font-bold mt-[2px] leading-none whitespace-nowrap">Student Tribe</span>
          </div>
        </div>
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
        <div>
          <a
            href="https://shield.studenttribe.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors font-medium inline-block text-center"
          >
            Get Covered
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;