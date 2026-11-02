import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Footer } from '../src/components/sections/Footer';
import { companyData } from '../src/data/consultancyData';

describe('Footer Component', () => {
  it('renders company information and contact details including WhatsApp', () => {
    render(<Footer />);
    expect(screen.getByText('VANGUARD')).toBeInTheDocument();
    expect(screen.getByText(companyData.address)).toBeInTheDocument();
    expect(screen.getByText(companyData.email)).toBeInTheDocument();
    expect(screen.getAllByText((content) => content.includes(companyData.whatsapp)).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByLabelText(/Chat on WhatsApp/i)).toBeInTheDocument();
  });

  it('renders quick navigation links and service links', () => {
    render(<Footer />);
    expect(screen.getByText('Advisory Services')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });

  it('triggers back to top scroll', () => {
    render(<Footer />);
    const topBtn = screen.getByRole('button', { name: /Scroll back to top/i });
    fireEvent.click(topBtn);
    expect(window.scrollTo).toHaveBeenCalled();
  });

  it('opens and closes privacy policy modal', () => {
    render(<Footer />);
    const privacyBtn = screen.getByRole('button', { name: /Privacy Policy/i });
    fireEvent.click(privacyBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy & Data Protection')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText(/Close dialog/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens and closes terms modal', () => {
    render(<Footer />);
    const termsBtn = screen.getByRole('button', { name: /Terms of Engagement/i });
    fireEvent.click(termsBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Terms of Strategic Engagement')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText(/Close dialog/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

