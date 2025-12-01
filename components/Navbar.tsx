import React from 'react';
import { Home, Calendar, Users, Zap, BookOpen, Megaphone, PlusCircle, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Hub', icon: Home, path: '/' },
    { name: 'Ecosystem', icon: Users, path: '/ecosystem' },
    { name: 'Events', icon: Calendar, path: '/events' },
    { name: 'Resources', icon: Zap, path: '/funding' },
    { name: 'Announcements', icon: Megaphone, path: '/announcements' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white border-r border-slate-200 z-50">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              BS
            </div>
            <div className="leading-tight">
              <h1 className="font-bold text-slate-900 text-lg">Baguio</h1>
              <h2 className="font-medium text-slate-500 text-sm">Startup Network</h2>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-[#3b3b98] text-white shadow-md shadow-indigo-200'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <item.icon size={20} strokeWidth={2} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4">
          <div className="bg-[#3b3b98] rounded-2xl p-4 text-white shadow-xl shadow-indigo-200">
            <h3 className="text-sm font-medium opacity-80 mb-1">Build your dream</h3>
            <button className="w-full bg-white text-indigo-900 font-bold py-2.5 rounded-lg text-sm hover:bg-indigo-50 transition-colors mt-2">
              Join Community
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.slice(0, 4).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? 'text-[#3b3b98]' : 'text-slate-400'
              }`
            }
          >
            <item.icon size={22} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;