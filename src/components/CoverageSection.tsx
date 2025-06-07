import React from 'react';
import { Heart, ShieldAlert, Smartphone } from 'lucide-react';
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
            Because when you're safe, your future stays steady. One decision. Total peace of mind.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-white text-2xl font-bold">Personal Accident Cover</h3>
              <p className="text-indigo-100 mt-2">₹10 Lakhs Coverage</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Coverage for Accidental Death</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Permanent Total Disability (PTD)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Permanent Partial Disability (PPD)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Accidental Medical Reimbursement</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Funeral Expenses</span>
                </li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-indigo-700 text-sm font-medium">
                  "A serious accident shouldn't shake your education. Keep your family protected—and your goals intact."
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
              <h3 className="text-white text-2xl font-bold">Hospital Daily Cash</h3>
              <p className="text-teal-100 mt-2">Daily Benefits</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">₹2,000 per day benefit</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">ICU Coverage: ₹4,000 per day</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">COVID-19 Treatment Covered</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">No waiting period</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Pre-existing conditions covered</span>
                </li>
              </ul>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-teal-700 text-sm font-medium">
                  "Support your family through unexpected medical expenses—without disrupting your study plans."
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
            custom={2}
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Mi Care</h3>
              <p className="text-orange-100 mt-2">Wellness Services</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">60 Free Teleconsultations/Year</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Second Medical Opinion</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Surgical Assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Discounted Health Services</span>
                </li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-700 text-sm font-medium">
                  "Complete healthcare access including pharmacy, diagnostics, radiology, dental, vision, and homecare."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full text-xl font-bold animate-pulse">
            All this for just ₹999/year
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;