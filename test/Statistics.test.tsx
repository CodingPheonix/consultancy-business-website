import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Statistics } from '../src/components/sections/Statistics';

describe('Statistics Component', () => {
  it('renders standard four statistics items', () => {
    render(<Statistics />);
    expect(screen.getByText('Years of Experience')).toBeInTheDocument();
    expect(screen.getByText('Clients Served')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Industries Served')).toBeInTheDocument();
  });

  it('renders custom configurable statistics data', () => {
    const customStats = [
      {
        id: 'cust-1',
        value: '99%',
        label: 'Satisfaction Rate',
        description: 'Verified executive survey results',
      },
      {
        id: 'cust-2',
        value: '$10B+',
        label: 'Capital Advised',
        description: 'Global transaction values',
      },
    ];

    render(<Statistics stats={customStats} />);
    expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('$10B+')).toBeInTheDocument();
  });

  it('gracefully handles empty stats array boundary condition', () => {
    render(<Statistics stats={[]} />);
    const region = screen.getByRole('region', { name: /Key Performance Statistics/i });
    expect(region).toBeInTheDocument();
  });
});

