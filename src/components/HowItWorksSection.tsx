import React from 'react';
import { Check, CreditCard, FileText, Shield } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Choose Your Plan',
      description: 'Select Shield or Shield Plus based on your familys needs.',
      color: 'bg-indigo-600'
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: '2.	Enter parent & nominee details (Child)',
      description: 'We’ll ask for the insured parent’s information and child’s details.',
      color: 'bg-teal-600'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: 'Make The Payment',
      description: 'Use UPI, cards, or wallets.',
      color: 'bg-orange-600'
    },
    {
      icon: <Check className="h-8 w-8 text-white" />,
      title: 'Get covered instantly!',
      description: 'Instant policy confirmation and email notification.',
      color: 'bg-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
           How do I buy the plan?: <span className="text-indigo-600">Simple as 1-2-3!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting covered is easy.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
          <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white bg-indigo-600 z-10"></div>
            
            {/* Mobile layout */}
            <div className="md:hidden flex flex-col items-center text-center mb-8">
              <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
              {index % 2 === 0 ? (
                <div className={`${index % 2 === 0 ? 'md:ml-auto' : ''} max-w-md`}>
            <div className="flex md:justify-end items-center mb-4">
              <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center md:order-last md:ml-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 md:mr-4">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
                </div>
              ) : null}
            </div>
            
            <div className="hidden md:block md:w-1/2 md:pl-12">
              {index % 2 !== 0 ? (
                <div className={`${index % 2 === 0 ? '' : 'md:mr-auto'} max-w-md`}>
            <div className="flex items-center mb-4">
              <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
                </div>
              ) : null}
            </div>
          </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">It's That Simple</h3>
            <p className="text-gray-600 mb-6">
             From sign-up to coverage in under 5 minutes. Zero paperwork. Immediate protection.
            </p>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;