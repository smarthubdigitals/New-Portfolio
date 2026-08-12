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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0A0E17] text-slate-100 border-b border-slate-800/80 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Availability Indicator Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span>{siteConfig.hero.availabilityText}</span>
              <span className="text-emerald-600">•</span>
              <span className="text-emerald-300 font-bold">Tamale, Ghana</span>
            </div>

            {/* Headline with Space Grotesk font */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Helping Local Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Look Better</span> & Grow Online.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I'm <strong className="text-white font-bold">{siteConfig.name}</strong>, a digital skills specialist in Tamale, Ghana. I create promotional graphics, engaging short-form content, and professional websites that help small businesses build a stronger digital presence.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                id="hero-primary-cta"
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onViewWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700/80 bg-[#131C2E] hover:bg-slate-800 text-slate-200 font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-bold text-sm px-5 py-3.5 rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>

            {/* Small Quick Highlights */}
            <div className="pt-4 border-t border-slate-800/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Graphics</p>
                <p className="text-sm font-bold text-slate-200 font-heading">Flyers & Promos</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Video & AI</p>
                <p className="text-sm font-bold text-slate-200 font-heading">Reels & Short Clips</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">Websites</p>
                <p className="text-sm font-bold text-slate-200 font-heading">Mobile-First Web</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Interactive Visual Showcase Card */}
              <div className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden text-slate-100">
                
                {/* Header Pills / Selector */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">Sample Work Showcase</span>
                  </div>
                  <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    Concept Project
                  </span>
                </div>

                {/* Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-[#0B0F19] p-1 rounded-xl mb-4 text-xs font-semibold border border-slate-800">
                  <button
                    onClick={() => setActiveHeroTab('flyer')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'flyer'
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Image className="w-3.5 h-3.5" />
                    <span>Flyer</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('reel')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'reel'
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Reel</span>
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('website')}
                    className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all cursor-pointer ${
                      activeHeroTab === 'website'
                        ? 'bg-blue-600 text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layout className="w-3.5 h-3.5" />
                    <span>Website</span>
                  </button>
                </div>

                {/* Display Body based on Active Tab */}
                {activeHeroTab === 'flyer' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 group">
                      <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                        alt="Savannah Bites Promotional Flyer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                        <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded w-max mb-1 uppercase tracking-wide">
                          Special Weekend Deal
                        </span>
                        <p className="text-white font-bold text-base font-heading">Savannah Bites Restaurant</p>
                        <p className="text-slate-300 text-xs">Jollof & Guinea Fowl Package • GHS 45</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-[#0B0F19] p-2.5 rounded-lg border border-slate-800">
                      <span>WhatsApp Order Button</span>
                      <span className="text-emerald-400 font-bold">Ready to print & share</span>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'reel' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 group flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                        alt="Northern Pride Salon Reel"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 bg-[#0B0F19]/95 border border-slate-800 p-2.5 rounded-lg shadow-md">
                        <p className="text-white font-bold text-xs font-heading">Northern Pride Beauty Glam Reel</p>
                        <p className="text-blue-400 text-[11px] font-mono font-bold">15s TikTok & Instagram Reel</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-[#0B0F19] p-2.5 rounded-lg border border-slate-800">
                      <span>Beat Sync & Motion Captions</span>
                      <span className="text-blue-400 font-bold">AI Voiceover</span>
                    </div>
                  </div>
                )}

                {activeHeroTab === 'website' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0B0F19] border border-slate-800 p-2">
                      <div className="bg-[#131C2E] rounded-lg h-full border border-slate-800 overflow-hidden flex flex-col shadow-sm">
                        <div className="bg-[#0B0F19] px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-800">
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500" />
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-[10px] text-slate-400 font-mono ml-2">mole-haven-lodge.com</span>
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between bg-[#131C2E]">
                          <div>
                            <div className="h-3 w-28 bg-blue-500 rounded mb-2" />
                            <div className="h-2 w-full bg-slate-800 rounded mb-1" />
                            <div className="h-2 w-3/4 bg-slate-800 rounded mb-3" />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-10 bg-[#0B0F19] rounded border border-slate-800 p-1 text-[9px] text-slate-400 font-medium">
                              Room Rates in GHS
                            </div>
                            <div className="h-10 bg-emerald-950/80 border border-emerald-500/30 rounded p-1 text-[9px] text-emerald-300 flex items-center justify-center font-bold">
                              WhatsApp Booking
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-[#0B0F19] p-2.5 rounded-lg border border-slate-800">
                      <span>Mobile Responsive</span>
                      <span className="text-emerald-400 font-bold">Fast & Lightweight</span>
                    </div>
                  </div>
                )}

                {/* Footer Note */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Created for local businesses in Ghana</span>
                  <button
                    onClick={onViewWork}
                    className="text-blue-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
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
