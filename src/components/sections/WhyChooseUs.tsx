import React from 'react';
import { whyChooseUsFeatures } from '../../data/consultancyData';
import { IconResolver } from '../common/IconResolver';
import { FeatureItem } from '../../types';

export interface WhyChooseUsProps {
  features?: FeatureItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  features = whyChooseUsFeatures,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Why Industry Leaders Choose <span className="text-brand-orange">Vanguard</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-gray-400 font-normal leading-relaxed">
            In an industry dominated by speculative presentations, we distinguish ourselves through measurable execution, senior leadership involvement, and empirical validation.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id || index}
              className="group relative bg-brand-black-card rounded-2xl p-7 border border-brand-gray-800 hover:border-brand-orange transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Metric Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray-900 border border-brand-gray-800 text-brand-orange flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                    <IconResolver name={feature.iconName} className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white group-hover:text-brand-orange transition-colors">
                      {feature.metric}
                    </span>
                    <span className="block text-[10px] uppercase font-bold text-brand-gray-400 tracking-wider">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-gray-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Step Index */}
              <div className="pt-6 mt-6 border-t border-brand-gray-800/80 flex items-center justify-between text-xs text-brand-gray-500 font-mono">
                <span>0{index + 1} // ADVANTAGE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
