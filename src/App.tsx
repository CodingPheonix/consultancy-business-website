import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Statistics } from './components/sections/Statistics';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Industries } from './components/sections/Industries';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { CaseStudies } from './components/sections/CaseStudies';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-black selection:bg-brand-orange selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust & Statistics */}
        <Statistics />

        {/* 4. About Us */}
        <About />

        {/* 5. Services Grid */}
        <Services />

        {/* 6. Industries We Serve */}
        <Industries />

        {/* 7. Why Choose Us? */}
        <WhyChooseUs />

        {/* 8. Our Working Process */}
        <Process />

        {/* 9. Case Studies / Projects */}
        <CaseStudies />

        {/* 10. Testimonials Carousel */}
        <Testimonials />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Contact / Lead Generation Form */}
        <Contact />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
};

export default App;

