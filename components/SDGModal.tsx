
import React from 'react';
import { createPortal } from 'react-dom';
import { X, Globe, Target, Info } from 'lucide-react';
import { SDG } from '../sdgData';

interface SDGModalProps {
  sdg: SDG;
  onClose: () => void;
}

const SDGModal: React.FC<SDGModalProps> = ({ sdg, onClose }) => {
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#0b1021] w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 flex flex-col md:flex-row border border-slate-700/50"
        onClick={(e) => e.stopPropagation()}
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-[#0b1021]/90"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md border border-white/10"
        >
          <X size={20} />
        </button>

        {/* Content Container */}
        <div className="relative z-10 w-full p-8 md:p-12 text-white">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                {/* Large Icon Tile */}
                <div 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shrink-0 flex items-center justify-center p-4 shadow-2xl shadow-black/50 ring-4 ring-white/10"
                    style={{ backgroundColor: sdg.color }}
                >
                    <img src={sdg.iconUrl} alt={sdg.title} className="w-full h-full object-contain drop-shadow-md" />
                </div>

                <div className="flex-1 pt-2">
                    <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold uppercase tracking-widest mb-3 text-white/80">
                        Sustainable Development Goal {sdg.id}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{sdg.title}</h2>
                    <p className="text-lg text-white/80 leading-relaxed max-w-2xl font-light">
                        {sdg.description}
                    </p>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* About Panel */}
                <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-slate-900/50 transition-colors">
                    <div className="flex items-center gap-2 mb-4 text-white/60 text-xs font-bold uppercase tracking-wider">
                        <Info size={14} /> About this Goal
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm">
                        Investments in infrastructure – transport, irrigation, energy and information and communication technology – are crucial to achieving sustainable development and empowering communities in many countries.
                    </p>
                </div>

                {/* Global Impact Panel */}
                <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-slate-900/50 transition-colors flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Globe size={100} />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-white/60 text-xs font-bold uppercase tracking-wider">
                        <Globe size={14} /> Global Impact
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2">
                        {sdg.globalData.stat}
                    </div>
                    <p className="text-white/80 text-sm font-medium max-w-xs">
                        {sdg.globalData.text}
                    </p>
                </div>

            </div>

            {/* Key Targets Section */}
            <div className="mt-8">
                 <div className="flex items-center gap-2 mb-4 text-white/60 text-xs font-bold uppercase tracking-wider">
                    <Target size={14} /> Key Targets
                </div>
                <div className="grid gap-3">
                    {sdg.targets.map((target, index) => (
                        <div key={index} className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-white/10">
                                {index + 1}
                            </div>
                            <p className="text-white/90 text-sm leading-relaxed">{target}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>,
    document.body
  );
};

export default SDGModal;
