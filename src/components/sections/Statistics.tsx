import React from 'react';
import { statisticsData } from '../../data/consultancyData';
import { StatItem } from '../../types';

export interface StatisticsProps {
  stats?: StatItem[];
  className?: string;
}

export const Statistics: React.FC<StatisticsProps> = ({
  stats = statisticsData,
  className = '',
}) => {
  return (
    <section
      aria-label="Key Performance Statistics"
      className={`relative z-20 py-12 bg-brand-black text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-gray-800">
          {stats.map((stat, index) => (
            <div
              key={stat.id || index}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                index > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight flex items-baseline">
                <span className="text-white">{stat.value}</span>
                <span className="text-brand-orange ml-1 text-3xl font-extrabold">•</span>
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-bold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-brand-gray-400 font-normal leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

