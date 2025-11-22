import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const correlationData = [
  { gpa: '2.0', hours: 5.2 },
  { gpa: '2.5', hours: 6.1 },
  { gpa: '3.0', hours: 6.8 },
  { gpa: '3.5', hours: 7.4 },
  { gpa: '4.0', hours: 8.1 },
];

const prevalenceData = [
  { group: 'Freshmen', deprived: 68 },
  { group: 'Sophomores', deprived: 72 },
  { group: 'Juniors', deprived: 84 },
  { group: 'Seniors', deprived: 76 },
];

export const ScienceSection: React.FC = () => {
  return (
    <section id="science" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Backed by Clinical Research</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We combine sleep science with behavioral psychology models (similar to Duolingo) to create lasting habit formation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Chart 1 */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sleep Duration vs. GPA</h3>
                <p className="text-sm text-slate-500 mb-6">Positive correlation observed in N=2500 study.</p>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={correlationData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="gpa" label={{ value: 'GPA Scale', position: 'insideBottom', offset: -5, fontSize: 12 }} />
                            <YAxis label={{ value: 'Avg Sleep (Hrs)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: '12px' }} />
                            <Area type="monotone" dataKey="hours" stroke="#4f46e5" strokeWidth={3} fill="#e0e7ff" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200/60">
                    <p className="text-[10px] text-slate-400 leading-tight">
                        Source: Hershner, S. D., & Chervin, R. D. (2014). Causes and consequences of sleepiness among college students. <em>Nature and Science of Sleep</em>, 6, 73–84.
                    </p>
                </div>
            </div>

            {/* Chart 2 */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Sleep Deprivation Prevalence</h3>
                <p className="text-sm text-slate-500 mb-6">% of students getting less than 6 hours.</p>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={prevalenceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="group" tick={{fontSize: 12}} />
                            <YAxis tick={{fontSize: 12}} />
                            <Tooltip contentStyle={{ borderRadius: '12px' }} />
                            <Bar dataKey="deprived" fill="#ef4444" radius={[8, 8, 0, 0]} name="% Sleep Deprived" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200/60">
                    <p className="text-[10px] text-slate-400 leading-tight">
                        Source: American College Health Association. National College Health Assessment II: Reference Group Executive Summary.
                    </p>
                </div>
            </div>
        </div>

        {/* Gamification Model */}
        <div className="bg-indigo-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-indigo-500/30 px-4 py-2 rounded-full text-sm font-semibold text-indigo-200 mb-6 border border-indigo-500/30">The Behavior Model</div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Why it works: The "Hook" Model for Sleep</h3>
                    <p className="text-indigo-100 text-lg leading-relaxed mb-8">
                        Just as language learning apps use streaks to maintain engagement, Project ZZZ uses the <strong>Trigger → Action → Variable Reward → Investment</strong> loop to turn sleep hygiene into a dopamine-positive activity.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            "External Trigger: Push notification at ideal wind-down time.",
                            "Action: Logging 'Phone Down' mode.",
                            "Variable Reward: Sleep Score, Dorm Points, Rare Badge Unlocks.",
                            "Investment: Building a streak that users don't want to break."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-indigo-900 font-bold text-xs mt-1 shrink-0">{i + 1}</div>
                                <span className="text-indigo-50">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-[10px] text-indigo-400 opacity-60">
                        Based on: Eyal, N. (2014). <em>Hooked: How to Build Habit-Forming Products</em>.
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-md">
                         {/* Abstract visual of the cycle */}
                         <div className="absolute inset-0 border-4 border-dashed border-indigo-400/30 rounded-full animate-spin-slow"></div>
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-4 rounded-2xl shadow-lg">Trigger</div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-500 p-4 rounded-2xl shadow-lg">Reward</div>
                         <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 p-4 rounded-2xl shadow-lg">Action</div>
                         <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-green-500 p-4 rounded-2xl shadow-lg">Invest</div>
                         
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="text-center">
                                 <div className="text-4xl font-bold text-white">ZZZ</div>
                                 <div className="text-sm text-indigo-300">Habit Loop</div>
                             </div>
                         </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};