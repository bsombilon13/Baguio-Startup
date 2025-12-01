import React, { useContext } from 'react';
import { Home, Calendar, Users, Zap, Megaphone, Rocket, Sun, Moon, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: 'Hub', icon: Home, path: '/' },
    { name: 'Ecosystem', icon: Users, path: '/ecosystem' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Resources', icon: BookOpen, path: '/resources' },
    { name: 'Announcements', icon: Megaphone, path: '/announcements' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen fixed left-0 top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800/50 mb-2">
          <div className="flex items-center gap-3">
            <img 
              src="https://static.wixstatic.com/media/85ce0b_a34fd67effbb4a4b932c2791821103a3~mv2.png" 
              alt="Logo" 
              className="w-10 h-10 object-contain shrink-0"
            />
            <div className="hidden lg:flex flex-col leading-tight">
              <span className="font-bold text-slate-900 dark:text-white text-lg leading-none">Baguio</span>
              <span className="font-bold text-slate-900 dark:text-white text-lg leading-none">Startup</span>
              <span className="font-bold text-slate-900 dark:text-white text-lg leading-none">Network</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-2 lg:px-4 space-y-2 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              title={item.name}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-3 px-3 lg:px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-[#35308f] text-white shadow-md shadow-indigo-200 dark:shadow-none'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                }`
              }
            >
              <item.icon size={20} strokeWidth={2} className="shrink-0" />
              <span className="hidden lg:block text-sm font-semibold">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center justify-center lg:justify-start gap-3 p-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span className="hidden lg:block font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-50 px-4 py-2 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-colors duration-300">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 p-2 rounded-lg ${
                isActive ? 'text-[#35308f] dark:text-[#5c56d6]' : 'text-slate-400 dark:text-slate-500'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium hidden sm:block">{item.name}</span>
          </NavLink>
        ))}
        <button onClick={toggleTheme} className="p-2 text-slate-400 dark:text-slate-500">
           {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
