import React, { useState } from 'react';
import { Heart, ShieldAlert, Smartphone, CheckCircle, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PolicyForm from './PolicyForm'; // Changed from PaymentPage to PolicyForm

const PricingSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [showPolicyForm, setShowPolicyForm] = useState(false); // Changed variable name
  const [selectedPlan, setSelectedPlan] = useState<'student-shield' | 'student-shield-plus' | undefined>(undefined);

  const handleGetPlan = (planType: 'student-shield' | 'student-shield-plus') => {
    setSelectedPlan(planType);
    setShowPolicyForm(true); // Changed variable name
  };

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

  const pricingPlans = [
    {
      id: 'student-shield' as const,
      name: 'Student Shield',
      price: 999,
      period: 'year',
      popular: true,
      ageRange: '18-65 years',
      descriptions: [
        "Covers income loss due to Accidental Hospitalisation, Disability, Accidental Death, Dismemberment, Daily cash in case of Hospitalisation and Funeral expenses.",
        "Wellness Cover"
      ],
      features: [
        {
          title: 'Wellness Cover',
          value: '',
          details: [
            '60 free consultations',
            'Second opinion',
            'Surgery care assistance (free pickup and drop at the Hospital)',
            'Dedicated Care Co-ordinator',
            'Additional discounts:',
            'upto 25% on pharmacy',
            'upto 30% on Diagnostics',
            'upto 10% on Home-care',
            'upto 50% discount on dental scaling and X-ray',
            'upto 50% discount on Frames and lenses'
          ]
        },
        {
          title: 'Hospital Daily Cash',
          value: '',
          details: [
            '2000 Rs per day and ICU double benefit 4000 Rs per day for a max of 30 days'
          ]
        },
        {
          title: 'Accidental Hospitalisation (linked to Death and Disability)',
          value: '',
          details: [
            '10,000 Rs'
          ]
        },
        {
          title: 'Accidental Death',
          value: '',
          details: [
            '10,00,000 Rs'
          ]
        },
        {
          title: 'Accidental Disability',
          value: '',
          details: [
            'Upto 100% of Accidental Death based on type of Disability'
          ]
        },
        {
          title: 'Accidental Dismemberment',
          value: '',
          details: [
            'Upto 100% of Accidental Death based on type of Dismemberment'
          ]
        },
        {
          title: 'Funeral Expenses',
          value: '',
          details: [
            '10000 Rs'
          ]
        },
        {
          title: 'Death By all Means',
          value: '',
          details: [
            'Not Applicable'
          ]
        },
        {
          title: 'Premium per year (including gst)',
          value: '',
          details: [
            'Rs 999 per year'
          ]
        }
      ]
    },
    {
      id: 'student-shield-plus' as const,
      name: 'Student Shield Plus',
      price: 1500,
      period: 'year',
      popular: false,
      ageRange: '40-60 years',
      descriptions: [
        'Covers income loss due to Accidental Hospitalisation, Disability, Accidental Death, Dismemberment, Daily cash in case of Hospitalisation and Funeral expenses.',
        'Wellness cover and also covers income loss due to Death by any means.'
      ],
      features: [
        {
          title: 'Wellness Cover',
          value: '',
          details: [
            '60 free consultations',
            'Second opinion',
            'Surgery care assistance (free pickup and drop at the Hospital)',
            'Dedicate Care Co-ordinator',
            'Additional discounts:',
            'up to 25% on pharmacy',
            'upto 30% on Diagnostics',
            'upto 10% on Home-care',
            'upto 50% discount on dental scaling and X-ray',
            'upto 50% discount on Frames and lenses'
          ]
        },
        {
          title: 'Hospital Daily Cash',
          value: '',
          details: [
            '2000 Rs per day and ICU double benefit 4000 Rs per day for a max of 30 days'
          ]
        },
        {
          title: 'Accidental Hospitalisation (linked to Death and Disability)',
          value: '',
          details: [
            '10,000 Rs'
          ]
        },
        {
          title: 'Accidental Death',
          value: '',
          details: [
            '13,00,000 Rs'
          ]
        },
        {
          title: 'Accidental Disability',
          value: '',
          details: [
            'Upto 100% of Accidental Death based on type of Disability'
          ]
        },
        {
          title: 'Accidental Dismemberment',
          value: '',
          details: [
            'Upto 100% of Accidental Death based on type of Dismemberment'
          ]
        },
        {
          title: 'Funeral Expenses',
          value: '',
          details: [
            '10000 Rs'
          ]
        },
        {
          title: 'Death By all Means',
          value: '',
          details: [
            '3,00,000'
          ]
        },
        {
          title: 'Premium per year (including gst)',
          value: '',
          details: [
            'Rs 1500 per year'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Choose Your <span className="text-indigo-600">Protection Plan</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Smart Families Plan Ahead. Select a coverage that fits your Parent needs and budget.
            </motion.p>
          </div>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, planIndex) => (
              <motion.div 
                key={plan.name}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 relative ${
                  plan.popular ? 'border-indigo-500' : 'border-purple-500'
                }`}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={planIndex}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 text-center text-white ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                    : 'bg-gradient-to-r from-purple-600 to-gray-700'
                }`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    ₹{plan.price}
                    <span className="text-lg font-normal">/{plan.period}</span>
                  </div>
                  <ul className="text-sm opacity-90 mb-2 list-disc list-inside">
                    {plan.descriptions.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <p className="text-xs opacity-75">Parent Age: {plan.ageRange}</p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {index === 0 && plan.name === 'Student Shield' && <ShieldAlert className="h-6 w-6 text-indigo-600" />}
                            {index === 1 && plan.name === 'Student Shield' && <Heart className="h-6 w-6 text-indigo-600" />}
                            {index === 2 && plan.name === 'Student Shield' && <Smartphone className="h-6 w-6 text-indigo-600" />}
                            {index === 3 && plan.name === 'Student Shield' && <ShieldAlert className="h-6 w-6 text-indigo-600" />} {/* Accidental Death */}
                            {index === 4 && plan.name === 'Student Shield' && <ShieldAlert className="h-6 w-6 text-indigo-600" />} {/* Accidental Disability */}
                            {index === 5 && plan.name === 'Student Shield' && <ShieldAlert className="h-6 w-6 text-indigo-600" />} {/* Accidental Dismemberment */}
                            {index === 6 && plan.name === 'Student Shield' && <Heart className="h-6 w-6 text-indigo-600" />} {/* Funeral Expenses */}
                            {index === 7 && plan.name === 'Student Shield' && <ShieldAlert className="h-6 w-6 text-indigo-600" />} {/* Death By all Means */}
                            {index === 8 && plan.name === 'Student Shield' && <CheckCircle className="h-6 w-6 text-indigo-600" />} {/* Premium per year */}
                            {index === 0 && plan.name === 'Student Shield Plus' && <ShieldAlert className="h-6 w-6 text-purple-600" />} {/* Wellness Cover */}
                            {index === 1 && plan.name === 'Student Shield Plus' && <Heart className="h-6 w-6 text-purple-600" />} {/* Hospital Daily Cash */}
                            {index === 2 && plan.name === 'Student Shield Plus' && <Smartphone className="h-6 w-6 text-purple-600" />} {/* Accidental Hospitalisation */}
                            {index === 3 && plan.name === 'Student Shield Plus' && <ShieldAlert className="h-6 w-6 text-purple-600" />} {/* Accidental Death */}
                            {index === 4 && plan.name === 'Student Shield Plus' && <ShieldAlert className="h-6 w-6 text-purple-600" />} {/* Accidental Disability */}
                            {index === 5 && plan.name === 'Student Shield Plus' && <ShieldAlert className="h-6 w-6 text-purple-600" />} {/* Accidental Dismemberment */}
                            {index === 6 && plan.name === 'Student Shield Plus' && <Heart className="h-6 w-6 text-purple-600" />} {/* Funeral Expenses */}
                            {index === 7 && plan.name === 'Student Shield Plus' && <ShieldAlert className="h-6 w-6 text-purple-600" />} {/* Death By all Means */}
                            {index === 8 && plan.name === 'Student Shield Plus' && <CheckCircle className="h-6 w-6 text-purple-600" />} {/* Premium per year */}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                            <p className={`font-medium text-sm ${plan.popular ? 'text-indigo-600' : 'text-purple-600'}`}>
                              {feature.value}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-1 pl-9">
                          {feature.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <button 
                      onClick={() => handleGetPlan(plan.id)}
                      className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg ${
                        plan.popular
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105'
                          : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                      }`}
                    >
                      Get {plan.name}
                    </button>
                    <p className="mt-3 text-gray-500 text-sm">
                      {plan.popular ? 'Your child’s dreams should never suffer due to an unexpected emergency. With Student Shield, they won’t.' : 'A parent’s well-being is a child’s strongest foundation. Student Shield Plus ensures both are secure.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 bg-indigo-50 rounded-lg p-6 text-center max-w-4xl mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
          >
            <p className="text-indigo-800 font-medium text-lg">
              🛡️ Join thousands of families who’ve protected their child’s education with Student Shield.
            </p>
            <p className="text-indigo-600 text-sm mt-2">
              Both plans include  services for complete healthcare support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Form Modal - Half Screen */}
      <PolicyForm 
        isOpen={showPolicyForm} 
        onClose={() => setShowPolicyForm(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
};

export default PricingSection;