import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Services } from '../src/components/sections/Services';
import { servicesData } from '../src/data/consultancyData';

describe('Services Component', () => {
  it('renders all configured service cards', () => {
    render(<Services />);
    servicesData.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument();
    });
  });

  it('renders custom configurable service items', () => {
    const customServices = [
      {
        id: 'cust-svc-1',
        name: 'AI Strategy & Governance',
        shortDescription: 'Enterprise LLM roadmap and model risk governance.',
        fullDescription: 'Comprehensive generative AI readiness and infrastructure.',
        iconName: 'Cpu',
        deliverables: ['Model Risk Policy', 'Compute Assessment'],
        keyBenefit: '50% faster prototype-to-production.',
      },
    ];

    render(<Services services={customServices} />);
    expect(screen.getByText('AI Strategy & Governance')).toBeInTheDocument();
  });

  it('opens modal with deliverables and key benefit when Learn More is clicked', () => {
    render(<Services />);
    const learnMoreButtons = screen.getAllByRole('button', { name: /Learn more about/i });
    expect(learnMoreButtons.length).toBeGreaterThan(0);

    // Click first service Learn More
    fireEvent.click(learnMoreButtons[0]);

    // Dialog should appear
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Key Strategic Deliverables')).toBeInTheDocument();
    expect(screen.getByText('Measured Impact')).toBeInTheDocument();

    // Close button
    const closeBtn = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('clicking Inquire in modal scrolls to contact section', () => {
    render(<Services />);
    const learnMoreButtons = screen.getAllByRole('button', { name: /Learn more about/i });
    fireEvent.click(learnMoreButtons[0]);

    const inquireBtn = screen.getByRole('button', { name: /Inquire About This Service/i });
    fireEvent.click(inquireBtn);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});

