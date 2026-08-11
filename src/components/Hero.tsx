import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, Play, Eye, Smartphone, Layout, Image } from 'lucide-react';
import { siteConfig } from '../config/siteData';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
  onSelectPortfolioItem?: (itemId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'flyer' | 'reel' | 'website'>('flyer');

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Abdul, I saw your portfolio and I would like to inquire about a project for my business."
  )}`;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-100/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Availability Indicator Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>{siteConfig.hero.availabilityText}</span>
              <span className="text-emerald-300">•</span>
              <span className="text-emerald-800 font-bold">Tamale, Ghana</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Helping Local Businesses <span className="text-[#2563EB]">Look Better</span> & Grow Online.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I'm <strong className="text-slate-900 font-bold">{siteConfig.name}</strong>, a digital skills specialist in Tamale, Ghana. I create promotional graphics, engaging short-form content, and professional websites that help small businesses build a stronger digital presence.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all cursor-pointer"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-[#2563EB]" />
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#128C7E] hover:bg-[#0f766a] text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>

            {/* Small Quick Highlights */}
            <div className="pt-4 border-t border-slate-200 w-full grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Graphics</p>
                <p className="text-sm font-bold text-slate-900">Flyers & Promos</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Video & AI</p>
                <p className="text-sm font-bold text-slate-900">Reels & Short Clips</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Websites</p>
                <p className="text-sm font-bold text-slate-900">Mobile-First Web</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Interactive Visual Showcase Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl relative overflow-hidden text-slate-900">
                
                {/* Header Pills / Selector */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Sample Work Showcase</span>
                  </div>
                  <span className="text-[10px] bg-[#0F172A] text-white px-2 py-0.5 rounded font-mono font-bold uppercase">
                    Concept Project
                  </span>
                </div>

                {/* Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-4 text-xs font-semibold">
                  <button
                    onClick={() => setActiveHeroTab('flyer')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'flyer'
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Image className="w-3.5 h-3.5" />
                    <span>Flyer</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('reel')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'reel'
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Reel</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('website')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'website'
                        ? 'bg-[#0F172A] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Layout className="w-3.5 h-3.5" />
                    <span>Website</span>
                  </button>
                </div>

                {/* Display Body based on Active Tab */}
                {activeHeroTab === 'flyer' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group">
                      <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                        alt="Savannah Bites Promotional Flyer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent flex flex-col justify-end p-4">
                        <span className="bg-amber-400 text-slate-900 font-black text-[10px] px-2 py-0.5 rounded w-max mb-1 uppercase tracking-wide">
                          Special Weekend Deal
                        </span>
                        <p className="text-white font-bold text-base">Savannah Bites Restaurant</p>
                        <p className="text-slate-200 text-xs">Jollof & Guinea Fowl Package • GHS 45</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span>WhatsApp Order Button</span>
                      <span className="text-emerald-700 font-bold">Ready to print & share</span>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'reel' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200 group flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                        alt="Northern Pride Salon Reel"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 bg-white/95 border border-slate-200 p-2.5 rounded-lg shadow-md">
                        <p className="text-slate-900 font-bold text-xs">Northern Pride Beauty Glam Reel</p>
                        <p className="text-[#2563EB] text-[11px] font-mono font-bold">15s TikTok & Instagram Reel</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span>Beat Sync & Motion Captions</span>
                      <span className="text-blue-700 font-bold">AI Voiceover</span>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'website' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-50 border border-slate-200 p-2">
                      <div className="bg-white rounded-lg h-full border border-slate-200 overflow-hidden flex flex-col shadow-sm">
                        <div className="bg-slate-100 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-200">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400" />
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-[10px] text-slate-500 font-mono ml-2">mole-haven-lodge.com</span>
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between bg-white">
                          <div>
                            <div className="h-3 w-28 bg-[#2563EB] rounded mb-2" />
                            <div className="h-2 w-full bg-slate-200 rounded mb-1" />
                            <div className="h-2 w-3/4 bg-slate-200 rounded mb-3" />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-10 bg-slate-50 rounded border border-slate-200 p-1 text-[9px] text-slate-600 font-medium">
                              Room Rates in GHS
                            </div>
                            <div className="h-10 bg-emerald-50 border border-emerald-200 rounded p-1 text-[9px] text-emerald-800 flex items-center justify-center font-bold">
                              WhatsApp Booking
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span>Mobile Responsive</span>
                      <span className="text-emerald-700 font-bold">Fast & Lightweight</span>
                    </div>
                  </div>
                )}

                {/* Footer Note */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Created for local businesses in Ghana</span>
                  <button
                    onClick={onViewWork}
                    className="text-[#2563EB] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Browse All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
