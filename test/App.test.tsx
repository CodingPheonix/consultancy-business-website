import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

describe('App SPA Integration', () => {
  it('renders all 13 core sections without errors', () => {
    render(<App />);

    // 1. Navbar
    expect(screen.getByRole('navigation', { name: /Main Navigation/i })).toBeInTheDocument();

    // 2. Hero
    expect(screen.getByText(/Your Trusted Business Consulting Partner/i)).toBeInTheDocument();

    // 3. Statistics
    expect(screen.getByRole('region', { name: /Key Performance Statistics/i })).toBeInTheDocument();

    // 4. About Us
    expect(screen.getByText(/About Vanguard Advisory/i)).toBeInTheDocument();

    // 5. Services
    expect(screen.getByText('Practice Areas')).toBeInTheDocument();

    // 6. Industries
    expect(screen.getByText('Sector Specialization')).toBeInTheDocument();

    // 7. Why Choose Us
    expect(screen.getByText(/Competitive Advantage/i)).toBeInTheDocument();

    // 8. Process
    expect(screen.getByText('Methodology')).toBeInTheDocument();

    // 9. Case Studies
    expect(screen.getByText('Verified Case Studies')).toBeInTheDocument();

    // 10. Testimonials
    expect(screen.getByRole('region', { name: /Client Testimonials/i })).toBeInTheDocument();

    // 11. FAQ
    expect(screen.getByText('Advisory FAQ')).toBeInTheDocument();

    // 12. Contact
    expect(screen.getByText(/Request a Diagnostic Briefing/i)).toBeInTheDocument();

    // 13. Footer
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
