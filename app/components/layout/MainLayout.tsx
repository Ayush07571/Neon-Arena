'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { NeonNavigation } from '../ui/navigation/NeonNavigation';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Active section tracking
    const sectionIds = ['hero', 'problem', 'solution', 'features', 'games', 'leaderboard', 'tournaments', 'community', 'testimonials', 'pricing', 'faq', 'contact', 'final-cta'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'hero', title: 'Home', href: '#hero' },
    { id: 'problem', title: 'Paradox', href: '#problem' },
    { id: 'solution', title: 'Solution', href: '#solution' },
    { id: 'features', title: 'Features', href: '#features' },
    { id: 'games', title: 'Games', href: '#games' },
    { id: 'leaderboard', title: 'Rankings', href: '#leaderboard' },
    { id: 'tournaments', title: 'Tournaments', href: '#tournaments' },
    { id: 'community', title: 'Community', href: '#community' },
    { id: 'pricing', title: 'Pricing', href: '#pricing' },
  ];

  return (
    <div className={`min-h-screen bg-black text-white flex flex-col ${className}`}>
      {/* Neon Navigation */}
      <Header className="fixed top-0 left-0 right-0 z-50">
        <NeonNavigation 
          sections={navItems}
          activeSection={activeSection}
          onSectionChange={(id) => {
            setActiveSection(id);
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </Header>
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <Footer>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>© 2026 Neon Arena. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          </div>
        </div>
      </Footer>
    </div>
  );
};
