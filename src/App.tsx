import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { ServiceType } from './types';

export default function App() {
  const [selectedServicePrefill, setSelectedServicePrefill] = useState<ServiceType | ''>('');

  const handleOpenContactWithService = (serviceType?: ServiceType) => {
    if (serviceType) {
      setSelectedServicePrefill(serviceType);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContactWithService()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onStartProject={() => handleOpenContactWithService()}
          onViewWork={handleScrollToPortfolio}
        />

        {/* Value Strip */}
        <ValueStrip />

        {/* 3 Services Section */}
        <ServicesSection
          onSelectService={(serviceType) => handleOpenContactWithService(serviceType)}
        />

        {/* Portfolio Section */}
        <PortfolioSection
          onRequestService={(serviceType) => handleOpenContactWithService(serviceType)}
        />

        {/* About Abdul Section */}
        <AboutSection />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* 4-Step Process Section */}
        <ProcessSection />

        {/* Accordion FAQ Section */}
        <FaqSection />

        {/* Working Contact Form Section */}
        <ContactSection
          selectedServicePrefill={selectedServicePrefill}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Quick Action Bar */}
      <StickyMobileCTA onOpenContact={() => handleOpenContactWithService()} />

    </div>
  );
}
