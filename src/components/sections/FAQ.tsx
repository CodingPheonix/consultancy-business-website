import React, { useState } from 'react';
import { faqData } from '../../data/consultancyData';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem } from '../../types';
import { Button } from '../common/Button';

export interface FAQProps {
  faqs?: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqs = faqData }) => {
  // First item open by default for immediate preview
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id || 'faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-brand-gray-50/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Advisory FAQ"
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about our engagement scope, fee architecture, partner models, and delivery timelines."
        />

        {/* Accordion List */}
        <div className="space-y-4 mt-8">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-brand-gray-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange min-h-[52px]"
                >
                  <span className="text-base sm:text-lg font-bold text-brand-black flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-orange text-white' : 'text-brand-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-brand-gray-600 leading-relaxed border-t border-brand-gray-100 animate-fade-in"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-brand-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-black">
                Have a unique strategic requirement?
              </h4>
              <p className="text-xs sm:text-sm text-brand-gray-500">
                Our Managing Partners are available for a confidential 30-minute diagnostic briefing.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleScrollToContact}
            className="flex-shrink-0 w-full sm:w-auto"
          >
            Ask Our Partners
          </Button>
        </div>

      </div>
    </section>
  );
};

