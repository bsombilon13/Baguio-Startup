import React from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, MessageSquare, Linkedin, User } from 'lucide-react';
import { Mentor } from '../types';

interface MentorModalProps {
  mentor: Mentor;
  onClose: () => void;
}

const MentorModal: React.FC<MentorModalProps> = ({ mentor, onClose }) => {
  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Tech': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Product': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'Marketing': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'Finance': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Legal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Strategy': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'Operations': return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      case 'Design': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'Sales': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mentor-modal-title"
    >
      <div 
        className="bg-white dark:bg-slate-900 border-t md:border border-slate-100 dark:border-slate-800 w-full max-w-md rounded-t-[2rem] md:rounded-3xl overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-full md:zoom-in-95 duration-300 max-h-[90vh] md:max-h-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-32 bg-gradient-to-br from-[#35308f] to-indigo-600"></div>

        <button 
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X size={20} />
        </button>

        <div className="px-6 pb-8 relative">
          <div className="-mt-16 mb-5 flex justify-center">
             <div className="w-32 h-32 rounded-[2.5rem] bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={mentor.photoUrl} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          <div className="space-y-6 text-center">
            <div>
              <h2 id="mentor-modal-title" className="text-2xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                {mentor.name}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-2">
                 {mentor.expertise.map((e, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border border-transparent shadow-sm ${getExpertiseColor(e)}`}
                    >
                      {e}
                    </span>
                 ))}
              </div>
            </div>

            <div className="text-left bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
               <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                 <User size={14} /> Professional Bio
               </h3>
               <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base font-medium italic">
                 "{mentor.bio}"
               </p>
            </div>

            <div className="pt-2">
               <a 
                 href={mentor.connectUrl}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-3 bg-[#35308f] hover:bg-[#2a2670] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-indigo-100 dark:shadow-none focus:outline-none focus:ring-4 focus:ring-indigo-500/20 active:scale-95"
               >
                 <ExternalLink size={20} />
                 <span className="text-sm uppercase tracking-widest">Connect with Mentor</span>
               </a>
            </div>
            
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              Subject to mentor availability and community guidelines.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
};

export default MentorModal;