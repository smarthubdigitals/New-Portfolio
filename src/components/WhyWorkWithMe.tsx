import React from 'react';
import { Sparkles, Target, Cpu, UserCheck } from 'lucide-react';
import { whyWorkWithMeData } from '../config/siteData';

export const WhyWorkWithMe: React.FC = () => {
  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#2563EB]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Key Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Work With Me
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Four key principles behind every digital project I deliver for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMeData.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200 p-6 rounded-2xl hover:border-blue-200 hover:bg-blue-50/20 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {getReasonIcon(reason.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
