
import React, { useState } from 'react';
import { ecosystemOrgs } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Filter, Layers } from 'lucide-react';
import { Organization } from '../types';
import OrganizationModal from '../components/OrganizationModal';

const Ecosystem: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  const filters = ['All', 'Community', 'Non-Profit', 'Government', 'Incubator', 'Academe', 'MSME', 'Workspace', 'Creatives'];

  // Helper for prominent category colors - Optimized for Contrast and Distinction
  const getCategoryStyle = (type: string) => {
    switch(type) {
      case 'Community': 
        return 'bg-rose-100 text-rose-900 border-rose-200 dark:bg-rose-900/40 dark:text-rose-100 dark:border-rose-800';
      case 'Government': 
        return 'bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-900/40 dark:text-blue-100 dark:border-blue-800';
      case 'Academe': 
        return 'bg-violet-100 text-violet-900 border-violet-200 dark:bg-violet-900/40 dark:text-violet-100 dark:border-violet-800';
      case 'Incubator': 
        return 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-900/40 dark:text-amber-100 dark:border-amber-800';
      case 'MSME': 
        return 'bg-cyan-100 text-cyan-900 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-100 dark:border-cyan-800';
      case 'Non-Profit': 
        return 'bg-emerald-100 text-emerald-900 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-100 dark:border-emerald-800';
      case 'Workspace': 
        return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600';
      case 'Creatives': 
        return 'bg-pink-100 text-pink-900 border-pink-200 dark:bg-pink-900/40 dark:text-pink-100 dark:border-pink-800';
      default: 
        return 'bg-gray-100 text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700';
    }
  };

  const getSectionHeaderStyle = (type: string) => {
    switch(type) {
      case 'Community': return 'text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900';
      case 'Government': return 'text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900';
      case 'Academe': return 'text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-900';
      case 'Incubator': return 'text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900';
      case 'MSME': return 'text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900';
      case 'Non-Profit': return 'text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900';
      case 'Workspace': return 'text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800';
      case 'Creatives': return 'text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-900';
      default: return 'text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800';
    }
  };

  // Determine which sections to render based on filter
  const sectionsToRender = activeFilter === 'All' 
    ? filters.filter(f => f !== 'All') 
    : [activeFilter];

  // Calculate total results for "No Results" state
  const totalResults = sectionsToRender.reduce((acc, section) => {
    return acc + ecosystemOrgs.filter(org => 
      org.types.includes(section as any) &&
      (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       org.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ).length;
  }, 0);

  return (
    <div className="space-y-6 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          The Ecosystem
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Partners, communities, and enablers driving innovation.</p>
      </div>
      
      {/* Controls Section */}
      <div className="flex flex-col gap-4 sticky top-0 md:static z-40 bg-slate-50 dark:bg-slate-950 py-2">
        {/* Search and Sort Row */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              aria-label="Search organizations by name or description"
              placeholder="Search organizations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all text-slate-900 dark:text-white shadow-sm"
            />
          </div>

          <div className="relative group min-w-[160px]">
             <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
                <ChevronDown size={16} />
             </div>
             <select 
               aria-label="Sort organizations alphabetically"
               value={sortOrder}
               onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
               className="w-full appearance-none h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-3 pl-4 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all cursor-pointer shadow-sm"
             >
               <option value="asc">Name (A-Z)</option>
               <option value="desc">Name (Z-A)</option>
             </select>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filter organizations by category">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
               <Filter size={14} /> Filter:
            </span>
            {filters.map(filter => (
              <button 
                key={filter} 
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-lg border text-sm font-bold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]
                  ${activeFilter === filter 
                    ? 'bg-[#35308f] text-white border-[#35308f] shadow-md shadow-indigo-200 dark:shadow-none' 
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }
                `}
              >
                {filter}
              </button>
            ))}
        </div>
      </div>

      <div className="space-y-12">
        {sectionsToRender.map((section) => {
          // Filter orgs for this section
          const sectionOrgs = ecosystemOrgs.filter(org => 
            org.types.includes(section as any) &&
            (org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             org.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          // If no orgs in this section (and we are searching or listing all), skip rendering this header
          if (sectionOrgs.length === 0) return null;

          // Sort
          const sortedSectionOrgs = [...sectionOrgs].sort((a, b) => {
            return sortOrder === 'asc' 
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          });

          return (
            <div key={section} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`flex items-center gap-3 mb-6 pb-2 border-b ${getSectionHeaderStyle(section)}`}>
                 <h2 className="text-2xl font-bold tracking-tight">{section}</h2>
                 <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    {sortedSectionOrgs.length}
                 </span>
              </div>

              <BentoGrid>
                {sortedSectionOrgs.map((org) => (
                  <BentoItem 
                    key={`${section}-${org.id}`} // Unique key since org can appear in multiple sections
                    className="flex flex-col gap-4 bg-white dark:bg-slate-900 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-800/60"
                    onClick={() => setSelectedOrg(org)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white shrink-0">
                        <img 
                          src={org.logoUrl} 
                          alt={`${org.name} logo`} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=random`;
                          }}
                        />
                      </div>
                      
                      <div className="flex gap-2">
                         <div className="p-2 rounded-full transition-colors bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-[#35308f] dark:group-hover:text-indigo-400">
                          <ChevronDown size={18} className="-rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                         {org.types.map((type, index) => (
                            <span 
                              key={index}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border shadow-sm ${getCategoryStyle(type)}`}
                            >
                              {type}
                            </span>
                         ))}
                      </div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1 truncate">
                        {org.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                        {org.description}
                      </p>
                    </div>
                    
                    <div 
                      aria-hidden="true"
                      className="mt-auto w-full block text-center py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors pointer-events-none"
                    >
                      View Profile
                    </div>
                  </BentoItem>
                ))}
              </BentoGrid>
            </div>
          );
        })}
      </div>
        
      {totalResults === 0 && (
        <div className="py-20 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
             <Search size={24} className="text-slate-300" />
          </div>
          <p className="text-slate-400 font-medium">No organizations found matching "{searchQuery}"</p>
          <button 
             onClick={() => {setSearchQuery(''); setActiveFilter('All');}}
             className="mt-4 text-[#35308f] dark:text-indigo-400 text-sm font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-[#35308f] rounded"
          >
             Clear Filters
          </button>
        </div>
      )}

      {selectedOrg && (
        <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      )}
    </div>
  );
};

export default Ecosystem;
