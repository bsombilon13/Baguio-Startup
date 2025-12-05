import React, { useState } from 'react';
import { format, eachDayOfInterval, isSameDay, isToday, isWithinInterval } from 'date-fns';
import { Calendar as CalendarIcon, List as ListIcon, ChevronLeft, ChevronRight, Filter, MapPin, Clock, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { events, ecosystemOrgs, activeStartups } from '../data';
import EventModal, { DayEventsModal } from '../components/EventModal';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Event, Organization, Startup } from '../types';
import OrganizationModal from '../components/OrganizationModal';

// Helper functions to replace missing date-fns exports
const startOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1);
const endOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0);
const startOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};
const endOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};

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

  // Filter Logic
  const filteredEvents = events.filter(event => {
    // Check if the event tag matches one of the main categories
    const mainTags = filters.filter(f => f !== 'All');
    const eventMainTags = event.tags.filter(tag => mainTags.includes(tag));
    
    if (activeFilter === 'All') return true;
    return eventMainTags.includes(activeFilter);
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Scroll to top of grid
      document.getElementById('events-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  // Calendar logic
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  // Update getEventsForDay to check for intervals
  const getEventsForDay = (date: Date) => filteredEvents.filter(e => {
    if (e.endDate) {
      return isWithinInterval(date, { start: startOfDay(e.date), end: endOfDay(e.endDate) });
    }
    return isSameDay(e.date, date);
  });

  const handleDayKeyDown = (e: React.KeyboardEvent, events: Event[]) => {
    if ((e.key === 'Enter' || e.key === ' ') && events.length > 0) {
      e.preventDefault();
      handleDayClick(events, new Date()); 
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

  // Helper to find organizer
  const getOrganizer = (organizerId?: string) => {
    if (!organizerId) return null;
    return [...ecosystemOrgs, ...activeStartups].find(o => o.id === organizerId);
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-2 md:gap-4 mb-2 md:mb-4">
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
            className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
              view === 'list' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <ListIcon size={14} className="md:w-4 md:h-4" /> List
          </button>
          <button
            onClick={() => setView('calendar')}
            aria-pressed={view === 'calendar'}
            className={`flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
              view === 'calendar' ? 'bg-[#35308f] text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <CalendarIcon size={14} className="md:w-4 md:h-4" /> Calendar
          </button>
        </div>
      </div>

      {/* Filters Bar - Compact on Mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filter events by tag">
          <span className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 md:mr-2 shrink-0">
             <Filter size={12} className="md:w-[14px]" /> Filter:
          </span>
          {filters.map(filter => (
            <button 
              key={filter} 
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
              className={`
                px-3 py-1.5 md:px-4 md:py-2 rounded-lg border text-xs md:text-sm font-bold whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-[#35308f]
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
        <div id="events-grid">
            <BentoGrid>
            {paginatedEvents.map((event) => {
                const mainTag = getMainTag(event.tags);
                const isMultiDay = event.endDate && !isSameDay(event.date, event.endDate);
                const organizer = getOrganizer(event.organizerId);
                const priceLabel = event.price || 'Free';
                
                return (
                <BentoItem 
                    key={event.id}
                    className="flex flex-col group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-800/50"
                    onClick={() => setSelectedEvent(event)}
                    noPadding={true}
                    aria-label={`View details for ${event.title}, ${priceLabel} event on ${format(event.date, 'MMMM d')}`}
                >
                    {/* Header Banner Image - h-32 on mobile for better visibility */}
                    <div className="h-32 md:h-48 w-full relative bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                        <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Date Badge - Compact on Mobile */}
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm px-1.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl text-center shadow-md border border-slate-200 dark:border-slate-700 min-w-[2.5rem] md:min-w-[3.5rem] group-hover:scale-105 transition-transform z-10 origin-top-left">
                            <div className="text-[9px] md:text-[10px] font-bold text-red-500 uppercase tracking-wide">{format(event.date, 'MMM')}</div>
                            <div className={`font-extrabold text-slate-900 dark:text-white leading-none ${isMultiDay ? 'text-xs md:text-lg' : 'text-base md:text-xl'}`}>
                                {isMultiDay 
                                    ? `${format(event.date, 'd')}-${format(event.endDate!, 'd')}` 
                                    : format(event.date, 'd')
                                }
                            </div>
                        </div>

                        {/* Category Tag */}
                        {mainTag && (
                            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#35308f] text-white text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2.5 md:py-1 rounded md:rounded-lg shadow-md uppercase tracking-wider border border-white/10 z-10">
                                {mainTag}
                            </div>
                        )}
                        
                        {/* Price Label */}
                         <div className={`absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[8px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2.5 md:py-1 rounded md:rounded-lg shadow-md uppercase tracking-wider border border-white/10 z-10 ${priceLabel === 'Free' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                            {priceLabel}
                        </div>
                    </div>

                    {/* Details Content - Compact on Mobile but slightly roomier than before */}
                    <div className="flex flex-col flex-1 p-3 md:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative">
                        
                        {/* Organizer Profile Picture */}
                        {organizer && (
                        <div 
                            role="button"
                            tabIndex={0}
                            aria-label={`View profile of ${organizer.name}`}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setSelectedOrg(organizer);
                                }
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedOrg(organizer);
                            }}
                            className="absolute -top-3 left-2 md:-top-6 md:left-5 z-20 cursor-pointer group/org focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35308f] rounded-full"
                            title={`Organized by ${organizer.name}`}
                        >
                            <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-white border-2 border-white shadow-md overflow-hidden transition-transform group-hover/org:scale-110">
                                <img 
                                    src={organizer.logoUrl} 
                                    alt="" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        )}

                        {/* Spacer for overlapping avatar */}
                        <div className="h-4 md:h-4 shrink-0"></div>

                        {/* Title - Text-sm for readability */}
                        <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-[#35308f] dark:group-hover:text-indigo-400 transition-colors line-clamp-2 min-h-[2.5em] md:min-h-[3.5rem]">
                            {event.title}
                        </h3>
                        
                        {/* Meta Info Row - Stacked on Mobile for readability */}
                        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-1.5 md:gap-3 text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 md:mb-4 shrink-0">
                            <span className="flex items-center gap-1 md:gap-1.5 bg-slate-50 dark:bg-slate-800 px-1.5 py-0.5 md:px-2.5 md:py-1.5 rounded md:rounded-lg border border-slate-100 dark:border-slate-700 shrink-0 w-fit">
                                <Clock size={10} className="text-[#35308f] dark:text-indigo-400 md:w-3.5 md:h-3.5"/>
                                {format(event.date, 'h:mm a')}
                            </span>
                            <span className="flex items-center gap-1 md:gap-1.5 bg-slate-50 dark:bg-slate-800 px-1.5 py-0.5 md:px-2.5 md:py-1.5 rounded md:rounded-lg border border-slate-100 dark:border-slate-700 w-fit">
                                <MapPin size={10} className="text-[#35308f] dark:text-indigo-400 shrink-0 md:w-3.5 md:h-3.5"/>
                                <span className="truncate max-w-[120px] md:max-w-[200px]">{event.location}</span>
                            </span>
                        </div>

                        {/* Description - Hidden on Mobile to save space */}
                        <p className="hidden md:block text-slate-600 dark:text-slate-400 text-xs md:text-sm line-clamp-2 md:line-clamp-3 leading-relaxed mb-2 md:mb-4 flex-1">
                            {event.description}
                        </p>

                        {/* Footer */}
                        <div className="pt-3 md:pt-4 mt-auto border-t border-slate-100 dark:border-slate-800 shrink-0">
                            <span className="text-[10px] md:text-sm font-bold text-[#35308f] dark:text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Details <ChevronRightIcon size={12} className="md:w-4 md:h-4" />
                            </span>
                        </div>
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

            {/* Pagination Controls - Added extra bottom padding */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8 pb-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
                >
                  Next
                </button>
              </div>
            )}
        </div>
      )}

      {view === 'calendar' && (
        <div id="events-grid" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] p-4 md:p-8 transition-colors">
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
                  onKeyDown={hasEvents ? (e) => handleDayKeyDown(e, dayEvents) : undefined}
                  onClick={() => hasEvents && handleDayClick(dayEvents, day)}
                  aria-label={`${format(day, 'MMMM do')}${hasEvents ? `, ${dayEvents.length} events` : ''}`}
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
                      {dayEvents.slice(0, 2).map(e => {
                         const organizer = getOrganizer(e.organizerId);
                         return (
                           <div key={e.id} className="flex items-center gap-1 bg-[#35308f]/10 dark:bg-indigo-900/40 text-[#35308f] dark:text-indigo-300 px-1.5 py-1 rounded border border-[#35308f]/20 dark:border-indigo-800/50">
                              {organizer && (
                                <img 
                                  src={organizer.logoUrl} 
                                  className="w-3.5 h-3.5 rounded-full object-cover shrink-0 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#35308f]"
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`View profile of ${organizer.name}`}
                                  onKeyDown={(evt) => {
                                      if (evt.key === 'Enter' || evt.key === ' ') {
                                          evt.preventDefault();
                                          evt.stopPropagation();
                                          setSelectedOrg(organizer);
                                      }
                                  }}
                                  onClick={(evt) => {
                                    evt.stopPropagation();
                                    setSelectedOrg(organizer);
                                  }}
                                  alt=""
                                  title={`Organized by ${organizer.name}`}
                                />
                              )}
                              <span className="truncate text-[10px] font-semibold">{e.title}</span>
                           </div>
                         );
                      })}
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
        <EventModal 
            event={selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
            onOrganizerClick={(org) => setSelectedOrg(org)}
        />
      )}
      
      {dayModalEvents && (
        <DayEventsModal 
          date={dayModalEvents.date}
          events={dayModalEvents.events}
          onClose={() => setDayModalEvents(null)}
          onSelectEvent={(event) => {
            setDayModalEvents(null);
            setSelectedEvent(event);
          }}
          onOrganizerClick={(org) => setSelectedOrg(org)}
        />
      )}

      {selectedOrg && (
        <OrganizationModal org={selectedOrg} onClose={() => setSelectedOrg(null)} />
      )}
    </div>
  );
};

export default Events;