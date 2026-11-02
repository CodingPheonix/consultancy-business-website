import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CaseStudies } from '../src/components/sections/CaseStudies';
import { caseStudiesData } from '../src/data/consultancyData';

describe('CaseStudies Component', () => {
  it('renders all 3 sample case study cards', () => {
    render(<CaseStudies />);
    caseStudiesData.forEach((study) => {
      expect(screen.getByText(study.title)).toBeInTheDocument();
      expect(screen.getByText(study.industry)).toBeInTheDocument();
      expect(screen.getByText(study.challenge)).toBeInTheDocument();
      expect(screen.getByText(study.solution)).toBeInTheDocument();
      expect(screen.getByText(study.outcome)).toBeInTheDocument();
    });
  });

  it('renders stat metrics for each project', () => {
    render(<CaseStudies />);
    caseStudiesData.forEach((study) => {
      study.stats.forEach((stat) => {
        expect(screen.getAllByText(stat.value).length).toBeGreaterThan(0);
      });
    });
  });
});

