import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../../data/consultancyData';
import { SectionHeader } from '../common/SectionHeader';
import { Star, ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

export interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = testimonialsData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Client Endorsements (Demo Content)"
          title="What Enterprise Leaders Say"
          highlightWord="Leaders"
          subtitle="Direct insights from executive sponsors on how our strategic partnerships unlocked valuation leaps. (Note: Illustrative demo profiles for preview purposes)."
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative mt-8">
          
          {/* Main Card */}
          <div className="relative bg-brand-gray-50 rounded-3xl p-8 sm:p-12 border border-brand-gray-200/90 shadow-elevated transition-all duration-500">
            
            {/* Top Row: Quote Icon & Demo Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                <Quote className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gray-400 bg-white border border-brand-gray-200 px-3 py-1 rounded-full">
                Illustrative Client Review
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl text-brand-black font-semibold leading-relaxed mb-8">
              "{activeTestimonial.feedback}"
            </blockquote>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-8" aria-label={`Rating: ${activeTestimonial.rating} out of 5 stars`}>
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
              ))}
            </div>

            {/* Client Info Row */}
            <div className="flex items-center justify-between pt-6 border-t border-brand-gray-200/80">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={`${activeTestimonial.name} portrait`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-brand-black">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-gray-600 font-normal">
                    {activeTestimonial.designation} • <span className="text-brand-orange font-semibold">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Slide Counter */}
              <div className="text-xs font-mono font-bold text-brand-gray-400 hidden sm:block">
                0{currentIndex + 1} / 0{total}
              </div>
            </div>

          </div>

          {/* Controls: Prev, Next, Play/Pause, Indicators */}
          <div className="flex items-center justify-between mt-8">
            
            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx ? 'w-8 bg-brand-orange' : 'w-2.5 bg-brand-gray-300 hover:bg-brand-gray-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows + Autoplay Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-xl border border-brand-gray-200 bg-white text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={isPlaying ? 'Pause automated carousel rotation' : 'Resume automated carousel rotation'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl border border-brand-gray-200 bg-white text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl border border-brand-gray-200 bg-white text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

