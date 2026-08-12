import React from 'react';
import { MessageCircle, Instagram, Facebook, Linkedin, ArrowUp, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Abdul, I'm reaching out from your website footer to discuss a project."
  )}`;

  return (
    <footer className="bg-[#0B0F19] border-t border-slate-800 text-white pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#131C2E] border border-slate-800 flex items-center justify-center p-1 shadow-lg shrink-0">
                {siteConfig.logoUrl ? (
                  <img
                    src={siteConfig.logoUrl}
                    alt={`${siteConfig.name} Logo`}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="font-heading text-white font-black text-lg">
                    {siteConfig.brandLogoText}
                  </span>
                )}
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading">{siteConfig.name}</span>
                <p className="text-xs text-blue-400 font-semibold font-heading">Digital Solutions for Growing Businesses</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Providing practical promotional graphics, short-form video content, and modern mobile-responsive business websites for small businesses in Tamale and across Ghana.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">Connect & Chat</h4>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#131C2E] border border-slate-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-[#131C2E] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                title="Instagram (Configurable)"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-[#131C2E] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                title="Facebook (Configurable)"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-[#131C2E] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all shadow-sm"
                title="LinkedIn (Configurable)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              Social links easily configurable in <code className="text-slate-400">siteData.ts</code>
            </p>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white bg-[#131C2E] hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-heading"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
