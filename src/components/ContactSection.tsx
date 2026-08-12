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

    let apiSuccess = false;
    let successMessage = '';

    // 1. Submit to custom backend API (/api/contact)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          apiSuccess = true;
          successMessage = data.message || `Thank you, ${formData.fullName}! Your project request has been submitted successfully.`;
        }
      }
    } catch (apiErr) {
      console.warn('Backend API submission note:', apiErr);
    }

    // 2. Also forward to Web3Forms if an access key is configured
    const web3Key = siteConfig.emailIntegration.web3formsAccessKey;
    if (web3Key && web3Key !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        const web3FormData = new FormData();
        web3FormData.append('access_key', web3Key);
        web3FormData.append('from_name', `${formData.fullName} (Portfolio Lead)`);
        web3FormData.append('subject', `🚀 New Lead: ${formData.fullName} - ${formData.serviceNeeded}`);

        if (formData.email && formData.email.trim()) {
          web3FormData.append('replyto', formData.email.trim());
        }

        // Clean & format WhatsApp link for instant 1-click chatting from inbox
        const rawPhone = formData.phoneWhatsapp.trim().replace(/[^0-9]/g, '');
        const formattedPhone = rawPhone.startsWith('0')
          ? '233' + rawPhone.substring(1)
          : rawPhone.startsWith('233') ? rawPhone : '233' + rawPhone;
        
        const directWaUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(`Hi ${formData.fullName}, thank you for reaching out regarding your ${formData.serviceNeeded} project!`)}`;

        // Human-friendly field names for Web3Forms email table layout
        web3FormData.append('Full Name', formData.fullName);
        web3FormData.append('Phone / WhatsApp', `${formData.phoneWhatsapp}`);
        web3FormData.append('Email Address', formData.email || 'Not provided');
        web3FormData.append('Business / Brand Name', formData.businessName || 'Not specified');
        web3FormData.append('Service Requested', formData.serviceNeeded);
        web3FormData.append('Project Details & Requirements', formData.projectDetails);
        web3FormData.append('1-Click WhatsApp Reply Link', directWaUrl);
        web3FormData.append('Sent From', 'Abdul Waheed Digital Solutions Portfolio Website');
        web3FormData.append('Submitted At', `${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} (GMT)`);

        const wRes = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: web3FormData,
        });

        if (wRes.ok) {
          apiSuccess = true;
        }
      } catch (wErr) {
        console.warn('Web3Forms optional sync note:', wErr);
      }
    }

    if (apiSuccess) {
      setStatusMessage({
        type: 'success',
        text: successMessage || `Thank you, ${formData.fullName}! Your project request for "${formData.serviceNeeded}" has been received. Abdul Waheed will reach out to you via WhatsApp or email shortly.`,
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
        text: 'Failed to submit form. Please send a direct message on WhatsApp instead.',
      });
    }

    setIsSubmitting(false);
  };

  const whatsappMessage = `Hi Abdul, my name is ${formData.fullName || '[My Name]'}. I am interested in your "${formData.serviceNeeded}" service for ${formData.businessName || 'my business'}. Details: ${formData.projectDetails || 'Let us discuss'}.`;
  const directWhatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-[#0A0E17] text-slate-100 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1.5 rounded-full inline-block font-heading">
            Start A Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Let's Create Something For Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Have a project in mind? Tell me what you need and I'll get back to you quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Form */}
          <div className="lg:col-span-7 bg-[#131C2E] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
            
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
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ibrahim Adam"
                    className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ibrahim@example.com"
                    className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phoneWhatsapp" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="phoneWhatsapp"
                    name="phoneWhatsapp"
                    required
                    value={formData.phoneWhatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 024 123 4567"
                    className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Savanna Delights Eatery"
                    className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Service Needed Dropdown (STRICTLY ONLY THE 3 SERVICES) */}
              <div>
                <label htmlFor="serviceNeeded" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                  Service Needed <span className="text-rose-400">*</span>
                </label>
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
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
                <label htmlFor="projectDetails" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-heading">
                  Project Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe what you want to create (e.g., promotional flyer for a new menu offer, short reel video for Instagram, or a 1-page mobile website for my salon)..."
                  className="w-full bg-[#1E293B] border border-slate-700/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-[#1E293B] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
                  )}
                  <p className="leading-relaxed font-medium">{statusMessage.text}</p>
                </div>
              )}

              {/* Form Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-blue-950/50 transition-all cursor-pointer disabled:opacity-50"
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
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Forms delivered directly to email</span>
              <button
                type="button"
                onClick={() => setShowSetupModal(true)}
                className="text-blue-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Email Setup Guide</span>
              </button>
            </div>

          </div>

          {/* Right Side: WhatsApp Instant Connect & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Big CTA Box */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-heading">Prefer Faster Chat on WhatsApp?</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Most local business owners in Tamale prefer discussing project ideas, sharing samples, and agreeing on prices directly on WhatsApp.
                </p>
              </div>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat With Me on WhatsApp</span>
              </a>

              <p className="text-[11px] text-emerald-400 text-center font-mono font-bold">
                WhatsApp: {siteConfig.whatsappDisplayNumber}
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#131C2E] border border-slate-800 rounded-2xl p-6 space-y-4 text-xs text-slate-300 shadow-xl">
              <h4 className="text-sm font-bold text-white font-heading">Direct Contact Info</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400 w-20">Name:</span>
                  <span className="text-white font-bold">{siteConfig.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400 w-20">Location:</span>
                  <span className="text-white font-bold">{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400 w-20">Email:</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:underline font-mono font-bold">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-400 w-20">WhatsApp:</span>
                  <span className="text-emerald-400 font-mono font-bold">
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
