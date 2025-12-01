
import React, { createContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from './components/Navbar';
import Events from './pages/Events';
import Ecosystem from './pages/Ecosystem';
import ActiveStartups from './pages/ActiveStartups';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';
import { ThemeContextType } from './types';
import { ArrowUpRight } from 'lucide-react';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const Dashboard = () => {
  const scmmData = [
    { name: 'Baguio City', level: 1, label: 'Nascent' },
    { name: 'Abra', level: 1, label: 'Nascent' },
    { name: 'Mt. Province', level: 1, label: 'Nascent' },
    { name: 'Kalinga', level: 1, label: 'Nascent' },
    { name: 'Apayao', level: 1, label: 'Nascent' },
    { name: 'Ifugao', level: 1, label: 'Nascent' },
  ];

  const getLevelColor = (level: number) => {
    switch(level) {
      case 1: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 2: return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800';
      case 3: return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800';
      case 4: return 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border-violet-200 dark:border-violet-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const LevelBadge = ({ level, label }: { level: number, label: string }) => (
    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-2 w-fit ${getLevelColor(level)}`}>
      <span className="flex gap-0.5">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-current' : 'bg-current opacity-20'}`} />
        ))}
      </span>
      Level {level}: {label}
    </div>
  );

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header className="mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#35308f] dark:to-indigo-400">Baguio Startup Network</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl text-lg">
          The central hub for the mountain region's startup ecosystem. Connect, attend, and grow.
        </p>
      </header>

      {/* Fluid Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
        
        {/* SCMM Section - Top */}
        <div className="md:col-span-4 space-y-4 md:space-y-6 mb-4">
          <div className="flex items-center justify-between">
             <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Startup Community Maturity Model (SCMM)</h2>
          </div>

          {/* Main Region Box */}
          <div className="bg-gradient-to-br from-[#35308f] to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-indigo-200 dark:shadow-none relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                   <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                   <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
             </div>
             
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 mb-4">
                   <span className="w-2 h-2 rounded-full bg-blue-300"></span> Region Overview
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Cordillera Administrative Region</h3>
                <div className="flex flex-wrap items-center gap-4">
                   <span className="text-indigo-100 font-medium">Ecosystem Stage:</span>
                   <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-sm border border-white/20 flex items-center gap-2">
                      <span className="flex gap-1">
                         <div className="w-2 h-2 rounded-full bg-white"></div>
                         <div className="w-2 h-2 rounded-full bg-white/30"></div>
                         <div className="w-2 h-2 rounded-full bg-white/30"></div>
                         <div className="w-2 h-2 rounded-full bg-white/30"></div>
                      </span>
                      Level 1: Nascent
                   </div>
                </div>
             </div>
          </div>

          {/* Sub-regions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
             {scmmData.map((area) => (
                <div key={area.name} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl shadow-sm hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors flex flex-col justify-between min-h-[100px]">
                   <span className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base">{area.name}</span>
                   <div className="mt-3">
                      <LevelBadge level={area.level} label={area.label} />
                   </div>
                </div>
             ))}
          </div>
        </div>
        
        {/* Row 2: Featured Event */}
        <div className="md:col-span-2 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col relative group transition-colors min-h-[320px]">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#35308f" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.3C83.1,16.2,73.1,29,63.1,40.3C53.1,51.6,43.1,61.4,31.2,67.7C19.3,74,5.5,76.8,-7.4,75.4C-20.3,74,-40.1,68.4,-54.6,58.3C-69.1,48.2,-78.3,33.6,-81.4,17.9C-84.5,2.2,-81.5,-14.6,-73.4,-29.4C-65.3,-44.2,-52.1,-57,-38.3,-63.7C-24.5,-70.4,-10.1,-71,3.4,-76.4L16.9,-81.8Z" transform="translate(100 100)" />
             </svg>
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
            <div className="mb-4">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md shadow-pink-200 dark:shadow-none">Upcoming Event</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
              Cloud and DevOps Basics
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">December 10, 2025 | 1:00 PM - 5:00 PM</p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
              This short course provides an introductory overview of cloud computing and DevOps principles. Participants will learn about service models.
            </p>

            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
               <Link to="/events" className="text-slate-900 dark:text-white font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                  View Calendar <ArrowUpRight size={18} />
               </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Announcements */}
        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center justify-center text-slate-400 shadow-sm min-h-[320px]">
           <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📢</span>
           </div>
           <p className="font-medium text-lg text-slate-600 dark:text-slate-300">No recent announcements</p>
           <Link to="/announcements" className="mt-4 text-[#35308f] dark:text-indigo-400 text-sm font-bold hover:underline">
              Check all updates
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
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/30 overflow-hidden transition-colors duration-300">
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
