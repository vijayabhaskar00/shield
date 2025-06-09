import React from 'react';
import { Heart, ShieldAlert, Smartphone } from 'lucide-react';

const WhatIsSection: React.FC = () => {
  return (
    <section id="what-is" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What's Student Shield? <span className="text-indigo-600">It's simple.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Student Shield is India's 1st insurance plan designed just for students. 
            It covers health and accidents.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="/stshield.jpg" 
              alt="Students protected" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We know college life comes with unexpected moments—Student Shield makes sure you're ready. 
              Whether it's an emergency visit to the hospital or an accident. 
              we're here to cover you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Health Coverage</h3>
                <p className="text-gray-600">For those unexpected medical emergencies</p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Accident Cover</h3>
                <p className="text-gray-600">Because life can be unpredictable</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl hover:shadow-md transition-all">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">St.Shield</h3>
                <p className="text-gray-600">For your precious life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;