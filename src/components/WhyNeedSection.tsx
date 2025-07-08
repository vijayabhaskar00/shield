import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertTriangle, DollarSign, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const WhyNeedSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselContent = [
    {
      id: 1,
      icon: <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />,
      title: "₹8,000+",
      subtitle: "average cost of a hospital visit",
      warningType: "WARNING:",
      warningText: "Medical emergencies can strike anytime. Without coverage, you could face crippling bills.",
      bgGradient: "from-red-900/40 to-red-800/40"
    },
    {
      id: 2,
      icon: <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />,
      title: "1 in 3",
      subtitle: "Parents face unexpected expenses",
      warningType: "FACT:",
      warningText: "We cover your parent, so you can focus on your studies, not finances.",
      bgGradient: "from-orange-900/40 to-red-800/40"
    },
    {
      id: 3,
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />,
      title: "92%",
      subtitle: "of students worry about unexpected expenses",
      warningType: "DON'T RISK IT:",
      warningText: "Join thousands of protected students from just ₹199/month.",
      bgGradient: "from-purple-900/40 to-red-800/40"
    },
    
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-800 via-red-700 to-rose-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-red-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-red-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-red-900/30 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-2 rounded-full text-yellow-300 font-semibold mb-4 sm:mb-6 animate-pulse text-sm sm:text-base">
            🚨 Reality Check: Is your Parent Protected?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
            What if something goes wrong tomorrow?
          </h2>
          <p className="text-lg sm:text-xl text-red-200 max-w-3xl mx-auto px-4">
            The unexpected happens. But Student Shield is here to keep your back covered when you need it most.
          </p>
        </div>

        {/* Enhanced Carousel Section - Fixed Responsive Heights */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="relative bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden">
            {/* Fixed Container Heights - Mobile Perfect, Desktop Reasonable */}
            <div className="relative h-[450px] sm:h-[420px] md:h-[460px] lg:h-[440px] xl:h-[420px] overflow-hidden">
              
              {/* Content Container - Better spacing for desktop */}
              <div className="h-full pt-12 pb-16 px-12 sm:px-16 md:px-20 lg:px-24">
                
                {carouselContent.map((content, index) => (
                  <div
                    key={content.id}
                    className={`absolute top-12 bottom-16 left-12 right-12 sm:left-16 sm:right-16 md:left-20 md:right-20 lg:left-24 lg:right-24 transition-all duration-700 ease-in-out transform ${
                      index === currentSlide 
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : index < currentSlide 
                          ? 'opacity-0 -translate-x-full scale-95' 
                          : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    {/* Reasonable sizing for all devices */}
                    <div className={`bg-gradient-to-br ${content.bgGradient} backdrop-blur-sm rounded-xl border border-red-500/20 h-full flex flex-col justify-center p-4 sm:p-6 md:p-8`}>
                      
                      {content.isTestimonial ? (
                        // Testimonial Slide Layout - Controlled sizing
                        <div className="text-center flex flex-col justify-center h-full space-y-3 sm:space-y-4 md:space-y-5">
                          <div className="bg-green-500/20 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mx-auto">
                            {content.icon}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-300">{content.title}</h3>
                          <p className="text-red-200 text-sm sm:text-base md:text-lg">{content.subtitle}</p>
                          
                          <div className="bg-red-900/40 p-3 sm:p-4 md:p-5 rounded-lg mx-auto max-w-sm sm:max-w-md md:max-w-lg">
                            <p className="text-xs sm:text-sm md:text-base italic text-red-100 mb-2 sm:mb-3 leading-relaxed">
                              "{content.testimonialText}"
                            </p>
                            <p className="text-xs sm:text-sm md:text-base font-semibold text-yellow-300">{content.author}</p>
                          </div>
                        </div>
                      ) : (
                        // Statistics Slide Layout - Controlled sizing
                        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                          <div className="bg-red-500/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto">
                            {content.icon}
                          </div>
                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{content.title}</h3>
                          <p className="text-red-200 text-base sm:text-lg md:text-xl">{content.subtitle}</p>
                          <div className="bg-red-900/40 p-3 sm:p-4 md:p-5 rounded-lg mx-auto max-w-sm sm:max-w-md md:max-w-lg">
                            <p className="text-xs sm:text-sm md:text-base text-red-100 leading-relaxed">
                              <span className="text-yellow-300 font-bold">{content.warningType}</span> {content.warningText}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Counter - Reasonable sizing */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full border border-white/20 z-30">
              <span className="text-white text-xs sm:text-sm md:text-base font-medium">
                {currentSlide + 1} / {carouselContent.length}
              </span>
            </div>

            {/* Carousel Navigation - Reasonable sizing */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 flex justify-between pointer-events-none z-30">
              <button
                onClick={prevSlide}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 sm:p-4 md:p-5 rounded-full transition-all duration-200 pointer-events-auto group border border-white/20 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 sm:p-4 md:p-5 rounded-full transition-all duration-200 pointer-events-auto group border border-white/20 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Carousel Indicators - Reasonable sizing */}
            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 md:space-x-4 z-30">
              {carouselContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'bg-white w-6 sm:w-8 md:w-10 h-2.5 sm:h-3 md:h-3.5' 
                      : 'bg-white/50 hover:bg-white/70 w-2.5 sm:w-3 md:w-4 h-2.5 sm:h-3 md:h-3.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
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