import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Navbar } from '../src/components/sections/Navbar';
import { navMenuItems } from '../src/data/consultancyData';

describe('Navbar Component', () => {
  it('renders company logo and branding text', () => {
    render(<Navbar />);
    expect(screen.getByText('Vanguard')).toBeInTheDocument();
    expect(screen.getByText('Advisory')).toBeInTheDocument();
  });

  it('renders all configured navigation menu items', () => {
    render(<Navbar />);
    navMenuItems.forEach((item) => {
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('renders Book Consultation CTA button', () => {
    render(<Navbar />);
    const buttons = screen.getAllByRole('button', { name: /Book Consultation/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText(/Open navigation menu/i);
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(toggleButton);
    expect(screen.getByLabelText(/Close navigation menu/i)).toBeInTheDocument();

    // Click again to close
    fireEvent.click(screen.getByLabelText(/Close navigation menu/i));
    expect(screen.getByLabelText(/Open navigation menu/i)).toBeInTheDocument();
  });

  it('handles navigation link click with smooth scrolling', () => {
    render(<Navbar />);
    const homeLink = screen.getAllByText('Home')[0];
    fireEvent.click(homeLink);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
