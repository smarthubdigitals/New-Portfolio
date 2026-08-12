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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#131C2E] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">Email Service Setup Guide</h3>
              <p className="text-xs text-slate-400">How Abdul receives project requests directly in his inbox</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-[#1E293B] hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions Body */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            The website form is fully functional and logs inquiries to the backend API (`/api/contact`). To have project requests automatically forwarded to your personal email inbox (<strong className="text-white">{siteConfig.email}</strong>) for free without backend hosting, follow these simple steps:
          </p>

          {/* Option 1: Web3Forms */}
          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-blue-400" />
                <h4 className="font-bold text-white text-sm font-heading">Recommended: Free Web3Forms Integration</h4>
              </div>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                100% Free
              </span>
            </div>

            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 pl-1">
              <li>
                Go to <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-bold inline-flex items-center gap-0.5">web3forms.com <ExternalLink className="w-3 h-3" /></a> and enter your email (<span className="text-white font-mono">{siteConfig.email}</span>).
              </li>
              <li>
                You will instantly receive a free <strong className="text-white">Access Key</strong> in your email inbox.
              </li>
              <li>
                Open <code className="text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-500/30">src/config/siteData.ts</code> in the code editor.
              </li>
              <li>
                Replace <code className="text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-500/30">'YOUR_WEB3FORMS_ACCESS_KEY'</code> with your key!
              </li>
            </ol>
          </div>

          {/* Config snippet highlight */}
          <div className="bg-[#0B0F19] p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
              <Code className="w-3.5 h-3.5" />
              <span>Location in src/config/siteData.ts:</span>
            </div>
            <p className="text-slate-500">// In siteConfig.emailIntegration:</p>
            <p className="text-cyan-300">web3formsAccessKey: '12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</p>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-emerald-300 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <span>
              Once updated, any visitor submitting the contact form on your portfolio will immediately trigger a formatted email sent directly to your inbox with all client details and phone number!
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl cursor-pointer shadow-lg font-heading"
          >
            Got It!
          </button>
        </div>

      </div>
    </div>
  );
};
