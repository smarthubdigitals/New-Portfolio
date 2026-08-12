import React, { useState } from 'react';
import { faqData, siteConfig } from '../config/siteData';
import { FaqItem } from '../types';
import {
  ChevronDown,
  HelpCircle,
  Clock,
  CreditCard,
  Truck,
  MessageSquare,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const FaqSection: React.FC = () => {
  // Active accordion item IDs (support multiple open or single open)
  const [openIds, setOpenIds] = useState<string[]>(['faq-timeline-flyers', 'faq-pricing-rates']);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  // Filter logic
  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.categoryLabel.toLowerCase().includes(query) ||
      (faq.highlightText && faq.highlightText.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'timelines':
        return <Clock className="w-4 h-4 text-blue-400" />;
      case 'pricing':
        return <CreditCard className="w-4 h-4 text-emerald-400" />;
      case 'delivery':
        return <Truck className="w-4 h-4 text-purple-400" />;
      case 'general':
      default:
        return <HelpCircle className="w-4 h-4 text-sky-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Questions', count: faqData.length },
    {
      id: 'timelines',
      label: 'Timelines & Deadlines',
      count: faqData.filter((f) => f.category === 'timelines').length,
    },
    {
      id: 'pricing',
      label: 'Pricing & Payments',
      count: faqData.filter((f) => f.category === 'pricing').length,
    },
    {
      id: 'delivery',
      label: 'Delivery & Process',
      count: faqData.filter((f) => f.category === 'delivery').length,
    },
    {
      id: 'general',
      label: 'Getting Started',
      count: faqData.filter((f) => f.category === 'general').length,
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 bg-[#0F172A] text-slate-100 relative border-b border-slate-800/80 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 font-heading">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Clear Answers About Timelines, Pricing & Delivery
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Everything you need to know about working with Abdul Waheed on your graphics, videos, or website project.
          </p>
        </div>

        {/* Filter Controls: Search Bar & Category Tabs */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. turnaround, deposit, MoMo, revisions)..."
              className="w-full bg-[#1E293B] border border-slate-700/80 rounded-2xl pl-12 pr-10 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-2.5 py-1 rounded-full transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold font-heading transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                      : 'bg-[#1E293B] text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-blue-700 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expand / Collapse All Quick Toggle */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-2">
            <span>
              Showing <strong className="text-white">{filteredFaqs.length}</strong> question{filteredFaqs.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={expandAll}
                className="hover:text-blue-400 transition-colors underline font-medium"
              >
                Expand All
              </button>
              <span>•</span>
              <button
                onClick={collapseAll}
                className="hover:text-blue-400 transition-colors underline font-medium"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#1E293B] border border-slate-800 rounded-2xl p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-white font-heading">No questions found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try searching for another keyword or reach out directly on WhatsApp.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl transition-colors inline-block"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#1E293B] border-blue-500/50 shadow-xl shadow-blue-950/40'
                      : 'bg-[#131C2E] border-slate-800 hover:border-slate-700 hover:bg-[#1A253B]'
                  }`}
                >
                  {/* Accordion Header / Question Trigger */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5 pr-2">
                      <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0 mt-0.5">
                        {getCategoryIcon(faq.category)}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block font-heading">
                          {faq.categoryLabel}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                        isOpen
                          ? 'bg-blue-600/20 text-blue-400 rotate-180'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Body / Answer */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1 space-y-4 animate-fadeIn">
                      <p className="text-slate-200">{faq.answer}</p>

                      {faq.highlightText && (
                        <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3.5 py-2 rounded-xl font-heading">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{faq.highlightText}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Question CTA Box */}
        <div className="mt-14 bg-gradient-to-r from-[#131C2E] via-[#1E293B] to-[#131C2E] border border-slate-800 rounded-3xl p-8 text-center sm:text-left sm:flex items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 mb-6 sm:mb-0">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              Have A Specific Question?
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Didn't find what you were looking for?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Ask Abdul directly on WhatsApp for an instant response regarding custom project quotes, availability, or technical requirements.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hi Abdul, I have a quick question about a potential project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-emerald-600/25 shrink-0 font-heading"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
