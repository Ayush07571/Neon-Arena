'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface NeonNavigationProps {
  sections: NavigationItem[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const NeonNavigation: React.FC<NeonNavigationProps> = ({
  sections,
  activeSection,
  onSectionChange
}) => {
  const [isVisible] = useState(true);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    // Component mounted effects
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    
    // Smooth scroll to section
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-center bg-black/90 backdrop-blur-md border-b border-cyan-500/20">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          
          return (
            <motion.button
              key={section.id}
              className={`
                relative px-6 py-3 text-cyan-400 font-bold text-sm
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? 'bg-cyan-500/20 text-white shadow-[inset_0_0_20px_rgba(0,255,255,0.2)]' 
                  : 'hover:bg-cyan-500/10 text-white'
                }
              `}
              onClick={() => handleSectionClick(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2">
                {section.icon && (
                  <span className="mr-2">{section.icon}</span>
                )}
                <span className={`transition-colors duration-300 ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : 'text-cyan-300'}`}>
                  {section.title}
                </span>
              </div>
              
              {/* Tubelight glow effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${isActive ? '#00ffff40' : '#00ffff20'}, transparent)`,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: (isHovered || isActive) ? 0.6 : 0,
                  scaleX: (isHovered || isActive) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          );
        })}
      </div>
      
      {/* Progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: activeSection ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.nav>
  );
};
