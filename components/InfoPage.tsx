import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

export const InfoPage: React.FC<InfoPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        
        <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-slate-100">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">{title}</h1>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};