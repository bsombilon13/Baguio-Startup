import React from 'react';
import { X, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-white/40 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 ring-1 ring-slate-900/5"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/50 hover:bg-white text-slate-900 p-2 rounded-full transition-colors z-10 shadow-sm backdrop-blur-md"
        >
          <X size={20} />
        </button>

        <div className="h-48 w-full overflow-hidden relative">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 relative">
          <div className="flex flex-wrap gap-2 mb-4 -mt-10 relative z-20">
            {event.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white text-violet-600 text-xs font-bold rounded-full border border-slate-100 shadow-md">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">{event.title}</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-600">
              <CalendarIcon size={18} className="mr-2 text-violet-500" />
              <span className="font-medium">{event.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center text-slate-600">
              <MapPin size={18} className="mr-2 text-violet-500" />
              <span className="font-medium">{event.location}</span>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            {event.description}
          </p>

          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl">
            Register for Event
          </button>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default EventModal;