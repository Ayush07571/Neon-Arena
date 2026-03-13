'use client';

import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
  return (
    <header className={`bg-black/90 backdrop-blur-md border-b border-white/20 ${className}`}>
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </header>
  );
};
