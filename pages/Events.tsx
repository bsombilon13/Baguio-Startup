import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday } from 'date-fns';
import { Calendar as CalendarIcon, List as ListIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../data';
import EventModal from '../components/EventModal';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Event } from '../types';

const Events: React.FC = () => {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Calendar logic
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const getEventsForDay = (date: Date) => events.filter(e => isSameDay(e.date, date));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">
            Events Calendar
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Workshops, meetups, and conferences in the region.</p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-1 rounded-xl flex gap-1 border border-slate-200 dark:border-slate-800 shadow-sm">
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              view === 'list' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <ListIcon size={16} /> List
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              view === 'calendar' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <CalendarIcon size={16} /> Calendar
          </button>
        </div>
      </div>

      {view === 'list' && (
        <BentoGrid>
          {events.map((event, i) => (
            <BentoItem 
              key={event.id}
              className={`md:col-span-${i === 0 ? '2' : '1'} md:row-span-${i === 0 ? '2' : '1'}`}
              background={event.imageUrl}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="mt-auto">
                 <div className="bg-white/90 dark:bg-black/80 w-fit px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white mb-2 backdrop-blur-md shadow-sm">
                   {format(event.date, 'MMM d, h:mm a')}
                 </div>
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{event.title}</h3>
                <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md font-medium">{event.description}</p>
              </div>
            </BentoItem>
          ))}
        </BentoGrid>
      )}

      {view === 'calendar' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-6 md:p-8 transition-colors">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider py-2">
                {day}
              </div>
            ))}
            
            {/* Empty cells for offset */}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square"></div>
            ))}

            {daysInMonth.map(day => {
              const dayEvents = getEventsForDay(day);
              const isTodayDate = isToday(day);

              return (
                <div 
                  key={day.toString()} 
                  className={`
                    aspect-square rounded-2xl p-2 border transition-all relative group
                    ${isTodayDate ? 'border-[#35308f] bg-indigo-50 dark:bg-indigo-900/20 shadow-inner' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md'}
                    ${dayEvents.length > 0 ? 'cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-500' : ''}
                  `}
                  onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                >
                  <span className={`text-sm font-bold ${isTodayDate ? 'text-[#35308f] dark:text-indigo-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    {format(day, 'd')}
                  </span>
                  
                  {dayEvents.length > 0 && (
                    <div className="mt-1 md:mt-2 space-y-1">
                      {dayEvents.map(e => (
                        <div key={e.id} className="w-full h-1.5 md:h-2 bg-gradient-to-r from-pink-400 to-[#35308f] rounded-full" />
                      ))}
                      {/* Tooltip for desktop */}
                      <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[150px] bg-slate-800 text-white text-xs p-2 rounded-lg z-20 shadow-xl pointer-events-none">
                        {dayEvents[0].title}
                        {dayEvents.length > 1 && ` +${dayEvents.length - 1} more`}
                      </div>
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