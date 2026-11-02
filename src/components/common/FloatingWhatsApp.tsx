import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { companyData } from '../../data/consultancyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const [isMessageMounted, setIsMessageMounted] = useState(true);

  useEffect(() => {
    // White message box stays on screen for 1.5 sec, then smoothly fades out
    const fadeTimer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 1500);

    // Completely unmount after fade-out transition completes
    const unmountTimer = setTimeout(() => {
      setIsMessageMounted(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* White message callout box that fades out after 1-1.5 sec of screentime */}
      {isMessageMounted && (
        <div
          className={`hidden md:flex items-center gap-2 mr-3 bg-white text-brand-black px-4 py-2.5 rounded-2xl shadow-2xl border border-brand-gray-200 text-xs font-semibold relative transition-all duration-700 ease-out ${
            isMessageVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-3 scale-95 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="text-brand-gray-700">
            Need strategic guidance?{' '}
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline"
            >
              Chat on WhatsApp
            </a>
          </span>
          {/* Right arrow pointing to the button */}
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-brand-gray-200 rotate-45 pointer-events-none" />
        </div>
      )}

      {/* Main WhatsApp Floating Button: expands to "Chat on WhatsApp" on hover */}
      <a
        href={companyData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vanguard Advisory on WhatsApp"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-all duration-300 ease-out p-3.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 min-h-[52px] min-w-[52px] cursor-pointer"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />

        <WhatsAppIcon className="w-7 h-7 text-white flex-shrink-0" size={28} />

        {/* Expands on hover without text clipping */}
        <span className="hidden sm:inline-flex items-center overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-out">
          <span className="whitespace-nowrap text-xs font-bold pl-2.5 pr-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Chat on WhatsApp
          </span>
        </span>

        {/* Live Online Status Dot */}
        <span
          className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-[#25D366] flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </span>
      </a>
    </aside>
  );
};
