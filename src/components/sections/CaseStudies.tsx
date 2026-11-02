import React from 'react';
import { caseStudiesData } from '../../data/consultancyData';
import { SectionHeader } from '../common/SectionHeader';
import { CaseStudyItem } from '../../types';
import { CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';

export interface CaseStudiesProps {
  caseStudies?: CaseStudyItem[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  caseStudies = caseStudiesData,
}) => {
  return (
    <section id="cases" className="py-20 sm:py-28 bg-brand-gray-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Verified Case Studies"
          title="Proven Transformations & Quantified Value"
          highlightWord="Transformations"
          subtitle="Explore how our strategic advisory interventions unlocked scalable revenue, compressed operating cycles, and expanded enterprise EBITDA."
        />

        {/* 3 Sample Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl border border-brand-gray-200/90 shadow-sm overflow-hidden hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image & Industry Tag */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-brand-gray-100">
                  <img
                    src={study.image}
                    alt={`${study.title} case study`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-brand-orange px-3 py-1 rounded-full shadow-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-brand-black mb-5 leading-snug">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed font-normal">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange mb-1">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Our Strategic Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed font-normal">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-green-700 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>The Outcome</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed font-normal">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stat Highlights */}
              <div className="px-6 py-4 bg-brand-gray-50 border-t border-brand-gray-100 grid grid-cols-3 gap-2 text-center">
                {study.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <span className="block text-base sm:text-lg font-black text-brand-black">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-brand-gray-500 tracking-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
