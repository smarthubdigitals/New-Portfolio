import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteData';

interface StickyMobileCTAProps {
  onOpenContact: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenContact }) => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Abdul, I want to inquire about your digital services for my business."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0B0F19]/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-3 rounded-xl transition-colors shadow-lg font-heading"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

        <button
          onClick={onOpenContact}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs py-3 px-3 rounded-xl transition-colors shadow-lg cursor-pointer font-heading"
        >
          <span>Start Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
