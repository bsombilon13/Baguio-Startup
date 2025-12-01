import React from 'react';

export const BentoGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] ${className}`}>
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
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-[2rem] p-6
        bg-white border border-slate-100 shadow-sm
        hover:shadow-lg hover:border-slate-200 transition-all duration-300 group
        ${onClick ? 'cursor-pointer hover:scale-[1.01] active:scale-[0.99]' : ''}
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