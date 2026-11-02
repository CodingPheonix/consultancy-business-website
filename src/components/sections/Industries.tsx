import React from 'react';
import { industriesData } from '../../data/consultancyData';
import { SectionHeader } from '../common/SectionHeader';
import { IconResolver } from '../common/IconResolver';
import { IndustryItem } from '../../types';
import { ArrowUpRight } from 'lucide-react';

export interface IndustriesProps {
  industries?: IndustryItem[];
}

export const Industries: React.FC<IndustriesProps> = ({
  industries = industriesData,
}) => {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Sector Specialization"
          title="Industries We Serve & Elevate"
          highlightWord="Industries"
          subtitle="Combining deep functional strategy with unmatched industry domain nuance to outmaneuver disruption and capture market share."
        />

        {/* Visual Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="group relative rounded-2xl p-7 bg-white border border-brand-gray-200/90 shadow-sm hover:border-brand-black transition-all duration-300 hover:shadow-elevated flex flex-col justify-between"
            >
              <div>
                {/* Header row with icon & tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray-100 text-brand-black group-hover:bg-brand-black group-hover:text-brand-orange transition-colors duration-300 flex items-center justify-center">
                    <IconResolver name={ind.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-full border border-brand-orange/20">
                    {ind.highlightTag}
                  </span>
                </div>

                {/* Industry Title */}
                <h3 className="text-xl font-bold text-brand-black mb-2.5 flex items-center justify-between group-hover:text-brand-orange transition-colors">
                  <span>{ind.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-brand-gray-400 group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-gray-600 leading-relaxed font-normal mb-5">
                  {ind.description}
                </p>
              </div>

              {/* Bottom Impact Metric Callout */}
              <div className="pt-4 border-t border-brand-gray-100 flex items-center justify-between text-xs font-semibold">
                <span className="text-brand-gray-400 uppercase tracking-wider text-[10px]">
                  Sector Benchmark
                </span>
                <span className="text-brand-black font-bold group-hover:text-brand-orange transition-colors">
                  {ind.impactMetric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

