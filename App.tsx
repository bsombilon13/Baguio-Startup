import React, { createContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from './components/Navbar';
import Events from './pages/Events';
import Ecosystem from './pages/Ecosystem';
import ActiveStartups from './pages/ActiveStartups';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';
import { ThemeContextType } from './types';
import { Users, TrendingUp, ArrowUpRight, Calendar } from 'lucide-react';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#35308f] dark:to-indigo-400">Baguio Startup Network</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl text-lg">
          The central hub for the mountain region's startup ecosystem. Connect, attend, and grow.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(140px,auto)]">
        
        {/* Featured Event - Top Left (2x2) */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col relative group transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
             <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#35308f" d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.8,2.3C83.1,16.2,73.1,29,63.1,40.3C53.1,51.6,43.1,61.4,31.2,67.7C19.3,74,5.5,76.8,-7.4,75.4C-20.3,74,-40.1,68.4,-54.6,58.3C-69.1,48.2,-78.3,33.6,-81.4,17.9C-84.5,2.2,-81.5,-14.6,-73.4,-29.4C-65.3,-44.2,-52.1,-57,-38.3,-63.7C-24.5,-70.4,-10.1,-71,3.4,-76.4L16.9,-81.8Z" transform="translate(100 100)" />
             </svg>
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
            <div className="mb-4">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-md shadow-pink-200 dark:shadow-none">Upcoming Event</span>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
              Cloud and DevOps Basics
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">December 10, 2025 | 1:00 PM - 5:00 PM</p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
              This short course provides an introductory overview of cloud computing and DevOps principles. Participants will learn about service models (IaaS, PaaS, SaaS), the advantages of cloud adoption, and collaborative practices.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-8 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
               <div>
                  <div className="text-slate-400 uppercase text-[10px] mb-1">Venue/Platform</div>
                  <div>Zoom</div>
               </div>
               <div>
                  <div className="text-slate-400 uppercase text-[10px] mb-1">Duration</div>
                  <div>4 hours</div>
               </div>
               <div>
                  <div className="text-slate-400 uppercase text-[10px] mb-1">Modality</div>
                  <div>Online</div>
               </div>
               <div>
                  <div className="text-slate-400 uppercase text-[10px] mb-1">Level</div>
                  <div>Basic</div>
               </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
               <Link to="/events" className="text-slate-900 dark:text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View Calendar <ArrowUpRight size={18} />
               </Link>
               <div className="hidden md:block">
                  {/* Mock QR */}
                  <div className="w-16 h-16 bg-slate-900 dark:bg-white rounded-lg opacity-10"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Stats Card 1 (Purple/Brand Color) */}
        <div className="bg-[#35308f] rounded-[2rem] p-6 text-white flex flex-col justify-between shadow-xl shadow-indigo-200 dark:shadow-none transition-transform hover:-translate-y-1 duration-300">
          <Users size={28} className="opacity-80" />
          <div>
            <div className="text-4xl font-bold mb-1">120+</div>
            <div className="text-indigo-100 font-medium text-sm">Active Founders</div>
          </div>
        </div>

        {/* Stats Card 2 (Teal) */}
        <div className="bg-[#10b981] rounded-[2rem] p-6 text-white flex flex-col justify-between shadow-xl shadow-emerald-200 dark:shadow-none transition-transform hover:-translate-y-1 duration-300">
          <TrendingUp size={28} className="opacity-80" />
          <div>
            <div className="text-4xl font-bold mb-1">$2M</div>
            <div className="text-emerald-50 font-medium text-sm">Raised this Year</div>
          </div>
        </div>

        {/* Announcements (Wide White Card) */}
        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-8 flex items-center justify-center text-slate-400 shadow-sm">
           <div className="text-center">
             <p className="font-medium">No recent announcements</p>
           </div>
        </div>

        {/* Spotlight Card */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="bg-[#a855f7] h-24 flex items-center justify-center text-6xl font-bold text-white tracking-tighter">
             BN
          </div>
          <div className="p-6">
            <span className="text-orange-500 font-bold text-[10px] tracking-wider uppercase mb-1 block">Spotlight</span>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Baguio Startup Network</h3>
            <Link to="/ecosystem" className="w-full block text-center bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-2 rounded-xl transition-colors text-sm border border-slate-200 dark:border-slate-700">
               Visit Profile
            </Link>
          </div>
        </div>

        {/* Host Event Action */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-indigo-200 dark:hover:border-indigo-900 hover:shadow-md transition-all">
           <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
              <Calendar size={32} />
           </div>
           <span className="font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#35308f] dark:group-hover:text-indigo-400">Host Event</span>
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
          {/* Sidebar Component */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 h-full overflow-y-auto w-full">
            <div className="max-w-7xl mx-auto p-6 md:p-10 md:ml-64 lg:ml-64 pb-24 md:pb-10">
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
