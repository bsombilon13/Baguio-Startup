
import React, { useContext } from 'react';
import { Home, Calendar, Users, Megaphone, Rocket, Sun, Moon, BookOpen, Newspaper, MessageCircle, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Hub', icon: Home, path: '/' },
    { name: 'Active Startups', icon: Rocket, path: '/startups' },
    { name: 'Ecosystem', icon: Users, path: '/ecosystem' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Community News', icon: Newspaper, path: '/news' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
    { name: 'Announcements', icon: Megaphone, path: '/announcements' },
    { name: 'Validate Me', icon: CheckCircle, path: '/validate', isBeta: true },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
        <div className="h-24 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/50 p-4">
            <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="Baguio Startup Network Logo" 
              className="w-full h-full object-contain dark:brightness-0 dark:invert transition-all duration-300 hover:scale-110"
            />
        </div>

        <button 
          onClick={() => window.open('https://m.me/baguiostartup', '_blank')}
          className="mx-4 mt-6 mb-2 py-2 px-3 bg-[#35308f] hover:bg-[#2a2670] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
           <MessageCircle size={16} />
           <span className="hidden lg:block">Contact Us</span>
        </button>

        <nav className="flex-1 px-2 lg:px-4 space-y-2 mt-2" role="navigation" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              title={item.name}
              aria-label={item.name}
              className={({ isActive }) =>
                `relative flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3.5 rounded-xl transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
                  isActive
                    ? 'bg-[#35308f] text-white shadow-md shadow-indigo-200 dark:shadow-none'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }`
              }
            >
              <item.icon size={22} strokeWidth={2} className="shrink-0" />
              <span className="hidden lg:block text-sm font-semibold">{item.name}</span>
              {item.isBeta && (
                <span className="absolute top-2 right-2 flex h-2 w-2 lg:relative lg:top-0 lg:right-0 lg:ml-auto lg:h-auto lg:w-auto">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 lg:hidden"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500 lg:hidden"></span>
                   <span className="hidden lg:inline-flex items-center rounded-md bg-pink-50 dark:bg-pink-900/30 px-1.5 py-0.5 text-[10px] font-bold text-pink-700 dark:text-pink-300 ring-1 ring-inset ring-pink-700/10">BETA</span>
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <button 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="hidden lg:block font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-50 px-4 py-2 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300" role="navigation" aria-label="Mobile Navigation">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            aria-label={item.name}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#35308f] relative ${
                isActive ? 'text-[#35308f] dark:text-[#5c56d6]' : 'text-slate-400 dark:text-slate-500'
              }`
            }
          >
             {item.isBeta && (
               <span className="absolute top-1 right-2 h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
               </span>
             )}
            <item.icon size={20} />
            <span className="text-[10px] font-medium hidden sm:block">{item.name}</span>
          </NavLink>
        ))}
        {/* Simple Menu Trigger or More could go here for mobile if list is too long, sticking to top 5 essential for mobile nav bar space */}
      </nav>
    </>
  );
};

export default Sidebar;