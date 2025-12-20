
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Search, Globe, Download, ExternalLink, Trash2, Plus } from 'lucide-react';
import ManagerFormModal from '../components/ManagerFormModal';

const Resources: React.FC = () => {
  const { data, isManager, removeItem, addItem } = useContext(ThemeContext);
  const [filter, setFilter] = useState('All');
  const [subFilter, setSubFilter] = useState('All');
  const [isAdding, setIsAdding] = useState(false);

  const filters = ['All', 'Report', 'Template', 'Guide', 'Government', 'Website'];
  const websiteCategories = ['All', ...Array.from(new Set(data.resources.filter(r => r.type === 'Website').map(r => r.format)))];

  const filteredResources = data.resources.filter(resource => {
    const typeMatch = filter === 'All' || resource.type === filter;
    if (filter === 'Website' && typeMatch) return subFilter === 'All' || resource.format === subFilter;
    return typeMatch;
  });

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-end justify-between mb-4 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">Resources</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Download reports, templates, and guides.</p>
        </div>
        {isManager && (
            <button onClick={() => setIsAdding(true)} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                <Plus size={20} /> Add Resource
            </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-end">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input type="text" placeholder="Search..." className="w-full pl-9 md:pl-12 pr-4 py-2 md:py-3 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 transition-all text-sm" />
        </div>
      </div>
        
      <div className="border-b border-slate-200 dark:border-slate-800 flex overflow-x-auto no-scrollbar">
          {filters.map(f => (
            <button key={f} onClick={() => { setFilter(f); setSubFilter('All'); }} className={`px-4 py-2 md:px-6 md:py-3 font-bold text-xs md:text-sm whitespace-nowrap transition-all border-b-2 rounded-t-lg ${filter === f ? 'border-[#35308f] text-[#35308f] bg-indigo-50/50' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}>{f === 'Website' ? 'Websites' : f}</button>
          ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pt-2">
        {isManager && (
            <div onClick={() => setIsAdding(true)} className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/20 hover:bg-indigo-50 transition-all cursor-pointer h-full min-h-[200px]">
                <Plus size={32} className="text-indigo-400" />
                <span className="font-black text-indigo-400 uppercase tracking-widest text-[10px]">Add Resource</span>
            </div>
        )}
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white dark:bg-slate-900 rounded-2xl p-3 md:p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full relative">
            {isManager && (
                 <button 
                  onClick={(e) => { e.stopPropagation(); removeItem('resource', resource.id); }}
                  className="absolute top-2 right-2 z-20 p-1.5 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg"
                 >
                    <Trash2 size={12} />
                 </button>
            )}
            <div className="flex justify-between items-start mb-2 md:mb-4">
              {resource.type === 'Website' ? <div className="w-8 h-8 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1"><img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${resource.url}&size=64`} alt="" className="w-5 h-5 object-contain" /></div> : <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-[#35308f]"><Globe size={20} /></div>}
              <span className={`text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${resource.type === 'Website' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>{resource.type === 'Website' ? resource.format : resource.type}</span>
            </div>
            <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight">{resource.title}</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{resource.description}</p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto">
              <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">{resource.type === 'Website' ? 'Free/Paid' : `${resource.format} • ${resource.size}`}</div>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-indigo-50 text-[#35308f] px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-bold hover:bg-[#35308f] hover:text-white transition-colors">{resource.type === 'Website' ? 'Visit' : 'View'} {resource.type === 'Website' ? <ExternalLink size={12}/> : <Download size={12} />}</a>
            </div>
          </div>
        ))}
      </div>

      {isAdding && (
        <ManagerFormModal 
          type="resource" 
          onClose={() => setIsAdding(false)} 
          onSave={(item) => { addItem('resource', item); setIsAdding(false); }} 
        />
      )}
    </div>
  );
};

export default Resources;
