import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { navMenuItems, companyData } from '../../data/consultancyData';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section highlight
      const sections = ['home', 'about', 'services', 'industries', 'process', 'cases', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm border-b border-brand-gray-200/80 py-3.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-brand-gray-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Company Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg p-1"
            aria-label={`${companyData.name} - Back to Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-black flex items-center justify-center text-brand-orange shadow-md transition-transform duration-200 group-hover:scale-105">
              <span className="font-extrabold text-xl tracking-tighter text-white">V</span>
              <span className="w-2 h-2 rounded-full bg-brand-orange ml-0.5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-black leading-none group-hover:text-brand-orange transition-colors">
                {companyData.name.split(' ')[0]}
                <span className="text-brand-orange ml-1 font-semibold text-lg">
                  {companyData.name.split(' ')[1] || 'ADVISORY'}
                </span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gray-400 mt-1">
                Strategic Excellence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navMenuItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-brand-orange font-semibold'
                      : 'text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-block"
            >
              <Button size="sm" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Book Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-brand-black hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-brand-gray-200 shadow-xl transition-all duration-300 animate-slide-up px-4 pt-3 pb-6 max-h-[calc(100vh-65px)] overflow-y-auto"
          id="mobile-menu"
        >
          <nav className="flex flex-col space-y-1">
            {navMenuItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between min-h-[44px] ${
                    isActive
                      ? 'bg-brand-orange-light text-brand-orange font-semibold'
                      : 'text-brand-gray-700 hover:bg-brand-gray-50 hover:text-brand-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-orange" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-brand-gray-100 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full"
            >
              <Button fullWidth size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Book a Consultation
              </Button>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-brand-gray-500 py-1">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Confidential & Certified Strategic Advisory</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
