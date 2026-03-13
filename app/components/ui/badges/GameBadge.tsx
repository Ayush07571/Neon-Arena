'use client';

import React from 'react';

interface GameBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const GameBadge: React.FC<GameBadgeProps> = ({ 
  children, 
  variant = 'primary',
  className = '' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400';
      case 'secondary':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      case 'accent':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400';
      default:
        return 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400';
    }
  };

  return (
    <span className={`
      inline-block px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-widest
      border backdrop-blur-sm transition-all duration-300
      ${getVariantStyles()}
      ${className}
    `}>
      {children}
    </span>
  );
};
