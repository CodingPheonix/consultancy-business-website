import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { WhyChooseUs } from '../src/components/sections/WhyChooseUs';
import { whyChooseUsFeatures } from '../src/data/consultancyData';

describe('WhyChooseUs Component', () => {
  it('renders section title and advantage features', () => {
    render(<WhyChooseUs />);
    expect(screen.getByText(/Why Industry Leaders Choose/i)).toBeInTheDocument();
    whyChooseUsFeatures.forEach((feat) => {
      expect(screen.getByText(feat.title)).toBeInTheDocument();
      expect(screen.getByText(feat.metric)).toBeInTheDocument();
    });
  });

  it('renders custom feature items correctly', () => {
    const customFeatures = [
      {
        id: 'cust-feat-1',
        title: 'Zero Overhead',
        description: 'Lean operational execution with direct access to partners.',
        metric: '100%',
        metricLabel: 'Direct Partner Access',
        iconName: 'ShieldCheck',
      },
    ];

    render(<WhyChooseUs features={customFeatures} />);
    expect(screen.getByText('Zero Overhead')).toBeInTheDocument();
    expect(screen.getByText('Direct Partner Access')).toBeInTheDocument();
  });
});

