
import React, { useState } from 'react';
import { sdgs, SDG } from '../sdgData';
import SDGModal from '../components/SDGModal';
import { ArrowRight } from 'lucide-react';

const SDGPage: React.FC = () => {
  const [selectedSDG, setSelectedSDG] = useState<SDG | null>(null);

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto">
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          THE 17 GOALS
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
          A blueprint for peace and prosperity for people and the planet, now and into the future.
        </p>
      </div>

      {/* Dense Grid Layout - Optimized for Mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
        {sdgs.map((sdg) => (
          <button 
            key={sdg.id}
            onClick={() => setSelectedSDG(sdg)}
            className="aspect-square relative group overflow-hidden rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#35308f] transition-transform hover:scale-105 duration-300 shadow-sm hover:shadow-md"
            style={{ backgroundColor: sdg.color }}
            title={sdg.title}
          >
             <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-3">
                 <img 
                    src={sdg.iconUrl} 
                    alt={sdg.title} 
                    className="w-full h-full object-contain drop-shadow-sm" 
                    loading="lazy"
                 />
             </div>
             
             {/* Hover Effect */}
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
        ))}

        {/* 18th Card - UN Emblem / Learn More */}
        <a 
             href='https://sdgs.un.org/goals'
             target='_blank'
             rel="noopener noreferrer"
             className="aspect-square flex flex-col items-center justify-center bg-[#0b1021] rounded-xl md:rounded-2xl cursor-pointer group hover:bg-[#1a233b] transition-colors p-4 relative overflow-hidden shadow-sm"
        >
            <img 
                src="https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/08/E_SDG_logo_UN_emblem_square_trans_WEB-400x343.png" 
                alt="UN SDG Emblem" 
                className="w-full h-full object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-1 md:bottom-2 text-[8px] md:text-[10px] text-white/50 font-bold uppercase tracking-widest">Global Goals</div>
        </a>
      </div>

      {/* Footer Banner - Refined for Mobile */}
      <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-8 md:mt-12">
        <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">Align Your Startup</h2>
            <p className="text-slate-500 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                Discover how your startup can contribute to the Global Goals. Get resources and connect with impact investors looking for sustainable solutions.
            </p>
        </div>
        <a 
            href="https://sdgs.un.org/goals" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0b1021] hover:bg-[#1a233b] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg flex items-center gap-2 group w-full md:w-auto justify-center"
        >
            Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {selectedSDG && (
        <SDGModal sdg={selectedSDG} onClose={() => setSelectedSDG(null)} />
      )}
    </div>
  );
};

export default SDGPage;
