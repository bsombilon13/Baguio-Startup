
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Rocket, Facebook, Filter, ChevronDown, Layers, Globe, Cpu, Briefcase, ShoppingCart, Sprout, Palette, HeartPulse, ArrowUpRight, Zap, Award, Leaf, Microscope, ExternalLink } from 'lucide-react';
import OrganizationModal from '../components/OrganizationModal';

const ActiveStartups: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState<any | null>(null);

  const industries = ['All', 'Tech', 'Service', 'E-commerce', 'AgriTech', 'Creative', 'Health', 'CleanTech', 'Material Science'];
  const stages = ['All', 'Idea', 'MVP', 'Pre-Seed', 'Seed', 'Growth', 'Scaling', 'Series A+'];

  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'Tech': return 'from-blue-500 to-indigo-600';
      case 'Service': return 'from-amber-400 to-orange-500';
      case 'E-commerce': return 'from-rose-400 to-pink-600';
      case 'AgriTech': return 'from-emerald-400 to-teal-600';
      case 'Creative': return 'from-violet-400 to-purple-600';
      case 'Health': return 'from-cyan-400 to-blue-600';
      case 'CleanTech': return 'from-emerald-500 to-green-700';
      case 'Material Science': return 'from-slate-600 to-slate-800';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Tech': return <Cpu size={12} />;
      case 'Service': return <Briefcase size={12} />;
      case 'E-commerce': return <ShoppingCart size={12} />;
      case 'AgriTech': return <Sprout size={12} />;
      case 'Creative': return <Palette size={12} />;
      case 'Health': return <HeartPulse size={12} />;
      case 'CleanTech': return <Leaf size={12} />;
      case 'Material Science': return <Microscope size={12} />;
      default: return <Layers size={12} />;
    }
  };

  const getStageStyle = (stage: string) => {
    switch(stage) {
      case 'Idea': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200/30';
      case 'MVP': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200/30';
      case 'Pre-Seed': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200/30';
      case 'Seed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200/30';
      case 'Growth': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200/30';
      case 'Scaling': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200/30';
      case 'Series A+': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200/30';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200/30';
    }
  };

  const filteredStartups = data.startups.filter(startup => {
    const industryMatch = selectedIndustry === 'All' || startup.industry.includes(selectedIndustry as any);
    const stageMatch = selectedStage === 'All' || startup.stage === selectedStage;
    return industryMatch && stageMatch;
  });

  const handleGetListedClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdvFZoL6AA3Bd2mKzg4V4LH10_5_vEPYIB482EP7oy0csFboQ/viewform', '_blank');
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Directory</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            The next generation of companies built in the Cordilleras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-gradient-to-br from-[#35308f] to-[#5c56d6] rounded-[2rem] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000">
                    <Rocket size={180} />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4 text-white">
                            <Zap size={12} className="text-yellow-300" /> Community Portal
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">List Your Venture</h2>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                            Be part of the regional index. Get visibility from investors, partners, and the mountain community.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={handleGetListedClick}
                        className="w-fit bg-white text-[#35308f] px-6 py-3 rounded-xl font-black text-sm hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                      >
                        <ExternalLink size={18} /> Get Listed
                      </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Indexed</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{data.startups.length}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Sectors</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{industries.length - 1}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
                        <Award size={14} /> Ecosystem Verified
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2">
                 <Filter size={12} /> Sector:
              </span>
              {industries.map(industry => (
                 <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                       selectedIndustry === industry 
                       ? 'bg-slate-900 text-white border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:border-white' 
                       : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                 >
                    {industry !== 'All' && getIndustryIcon(industry)}
                    {industry}
                 </button>
              ))}
           </div>

           <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 border-slate-200 dark:border-slate-800 pt-3 lg:pt-0">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2 lg:pl-0">
                 <Layers size={12} /> Stage:
              </span>
              <div className="relative flex-1 lg:w-40">
                 <select
                    value={selectedStage}
                    onChange={(e) => setSelectedStage(e.target.value)}
                    className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 py-1.5 pl-3 pr-8 rounded-lg font-bold text-xs focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-sm"
                 >
                    {stages.map(stage => (
                       <option key={stage} value={stage}>{stage}</option>
                    ))}
                 </select>
                 <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredStartups.map((startup) => {
          const mainIndustry = startup.industry[0] || 'Tech';
          const industryColor = getIndustryColor(mainIndustry);

          return (
            <div 
              key={startup.id}
              onClick={() => setSelectedStartup(startup)}
              className="relative group flex flex-col cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${industryColor}`}></div>

              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${industryColor} opacity-5 blur-2xl group-hover:opacity-15 transition-all duration-500`}></div>

              <div className="p-5 flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl p-2 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform">
                    <img 
                      src={startup.logoUrl} 
                      alt={startup.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(startup.name)}&background=random&size=64`;
                      }}
                    />
                  </div>
                  
                  <div className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-xs ${getStageStyle(startup.stage)}`}>
                      {startup.stage}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                     <h3 className="font-black text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {startup.name}
                     </h3>
                     <ArrowUpRight size={14} className="text-indigo-500 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all shrink-0" />
                  </div>
                  
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 font-medium">
                    {startup.description}
                  </p>
                </div>
                
                <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
                  {startup.industry.slice(0, 2).map((ind, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 transition-colors"
                    >
                      {getIndustryIcon(ind)}
                      {ind}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                   {startup.websiteUrl && (
                     <a 
                       href={startup.websiteUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       onClick={(e) => e.stopPropagation()}
                       className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-xs"
                       title="Visit Website"
                     >
                       <Globe size={16} />
                     </a>
                   )}
                   <a 
                     href={startup.facebookUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     onClick={(e) => e.stopPropagation()}
                     className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all shadow-xs"
                     title="View Facebook"
                   >
                     <Facebook size={16} />
                   </a>
                   
                   <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedStartup(startup); }}
                    className="ml-auto text-[10px] font-black text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors uppercase tracking-widest"
                   >
                      Profile
                   </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        
      {filteredStartups.length === 0 && (
        <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 mx-auto">
             <Rocket size={24} className="text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zero matching startups</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto font-medium text-sm">
            No startups match these filters.
          </p>
          <button 
             onClick={() => {setSelectedIndustry('All'); setSelectedStage('All');}}
             className="px-6 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-black text-sm hover:scale-105 transition-transform"
          >
             Clear Filters
          </button>
        </div>
      )}

      {selectedStartup && (
        <OrganizationModal org={selectedStartup} onClose={() => setSelectedStartup(null)} />
      )}
    </div>
  );
};

export default ActiveStartups;
