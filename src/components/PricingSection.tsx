import React from 'react';
import { Heart, ShieldAlert, Smartphone, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
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

  const pricingPlan = {
    name: 'Student Shield Complete',
    price: 999,
    period: 'year',
    features: [
      {
        title: 'Personal Accident Cover',
        value: '₹10 Lakhs',
        details: [
          'Coverage for Accidental Death',
          'Permanent Total Disability (PTD)',
          'Permanent Partial Disability (PPD)',
          'Accidental Medical Reimbursement (AMR)',
          'Funeral Expenses'
        ]
      },
      {
        title: 'Hospital Daily Cash Benefit',
        value: 'Daily Benefits',
        details: [
          'Coverage from 24 hours of hospitalization',
          'Daily Cash Benefit: ₹2,000 per day',
          'ICU Coverage: ₹4,000 per day',
          'COVID-19 Treatment Covered',
          'No waiting period, no deductibles'
        ]
      },
      {
        title: 'Mi Care Wellness Services',
        value: 'Complete Care',
        details: [
          '60 Free Teleconsultations/Year',
          'Second Medical Opinion',
          'Surgical Assistance',
          'Discounted Health Services',
          'Pharmacy, Diagnostics & More'
        ]
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Complete Protection <span className="text-indigo-600">at One Price</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Smart Students Plan Ahead. Secure your future with our comprehensive coverage.
          </motion.p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-2">{pricingPlan.name}</h3>
              <div className="text-5xl font-bold mb-2">
                ₹{pricingPlan.price}
                <span className="text-xl font-normal">/{pricingPlan.period}</span>
              </div>
              <p className="text-indigo-100">Complete student protection package</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlan.features.map((feature, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {index === 0 && <ShieldAlert className="h-6 w-6 text-indigo-600" />}
                        {index === 1 && <Heart className="h-6 w-6 text-indigo-600" />}
                        {index === 2 && <Smartphone className="h-6 w-6 text-indigo-600" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-indigo-600 font-medium">{feature.value}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors transform hover:scale-105 duration-200 shadow-lg">
                  Get Protected Now
                </button>
                <p className="mt-4 text-gray-500">
                  One decision. Total peace of mind.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 bg-indigo-50 rounded-lg p-6 text-center"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <p className="text-indigo-800 font-medium">
              🛡️ Join thousands of students already protecting their future with Student Shield
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;