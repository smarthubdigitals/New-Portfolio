import React, { useState } from 'react';
import { Image, Video, Globe, Eye, Play, ExternalLink, Info } from 'lucide-react';
import { portfolioData } from '../config/siteData';
import { PortfolioCategory, PortfolioItem, ServiceType } from '../types';
import { PortfolioModal } from './PortfolioModal';

interface PortfolioSectionProps {
  onRequestService: (serviceType: ServiceType) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestService }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (cat: 'graphics' | 'videos' | 'websites') => {
    switch (cat) {
      case 'graphics':
        return <Image className="w-3.5 h-3.5 text-blue-600" />;
      case 'videos':
        return <Video className="w-3.5 h-3.5 text-cyan-600" />;
      case 'websites':
        return <Globe className="w-3.5 h-3.5 text-teal-600" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
            Sample Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Portfolio Selection
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Real-world concept projects demonstrating the digital assets I craft for businesses in Tamale.
          </p>
        </div>

        {/* Portfolio Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 bg-slate-100 p-1.5 rounded-xl border border-slate-200 max-w-max mx-auto shadow-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            All Projects ({portfolioData.length})
          </button>

          <button
            onClick={() => setActiveCategory('graphics')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'graphics'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Graphics ({portfolioData.filter(i => i.category === 'graphics').length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('videos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'videos'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Videos ({portfolioData.filter(i => i.category === 'videos').length})</span>
          </button>

          <button
            onClick={() => setActiveCategory('websites')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'websites'
                ? 'bg-[#0F172A] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Websites ({portfolioData.filter(i => i.category === 'websites').length})</span>
          </button>
        </div>

        {/* Concept Notice Banner */}
        <div className="mb-10 bg-blue-50/70 border border-blue-200 rounded-xl p-4 flex items-start gap-3 max-w-4xl mx-auto shadow-xs">
          <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Note on Portfolio Samples:</strong> The projects showcased below are <span className="text-[#2563EB] font-bold">Concept Projects</span> designed for fictional local business scenarios in Tamale & Ghana to illustrate creative standards, layouts, and capabilities.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 hover:border-blue-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Header Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badges Top Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#0F172A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-md">
                      {getCategoryIcon(item.category)}
                      <span className="capitalize">{item.category}</span>
                    </span>

                    {item.isConcept && (
                      <span className="bg-[#2563EB] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm">
                        Concept Project
                      </span>
                    )}
                  </div>

                  {/* Center Overlay Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/30 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                      title="View Project Details"
                    >
                      {item.category === 'videos' ? (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-xs font-bold text-[#2563EB]">
                      {item.businessType}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-blue-50 text-[#2563EB] border border-slate-200 hover:border-blue-200 text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  {item.category === 'websites' ? (
                    <>
                      <span>View Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>View Project Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onRequestService={onRequestService}
      />
    </section>
  );
};
