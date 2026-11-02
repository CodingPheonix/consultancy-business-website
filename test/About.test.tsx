import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { About } from '../src/components/sections/About';

describe('About Component', () => {
  it('renders section heading and company introduction', () => {
    render(<About />);
    expect(screen.getByText(/About Vanguard Advisory/i)).toBeInTheDocument();
    expect(screen.getByText(/Architecting Resilient Futures/i)).toBeInTheDocument();
  });

  it('renders mission and vision blocks', () => {
    render(<About />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
  });

  it('renders key differentiators', () => {
    render(<About />);
    expect(screen.getByText('Practitioner-Led Teams')).toBeInTheDocument();
    expect(screen.getByText('Evidence-Based Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Skin in the Game')).toBeInTheDocument();
  });

  it('opens and closes the Learn More modal dialog', () => {
    render(<About />);
    const learnMoreBtn = screen.getByRole('button', { name: /Learn More About Our Heritage/i });
    expect(learnMoreBtn).toBeInTheDocument();

    // Modal should initially not be visible
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Click to open modal
    fireEvent.click(learnMoreBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('About Vanguard Advisory Heritage')).toBeInTheDocument();

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /Close Overview/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

