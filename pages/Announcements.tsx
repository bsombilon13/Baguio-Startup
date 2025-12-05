
import React, { useState } from 'react';
import { Megaphone, DollarSign, Lightbulb, Trophy, Swords, Building2, Calendar } from 'lucide-react';
import { opportunities } from '../data';
import { Opportunity } from '../types';
import AnnouncementModal from '../components/AnnouncementModal';

const Announcements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Funding & Grants');
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  const tabs = [
    { name: 'Funding & Grants', icon: DollarSign },
    { name: 'Opportunities', icon: Lightbulb },
    { name: 'Competitions', icon: Swords },
    { name: 'Awards', icon: Trophy },
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    if (activeTab === 'Funding & Grants') {
        return opp.type === 'Grant' || opp.type === 'Investment' || opp.type === 'Accelerator';
    } else if (activeTab === 'Awards') {
        return opp.type === 'Awards';
    } else if (activeTab === 'Competitions') {
        return opp.type === 'Competition';
    } else {
        return opp.type !== 'Grant' && opp.type !== 'Investment' && opp.type !== 'Accelerator' && opp.type !== 'Awards' && opp.type !== 'Competition';
    }
  });

  return (
    <div className="space-y-6 pb-24 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 md:mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
            Announcements
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            Grants, accelerators, and ecosystem opportunities.
          </p>
        </div>
      </div>

      {/* Category Tabs - Scrollable Container */}
      {/* Added relative z-10 to ensure it sits above empty state/grid if any overlap occurs */}
      <div className="w-full overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0 relative z-10">
        <div className="flex items-center gap-2 min-w-max" role="tablist" aria-label="Announcement Categories">
            {tabs.map((tab) => (
            <button
                key={tab.name}
                role="tab"
                aria-selected={activeTab === tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all border focus:outline-none focus:ring-2 focus:ring-[#35308f]
                ${activeTab === tab.name 
                    ? 'bg-[#35308f] text-white border-[#35308f] shadow-md shadow-indigo-200 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}
                `}
            >
                <tab.icon size={16} />
                {tab.name}
            </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 relative z-0">
        {filteredOpportunities.map((opp) => (
          <div 
            key={opp.id}
            onClick={() => setSelectedOpp(opp)}
            className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg dark:hover:shadow-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col h-full"
          >
             {/* Small Card Banner */}
             <div className="w-full h-24 md:h-32 relative bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                  {opp.bannerUrl ? (
                    <img src={opp.bannerUrl} alt={opp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800">
                        <Building2 className="text-slate-300 dark:text-slate-700" size={32} />
                    </div>
                  )}
                  
                  {/* Floating Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`
                        px-2 py-0.5 rounded-md text-[8px] md:text-[10px] font-extrabold uppercase tracking-wide shadow-sm border border-white/20
                        ${opp.type === 'Grant' ? 'bg-emerald-100 text-emerald-800' : ''}
                        ${opp.type === 'Investment' ? 'bg-blue-100 text-blue-800' : ''}
                        ${opp.type === 'Accelerator' ? 'bg-purple-100 text-purple-800' : ''}
                        ${opp.type === 'Awards' ? 'bg-amber-100 text-amber-800' : ''}
                        ${opp.type === 'Competition' ? 'bg-orange-100 text-orange-800' : ''}
                        ${opp.type === 'Call for Experts' ? 'bg-cyan-100 text-cyan-800' : ''}
                        `}>
                        {opp.type}
                    </span>
                  </div>
             </div>

             {/* Small Card Content */}
             <div className="p-3 md:p-5 flex flex-col flex-1">
                <h3 className="text-xs md:text-base font-bold text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight line-clamp-2 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
                    {opp.title}
                </h3>
                
                <div className="mt-auto pt-2 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400">
                         <Building2 size={10} className="md:w-3 md:h-3" />
                         <span className="truncate">{opp.organization}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
                        <Calendar size={10} className="md:w-3 md:h-3" />
                        <span>{opp.deadline}</span>
                    </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="w-full rounded-[2.5rem] border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center p-8 md:p-12 text-center min-h-[300px] md:min-h-[400px] relative z-0">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400 dark:text-slate-500">
            <Megaphone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No updates yet</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            Check back later for new {activeTab.toLowerCase().replace('&', 'and')}.
            </p>
        </div>
      )}

      {selectedOpp && (
        <AnnouncementModal opportunity={selectedOpp} onClose={() => setSelectedOpp(null)} />
      )}
    </div>
  );
};

export default Announcements;
