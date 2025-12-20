
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Save, PlusCircle, Trash2, Rocket, Users, Calendar, Megaphone, BookOpen } from 'lucide-react';

interface ManagerFormModalProps {
  type: 'startup' | 'ecosystem' | 'event' | 'opportunity' | 'resource';
  onClose: () => void;
  onSave: (data: any) => void;
}

const ManagerFormModal: React.FC<ManagerFormModalProps> = ({ type, onClose, onSave }) => {
  const [formData, setFormData] = useState<any>({
    id: Math.random().toString(36).substr(2, 9),
    name: '',
    title: '',
    description: '',
    logoUrl: '',
    imageUrl: '',
    bannerUrl: '',
    url: '',
    link: '',
    facebookUrl: '',
    websiteUrl: '',
    industry: ['Tech'],
    types: ['Community'],
    stage: 'Idea',
    date: new Date().toISOString().split('T')[0],
    location: '',
    tags: [],
    organization: '',
    amount: '',
    deadline: '',
    format: '',
    size: 'N/A',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Special handling for dates
    const dataToSave = { ...formData };
    if (type === 'event') dataToSave.date = new Date(formData.date);
    onSave(dataToSave);
  };

  const getIcon = () => {
    switch (type) {
      case 'startup': return <Rocket size={24} />;
      case 'ecosystem': return <Users size={24} />;
      case 'event': return <Calendar size={24} />;
      case 'opportunity': return <Megaphone size={24} />;
      case 'resource': return <BookOpen size={24} />;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-indigo-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-indigo-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
             <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200">
                {getIcon()}
             </div>
             <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">Add {type}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Common fields based on existence in data model */}
            {(type === 'startup' || type === 'ecosystem') && (
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
            )}

            {(type === 'event' || type === 'opportunity' || type === 'resource') && (
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Title</label>
                <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
            )}

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
              <textarea required rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none resize-none" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>

            {type === 'event' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Date</label>
                  <input required type="datetime-local" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Location</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
                </div>
              </>
            )}

            {(type === 'startup' || type === 'ecosystem' || type === 'event' || type === 'opportunity') && (
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Media URL (Logo/Banner/Image)</label>
                <input className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="https://..." value={formData.logoUrl || formData.imageUrl || formData.bannerUrl} onChange={e => setFormData({...formData, logoUrl: e.target.value, imageUrl: e.target.value, bannerUrl: e.target.value})} />
              </div>
            )}

            {type === 'resource' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Resource URL</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" value={formData.url} onChange={e => setFormData({...formData, url: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Format</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="PDF / WEB / DOC" value={formData.format} onChange={e => setFormData({...formData, format: e.target.value})} />
                </div>
              </>
            )}

            {type === 'opportunity' && (
               <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Amount/Value</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Deadline</label>
                  <input required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" placeholder="e.g. Jan 15, 2026" value={formData.deadline} onChange={e => setFormData({...formData, deadline: e.target.value})} />
                </div>
               </>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
             <button type="button" onClick={onClose} className="flex-1 px-6 py-3.5 rounded-2xl font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
             <button type="submit" className="flex-[2] px-6 py-3.5 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-2">
                <Save size={18} /> Save Entry
             </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ManagerFormModal;
