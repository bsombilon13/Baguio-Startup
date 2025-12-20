
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Filter, Layers, ArrowRight, MessageCircle, Trash2, Plus } from 'lucide-react';
import { Organization } from '../types';
import OrganizationModal from '../components/OrganizationModal';
import ManagerFormModal from '../components/ManagerFormModal';

const Ecosystem: React.FC = () => {
  const { data, isManager, removeItem, addItem } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const filters = ['All', 'Community', 'Non-Profit', 'Government', 'Incubator', 'Academe', 'MSME', 'Workspace', 'Creatives'];

  const getCategoryStyle = (type: string) => {
    switch(type) {
      case 'Community': return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/50 dark:text-rose-200 dark:border-rose-700 font-bold';
      case 'Government': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700 font-bold';
      case 'Academe': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-700 font-bold';
      case 'Incubator': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-200 dark:border-orange-700 font-bold';
      case 'MSME': return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/50 dark:text-teal-200 dark:border-teal-700 font-bold';
      case 'Non-Profit': return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-200 dark:border-emerald-700 font-bold';
      case 'Workspace': return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 font-bold';
      case 'Creatives': return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-900/50 dark:text-fuchsia-200 dark:border-fuchsia-700 font-bold';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 font-bold';
    }
  };

  const getSectionHeaderStyle = (type: string) => {
    switch(type) {
      case 'Community': return 'text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'Government': return 'text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Academe': return 'text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Incubator': return 'text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      case 'MSME': return 'text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      case 'Non-Profit': return 'text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Workspace': return 'text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800';
      case 'Creatives': return 'text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800';
      default: return 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800';
    }
  };

  const sectionsToRender = activeFilter === 'All' ? filters.filter(f => f !== 'All') : [activeFilter];

  const totalResults = sectionsToRender.reduce((acc, section) => {
    return acc + data.ecosystem.filter(org => 
      org.types.includes(section as any) &&
      (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       org.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ).length;
  }, 0);

  return (
    <div className="space-y-6 pb-24">
      <div className="bg-gradient-to-br from-[#35308f] to-indigo-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl mb-8">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none"><Layers size={200} className="hidden md:block" /></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join the Network</h2>
            <p className="text-indigo-100 max-w-xl text-base md:text-lg">Are you a startup, enabler, or community builder in the Cordilleras? Connect with us.</p>
          </div>
          <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 bg-white text-[#35308f] px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg">
            <Plus size={20} /> {isManager ? 'Add Partner' : 'Join Network'}
          </button>
        </div>
      </div>

      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">The Ecosystem</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Partners, communities, and enablers driving innovation.</p>
      </div>
      
      <div className="flex flex-col gap-2 md:gap-4 py-2 transition-all">
        <div className="flex flex-row gap-2 md:gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-9 md:pl-12 pr-4 py-2 md:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#35308f] transition-all text-sm" />
          </div>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} className="appearance-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-2 md:py-3 px-4 rounded-xl font-medium focus:outline-none text-xs md:text-base">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filters.map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border text-xs md:text-sm font-bold whitespace-nowrap transition-all ${activeFilter === filter ? 'bg-[#35308f] text-white border-[#35308f]' : 'border-slate-200 bg-white dark:bg-slate-900 text-slate-500 hover:bg-slate-50'}`}>{filter}</button>
            ))}
        </div>
      </div>

      <div className="space-y-12">
        {sectionsToRender.map((section) => {
          const sectionOrgs = data.ecosystem.filter(org => 
            org.types.includes(section as any) &&
            (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             org.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (sectionOrgs.length === 0 && !isManager) return null;

          const sortedSectionOrgs = [...sectionOrgs].sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

          return (
            <div key={section} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`flex items-center gap-3 mb-4 pb-2 border-b ${getSectionHeaderStyle(section)}`}>
                 <h2 className="text-lg md:text-2xl font-bold tracking-tight">{section}</h2>
                 <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold px-2.5 py-1 rounded-full">{sortedSectionOrgs.length}</span>
              </div>

              <BentoGrid>
                {isManager && (
                   <div 
                    onClick={() => setIsAdding(true)}
                    className="flex flex-col items-center justify-center gap-2 p-6 rounded-3xl border-2 border-dashed border-indigo-100 bg-indigo-50/10 hover:bg-indigo-50 transition-all cursor-pointer h-full min-h-[160px]"
                   >
                     <Plus className="text-indigo-400" />
                     <span className="text-[10px] font-black uppercase text-indigo-400 tracking-wider">Add Partner</span>
                   </div>
                )}
                {sortedSectionOrgs.map((org) => (
                  <BentoItem key={`${section}-${org.id}`} className="flex flex-col gap-4 bg-white dark:bg-slate-900 transition-all duration-300 relative group" onClick={() => setSelectedOrg(org)}>
                    {isManager && (
                        <button 
                         onClick={(e) => { e.stopPropagation(); removeItem('ecosystem', org.id); }}
                         className="absolute top-2 right-2 p-1.5 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg z-20"
                        >
                           <Trash2 size={12} />
                        </button>
                    )}
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white shrink-0"><img src={org.logoUrl} alt="" className="w-full h-full object-cover" /></div>
                      <div className="p-1 md:p-2 rounded-full transition-colors bg-slate-50 dark:bg-slate-800 text-slate-400"><ChevronDown size={14} className="-rotate-90" /></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1 mb-2">
                         {org.types.map((type, index) => <span key={index} className={`px-1.5 py-0.5 rounded-md text-[8px] md:text-[10px] font-extrabold uppercase tracking-wider border shadow-sm ${getCategoryStyle(type)}`}>{type}</span>)}
                      </div>
                      <h3 className="font-bold text-sm md:text-lg text-slate-800 dark:text-slate-100 mb-1 truncate">{org.name}</h3>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">{org.description}</p>
                    </div>
                  </BentoItem>
                ))}
              </BentoGrid>
            </div>
          );
        })}
      </div>

      {isAdding && (
        <ManagerFormModal 
          type="ecosystem" 
          onClose={() => setIsAdding(false)} 
          onSave={(item) => { addItem('ecosystem', item); setIsAdding(false); }} 
        />
      )}
      {selectedOrg && <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />}
    </div>
  );
};

export default Ecosystem;
