import React, { useEffect } from 'react';
import { MapPin, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteData';

export const AboutSection: React.FC = () => {
  useEffect(() => {
    // Clean up any lingering local storage overrides from previous sessions
    localStorage.removeItem('custom_profile_image');
  }, []);

  return (
    <section id="about" className="py-20 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Avatar Profile Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              
              <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col items-center text-center space-y-4">
                
                {/* Profile Image Container */}
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-slate-100 shadow-md bg-slate-100 flex items-center justify-center">
                  <img
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} - ${siteConfig.profession}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/profile.jpg') {
                        target.src = '/profile.jpg';
                      }
                    }}
                  />
                </div>

                {/* Profile Details */}
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">{siteConfig.name}</h3>
                  <p className="text-xs font-bold text-[#2563EB] mt-0.5">
                    {siteConfig.profession}
                  </p>
                </div>

                {/* Location Badge */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{siteConfig.about.locationBadge}</span>
                </div>

                {/* Practical Skill Tags */}
                <div className="w-full pt-3 border-t border-slate-100 space-y-2 text-left">
                  <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Core Practical Skills:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {siteConfig.about.skillsList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
                Getting To Know Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {siteConfig.about.heading}
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                {siteConfig.about.paragraph1}
              </p>
              <p className="p-4 bg-white border-l-4 border-[#2563EB] rounded-r-xl border-y border-r border-slate-200 text-slate-800 text-base font-medium shadow-xs">
                "{siteConfig.about.paragraph2}"
              </p>
            </div>

            {/* Practical Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Honest & Authentic</h4>
                  <p className="text-xs text-slate-500">Clear communication with no false claims or exaggerated statistics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local Context</h4>
                  <p className="text-xs text-slate-500">Understands what appeals to local customers and businesses in Northern Ghana.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
