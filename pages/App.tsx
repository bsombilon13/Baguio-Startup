import React, { createContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Sidebar from '../components/Navbar';
import Events from './Events';
import Ecosystem from './Ecosystem';
import ActiveStartups from './ActiveStartups';
import Resources from './Resources';
import Announcements from './Announcements';
import CommunityNews from './CommunityNews';
import SDGPage from './SDG';
import RegionModal, { RegionData } from '../components/RegionModal';
import { ThemeContextType, Startup, Organization, Event, Opportunity, Resource } from '../types';
import { ArrowUpRight, ArrowRight, Sparkles, Quote, Loader2, Newspaper, MapPin, Clock, Trophy, Globe, TrendingUp } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { activeStartups, ecosystemOrgs, events, opportunities, resources, communityNews } from '../data';
import { format, isSameDay, isWithinInterval } from 'date-fns';

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  removeItem: () => {},
  addItem: () => {},
  data: { startups: [], ecosystem: [], events: [], opportunities: [], resources: [] }
});

const Dashboard = () => {
  const [aiAdvice, setAiAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

  const { data } = React.useContext(ThemeContext);

  const sortedEvents = [...data.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const nextEvent = sortedEvents[0];
  const latestNews = communityNews[0];

  const today = new Date();
  const todaysEvents = data.events.filter(event => {
    const start = new Date(event.date);
    start.setHours(0,0,0,0);
    if (event.endDate) {
      const end = new Date(event.endDate);
      end.setHours(23,59,59,999);
      return isWithinInterval(today, { start, end });
    }
    return isSameDay(today, start);
  });

  const quotes = [
    "Your vision is the roadmap to the future.",
    "Resilience is the currency of the startup world.",
    "The best way to predict the future is to create it.",
    "Dream big. Start small. But most of all, start.",
    "Opportunities don't happen. You create them."
  ];

  useEffect(() => {
    const fetchAdvice = async () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setAiAdvice(randomQuote);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Generate a short, powerful, one-sentence piece of business advice for a startup founder who might be struggling. Focus on resilience, grit, and believing in their solution. Do not use quotes, just the advice. Tone: Encouraging, Professional, Visionary.",
        });
        if (response.text) setAiAdvice(response.text.trim());
      } catch (error) {
        console.log("Using offline quote");
      } finally {
        setLoadingAdvice(false);
      }
    };
    fetchAdvice();
  }, []);

  const scmmData: RegionData[] = [
    { name: 'Baguio City', level: 2, label: 'Foundational', description: "Center of Gravity for the Cordillera Startup Ecosystem.", ecosystemStatus: "Baguio City has established a foundational ecosystem with active support from local government ordinances and TBIs.", stats: { startups: "25+", enablers: "12", schools: "8" }, mapUrl: "https://maps.google.com/maps?q=Baguio+City,Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed" },
    { name: 'Abra', level: 1, label: 'Nascent', description: "Focus on agricultural innovation.", ecosystemStatus: "Abra is in the nascent stage primarily focusing on traditional industries.", stats: { startups: "3", enablers: "2", schools: "2" }, mapUrl: "https://maps.google.com/maps?q=Abra+Province,Philippines&t=&z=10&ie=UTF8&iwloc=&output=embed" },
    { name: 'Mt. Province', level: 1, label: 'Nascent', description: "Heritage-driven innovation hub.", ecosystemStatus: "Mountain Province leverages cultural heritage to drive innovation.", stats: { startups: "2", enablers: "1", schools: "1" }, mapUrl: "https://maps.google.com/maps?q=Mountain+Province,Philippines&t=&z=10&ie=UTF8&iwloc=&output=embed" },
    { name: 'Kalinga', level: 1, label: 'Nascent', description: "Rising potential in coffee technology.", ecosystemStatus: "Kalinga's ecosystem is taking shape around its strong coffee industry.", stats: { startups: "4", enablers: "2", schools: "1" }, mapUrl: "https://maps.google.com/maps?q=Kalinga+Province,Philippines&t=&z=10&ie=UTF8&iwloc=&output=embed" },
    { name: 'Apayao', level: 1, label: 'Nascent', description: "Exploring eco-tourism and agri-tech.", ecosystemStatus: "Apayao is in the very early stages of ecosystem development.", stats: { startups: "1", enablers: "1", schools: "1" }, mapUrl: "https://maps.google.com/maps?q=Apayao+Province,Philippines&t=&z=9&ie=UTF8&iwloc=&output=embed" },
    { name: 'Ifugao', level: 1, label: 'Nascent', description: "Integrating heritage conservation with digital.", ecosystemStatus: "Ifugao combines heritage conservation with modern innovation.", stats: { startups: "3", enablers: "2", schools: "1" }, mapUrl: "https://maps.google.com/maps?q=Ifugao+Province,Philippines&t=&z=10&ie=UTF8&iwloc=&output=embed" },
  ];

  const getLevelColor = (level: number) => {
    if (level === 1) return 'bg-slate-800 text-white border-slate-700 shadow-md';
    return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 border-emerald-200 dark:border-emerald-800';
  };

  const LevelBadge = ({ level, label, compact = false }: { level: number, label: string, compact?: boolean }) => (
    <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border flex items-center justify-center gap-2 w-fit ${getLevelColor(level)}`}>
      {compact ? `Lvl ${level}` : `Level ${level}: ${label}`}
    </div>
  );

  return (
    <div className="space-y-6 h-full flex flex-col pb-24">
      <header className="mb-6">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white transition-colors tracking-tight mb-4 leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 dark:from-emerald-400 dark:to-teal-300">Startup Network</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed max-w-3xl">
          The central innovation hub for the mountain region. Discover founders, enablers, and opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
        
        {/* Region Overview Section - Moved to Top */}
        <div className="md:col-span-4 space-y-4 md:space-y-6">
          <div className="bg-gradient-to-br from-[#1a4731] to-[#2f705a] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>
             </div>
             <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-white/20 mb-4 text-emerald-50">
                     Region Overview
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-2">Cordillera Administrative Region</h3>
                  <p className="text-emerald-100 font-medium max-w-2xl leading-relaxed text-lg">
                    The ecosystem is currently in a nascent stage, growing through community-led innovation and regional enablers.
                  </p>
                </div>
                <div className="flex flex-col items-end">
                   <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl font-black text-2xl border border-white/20 shadow-lg mb-2">Lvl 1</div>
                   <span className="text-white/80 font-black uppercase text-xs tracking-[0.2em]">Nascent</span>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             {scmmData.map((area) => (
                <button key={area.name} onClick={() => setSelectedRegion(area)} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-[1.75rem] shadow-sm hover:border-emerald-400 transition-all flex flex-col justify-between min-h-[120px] relative group text-left">
                   <span className="font-black text-slate-800 dark:text-slate-100 text-sm md:text-base leading-tight group-hover:text-emerald-600 transition-colors">{area.name}</span>
                   <div className="mt-auto"><LevelBadge level={area.level} label={area.label} compact={true} /></div>
                </button>
             ))}
          </div>
        </div>

        {/* PH Ecosystem Rankings Row */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <TrendingUp size={120} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-500 mb-3 flex items-center gap-1.5"><Globe size={12}/> SE Asia</span>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">6th</div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Regional Rank</span>
           </div>
           
           <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <Trophy size={120} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-500 mb-3 flex items-center gap-1.5"><Globe size={12}/> Global</span>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">64th</div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Rank</span>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                <MapPin size={120} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-rose-500 mb-3 flex items-center gap-1.5"><MapPin size={12}/> Local</span>
              <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">Unlisted</div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Baguio Rank</span>
           </div>

           <div className="bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-indigo-900 dark:to-indigo-950 rounded-[2rem] border border-slate-800 p-6 flex flex-col justify-between shadow-xl text-white group">
              <div>
                <h4 className="font-black text-sm uppercase tracking-wider mb-2">PH Ecosystem Overview</h4>
                <p className="text-[10px] text-indigo-200 font-medium leading-relaxed opacity-80">Track our national standing on StartupBlink.</p>
              </div>
              <a href="https://www.startupblink.com/startup-ecosystem/philippines?page=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all w-fit mt-4">
                View <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
           </div>
        </div>

        {/* Happening Now - Moved below region cards */}
        {todaysEvents.length > 0 && (
          <div className="md:col-span-4 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Sparkles size={120} />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </div>
                    <h2 className="text-lg font-black tracking-[0.2em] uppercase text-white/90">Happening Today</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {todaysEvents.map(event => (
                      <Link to="/events" key={event.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all group/card shadow-lg">
                          <div className="flex justify-between items-start mb-4">
                              <span className="bg-white/20 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                                <Clock size={12} /> {format(event.date, 'h:mm a')}
                              </span>
                          </div>
                          <h3 className="font-black text-xl leading-tight mb-4 group-hover/card:text-indigo-200 transition-colors">{event.title}</h3>
                          <div className="flex items-center gap-2 text-sm font-bold text-white/70 mt-auto">
                             <MapPin size={16} /> <span className="truncate">{event.location}</span>
                          </div>
                      </Link>
                   ))}
                </div>
             </div>
          </div>
        )}
        
        {latestNews && (
            <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative group min-h-[360px]">
                <div className="absolute inset-0">
                    <img src={latestNews.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end text-white">
                    <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 flex items-center gap-1 w-fit">
                        <Newspaper size={12} /> Top Story
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black leading-tight mb-3 line-clamp-2">{latestNews.title}</h2>
                    <p className="text-slate-200 text-sm mb-6 line-clamp-2 font-medium">{latestNews.excerpt}</p>
                    <Link to="/news" className="flex items-center gap-2 font-black text-sm hover:text-rose-400 transition-colors group-hover:gap-3 uppercase tracking-widest">
                        Read Story <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        )}

        <div className={`md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row relative group min-h-[360px] ${!latestNews ? 'md:col-start-1' : ''}`}>
          <div className="p-8 flex-1 flex flex-col relative z-10 order-2 md:order-1">
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 w-fit">Upcoming Event</span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-2">
              {nextEvent ? nextEvent.title : 'Stay Tuned'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-6">
              {nextEvent ? `${format(nextEvent.date, 'MMM d, yyyy')} • ${format(nextEvent.date, 'h:mm a')}` : 'More events coming soon'}
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
               <Link to="/events" className="text-slate-900 dark:text-white font-black flex items-center gap-2 hover:gap-3 transition-all text-xs uppercase tracking-widest group-hover:text-emerald-600">
                  View Details <ArrowUpRight size={18} />
               </Link>
            </div>
          </div>
          <div className="md:w-[45%] h-48 md:h-auto relative order-1 md:order-2">
             {nextEvent && <img src={nextEvent.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
          </div>
        </div>

        <div className="md:col-span-1 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-[2.5rem] p-8 text-white shadow-lg flex flex-col relative overflow-hidden min-h-[360px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8 text-emerald-100">
               <Sparkles size={18} className="text-emerald-200 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">Founder's Insight</span>
            </div>
            <div className="flex-1 flex flex-col justify-center">
               <Quote size={40} className="text-white/10 mb-4" />
               {loadingAdvice ? <Loader2 size={24} className="animate-spin mx-auto" /> : (
                 <p className="text-xl font-black leading-relaxed italic text-center drop-shadow-sm">"{aiAdvice}"</p>
               )}
            </div>
            <div className="mt-auto pt-6 text-white/50 text-[9px] font-black uppercase tracking-widest text-center">AI Insights powered by Gemini</div>
          </div>
        </div>

        {/* StartupBlink Ecosystem Map Card */}
        <div className="md:col-span-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center text-center shadow-sm min-h-[360px] group">
           <div className="w-20 h-20 rounded-[1.75rem] overflow-hidden mb-6 shadow-xl bg-white border border-slate-100 flex items-center justify-center p-3 transform group-hover:rotate-6 transition-transform">
             <img src="https://somalia.startupblink.com/_next/static/media/startuplink.fe5810b1.svg" alt="" className="w-full h-full object-contain" />
           </div>
           <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Ecosystem Map</h3>
           <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium leading-relaxed">Put your startup on the global stage. Join the official Cordillera index.</p>
           <a href="https://www.startupblink.com/" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2">
             Join Map <ArrowRight size={14} />
           </a>
        </div>

        <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between shadow-sm min-h-[360px]">
           <div>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-600 text-xl">📢</div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xl uppercase tracking-wider">Announcements</h4>
               </div>
               <div className="space-y-4">
                  {data.opportunities.slice(0, 3).map((opp) => (
                    <div key={opp.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group/ann hover:border-indigo-400 transition-all">
                      <div className="flex justify-between items-start mb-2">
                           <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700">{opp.type}</span>
                           <span className="text-[10px] font-bold text-slate-400">{opp.deadline}</span>
                      </div>
                      <h5 className="font-black text-slate-800 dark:text-slate-100 leading-tight group-hover/ann:text-indigo-600 transition-colors line-clamp-1">{opp.title}</h5>
                    </div>
                  ))}
               </div>
           </div>
           <Link to="/announcements" className="mt-8 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest hover:underline text-center flex items-center justify-center gap-2 py-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              All Announcements <ArrowRight size={14}/>
           </Link>
        </div>
      </div>
      {selectedRegion && <RegionModal region={selectedRegion} onClose={() => setSelectedRegion(null)} getLevelColor={getLevelColor} />}
    </div>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Persistence logic for the unified management state
  const getInitialManagerData = (key: string, base: any[]) => {
    const stored = localStorage.getItem(`community_data_${key}`);
    if (!stored) return base;
    try {
      const parsed = JSON.parse(stored);
      // Map dates back to actual Date objects for events
      if (key === 'events') {
        return [...parsed.map((e: any) => ({ ...e, date: new Date(e.date), endDate: e.endDate ? new Date(e.endDate) : undefined })), ...base];
      }
      return [...parsed, ...base];
    } catch (e) {
      return base;
    }
  };

  const [appData, setAppData] = useState({
    startups: getInitialManagerData('startups', activeStartups),
    ecosystem: getInitialManagerData('ecosystem', ecosystemOrgs),
    events: getInitialManagerData('events', events),
    opportunities: getInitialManagerData('opportunities', opportunities),
    resources: getInitialManagerData('resources', resources)
  });

  const updateStore = (type: string, list: any[]) => {
    const key = `community_data_${type === 'ecosystem' ? 'ecosystem' : type + 's'}`;
    localStorage.setItem(key, JSON.stringify(list));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
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

  const removeItem = (type: string, id: string) => {
    const listKey = type === 'ecosystem' ? 'ecosystem' : type + 's';
    const newList = (appData as any)[listKey].filter((item: any) => item.id !== id);
    setAppData(prev => ({
      ...prev,
      [listKey]: newList
    }));
    updateStore(type, newList);
  };

  const addItem = (type: string, item: any) => {
    const listKey = type === 'ecosystem' ? 'ecosystem' : type + 's';
    const sanitizedItem = { ...item };
    if (type === 'event' && typeof sanitizedItem.date === 'string') {
      sanitizedItem.date = new Date(sanitizedItem.date);
    }
    const newList = [sanitizedItem, ...(appData as any)[listKey]];
    setAppData(prev => ({
      ...prev,
      [listKey]: newList
    }));
    updateStore(type, newList);
  };

  return (
    <ThemeContext.Provider value={{ 
        isDarkMode, 
        toggleTheme,
        removeItem,
        addItem,
        data: appData
    }}>
      <Router>
        <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
          <Sidebar />
          <main className="flex-1 h-full overflow-y-auto w-full ml-0 md:ml-20 lg:ml-64 transition-all duration-300">
            <div className="w-full h-full p-4 md:p-8 pb-24 md:pb-8 max-w-[1920px] mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/startups" element={<ActiveStartups />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/news" element={<CommunityNews />} />
                <Route path="/sdg" element={<SDGPage />} />
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
