import React from 'react';
import { Sparkles, Target, Cpu, UserCheck } from 'lucide-react';
import { whyWorkWithMeData } from '../config/siteData';

export const WhyWorkWithMe: React.FC = () => {
  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-16 bg-[#0F172A] border-b border-slate-800/80 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3 font-heading">
            Key Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Why Work With Me
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Four key principles behind every digital project I deliver for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMeData.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[#131C2E] border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 hover:bg-[#1A253B] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-slate-700/80 shadow-sm flex items-center justify-center mb-4">
                  {getReasonIcon(reason.iconName)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-heading">{reason.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
