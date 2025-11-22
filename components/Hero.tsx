import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const scrollToScience = () => {
    document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-blue-50 via-indigo-50/50 to-white opacity-60 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6"
        >
          <span>Now Piloting at Top Universities</span>
          <ChevronRight size={12} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          Where Better Nights Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block">Better Futures.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-light"
        >
          The first university-centered wellness platform that gamifies rest, validates sleep hygiene, and fosters campus-wide well-being.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button size="lg" onClick={onGetStarted} className="w-full sm:w-auto">Join the Pilot</Button>
          <Button variant="outline" size="lg" onClick={scrollToScience} className="w-full sm:w-auto">View Research</Button>
        </motion.div>

        {/* Floating Mockup Representation */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative mx-auto border-gray-200 bg-gray-50 border-[8px] rounded-[2.5rem] h-[400px] md:h-[600px] w-full max-w-[900px] shadow-2xl flex flex-col overflow-hidden">
             {/* Mockup Header */}
             <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-between px-8">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
             </div>
             {/* Mockup Content - Abstract Dashboard */}
             <div className="flex-1 bg-white p-8 overflow-hidden relative text-left">
                {/* Background decorative blobs */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-slate-700">Sleep Consistency</h3>
                                <span className="text-green-500 font-bold bg-green-50 px-2 py-1 rounded-lg text-sm">+12%</span>
                            </div>
                            <div className="h-32 flex items-end gap-2 justify-between px-2">
                                {[40, 60, 45, 70, 85, 80, 95].map((h, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className={`w-full rounded-t-lg ${i === 6 ? 'bg-indigo-500' : 'bg-slate-100'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                                <p className="text-blue-100 text-sm font-medium mb-1">Current Streak</p>
                                <h4 className="text-4xl font-bold text-white">14 Days</h4>
                            </div>
                             <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-center">
                                <p className="text-slate-400 text-sm font-medium mb-1">Sleep Score</p>
                                <div className="flex items-baseline gap-2">
                                    <h4 className="text-4xl font-bold text-slate-800">92</h4>
                                    <span className="text-sm text-slate-500">/ 100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Leaderboard snippet */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hidden md:block">
                        <h3 className="font-semibold text-slate-700 mb-6">Dorm Leaderboard</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'North Hall', score: 9850, color: 'bg-yellow-100 text-yellow-700' },
                                { name: 'Science Quad', score: 9240, color: 'bg-slate-100 text-slate-600' },
                                { name: 'West Wing', score: 8900, color: 'bg-orange-50 text-orange-700' },
                                { name: 'The Commons', score: 8450, color: 'bg-slate-50 text-slate-500' },
                            ].map((dorm, i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-yellow-400 text-white' : 'bg-slate-200 text-slate-500'}`}>{i + 1}</span>
                                        <span className="font-medium text-slate-700">{dorm.name}</span>
                                    </div>
                                    <span className="font-mono text-sm font-semibold text-slate-400">{dorm.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};