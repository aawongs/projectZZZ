import React, { useState, useMemo } from 'react';
import { Moon, Sun, Smartphone, Trophy, Save } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  user: { name: string; email: string } | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  // Initialize with 5 days of data (4 past days + today)
  const [sleepData, setSleepData] = useState(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const data = [];
    
    for (let i = 4; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      data.push({
        fullDate: d.toISOString().split('T')[0],
        day: days[d.getDay()],
        // Random realistic sleep data for past days, 0 for today initially
        hours: i === 0 ? 0 : Number((5.5 + Math.random() * 3.5).toFixed(1)),
      });
    }
    return data;
  });

  const [sleepScore, setSleepScore] = useState(78);
  const [bedtime, setBedtime] = useState('23:30');
  const [wakeTime, setWakeTime] = useState('07:30');
  const [interruptions, setInterruptions] = useState('0');

  // Calculate stats based on current data
  const currentDuration = sleepData[sleepData.length - 1].hours;
  const weeklyAvg = useMemo(() => {
    const sum = sleepData.reduce((acc, curr) => acc + curr.hours, 0);
    // Avoid dividing by 0 if today is the only day and has 0 hours, though with 5 days it's fine.
    // We exclude today from average if it's 0 to not skew it down.
    const divisor = sleepData.length - (currentDuration === 0 ? 1 : 0) || 1;
    return (sum / divisor).toFixed(1);
  }, [sleepData, currentDuration]);

  const handleUpdateLog = () => {
    const [bedH, bedM] = bedtime.split(':').map(Number);
    const [wakeH, wakeM] = wakeTime.split(':').map(Number);
    
    let duration = 0;
    if (wakeH < bedH) {
      // Woke up next day
      duration = (24 - bedH - bedM / 60) + (wakeH + wakeM / 60);
    } else {
      duration = (wakeH + wakeM / 60) - (bedH + bedM / 60);
    }

    // Subtract interruptions
    const interruptMins = parseInt(interruptions) || 0;
    duration -= interruptMins / 60;
    
    if (duration < 0) duration = 0;
    duration = Number(duration.toFixed(1));

    // Immutably update the state to prevent "Cannot assign to read only property" error
    setSleepData(prevData => {
        const newData = [...prevData];
        const lastIndex = newData.length - 1;
        // Create a new object for the last entry
        newData[lastIndex] = {
            ...newData[lastIndex],
            hours: duration
        };
        return newData;
    });

    // Update score (mock logic)
    let newScore = 70;
    if (duration >= 7 && duration <= 9) newScore += 20;
    else if (duration >= 6) newScore += 10;
    else if (duration > 9) newScore += 5; // oversleeping penalty
    
    // Regularity bonus (mock)
    newScore += 5; 
    
    // Interruption penalty
    if (interruptMins === 0) newScore += 5;

    setSleepScore(Math.min(100, Math.max(0, newScore)));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-900 text-white pb-32 pt-12 rounded-b-[3rem] relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-3xl font-light text-slate-300">Good Morning,</h1>
              <div className="text-4xl font-bold capitalize">{user?.name || 'Student'}</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm text-slate-400 mb-1">Current Streak</div>
              <div className="text-3xl font-bold text-yellow-400 flex items-center justify-end gap-2">
                <span className="text-2xl">🔥</span> 12 Days
              </div>
            </div>
          </div>

          {/* Sleep Score Hero */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
             <div className="relative w-64 h-64 flex items-center justify-center shrink-0">
                {/* Circular Progress Representation */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="128" cy="128" r="120" stroke="#1e293b" strokeWidth="12" fill="none" />
                    <circle 
                      cx="128" cy="128" r="120" 
                      stroke="#6366f1" 
                      strokeWidth="12" 
                      fill="none" 
                      strokeDasharray={2 * Math.PI * 120}
                      strokeDashoffset={2 * Math.PI * 120 * (1 - sleepScore / 100)}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-slate-400 text-sm uppercase tracking-wider font-medium">Sleep Score</span>
                    <span className="text-7xl font-bold text-white tracking-tighter">{sleepScore}</span>
                    <span className="text-green-400 text-sm font-medium mt-2">
                        {sleepScore > 80 ? 'Excellent' : sleepScore > 60 ? 'Good' : 'Needs Focus'}
                    </span>
                </div>
             </div>
             
             <div className="flex-1 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
                        <div className="text-slate-400 text-xs mb-1">Last Night</div>
                        <div className="text-xl font-bold text-white">{currentDuration > 0 ? `${currentDuration}h` : '--'}</div>
                        <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-blue-400 h-full" style={{ width: `${Math.min(100, (currentDuration/9)*100)}%` }}></div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
                        <div className="text-slate-400 text-xs mb-1">Regularity</div>
                        <div className="text-xl font-bold text-white">92%</div>
                         <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-purple-400 h-full w-[92%]"></div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
                        <div className="text-slate-400 text-xs mb-1">Avg Duration</div>
                        <div className="text-xl font-bold text-white">{weeklyAvg}h</div>
                         <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-green-400 h-full" style={{ width: `${Math.min(100, (parseFloat(weeklyAvg)/9)*100)}%` }}></div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/10">
                        <div className="text-slate-400 text-xs mb-1">Debt</div>
                        <div className="text-xl font-bold text-white">1.2h</div>
                         <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                            <div className="bg-yellow-400 h-full w-[30%]"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-white/5 rounded-2xl p-4 border border-white/5">
                    <p className="text-sm text-slate-300 leading-relaxed">
                        <span className="font-bold text-white">Insight:</span> You've maintained a consistent wake-up time for 3 days. Keep this up to boost your Regularity score by +5 points.
                    </p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Action Card */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-slate-900">Past 5 Days</h3>
                    <div className="text-sm text-slate-500 font-medium">
                        {sleepData[0].day} - Today
                    </div>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sleepData}>
                            <defs>
                                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                                cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '5 5' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="hours" 
                                stroke="#6366f1" 
                                strokeWidth={4} 
                                fillOpacity={1} 
                                fill="url(#colorHours)" 
                                animationDuration={1000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quick Log Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Update Log (Today)</h3>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Bedtime</label>
                            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                                <Moon size={16} className="text-indigo-500 shrink-0" />
                                <input 
                                    type="time" 
                                    value={bedtime}
                                    onChange={(e) => setBedtime(e.target.value)}
                                    className="bg-transparent outline-none w-full font-medium text-slate-700 text-sm" 
                                />
                            </div>
                        </div>
                         <div className="flex-1">
                            <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Wake Up</label>
                            <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                                <Sun size={16} className="text-orange-500 shrink-0" />
                                <input 
                                    type="time" 
                                    value={wakeTime}
                                    onChange={(e) => setWakeTime(e.target.value)}
                                    className="bg-transparent outline-none w-full font-medium text-slate-700 text-sm" 
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Interruptions (mins)</label>
                        <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 focus-within:border-slate-400 transition-all">
                            <Smartphone size={16} className="text-slate-400" />
                            <input 
                                type="number" 
                                value={interruptions}
                                onChange={(e) => setInterruptions(e.target.value)}
                                placeholder="0" 
                                className="bg-transparent outline-none w-full font-medium text-slate-700" 
                            />
                        </div>
                    </div>
                    <button 
                        onClick={handleUpdateLog}
                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg shadow-slate-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        <Save size={18} />
                        Update Stats
                    </button>
                </div>
            </div>
        </div>
        
        {/* Integrated Leaderboard */}
        <div className="mt-8 bg-indigo-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800 text-indigo-200 text-xs font-semibold uppercase tracking-wide mb-4">
                        <Trophy size={12} />
                        <span>Weekly Challenge</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Dorm Wars: Semester 2</h3>
                    <p className="text-indigo-200 mb-6">Your dorm, <span className="text-white font-semibold">North Hall</span>, is currently in 1st place! Keep the streak alive to win the Pizza Party Reward.</p>
                    <button className="text-sm font-semibold text-white underline decoration-indigo-400 underline-offset-4 hover:text-indigo-200 transition-colors">View Full Rules</button>
                </div>

                <div className="md:w-2/3 grid gap-3">
                    {[
                        { name: 'North Hall', score: 12450, rank: 1, active: true },
                        { name: 'Science Quad', score: 11890, rank: 2, active: false },
                        { name: 'West Wing', score: 11200, rank: 3, active: false },
                    ].map((dorm) => (
                        <div key={dorm.name} className={`flex items-center justify-between p-4 rounded-2xl border ${dorm.active ? 'bg-white/10 border-indigo-400/50' : 'bg-transparent border-white/10'}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${dorm.rank === 1 ? 'bg-yellow-400 text-yellow-900' : 'bg-white/20 text-white'}`}>
                                    {dorm.rank}
                                </div>
                                <span className="font-medium">{dorm.name}</span>
                            </div>
                            <span className="font-mono font-bold">{dorm.score.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};