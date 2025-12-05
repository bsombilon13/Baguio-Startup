
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, Rocket } from 'lucide-react';

interface StartupSubmissionModalProps {
  onClose: () => void;
}

const StartupSubmissionModal: React.FC<StartupSubmissionModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    industry: 'Tech',
    stage: 'Idea',
    facebook: '',
    website: ''
  });

  const industries = ['Tech', 'Service', 'E-commerce', 'AgriTech', 'Creative', 'Health', 'Other'];
  const stages = ['Idea', 'Pre-Seed', 'Seed', 'Growth'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Startup Listing Request");
    const body = encodeURIComponent(`
Startup Name: ${formData.name}
Description: ${formData.description}
Industry: ${formData.industry}
Stage: ${formData.stage}
Facebook Page: ${formData.facebook}
Website: ${formData.website}
    `);

    window.open(`mailto:baguiostartup@gmail.com?subject=${subject}&body=${body}`, '_blank');
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
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50 rounded-t-[2rem] md:rounded-t-3xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Rocket className="text-[#35308f]" size={24} /> List Your Startup
            </h2>
            <button 
                onClick={onClose} 
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
            >
                <X size={20} />
            </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Startup Name</label>
                <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white"
                    placeholder="e.g. Cordillera Tech"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Description (One Sentence)</label>
                <input 
                    required
                    type="text" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white"
                    placeholder="Briefly describe your solution..."
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Industry</label>
                    <div className="relative">
                        <select 
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white appearance-none"
                            value={formData.industry}
                            onChange={e => setFormData({...formData, industry: e.target.value})}
                        >
                            {industries.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Stage</label>
                    <div className="relative">
                        <select 
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white appearance-none"
                            value={formData.stage}
                            onChange={e => setFormData({...formData, stage: e.target.value})}
                        >
                            {stages.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Facebook Page</label>
                <input 
                    type="url" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white"
                    placeholder="https://facebook.com/..."
                    value={formData.facebook}
                    onChange={e => setFormData({...formData, facebook: e.target.value})}
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Website</label>
                <input 
                    type="url" 
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-[#35308f] outline-none transition-all dark:text-white"
                    placeholder="https://..."
                    value={formData.website}
                    onChange={e => setFormData({...formData, website: e.target.value})}
                />
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    className="w-full py-3 bg-[#35308f] hover:bg-[#2a2670] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35308f]"
                >
                    <Send size={18} /> Submit Request
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                    This will open your default email client to send the request.
                </p>
            </div>
        </form>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
};

export default StartupSubmissionModal;
