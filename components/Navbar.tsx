import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { BedDouble } from 'lucide-react';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, isLoggedIn, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || currentView !== 'landing' ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setCurrentView('landing')}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
            <BedDouble size={18} fill="currentColor" strokeWidth={1.5} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Project ZZZ</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</button>
          <button onClick={() => scrollToSection('science')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Science</button>
          <button onClick={() => scrollToSection('impact')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Impact</button>
          <button onClick={() => scrollToSection('partners')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Partners</button>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className={`text-sm font-medium transition-colors ${currentView === 'dashboard' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Dashboard
                </button>
                <Button size="sm" onClick={onLogout} variant="outline">Log Out</Button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setCurrentView('login')}
                className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
              >
                Log In
              </button>
              <Button size="sm" onClick={() => setCurrentView('login')}>Get Started</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};