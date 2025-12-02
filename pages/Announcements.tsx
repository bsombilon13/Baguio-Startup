
import React, { useState } from 'react';
import { Megaphone, DollarSign, Lightbulb } from 'lucide-react';

const Announcements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Funding & Grants');

  const tabs = [
    { name: 'Funding & Grants', icon: DollarSign },
    { name: 'Opportunities', icon: Lightbulb },
  ];

  return (
    <div className="space-y-6 pb-24 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors mb-2">
            Announcements
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
            Grants, accelerators, and ecosystem opportunities.
          </p>
        </div>
        <button className="bg-[#35308f] hover:bg-[#2a2670] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center gap-2 w-fit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35308f]">
          <Megaphone size={18} />
          Submit
        </button>
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

      <div className="flex-1 rounded-[2.5rem] border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center p-12 text-center min-h-[400px]">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400 dark:text-slate-500">
          <Megaphone size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No updates yet</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm">
          Check back later for new {activeTab.toLowerCase().replace('&', 'and')}.
        </p>
      </div>
    </div>
  );
};

export default Announcements;