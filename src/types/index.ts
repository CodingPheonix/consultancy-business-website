export interface NavMenuItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  keyBenefit: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  highlightTag: string;
  impactMetric: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  activities: string[];
  duration: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  designation: string;
  company: string;
  feedback: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  service: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  socials: {
    linkedin: string;
    twitter: string;
    github: string;
    youtube: string;
  };
}

