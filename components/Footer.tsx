import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
    onNavigate?: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-900 font-semibold text-lg">Project ZZZ</div>
        <div className="flex gap-8 text-sm text-slate-500">
            <button onClick={() => onNavigate?.('privacy')} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate?.('terms')} className="hover:text-slate-900 transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate?.('data')} className="hover:text-slate-900 transition-colors">Research Data</button>
            <button onClick={() => onNavigate?.('contact')} className="hover:text-slate-900 transition-colors">Contact</button>
        </div>
        <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} Project ZZZ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};