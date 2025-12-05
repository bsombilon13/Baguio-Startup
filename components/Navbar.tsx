
import React, { useContext } from 'react';
import { Home, Calendar, Users, Zap, Megaphone, Rocket, Sun, Moon, BookOpen, Newspaper, MessageCircle, UserPlus, Globe, Menu } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../App';

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navItems = [
    { name: 'Hub', icon: Home, path: '/' },
    { name: 'Startups', icon: Rocket, path: '/startups' },
    { name: 'Ecosystem', icon: Users, path: '/ecosystem' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'SDGs', icon: Globe, path: '/sdg' },
    { name: 'News', icon: Newspaper, path: '/news' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
    { name: 'Announcements', icon: Megaphone, path: '/announcements' },
  ];

  return (
    <>
      {/* Mobile Top Header - Fixed */}
      <header className="md:hidden fixed top-0 left-0 w-full h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 px-4 flex items-center justify-between shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-2 h-full py-3">
           <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="BSN Logo" 
              className="h-full w-auto object-contain dark:brightness-0 dark:invert"
            />
        </div>
        
        <button 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
        <div className="h-24 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/50 p-4">
            <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="Baguio Startup Network Logo" 
              className="w-full h-full object-contain dark:brightness-0 dark:invert transition-all duration-300 hover:scale-110"
            />
        </div>

        <nav className="flex-1 px-2 lg:px-4 space-y-2 mt-6 overflow-y-auto custom-scrollbar" role="navigation" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              title={item.name}
              aria-label={item.name}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3.5 rounded-xl transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
                  isActive
                    ? 'bg-[#35308f] text-white shadow-md shadow-indigo-200 dark:shadow-none'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }`
              }
            >
              <item.icon size={22} strokeWidth={2} className="shrink-0" />
              <span className="hidden lg:block text-sm font-semibold">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2 mt-auto">
          <a 
            href="https://m.me/cm/Abbm6IW4fkqDxlfM/?send_source=cm%3Acopy_invite_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
            aria-label="Join the Community"
          >
            <UserPlus size={20} />
            <span className="hidden lg:block font-medium">Join Community</span>
          </a>

          <a 
            href="https://m.me/baguiostartup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#35308f]"
            aria-label="Contact Us on Messenger"
          >
            <MessageCircle size={20} />
            <span className="hidden lg:block font-medium">Contact Us</span>
          </a>

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

      {/* Mobile Bottom Nav - Scrollable Single Source of Truth */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
         <div className="flex items-center overflow-x-auto no-scrollbar gap-1 px-2 py-2 snap-x">
           {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              aria-label={item.name}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#35308f] min-w-[72px] shrink-0 snap-center ${
                  isActive 
                  ? 'text-[#35308f] dark:text-[#5c56d6] bg-indigo-50 dark:bg-indigo-900/20 font-bold' 
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[10px] font-medium whitespace-nowrap">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}
         </div>
      </nav>
    </>
  );
};

export default Sidebar;
