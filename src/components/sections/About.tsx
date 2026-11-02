import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Target, Eye, Award, Building2 } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';

export const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const differentiators = [
    {
      title: 'Practitioner-Led Teams',
      description: 'Engagements are orchestrated directly by former Fortune 500 executives and strategy heads.',
    },
    {
      title: 'Evidence-Based Frameworks',
      description: 'Every strategic pivot is grounded in rigorous financial modeling and operational telemetry.',
    },
    {
      title: 'Skin in the Game',
      description: 'Performance milestones directly tie our compensation to your verifiable enterprise outcomes.',
    },
    {
      title: 'Autonomous Value Transfer',
      description: 'We upskill your internal teams to guarantee long-term operational autonomy after rollout.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Company / Team Photograph with Floating Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border & drop shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-brand-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Vanguard Executive Advisory Team in Strategic Planning Session"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Image dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-orange text-white text-xs font-bold uppercase tracking-wider mb-2">
                    Established 2008
                  </div>
                  <h4 className="text-lg font-bold text-white">Global Strategy Headquarters</h4>
                  <p className="text-xs text-brand-gray-300 mt-1">
                    San Francisco • New York • London • Singapore
                  </p>
                </div>
              </div>

              {/* Floating Badge on Left Side */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-brand-black text-white p-4 rounded-xl shadow-xl border border-brand-gray-800 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-brand-orange" />
                  <span className="text-xl font-extrabold text-white">18+ Yrs</span>
                </div>
                <p className="text-[11px] text-brand-gray-300 font-medium leading-tight">
                  Unbroken record of executive strategic advisory
                </p>
              </div>

              {/* Floating Badge on Bottom Right */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-xl shadow-2xl border border-brand-gray-200 hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-brand-orange animate-ping" />
                  <span className="text-2xl font-extrabold text-brand-black">$4.2B+</span>
                </div>
                <p className="text-xs font-semibold text-brand-gray-600">
                  Client Enterprise Value Created
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative, Mission & Vision, Differentiators */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <Badge variant="orange" className="mb-4">
              About Vanguard Advisory
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-[1.15] mb-6">
              Architecting Resilient Futures for{' '}
              <span className="text-brand-orange">Visionary Enterprises</span>.
            </h2>

            <p className="text-base sm:text-lg text-brand-gray-600 leading-relaxed mb-8">
              Founded on the belief that traditional consultancy delivers bulky theory instead of
              tangible velocity, Vanguard Advisory pairs deep quantitative analytics with boots-on-the-ground
              executive execution. We don't simply draft recommendations; we co-pilot transformative pivots.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-5 rounded-xl bg-brand-gray-50 border border-brand-gray-200/80 hover:border-brand-orange/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-brand-black mb-1.5">Our Mission</h4>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  To eliminate structural corporate stagnation through quantitative rigor, high-velocity operating models, and ethical governance.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-gray-50 border border-brand-gray-200/80 hover:border-brand-orange/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-brand-black text-brand-orange flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-brand-black mb-1.5">Our Vision</h4>
                <p className="text-xs sm:text-sm text-brand-gray-600 leading-relaxed">
                  To be the global benchmark for boutique management consultancy, recognized for transformative client valuation multiples.
                </p>
              </div>
            </div>

            {/* Key Differentiators Checklist */}
            <div className="w-full space-y-3 mb-8">
              <h4 className="text-sm uppercase font-bold tracking-wider text-brand-gray-400">
                Key Differentiators
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {differentiators.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-brand-black block">
                        {item.title}
                      </span>
                      <span className="text-xs text-brand-gray-500 leading-snug block">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA: Learn More */}
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsModalOpen(true)}
              icon={<ArrowRight className="w-4 h-4 text-brand-orange" />}
            >
              Learn More About Our Heritage
            </Button>

          </div>

        </div>
      </div>

      {/* Learn More Interactive Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="About Vanguard Advisory Heritage"
      >
        <div className="space-y-4">
          <p className="text-sm text-brand-gray-600 leading-relaxed">
            Since our founding in 2008 in San Francisco, Vanguard Advisory has stood apart from conventional management consulting firms by operating as embedded transformation architects.
          </p>
          <div className="bg-brand-gray-50 p-4 rounded-xl border border-brand-gray-200 space-y-2">
            <h4 className="text-sm font-bold text-brand-black flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-orange" />
              Our Core Operational Pillars
            </h4>
            <ul className="text-xs text-brand-gray-600 space-y-1.5 pl-5 list-disc">
              <li><strong>Zero Sub-Contracting:</strong> All client deliverables are produced exclusively by full-time senior partners and domain specialists.</li>
              <li><strong>Algorithmic Scenario Modeling:</strong> We test each strategic recommendation against historical financial cycles before implementation.</li>
              <li><strong>Strict Conflict Policies:</strong> We accept only one major corporate client per vertical per calendar year to prevent strategic compromise.</li>
            </ul>
          </div>
          <p className="text-sm text-brand-gray-600 leading-relaxed">
            Headquartered at 350 Mission Street, San Francisco, our firm advises across North America, EMEA, and APAC with a 92% repeat engagement rate.
          </p>
          <div className="pt-2 flex justify-end">
            <Button size="sm" variant="primary" onClick={() => setIsModalOpen(false)}>
              Close Overview
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
