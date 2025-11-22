import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Users, ClipboardCheck, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Partnerships: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

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
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Inquiry Received!</h3>
                <p className="text-green-700">Thank you for your interest. Our partnerships team will contact you within 48 hours.</p>
                <Button 
                  variant="outline" 
                  className="mt-6" 
                  onClick={() => setFormState('idle')}
                >
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">University Name</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="e.g. University of Michigan" />
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
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="Jane Doe" />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Official Email</label>
                          <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none" placeholder="jane@university.edu" />
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                      <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-200 outline-none h-32" placeholder="Tell us about your current wellness initiatives..."></textarea>
                  </div>
                  <div className="text-center">
                      <Button size="lg" className="w-full md:w-auto" type="submit" disabled={formState === 'submitting'}>
                          {formState === 'submitting' ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                                Submit Inquiry <Send size={16} />
                            </span>
                          )}
                      </Button>
                  </div>
              </form>
            )}
        </div>
      </div>
    </section>
  );
};
