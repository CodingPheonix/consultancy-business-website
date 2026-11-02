import { describe, it, expect } from 'vitest';
import {
  companyData,
  navMenuItems,
  statisticsData,
  servicesData,
  industriesData,
  whyChooseUsFeatures,
  workingProcessSteps,
  caseStudiesData,
  testimonialsData,
  faqData,
} from '../src/data/consultancyData';

describe('Consultancy Data Configuration Integrity', () => {
  it('validates company contact data', () => {
    expect(companyData.name).toBeTruthy();
    expect(companyData.email).toContain('@');
    expect(companyData.phone).toBeTruthy();
    expect(companyData.address).toBeTruthy();
  });

  it('validates navigation items structure', () => {
    expect(navMenuItems.length).toBeGreaterThanOrEqual(6);
    navMenuItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href.startsWith('#')).toBe(true);
    });
  });

  it('validates statistics items structure', () => {
    expect(statisticsData.length).toBe(4);
    statisticsData.forEach((stat) => {
      expect(stat.id).toBeTruthy();
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });

  it('validates services items have required deliverables and benefits', () => {
    expect(servicesData.length).toBeGreaterThanOrEqual(6);
    servicesData.forEach((svc) => {
      expect(svc.id).toBeTruthy();
      expect(svc.name).toBeTruthy();
      expect(svc.shortDescription).toBeTruthy();
      expect(svc.deliverables.length).toBeGreaterThan(0);
      expect(svc.keyBenefit).toBeTruthy();
    });
  });

  it('validates industry items have names and impact metrics', () => {
    expect(industriesData.length).toBe(6);
    industriesData.forEach((ind) => {
      expect(ind.id).toBeTruthy();
      expect(ind.name).toBeTruthy();
      expect(ind.impactMetric).toBeTruthy();
    });
  });

  it('validates 4-step working process sequencing', () => {
    expect(workingProcessSteps.length).toBe(4);
    expect(workingProcessSteps[0].title).toBe('Discovery');
    expect(workingProcessSteps[1].title).toBe('Strategy');
    expect(workingProcessSteps[2].title).toBe('Implementation');
    expect(workingProcessSteps[3].title).toBe('Results & Optimization');
  });

  it('validates case study items have challenge, solution, outcome, and stats', () => {
    expect(caseStudiesData.length).toBe(3);
    caseStudiesData.forEach((cs) => {
      expect(cs.challenge).toBeTruthy();
      expect(cs.solution).toBeTruthy();
      expect(cs.outcome).toBeTruthy();
      expect(cs.stats.length).toBe(3);
    });
  });

  it('validates testimonials demo items', () => {
    expect(testimonialsData.length).toBeGreaterThanOrEqual(3);
    testimonialsData.forEach((t) => {
      expect(t.name).toBeTruthy();
      expect(t.company).toBeTruthy();
      expect(t.feedback).toBeTruthy();
      expect(t.rating).toBe(5);
    });
  });

  it('validates FAQ items question and answer content', () => {
    expect(faqData.length).toBeGreaterThanOrEqual(5);
    faqData.forEach((faq) => {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    });
  });
});

