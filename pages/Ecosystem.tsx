import React from 'react';
import { ecosystemOrgs } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Facebook, Building2 } from 'lucide-react';

const Ecosystem: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white transition-colors">
          The Ecosystem
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Partners, communities, and enablers driving innovation.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {['All', 'Community', 'Non-Profit', 'Government', 'Academe'].map(filter => (
            <button key={filter} className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-sm whitespace-nowrap transition-colors first:bg-[#35308f] first:text-white first:border-transparent">
              {filter}
            </button>
          ))}
      </div>

      <BentoGrid>
        {ecosystemOrgs.map((org) => (
          <BentoItem 
            key={org.id}
            className="flex flex-col gap-4 bg-white dark:bg-slate-900"
          >
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 bg-white">
                <img 
                  src={org.logoUrl} 
                  alt={org.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-2">
                 <a 
                  href={org.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
                  title="Visit Facebook Page"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <div className="mb-2">
                 <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {org.type}
                 </span>
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">
                {org.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {org.description}
              </p>
            </div>
            
            <button className="mt-auto w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              View Profile
            </button>
          </BentoItem>
        ))}
      </BentoGrid>
    </div>
  );
};

export default Ecosystem;