

import React from 'react';
import { createPortal } from 'react-dom';
import { X, Map, Users, Building2, Rocket, GraduationCap } from 'lucide-react';

export interface RegionData {
  name: string;
  level: number;
  label: string;
  description: string;
  ecosystemStatus: string;
  stats: {
    startups: string;
    enablers: string;
    schools: string;
  };
  mapUrl: string;
}

interface RegionModalProps {
  region: RegionData;
  onClose: () => void;
  getLevelColor: (level: number) => string;
}

const RegionModal: React.FC<RegionModalProps> = ({ region, onClose, getLevelColor }) => {
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col md:flex-row overflow-hidden border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white p-2 rounded-full transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Left Side: Map & Header (Mobile) */}
        <div className="w-full md:w-2/5 bg-slate-100 dark:bg-slate-800 relative min-h-[200px] md:min-h-full flex items-center justify-center p-0 overflow-hidden">
            <iframe
              src={region.mapUrl}
              className="w-full h-full min-h-[300px] md:min-h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              title={`Map of ${region.name}`}
            />
            
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 p-8 flex flex-col">
            <div className="hidden md:block mb-6">
                 <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-bold text-[#35308f] dark:text-white">{region.name}</h2>
                    <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${getLevelColor(region.level)}`}>
                        Level {region.level}: {region.label}
                    </div>
                 </div>
                 <div className="h-1 w-20 bg-gradient-to-r from-[#35308f] to-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                        <Map size={20} className="text-emerald-500" /> Ecosystem Status
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {region.ecosystemStatus}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <Rocket className="mx-auto mb-2 text-indigo-500" size={24} />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{region.stats.startups}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Startups</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <Building2 className="mx-auto mb-2 text-emerald-500" size={24} />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{region.stats.enablers}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Enablers</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-center">
                        <GraduationCap className="mx-auto mb-2 text-amber-500" size={24} />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{region.stats.schools}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase">Schools</div>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Region Highlights</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-l-4 border-indigo-200 dark:border-indigo-900 pl-4 italic">
                        "{region.description}"
                    </p>
                </div>
            </div>

            <div className="mt-auto pt-8">
                <button 
                    onClick={onClose}
                    className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl transition-colors"
                >
                    Close Details
                </button>
            </div>
        </div>
      </div>
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>,
    document.body
  );
};

export default RegionModal;
