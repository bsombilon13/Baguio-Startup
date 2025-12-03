

import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from 'date-fns';
import { Calendar as CalendarIcon, List as ListIcon, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { events } from '../data';
import EventModal from '../components/EventModal';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Event } from '../types';

const Events: React.FC = () => {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Static filters
  const filters = ['All', 'Workshop', 'Conference', 'Training', 'Meetups', 'Exclusive'];

  // Filter Logic
  const filteredEvents = events.filter(event => {
    return activeFilter === 'All' || event.tags.includes(activeFilter);
  });

  // Calendar logic
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const getEventsForDay = (date: Date) => filteredEvents.filter(e => isSameDay(e.date, date));

  const handleDayKeyDown = (e: React.KeyboardEvent, event: Event) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedEvent(event);
    }
  };

  const getMainTag = (tags: string[]) => {
    const mainTags = filters.filter(f => f !== 'All');
    return tags.find(t => mainTags.includes(t));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#35308f] dark:text-indigo-400 transition-colors mb-2">
            Events Calendar
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Workshops, meetups, and conferences in the region.</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-1 rounded-xl flex gap-1 border border-slate-200 dark:border-slate-800 shadow-sm" role="group" aria-label="View Toggle">
          <button
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
              view === 'list' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <ListIcon size={16} /> List
          </button>
          <button
            onClick={() => setView('calendar')}
            aria-pressed={view === 'calendar'}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
              view === 'calendar' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <CalendarIcon size={16} /> Calendar
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filter events by tag">
          <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 shrink-0">
             <Filter size={14} /> Filter:
          </span>
          {filters.map(filter => (
            <button 
              key={filter} 
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-4 py-2 rounded-lg border text-sm font-bold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]
                ${activeFilter === filter 
                  ? 'bg-[#35308f] text-white border-[#35308f] shadow-md shadow-indigo-200 dark:shadow-none' 
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }
              `}
            >
              {filter}
            </button>
          ))}
      </div>

      {view === 'list' && (
        <BentoGrid>
          {filteredEvents.map((event) => {
            const mainTag = getMainTag(event.tags);
            return (
              <BentoItem 
                key={event.id}
                className="md:col-span-1 md:row-span-1"
                background={event.imageUrl}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2 mb-2">
                     <div className="bg-white/90 dark:bg-black/80 w-fit px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white backdrop-blur-md shadow-sm">
                       {format(event.date, 'MMM d, h:mm a')}
                     </div>
                     {mainTag && (
                        <div className="bg-[#35308f]/90 dark:bg-indigo-600/90 w-fit px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md shadow-sm border border-white/20">
                          {mainTag}
                        </div>
                     )}
                   </div>
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{event.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md font-medium">{event.description}</p>
                </div>
              </BentoItem>
            );
          })}
          
          {filteredEvents.length === 0 && (
             <div className="col-span-full py-12 text-center text-slate-400">
               No events found matching "{activeFilter}"
             </div>
          )}
        </BentoGrid>
      )}

      {view === 'calendar' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-4 md:p-8 transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="flex gap-2">
              <button 
                onClick={prevMonth} 
                aria-label="Previous month"
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextMonth} 
                aria-label="Next month"
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 md:gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-slate-400 dark:text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider py-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for offset */}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[80px] md:min-h-[120px]"></div>
            ))}

            {daysInMonth.map(day => {
              const dayEvents = getEventsForDay(day);
              const isTodayDate = isToday(day);
              const hasEvents = dayEvents.length > 0;

              return (
                <div 
                  key={day.toString()} 
                  role={hasEvents ? 'button' : undefined}
                  tabIndex={hasEvents ? 0 : -1}
                  onKeyDown={hasEvents ? (e) => handleDayKeyDown(e, dayEvents[0]) : undefined}
                  onClick={() => hasEvents && setSelectedEvent(dayEvents[0])}
                  aria-label={`${format(day, 'MMMM do')}${hasEvents ? `, ${dayEvents[0].title}` : ''}`}
                  className={`
                    min-h-[80px] md:min-h-[120px] rounded-2xl p-2 border transition-all relative group flex flex-col
                    ${isTodayDate ? 'border-[#35308f] bg-indigo-50 dark:bg-indigo-900/20 shadow-inner' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md'}
                    ${hasEvents ? 'cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-[#35308f]' : ''}
                  `}
                >
                  <span className={`text-sm font-bold ${isTodayDate ? 'text-[#35308f] dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {format(day, 'd')}
                  </span>
                  
                  {hasEvents && (
                    <div className="mt-1 space-y-1 flex-1 overflow-hidden">
                      {dayEvents.slice(0, 2).map(e => (
                         <div key={e.id} className="truncate text-[10px] font-semibold bg-indigo-100 dark:bg-indigo-900/40 text-[#35308f] dark:text-indigo-300 px-1.5 py-1 rounded border border-indigo-200 dark:border-indigo-800/50">
                            {e.title}
                         </div>
                      ))}
                      {dayEvents.length > 2 && (
                         <span className="text-[10px] text-slate-400 font-medium pl-1 block">+{dayEvents.length - 2} more</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default Events;
