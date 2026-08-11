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
        return <Palette className="w-6 h-6 text-white" />;
      case 'Video':
        return <Video className="w-6 h-6 text-white" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-white" />;
      default:
        return <Palette className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
            Services Offered
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Can Do For Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Three practical digital services designed to help your business attract attention and look professional online.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group relative overflow-hidden"
            >
              {/* Subtle Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB] opacity-90" />

              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-[#0F172A] text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-[#2563EB] transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Card CTA */}
              <button
                onClick={() => onSelectService(service.type)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md shadow-blue-100 transition-all cursor-pointer"
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

        {/* Small Bottom Notice */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-xl p-4 max-w-2xl mx-auto shadow-xs">
          <p className="text-xs text-slate-500">
            Need a custom combination of graphics, video, and website for a new business launch? <button onClick={() => onSelectService('Social Media Graphics & Promotional Flyers')} className="text-[#2563EB] hover:underline font-bold cursor-pointer">Send a custom project request</button>
          </p>
        </div>

      </div>
    </section>
  );
};
