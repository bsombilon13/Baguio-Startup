import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { BentoGrid, BentoItem } from '../components/BentoGrid';
import { Search, GraduationCap, ExternalLink, Filter, Sparkles, MessageSquare, Zap, Award, ChevronRight, UserPlus } from 'lucide-react';
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
    window.open('https://forms.gle/Q8DZqX63otU8fDng8', '_blank');
  };

  return (
    <div className="space-y-6 pb-32">
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Mentors</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed">
            Connect with industry veterans and startup founders ready to help you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-gradient-to-br from-[#35308f] to-[#5c56d6] rounded-[2rem] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000">
                    <GraduationCap size={180} />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4 text-white">
                            <Sparkles size={12} className="text-yellow-300" /> Knowledge Sharing
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Join the Mentor Network</h2>
                        <p className="text-indigo-100 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                          Share your expertise with the next generation of highland entrepreneurs. Help build a stronger ecosystem.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={handleBecomeMentor}
                        className="w-fit bg-white text-[#35308f] px-6 py-3 rounded-xl font-black text-sm hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                      >
                        <UserPlus size={18} /> Apply as Mentor
                      </button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Network Stats</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Active</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{data.mentors.length}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[9px]">Sectors</span>
                            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{expertiseList.length - 1}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
                        <Award size={14} /> Certified Guides
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-1 shrink-0 flex items-center gap-1.5 pl-2">
                 <Filter size={12} /> Expertise:
              </span>
              {expertiseList.map(item => (
                 <button
                    key={item}
                    onClick={() => setActiveFilter(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                       activeFilter === item 
                       ? 'bg-slate-900 text-white border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:border-white' 
                       : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                 >
                    {item}
                 </button>
              ))}
           </div>
           
           <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search mentors..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
              />
           </div>
        </div>
      </div>

      {/* Mentor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredMentors.map((mentor) => (
          <div 
            key={mentor.id}
            onClick={() => setSelectedMentor(mentor)}
            className="relative group flex flex-col cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="p-5 flex flex-col h-full relative z-10">
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 bg-white transform group-hover:scale-110 transition-transform duration-500">
                  <img src={mentor.photoUrl} alt={mentor.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="text-center flex-1">
                <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1 mb-3">
                  {mentor.name}
                </h3>
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {mentor.expertise.slice(0, 3).map(e => (
                    <span key={e} className={`px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border border-transparent shadow-sm ${getExpertiseColor(e)}`}>
                       {e}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                      className="w-full py-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                  >
                      View Profile
                  </button>
                  <a 
                      href={mentor.connectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 bg-[#35308f] hover:bg-indigo-800 text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                      <ExternalLink size={12} /> Connect <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <div className="py-24 text-center bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
           <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={40} className="text-slate-200" />
           </div>
           <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">No matching mentors</h3>
           <p className="text-slate-500 mt-2 font-medium">Try broadening your search or expertise filters.</p>
        </div>
      )}

      {selectedMentor && <MentorModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />}
    </div>
  );
};

export default Mentors;