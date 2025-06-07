import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "How soon does coverage start?",
      answer: "Your coverage starts immediately after payment. There's no waiting period, so you're protected from the moment your payment is confirmed."
    },
    {
      question: "What if I don't have receipts for a damaged phone?",
      answer: "Don't stress. We've simplified our claims process. While photos of the damage are helpful, we don't require original purchase receipts for gadget claims."
    },
    {
      question: "Can I cancel my plan anytime?",
      answer: "Yes, you can cancel your plan at any time. For monthly plans, you'll maintain coverage until the end of your billing cycle. For annual plans, we offer prorated refunds if you cancel early."
    },
    {
      question: "Are pre-existing conditions covered?",
      answer: "Student Shield covers new incidents and accidents that occur after your policy start date. Pre-existing medical conditions are generally not covered, but each case is evaluated individually."
    },
    {
      question: "How do I file a claim?",
      answer: "Filing a claim is easy! Just log in to your account, click on 'File a Claim,' select the type of claim, provide the required information, and submit. Our team typically processes claims within 48-72 hours."
    },
    {
      question: "Can I cover multiple devices?",
      answer: "The Pro plan covers one primary device (phone or laptop). Additional devices can be added to your policy for a small extra fee. Contact our support team for details on multi-device coverage."
    },
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
            Find answers to commonly asked questions about Student Shield coverage.
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