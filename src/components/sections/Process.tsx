import React from 'react';
import { workingProcessSteps } from '../../data/consultancyData';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle2, Clock } from 'lucide-react';
import { ProcessStep } from '../../types';

export interface ProcessProps {
  steps?: ProcessStep[];
}

export const Process: React.FC<ProcessProps> = ({
  steps = workingProcessSteps,
}) => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Methodology"
          title="Our Four-Stage Strategic Process"
          highlightWord="Process"
          subtitle="A battle-tested advisory roadmap engineered to de-risk transformation, align stakeholders, and lock in high-impact execution."
        />

        {/* Desktop Horizontal Timeline / Mobile Vertical Flow */}
        <div className="relative mt-12 sm:mt-16">
          
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-gray-200 -translate-y-16 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="group relative bg-brand-gray-50/70 hover:bg-white rounded-2xl p-7 border border-brand-gray-200/80 hover:border-brand-orange transition-all duration-300 shadow-sm hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Bubble */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-black text-white group-hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center font-extrabold text-lg shadow-sm">
                      {step.stepNumber}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-gray-500 bg-white border border-brand-gray-200 px-2.5 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" />
                      {step.duration}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-brand-gray-600 leading-relaxed font-normal mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Key Activities Checklist */}
                <div className="pt-4 border-t border-brand-gray-200/60 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-brand-gray-400 tracking-wider block">
                    Core Milestones
                  </span>
                  {step.activities.map((act, actIdx) => (
                    <div key={actIdx} className="flex items-center gap-2 text-xs text-brand-gray-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
