
import React from 'react';
import { opportunities } from '../data';
import { ArrowRight, DollarSign, Clock } from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 mb-8 shadow-2xl shadow-orange-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fuel Your Growth</h1>
          <p className="text-lg text-amber-50 mb-8 font-medium">
            Access grants, investments, and accelerator programs tailored for startups in our ecosystem.
          </p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg flex items-center gap-2">
            Submit an Opportunity <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {opportunities.map((opp) => (
          <div 
            key={opp.id}
            className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-700/50 hover:shadow-xl hover:shadow-amber-100/50 dark:hover:shadow-none rounded-2xl overflow-hidden transition-all duration-300 shadow-sm flex flex-col md:flex-row"
          >
            {opp.bannerUrl && (
               <div className="w-full md:w-48 h-48 md:h-auto md:min-h-[12rem] shrink-0 relative border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 overflow-hidden">
                  <img src={opp.bannerUrl} alt={opp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                   <span className={`
                     px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide
                     ${opp.type === 'Grant' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : ''}
                     ${opp.type === 'Investment' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                     ${opp.type === 'Accelerator' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' : ''}
                     ${opp.type === 'Awards' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                   `}>
                     {opp.type}
                   </span>
                   <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{opp.title}</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{opp.description}</p>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">By {opp.organization}</div>
              </div>

              <div className="flex flex-wrap gap-4 md:min-w-[300px] justify-start md:justify-end">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-100 dark:border-slate-700 font-medium">
                  <DollarSign size={16} className="text-amber-500" />
                  <span className="font-mono">{opp.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-100 dark:border-slate-700 font-medium">
                  <Clock size={16} className="text-red-400" />
                  <span>{opp.deadline}</span>
                </div>
              </div>
              
              <button className="md:ml-4 p-3 rounded-full bg-slate-50 dark:bg-slate-800 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-600 text-slate-400 transition-all self-start md:self-center shadow-sm">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funding;
