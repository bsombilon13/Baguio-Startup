
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
    <div className="space-y-8 pb-32 max-w-[1600px] mx-auto">
      {/* Dynamic Hero Section - Smaller Version */}
      <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#35308f] via-indigo-800 to-indigo-950 p-6 md:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
               <Sparkles size={12} className="animate-pulse" /> The Network
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              A Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Highland</span> Ecosystem
            </h1>
            <p className="text-base md:text-lg text-indigo-100 max-w-xl font-medium leading-relaxed opacity-90">
              Connecting enablers, mentors, and organizations across the Cordilleras. 
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <button 
                  onClick={handleJoinClick} 
                  className="group flex items-center gap-2 bg-white text-[#35308f] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-lg hover:scale-105 active:scale-95"
               >
                 <ExternalLink size={16} /> Get Networked
               </button>
               <div className="flex -space-x-3 items-center">
                  {data.ecosystem.slice(0, 4).map(org => (
                    <div key={org.id} className="w-10 h-10 rounded-full border-2 border-indigo-800 bg-white overflow-hidden shadow-md">
                       <img src={org.logoUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-indigo-800 bg-indigo-700 flex items-center justify-center text-[9px] font-black shadow-md">
                    +{data.ecosystem.length - 4}
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-3xl text-center">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 text-emerald-400">
                   <Users size={16} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white">{data.ecosystem.length}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-emerald-400/80">Partners</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-3xl text-center">
                <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 text-blue-400">
                   <Building2 size={16} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white">{filters.length - 1}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-blue-400/80">Sectors</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-3xl text-center">
                <div className="w-8 h-8 bg-rose-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 text-rose-400">
                   <Briefcase size={16} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white">50+</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-rose-400/80">Projects</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-3xl text-center">
                <div className="w-8 h-8 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 text-amber-400">
                   <Globe size={16} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white">6</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-amber-400/80">Provinces</div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Search and Filters Bar */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-lg space-y-3 mx-4 md:mx-0">
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search ecosystem..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-11 pr-4 py-3 rounded-xl border-0 bg-slate-100 dark:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20 transition-all font-medium text-sm" 
            />
          </div>
          <div className="flex gap-3 w-full lg:w-auto shrink-0">
            <div className="relative flex-1 lg:w-40">
               <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} 
                className="w-full appearance-none bg-slate-100 dark:bg-slate-800 border-0 text-slate-700 dark:text-slate-200 py-3 pl-4 pr-10 rounded-xl font-black text-xs focus:outline-none focus:ring-4 focus:ring-indigo-500/20 cursor-pointer"
               >
                 <option value="asc">A-Z ALPHA</option>
                 <option value="desc">Z-A REVERSE</option>
               </select>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar px-1">
            {filters.map(filter => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)} 
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${activeFilter === filter ? 'bg-[#35308f] text-white border-[#35308f] shadow-md shadow-indigo-200 dark:shadow-none' : 'border-transparent bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {filter}
              </button>
            ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="space-y-12 px-4 md:px-0">
        {sectionsToRender.map((section) => {
          const sectionOrgs = data.ecosystem.filter(org => 
            org.types.includes(section as any) &&
            (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             org.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (sectionOrgs.length === 0) return null;

          const sortedSectionOrgs = [...sectionOrgs].sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

          return (
            <div key={section} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`flex items-center justify-between mb-6 p-4 rounded-2xl border-l-[8px] border ${getSectionHeaderStyle(section)} transition-all hover:scale-[1.005]`}>
                 <div className="space-y-0.5">
                    <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
                      {section}
                    </h2>
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Strategic Ecosystem Partners</p>
                 </div>
                 <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-xl text-sm font-black shadow-sm">
                   {sortedSectionOrgs.length}
                 </div>
              </div>

              <BentoGrid className="lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                {sortedSectionOrgs.map((org) => (
                  <BentoItem 
                    key={`${section}-${org.id}`} 
                    className="flex flex-col gap-4 bg-white dark:bg-slate-900 transition-all duration-300 relative group/card border-slate-200 dark:border-slate-800 p-5 rounded-[1.75rem] hover:-translate-y-1" 
                    onClick={() => setSelectedOrg(org)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800 bg-white shrink-0 group-hover/card:scale-105 transition-transform">
                        <img 
                          src={org.logoUrl} 
                          alt="" 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=random&size=128&bold=true`;
                          }}
                        />
                      </div>
                      <div className="p-2 rounded-xl transition-all bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover/card:bg-indigo-500 group-hover/card:text-white">
                        <ChevronDown size={14} className="-rotate-90 group-hover/card:rotate-0 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1 mb-2">
                         {org.types.map((type, index) => (
                           <span key={index} className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border shadow-xs ${getCategoryStyle(type)}`}>
                             {type}
                           </span>
                         ))}
                      </div>
                      <h3 className="font-black text-base md:text-lg text-slate-900 dark:text-slate-100 mb-1 truncate group-hover/card:text-[#35308f] dark:group-hover/card:text-indigo-400 transition-colors">
                        {org.name}
                      </h3>
                      <p className="text-[10px] md:text-xs leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2 font-medium">
                        {org.description}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between mt-auto">
                       <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div> Verified
                       </span>
                       <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider group-hover/card:underline">Profile</span>
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
