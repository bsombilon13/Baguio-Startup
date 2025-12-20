
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, Lightbulb, Link as LinkIcon, Info, Calendar } from 'lucide-react';

interface PublicSuggestionModalProps {
  type: 'event' | 'opportunity' | 'resource';
  onClose: () => void;
}

const PublicSuggestionModal: React.FC<PublicSuggestionModalProps> = ({ type, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    moreInfoLink: '',
    contactEmail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Community Suggestion: ${type.toUpperCase()} - ${formData.title}`);
    const body = encodeURIComponent(`
New Community Suggestion:

Type: ${type}
Title: ${formData.title}
Description: ${formData.description}
More Info Link: ${formData.moreInfoLink || 'N/A'}
Contact Email: ${formData.contactEmail || 'N/A'}

Submitted via Baguio Startup Network community hub.
    `);

    window.open(`mailto:baguiostartup@gmail.com?subject=${subject}&body=${body}`, '_blank');
    onClose();
  };

  const getIcon = () => {
    switch(type) {
      case 'event': return <Calendar className="text-indigo-600" size={24} />;
      case 'opportunity': return <Lightbulb className="text-amber-500" size={24} />;
      default: return <Info className="text-emerald-500" size={24} />;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] md:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] relative animate-in slide-in-from-bottom-full md:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50 rounded-t-[2rem] md:rounded-t-3xl">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                {getIcon()} Suggest {type.charAt(0).toUpperCase() + type.slice(1)}
            </h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors">
                <X size={20} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Headline</label>
                    <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-bold"
                        placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)} Title`}
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Description</label>
                    <textarea 
                        required
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white font-medium resize-none"
                        placeholder={`Tell us more about this ${type}...`}
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                    />
                </div>

                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">More Info Link</label>
                    <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                            required
                            type="url" 
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none font-medium dark:text-white"
                            placeholder="https://..."
                            value={formData.moreInfoLink}
                            onChange={e => setFormData({...formData, moreInfoLink: e.target.value})}
                        />
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-100">
                    <Send size={18} /> Submit Suggestion
                </button>
            </div>
        </form>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
};

export default PublicSuggestionModal;
