
import React from 'react';
import { communityNews } from '../data';
import { ExternalLink, Facebook } from 'lucide-react';

const CommunityNews: React.FC = () => {
  return (
    <div className="space-y-6 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
          Community News
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
          Latest updates, stories, and highlights from the network.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {communityNews.map((news) => (
          <div 
            key={news.id} 
            className="break-inside-avoid bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 flex flex-col group"
          >
            <div className="relative h-64 overflow-hidden">
               <div className="absolute top-3 right-3 z-10">
                  <span className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white shadow-sm flex items-center gap-1">
                     <Facebook size={12} className="text-[#1877F2]" /> {news.source}
                  </span>
               </div>
              <img 
                src={news.imageUrl} 
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-bold text-[#35308f] dark:text-indigo-400 uppercase tracking-wider mb-2">
                {news.date}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 whitespace-pre-line line-clamp-6">
                {news.excerpt}
              </p>
              
              <a 
                href={news.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm group-hover:bg-[#35308f] group-hover:text-white transition-all shadow-sm"
              >
                Read full story <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {communityNews.length === 0 && (
         <div className="py-20 text-center text-slate-400">
            No news updates at the moment.
         </div>
      )}
    </div>
  );
};

export default CommunityNews;
