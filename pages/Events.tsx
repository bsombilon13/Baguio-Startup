
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { format, eachDayOfInterval, isSameDay, isToday, isWithinInterval } from 'date-fns';
import { Calendar as CalendarIcon, List as ListIcon, ChevronLeft, ChevronRight, Filter, MapPin, Clock, ChevronRight as ChevronRightIcon, Zap, Award } from 'lucide-react';
import EventModal, { DayEventsModal } from '../components/EventModal';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Event, Organization, Startup } from '../types';
import OrganizationModal from '../components/OrganizationModal';

const Events: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dayModalEvents, setDayModalEvents] = useState<{ date: Date, events: Event[] } | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedOrg, setSelectedOrg] = useState<Organization | Startup | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 20;
  const filters = ['All', 'Workshop', 'Conference', 'Training', 'Meetups', 'Exclusive', 'Fair'];

  const filteredEvents = data.events
    .filter(event => {
      const mainTags = filters.filter(f => f !== 'All');
      const eventMainTags = event.tags.filter(tag => mainTags.includes(tag));
      if (activeFilter === 'All') return true;
      return eventMainTags.includes(activeFilter);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const getEventsForDay = (date: Date) => filteredEvents.filter(e => {
    if (e.endDate) {
      const start = new Date(e.date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(e.endDate);
      end.setHours(23, 59, 59, 999);
      return isWithinInterval(date, { start, end });
    }
    return isSameDay(e.date, date);
  });

  const handleDayClick = (dayEvents: Event[], date: Date) => {
    if (dayEvents.length === 1) setSelectedEvent(dayEvents[0]);
    else if (dayEvents.length > 1) setDayModalEvents({ date, events: dayEvents });
  };

  const getMainTag = (tags: string[]) => filters.filter(f => f !== 'All').find(t => tags.includes(t));

  const getOrganizer = (organizerId?: string) => {
    if (!organizerId) return null;
    return [...data.ecosystem, ...data.startups].find(o => o.id === organizerId);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); 
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Sync</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            Discover workshops, meetups, and conferences across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-gradient-to-br from-[#35308f] to-[#5c56d6] rounded-[2rem] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000"><CalendarIcon size={180} /></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4 text-white">
                            <Zap size={12} className="text-yellow-300" /> Community Updates
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Community Activities</h2>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md mb-6 leading-relaxed">Stay up to date with the latest ecosystem activities. Join our meetups.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button onClick={() => setView(view === 'list' ? 'calendar' : 'list')} className="w-fit bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-black text-sm hover:bg-white/20 transition-all flex items-center gap-2">
                            {view === 'list' ? <CalendarIcon size={18} /> : <ListIcon size={18} />} 
                            {view === 'list' ? 'Calendar' : 'List'} View
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div><h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Event Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between"><span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Upcoming</span><span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{filteredEvents.length}</span></div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800"><div className="flex items-center gap-2 text-emerald-500 text-xs font-bold"><Award size={14} /> Regional Hub</div></div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2"><Filter size={12} /> Category:</span>
              {filters.map(filter => (
                 <button key={filter} onClick={() => handleFilterChange(filter)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${activeFilter === filter ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white dark:bg-slate-800 text-slate-500'}`}>{filter}</button>
              ))}
           </div>
           <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex gap-1">
                <button onClick={() => setView('list')} className={`p-1.5 rounded-md ${view === 'list' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}><ListIcon size={16} /></button>
                <button onClick={() => setView('calendar')} className={`p-1.5 rounded-md ${view === 'calendar' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-400'}`}><CalendarIcon size={16} /></button>
           </div>
        </div>
      </div>

      {view === 'list' && (
        <div id="events-grid" className="animate-in fade-in duration-500">
            <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedEvents.map((event) => {
                const mainTag = getMainTag(event.tags);
                const isMultiDay = event.endDate && !isSameDay(event.date, event.endDate);
                const organizer = getOrganizer(event.organizerId);
                
                return (
                <BentoItem key={event.id} className="flex flex-col group h-full transition-all duration-300 rounded-[1.75rem] relative" onClick={() => setSelectedEvent(event)} noPadding={true}>
                    <div className="h-32 md:h-44 w-full relative shrink-0 overflow-hidden">
                        <img src={event.imageUrl} alt="" className="w-full h-full object-cover" />
                        <div className="absolute top-2 left-2 bg-white/95 px-2 py-1 rounded-lg text-center shadow-md">
                            <div className="text-[8px] font-bold text-red-500 uppercase">{format(event.date, 'MMM')}</div>
                            <div className="font-extrabold text-slate-900 leading-none text-base">{isMultiDay ? `${format(event.date, 'd')}-${format(event.endDate!, 'd')}` : format(event.date, 'd')}</div>
                        </div>
                        {mainTag && <div className="absolute top-2 right-2 bg-[#35308f] text-white text-[8px] font-bold px-2 py-0.5 rounded-lg">{mainTag}</div>}
                    </div>
                    <div className="flex flex-col flex-1 p-4 bg-white dark:bg-slate-900 relative">
                        {organizer && <div onClick={(e) => { e.stopPropagation(); setSelectedOrg(organizer); }} className="absolute -top-4 right-4 z-20 cursor-pointer"><div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-md overflow-hidden"><img src={organizer.logoUrl} alt="" className="w-full h-full object-cover" /></div></div>}
                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight min-h-[2.5rem]">{event.title}</h3>
                        <div className="flex flex-col gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-4 shrink-0">
                            <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#35308f]" />{format(event.date, 'h:mm a')}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#35308f]" /><span className="truncate">{event.location}</span></span>
                        </div>
                        <div className="pt-3 mt-auto border-t border-slate-100 flex items-center justify-between"><span className="text-[9px] font-black uppercase text-emerald-500">Public</span><span className="text-[10px] font-bold text-[#35308f] flex items-center gap-1">Details <ChevronRightIcon size={12} /></span></div>
                    </div>
                </BentoItem>
                );
            })}
            </BentoGrid>
        </div>
      )}

      {view === 'calendar' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-4 md:p-8 animate-in fade-in duration-500">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"><ChevronLeft size={24} /></button>
              <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"><ChevronRight size={24} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 md:gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest py-2">{day}</div>)}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => <div key={`empty-${i}`} className="min-h-[80px]"></div>)}
            {daysInMonth.map(day => {
              const dayEvents = getEventsForDay(day);
              const isTodayDate = isToday(day);
              const hasEvents = dayEvents.length > 0;
              return (
                <div key={day.toString()} onClick={() => hasEvents && handleDayClick(dayEvents, day)} className={`min-h-[100px] md:min-h-[140px] rounded-2xl md:rounded-[2rem] p-2 md:p-4 border transition-all flex flex-col group/day relative ${isTodayDate ? 'border-indigo-600 bg-indigo-50/50' : hasEvents ? 'border-violet-100 bg-violet-50/20' : 'border-slate-50 bg-slate-50/30'}`}>
                  <div className="flex justify-between items-start mb-2"><span className={`text-xs md:text-sm font-black ${isTodayDate ? 'text-indigo-600' : hasEvents ? 'text-violet-600' : 'text-slate-400'}`}>{format(day, 'd')}</span>{hasEvents && <div className="flex gap-1"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span></span></div>}</div>
                  {hasEvents && <div className="mt-1 space-y-1.5 overflow-hidden">{dayEvents.slice(0, 2).map(e => <div key={e.id} className="bg-white/80 dark:bg-slate-900/80 text-[#35308f] px-2 py-1 rounded-lg text-[9px] font-bold truncate border border-indigo-100">{e.title}</div>)}{dayEvents.length > 2 && <div className="text-[9px] font-black text-violet-500">+{dayEvents.length - 2} more</div>}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onOrganizerClick={setSelectedOrg} />}
      {dayModalEvents && <DayEventsModal date={dayModalEvents.date} events={dayModalEvents.events} onClose={() => setDayModalEvents(null)} onSelectEvent={setSelectedEvent} onOrganizerClick={setSelectedOrg} />}
      {selectedOrg && <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />}
    </div>
  );
};

export default Events;
