import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Hero } from '../src/components/sections/Hero';

describe('Hero Component', () => {
  it('renders trusted business partner badge', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Your Trusted Business Consulting Partner/i)
    ).toBeInTheDocument();
  });

  it('renders primary headline and description', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Transforming Business Challenges Into Opportunities/i })
    ).toBeInTheDocument();
  });

  it('renders primary CTA (Book a Consultation) and triggers scroll', () => {
    render(<Hero />);
    const bookBtn = screen.getByRole('button', { name: /Book a Consultation/i });
    expect(bookBtn).toBeInTheDocument();
    fireEvent.click(bookBtn);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('renders secondary CTA (Explore Our Services) and triggers scroll', () => {
    render(<Hero />);
    const exploreBtn = screen.getByRole('button', { name: /Explore Our Services/i });
    expect(exploreBtn).toBeInTheDocument();
    fireEvent.click(exploreBtn);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('renders visual telemetry and client proof indicators', () => {
    render(<Hero />);
    expect(screen.getByText(/Enterprise Yield Expansion/i)).toBeInTheDocument();
    expect(screen.getByText(/AETHERIS/i)).toBeInTheDocument();
    expect(screen.getByText(/STERLING CAP/i)).toBeInTheDocument();
  });
});

