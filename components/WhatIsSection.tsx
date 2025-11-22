import React from 'react';
import { motion } from 'framer-motion';

export const WhatIsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
               Sleep isn't just downtime.<br />
               <span className="text-slate-400">It's your competitive advantage.</span>
             </h2>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               University life is demanding. Project ZZZ helps students navigate the balance between academic rigour and biological necessity. We don't just track sleep; we actively improve it through social motivation, data-driven insights, and campus-wide engagement.
             </p>
             <div className="flex gap-8 border-t border-slate-100 pt-8">
               <div>
                  <h4 className="text-3xl font-bold text-indigo-600">85%</h4>
                  <p className="text-sm text-slate-500 mt-1">Reported Better Focus</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-blue-600">2.4x</h4>
                  <p className="text-sm text-slate-500 mt-1">Lower Burnout Rate</p>
               </div>
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
             <div className="aspect-square bg-gradient-to-tr from-indigo-50 to-blue-50 rounded-[3rem] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/800/800" 
                  alt="Student sleeping peacefully" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};