
import React, { useState } from 'react';
import { format, eachDayOfInterval, isSameDay, isToday, isWithinInterval } from 'date-fns';
import { Calendar as CalendarIcon, List as ListIcon, ChevronLeft, ChevronRight, Filter, MapPin, Clock, ChevronRight as ChevronRightIcon, CalendarPlus, Zap, Award, Info } from 'lucide-react';
import { events, ecosystemOrgs, activeStartups } from '../data';
import EventModal, { DayEventsModal } from '../components/EventModal';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Event, Organization, Startup } from '../types';
import OrganizationModal from '../components/OrganizationModal';

const Events: React.FC = () => {
  const [view, setView] = useState<'calendar' | 'list'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [dayModalEvents, setDayModalEvents] = useState<{ date: Date, events: Event[] } | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedOrg, setSelectedOrg] = useState<Organization | Startup | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 20;

  // Static filters
  const filters = ['All', 'Workshop', 'Conference', 'Training', 'Meetups', 'Exclusive', 'Fair'];

  // Filter & Sort Logic
  const filteredEvents = events
    .filter(event => {
      const mainTags = filters.filter(f => f !== 'All');
      const eventMainTags = event.tags.filter(tag => mainTags.includes(tag));
      
      if (activeFilter === 'All') return true;
      return eventMainTags.includes(activeFilter);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      document.getElementById('events-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); 
  };

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

  const handleDayKeyDown = (e: React.KeyboardEvent, events: Event[]) => {
    if ((e.key === 'Enter' || e.key === ' ') && events.length > 0) {
      e.preventDefault();
      handleDayClick(events, currentDate); 
    }
  };

  const handleDayClick = (dayEvents: Event[], date: Date) => {
    if (dayEvents.length === 1) {
      setSelectedEvent(dayEvents[0]);
    } else if (dayEvents.length > 1) {
      setDayModalEvents({ date, events: dayEvents });
    }
  };

  const getMainTag = (tags: string[]) => {
    const mainTags = filters.filter(f => f !== 'All');
    return tags.find(t => mainTags.includes(t));
  };

  const getOrganizer = (organizerId?: string) => {
    if (!organizerId) return null;
    return [...ecosystemOrgs, ...activeStartups].find(o => o.id === organizerId);
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Calendar</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            Discover workshops, meetups, and conferences across the Cordillera Administrative Region.
          </p>
        </div>

        {/* Bento Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-gradient-to-br from-[#35308f] to-[#5c56d6] rounded-[2rem] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000">
                    <CalendarIcon size={180} />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4">
                            <Zap size={12} className="text-yellow-300" /> Community Events
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Sync with the Ecosystem</h2>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                            Stay up to date with the latest ecosystem activities. Subscribe to our public Google Calendar to never miss a meetup.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a 
                          href="https://calendar.google.com/calendar/u/1?cid=OTFjYzQwZWU3OWE2ZTI3Y2ZmYTZkNmMwMDVmYzYwNzViNjljNGU3Mzg4Njk3Mjg3YzRmNDI0OTRhOWQyZmVjZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit bg-white text-[#35308f] px-6 py-3 rounded-xl font-black text-sm hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                        >
                          <CalendarPlus size={18} /> Subscribe to Calendar
                        </a>
                        <button
                            onClick={() => setView(view === 'list' ? 'calendar' : 'list')}
                            className="w-fit bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-xl font-black text-sm hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            {view === 'list' ? <CalendarIcon size={18} /> : <ListIcon size={18} />} 
                            Switch to {view === 'list' ? 'Calendar' : 'List'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Event Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Upcoming</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{filteredEvents.length}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Categories</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{filters.length - 1}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
                        <Award size={14} /> Active Hub
                    </div>
                </div>
            </div>
        </div>

        {/* Simplified Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2">
                 <Filter size={12} /> Category:
              </span>
              {filters.map(filter => (
                 <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                       activeFilter === filter 
                       ? 'bg-slate-900 text-white border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:border-white' 
                       : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                 >
                    {filter}
                 </button>
              ))}
           </div>

           <div className="flex items-center gap-3 w-full lg:w-auto border-t lg:border-t-0 border-slate-200 dark:border-slate-800 pt-3 lg:pt-0">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2 lg:pl-0">
                 <Info size={12} /> View Mode:
              </span>
              <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex gap-1">
                <button 
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                >
                  <ListIcon size={16} />
                </button>
                <button 
                  onClick={() => setView('calendar')}
                  className={`p-1.5 rounded-md transition-all ${view === 'calendar' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                >
                  <CalendarIcon size={16} />
                </button>
              </div>
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
                const priceLabel = event.price || 'Free';
                
                return (
                <BentoItem 
                    key={event.id}
                    className="flex flex-col group h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-slate-800/50 rounded-[1.75rem]"
                    onClick={() => setSelectedEvent(event)}
                    noPadding={true}
                >
                    <div className="h-32 md:h-44 w-full relative bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                        <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="absolute top-2 left-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded-lg text-center shadow-md border border-slate-200 dark:border-slate-700 min-w-[2.5rem] group-hover:scale-105 transition-transform z-10 origin-top-left">
                            <div className="text-[8px] font-bold text-red-500 uppercase tracking-wide">{format(event.date, 'MMM')}</div>
                            <div className="font-extrabold text-slate-900 dark:text-white leading-none text-base">
                                {isMultiDay 
                                    ? `${format(event.date, 'd')}-${format(event.endDate!, 'd')}` 
                                    : format(event.date, 'd')
                                }
                            </div>
                        </div>

                        {mainTag && (
                            <div className="absolute top-2 right-2 bg-[#35308f] text-white text-[8px] font-bold px-2 py-0.5 rounded-lg shadow-md uppercase tracking-wider border border-white/10 z-10">
                                {mainTag}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col flex-1 p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative">
                        {organizer && (
                        <div 
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedOrg(organizer);
                            }}
                            className="absolute -top-4 right-4 z-20 cursor-pointer group/org focus:outline-none rounded-full"
                        >
                            <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-md overflow-hidden transition-transform group-hover/org:scale-110">
                                <img src={organizer.logoUrl} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        )}

                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors line-clamp-2 min-h-[2.5rem]">
                            {event.title}
                        </h3>
                        
                        <div className="flex flex-col gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-4 shrink-0">
                            <span className="flex items-center gap-1.5">
                                <Clock size={12} className="text-[#35308f] dark:text-indigo-400 shrink-0"/>
                                {format(event.date, 'h:mm a')}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin size={12} className="text-[#35308f] dark:text-indigo-400 shrink-0"/>
                                <span className="truncate">{event.location}</span>
                            </span>
                        </div>

                        <div className="pt-3 mt-auto border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span className={`text-[9px] font-black uppercase tracking-widest ${priceLabel === 'Free' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                {priceLabel}
                            </span>
                            <span className="text-[10px] font-bold text-[#35308f] dark:text-indigo-400 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                                Details <ChevronRightIcon size={12} />
                            </span>
                        </div>
                    </div>
                </BentoItem>
                );
            })}
            </BentoGrid>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-slate-50 transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-slate-600">Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold disabled:opacity-50 hover:bg-slate-50 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
        </div>
      )}

      {view === 'calendar' && (
        <div id="events-grid" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-4 md:p-8 animate-in fade-in duration-500">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{format(currentDate, 'MMMM yyyy')}</h2>
            <div className="flex gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600"><ChevronLeft size={24} /></button>
              <button onClick={nextMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600"><ChevronRight size={24} /></button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 md:gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-wider py-2">{day}</div>
            ))}
            
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[80px]"></div>
            ))}

            {daysInMonth.map(day => {
              const dayEvents = getEventsForDay(day);
              const isTodayDate = isToday(day);
              const hasEvents = dayEvents.length > 0;

              return (
                <div 
                  key={day.toString()} 
                  onClick={() => hasEvents && handleDayClick(dayEvents, day)}
                  className={`
                    min-h-[80px] rounded-2xl p-2 border transition-all flex flex-col
                    ${isTodayDate ? 'border-[#35308f] bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:bg-white'}
                    ${hasEvents ? 'cursor-pointer hover:border-indigo-300 shadow-sm' : ''}
                  `}
                >
                  <span className={`text-xs font-bold ${isTodayDate ? 'text-[#35308f]' : 'text-slate-500'}`}>{format(day, 'd')}</span>
                  {hasEvents && (
                    <div className="mt-1 space-y-1 overflow-hidden">
                      {dayEvents.slice(0, 2).map(e => (
                        <div key={e.id} className="bg-[#35308f]/10 text-[#35308f] dark:text-indigo-300 px-1.5 py-0.5 rounded text-[8px] font-bold truncate">
                          {e.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && <div className="text-[8px] text-slate-400 font-bold">+{dayEvents.length - 2} more</div>}
                    </div>
                  )}
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
