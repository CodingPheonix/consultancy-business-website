import {
  CompanyInfo,
  NavMenuItem,
  StatItem,
  ServiceItem,
  IndustryItem,
  FeatureItem,
  ProcessStep,
  CaseStudyItem,
  TestimonialItem,
  FAQItem,
} from '../types';

export const companyData: CompanyInfo = {
  name: 'Vanguard Advisory',
  tagline: 'Transforming Business Challenges Into Opportunities.',
  email: 'advisory@vanguardconsulting.com',
  phone: '+91 98301 42890',
  whatsapp: '+91 90514 10466',
  whatsappUrl: 'https://wa.me/919051410466?text=Hello%20Vanguard%20Advisory%2C%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services.',
  address: 'Level 14, Platina Tower, MG Road, Sector 28, Gurugram, Haryana 122002, India',
  businessHours: 'Mon – Fri: 9:00 AM – 7:00 PM IST',
  socials: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/919830142890?text=Hello%20Vanguard%20Advisory%2C%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services.',
  },
};

export const navMenuItems: NavMenuItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Our Process', href: '#process' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
];

export const statisticsData: StatItem[] = [
  {
    id: 'exp',
    value: '18+',
    label: 'Years of Experience',
    description: 'Guiding global enterprises and emerging champions across market cycles.',
  },
  {
    id: 'clients',
    value: '500+',
    label: 'Clients Served',
    description: 'From Fortune 500 multinationals to high-growth hyper-scalers.',
  },
  {
    id: 'projects',
    value: '1,250+',
    label: 'Projects Completed',
    description: 'Delivering measurable operational, digital, and financial breakthroughs.',
  },
  {
    id: 'industries',
    value: '25+',
    label: 'Industries Served',
    description: 'Deep specialized domain knowledge tailored to competitive landscapes.',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'biz-consulting',
    name: 'Business Consulting',
    shortDescription:
      'Holistic organizational design, corporate governance, and growth frameworks built for sustained market leadership.',
    fullDescription:
      'We partner with executive leadership to evaluate corporate strategy, restructure underperforming divisions, and establish agile operating models that react swiftly to competitive disruption.',
    iconName: 'Briefcase',
    deliverables: [
      'Comprehensive Organizational Audit',
      'Operating Model Architecture',
      'Change Management Playbooks',
      'Executive Leadership Alignment',
    ],
    keyBenefit: 'Up to 35% improvement in operational agility and decision velocity.',
  },
  {
    id: 'strategic-planning',
    name: 'Strategic Planning',
    shortDescription:
      'Data-driven roadmaps to enter new geographic markets, commercialize innovations, and defend competitive moats.',
    fullDescription:
      'Our strategic advisory synthesizes proprietary market intelligence, macroeconomic indicators, and competitor game theory to create actionable 3-to-5 year strategic blueprints.',
    iconName: 'Compass',
    deliverables: [
      'Market Entry Feasibility Studies',
      'Competitive Moat Analysis',
      'Scenario Planning & Risk Matrices',
      'Quarterly OKR Execution Trackers',
    ],
    keyBenefit: 'Clear capital allocation with quantified risk-adjusted return profiles.',
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    shortDescription:
      'Modernizing legacy architectures, enterprise cloud adoption, and AI workflow integration for next-gen efficiency.',
    fullDescription:
      'We bridge the chasm between legacy infrastructure and modern software systems, infusing AI automation, cloud-native scalability, and unified customer data systems.',
    iconName: 'Cpu',
    deliverables: [
      'Legacy Modernization Blueprint',
      'AI & Enterprise Automation Roadmap',
      'Cloud Architecture Rationalization',
      'Cybersecurity & Compliance Audit',
    ],
    keyBenefit: '60% reduction in technical debt and 4x faster time-to-market.',
  },
  {
    id: 'financial-advisory',
    name: 'Financial Advisory',
    shortDescription:
      'Capital structure optimization, M&A due diligence, liquidity management, and investor readiness evaluations.',
    fullDescription:
      'Rigorous financial engineering tailored to value creation: optimizing working capital, stress-testing valuation models, and managing buy-side or sell-side transactional due diligence.',
    iconName: 'TrendingUp',
    deliverables: [
      'Financial Modeling & Valuations',
      'M&A Transaction Due Diligence',
      'Working Capital Optimization',
      'Cost Rationalization Roadmaps',
    ],
    keyBenefit: 'Identified an average of $14M in EBITDA expansion per client engagement.',
  },
  {
    id: 'tech-consulting',
    name: 'Technology Consulting',
    shortDescription:
      'Enterprise architecture alignment, vendor selection, custom software roadmaps, and data governance engineering.',
    fullDescription:
      'Technology should be an accelerator, not a cost center. We audit enterprise tech stacks, negotiate vendor partnerships, and construct scalable architectural paradigms.',
    iconName: 'Code',
    deliverables: [
      'Enterprise Architecture Assessment',
      'Vendor Selection & RFP Management',
      'Data Lakehouse & Governance Design',
      'DevOps & Delivery Pipeline Optimization',
    ],
    keyBenefit: 'Guaranteed vendor cost reduction by 20–30% with zero vendor lock-in.',
  },
  {
    id: 'operational-excellence',
    name: 'Operational Excellence',
    shortDescription:
      'Lean Six Sigma process re-engineering, supply chain resilience, and quality management systems.',
    fullDescription:
      'We eliminate operational friction by deconstructing bottlenecks, automating redundant workflows, and instilling continuous improvement methodologies throughout your team.',
    iconName: 'Zap',
    deliverables: [
      'Value Stream Mapping',
      'Supply Chain Resilience Auditing',
      'Process Automation Implementation',
      'Quality Management Systems (QMS)',
    ],
    keyBenefit: 'Up to 45% reduction in cycle times and error rates.',
  },
];

