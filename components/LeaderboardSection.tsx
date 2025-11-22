import React from 'react';
import { motion } from 'framer-motion';

const LeaderboardRow = ({ rank, name, score, trend, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300"
  >
    <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rank === 1 ? 'bg-yellow-100 text-yellow-700' : rank === 2 ? 'bg-slate-200 text-slate-600' : rank === 3 ? 'bg-orange-100 text-orange-700' : 'bg-slate-50 text-slate-400'}`}>
            {rank}
        </div>
        <span className="font-semibold text-slate-800">{name}</span>
    </div>
    <div className="flex items-center gap-6">
        <span className="text-sm text-green-600 font-medium hidden sm:block">{trend}</span>
        <span className="font-mono font-bold text-slate-900">{score.toLocaleString()} pts</span>
    </div>
  </motion.div>
);

export const LeaderboardSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Campus Leaderboards</h2>
                <p className="text-blue-200 text-lg">Healthy competition. Real rewards.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <h3 className="text-xl font-semibold">Weekly Dorm Standings</h3>
                    <div className="flex gap-2 text-sm">
                        <span className="px-3 py-1 rounded-full bg-white/20 text-white cursor-pointer hover:bg-white/30 transition">Dorms</span>
                        <span className="px-3 py-1 rounded-full text-slate-400 cursor-pointer hover:text-white transition">Teams</span>
                        <span className="px-3 py-1 rounded-full text-slate-400 cursor-pointer hover:text-white transition">Individual</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <LeaderboardRow rank={1} name="North Hall" score={12450} trend="▲ 12%" delay={0.1} />
                    <LeaderboardRow rank={2} name="Science Quad" score={11890} trend="▲ 8%" delay={0.2} />
                    <LeaderboardRow rank={3} name="West Wing" score={11200} trend="▼ 2%" delay={0.3} />
                    <LeaderboardRow rank={4} name="The Commons" score={10500} trend="▲ 5%" delay={0.4} />
                    <LeaderboardRow rank={5} name="Student Village" score={9800} trend="-- 0%" delay={0.5} />
                </div>
                
                <div className="mt-8 text-center">
                    <button className="text-blue-300 hover:text-white text-sm font-medium transition-colors">View Full Rankings →</button>
                </div>
            </div>
        </div>
    </section>
  );
};