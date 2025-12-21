
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Search, Globe, Download, ExternalLink, FileText, Layout, BookOpen, Building, Monitor, Info, ChevronRight, Hash } from 'lucide-react';

const Resources: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { name: 'All', icon: Hash },
    { name: 'Report', icon: FileText },
    { name: 'Template', icon: Layout },
    { name: 'Guide', icon: BookOpen },
    { name: 'Government', icon: Building },
    { name: 'Website', icon: Monitor },
  ];

  const filteredResources = data.resources.filter(resource => {
    const matchesFilter = filter === 'All' || resource.type === filter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIconColor = (type: string) => {
    switch(type) {
      case 'Report': return 'bg-blue-500';
      case 'Template': return 'bg-emerald-500';
      case 'Guide': return 'bg-amber-500';
      case 'Government': return 'bg-indigo-500';
      case 'Website': return 'bg-rose-500';
      default: return 'bg-slate-500';
    }
  };

  return (
    <div className="space-y-12 pb-32 max-w-[1400px] mx-auto">
      {/* Interactive Header */}
      <div className="relative p-8 md:p-16 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35308f] to-violet-600">Toolkit</span>
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Curated reports, templates, and essential links for the Cordillera startup community.
            </p>
          </div>
          
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search tools & docs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 rounded-[2rem] border-0 bg-slate-100 dark:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20 transition-all font-bold text-slate-900 dark:text-white shadow-inner" 
            />
          </div>
        </div>
      </div>
        
      {/* Category Tabs */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-2 rounded-[2rem] shadow-xl flex overflow-x-auto no-scrollbar gap-1 mx-4 md:mx-0">
          {filters.map(f => (
            <button 
              key={f.name} 
              onClick={() => setFilter(f.name)} 
              className={`flex items-center gap-2 px-6 py-3 font-black text-xs md:text-sm whitespace-nowrap transition-all rounded-2xl ${
                filter === f.name 
                ? 'bg-[#35308f] text-white shadow-lg' 
                : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              <f.icon size={16} />
              {f.name === 'Website' ? 'Websites' : f.name}
            </button>
          ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {filteredResources.map(resource => (
          <div 
            key={resource.id} 
            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
               <FileText size={120} />
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${getIconColor(resource.type)}`}>
                {resource.type === 'Website' ? (
                  <Monitor size={28} />
                ) : (
                  <FileText size={28} />
                )}
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  {resource.type}
                </span>
              </div>
            </div>

            <div className="relative z-10 flex-1">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                {resource.description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto relative z-10">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Format</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200">{resource.format} {resource.size !== 'N/A' && `• ${resource.size}`}</span>
              </div>
              
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/btn flex items-center gap-2 bg-[#35308f] text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                {resource.type === 'Website' ? 'Visit' : 'Open'} 
                {resource.type === 'Website' ? (
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                ) : (
                  <Download size={16} className="group-hover/btn:translate-y-1 transition-transform" />
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredResources.length === 0 && (
         <div className="py-32 text-center">
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
               <Monitor size={40} className="text-slate-200" />
            </div>
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">No Resources Found</h3>
            <p className="text-slate-500 mt-2 font-medium">Try adjusting your search or filter criteria.</p>
         </div>
      )}
    </div>
  );
};

export default Resources;
