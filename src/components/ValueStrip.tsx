import React from 'react';
import { siteConfig } from '../config/siteData';
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const ValueStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200 py-6 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Main Pillars */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-bold">
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-slate-800 shadow-xs">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Creative</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-slate-800 shadow-xs">
              <Zap className="w-4 h-4 text-cyan-600" />
              <span>Practical</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-slate-800 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Affordable</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-slate-800 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-slate-800" />
              <span>Business-Focused</span>
            </div>
          </div>

          {/* Value Statement */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              {siteConfig.trustStrip.subtext}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
