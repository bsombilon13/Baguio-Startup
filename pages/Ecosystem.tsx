import React, { useState } from 'react';
import { ecosystemOrgs } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { ChevronDown, Search, Filter, Plus } from 'lucide-react';
import { Organization } from '../types';
import OrganizationModal from '../components/OrganizationModal';

const Ecosystem: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);

  const filters = ['All', 'Community', 'Non-Profit', 'Government', 'Incubator', 'Academe', 'MSME'];

  // Combined Filter Logic
  const filteredOrgs = ecosystemOrgs.filter(org => {
    const matchesCategory = activeFilter === 'All' || org.type === activeFilter;
    const matchesSearch = 
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      org.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort Logic
  const sortedOrgs = [...filteredOrgs].sort((a, b) => {
    return sortOrder === 'asc' 
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  // Helper for prominent category colors
  const getCategoryStyle = (type: string) => {
    switch(type) {
      case 'Community': return 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800';
      case 'Government': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
      case 'Academe': return 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800';
      case 'Incubator': return 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800';
      case 'MSME': return 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800';
      case 'Non-Profit': return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800';
      default: return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    }
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors mb-2">
          The Ecosystem
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Partners, communities, and enablers driving innovation.</p>
      </div>
      
      {/* Controls Section */}
      <div className="flex flex-col gap-4">
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

      <BentoGrid>
        {sortedOrgs.map((org) => (
          <BentoItem 
            key={org.id}
            className="flex flex-col gap-4 bg-white dark:bg-slate-900"
            onClick={() => setSelectedOrg(org)}
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white">
                <img 
                  src={org.logoUrl} 
                  alt={`${org.name} logo`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if FB graph image fails
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

            <div>
              <div className="mb-2">
                 <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border shadow-sm ${getCategoryStyle(org.type)}`}>
                    {org.type}
                 </span>
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">
                {org.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                {org.description}
              </p>
            </div>
            
            {/* Using div instead of button to avoid nested interactive elements semantics, hidden from screen reader as redundant */}
            <div 
              aria-hidden="true"
              className="mt-auto w-full block text-center py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors pointer-events-none"
            >
              View Profile
            </div>
          </BentoItem>
        ))}

        {/* CTA Card for New Submissions */}
        <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-[#35308f] to-indigo-600 dark:from-[#35308f] dark:to-indigo-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center border border-white/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/20 group-hover:rotate-6 transition-transform">
                <Plus size={32} className="text-white" />
            </div>
            <h3 className="font-bold text-2xl text-white mb-2">Join the Network</h3>
            <p className="text-indigo-100 text-sm font-medium mb-8 leading-relaxed">
              New community or enabler? <br/> Submit your details to get listed.
            </p>
            <a 
              href="http://m.me/baguiostartup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#35308f] px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg w-full"
            >
              Submit Details
            </a>
        </div>
        
        {sortedOrgs.length === 0 && (
          <div className="col-span-full py-20 text-center flex flex-col items-center">
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
      </BentoGrid>

      {selectedOrg && (
        <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      )}
    </div>
  );
};

export default Ecosystem;