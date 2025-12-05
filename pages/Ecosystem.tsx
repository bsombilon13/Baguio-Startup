
import React, { useState } from 'react';
import { ecosystemOrgs } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Filter, Layers, ArrowRight, MessageCircle } from 'lucide-react';
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
        return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/50 dark:text-rose-200 dark:border-rose-700 font-bold';
      case 'Government': 
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700 font-bold';
      case 'Academe': 
        return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-700 font-bold';
      case 'Incubator': 
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/50 dark:text-orange-200 dark:border-orange-700 font-bold';
      case 'MSME': 
        return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/50 dark:text-teal-200 dark:border-teal-700 font-bold';
      case 'Non-Profit': 
        return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-200 dark:border-emerald-700 font-bold';
      case 'Workspace': 
        return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 font-bold';
      case 'Creatives': 
        return 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 dark:bg-fuchsia-900/50 dark:text-fuchsia-200 dark:border-fuchsia-700 font-bold';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 font-bold';
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
      {/* Join Network CTA above Search */}
      <div className="bg-gradient-to-br from-[#35308f] to-indigo-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-2xl mb-8">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
           <Layers size={200} className="hidden md:block" />
           <Layers size={100} className="md:hidden" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join the Network</h2>
            <p className="text-indigo-100 max-w-xl text-base md:text-lg">
              Are you a startup, enabler, or community builder in the Cordilleras? Connect with us to get listed and access resources.
            </p>
          </div>
          <a 
            href="https://forms.gle/QZc8fzLdNbqAGaHc6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#35308f] px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <MessageCircle size={20} /> Join the Network
          </a>
        </div>
      </div>

      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          The Ecosystem
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Partners, communities, and enablers driving innovation.</p>
      </div>
      
      {/* Controls Section - No Sticky Header */}
      <div className="flex flex-col gap-2 md:gap-4 py-2 transition-all">
        {/* Search and Sort Row - Compact on Mobile */}
        <div className="flex flex-row md:flex-row gap-2 md:gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
            <input 
              type="text" 
              aria-label="Search organizations"
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 md:pl-12 pr-4 py-2 md:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all text-slate-900 dark:text-white shadow-sm text-sm md:text-base"
            />
          </div>

          <div className="relative group min-w-[100px] md:min-w-[160px]">
             <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
                <ChevronDown size={14} className="md:w-4 md:h-4" />
             </div>
             <select 
               aria-label="Sort organizations"
               value={sortOrder}
               onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
               className="w-full appearance-none h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-2 md:py-3 pl-3 md:pl-4 pr-8 md:pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all cursor-pointer shadow-sm text-xs md:text-base"
             >
               <option value="asc">A-Z</option>
               <option value="desc">Z-A</option>
             </select>
          </div>
        </div>

        {/* Filter Chips - Compact on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filter organizations">
            <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 md:mr-2 shrink-0">
               <Filter size={12} className="md:w-[14px]" /> Filter:
            </span>
            {filters.map(filter => (
              <button 
                key={filter} 
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-3 py-1.5 md:px-4 md:py-2 rounded-lg border text-xs md:text-sm font-bold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]
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
              <div className={`flex items-center gap-3 mb-4 md:mb-6 pb-2 border-b ${getSectionHeaderStyle(section)}`}>
                 <h2 className="text-lg md:text-2xl font-bold tracking-tight">{section}</h2>
                 <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] md:text-xs font-bold px-2 md:px-2.5 py-0.5 md:py-1 rounded-full">
                    {sortedSectionOrgs.length}
                 </span>
              </div>

              <BentoGrid>
                {sortedSectionOrgs.map((org) => (
                  <BentoItem 
                    key={`${section}-${org.id}`} // Unique key since org can appear in multiple sections
                    className="flex flex-col gap-2 md:gap-4 bg-white dark:bg-slate-900 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-800/60 transition-all duration-300"
                    onClick={() => setSelectedOrg(org)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white shrink-0">
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
                         <div className="p-1 md:p-2 rounded-full transition-colors bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-[#35308f] dark:group-hover:text-indigo-400">
                          <ChevronDown size={14} className="md:w-[18px] md:h-[18px] -rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
                         {org.types.map((type, index) => (
                            <span 
                              key={index}
                              className={`px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md text-[8px] md:text-[10px] font-extrabold uppercase tracking-wider border shadow-sm ${getCategoryStyle(type)}`}
                            >
                              {type}
                            </span>
                         ))}
                      </div>
                      <h3 className="font-bold text-sm md:text-lg text-slate-800 dark:text-slate-100 mb-1 truncate">
                        {org.name}
                      </h3>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2 md:line-clamp-3">
                        {org.description}
                      </p>
                    </div>
                    
                    <div 
                      aria-hidden="true"
                      className="mt-auto w-full block text-center py-1.5 md:py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs md:text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors pointer-events-none"
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
