import React from 'react';
import { X, Mail, CheckCircle, ExternalLink, Key, Code } from 'lucide-react';
import { siteConfig } from '../config/siteData';

interface EmailSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailSetupModal: React.FC<EmailSetupModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Email Service Setup Guide</h3>
              <p className="text-xs text-slate-500">How Abdul receives project requests directly in his inbox</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions Body */}
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            The website form is fully functional and logs inquiries to the backend API (`/api/contact`). To have project requests automatically forwarded to your personal email inbox (<strong className="text-slate-900">{siteConfig.email}</strong>) for free without backend hosting, follow these simple steps:
          </p>

          {/* Option 1: Web3Forms */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-[#2563EB]" />
                <h4 className="font-bold text-slate-900 text-sm">Recommended: Free Web3Forms Integration</h4>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                100% Free
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600 pl-1">
              <li>
                Go to <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:underline font-bold inline-flex items-center gap-0.5">web3forms.com <ExternalLink className="w-3 h-3" /></a> and enter your email (<span className="text-slate-900 font-mono">{siteConfig.email}</span>).
              </li>
              <li>
                You will instantly receive a free <strong className="text-slate-900">Access Key</strong> in your email inbox.
              </li>
              <li>
                Open <code className="text-[#2563EB] bg-blue-50 px-1.5 py-0.5 rounded">src/config/siteData.ts</code> in the code editor.
              </li>
              <li>
                Replace <code className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">'YOUR_WEB3FORMS_ACCESS_KEY'</code> with your key!
              </li>
            </ol>
          </div>

          {/* Config snippet highlight */}
          <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
              <Code className="w-3.5 h-3.5" />
              <span>Location in src/config/siteData.ts:</span>
            </div>
            <p className="text-slate-500">// In siteConfig.emailIntegration:</p>
            <p className="text-cyan-300">web3formsAccessKey: '12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</p>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
            <span>
              Once updated, any visitor submitting the contact form on your portfolio will immediately trigger a formatted email sent directly to your inbox with all client details and phone number!
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl cursor-pointer shadow-sm"
          >
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
};
