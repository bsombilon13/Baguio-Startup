import React from 'react';
import { activeStartups } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Rocket, Facebook, TrendingUp } from 'lucide-react';

const ActiveStartups: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white transition-colors">
          Active Startups
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Discover the startups building from the mountains.</p>
      </div>

      <BentoGrid>
        {activeStartups.map((startup) => (
          <BentoItem 
            key={startup.id}
            className="flex flex-col gap-4 group hover:border-[#35308f]/30 dark:hover:border-[#35308f]/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white">
                <img 
                  src={startup.logoUrl} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
               <div className="flex flex-col items-end gap-1">
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 text-[#35308f] dark:text-indigo-300">
                    {startup.stage}
                 </span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
                {startup.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">
                {startup.description}
              </p>
            </div>
            
             <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                   <Rocket size={12} /> {startup.industry}
                </span>
                <a 
                  href={startup.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#35308f] transition-colors"
                >
                  <Facebook size={16} />
                </a>
             </div>
          </BentoItem>
        ))}
         <BentoItem className="border-dashed !border-slate-300 dark:!border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer !shadow-none">
           <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-[#35308f] group-hover:scale-110 transition-all">
             <span className="text-2xl font-light">+</span>
           </div>
           <div>
             <h3 className="text-base font-bold text-slate-600 dark:text-slate-300 group-hover:text-[#35308f]">List your Startup</h3>
             <p className="text-xs text-slate-400">Join the directory</p>
           </div>
        </BentoItem>
      </BentoGrid>
    </div>
  );
};

export default ActiveStartups;