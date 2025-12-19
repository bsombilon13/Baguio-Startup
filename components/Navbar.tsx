


import React, { useContext } from 'react';
import { Home, Calendar, Users, Zap, Megaphone, Rocket, Sun, Moon, BookOpen, Newspaper, MessageCircle, UserPlus, Globe, Menu } from 'lucide-react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { ThemeContext } from '../App';

export const MobileHeader: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <Link to="/" className="flex items-center gap-3 py-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="BSN Logo" 
              className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
            />
           <div className="flex flex-col justify-center">
             <span className="font-extrabold text-slate-900 dark:text-white text-sm leading-none tracking-tight">Baguio Startup</span>
             <span className="font-bold text-[#35308f] dark:text-emerald-400 text-xs leading-none tracking-wide">Network</span>
           </div>
        </Link>
        
        <button 
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#35308f]"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
  );
};

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Hub', icon: Home, path: '/' },
    { name: 'Startups', icon: Rocket, path: '/startups' },
    { name: 'Ecosystem', icon: Users, path: '/ecosystem' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Announcements', icon: Megaphone, path: '/announcements' },
    { name: 'SDGs', icon: Globe, path: '/sdg' },
    { name: 'News', icon: Newspaper, path: '/news' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
        <Link to="/" className="h-24 flex items-center justify-center border-b border-slate-100 dark:border-slate-800/50 p-4">
            <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="Baguio Startup Network Logo" 
              className="w-full h-full object-contain dark:brightness-0 dark:invert transition-all duration-300 hover:scale-110"
            />
        </Link>

        <nav className="flex-1 px-2 lg:px-4 space-y-2 mt-6 overflow-y-auto no-scrollbar" role="navigation" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              title={item.name}
              aria-label={item.name}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3.5 rounded-xl transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[#35308f] ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none'
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

      {/* Mobile Bottom Nav - Fixed Height 80px */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-[80px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)] box-border">
         <div className="flex items-center overflow-x-auto no-scrollbar gap-1 px-2 py-2 h-full snap-x">
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
