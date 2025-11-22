import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Coins, BarChart3 } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, delay, className }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-slate-50 p-8 rounded-[2rem] hover:bg-slate-100 transition-colors duration-300 border border-transparent hover:border-slate-200 group ${className}`}
  >
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

export const FeaturesBento: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Gamification with Purpose</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Turning healthy habits into a campus-wide movement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            <FeatureCard 
              title="Streak Tracking" 
              desc="Build consistency with our intelligent streak system. Miss a night? Recover with a 'Nap Token' to keep your momentum going."
              icon={Flame}
              delay={0.1}
              className="md:col-span-1"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-indigo-600 text-white p-8 rounded-[2rem] md:col-span-2 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Trophy size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Dorm vs. Dorm Competitions</h3>
                <p className="text-indigo-100 max-w-md">Rally your hall. Earn points for collective sleep consistency and win real-world campus rewards like food truck vouchers or gym passes.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>

            <FeatureCard 
              title="Sleep Coins" 
              desc="Earn virtual currency for every hour of quality rest (capped at 9 hours). Spend them in the ZZZ Marketplace."
              icon={Coins}
              delay={0.3}
              className="md:col-span-1"
            />

            <FeatureCard 
              title="Data Insights" 
              desc="Visualise your circadian rhythm. See how late-night study sessions correlate with your cognitive performance the next day."
              icon={BarChart3}
              delay={0.4}
              className="md:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/50"
            />
        </div>
      </div>
    </section>
  );
};