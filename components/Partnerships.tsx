import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Users, ClipboardCheck, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const Partnerships: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Partner with Project ZZZ</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
             We work directly with student housing and university wellness departments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative mb-24">
           {/* Connecting Line */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 z-0"></div>

           {[
             { title: "Deploy", icon: Share2, desc: "Seamless integration with existing student portals and SSO systems." },
             { title: "Engage", icon: Users, desc: "Launch dorm-wide challenges and gamified events to spark interest." },
             { title: "Measure", icon: ClipboardCheck, desc: "Receive quarterly reports on sleep health improvements and academic correlation." }
           ].map((step, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.2 }}
               className="relative z-10 flex flex-col items-center text-center"
             >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8">
                  <step.icon size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">{step.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-lg max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-slate-900">Bring Project ZZZ to Your Campus</h3>
                <p className="text-slate-500 mt-2">Fill out the form below and our university relations team will be in touch.</p>
            </div>
            
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">University Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="e.g. University of Michigan" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Student Body Size</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none bg-white">
                            <option>Select size...</option>
                            <option>Under 5,000</option>
                            <option>5,000 - 15,000</option>
                            <option>15,000 - 30,000</option>
                            <option>30,000+</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contact Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Official Email</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="jane@university.edu" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none h-32" placeholder="Tell us about your current wellness initiatives..."></textarea>
                </div>
                <div className="text-center">
                    <Button size="lg" className="w-full md:w-auto">
                        <span className="flex items-center gap-2">
                            Submit Inquiry <Send size={16} />
                        </span>
                    </Button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
