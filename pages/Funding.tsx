import React from 'react';
import { opportunities } from '../data';
import { ArrowRight, DollarSign, Clock } from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 mb-8 shadow-2xl shadow-orange-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"></div>
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
            className="group relative bg-white border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/50 rounded-2xl p-6 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                   <span className={`
                     px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide
                     ${opp.type === 'Grant' ? 'bg-emerald-100 text-emerald-700' : ''}
                     ${opp.type === 'Investment' ? 'bg-blue-100 text-blue-700' : ''}
                     ${opp.type === 'Accelerator' ? 'bg-purple-100 text-purple-700' : ''}
                   `}>
                     {opp.type}
                   </span>
                   <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">{opp.title}</h3>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed">{opp.description}</p>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-wider">By {opp.organization}</div>
              </div>

              <div className="flex flex-wrap gap-4 md:min-w-[300px] justify-start md:justify-end">
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 font-medium">
                  <DollarSign size={16} className="text-amber-500" />
                  <span className="font-mono">{opp.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 font-medium">
                  <Clock size={16} className="text-red-400" />
                  <span>{opp.deadline}</span>
                </div>
              </div>
              
              <button className="md:ml-4 p-3 rounded-full bg-slate-50 hover:bg-amber-500 hover:text-white text-slate-400 transition-all self-start md:self-center shadow-sm">
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