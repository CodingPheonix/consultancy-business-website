import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Process } from '../src/components/sections/Process';
import { workingProcessSteps } from '../src/data/consultancyData';

describe('Process Component', () => {
  it('renders all 4 stages of the working process', () => {
    render(<Process />);
    workingProcessSteps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.stepNumber)).toBeInTheDocument();
      expect(screen.getByText(step.duration)).toBeInTheDocument();
    });
  });

  it('renders core milestones for each stage', () => {
    render(<Process />);
    expect(screen.getByText('Stakeholder alignment')).toBeInTheDocument();
    expect(screen.getByText('Strategic blueprinting')).toBeInTheDocument();
    expect(screen.getByText('Agile rollout sprints')).toBeInTheDocument();
  });
});

