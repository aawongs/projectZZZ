import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

export const SleepLoggingSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-6">
              Smart Verification
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Rigorous Logging. <br />Real Results.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We value integrity. Our logging system integrates with device health APIs to ensure that sleep data is genuine. No manual fudging for points.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "HealthKit & SSO Integration",
                  desc: "Seamlessly pulls data from Apple Health and Google Fit, verified against university single sign-on credentials."
                },
                {
                  icon: AlertTriangle,
                  title: "Digital Hygiene Protocol",
                  desc: "Entries are flagged or blocked if significant phone usage (>30 mins) is detected during logged sleep hours."
                },
                {
                  icon: Clock,
                  title: "Reasonable Caps",
                  desc: "To discourage hibernation, sleep credits are capped at 12 hours. We promote consistency, not oversleeping."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-indigo-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             {/* Abstract Phone Representation */}
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="bg-white rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-sm mx-auto relative z-10"
             >
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                        <span className="text-sm font-semibold text-slate-400">Sleep Log</span>
                        <span className="text-xs text-slate-300">Today</span>
                    </div>
                    
                    {/* Success State */}
                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-3">
                        <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-sm font-semibold text-green-800">Verified Sleep</p>
                            <p className="text-xs text-green-600 mt-1">7h 45m logged via HealthKit. No phone usage detected.</p>
                        </div>
                    </div>

                    {/* Warning State */}
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3 opacity-60 grayscale-[0.5]">
                        <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-sm font-semibold text-amber-800">Entry Invalid</p>
                            <p className="text-xs text-amber-600 mt-1">High screen time detected at 2:30 AM.</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-medium text-sm shadow-lg shadow-indigo-200">
                            Sync Data
                        </div>
                    </div>
                </div>
             </motion.div>
             
             {/* Decor */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};