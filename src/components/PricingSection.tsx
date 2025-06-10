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
      description: 'Complete student protection package',
      features: [
        {
          title: 'Personal Accident Cover',
          value: '₹10 Lakhs',
          details: [
            'Coverage for Accidental Death',
            'Permanent Total Disability (PTD)',
            'Permanent Partial Disability (PPD)',
            'Accidental Medical Reimbursement (up to ₹10,000)',
            'Funeral Expenses'
          ]
        },
        {
          title: 'Hospital Daily Cash Benefit',
          value: 'Daily Benefits',
          details: [
            'Coverage from Day 1 of hospitalization',
            'Daily Cash Benefit: ₹2,000 per day (Max 30 days)',
            'ICU Coverage: ₹4,000 per day (Max 30 days)',
            'No waiting period, no deductibles',
            'Pre-existing conditions covered from Day 1'
          ]
        },
        {
          title: 'Mi Care Wellness Services',
          value: 'Complete Care',
          details: [
            '60 Free Teleconsultations/Year',
            'Second Medical Opinion',
            'Surgical Assistance',
            'Up to 25% discount on Pharmacy',
            'Up to 30% discount on Diagnostics'
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
      description: 'Enhanced protection with life coverage',
      features: [
        {
          title: 'Term Life Cover',
          value: '₹3 Lakhs',
          details: [
            'Death Cover: ₹3,00,000',
            'Age Coverage: 40-60 years',
            '1 Year Policy Tenure',
            'Suicide exclusion for first year',
            'Financial security for family'
          ]
        },
        {
          title: 'Mi Care Wellness Services',
          value: 'Complete Care',
          details: [
            '60 Free Teleconsultations/Year',
            'Second Medical Opinion',
            'Surgical Assistance & Care Coordination',
            'Up to 25% discount on Pharmacy',
            'Up to 30% discount on Diagnostics',
            'Up to 50% discount on dental & vision care'
          ]
        },
        {
          title: 'Additional Benefits',
          value: 'Premium Services',
          details: [
            'Free pick-up and drop at hospital',
            'Dedicated care coordinator',
            'Up to 10% discount on Homecare',
            'Enhanced wellness support',
            'Priority customer service'
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
              Smart Students Plan Ahead. Select the coverage that fits your needs and budget.
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
                  <p className="text-sm opacity-90 mb-2">{plan.description}</p>
                  <p className="text-xs opacity-75">Age: {plan.ageRange}</p>
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
                            {index === 0 && plan.name === 'Student Shield Plus' && <Users className="h-6 w-6 text-purple-600" />}
                            {index === 1 && plan.name === 'Student Shield Plus' && <Smartphone className="h-6 w-6 text-purple-600" />}
                            {index === 2 && plan.name === 'Student Shield Plus' && <Heart className="h-6 w-6 text-purple-600" />}
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
                      {plan.popular ? 'Comprehensive protection for students' : 'Enhanced coverage with life insurance'}
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
              🛡️ Join thousands of students already protecting their future with Student Shield
            </p>
            <p className="text-indigo-600 text-sm mt-2">
              Both plans include MiCare wellness services for complete healthcare support
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