
import React, { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { X, Save, Rocket, Link as LinkIcon, Facebook, Globe, Image, ChevronDown, Edit3 } from 'lucide-react';
import { ThemeContext } from '../App';

interface StartupSubmissionModalProps {
  onClose: () => void;
}

const StartupSubmissionModal: React.FC<StartupSubmissionModalProps> = ({ onClose }) => {
  const { addItem } = useContext(ThemeContext);
  const [sectorType, setSectorType] = useState('Tech');
  const [customSector, setCustomSector] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logoUrl: '',
    facebookUrl: '',
    websiteUrl: '',
    stage: 'Idea' as const,
  });

  const industries = ['Tech', 'Service', 'E-commerce', 'AgriTech', 'Creative', 'Health', 'CleanTech', 'Material Science', 'Other'];
  const stages = ['Idea', 'Pre-Seed', 'Seed', 'Growth'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logic for "Other" sector input
    const finalSector = sectorType === 'Other' ? (customSector || 'Startup') : sectorType;
    
    // Construct the new startup object to match the directory structure
    const newStartup = {
      id: `startup-${Date.now()}`,
      name: formData.name || 'Unnamed Startup',
      description: formData.description || 'No description provided.',
      logoUrl: formData.logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&size=128`,
      facebookUrl: formData.facebookUrl || '#',
      websiteUrl: formData.websiteUrl || undefined,
      industry: [finalSector], // Store as an array to keep the UI filters working
      stage: formData.stage,
    };

    addItem('startup', newStartup);
    onClose();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] md:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-in slide-in-from-bottom-full md:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50 rounded-t-[2rem] md:rounded-t-3xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Rocket className="text-[#35308f]" size={24} /> Add New Listing
            </h2>
            <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors focus:outline-none"
            >
                <X size={20} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 custom-scrollbar">
            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Basic Info</label>
                <div className="space-y-3">
                    <div className="relative">
                        <Edit3 className="absolute left-4 top-3.5 text-slate-400" size={16} />
                        <input 
                            required
                            type="text" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white font-medium"
                            placeholder="Startup Name"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <textarea 
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white font-medium resize-none"
                        placeholder="Description (What problem are you solving?)"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Media & Links</label>
                <div className="space-y-3">
                    <div className="relative">
                        <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                            required
                            type="url" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none font-medium dark:text-white"
                            placeholder="Media URL (Logo or Photo link)"
                            value={formData.logoUrl}
                            onChange={e => setFormData({...formData, logoUrl: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <Facebook className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                            type="url" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none font-medium dark:text-white"
                            placeholder="Facebook URL (Optional)"
                            value={formData.facebookUrl}
                            onChange={e => setFormData({...formData, facebookUrl: e.target.value})}
                        />
                    </div>
                    <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                            type="url" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none font-medium dark:text-white"
                            placeholder="Website URL (Optional)"
                            value={formData.websiteUrl}
                            onChange={e => setFormData({...formData, websiteUrl: e.target.value})}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Sector</label>
                    <div className="relative">
                        <select 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none dark:text-white font-bold appearance-none cursor-pointer pr-10"
                            value={sectorType}
                            onChange={e => setSectorType(e.target.value)}
                        >
                            {industries.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                    {sectorType === 'Other' && (
                        <input 
                            autoFocus
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-indigo-200 dark:border-slate-700 bg-indigo-50/30 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white font-medium"
                            placeholder="Specify Sector..."
                            value={customSector}
                            onChange={e => setCustomSector(e.target.value)}
                        />
                    )}
                </div>
                <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Current Stage</label>
                    <div className="relative">
                        <select 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none dark:text-white font-bold appearance-none cursor-pointer pr-10"
                            value={formData.stage}
                            onChange={e => setFormData({...formData, stage: e.target.value as any})}
                        >
                            {stages.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button 
                    type="submit" 
                    className="w-full py-4 bg-[#35308f] hover:bg-[#2a2670] text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-100 dark:shadow-none"
                >
                    <Save size={18} /> Save Listing
                </button>
                <p className="text-center text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest leading-relaxed">
                    This item will be added to the directory immediately and saved locally.
                </p>
            </div>
        </form>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
};

export default StartupSubmissionModal;
