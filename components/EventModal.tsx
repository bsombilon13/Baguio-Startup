
import React from 'react';
import { X, MapPin, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/20 dark:bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-white/40 dark:border-slate-700 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 ring-1 ring-slate-900/5 dark:ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white p-2 rounded-full transition-colors z-10 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
          <X size={20} />
        </button>

        <div className="h-48 w-full overflow-hidden relative">
          <img 
            src={event.imageUrl} 
            alt="" 
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="p-6 relative">
          <div className="flex flex-wrap gap-2 mb-4 -mt-10 relative z-20">
            {event.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-400 text-xs font-bold rounded-full border border-slate-100 dark:border-slate-700 shadow-md">
                {tag}
              </span>
            ))}
          </div>

          <h2 id="modal-title" className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{event.title}</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <CalendarIcon size={18} className="mr-2 text-violet-500" aria-hidden="true" />
              <span className="font-medium">{event.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} | {event.date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}</span>
            </div>
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <MapPin size={18} className="mr-2 text-violet-500" aria-hidden="true" />
              <span className="font-medium">{event.location}</span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-sm">
            {event.description}
          </p>

          {event.link ? (
            <a 
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {event.link.includes('facebook.com') ? 'View Event on Facebook' : 'Register Here'} <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <button className="w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
              Register for Event
            </button>
          )}
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>
  );
};

export default EventModal;
