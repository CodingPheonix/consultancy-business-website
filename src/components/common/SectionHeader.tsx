import React from 'react';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  highlightWord?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  highlightWord,
  align = 'center',
  className = '',
}) => {
  const isCentered = align === 'center';

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-brand-orange relative inline-block">
          {highlightWord}
          <span className="absolute left-0 bottom-0.5 w-full h-1 bg-brand-orange/20 rounded-full" />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCentered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-3 ${isCentered ? 'flex justify-center' : ''}`}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-[1.15]">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-brand-gray-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

