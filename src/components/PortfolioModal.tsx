import React, { useState } from 'react';
import { X, ExternalLink, Play, Pause, Volume2, VolumeX, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PortfolioItem, ServiceType } from '../types';
import { siteConfig } from '../config/siteData';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestService: (serviceType: ServiceType) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onRequestService,
}) => {
  if (!item) return null;

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const getServiceForCategory = (cat: 'graphics' | 'videos' | 'websites'): ServiceType => {
    switch (cat) {
      case 'graphics':
        return 'Social Media Graphics & Promotional Flyers';
      case 'videos':
        return 'Short-Form Video & AI Content';
      case 'websites':
        return 'Business Website Design';
    }
  };

  const whatsappMessage = `Hi Abdul, I saw your "${item.title}" concept project on your portfolio and I would like to discuss a similar project for my business.`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#131C2E] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-100">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F19] text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-blue-600 text-white font-mono font-bold px-2.5 py-1 rounded shadow-xs">
              {item.isConcept ? 'Concept Project' : 'Portfolio Project'}
            </span>
            <span className="text-xs text-slate-300 capitalize bg-[#1E293B] px-2.5 py-1 rounded border border-slate-700">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-[#1E293B] hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#0A0E17]">
          
          {/* Main Visual Display */}
          <div className="bg-[#131C2E] border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            
            {/* 1. Graphic Flyer View */}
            {item.category === 'graphics' && (
              <div className="relative flex justify-center bg-slate-950 p-4 min-h-[300px]">
                <img
                  src={item.flyerImageUrl || item.thumbnailUrl}
                  alt={item.title}
                  className="max-h-[500px] w-auto object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* 2. Video View */}
            {item.category === 'videos' && (
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                {item.videoUrl ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      loop
                      muted={isMuted}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-70"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                      <div className="text-center p-6 space-y-3">
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-2xl">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                        <p className="text-white font-bold text-sm font-heading">Sample Video Preview</p>
                        <p className="text-xs text-slate-300">Short-form TikTok / Instagram Reel layout demo</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. Website View */}
            {item.category === 'websites' && (
              <div className="p-4 bg-slate-950">
                {/* Simulated Browser Frame */}
                <div className="bg-[#131C2E] border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#1E293B] px-4 py-2 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 truncate max-w-xs font-semibold">
                      {item.title.toLowerCase().replace(/\s+/g, '-')}.tamale.gh
                    </span>
                    <a
                      href={item.websiteDemoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>Open Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
                      <div className="space-y-1">
                        <span className="bg-blue-600 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm">
                          Live Responsive Mockup
                        </span>
                        <h4 className="text-white font-bold text-lg font-heading">{item.clientName}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 font-heading">{item.title}</h3>
              <p className="text-sm font-bold text-blue-400 font-heading">
                {item.clientName} • <span className="text-slate-400 font-medium">{item.businessType}</span>
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {item.fullDescription}
            </p>

            {/* Features Created List */}
            {item.featuresCreated && item.featuresCreated.length > 0 && (
              <div className="bg-[#131C2E] border border-slate-800 rounded-xl p-4 space-y-2 shadow-sm">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
                  Key Elements Designed:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.featuresCreated.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#1E293B] text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-[#131C2E] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire About This Design on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestService(getServiceForCategory(item.category));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-blue-950/50"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
