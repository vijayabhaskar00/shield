import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertTriangle, DollarSign, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const WhyNeedSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselContent = [
    {
      id: 1,
      icon: <DollarSign className="h-7 w-7 text-white" />,
      title: "₹8,000+",
      subtitle: "average cost of a hospital visit",
      warningType: "WARNING:",
      warningText: "Medical emergencies can strike anytime. Without coverage, you could face crippling bills.",
      bgGradient: "from-red-900/40 to-red-800/40"
    },
    {
      id: 2,
      icon: <AlertTriangle className="h-7 w-7 text-white" />,
      title: "1 in 3",
      subtitle: "students damage their phone within the first year",
      warningType: "FACT:",
      warningText: "Your phone is essential for classes and emergencies. Can you afford a replacement?",
      bgGradient: "from-orange-900/40 to-red-800/40"
    },
    {
      id: 3,
      icon: <TrendingUp className="h-7 w-7 text-white" />,
      title: "92%",
      subtitle: "of students worry about unexpected expenses",
      warningType: "DON'T RISK IT:",
      warningText: "Join thousands of protected students from just ₹199/month.",
      bgGradient: "from-purple-900/40 to-red-800/40"
    },
    {
      id: 4,
      icon: <Quote className="h-7 w-7 text-white" />,
      title: "Real Student",
      subtitle: "success story",
      testimonialText: "I fell sick during my final exams and didn't have money for hospital bills. Student Shield covered everything, and I could focus on getting better instead of worrying about costs.",
      author: "- Priya S., 2nd Year, Delhi University",
      bgGradient: "from-green-900/40 to-red-800/40",
      isTestimonial: true
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
    }, 5000); // Increased to 5 seconds for testimonial reading time

    return () => clearInterval(timer);
  }, [carouselContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-800 via-red-700 to-rose-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-900/30 backdrop-blur-sm px-6 py-2 rounded-full text-yellow-300 font-semibold mb-6 animate-pulse">
            🚨 Reality Check: Are You Protected?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What if something goes wrong tomorrow?
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            The unexpected happens. But Student Shield is here to keep your back covered when you need it most.
          </p>
        </div>

        {/* Enhanced Carousel Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 overflow-hidden">
            <div className="relative h-[380px] sm:h-[360px]">
              {carouselContent.map((content, index) => (
                <div
                  key={content.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < currentSlide 
                        ? 'opacity-0 -translate-x-full scale-95' 
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${content.bgGradient} backdrop-blur-sm rounded-xl p-6 h-full flex flex-col justify-center border border-red-500/20 mx-12`} style={{height: 'calc(100% - 60px)'}}>
                    {content.isTestimonial ? (
                      // Testimonial Slide Layout
                      <div className="text-center flex flex-col justify-center h-full py-2">
                        <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                          {content.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-300">{content.title}</h3>
                        <p className="text-red-200 mb-4 text-base">{content.subtitle}</p>
                        
                        <div className="bg-red-900/40 p-4 sm:p-5 rounded-lg">
                          <p className="text-sm sm:text-base italic text-red-100 mb-3">
                            "{content.testimonialText}"
                          </p>
                          <p className="text-sm font-semibold text-yellow-300">{content.author}</p>
                        </div>
                      </div>
                    ) : (
                      // Statistics Slide Layout
                      <div className="text-center">
                        <div className="bg-red-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                          {content.icon}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-2">{content.title}</h3>
                        <p className="text-red-200 mb-6 text-lg">{content.subtitle}</p>
                        <div className="bg-red-900/40 p-4 rounded-lg">
                          <p className="text-sm text-red-100">
                            <span className="text-yellow-300 font-bold">{content.warningType}</span> {content.warningText}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
              <button
                onClick={prevSlide}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-all duration-200 pointer-events-auto group border border-white/20 z-10"
              >
                <ChevronLeft className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-2 rounded-full transition-all duration-200 pointer-events-auto group border border-white/20 z-10"
              >
                <ChevronRight className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">
                {currentSlide + 1} / {carouselContent.length}
              </span>
            </div>

            {/* Carousel Indicators - Positioned at bottom inside container */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white w-8 h-3 rounded-full' 
                      : 'bg-white/50 hover:bg-white/70 w-3 h-3 rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedSection;