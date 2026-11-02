import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { Contact } from '../src/components/sections/Contact';

describe('Contact Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders contact details and all required form fields', () => {
    render(<Contact />);
    expect(screen.getByText(/advisory@vanguardconsulting.com/i)).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp Fast Advisory/i)).toBeInTheDocument();
    expect(screen.getByText(/Start WhatsApp Chat/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Business Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service Interested In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message \/ Strategic Objective/i)).toBeInTheDocument();
  });

  it('validates required fields on empty submit', () => {
    render(<Contact />);
    const submitBtn = screen.getByRole('button', { name: /Submit Consultation Enquiry/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Full Name is required.')).toBeInTheDocument();
    expect(screen.getByText('Business Email is required.')).toBeInTheDocument();
    expect(screen.getByText('Company / Enterprise name is required.')).toBeInTheDocument();
    expect(screen.getByText('Phone Number is required.')).toBeInTheDocument();
  });

  it('validates invalid email format', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/Business Email/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Consultation Enquiry/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Please provide a valid corporate email address/i)).toBeInTheDocument();
  });

  it('validates short message boundary', () => {
    render(<Contact />);
    const messageInput = screen.getByLabelText(/Message \/ Strategic Objective/i);
    fireEvent.change(messageInput, { target: { value: 'Short' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Consultation Enquiry/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Message must be at least 15 characters/i)).toBeInTheDocument();
  });

  it('successfully submits valid form data and presents confirmation status', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Sarah Jenkins' } });
    fireEvent.change(screen.getByLabelText(/Business Email/i), { target: { value: 'sarah@apex.com' } });
    fireEvent.change(screen.getByLabelText(/Company Name/i), { target: { value: 'Apex Global' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+1 (555) 902-1234' } });
    fireEvent.change(screen.getByLabelText(/Message \/ Strategic Objective/i), {
      target: { value: 'We are seeking guidance on enterprise digital modernization and cloud architecture.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Submit Consultation Enquiry/i });
    fireEvent.click(submitBtn);

    // Should indicate loading state
    expect(screen.getByText(/Transmitting Secure Request.../i)).toBeInTheDocument();

    // Fast-forward simulated network delay
    act(() => {
      vi.advanceTimersByTime(1300);
    });

    // Should show confirmation
    expect(screen.getByText('Briefing Request Received')).toBeInTheDocument();
  });
});

