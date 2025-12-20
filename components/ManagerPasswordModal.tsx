
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ShieldAlert, KeyRound, ArrowRight } from 'lucide-react';

interface ManagerPasswordModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const ManagerPasswordModal: React.FC<ManagerPasswordModalProps> = ({ onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'fortheyouth') {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-indigo-100 dark:border-slate-800 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-indigo-200 dark:shadow-none">
            <ShieldAlert size={40} />
          </div>
          
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Manager Access</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-8">
            Please enter the community password to access management tools.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                autoFocus
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl border ${error ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'} focus:ring-2 focus:ring-indigo-500 outline-none transition-all font-bold text-center tracking-widest`}
              />
              {error && (
                <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest mt-2 animate-pulse">Incorrect Password</p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 dark:shadow-none transition-all flex items-center justify-center gap-2 group"
            >
              Verify Access <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              type="button"
              onClick={onClose}
              className="w-full py-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 font-bold text-xs uppercase tracking-widest transition-colors"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ManagerPasswordModal;
