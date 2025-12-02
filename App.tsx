
import React, { createContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from './components/Navbar';
import Events from './pages/Events';
import Ecosystem from './pages/Ecosystem';
import ActiveStartups from './pages/ActiveStartups';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';
import CommunityNews from './pages/CommunityNews';
import { ThemeContextType } from './types';
import { ArrowUpRight, ArrowRight, Sparkles, Quote, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const Dashboard = () => {
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: "Generate a short, powerful, one-sentence piece of business advice for a startup founder who might be struggling. Focus on resilience, grit, and believing in their solution. Do not use quotes, just the advice. Tone: Encouraging, Professional, Visionary.",
        });
        
        setAiAdvice(response.text.trim());
      } catch (error) {
        console.error("Failed to fetch advice", error);
        setAiAdvice("Your vision is the roadmap to the future; trust the journey even when the path is unclear.");
      } finally {
        setLoadingAdvice(false);
      }
    };

    fetchAdvice();
  }, []);

  const scmmData = [
    { name: 'Baguio City', level: 2, label: 'Foundational' },
    { name: 'Abra', level: 1, label: 'Nascent' },
    { name: 'Mt. Province', level: 1, label: 'Nascent' },
    { name: 'Kalinga', level: 1, label: 'Nascent' },
    { name: 'Apayao', level: 1, label: 'Nascent' },
    { name: 'Ifugao', level: 1, label: 'Nascent' },
  ];

  const getLevelColor = (level: number) => {
    switch(level) {
      // Level 1: Earthy/Foundation
      case 1: return 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-300 border-stone-200 dark:border-stone-800';
      // Level 2: Sprouting Green
      case 2: return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      // Level 3: Flourishing Teal
      case 3: return 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      // Level 4: Established Pine
      case 4: return 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border-green-200 dark:border-green-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const LevelBadge = ({ level, label, compact = false }: { level: number, label: string, compact?: boolean }) => (
    <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 w-fit ${getLevelColor(level)}`}>
      {compact ? `Lvl ${level}` : `Level ${level}: ${label}`}
    </div>
  );

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-400 dark:to-teal-300">Baguio Startup Network</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg font-medium leading-relaxed max-w-2xl">
          The central hub for the mountain region's startup ecosystem. Connect, attend, and grow.
        </p>
      </header>

      {/* Fluid Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
        
        {/* SCMM Section - Top */}
        <div className="md:col-span-4 space-y-4 md:space-y-6 mb-4">
          
          {/* Main Region Box - Pine Green Theme */}
          <div className="bg-gradient-to-br from-[#1a4731] to-[#2f705a] rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-emerald-900/10 dark:shadow-none relative overflow-hidden">
             {/* Abstract pine/mountain pattern overlay */}
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
                </svg>
             </div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 mb-4 text-emerald-50">
                     <span className="w-2 h-2 rounded-full bg-emerald-300"></span> Region Overview
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">Cordillera Administrative Region</h3>
                  <p className="text-emerald-100 font-medium max-w-2xl leading-relaxed">
                    The startup ecosystem of the Cordilleras is predominantly in the nascent stage, characterized by emerging communities and foundational support structures.
                  </p>
                </div>
                
                <div className="flex flex-col items-end">
                   <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-lg border border-white/20 shadow-lg whitespace-nowrap mb-2">
                      Level 1
                   </div>
                   <span className="text-white/80 font-medium uppercase text-sm tracking-wide">Nascent</span>
                </div>
             </div>
          </div>

          {/* Sub-regions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
             {scmmData.map((area) => (
                <div key={area.name} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-sm hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors flex flex-col justify-between min-h-[110px] relative overflow-hidden group">
                   <div className="flex justify-between items-start mb-2">
                     <span className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base pr-8 leading-tight">{area.name}</span>
                     <div className="absolute top-3 right-3">
                        <LevelBadge level={area.level} label={area.label} compact={true} />
                     </div>
                   </div>
                   <div className="mt-auto pt-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        {area.label}
                      </span>
                   </div>
                </div>
             ))}
          </div>
        </div>
        
        {/* Row 2: Featured Event - Split Layout */}
        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row relative group transition-colors min-h-[320px]">
          
          <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 order-2 md:order-1">
            <div className="mb-4">
              <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md shadow-teal-100 dark:shadow-none">Upcoming Event</span>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
              Cloud and DevOps Basics
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">December 10, 2025 | 1:00 PM</p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              This short course provides an introductory overview of cloud computing and DevOps principles. Participants will learn about service models.
            </p>

            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
               <Link to="/events" className="text-slate-900 dark:text-white font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                  View Details <ArrowUpRight size={18} />
               </Link>
            </div>
          </div>
          
          {/* Square Banner on the Right (or top on mobile) */}
          <div className="md:w-[40%] h-48 md:h-auto relative order-1 md:order-2">
             <img 
               src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/587213315_872894341978383_6161694301616584039_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHxtQjMgZxlEc9du-DDOCu7eDeTBQyd0xJ4N5MFDJ3TEqIrc0d5JZc94yhB-f_FeODohzjSDDuHGJbYf0PUvN5s&_nc_ohc=Yh7OUvhI9SkQ7kNvwEllq0w&_nc_oc=Adm5dsXPof2IcVDImQtCQ-cpEfWYwDsq0vfSoSti4YQOpocyrgcgR1hjMPt_bwrKnKk&_nc_zt=23&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=4RKTUIxbBmiN-jfooC7a5w&oh=00_AfiBPjakYwG62qEhWxMMEJzQgQPvbH6zuTVbCY7tJfU8cg&oe=693395A4" 
               alt="Event Banner" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
          </div>
        </div>

        {/* Row 2: AI Advice Card - Nature/Misty Theme */}
        <div className="md:col-span-1 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-6 text-white shadow-lg flex flex-col relative overflow-hidden min-h-[320px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6 text-emerald-100">
               <Sparkles size={20} className="text-emerald-200 animate-pulse" />
               <span className="text-xs font-bold uppercase tracking-widest">Founder's Insight</span>
            </div>

            <div className="flex-1 flex flex-col justify-center relative">
               <Quote size={40} className="absolute -top-4 -left-2 text-white/10" />
               
               {loadingAdvice ? (
                 <div className="flex flex-col items-center gap-3 text-white/80">
                    <Loader2 size={24} className="animate-spin" />
                    <span className="text-sm font-medium">Consulting the AI...</span>
                 </div>
               ) : (
                 <p className="text-lg md:text-xl font-medium leading-relaxed italic text-center drop-shadow-sm">
                   "{aiAdvice}"
                 </p>
               )}
            </div>
            
            <div className="mt-auto pt-4 flex justify-center text-white/60 text-[10px] font-medium tracking-wide">
               Generated by Gemini
            </div>
          </div>
        </div>

        {/* Row 2: StartupBlink */}
        <div className="md:col-span-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-sm min-h-[320px] relative overflow-hidden group">
           {/* Increased opacity for better visibility */}
           <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-500 text-red-500">
               <ArrowUpRight size={100} />
           </div>
           <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 shadow-md bg-white border border-slate-100 flex items-center justify-center p-3">
             <img 
               src="https://somalia.startupblink.com/_next/static/media/startuplink.fe5810b1.svg" 
               alt="StartupBlink" 
               className="w-full h-full object-contain"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
                 (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
               }}
             />
             <div className="hidden text-xs font-bold text-slate-900">StartupBlink</div>
           </div>
           
           <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Global Startup Ecosystem Map</h3>
           <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
             Put your startup on the global map. Join the world's most comprehensive startup ecosystem map.
           </p>
           
           <a 
             href="https://www.startupblink.com/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="w-full py-3 bg-[#e4003d] hover:bg-[#c20033] text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-200 dark:shadow-none flex items-center justify-center gap-2 group-hover:shadow-xl"
           >
             Register Startup <ArrowRight size={16} />
           </a>
        </div>

        {/* Row 3: Announcements Footer */}
        <div className="md:col-span-4 mb-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 shadow-sm">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                 <span className="text-xl">📢</span>
              </div>
              <div className="text-center md:text-left">
                 <h4 className="font-bold text-slate-700 dark:text-slate-200">Announcements</h4>
                 <p className="text-sm font-medium text-slate-500 dark:text-slate-400">No recent updates or funding calls at the moment.</p>
              </div>
           </div>
           <Link to="/announcements" className="text-emerald-700 dark:text-emerald-400 text-sm font-bold hover:underline bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-lg transition-colors">
              View Announcement Archive
           </Link>
        </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-emerald-100 dark:selection:bg-emerald-900/30 overflow-hidden transition-colors duration-300">
          {/* Sidebar Component - Fixed */}
          <Sidebar />

          {/* Main Content Area - Fluid with Offset */}
          {/* md:ml-20 matches w-20, lg:ml-64 matches w-64 */}
          <main className="flex-1 h-full overflow-y-auto w-full ml-0 md:ml-20 lg:ml-64 transition-all duration-300">
            <div className="w-full h-full p-4 md:p-8 pb-24 md:pb-8 max-w-[1920px] mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/startups" element={<ActiveStartups />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<CommunityNews />} />
                <Route path="/announcements" element={<Announcements />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
