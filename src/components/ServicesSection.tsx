import React from 'react';
import { Palette, Video, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { servicesData } from '../config/siteData';
import { ServiceType } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceType: ServiceType) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-400 group-hover:text-white" />;
      case 'Video':
        return <Video className="w-6 h-6 text-sky-400 group-hover:text-white" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-400 group-hover:text-white" />;
      default:
        return <Palette className="w-6 h-6 text-blue-400 group-hover:text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0A0E17] text-slate-100 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full inline-block font-heading">
            Services Offered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            What I Can Do For Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Three practical digital services designed to help your business attract attention and look professional online.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-[#131C2E] border border-slate-800 hover:border-blue-500/40 hover:bg-[#1A253B] rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group relative overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-90" />

              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-slate-700/80 flex items-center justify-center mb-6 shadow-md group-hover:bg-blue-600 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-800 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Card CTA */}
              <button
                onClick={() => onSelectService(service.type)}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-lg shadow-blue-950/50 transition-all cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Small Bottom Notice */}
        <div className="mt-12 text-center bg-[#131C2E] border border-slate-800 rounded-xl p-4 max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-400">
            Need a custom combination of graphics, video, and website for a new business launch? <button onClick={() => onSelectService('Social Media Graphics & Promotional Flyers')} className="text-blue-400 hover:underline font-bold cursor-pointer">Send a custom project request</button>
          </p>
        </div>

      </div>
    </section>
  );
};
