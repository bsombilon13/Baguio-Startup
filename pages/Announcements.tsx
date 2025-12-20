
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Megaphone, DollarSign, Lightbulb, Trophy, Swords, Building2, Calendar, Trash2, Plus } from 'lucide-react';
import { Opportunity } from '../types';
import AnnouncementModal from '../components/AnnouncementModal';
import ManagerFormModal from '../components/ManagerFormModal';

const Announcements: React.FC = () => {
  const { data, isManager, removeItem, addItem } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('Funding & Grants');
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const tabs = [
    { name: 'Funding & Grants', icon: DollarSign },
    { name: 'Opportunities', icon: Lightbulb },
    { name: 'Competitions', icon: Swords },
    { name: 'Awards', icon: Trophy },
  ];

  const filteredOpportunities = data.opportunities.filter(opp => {
    if (activeTab === 'Funding & Grants') return opp.type === 'Grant' || opp.type === 'Investment' || opp.type === 'Accelerator';
    else if (activeTab === 'Awards') return opp.type === 'Awards';
    else if (activeTab === 'Competitions') return opp.type === 'Competition';
    else return opp.type !== 'Grant' && opp.type !== 'Investment' && opp.type !== 'Accelerator' && opp.type !== 'Awards' && opp.type !== 'Competition';
  });

  return (
    <div className="space-y-6 pb-24 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 md:mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">Announcements</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Grants, accelerators, and ecosystem opportunities.</p>
        </div>
        {isManager && (
            <button 
                onClick={() => setIsAdding(true)}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-all"
            >
                <Plus size={20} /> Add Entry
            </button>
        )}
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pb-2 relative z-10">
        <div className="flex items-center gap-2 min-w-max">
            {tabs.map((tab) => (
            <button key={tab.name} onClick={() => setActiveTab(tab.name)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm whitespace-nowrap transition-all border ${activeTab === tab.name ? 'bg-[#35308f] text-white border-[#35308f]' : 'bg-white dark:bg-slate-900 border-slate-200 text-slate-500'}`}><tab.icon size={16} />{tab.name}</button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 relative z-0">
        {isManager && (
          <div onClick={() => setIsAdding(true)} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/20 hover:bg-indigo-50 transition-all cursor-pointer h-full min-h-[200px]">
            <Plus size={24} className="text-indigo-400" />
            <span className="font-black text-indigo-400 uppercase tracking-widest text-[9px]">Add Opportunity</span>
          </div>
        )}
        {filteredOpportunities.map((opp) => (
          <div key={opp.id} onClick={() => setSelectedOpp(opp)} className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col h-full relative">
             {isManager && (
                 <button 
                  onClick={(e) => { e.stopPropagation(); removeItem('opportunity', opp.id); }}
                  className="absolute top-2 right-2 z-20 p-1.5 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                 >
                    <Trash2 size={12} />
                 </button>
              )}
             <div className="w-full h-24 md:h-32 relative bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                  {opp.bannerUrl ? <img src={opp.bannerUrl} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-800"><Building2 className="text-slate-300" size={32} /></div>}
                  <div className="absolute top-2 left-2"><span className={`px-2 py-0.5 rounded-md text-[8px] md:text-[10px] font-extrabold uppercase tracking-wide shadow-sm border border-white/20 bg-emerald-100 text-emerald-800`}>{opp.type}</span></div>
             </div>
             <div className="p-3 md:p-5 flex flex-col flex-1">
                <h3 className="text-xs md:text-base font-bold text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight line-clamp-2">{opp.title}</h3>
                <div className="mt-auto pt-2 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-medium text-slate-500"><Building2 size={10} /><span className="truncate">{opp.organization}</span></div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase"><Calendar size={10} /><span>{opp.deadline}</span></div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {isAdding && (
        <ManagerFormModal 
          type="opportunity" 
          onClose={() => setIsAdding(false)} 
          onSave={(item) => { addItem('opportunity', item); setIsAdding(false); }} 
        />
      )}
      {selectedOpp && <AnnouncementModal opportunity={selectedOpp} onClose={() => setSelectedOpp(null)} />}
    </div>
  );
};

export default Announcements;
