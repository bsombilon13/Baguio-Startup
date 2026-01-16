import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Search, GraduationCap, ExternalLink, Filter, Sparkles, MessageSquare, Briefcase, Zap, Award } from 'lucide-react';
import { Mentor } from '../types';
import MentorModal from '../components/MentorModal';

const Mentors: React.FC = () => {
  const { data } = useContext(ThemeContext);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const expertiseList = ['All', 'Tech', 'Product', 'Marketing', 'Finance', 'Legal', 'Strategy', 'Operations', 'Design', 'Sales'];

  const filteredMentors = data.mentors.filter(mentor => {
    const matchesFilter = activeFilter === 'All' || mentor.expertise.includes(activeFilter as any);
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case 'Tech': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Product': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'Marketing': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300';
      case 'Finance': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'Legal': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Strategy': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'Operations': return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      case 'Design': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
      case 'Sales': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const handleBecomeMentor = () => {
    window.open('https://www.facebook.com/baguiostartup/', '_blank');
  };

  return (
    <div className="space-y-8 pb-32 max-w-[1400px] mx-auto">
      {/* Mentor Hero Section */}
      <header className="relative py-12 px-8 md:px-16 rounded-[3rem] bg-gradient-to-br from-[#35308f] via-[#4c45c7] to-indigo-950 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <GraduationCap size={400} className="text-white -mr-20 -mt-20" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
               <Sparkles size={12} className="animate-pulse" /> Community Mentors
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Guidance from <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 max-w-xl font-medium leading-relaxed opacity-90">
              Connect with experienced founders, industry leaders, and technical experts who are passionate about growing the mountain startup ecosystem.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
               <button 
                  onClick={handleBecomeMentor} 
                  className="group flex items-center gap-2 bg-white text-[#35308f] px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-lg hover:scale-105 active:scale-95"
               >
                 <MessageSquare size={18} /> Apply as Mentor
               </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-indigo-300">
                   <Zap size={20} />
                </div>
                <div className="text-3xl font-black text-white">{data.mentors.length}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-indigo-300/80">Active Mentors</div>
             </div>
             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-center">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-emerald-300">
                   <Award size={20} />
                </div>
                <div className="text-3xl font-black text-white">100+</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-emerald-300/80">Hours Shared</div>
             </div>
          </div>
        </div>
      </header>

      {/* Search and Filters Bar */}
      <div className="sticky top-4 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 p-3 rounded-2xl shadow-xl flex flex-col gap-4 mx-4 md:mx-0">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by name, bio, or expertise..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border-0 bg-slate-100 dark:bg-slate-800 focus:ring-4 focus:ring-indigo-500/20 transition-all font-bold text-sm dark:text-white" 
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 px-1">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mr-2 shrink-0 flex items-center gap-1.5"><Filter size={14}/> Filter:</span>
            {expertiseList.map(item => (
              <button 
                key={item} 
                onClick={() => setActiveFilter(item)} 
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-2 ${activeFilter === item ? 'bg-[#35308f] text-white border-[#35308f]' : 'border-transparent bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                {item}
              </button>
            ))}
        </div>
      </div>

      {/* Mentor Grid */}
      <div className="px-4 md:px-0">
         <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMentors.map((mentor) => (
              <BentoItem 
                key={mentor.id} 
                onClick={() => setSelectedMentor(mentor)}
                className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-6 group/card hover:shadow-2xl transition-all duration-500 relative"
              >
                {/* Mentor Photo */}
                <div className="mb-6 relative flex justify-center">
                   <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 group-hover/card:scale-105 transition-transform duration-500">
                      <img src={mentor.photoUrl} alt={mentor.name} className="w-full h-full object-cover" />
                   </div>
                </div>

                <div className="text-center space-y-1 mb-6 flex-1">
                   <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover/card:text-[#35308f] transition-colors">{mentor.name}</h3>
                   <div className="flex flex-wrap justify-center gap-1.5 pt-3">
                      {mentor.expertise.map(e => (
                        <span key={e} className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border border-transparent ${getExpertiseColor(e)}`}>
                           {e}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="flex flex-col gap-3">
                    <button 
                        className="w-full py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group-hover/card:scale-[1.02]"
                    >
                        View Profile
                    </button>
                    <a 
                        href={mentor.connectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-3.5 bg-[#35308f] hover:bg-indigo-800 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 dark:shadow-none"
                    >
                        <ExternalLink size={14} /> Connect <ArrowRightIcon size={12} className="group-hover/card:translate-x-1 transition-transform" />
                    </a>
                </div>
              </BentoItem>
            ))}
         </BentoGrid>

         {filteredMentors.length === 0 && (
            <div className="py-24 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
               <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  <GraduationCap size={40} className="text-slate-300" />
               </div>
               <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">No matching mentors</h3>
               <p className="text-slate-500 mt-2 font-medium">Try broadening your search or expertise filters.</p>
            </div>
         )}
      </div>

      {selectedMentor && <MentorModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />}
    </div>
  );
};

const ArrowRightIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export default Mentors;