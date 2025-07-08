import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Secure Your Child’s Education?
          </h2>
          
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Select your plan. Complete payment. Click to Protect at a blink!
          </p>
          
          <div className="relative inline-block">
            {/* <div className="absolute -top-10 -right-10 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
              Limited Time Offer!
            </div> */}
            <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 font-bold text-lg flex items-center justify-center mx-auto group">
              🛡️ Get My Plan Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-6 text-indigo-200 text-sm">
            Protect Yourself – Fast & Easy
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;