import React, { useState } from 'react';
import { activeStartups } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Rocket, Facebook, Filter, ChevronDown, Layers } from 'lucide-react';

const ActiveStartups: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const industries = ['All', 'Tech', 'Service', 'E-commerce', 'AgriTech', 'Creative'];
  const stages = ['All', 'Pre-Seed', 'Seed', 'Growth'];

  // Color mapping for stages
  const getStageColor = (stage?: string) => {
    switch(stage) {
      case 'Pre-Seed': return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-800';
      case 'Seed': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Growth': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  const filteredStartups = activeStartups.filter(startup => {
    const industryMatch = selectedIndustry === 'All' || startup.industry === selectedIndustry;
    const stageMatch = selectedStage === 'All' || startup.stage === selectedStage;
    return industryMatch && stageMatch;
  });

  return (
    <div className="space-y-6 pb-24">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white transition-colors">
            Active Startups
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Discover the startups building from the mountains.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
           <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0" role="tablist" aria-label="Filter by Industry">
              <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-wider mr-2">
                 <Filter size={14} /> Industry
              </span>
              {industries.map(industry => (
                 <button
                    key={industry}
                    role="tab"
                    aria-selected={selectedIndustry === industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
                       selectedIndustry === industry 
                       ? 'bg-[#35308f] text-white shadow-md shadow-indigo-200 dark:shadow-none' 
                       : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                 >
                    {industry}
                 </button>
              ))}
           </div>

           <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 border-slate-100 dark:border-slate-800 pt-3 md:pt-0">
              <span className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-wider">
                 <Layers size={14} /> Stage
              </span>
              <div className="relative flex-1 md:w-40">
                 <select
                    aria-label="Filter by Stage"
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-none text-slate-700 dark:text-slate-200 py-2 pl-4 pr-10 rounded-xl font-bold text-sm focus:ring-2 focus:ring-[#35308f] cursor-pointer"
                 >
                    {stages.map(stage => (
                       <option key={stage} value={stage}>{stage}</option>
                    ))}
                 </select>
                 <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
           </div>
        </div>
      </div>

      <BentoGrid>
        {filteredStartups.map((startup) => (
          <BentoItem 
            key={startup.id}
            className="flex flex-col gap-5 group hover:border-[#35308f] dark:hover:border-indigo-500 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white group-hover:shadow-md transition-shadow">
                <img 
                  src={startup.logoUrl} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${getStageColor(startup.stage)}`}>
                  {startup.stage}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
                {startup.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                {startup.description}
              </p>
            </div>
            
             <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-md">
                   <Rocket size={12} className="text-[#35308f] dark:text-indigo-400" /> 
                   {startup.industry}
                </span>
                <a 
                  href={startup.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-400 hover:text-[#35308f] dark:hover:text-indigo-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                  aria-label={`Visit ${startup.name} on Facebook`}
                >
                  <Facebook size={18} />
                </a>
             </div>
          </BentoItem>
        ))}
        
        {filteredStartups.length === 0 && (
           <div className="col-span-full py-20 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                 <Filter size={24} className="text-slate-300" />
              </div>
              <p className="text-slate-400 font-medium">No startups found matching these filters.</p>
              <button 
                 onClick={() => {setSelectedIndustry('All'); setSelectedStage('All');}}
                 className="mt-4 text-[#35308f] dark:text-indigo-400 text-sm font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-[#35308f] rounded"
              >
                 Clear Filters
              </button>
           </div>
        )}
      </BentoGrid>
    </div>
  );
};

export default ActiveStartups;