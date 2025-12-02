

import React from 'react';
import { X, Facebook, Globe, ExternalLink } from 'lucide-react';
import { Organization } from '../types';

interface OrganizationModalProps {
  org: Organization;
  onClose: () => void;
}

const OrganizationModal: React.FC<OrganizationModalProps> = ({ org, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="org-modal-title"
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Background */}
        <div className="h-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700/50"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 bg-white/60 dark:bg-black/20 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded-full transition-colors z-10 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="px-6 pb-8 relative">
          {/* Logo */}
          <div className="-mt-14 mb-5 flex justify-center">
             <div className="w-28 h-28 rounded-3xl bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden flex items-center justify-center">
                <img 
                  src={org.logoUrl} 
                  alt={org.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=random&color=fff`;
                  }}
                />
             </div>
          </div>

          <div className="space-y-6 text-center">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                 {org.types.map((type, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 text-[#35308f] dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
                    >
                      {type}
                    </span>
                 ))}
              </div>
              <h2 id="org-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
                {org.name}
              </h2>
            </div>

            <div className="text-left bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
               <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">About</h3>
               <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg font-medium">
                 {org.description}
               </p>
            </div>

            <div className={`pt-2 grid gap-3 ${org.websiteUrl ? 'grid-cols-2' : 'grid-cols-1'}`}>
               {org.websiteUrl && (
                 <a 
                   href={org.websiteUrl}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3 rounded-xl transition-colors group focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                 >
                   <Globe size={18} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                   <span className="text-sm">Website</span>
                 </a>
               )}
               <a 
                 href={org.facebookUrl}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500"
               >
                 <Facebook size={18} />
                 <span className="text-sm">Facebook</span>
               </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>
  );
};

export default OrganizationModal;