import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "What's the difference between Student Shield and Student Shield Plus?",
      answer: "Student Shield (₹999/year) includes Personal Accident Cover, Hospital Daily Cash, and MiCare wellness services - perfect for students aged 18-65. Student Shield Plus (₹1500/year) includes Term Life Cover and MiCare services, designed for ages 40-60 years providing family financial security."
    },
    {
      question: "How soon does coverage start?",
      answer: "Your coverage starts immediately after payment. There's no waiting period, so you're protected from the moment your payment is confirmed."
    },
    {
      question: "What is Term Life Cover in Student Shield Plus?",
      answer: "Term Life Cover provides ₹3,00,000 death benefit for individuals aged 40-60 years. It's a 1-year policy that offers financial security to your family. Note: Suicide is excluded for the first year of the policy."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or change your plan during renewal. If you want to switch from Student Shield to Student Shield Plus or vice versa, contact our support team for assistance."
    },
    {
      question: "What are MiCare wellness services?",
      answer: "MiCare is included in both plans and provides 60 free teleconsultations per year, second medical opinion, surgical assistance, and discounts up to 25% on pharmacy, 30% on diagnostics, 50% on dental care, and more."
    },
    {
      question: "Are there any exclusions I should know about?",
      answer: "Yes, Personal Accident cover excludes high-risk occupations like mining, explosives handling, racing, mountaineering, etc. Term Life Cover excludes suicide in the first year. Nuclear, chemical, and biological terrorism are also excluded."
    },
    {
      question: "How do I file a claim?",
      answer: "Filing a claim is easy! Log in to your account, select 'File a Claim,' choose the claim type, provide required information, and submit. Our team processes claims within 48-72 hours."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Got Questions? <span className="text-indigo-600">We've Got Answers!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to commonly asked questions about both Student Shield plans.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </span>
                </button>
                <div
                  className={`mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;