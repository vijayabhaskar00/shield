import React from 'react';
import { Phone, ArrowRight,Shield } from 'lucide-react';
import Iridescence from './Iridescence';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-rose-500">
      <Iridescence color={[1, 0.2, 0.2]} mouseReact={false} amplitude={0.15} speed={0.5} />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0">
            <div className="inline-block bg-red-900/30 backdrop-blur-sm px-4 py-2 rounded-full text-yellow-300 font-semibold mb-6 animate-pulse">
              🚨 Don't wait until it's too late!
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              🎓 India's 1st insurance plan designed just for students. 
              <span className="text-yellow-300">Student Shield's got your back.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-red-100">
              <span className="font-bold">1 in 3 students face unexpected emergencies.</span> Don't be caught off guard - protect your health, phone, and future from just ₹199/month.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group">
                🔒 Get Covered Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-red-700 transition-all duration-300 font-bold text-base sm:text-lg">
                ✨ See My Plan
              </button>
            </div>
            
            {/* Limited Time Offer */}
            <div className="bg-red-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-red-500/30">
              <p className="text-red-100 font-medium text-sm sm:text-base">
                ⚡️ <span className="text-yellow-300">Limited Time Offer:</span> First month at ₹99 + free phone screen protection!
              </p>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl">
                {/* Main Image Card */}
                <div className="relative mb-6 sm:mb-8">
                  <img 
                    src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg" 
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
                    <h3 className="text-white font-semibold text-sm sm:text-base">Device Protection</h3>
                    <p className="text-red-100 text-xs sm:text-sm">Cracked screen? We've got you covered.</p>
                  </div>
                </div>
                
                {/* Info Card */}
                <div className="bg-red-900/30 backdrop-blur-sm p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-red-100">
                    <span className="font-bold text-yellow-300">🔥 Did you know?</span> 78% of students face at least one emergency during their college years. Don't risk your future - get protected now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#fff" 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
          ></path>
          <path 
            fill="#fff" 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
          ></path>
          <path 
            fill="#fff" 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;