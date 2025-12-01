import React from 'react';

export const BentoGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] ${className}`}>
      {children}
    </div>
  );
};

export const BentoItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  background?: string;
}> = ({ children, className = "", onClick, background }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`
        relative overflow-hidden rounded-3xl p-6
        bg-white dark:bg-slate-900 
        border border-slate-100 dark:border-slate-800 
        shadow-sm hover:shadow-lg dark:hover:shadow-slate-800/50
        hover:border-slate-300 dark:hover:border-slate-600
        transition-all duration-300 group
        ${onClick ? 'cursor-pointer hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-indigo-500/20' : ''}
        ${className}
      `}
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay if background image is present */}
      {background && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity"></div>
      )}
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};