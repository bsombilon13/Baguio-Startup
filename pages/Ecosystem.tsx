import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Layers, ExternalLink, Users, Building2, Briefcase, Globe, Sparkles, Filter, Award, ChevronRight } from 'lucide-react';
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
    <div className="space-y-6 pb-32">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Ecosystem</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            Discover the organizations and enablers building the mountain startup landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-gradient-to-br from-[#35308f] to-[#5c56d6] rounded-[2rem] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000">
                    <Building2 size={180} />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4 text-white">
                            <Sparkles size={12} className="text-indigo-200 animate-pulse" /> Strategic Partners
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Connect with Enablers</h2>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                          Find the right incubator, government office, or community group to support your startup journey.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={handleJoinClick}
                        className="w-fit bg-white text-[#35308f] px-6 py-3 rounded-xl font-black text-sm hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                      >
                        <ExternalLink size={18} /> Get Listed
                      </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Directory Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Partners</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{data.ecosystem.length}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Sectors</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{filters.length - 1}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-[#35308f] dark:text-indigo-400 text-xs font-bold">
                        <Award size={14} /> Regional Network
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2">
                 <Filter size={12} /> Type:
              </span>
              {filters.map(filter => (
                 <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                       activeFilter === filter 
                       ? 'bg-slate-900 text-white border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:border-white' 
                       : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                 >
                    {filter}
                 </button>
              ))}
           </div>
           
           <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 border-t lg:border-t-0 border-slate-200 dark:border-slate-800 pt-3 lg:pt-0">
              <div className="relative flex-1 lg:w-48">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                 <input 
                   type="text" 
                   placeholder="Search partners..." 
                   value={searchQuery} 
                   onChange={(e) => setSearchQuery(e.target.value)} 
                   className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                 />
              </div>
              <div className="relative lg:w-32">
                 <select 
                  value={sortOrder} 
                  onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')} 
                  className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-1.5 pl-3 pr-8 rounded-lg font-bold text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-sm"
                 >
                   <option value="asc">A-Z</option>
                   <option value="desc">Z-A</option>
                 </select>
                 <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={12} />
              </div>
           </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="space-y-10">
        {sectionsToRender.map((section) => {
          const sectionOrgs = data.ecosystem.filter(org => 
            org.types.includes(section as any) &&
            (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             org.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (sectionOrgs.length === 0) return null;

          const sortedSectionOrgs = [...sectionOrgs].sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

          return (
            <div key={section} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className={`flex items-center justify-between mb-4 p-3 rounded-2xl border-l-[6px] border ${getSectionHeaderStyle(section)} shadow-sm`}>
                 <div className="space-y-0.5">
                    <h2 className="text-lg md:text-xl font-black tracking-tight flex items-center gap-2">
                      {section}
                    </h2>
                 </div>
                 <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-black shadow-sm">
                   {sortedSectionOrgs.length}
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {sortedSectionOrgs.map((org) => (
                  <div 
                    key={`${section}-${org.id}`}
                    onClick={() => setSelectedOrg(org)}
                    className="relative group flex flex-col cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className="p-5 flex flex-col h-full relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white dark:border-slate-800 bg-white transform group-hover:scale-105 transition-transform">
                          <img 
                            src={org.logoUrl} 
                            alt={org.name} 
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=random&size=128&bold=true`;
                            }}
                          />
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end max-w-[50%]">
                           {org.types.slice(0, 1).map((type, index) => (
                             <span key={index} className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border shadow-xs ${getCategoryStyle(type)}`}>
                               {type}
                             </span>
                           ))}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-black text-base text-slate-900 dark:text-slate-100 mb-2 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {org.name}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2 font-medium mb-4">
                          {org.description}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between mt-auto">
                         <span className="text-[8px] font-black uppercase tracking-widest text-[#35308f] dark:text-indigo-400 flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></div> Networked
                         </span>
                         <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider group-hover:underline">Profile <ChevronRight size={10} className="inline ml-0.5" /></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedOrg && <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />}
      
      {sectionsToRender.every(section => 
        data.ecosystem.filter(org => 
          org.types.includes(section as any) &&
          (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           org.description.toLowerCase().includes(searchQuery.toLowerCase()))
        ).length === 0
      ) && (
        <div className="py-24 text-center bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
           <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
              <Layers size={40} className="text-slate-200" />
           </div>
           <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">No matching partners</h3>
           <p className="text-slate-500 mt-2 font-medium">Try broadening your search or adjusting filters.</p>
        </div>
      )}
    </div>
  );
};

export default Ecosystem;