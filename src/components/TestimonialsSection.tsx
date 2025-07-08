import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rani Sharma",
      position: "2nd Year, University of Hyderabad",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      quote: "My Father was diagnosed with Dengue for a Month, where our health expenses are covered through Insurance",
    },
    {
      name: "Arjun Patel",
      position: "3rd Year, IIT Bombay",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
      quote: "Suddenly my father had cardiac arrest and there was a immedaite suregery, we were covered through student shield insurance. ",
    },
    {
      name: "Lakshmi Priya",
      position: "2nd Year, Malla Reddy University",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      quote: "My mother met with an accident and had to undergo surgery. Student Shield covered all the medical expenses, and I didn't have to worry about finances during such a tough time.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how Student Shield has made a difference for real students like you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop Testimonials */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -right-2 -bottom-2 bg-indigo-600 rounded-full p-2">
                          <Quote className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="md:hidden">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -right-2 -bottom-2 bg-indigo-600 rounded-full p-2">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonials[currentIndex].quote}"</p>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="#pricing" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors">
              Join these happy students →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;