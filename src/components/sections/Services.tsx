import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { IconResolver } from '../common/IconResolver';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { servicesData } from '../../data/consultancyData';
import { ServiceItem } from '../../types';

export interface ServicesProps {
  services?: ServiceItem[];
  title?: string;
  subtitle?: string;
}

export const Services: React.FC<ServicesProps> = ({
  services = servicesData,
  title = 'Comprehensive Consulting Disciplines',
  subtitle = 'Tailored advisory frameworks designed to catalyze operational velocity, capitalize on digital disruptions, and amplify enterprise valuation.',
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleScrollToContact = (serviceName: string) => {
    setSelectedService(null);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });

      // Automatically select this service in the contact form dropdown if available
      const selectElement = document.getElementById('service-select') as HTMLSelectElement | null;
      if (selectElement) {
        selectElement.value = serviceName;
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-gray-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Practice Areas"
          title={title}
          highlightWord="Consulting"
          subtitle={subtitle}
        />

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3/4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-brand-gray-200/90 shadow-sm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-brand-orange transition-colors rounded-t-full" />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconResolver name={service.iconName} className="w-7 h-7" />
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-brand-gray-600 leading-relaxed mb-6 font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Bottom Interactive Area */}
              <div className="pt-4 border-t border-brand-gray-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-black group-hover:text-brand-orange transition-colors cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-md px-1"
                  aria-label={`Learn more about ${service.name}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-orange" />
                </button>
                <span className="text-xs font-mono font-semibold text-brand-gray-400">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Learn More Interactive Modal Dialog */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name || 'Service Details'}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-sm sm:text-base text-brand-gray-700 leading-relaxed">
              {selectedService.fullDescription}
            </p>

            {/* Core Deliverables */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-brand-gray-500 mb-3">
                Key Strategic Deliverables
              </h4>
              <div className="space-y-2 bg-brand-gray-50 p-4 rounded-xl border border-brand-gray-200">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantified Benefit Callout */}
            <div className="p-4 rounded-xl bg-brand-orange-light border border-brand-orange/20 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                  Measured Impact
                </span>
                <span className="text-sm font-semibold text-brand-black block mt-0.5">
                  {selectedService.keyBenefit}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedService(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleScrollToContact(selectedService.name)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire About This Service
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