export const industriesData: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description:
      'Navigating regulatory compliance (HIPAA/FDA), clinical workflow digitization, and value-based care delivery models.',
    iconName: 'HeartPulse',
    highlightTag: 'Regulatory & Care Delivery',
    impactMetric: '28% clinical efficiency gain',
  },
  {
    id: 'finance',
    name: 'Banking & Financial Services',
    description:
      'Fintech integration, AML/KYC automated pipelines, algorithmic risk management, and open banking protocols.',
    iconName: 'Landmark',
    highlightTag: 'Fintech & Compliance',
    impactMetric: '$450M+ portfolio secured',
  },
  {
    id: 'manufacturing',
    name: 'Advanced Manufacturing',
    description:
      'Smart factory Industry 4.0 IoT deployment, predictive maintenance systems, and multi-tier global supply chains.',
    iconName: 'Factory',
    highlightTag: 'Industry 4.0 & Supply Chain',
    impactMetric: '33% reduction in plant downtime',
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    description:
      'Unified omnichannel commerce, real-time inventory synchronization, dynamic pricing engines, and loyalty programs.',
    iconName: 'ShoppingBag',
    highlightTag: 'Omnichannel & CX',
    impactMetric: '2.4x online conversion uplift',
  },
  {
    id: 'technology',
    name: 'Software & Technology',
    description:
      'SaaS unit economics, product-led growth (PLG) playbooks, developer productivity, and platform ecosystems.',
    iconName: 'Terminal',
    highlightTag: 'SaaS & Hyper-Growth',
    impactMetric: '85% net retention achieved',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    description:
      'Hybrid learning infrastructures, student lifecycle engagement platforms, and institutional strategic planning.',
    iconName: 'GraduationCap',
    highlightTag: 'EdTech & Institutional',
    impactMetric: '40% enrollment scalability',
  },
];

export const whyChooseUsFeatures: FeatureItem[] = [
  {
    id: 'exp-pros',
    title: 'Experienced Professionals',
    description:
      'Our practice leads average 15+ years in tier-one advisory firms and former Fortune 500 C-suite roles.',
    metric: '100%',
    metricLabel: 'Senior practitioner led',
    iconName: 'ShieldCheck',
  },
  {
    id: 'custom-strat',
    title: 'Customized Strategies',
    description:
      'No boilerplate slide decks. Every recommendation is tailored to your unique market positioning, capital constraints, and culture.',
    metric: '0%',
    metricLabel: 'Template solutions',
    iconName: 'Crosshair',
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Decisions',
    description:
      'Quantitative modeling and rigorous empirical analytics validate every strategic inflection before implementation.',
    metric: '99.4%',
    metricLabel: 'KPI target accuracy',
    iconName: 'BarChart3',
  },
  {
    id: 'long-term',
    title: 'Long-Term Partnerships',
    description:
      'We stand shoulder-to-shoulder through implementation, measuring our triumph exclusively through your sustained enterprise valuation.',
    metric: '92%',
    metricLabel: 'Repeat client engagements',
    iconName: 'Handshake',
  },
];

