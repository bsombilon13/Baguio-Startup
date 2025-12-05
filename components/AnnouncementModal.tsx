
import React from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Info, Calendar, DollarSign, Building2 } from 'lucide-react';
import { Opportunity } from '../types';

interface AnnouncementModalProps {
  opportunity: Opportunity;
  onClose: () => void;
}

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ opportunity, onClose }) => {
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] md:rounded-3xl shadow-2xl relative animate-in slide-in-from-bottom-full md:zoom-in-95 duration-300 flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner */}
        <div className="h-32 md:h-48 bg-slate-100 dark:bg-slate-800 relative shrink-0">
            {opportunity.bannerUrl ? (
                <img src={opportunity.bannerUrl} alt="" className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Building2 className="text-white opacity-20" size={64} />
                </div>
            )}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors z-10"
            >
                <X size={20} />
            </button>
            <div className="absolute top-4 left-4 z-10">
                 <span className={`
                      px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide shadow-sm
                      ${opportunity.type === 'Grant' ? 'bg-emerald-100 text-emerald-800' : ''}
                      ${opportunity.type === 'Investment' ? 'bg-blue-100 text-blue-800' : ''}
                      ${opportunity.type === 'Accelerator' ? 'bg-purple-100 text-purple-800' : ''}
                      ${opportunity.type === 'Awards' ? 'bg-amber-100 text-amber-800' : ''}
                      ${opportunity.type === 'Competition' ? 'bg-orange-100 text-orange-800' : ''}
                      ${opportunity.type === 'Call for Experts' ? 'bg-cyan-100 text-cyan-800' : ''}
                    `}>
                      {opportunity.type}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{opportunity.title}</h2>
            <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
                <Building2 size={16} /> {opportunity.organization}
            </div>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Value</div>
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1 text-sm md:text-base">
                        <DollarSign size={14} className="text-emerald-500 shrink-0"/> <span className="truncate">{opportunity.amount}</span>
                    </div>
                </div>
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Deadline</div>
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1 text-sm md:text-base">
                        <Calendar size={14} className="text-rose-500 shrink-0"/> <span className="truncate">{opportunity.deadline}</span>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Description</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                    {opportunity.description}
                </p>
            </div>

            <div className="flex flex-col gap-3 pb-safe">
                 {opportunity.link && (
                    <a href={opportunity.link} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-[#35308f] hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                        Apply Now <ExternalLink size={18} />
                    </a>
                 )}
                 {opportunity.moreDetailsLink && (
                    <a href={opportunity.moreDetailsLink} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                        More Details <Info size={18} />
                    </a>
                 )}
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AnnouncementModal;
