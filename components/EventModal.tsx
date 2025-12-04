

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Calendar as CalendarIcon, ExternalLink, CalendarPlus, Download, Info, ChevronRight, Clock } from 'lucide-react';
import { Event, Organization, Startup } from '../types';
import { format } from 'date-fns';
import { ecosystemOrgs, activeStartups } from '../data';

interface EventModalProps {
  event: Event;
  onClose: () => void;
  onOrganizerClick?: (org: Organization | Startup) => void;
}

const ALLOWED_TAGS = ['Workshop', 'Conference', 'Training', 'Meetups', 'Exclusive', 'Fair'];

const EventModal: React.FC<EventModalProps> = ({ event, onClose, onOrganizerClick }) => {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  // Filter tags to only show the main categories
  const displayTags = event.tags.filter(tag => ALLOWED_TAGS.includes(tag));

  // Find organizer
  const organizer = event.organizerId 
    ? [...ecosystemOrgs, ...activeStartups].find(o => o.id === event.organizerId)
    : null;

  // Helper to format dates for Calendar APIs (YYYYMMDDTHHmmssZ)
  const formatCalendarDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const getEventTimes = () => {
    const start = new Date(event.date);
    // Default duration of 3 hours if not specified, since most workshops in data are 1-5pm
    const end = event.endDate ? new Date(event.endDate) : new Date(start.getTime() + 4 * 60 * 60 * 1000); 
    return { start, end };
  };

  const handleGoogleCalendar = () => {
    const { start, end } = getEventTimes();
    const googleUrl = new URL("https://www.google.com/calendar/render");
    googleUrl.searchParams.append("action", "TEMPLATE");
    googleUrl.searchParams.append("text", event.title);
    googleUrl.searchParams.append("dates", `${formatCalendarDate(start)}/${formatCalendarDate(end)}`);
    googleUrl.searchParams.append("details", event.description);
    googleUrl.searchParams.append("location", event.location);
    
    window.open(googleUrl.toString(), '_blank');
    setShowCalendarOptions(false);
  };

  const handleDownloadICS = () => {
    const { start, end } = getEventTimes();
    const formatDate = (d: Date) => formatCalendarDate(d);
    
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `URL:${event.link || ''}`,
      `DTSTART:${formatDate(start)}`,
      `DTEND:${formatDate(end)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `${event.title.replace(/\s+/g, "_")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCalendarOptions(false);
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/20 dark:bg-black/50 backdrop-blur-sm animate-in fade-in duration-300 ease-out"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-white/40 dark:border-slate-700 w-full max-w-lg rounded-3xl overflow-visible shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-4 fade-in duration-300 ease-out ring-1 ring-slate-900/5 dark:ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white p-2 rounded-full transition-colors z-10 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
          <X size={20} />
        </button>

        <div className="h-48 w-full overflow-hidden relative group rounded-t-3xl">
          <img 
            src={event.imageUrl} 
            alt="" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
          
          {organizer && (
            <div 
                onClick={(e) => {
                    e.stopPropagation();
                    onOrganizerClick?.(organizer);
                }}
                className="absolute top-4 left-4 z-20 cursor-pointer group/org"
                title={`Organized by ${organizer.name}`}
            >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-lg overflow-hidden transition-transform group-hover/org:scale-110">
                    <img 
                        src={organizer.logoUrl} 
                        alt={organizer.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
          )}
        </div>

        <div className="p-6 relative">
          <div className="flex flex-wrap gap-2 mb-4 -mt-10 relative z-20">
            {displayTags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 text-violet-600 dark:text-violet-400 text-xs font-bold rounded-full border border-slate-100 dark:border-slate-700 shadow-md">
                {tag}
              </span>
            ))}
          </div>

          <h2 id="modal-title" className="text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{event.title}</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <CalendarIcon size={18} className="mr-2 text-violet-500" aria-hidden="true" />
              <span className="font-medium">
                {event.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 
                {event.endDate && ` - ${event.endDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}`}
                {' '}| {event.date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <MapPin size={18} className="mr-2 text-violet-500" aria-hidden="true" />
              <span className="font-medium">{event.location}</span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
            {event.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Learn More Button */}
            {event.learnMoreLink && (
              <a 
                href={event.learnMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-200 font-bold py-3 px-6 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Learn More <Info size={18} className="ml-2" />
              </a>
            )}

            {/* Register Button */}
            {event.link ? (
              <a 
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            ) : (
              <button className="flex-1 w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                Register
              </button>
            )}

            {/* Add to Calendar Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCalendarOptions(!showCalendarOptions)}
                className="w-full sm:w-auto h-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-4 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
                aria-haspopup="true"
                aria-expanded={showCalendarOptions}
              >
                <CalendarPlus size={20} />
              </button>

              {showCalendarOptions && (
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                  <button
                    onClick={handleGoogleCalendar}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> Google Calendar
                  </button>
                  <button
                    onClick={handleDownloadICS}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2 border-t border-slate-100 dark:border-slate-700"
                  >
                    <Download size={14} /> Outlook / iCal
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
};

export default EventModal;

interface DayEventsModalProps {
  date: Date;
  events: Event[];
  onClose: () => void;
  onSelectEvent: (event: Event) => void;
  onOrganizerClick?: (org: Organization | Startup) => void;
}

export const DayEventsModal: React.FC<DayEventsModalProps> = ({ date, events, onClose, onSelectEvent, onOrganizerClick }) => {
  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/20 dark:bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 p-2 rounded-full transition-colors z-10"
        >
          <X size={18} />
        </button>

        <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
           <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
             <CalendarIcon className="text-[#35308f]" size={20}/> 
             Events on {format(date, 'MMM do')}
           </h2>
           <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
             {events.length} events scheduled
           </p>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 custom-scrollbar">
           {events.map(event => {
             const organizer = event.organizerId 
                ? [...ecosystemOrgs, ...activeStartups].find(o => o.id === event.organizerId)
                : null;
             
             return (
             <div 
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="flex items-center gap-4 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-[#35308f] dark:hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer group relative"
             >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                   <img src={event.imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {organizer && (
                    <div 
                        onClick={(e) => {
                            e.stopPropagation();
                            onOrganizerClick?.(organizer);
                        }}
                        className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm overflow-hidden z-10 hover:scale-110 transition-transform"
                        title={organizer.name}
                    >
                        <img src={organizer.logoUrl} alt={organizer.name} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="flex-1 min-w-0">
                   <h3 className="font-bold text-slate-900 dark:text-white truncate group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
                     {event.title}
                   </h3>
                   <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <Clock size={12} /> {format(event.date, 'h:mm a')}
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      <MapPin size={12} /> {event.location}
                   </div>
                </div>
                <div className="text-slate-300 group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors">
                   <ChevronRight size={20} />
                </div>
             </div>
           )})}
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true"></div>
    </div>,
    document.body
  );
}
