import React, { useState } from 'react';
import {
  companyData,
  navMenuItems,
  servicesData,
} from '../../data/consultancyData';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from 'lucide-react';
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  YoutubeIcon,
} from '../common/SocialIcons';
import { Modal } from '../common/Modal';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-16 sm:pt-20 pb-12 border-t border-brand-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-brand-gray-800">
          
          {/* Column 1: Company Logo & Narrative */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-extrabold text-xl shadow-soft-orange">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  VANGUARD
                  <span className="text-brand-orange ml-1 font-semibold text-lg">ADVISORY</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gray-400 mt-1">
                  Global Strategy Group
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-gray-400 leading-relaxed mb-6 font-normal max-w-sm">
              A boutique strategic management advisory partner guiding global enterprises, private equity portfolios, and high-growth scaleups through critical operational pivots.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-brand-gray-900 hover:bg-brand-orange hover:text-white text-brand-gray-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded-lg bg-brand-gray-900 hover:bg-brand-orange hover:text-white text-brand-gray-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-brand-gray-900 hover:bg-brand-orange hover:text-white text-brand-gray-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-lg bg-brand-gray-900 hover:bg-brand-orange hover:text-white text-brand-gray-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navMenuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-brand-gray-400 hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practices & Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Advisory Services
            </h4>
            <ul className="space-y-3 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="text-brand-gray-400 hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Contact Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-brand-gray-400">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                <span>{companyData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-brand-gray-400 hover:text-brand-orange transition-colors"
                >
                  {companyData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a
                  href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-brand-gray-400 hover:text-brand-orange transition-colors"
                >
                  {companyData.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-gray-900 hover:bg-brand-orange hover:text-white text-brand-gray-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy & Data Protection"
      >
        <div className="space-y-4 text-xs sm:text-sm text-brand-gray-600">
          <p>
            Vanguard Advisory is committed to preserving the confidentiality and integrity of all client information. Any business metrics, proprietary datasets, or executive disclosures shared during diagnostic consultations are strictly protected under mutual non-disclosure obligations.
          </p>
          <p>
            We do not sell, rent, or lease corporate data to third parties. All inquiries transmitted through our website are secured via end-to-end transport encryption.
          </p>
        </div>
      </Modal>

      {/* Terms of Engagement Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Strategic Engagement"
      >
        <div className="space-y-4 text-xs sm:text-sm text-brand-gray-600">
          <p>
            All strategic advisory services provided by Vanguard Advisory are governed by explicit Statements of Work (SOW) defining measurable milestones, deliverable schedules, and governance criteria.
          </p>
          <p>
            Our firm maintains strict industry non-compete buffers to ensure our clients enjoy uncompromised strategic focus and bespoke solutions.
          </p>
        </div>
      </Modal>
    </footer>
  );
};
