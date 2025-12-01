import React from 'react';
import { startups } from '../data';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Facebook, ExternalLink, Globe } from 'lucide-react';

const Ecosystem: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          The Ecosystem
        </h1>
        <p className="text-slate-500 mt-2 font-medium">Discover the startups and communities shaping the future.</p>
      </div>

      <BentoGrid>
        {startups.map((startup, i) => (
          <BentoItem 
            key={startup.id}
            className={`
              flex flex-col gap-4 group
              ${startup.isFeatured ? 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-600 !border-0 text-white' : 'bg-white'}
            `}
          >
            <div className="flex items-start justify-between">
              <div className={`
                rounded-2xl overflow-hidden shadow-lg
                ${startup.isFeatured ? 'w-20 h-20 border-4 border-white/20' : 'w-14 h-14 border border-slate-100'}
              `}>
                <img 
                  src={startup.logoUrl} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-2">
                 <a 
                  href={startup.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${
                    startup.isFeatured 
                      ? 'bg-white/20 text-white hover:bg-white hover:text-blue-600' 
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  title="Visit Facebook Page"
                >
                  <Facebook size={18} />
                </a>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  startup.isFeatured
                    ? 'bg-white/10 text-white border-white/20'
                    : 'bg-slate-50 text-slate-500 border-slate-100'
                }`}>
                  {startup.category}
                </span>
              </div>
            </div>

            <div>
              <h3 className={`font-bold mb-1 transition-colors ${
                startup.isFeatured 
                  ? 'text-white text-2xl' 
                  : 'text-slate-800 text-lg group-hover:text-blue-600'
              }`}>
                {startup.name}
              </h3>
              <p className={`text-sm leading-relaxed ${
                startup.isFeatured ? 'text-indigo-100' : 'text-slate-500'
              }`}>
                {startup.description}
              </p>
            </div>
            
            {startup.isFeatured && (
               <div className="mt-auto pt-4 flex gap-4 text-sm font-medium text-blue-100">
                  <span className="flex items-center gap-1"><Globe size={14}/> Official Partner</span>
                  <span className="flex items-center gap-1"><ExternalLink size={14}/> Featured Community</span>
               </div>
            )}
          </BentoItem>
        ))}
        
        {/* Placeholder for "Join Us" */}
        <BentoItem className="border-dashed border-2 !border-slate-300 bg-slate-50/50 hover:!border-violet-500 hover:bg-violet-50 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer !shadow-none">
           <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-violet-500 group-hover:scale-110 transition-all">
             <span className="text-3xl font-light">+</span>
           </div>
           <div>
             <h3 className="text-lg font-bold text-slate-600 group-hover:text-violet-600">Join the List</h3>
             <p className="text-xs text-slate-400">Submit your startup</p>
           </div>
        </BentoItem>
      </BentoGrid>
    </div>
  );
};

export default Ecosystem;