import React from 'react';
import { siteConfig } from '../config/siteData';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  return (
    <section className="bg-[#0F172A] border-y border-slate-800/80 py-6 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Main Pillars */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-bold font-heading">
            <div className="flex items-center gap-2 bg-[#131C2E] px-4 py-2 rounded-xl border border-slate-800 text-slate-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Creative</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-[#131C2E] px-4 py-2 rounded-xl border border-slate-800 text-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>Practical</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-[#131C2E] px-4 py-2 rounded-xl border border-slate-800 text-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Affordable</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-[#131C2E] px-4 py-2 rounded-xl border border-slate-800 text-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Business-Focused</span>
            </div>
          </div>

          {/* Value Statement */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              {siteConfig.trustStrip.subtext}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
