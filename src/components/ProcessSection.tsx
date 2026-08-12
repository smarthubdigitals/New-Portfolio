import React from 'react';
import { processStepsData } from '../config/siteData';
import { MessageSquare, Compass, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0A0E17] text-slate-100 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full inline-block font-heading">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            How It Works
          </h2>
          <p className="text-base text-slate-400">
            A straightforward 4-step process from initial idea to completed digital asset.
          </p>
        </div>

        {/* 4 Steps Horizontal / Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processStepsData.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="bg-[#131C2E] border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#1A253B] transition-all shadow-xl group"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-black font-heading text-blue-400">
                  {step.stepNumber}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-slate-700/80 flex items-center justify-center shadow-sm">
                  {getStepIcon(step.iconName)}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-2 font-heading">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting arrow indicator for desktop */}
              {idx < processStepsData.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
