
import React, { useState } from 'react';
import { activeStartups } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Rocket, Facebook, Filter, ChevronDown, Layers, Globe, PlusCircle, Cpu, Briefcase, ShoppingCart, Sprout, Palette, HeartPulse } from 'lucide-react';

const ActiveStartups: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const industries = ['All', 'Tech', 'Service', 'E-commerce', 'AgriTech', 'Creative', 'Health'];
  const stages = ['All', 'Idea', 'Pre-Seed', 'Seed', 'Growth'];

  // Helper function to get icon for industry
  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Tech': return <Cpu size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      case 'Service': return <Briefcase size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      case 'E-commerce': return <ShoppingCart size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      case 'AgriTech': return <Sprout size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      case 'Creative': return <Palette size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      case 'Health': return <HeartPulse size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
      default: return <Layers size={14} className="w-3 h-3 md:w-[14px] md:h-[14px]" />;
    }
  };

  // Color mapping for stages
  const getStageColor = (stage?: string) => {
    switch(stage) {
      case 'Idea': return 'bg-yellow-100 text-yellow-900 border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-200 dark:border-yellow-700';
      case 'Pre-Seed': return 'bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-900/40 dark:text-teal-200 dark:border-teal-700';
      case 'Seed': return 'bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-900/40 dark:text-blue-200 dark:border-blue-700';
      case 'Growth': return 'bg-purple-100 text-purple-900 border-purple-200 dark:bg-purple-900/40 dark:text-purple-200 dark:border-purple-700';
      default: return 'bg-slate-100 text-slate-900 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700';
    }
  };

  const filteredStartups = activeStartups.filter(startup => {
    const industryMatch = selectedIndustry === 'All' || startup.industry.includes(selectedIndustry as any);
    const stageMatch = selectedStage === 'All' || startup.stage === selectedStage;
    return industryMatch && stageMatch;
  });

  return (
    <div className="space-y-6 pb-24">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
            Active Startups
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Discover the startups building from the mountains.</p>
        </div>

        {/* List Your Startup CTA */}
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
             <Rocket size={180} className="hidden md:block" />
             <Rocket size={100} className="md:hidden" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
               <h2 className="text-2xl font-bold mb-2">Building something new?</h2>
               <p className="text-indigo-100 max-w-lg text-base md:text-lg">
                 Join the directory of active startups in the Cordillera region. Get visibility and connect with investors.
               </p>
            </div>
            <a 
              href="https://m.me/baguiostartup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#35308f] px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <PlusCircle size={20} /> List Your Startup
            </a>
          </div>
        </div>

        {/* Filter Bar - Optimized for Mobile */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-2 md:p-4 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between">
           <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0" role="tablist" aria-label="Filter by Industry">
              <span className="flex items-center gap-1.5 md:gap-2 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-wider mr-1 md:mr-2 shrink-0">
                 <Filter size={12} className="md:w-[14px]" /> Industry
              </span>
              {industries.map(industry => (
                 <button
                    key={industry}
                    role="tab"
                    aria-selected={selectedIndustry === industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#35308f] flex items-center gap-1.5 md:gap-2 ${
                       selectedIndustry === industry 
                       ? 'bg-[#35308f] text-white shadow-md shadow-indigo-200 dark:shadow-none' 
                       : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                 >
                    {getIndustryIcon(industry)}
                    {industry}
                 </button>
              ))}
           </div>

           <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto border-t md:border-t-0 border-slate-100 dark:border-slate-800 pt-2 md:pt-0">
              <span className="flex items-center gap-1.5 md:gap-2 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                 <Layers size={12} className="md:w-[14px]" /> Stage
              </span>
              <div className="relative flex-1 md:w-40">
                 <select
                    aria-label="Filter by Stage"
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="w-full appearance-none bg-slate-50 dark:bg-slate-800 border-none text-slate-700 dark:text-slate-200 py-1.5 md:py-2 pl-3 md:pl-4 pr-8 md:pr-10 rounded-xl font-bold text-xs md:text-sm focus:ring-2 focus:ring-[#35308f] cursor-pointer"
                 >
                    {stages.map(stage => (
                       <option key={stage} value={stage}>{stage}</option>
                    ))}
                 </select>
                 <ChevronDown size={14} className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none md:w-4 md:h-4" />
              </div>
           </div>
        </div>
      </div>

      <BentoGrid>
        {filteredStartups.map((startup) => (
          <BentoItem 
            key={startup.id}
            className="flex flex-col gap-3 md:gap-5 group hover:border-[#35308f] dark:hover:border-indigo-500 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white group-hover:shadow-md transition-shadow shrink-0">
                <img 
                  src={startup.logoUrl} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(startup.name)}&background=random`;
                  }}
                />
              </div>
              
              <div className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-extrabold uppercase tracking-wider border whitespace-nowrap ${getStageColor(startup.stage)}`}>
                  {startup.stage}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-base md:text-2xl text-slate-900 dark:text-white mb-1.5 md:mb-3 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                {startup.name}
              </h3>
              <p className="text-xs md:text-base leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                {startup.description}
              </p>
            </div>
            
             <div className="mt-auto pt-3 md:pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-1.5">
                   {startup.industry.map((ind, i) => (
                       <span key={i} className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-2 py-1 md:px-2.5 md:py-1.5 rounded-md border border-slate-100 dark:border-slate-700">
                        <span className="text-slate-400 dark:text-slate-500">{getIndustryIcon(ind)}</span>
                        {ind}
                       </span>
                   ))}
                </div>

                <div className="flex gap-2 justify-end md:justify-start">
                   {startup.websiteUrl && (
                     <a 
                       href={startup.websiteUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-1.5 md:p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-400 hover:text-[#35308f] dark:hover:text-indigo-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                       aria-label={`Visit ${startup.name} website`}
                     >
                       <Globe size={16} className="md:w-5 md:h-5"/>
                     </a>
                   )}
                   <a 
                     href={startup.facebookUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-1.5 md:p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-slate-400 hover:text-[#35308f] dark:hover:text-indigo-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                     aria-label={`Visit ${startup.name} on Facebook`}
                     title="Visit Facebook Page"
                   >
                     <Facebook size={16} className="md:w-5 md:h-5"/>
                   </a>
                </div>
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
