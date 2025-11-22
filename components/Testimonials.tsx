import React from 'react';

interface TestimonialsProps {
  onDemoClick?: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onDemoClick }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        {'★★★★★'}
                    </div>
                    <p className="text-xl text-slate-800 font-medium leading-relaxed">
                        "The concept of gamifying sleep is exactly what our campus needs right now. The idea that my dorm could win prizes just by getting better rest is generating so much buzz for the upcoming pilot."
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                        <img src="https://picsum.photos/200/200?random=1" alt="Student" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900">Sarah Jenkins</div>
                        <div className="text-sm text-slate-500">Student Body President, Junior</div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        {'★★★★★'}
                    </div>
                    <p className="text-xl text-slate-800 font-medium leading-relaxed">
                        "We are eagerly awaiting the launch. The proposed architecture for validating sleep data via HealthKit—without intrusive manual logging—solves the biggest reliability hurdle in student wellness tracking."
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                        <img src="https://picsum.photos/200/200?random=2" alt="Faculty" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900">Dr. Marcus Chen</div>
                        <div className="text-sm text-slate-500">Dean of Student Affairs</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Join the waitlist for your campus.</h2>
            <button 
                onClick={onDemoClick}
                className="px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-full hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20"
            >
                Request Early Access
            </button>
        </div>
      </div>
    </section>
  );
};