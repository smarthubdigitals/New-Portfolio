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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-900">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-[#0F172A] text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-blue-600 text-white font-mono font-bold px-2.5 py-1 rounded shadow-xs">
              {item.isConcept ? 'Concept Project' : 'Portfolio Project'}
            </span>
            <span className="text-xs text-slate-300 capitalize bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
              {item.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#F8FAFC]">
          
          {/* Main Visual Display */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            
            {/* 1. Graphic Flyer View */}
            {item.category === 'graphics' && (
              <div className="relative flex justify-center bg-slate-100 p-4 min-h-[300px]">
                <img
                  src={item.flyerImageUrl || item.thumbnailUrl}
                  alt={item.title}
                  className="max-h-[500px] w-auto object-contain rounded-lg shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* 2. Video View */}
            {item.category === 'videos' && (
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center overflow-hidden">
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
                    <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                      <div className="text-center p-6 space-y-3">
                        <div className="w-16 h-16 rounded-full bg-[#2563EB] text-white flex items-center justify-center mx-auto shadow-xl">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                        <p className="text-white font-bold text-sm">Sample Video Preview</p>
                        <p className="text-xs text-slate-300">Short-form TikTok / Instagram Reel layout demo</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. Website View */}
            {item.category === 'websites' && (
              <div className="p-4 bg-slate-100">
                {/* Simulated Browser Frame */}
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-600 truncate max-w-xs font-semibold">
                      {item.title.toLowerCase().replace(/\s+/g, '-')}.tamale.gh
                    </span>
                    <a
                      href={item.websiteDemoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#2563EB] hover:underline flex items-center gap-1 font-bold"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent flex items-end p-6">
                      <div className="space-y-1">
                        <span className="bg-[#2563EB] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded shadow-sm">
                          Live Responsive Mockup
                        </span>
                        <h4 className="text-white font-bold text-lg">{item.clientName}</h4>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm font-bold text-[#2563EB]">
                {item.clientName} • <span className="text-slate-500 font-medium">{item.businessType}</span>
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {item.fullDescription}
            </p>

            {/* Features Created List */}
            {item.featuresCreated && item.featuresCreated.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-xs">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Key Elements Designed:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.featuresCreated.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  className="text-xs bg-white text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0f766a] text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire About This Design on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onRequestService(getServiceForCategory(item.category));
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-colors cursor-pointer shadow-md shadow-blue-100"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
