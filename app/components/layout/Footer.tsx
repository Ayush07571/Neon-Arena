'use client';

import { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ children, className = '' }) => {
  return (
    <footer className={`bg-black/90 backdrop-blur-md border-t border-white/20 ${className}`}>
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </footer>
  );
};
