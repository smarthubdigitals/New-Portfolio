import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, HelpCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../config/siteData';
import { ContactFormData, ServiceType } from '../types';
import { EmailSetupModal } from './EmailSetupModal';

interface ContactSectionProps {
  selectedServicePrefill?: ServiceType | '';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePrefill }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneWhatsapp: '',
    businessName: '',
    serviceNeeded: 'Social Media Graphics & Promotional Flyers',
    projectDetails: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showSetupModal, setShowSetupModal] = useState(false);

  useEffect(() => {
    if (selectedServicePrefill) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: selectedServicePrefill,
      }));
    }
  }, [selectedServicePrefill]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your full name.' });
      return;
    }
    if (!formData.phoneWhatsapp.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your Phone or WhatsApp number.' });
      return;
    }
    if (!formData.projectDetails.trim()) {
      setStatusMessage({ type: 'error', text: 'Please provide some details about your project.' });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to custom backend API (/api/contact)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // 2. Also forward to Web3Forms if an access key is set
      const web3Key = siteConfig.emailIntegration.web3formsAccessKey;
      if (web3Key && web3Key !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        try {
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key: web3Key,
              subject: `New Project Request: ${formData.serviceNeeded} - ${formData.businessName || formData.fullName}`,
              from_name: formData.fullName,
              to_email: siteConfig.email,
              ...formData,
            }),
          });
        } catch (wErr) {
          console.warn('Web3Forms optional sync failed, fallback to local API response', wErr);
        }
      }

      if (res.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || `Thank you, ${formData.fullName}! Your project request has been sent successfully. Abdul Waheed will reach out to you via WhatsApp or email soon.`,
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneWhatsapp: '',
          businessName: '',
          serviceNeeded: 'Social Media Graphics & Promotional Flyers',
          projectDetails: '',
          honeypot: '',
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to submit form. Please contact Abdul via WhatsApp directly.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatusMessage({
        type: 'error',
        text: 'A network error occurred. Please send a direct message on WhatsApp instead.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `Hi Abdul, my name is ${formData.fullName || '[My Name]'}. I am interested in your "${formData.serviceNeeded}" service for ${formData.businessName || 'my business'}. Details: ${formData.projectDetails || 'Let us discuss'}.`;
  const directWhatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] text-slate-900 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
            Start A Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Create Something For Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Have a project in mind? Tell me what you need and I'll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Spam Honeypot Trap (Hidden from users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ibrahim Adam"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ibrahim@example.com"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phoneWhatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phoneWhatsapp"
                    name="phoneWhatsapp"
                    required
                    value={formData.phoneWhatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 024 123 4567"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Savanna Delights Eatery"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Service Needed Dropdown (STRICTLY ONLY THE 3 SERVICES) */}
              <div>
                <label htmlFor="serviceNeeded" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Social Media Graphics & Promotional Flyers">
                    Social Media Graphics & Promotional Flyers
                  </option>
                  <option value="Short-Form Video & AI Content">
                    Short-Form Video & AI Content
                  </option>
                  <option value="Business Website Design">
                    Business Website Design
                  </option>
                </select>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe what you want to create (e.g., promotional flyer for a new menu offer, short reel video for Instagram, or a 1-page mobile website for my salon)..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  )}
                  <p className="leading-relaxed font-medium">{statusMessage.text}</p>
                </div>
              )}

              {/* Form Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-blue-100 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Project Request</span>
                  </>
                )}
              </button>

            </form>

            {/* Email Config Helper Link */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Forms delivered directly to email</span>
              <button
                type="button"
                onClick={() => setShowSetupModal(true)}
                className="text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer font-bold"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Email Setup Guide</span>
              </button>
            </div>

          </div>

          {/* Right Side: WhatsApp Instant Connect & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big CTA Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#128C7E] text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">Prefer Faster Chat on WhatsApp?</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Most local business owners in Tamale prefer discussing project ideas, sharing samples, and agreeing on prices directly on WhatsApp.
                </p>
              </div>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#128C7E] hover:bg-[#0f766a] text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat With Me on WhatsApp</span>
              </a>

              <p className="text-[11px] text-emerald-800 text-center font-mono font-bold">
                WhatsApp: {siteConfig.whatsappDisplayNumber}
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 text-xs text-slate-700 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900">Direct Contact Info</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-500 w-20">Name:</span>
                  <span className="text-slate-900 font-bold">{siteConfig.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-500 w-20">Location:</span>
                  <span className="text-slate-900 font-bold">{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-500 w-20">Email:</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-[#2563EB] hover:underline font-mono font-bold">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-500 w-20">WhatsApp:</span>
                  <span className="text-emerald-700 font-mono font-bold">
                    {siteConfig.whatsappDisplayNumber}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Email Integration Modal */}
      <EmailSetupModal isOpen={showSetupModal} onClose={() => setShowSetupModal(false)} />
    </section>
  );
};
