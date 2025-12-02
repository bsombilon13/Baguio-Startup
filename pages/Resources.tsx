
import React, { useState } from 'react';
import { Search, Globe, Download, ExternalLink } from 'lucide-react';
import { resources } from '../data';

const Resources: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Report', 'Template', 'Guide', 'Government', 'Website'];

  const filteredResources = filter === 'All' 
    ? resources 
    : resources.filter(resource => resource.type === filter);

  return (
    <div className="space-y-6 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          Resources
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
          Download reports, templates, and guides to help you build.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            aria-label="Search resources"
            placeholder="Search resources..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#35308f] dark:focus:ring-indigo-500 transition-all dark:text-white"
          />
        </div>
      </div>
        
      {/* Tabs Layout */}
      <div className="border-b border-slate-200 dark:border-slate-800 flex overflow-x-auto no-scrollbar" role="tablist" aria-label="Resource Types">
          {filters.map(f => (
            <button 
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`
                px-6 py-3 font-bold text-sm whitespace-nowrap transition-all border-b-2 focus:outline-none focus:ring-2 focus:ring-[#35308f] rounded-t-lg
                ${filter === f 
                  ? 'border-[#35308f] text-[#35308f] dark:border-indigo-400 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/10' 
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
              `}
            >
              {f === 'Website' ? 'Websites' : f}
            </button>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full animate-in fade-in duration-300">
            <div className="flex justify-between items-start mb-4">
              {resource.type === 'Website' ? (
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 dark:bg-slate-800 flex items-center justify-center p-2">
                  <img 
                    src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${resource.url}&size=64`}
                    alt={`${resource.title} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[#35308f] dark:text-indigo-400">
                   <Globe size={24} />
                </div>
              )}
              
              <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                resource.type === 'Website' 
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' 
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {resource.type === 'Website' ? resource.format : resource.type}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              {resource.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              {resource.description}
            </p>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
              {resource.type === 'Website' ? (
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                   Free/Paid
                 </div>
              ) : (
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>{resource.format}</span>
                  <span>•</span>
                  <span>{resource.size}</span>
                </div>
              )}
              
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${resource.title}`}
                className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-[#35308f] dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-[#35308f] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
              >
                {resource.type === 'Website' ? 'Visit' : 'View'} 
                {resource.type === 'Website' ? <ExternalLink size={14} /> : <Download size={14} />}
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
