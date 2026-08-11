import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteData';

interface NavbarProps {
  onOpenContact: (selectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Abdul, I'm visiting your website and I would like to discuss a project for my business."
  )}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E40AF]/95 backdrop-blur-md shadow-lg border-b border-blue-800 py-3'
          : 'bg-[#1E40AF] backdrop-blur-sm border-b border-blue-700 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-lg bg-white text-[#1E40AF] font-black text-lg flex items-center justify-center shadow-md group-hover:bg-blue-50 transition-colors">
              {siteConfig.brandLogoText}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg leading-tight group-hover:text-blue-200 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-blue-200 text-xs font-medium tracking-wide">
                Tamale, Ghana
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-semibold text-blue-100 hover:text-white hover:bg-blue-700/70 rounded-lg transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-[#128C7E] hover:bg-[#0f766a] border border-emerald-400/30 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              id="header-cta-button"
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1E40AF] text-sm font-bold px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#128C7E] rounded-lg shadow-sm"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white bg-blue-700/80 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E40AF] border-b border-blue-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-semibold text-blue-100 hover:text-white hover:bg-blue-700/80 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-blue-700 flex flex-col gap-2">
            <button
              id="mobile-drawer-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#1E40AF] font-bold py-3 px-4 rounded-xl shadow-md transition-colors"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0f766a] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp ({siteConfig.whatsappDisplayNumber})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