export const workingProcessSteps: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery',
    description:
      'In-depth stakeholder interviews, baseline data collection, competitive benchmarking, and systemic bottleneck diagnosis.',
    activities: ['Stakeholder alignment', 'Historical data auditing', 'Risk & vulnerability scan'],
    duration: 'Weeks 1 – 2',
  },
  {
    stepNumber: '02',
    title: 'Strategy',
    description:
      'Formulating actionable hypotheses, mathematical scenario modeling, and drafting the prioritized implementation roadmap.',
    activities: ['Strategic blueprinting', 'Resource allocation plan', 'Success KPI definitions'],
    duration: 'Weeks 3 – 5',
  },
  {
    stepNumber: '03',
    title: 'Implementation',
    description:
      'Embedding with your execution squads, orchestrating change management, and rolling out modular operational upgrades.',
    activities: ['Agile rollout sprints', 'Executive coaching', 'Real-time telemetry tracking'],
    duration: 'Weeks 6 – 12',
  },
  {
    stepNumber: '04',
    title: 'Results & Optimization',
    description:
      'Continuous performance auditing, fine-tuning operational levers, and establishing autonomous governance protocols.',
    activities: ['Value realization audit', 'Knowledge transfer handover', 'Quarterly review framework'],
    duration: 'Ongoing',
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-1',
    title: 'Global Supply Chain Modernization & Margin Recovery',
    industry: 'Advanced Manufacturing',
    challenge:
      'A Tier-1 industrial manufacturer suffered severe margin erosion of 450 bps due to supply chain disruptions and fragmented ERP systems across 12 countries.',
    solution:
      'Re-engineered inventory buffers with predictive demand modeling, consolidated vendor contracts, and deployed unified IoT telemetry on core production lines.',
    outcome:
      'Restored EBITDA margins within 9 months, reduced plant inventory carrying costs by $38M, and eliminated supply line stockouts.',
    stats: [
      { label: 'EBITDA Margin', value: '+420 bps' },
      { label: 'Inventory Cost', value: '-$38M' },
      { label: 'Lead Time', value: '-35%' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-2',
    title: 'Digital Core Banking Transformation for Regional Lender',
    industry: 'Banking & Financial Services',
    challenge:
      'Legacy mainframes and manual loan origination processes resulted in an 18-day mortgage decision turnaround, driving customer churn to fintech challengers.',
    solution:
      'Designed and executed a cloud-native microservices lending architecture with automated KYC, AI credit scoring, and open API connectivity.',
    outcome:
      'Reduced loan decision latency from 18 days to 4 minutes, boosted digital originations by 140%, and slashed operating compliance overhead by 52%.',
    stats: [
      { label: 'Approval Speed', value: '4 mins' },
      { label: 'Originations', value: '+140%' },
      { label: 'Compliance Cost', value: '-52%' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'case-3',
    title: 'SaaS Enterprise Scale-Up & Go-To-Market Alignment',
    industry: 'Software & Technology',
    challenge:
      'A Series C B2B enterprise software provider plateaued at $25M ARR with high customer acquisition cost (CAC) and rising logo churn.',
    solution:
      'Re-architected enterprise pricing tiers, unified customer success with sales engineering, and instituted an account-based expansion framework.',
    outcome:
      'Accelerated revenue growth to $68M ARR in 18 months while cutting CAC payback from 22 months down to 9 months.',
    stats: [
      { label: 'ARR Expansion', value: '2.7x' },
      { label: 'CAC Payback', value: '-59%' },
      { label: 'Net Retention', value: '128%' },
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    designation: 'Chief Operating Officer',
    company: 'Aetheris Global Logistics',
    feedback:
      'Vanguard Advisory delivered clarity when we were paralyzed by operational complexity. Their team did not just present slides; they embedded in our facilities and restructured our entire fleet logistics engine.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    designation: 'Managing Director & Partner',
    company: 'Sterling Capital Partners',
    feedback:
      'In our 12 years of private equity buyouts, Vanguard has been our definitive due diligence partner. Their analytical precision and commercial instinct uncovered critical value levers that shaped our transaction.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'test-3',
    name: 'Dr. Sophia Chen',
    designation: 'VP of Technology & Strategy',
    company: 'Novus Health Systems',
    feedback:
      'Navigating healthcare digitization while remaining strictly HIPAA compliant felt like an impossible mandate. Vanguard charted an airtight technical roadmap that modernised our patient portal without a second of downtime.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'test-4',
    name: 'David K. O’Connor',
    designation: 'Chief Executive Officer',
    company: 'Apex Robotics Inc.',
    feedback:
      'The difference with Vanguard is that their partners have sat in the executive chair. They understand capital constraints, board dynamics, and the friction of organizational change better than anyone in the industry.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you provide?',
    answer:
      'We provide end-to-end management consulting spanning Business Consulting, Strategic Planning, Digital Transformation, Financial Advisory, Technology Consulting, and Operational Excellence. Each engagement is bespoke, tailored directly to your enterprise stage and growth objectives.',
    category: 'General',
  },
  {
    id: 'faq-2',
    question: 'How does your consulting process work?',
    answer:
      'Our engagements follow a rigorous four-phase methodology: 1) Discovery & diagnostic audit, 2) Strategy & scenario modeling, 3) Hands-on implementation & change enablement, and 4) Results optimization & handover. We measure success by tangible business metrics, not hours billed.',
    category: 'Process',
  },
  {
    id: 'faq-3',
    question: 'Do you work with startups and established businesses?',
    answer:
      'Yes. We work with high-growth venture-backed scaleups (Series B and beyond) preparing for institutional expansion, as well as mid-market enterprises and Fortune 500 corporations executing digital modernization, margin turnarounds, or global M&A integrations.',
    category: 'Clients',
  },
  {
    id: 'faq-4',
    question: 'How much do your services cost?',
    answer:
      'We offer value-driven and milestone-based pricing rather than open-ended time-and-materials. Depending on the engagement scope, models include fixed-price strategic sprints, project-based transformation retainers, and performance-incentivized structures aligned with quantifiable KPIs.',
    category: 'Pricing',
  },
  {
    id: 'faq-5',
    question: 'How can I schedule a consultation?',
    answer:
      'You can submit the consultation enquiry form directly on this website, email us at advisory@vanguardconsulting.com, or call our direct office line. Our Managing Partners review all inquiries within 24 business hours to arrange a confidential diagnostic briefing.',
    category: 'Onboarding',
  },
];

