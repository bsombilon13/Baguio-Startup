
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

  const getDomain = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch (e) {
      return '';
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
        {filteredResources.map(resource => {
          const domain = getDomain(resource.url);
          // Prioritize Clearbit for higher quality logos, fallback to Google Favicon
          const logoUrl = domain ? `https://logo.clearbit.com/${domain}` : null;
          const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;

          return (
            <div 
              key={resource.id} 
              className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Decorative Pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
                {resource.type === 'Website' ? <Globe size={120} /> : <FileText size={120} />}
              </div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                  {domain ? (
                    <img 
                      src={logoUrl || faviconUrl || ''} 
                      alt="" 
                      className="w-10 h-10 object-contain p-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('clearbit')) {
                          target.src = faviconUrl || '';
                        } else {
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add(getIconColor(resource.type));
                            parent.classList.add('text-white');
                            const iconElement = document.createElement('div');
                            iconElement.innerHTML = resource.type === 'Website' ? '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>' : '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>';
                            parent.appendChild(iconElement.firstChild as Node);
                          }
                        }
                      }}
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center text-white ${getIconColor(resource.type)}`}>
                      {resource.type === 'Website' ? <Monitor size={28} /> : <FileText size={28} />}
                    </div>
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
          );
        })}
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
