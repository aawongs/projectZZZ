import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsSection } from './components/WhatIsSection';
import { FeaturesBento } from './components/FeaturesBento';
import { ScienceSection } from './components/ScienceSection';
import { SleepLoggingSection } from './components/SleepLoggingSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { Partnerships } from './components/Partnerships';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { InfoPage } from './components/InfoPage';

export type ViewState = 'landing' | 'login' | 'dashboard' | 'privacy' | 'terms' | 'data' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('landing');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'privacy':
        return <InfoPage title="Privacy Policy" onBack={() => setCurrentView('landing')} content={
          <>
            <p>At Project ZZZ, your sleep data is sacred. We only collect data necessary to calculate your sleep score and validate leaderboard participation.</p>
            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Data Collection</h3>
            <p>We integrate with HealthKit and Google Fit to read sleep samples. We do not read other health metrics.</p>
            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">University Sharing</h3>
            <p>Aggregated, anonymized data is shared with university partners to assess campus wellness trends. Individual data is never shared without explicit consent.</p>
          </>
        } />;
      case 'terms':
        return <InfoPage title="Terms of Service" onBack={() => setCurrentView('landing')} content={
          <>
            <p>By using Project ZZZ, you agree to maintain the integrity of the leaderboard system.</p>
            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Fair Play</h3>
            <p>Manual entries are subject to algorithmic verification. Attempting to falsify sleep data to win prizes may result in account suspension.</p>
          </>
        } />;
       case 'data':
        return <InfoPage title="Research Data" onBack={() => setCurrentView('landing')} content={
          <>
            <p>Our platform is built on peer-reviewed sleep science. See our Science section for citations.</p>
            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">Open Data Initiative</h3>
            <p>Qualified researchers may apply to access our anonymized dataset for sleep studies.</p>
          </>
        } />;
       case 'contact':
        return <InfoPage title="Contact Us" onBack={() => setCurrentView('landing')} content={
          <>
            <p>We'd love to hear from you.</p>
            <div className="mt-6">
                <strong>General Inquiries:</strong><br/> hello@projectzzz.com
            </div>
             <div className="mt-4">
                <strong>Support:</strong><br/> support@projectzzz.com
            </div>
          </>
        } />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setCurrentView('login')} />
            <WhatIsSection />
            <FeaturesBento />
            <ScienceSection />
            <SleepLoggingSection />
            <LeaderboardSection />
            <Partnerships />
            <Testimonials onDemoClick={() => {
              const element = document.getElementById('partners');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        isLoggedIn={!!user} 
        onLogout={handleLogout}
      />
      
      <main className="pt-16">
        {renderContent()}
      </main>
      
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}