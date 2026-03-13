'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CyberpunkBackgroundProps {
  className?: string;
  particleCount?: number;
  glowIntensity?: number;
}

// Deterministic-ish random helper to avoid impurity during render
const getPseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const CyberpunkBackground: React.FC<CyberpunkBackgroundProps> = ({ 
  className = '',
  particleCount = 50,
  glowIntensity = 0.6
}) => {
  const gridPositions = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      left: `${getPseudoRandom(i * 123.45) * 100}%`,
      top: `${getPseudoRandom(i * 678.90) * 100}%`,
    })), []);

  const particlePositions = useMemo(() => 
    [...Array(particleCount)].map((_, i) => {
      const seed = i + 1;
      return {
        left: `${getPseudoRandom(seed * 11.1) * 100}%`,
        top: `${getPseudoRandom(seed * 22.2) * 100}%`,
        initialX: (getPseudoRandom(seed * 33.3) - 0.5) * 100,
        initialY: (getPseudoRandom(seed * 44.4) - 0.5) * 100,
        animateX: (getPseudoRandom(seed * 55.5) - 0.5) * 200,
        animateY: (getPseudoRandom(seed * 66.6) - 0.5) * 200,
      };
    }), [particleCount]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Animated grid background */}
      <div className="absolute inset-0 w-full h-full">
        {gridPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-500/20"
            style={{
              left: pos.left,
              top: pos.top,
              width: '2px',
              height: '2px',
              background: `linear-gradient(45deg, transparent, rgba(0, 255, 255, ${0.1 * glowIntensity}))`,
              boxShadow: `0 0 10px rgba(0, 255, 255, ${0.2 * glowIntensity})`,
              animation: `pulse ${2 + i * 0.1}s infinite`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3][i % 3] }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: pos.left,
            top: pos.top,
            boxShadow: `0 0 6px rgba(0, 255, 255, ${glowIntensity})`,
            animation: `float ${3 + i * 0.5}s infinite`
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: pos.initialX,
            y: pos.initialY
          }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4][i % 3],
            scale: [1, 1.2, 1][i % 3],
            x: pos.animateX,
            y: pos.animateY,
            transition: { duration: 2, ease: "easeInOut" }
          }}
        />
      ))}
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/80 to-transparent opacity-30"
        style={{
          animation: 'gradient 10s ease infinite'
        }}
      />
    </div>
  );
};
