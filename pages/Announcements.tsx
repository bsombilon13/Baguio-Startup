
import React, { useState } from 'react';
import { Megaphone, DollarSign, Lightbulb, Trophy, ExternalLink, Info, Swords } from 'lucide-react';
import { opportunities } from '../data';
import { Opportunity } from '../types';

const Announcements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Funding & Grants');

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
        // Fallback for general opportunities not covered above, if any, or catch-all
        return opp.type !== 'Grant' && opp.type !== 'Investment' && opp.type !== 'Accelerator' && opp.type !== 'Awards' && opp.type !== 'Competition';
    }
  });

  return (
    <div className="space-y-6 pb-24 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
            Announcements
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            Grants, accelerators, and ecosystem opportunities.
          </p>
        </div>
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-1 overflow-x-auto no-scrollbar" role="tablist" aria-label="Announcement Categories">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            role="tab"
            aria-selected={activeTab === tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-t-lg font-bold text-sm whitespace-nowrap transition-all border-b-2 focus:outline-none focus:ring-2 focus:ring-[#35308f]
              ${activeTab === tab.name 
                ? 'border-[#35308f] text-[#35308f] dark:border-indigo-400 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-800/50' 
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}
            `}
          >
            <tab.icon size={16} />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredOpportunities.map((opp) => (
          <div 
            key={opp.id}
            className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-700/50 hover:shadow-xl hover:shadow-amber-100/50 dark:hover:shadow-none rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col md:flex-row"
          >
            {opp.bannerUrl && (
               <div className="w-full md:w-48 h-48 md:h-auto md:min-h-[12rem] shrink-0 relative border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 overflow-hidden">
                  <img src={opp.bannerUrl} alt={opp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               </div>
            )}
            <div className="p-6 flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 h-full">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`
                      px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide
                      ${opp.type === 'Grant' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                      ${opp.type === 'Investment' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                      ${opp.type === 'Accelerator' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                      ${opp.type === 'Awards' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                      ${opp.type === 'Competition' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : ''}
                    `}>
                      {opp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{opp.title}</h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{opp.description}</p>
                  <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">By {opp.organization}</div>
                </div>

                <div className="flex flex-col gap-4 md:min-w-[200px] justify-start md:items-end">
                  <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-medium">
                          <span className="text-slate-400 uppercase text-xs font-bold">Value:</span> {opp.amount}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-medium">
                          <span className="text-slate-400 uppercase text-xs font-bold">Deadline:</span> {opp.deadline}
                      </div>
                  </div>
                  
                  <div className="flex gap-2 w-full md:w-auto mt-2">
                      {opp.moreDetailsLink && (
                          <a 
                              href={opp.moreDetailsLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          >
                              <Info size={16} /> Details
                          </a>
                      )}
                      {opp.link ? (
                          <a 
                              href={opp.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#35308f] text-white font-bold text-sm hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 dark:shadow-none"
                          >
                              Submit <ExternalLink size={16} />
                          </a>
                      ) : (
                          <button disabled className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 cursor-not-allowed self-end">
                              <ExternalLink size={20} />
                          </button>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="flex-1 rounded-[2.5rem] border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400 dark:text-slate-500">
            <Megaphone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No updates yet</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            Check back later for new {activeTab.toLowerCase().replace('&', 'and')}.
            </p>
        </div>
      )}
    </div>
  );
};

export default Announcements;
