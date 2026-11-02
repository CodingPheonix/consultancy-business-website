import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { Testimonials } from '../src/components/sections/Testimonials';
import { testimonialsData } from '../src/data/consultancyData';

describe('Testimonials Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders initial active testimonial and author details', () => {
    render(<Testimonials />);
    expect(screen.getByText(new RegExp(testimonialsData[0].name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(testimonialsData[0].company, 'i'))).toBeInTheDocument();
  });

  it('advances to next slide when Next button is clicked', () => {
    render(<Testimonials />);
    const nextBtn = screen.getByLabelText(/Next testimonial/i);
    fireEvent.click(nextBtn);

    expect(screen.getByText(new RegExp(testimonialsData[1].name, 'i'))).toBeInTheDocument();
  });

  it('goes to previous slide when Previous button is clicked', () => {
    render(<Testimonials />);
    const prevBtn = screen.getByLabelText(/Previous testimonial/i);
    fireEvent.click(prevBtn);

    // Wraps around to last item
    const lastItem = testimonialsData[testimonialsData.length - 1];
    expect(screen.getByText(new RegExp(lastItem.name, 'i'))).toBeInTheDocument();
  });

  it('toggles pause and play state', () => {
    render(<Testimonials />);
    const pauseBtn = screen.getByLabelText(/Pause automated carousel rotation/i);
    expect(pauseBtn).toBeInTheDocument();

    fireEvent.click(pauseBtn);
    expect(screen.getByLabelText(/Resume automated carousel rotation/i)).toBeInTheDocument();
  });

  it('automatically advances slide when timer fires', () => {
    render(<Testimonials />);
    expect(screen.getByText(new RegExp(testimonialsData[0].name, 'i'))).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(6100);
    });

    expect(screen.getByText(new RegExp(testimonialsData[1].name, 'i'))).toBeInTheDocument();
  });
});

