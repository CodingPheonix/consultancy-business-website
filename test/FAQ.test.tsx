import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { FAQ } from '../src/components/sections/FAQ';
import { faqData } from '../src/data/consultancyData';

describe('FAQ Component', () => {
  it('renders all FAQ questions', () => {
    render(<FAQ />);
    faqData.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('first item is expanded by default with correct aria-expanded', () => {
    render(<FAQ />);
    const firstButton = screen.getByRole('button', { name: new RegExp(faqData[0].question, 'i') });
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(faqData[0].answer)).toBeInTheDocument();
  });

  it('toggles question open and closed on click', () => {
    render(<FAQ />);
    const secondButton = screen.getByRole('button', { name: new RegExp(faqData[1].question, 'i') });
    
    // Initially closed
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(faqData[1].answer)).toBeInTheDocument();

    // Click again to close
    fireEvent.click(secondButton);
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders custom configurable FAQs', () => {
    const customFaqs = [
      {
        id: 'faq-cust-1',
        question: 'Do you offer international advisory?',
        answer: 'Yes, we operate across EMEA, North America, and APAC.',
      },
    ];

    render(<FAQ faqs={customFaqs} />);
    expect(screen.getByText('Do you offer international advisory?')).toBeInTheDocument();
  });
});

