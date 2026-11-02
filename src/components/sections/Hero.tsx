import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2, Shield, Award, Users, BarChart } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-brand-gray-50/50 to-white"
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Decorative subtle orange glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Badge */}
            <div className="mb-6">
              <Badge variant="orange" dot={true}>
                Your Trusted Business Consulting Partner
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-tight leading-[1.12] mb-6">
              Transforming Business Challenges{' '}
              <span className="text-brand-orange relative inline-block">
                Into Opportunities.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/30 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-lg sm:text-xl text-brand-gray-600 leading-relaxed mb-8 max-w-2xl font-normal">
              We empower industry leaders and scaleups to solve intricate operational bottlenecks,
              accelerate digital modernization, and architect sustainable competitive moats with
              quantified financial outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                size="lg"
                variant="primary"
                onClick={() => handleScrollTo('contact')}
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScrollTo('services')}
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Micro Trust Bullet Points */}
            <div className="pt-6 border-t border-brand-gray-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Zero Templated Decks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>EBITDA Value Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Senior Partners Embedded</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Business Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-gradient-to-br from-brand-black to-brand-black-muted p-1 shadow-2xl">
                
                {/* Main Visual Board */}
                <div className="rounded-xl bg-brand-black-card p-6 sm:p-7 text-white">
                  
                  {/* Visual Header */}
                  <div className="flex items-center justify-between border-b border-brand-gray-800 pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="text-xs font-medium text-brand-gray-400 pl-2">
                        Executive Strategy Intelligence
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-brand-orange bg-brand-orange/15 border border-brand-orange/30 px-2.5 py-0.5 rounded-full">
                      Live Telemetry
                    </span>
                  </div>

                  {/* Primary Performance Metric */}
                  <div className="bg-brand-black rounded-lg p-4 border border-brand-gray-800 mb-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs text-brand-gray-400 font-medium">Enterprise Yield Expansion</span>
                        <div className="text-3xl font-extrabold text-white mt-0.5 tracking-tight flex items-center gap-2">
                          +42.8%
                          <span className="text-xs font-semibold text-brand-orange bg-brand-orange/20 px-2 py-0.5 rounded">
                            Target Exceeded
                          </span>
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Vector Chart Graph */}
                    <div className="h-24 w-full pt-2">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80">
                        <defs>
                          <linearGradient id="orangeGlow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF5E00" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#FF5E00" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M0,70 Q40,55 80,62 T160,35 T240,30 T320,10 L320,80 L0,80 Z"
                          fill="url(#orangeGlow)"
                        />
                        {/* Smooth Line */}
                        <path
                          d="M0,70 Q40,55 80,62 T160,35 T240,30 T320,10"
                          fill="none"
                          stroke="#FF5E00"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        {/* Highlight data point */}
                        <circle cx="320" cy="10" r="5" fill="#FF5E00" />
                        <circle cx="320" cy="10" r="9" fill="#FF5E00" opacity="0.3" className="animate-ping" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] text-brand-gray-500 pt-1 font-mono">
                      <span>Q1 Baseline</span>
                      <span>Q2 Diagnostic</span>
                      <span>Q3 Sprints</span>
                      <span className="text-brand-orange font-bold">Q4 Realized</span>
                    </div>
                  </div>

                  {/* Dual Stat Blocks */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3.5 rounded-lg bg-brand-gray-900/90 border border-brand-gray-800">
                      <span className="text-[11px] text-brand-gray-400 block font-medium">Capital Efficiency</span>
                      <span className="text-xl font-bold text-white mt-1 block">3.4x ROI</span>
                      <span className="text-[10px] text-green-400 flex items-center gap-1 mt-0.5">
                        ↑ 85 bps ahead of plan
                      </span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-brand-gray-900/90 border border-brand-gray-800">
                      <span className="text-[11px] text-brand-gray-400 block font-medium">Risk Mitigation</span>
                      <span className="text-xl font-bold text-white mt-1 block">99.2%</span>
                      <span className="text-[10px] text-brand-orange flex items-center gap-1 mt-0.5">
                        ✓ Regulatory compliant
                      </span>
                    </div>
                  </div>

                  {/* Operational status snippet */}
                  <div className="flex items-center gap-3 p-3 bg-brand-black/90 rounded-lg border border-brand-gray-800 text-xs">
                    <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse flex-shrink-0" />
                    <span className="text-brand-gray-300 font-medium">
                      Phase 2 Execution Sprint active for 14 enterprise clients
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Overlay Badge: Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-xl border border-brand-gray-200 hidden sm:flex items-center gap-3 max-w-xs animate-slide-up">
                <div className="w-10 h-10 rounded-lg bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-black">Top 10 Global Advisory</div>
                  <div className="text-[11px] text-brand-gray-500">Global Strategy Excellence 2026</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Indicators / Social Proof Logos */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-brand-gray-200">
          <p className="text-center text-xs uppercase font-bold tracking-widest text-brand-gray-400 mb-8">
            Trusted by industry pioneers and growth leaders globally
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <Shield className="w-4 h-4 text-brand-orange" />
              <span>AETHERIS</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <BarChart className="w-4 h-4 text-brand-orange" />
              <span>STERLING CAP</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>NOVUS HEALTH</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <Users className="w-4 h-4 text-brand-orange" />
              <span>APEX ROBOTICS</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <TrendingUp className="w-4 h-4 text-brand-orange" />
              <span>NEXUS LOGISTICS</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-brand-black font-extrabold text-sm sm:text-base tracking-tighter">
              <Award className="w-4 h-4 text-brand-orange" />
              <span>VALIANT ENERGY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
