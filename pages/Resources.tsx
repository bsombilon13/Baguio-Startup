

import React, { useState } from 'react';
import { Search, Globe, Download, ExternalLink } from 'lucide-react';
import { resources } from '../data';

const Resources: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [subFilter, setSubFilter] = useState('All');

  const filters = ['All', 'Report', 'Template', 'Guide', 'Government', 'Website'];

  // Extract website sub-categories dynamically
  const websiteCategories = ['All', ...Array.from(new Set(
    resources.filter(r => r.type === 'Website').map(r => r.format)
  ))];

  const filteredResources = resources.filter(resource => {
    // Primary Filter
    const typeMatch = filter === 'All' || resource.type === filter;
    
    // Secondary Filter (only for Websites)
    if (filter === 'Website' && typeMatch) {
        return subFilter === 'All' || resource.format === subFilter;
    }
    
    return typeMatch;
  });

  return (
    <div className="space-y-6 pb-24">
      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          Resources
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
          Download reports, templates, and guides to help you build.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-end">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 md:w-5 md:h-5" />
          <input 
            type="text" 
            aria-label="Search resources"
            placeholder="Search..." 
            className="w-full pl-9 md:pl-12 pr-4 py-2 md:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all dark:text-white text-sm md:text-base"
          />
        </div>
      </div>
        
      {/* Tabs Layout - Optimized for Mobile */}
      <div className="border-b border-slate-200 dark:border-slate-800 flex overflow-x-auto no-scrollbar" role="tablist" aria-label="Resource Types">
          {filters.map(f => (
            <button 
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => { setFilter(f); setSubFilter('All'); }}
              className={`
                px-4 py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm whitespace-nowrap transition-all border-b-2 focus:outline-none focus:ring-2 focus:ring-[#35308f] rounded-t-lg
                ${filter === f 
                  ? 'border-[#35308f] text-[#35308f] dark:border-indigo-400 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10' 
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
              `}
            >
              {f === 'Website' ? 'Websites' : f}
            </button>
          ))}
      </div>

      {/* Secondary Filter for Websites */}
      {filter === 'Website' && (
        <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-2 md:py-3 px-1 animate-in slide-in-from-top-2 fade-in bg-slate-50 dark:bg-slate-900/50 rounded-b-xl border border-t-0 border-slate-100 dark:border-slate-800/50">
           <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Category:</span>
           {websiteCategories.map(cat => (
              <button
                 key={cat}
                 onClick={() => setSubFilter(cat)}
                 className={`
                    px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold transition-all whitespace-nowrap border shadow-sm
                    ${subFilter === cat 
                       ? 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-700' 
                       : 'bg-white text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}
                 `}
              >
                 {cat}
              </button>
           ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pt-2">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white dark:bg-slate-900 rounded-2xl p-3 md:p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full animate-in fade-in duration-300">
            <div className="flex justify-between items-start mb-2 md:mb-4">
              {resource.type === 'Website' ? (
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-white border border-slate-100 dark:bg-slate-800 flex items-center justify-center p-1 md:p-2">
                  <img 
                    src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${resource.url}&size=64`}
                    alt={`${resource.title} icon`}
                    className="w-5 h-5 md:w-8 md:h-8 object-contain"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#35308f] dark:text-indigo-400">
                   <Globe size={20} className="md:w-6 md:h-6" />
                </div>
              )}
              
              <span className={`text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded uppercase tracking-wider ${
                resource.type === 'Website' 
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' 
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {resource.type === 'Website' ? resource.format : resource.type}
              </span>
            </div>
            
            <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 md:mb-2 leading-tight">
              {resource.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-1 line-clamp-2 md:line-clamp-none">
              {resource.description}
            </p>
            
            <div className="pt-2 md:pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
              {resource.type === 'Website' ? (
                 <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                   Free/Paid
                 </div>
              ) : (
                <div className="flex items-center gap-1 md:gap-2 text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="truncate max-w-[60px]">{resource.format}</span>
                  <span>•</span>
                  <span>{resource.size}</span>
                </div>
              )}
              
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${resource.title}`}
                className="flex items-center gap-1 md:gap-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-[#35308f] dark:text-indigo-300 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold hover:bg-[#35308f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
              >
                {resource.type === 'Website' ? 'Visit' : 'View'} 
                {resource.type === 'Website' ? <ExternalLink size={12} className="md:w-3.5 md:h-3.5"/> : <Download size={12} className="md:w-3.5 md:h-3.5" />}
              </a>
            </div>
          </div>
        ))}
        {filteredResources.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-400">
            No resources found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
