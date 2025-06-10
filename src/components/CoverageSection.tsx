import React from 'react';
import { Heart, ShieldAlert, Smartphone, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CoverageSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Coverage <span className="text-indigo-600">for Every Student</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Because when you're safe, your future stays steady. Choose from our comprehensive protection options.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Personal Accident Cover */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ShieldAlert className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">Personal Accident</h3>
              <p className="text-indigo-100 mt-2">₹10 Lakhs Coverage</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Accidental Death Cover</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Permanent Disability</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Medical Reimbursement</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <p className="text-indigo-700 text-xs font-medium">
                  Available in Student Shield plan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hospital Daily Cash Benefit */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">Hospital Daily Cash</h3>
              <p className="text-teal-100 mt-2">Daily Benefits</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">₹2,000/day benefit</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">₹4,000/day ICU</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">No waiting period</span>
                </li>
              </ul>
              <div className="bg-teal-50 p-3 rounded-lg">
                <p className="text-teal-700 text-xs font-medium">
                  Available in Student Shield plan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Term Life Cover */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">Term Life Cover</h3>
              <p className="text-purple-100 mt-2">₹3 Lakhs Coverage</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Death Cover ₹3,00,000</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Age: 40-60 years</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Family protection</span>
                </li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-purple-700 text-xs font-medium">
                  Available in Student Shield Plus
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mi Care Wellness Services */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">Mi Care</h3>
              <p className="text-orange-100 mt-2">Wellness Services</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">60 Free Teleconsultations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Health discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">Surgical assistance</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-orange-700 text-xs font-medium">
                  Available in both plans
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold">
            <span>Student Shield: ₹999/year</span>
            <span className="text-indigo-200">|</span>
            <span>Student Shield Plus: ₹1500/year</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;