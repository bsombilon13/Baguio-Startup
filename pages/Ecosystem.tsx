
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Layers, ExternalLink, Users, Building2, Briefcase, Globe, Sparkles } from 'lucide-react';
import { Organization } from '../types';
import OrganizationModal from '../components/OrganizationModal';

const Ecosystem: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

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
      case 'Community': return 'text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-900/10';
      case 'Government': return 'text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10';
      case 'Academe': return 'text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10';
      case 'Incubator': return 'text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-900/10';
      case 'MSME': return 'text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-900/10';
      case 'Non-Profit': return 'text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10';
      case 'Workspace': return 'text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10';
      case 'Creatives': return 'text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800 bg-fuchsia-50/50 dark:bg-fuchsia-900/10';
      default: return 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10';
    }
  };

  const handleJoinClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeDDGTvd3-Xnpa65Y7rMFf0DrFQRrH1oot_lCQL_gLlB--9sA/viewform', '_blank');
  };

  const sectionsToRender = activeFilter === 'All' ? filters.filter(f => f !== 'All') : [activeFilter];

  return (
    <div className="space-y-12 pb-32 max-w-[1600px] mx-auto">
      {/* Dynamic Hero Section */}
      <section className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#35308f] via-indigo-800 to-indigo-950 p-8 md:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 blur-[100px] rounded-full -mb-32 -ml-32"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
               <Sparkles size={14} className="animate-pulse" /> The Network
            </div>
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
              A Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Highland</span> Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-xl font-medium leading-relaxed">
              Discover the enablers, mentors, and organizations building the future of the Cordillera region. 
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <button 
                  onClick={handleJoinClick} 
                  className="group flex items-center gap-3 bg-white text-[#35308f] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl hover:scale-105 active:scale-95"
               >
                 <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" /> Get Networked
               </button>
               <div className="flex -space-x-4">
                  {data.ecosystem.slice(0, 5).map(org => (
                    <div key={org.id} className="w-12 h-12 rounded-full border-4 border-indigo-800 bg-white overflow-hidden shadow-lg">
                       <img src={org.logoUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-indigo-800 bg-indigo-700 flex items-center justify-center text-[10px] font-black shadow-lg">
                    +{data.ecosystem.length - 5}
                  </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                   <Users size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{data.ecosystem.length}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400/80">Active Partners</div>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] text-center mt-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                   <Building2 size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{filters.length - 1}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-400/80">Sectors</div>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] text-center">
                <div className="w-12 h-12 bg-rose-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-rose-400">
                   <Briefcase size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">50+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-rose-400/80">Projects</div>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] text-center mt-8">
                <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-400">
                   <Globe size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">6</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-400/80">Provinces</div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Search and Filters Bar */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-4 rounded-3xl shadow-xl space-y-4 mx-4 md:mx-0">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name, category, or keyword..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-slate-100 dark:bg-slate-900 focus:ring-4 focus:ring-indigo-500/20 transition-all font-medium" 
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto shrink-0">
            <div className="relative flex-1 lg:w-48">
               <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} 
                className="w-full appearance-none bg-slate-100 dark:bg-slate-900 border-0 text-slate-700 dark:text-slate-200 py-4 pl-5 pr-12 rounded-2xl font-black text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
               >
                 <option value="asc">A-Z ALPHA</option>
                 <option value="desc">Z-A REVERSE</option>
               </select>
               <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar px-1">
            {filters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)} 
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${activeFilter === filter ? 'bg-[#35308f] text-white border-[#35308f] shadow-lg shadow-indigo-200 dark:shadow-none' : 'border-transparent bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {filter}
              </button>
            ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="space-y-20 px-4 md:px-0">
        {sectionsToRender.map((section) => {
          const sectionOrgs = data.ecosystem.filter(org => 
            org.types.includes(section as any) &&
            (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             org.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (sectionOrgs.length === 0) return null;

          const sortedSectionOrgs = [...sectionOrgs].sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

          return (
            <div key={section} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className={`flex items-center justify-between mb-8 p-6 rounded-[2rem] border-l-[12px] border ${getSectionHeaderStyle(section)} transition-all hover:scale-[1.01]`}>
                 <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-3">
                      {section}
                    </h2>
                    <p className="text-sm font-bold opacity-70">Strategic enablers for innovation</p>
                 </div>
                 <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl text-lg font-black shadow-sm">
                   {sortedSectionOrgs.length}
                 </div>
              </div>

              <BentoGrid className="lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {sortedSectionOrgs.map((org) => (
                  <BentoItem 
                    key={`${section}-${org.id}`} 
                    className="flex flex-col gap-5 bg-white dark:bg-slate-900 transition-all duration-300 relative group/card border-slate-200 dark:border-slate-800 p-6 rounded-[2.5rem] hover:-translate-y-2" 
                    onClick={() => setSelectedOrg(org)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 rounded-[1.75rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-white shrink-0 group-hover/card:scale-110 transition-transform duration-500">
                        <img 
                          src={org.logoUrl} 
                          alt="" 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=random&size=128&bold=true`;
                          }}
                        />
                      </div>
                      <div className="p-3 rounded-2xl transition-all bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover/card:bg-indigo-500 group-hover/card:text-white">
                        <ChevronDown size={18} className="-rotate-90 group-hover/card:rotate-0 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                         {org.types.map((type, index) => (
                           <span key={index} className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-xs ${getCategoryStyle(type)}`}>
                             {type}
                           </span>
                         ))}
                      </div>
                      <h3 className="font-black text-lg md:text-xl text-slate-900 dark:text-slate-100 mb-2 truncate group-hover/card:text-[#35308f] dark:group-hover/card:text-indigo-400 transition-colors">
                        {org.name}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3 font-medium">
                        {org.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between mt-auto">
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Verified
                       </span>
                       <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 group-hover/card:underline">DETAILS</span>
                    </div>
                  </BentoItem>
                ))}
              </BentoGrid>
            </div>
          );
        })}
      </div>

      {selectedOrg && <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />}
    </div>
  );
};

export default Ecosystem;
