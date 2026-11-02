import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'black' | 'gray' | 'outline';
  dot?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  dot = true,
  className = '',
  icon,
}) => {
  const variantStyles = {
    orange: 'bg-brand-orange-light text-brand-orange border border-brand-orange/20',
    black: 'bg-brand-black text-white border border-brand-black',
    gray: 'bg-brand-gray-100 text-brand-gray-700 border border-brand-gray-200',
    outline: 'bg-white text-brand-black border border-brand-gray-300',
  };

  const dotColors = {
    orange: 'bg-brand-orange animate-pulse',
    black: 'bg-brand-orange animate-pulse',
    gray: 'bg-brand-gray-400',
    outline: 'bg-brand-orange animate-pulse',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColors[variant]}`} />}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

