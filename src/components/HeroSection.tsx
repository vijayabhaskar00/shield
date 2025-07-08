import React from 'react';
import { Phone, ArrowRight,Shield } from 'lucide-react';
import Iridescence from './Iridescence';

interface HeroSectionProps {
  openPolicyForm: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openPolicyForm }) => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-rose-500">
      <Iridescence color={[1, 0.2, 0.2]} mouseReact={false} amplitude={0.15} speed={0.5} />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/80 via-yellow-300/80 to-yellow-200/80 text-red-900 font-bold px-5 py-2 rounded-full shadow-lg mb-6 animate-pulse border border-yellow-300/60">
              <span className="text-xl">🚨</span>
              <span className="tracking-wide">Don't wait until it's too late!</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              <span className="block">🎓 India's 1<sup className="text-base align-super">st</sup></span>
              <span className="block"><span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">Education Protection Plan for Students.</span></span>
              {/* <span className="block mt-2 text-yellow-300 drop-shadow-lg">Student Shield got your back.</span> */}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-red-100/90 font-medium max-w-2xl">
              <span className="font-bold text-white">Exclusive for Student Tribe Only</span>
              <br className="hidden sm:block" />
              <span className="text-yellow-100">Student Shield</span> from <span className="font-bold text-yellow-200">₹999/year</span>
              <br className="hidden sm:block" />
              <span className="text-yellow-100">Student Shield Plus</span> from <span className="font-bold text-yellow-200">₹1500/year</span>
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group"
                onClick={openPolicyForm}
              >
                🔒 Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300 font-bold text-base sm:text-lg">
                ✨ Compare Plans
              </button>
            </div>
            
            {/* Plans Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-900/30 backdrop-blur-sm p-4 rounded-lg border border-red-500/30">
                <h3 className="text-yellow-300 font-bold text-sm mb-1">Student Shield</h3>
                <p className="text-red-100 text-xs">Accident + Health + MiCare</p>
                <p className="text-yellow-200 font-bold">₹999/year</p>
              </div>
              <div className="bg-red-900/30 backdrop-blur-sm p-4 rounded-lg border border-red-500/30">
                <h3 className="text-yellow-300 font-bold text-sm mb-1">Student Shield Plus</h3>
                <p className="text-red-100 text-xs">Life Cover + MiCare</p>
                <p className="text-yellow-200 font-bold">₹1500/year</p>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl">
                {/* Main Image Card */}
                <div className="relative mb-6 sm:mb-8">
                  <img 
                    src="/Student_Insurance.jpg"
                    alt="Student protected by Shield" 
                    className="rounded-lg object-cover h-[300px] sm:h-[350px] md:h-[400px] w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-full shadow-lg">
                    <div className="h-8 w-8 sm:h-12 sm:w-12 bg-gradient-to-br from-red-700 via-red-600 to-rose-500 rounded-full flex items-center justify-center">
                      <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Device Protection Card */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-red-500/20 p-2 sm:p-3 rounded-full">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-red-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">Uninterrupted Education from KG to PG</h3>
                    <p className="text-red-100 text-xs sm:text-sm">Two plans. One Mission.</p>
                  </div>
                </div>
                
                {/* Info Card */}
                <div className="bg-red-900/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-red-100">
                    <span className="font-bold text-yellow-300">🔥 Did you know?</span> 78% of students face a major financial roadblock when a parent faces an emergency. Student Shield ensures your education journey continues -No matter what life throws at your family.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;