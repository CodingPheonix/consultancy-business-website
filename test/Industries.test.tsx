import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Industries } from '../src/components/sections/Industries';
import { industriesData } from '../src/data/consultancyData';

describe('Industries Component', () => {
  it('renders all configured industries', () => {
    render(<Industries />);
    industriesData.forEach((ind) => {
      expect(screen.getByText(ind.name)).toBeInTheDocument();
      expect(screen.getByText(ind.highlightTag)).toBeInTheDocument();
      expect(screen.getByText(ind.impactMetric)).toBeInTheDocument();
    });
  });

  it('renders custom configurable industries list', () => {
    const customIndustries = [
      {
        id: 'aerospace',
        name: 'Aerospace & Defense',
        description: 'Avionics supply chains and mission-critical systems engineering.',
        iconName: 'Compass',
        highlightTag: 'Avionics & Defense',
        impactMetric: '99.99% mission reliability',
      },
    ];

    render(<Industries industries={customIndustries} />);
    expect(screen.getByText('Aerospace & Defense')).toBeInTheDocument();
    expect(screen.getByText('99.99% mission reliability')).toBeInTheDocument();
  });
});

