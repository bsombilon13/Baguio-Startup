
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { DollarSign, Lightbulb, Trophy, Swords, Building2, Calendar, ArrowRight, Sparkles, Zap, Timer, ChevronRight } from 'lucide-react';
import { Opportunity } from '../types';
import AnnouncementModal from '../components/AnnouncementModal';

const Announcements: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Funding & Grants');
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  const tabs = [
    { name: 'Funding & Grants', icon: DollarSign, color: 'text-emerald-500' },
    { name: 'Opportunities', icon: Lightbulb, color: 'text-amber-500' },
    { name: 'Competitions', icon: Swords, color: 'text-rose-500' },
    { name: 'Awards', icon: Trophy, color: 'text-indigo-500' },
  ];

  const getFilteredOpportunities = (tabName: string) => {
    return data.opportunities.filter(opp => {
      if (tabName === 'Funding & Grants') return opp.type === 'Grant' || opp.type === 'Investment' || opp.type === 'Accelerator';
      else if (tabName === 'Awards') return opp.type === 'Awards';
      else if (tabName === 'Competitions') return opp.type === 'Competition';
      else return opp.type !== 'Grant' && opp.type !== 'Investment' && opp.type !== 'Accelerator' && opp.type !== 'Awards' && opp.type !== 'Competition';
    });
  };

  const featuredOpp = data.opportunities[0];

  return (
    <div className="space-y-12 pb-32 max-w-[1400px] mx-auto">
      {/* Dynamic Hero Section */}
      <header className="relative py-12 px-8 md:px-16 rounded-[3rem] bg-gradient-to-br from-[#35308f] via-[#4c45c7] to-indigo-900 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Sparkles size={400} className="text-white" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
               <Zap size={14} className="fill-emerald-400" /> Active Calls
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Vision</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-xl font-medium leading-relaxed">
              Access the region's most exclusive grants, accelerator programs, and startup competitions. 
            </p>
          </div>
          
          {featuredOpp && (
            <div 
              onClick={() => setSelectedOpp(featuredOpp)}
              className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest">New Spotlight</span>
                <Timer size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-1">{featuredOpp.title}</h3>
              <p className="text-indigo-200 text-sm line-clamp-2 mb-6 font-medium">{featuredOpp.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-black text-emerald-300 uppercase tracking-widest">{featuredOpp.amount}</span>
                <span className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-3 transition-all">View Call <ArrowRight size={16}/></span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navigation & Tabs */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-3 rounded-[2rem] shadow-xl mx-4 md:mx-0">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => {
              const count = getFilteredOpportunities(tab.name).length;
              const isActive = activeTab === tab.name;
              return (
                <button 
                  key={tab.name} 
                  onClick={() => setActiveTab(tab.name)} 
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black text-xs md:text-sm whitespace-nowrap transition-all duration-300 border-2 ${
                    isActive 
                    ? 'bg-[#35308f] text-white border-[#35308f] shadow-lg shadow-indigo-200 dark:shadow-none' 
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <tab.icon size={18} className={isActive ? 'text-white' : tab.color} />
                  {tab.name}
                  <span className={`ml-1 px-2 py-0.5 rounded-lg text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {getFilteredOpportunities(activeTab).map((opp) => (
          <div 
            key={opp.id} 
            onClick={() => setSelectedOpp(opp)} 
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col relative"
          >
             <div className="w-full h-48 relative bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                  {opp.bannerUrl ? (
                    <img src={opp.bannerUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      <Building2 className="text-slate-300 dark:text-slate-700" size={64} />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl backdrop-blur-md border border-white/20 bg-white/90 text-[#35308f]`}>
                      {opp.type}
                    </span>
                  </div>
             </div>
             <div className="p-8 flex flex-col flex-1 bg-white dark:bg-slate-900">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {opp.title}
                </h3>
                <div className="space-y-4 mt-auto">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                        <Building2 size={16} className="text-indigo-400" />
                      </div>
                      <span className="truncate">{opp.organization}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Value</span>
                        <div className="font-black text-emerald-600 dark:text-emerald-400 text-sm truncate">{opp.amount}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deadline</span>
                        <div className="font-black text-rose-500 text-sm truncate">{opp.deadline}</div>
                      </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">View Application</span>
                   <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover:bg-[#35308f] group-hover:text-white transition-all">
                      <ChevronRight size={18} />
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {getFilteredOpportunities(activeTab).length === 0 && (
         <div className="py-32 text-center bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800 mx-4 md:mx-0">
            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6">
               <Zap size={40} className="text-slate-200" />
            </div>
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">No Active Calls</h3>
            <p className="text-slate-500 mt-2 font-medium">Check back soon for new ecosystem opportunities.</p>
         </div>
      )}

      {selectedOpp && <AnnouncementModal opportunity={selectedOpp} onClose={() => setSelectedOpp(null)} />}
    </div>
  );
};

export default Announcements;
