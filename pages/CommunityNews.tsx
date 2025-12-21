
import React from 'react';
import { communityNews } from '../data';
import { ExternalLink, Facebook, ArrowRight, MessageSquare, Newspaper } from 'lucide-react';

const CommunityNews: React.FC = () => {
  return (
    <div className="space-y-12 pb-32 max-w-[1400px] mx-auto">
      <header className="relative py-12 px-6 md:px-12 rounded-[3rem] bg-gradient-to-br from-[#35308f] via-indigo-900 to-slate-900 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-[0.2em] mb-4 text-emerald-400">
               <Newspaper size={14} /> The Pulse
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Headlines</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
              Celebrating the wins, stories, and growth of the highland startup ecosystem.
            </p>
          </div>
          <div className="hidden lg:block w-72 h-72 relative">
             <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] rotate-6 border border-white/10"></div>
             <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] -rotate-3 border border-white/10 flex items-center justify-center">
                <MessageSquare size={80} className="text-white opacity-20" />
             </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {communityNews.map((news, index) => {
          // Highlight the first two items as larger featured items
          const isFeatured = index < 2;
          
          return (
            <div 
              key={news.id} 
              className={`group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ${isFeatured ? 'md:col-span-1 lg:col-span-1' : ''}`}
            >
              {/* Dynamic Gradient Top Border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-64 overflow-hidden shrink-0">
                 <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-2xl text-[10px] font-black text-white shadow-lg flex items-center gap-1.5 border border-white/20">
                       <Facebook size={12} className="text-[#1877F2]" /> {news.source}
                    </span>
                 </div>
                 
                 <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-2xl text-[10px] font-black text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 shadow-sm">
                       {news.date}
                    </span>
                 </div>

                <img 
                  src={news.imageUrl} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1 relative bg-white dark:bg-slate-900">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-[1.2] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {news.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium line-clamp-4">
                  {news.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={news.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-emerald-400 transition-all group/btn"
                  >
                    Read Story <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {communityNews.length === 0 && (
         <div className="py-32 text-center">
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
               <Newspaper size={40} className="text-slate-200" />
            </div>
            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">No Headlines Yet</h3>
         </div>
      )}
    </div>
  );
};

export default CommunityNews;
