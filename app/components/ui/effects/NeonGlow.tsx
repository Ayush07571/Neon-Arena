'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface NeonGlowProps {
  children: React.ReactNode;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  active?: boolean;
  className?: string;
}

export const NeonGlow: React.FC<NeonGlowProps> = ({
  children,
  color = '#00ffff',
  intensity = 'medium',
  active = false,
  className = ''
}) => {
  const intensities = {
    low: { blur: 'blur-md', opacity: 'opacity-20' },
    medium: { blur: 'blur-lg', opacity: 'opacity-40' },
    high: { blur: 'blur-xl', opacity: 'opacity-60' }
  };

  const currentIntensity = intensities[intensity];

  return (
    <div className={`relative group ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
      
      <motion.div
        initial={false}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? 1.05 : 1,
        }}
        className={`absolute inset-0 -z-10 rounded-lg transition-all duration-500 ${currentIntensity.blur} ${currentIntensity.opacity}`}
        style={{
          backgroundColor: color,
          boxShadow: `0 0 30px ${color}`
        }}
      />
      
      {/* Hover effect */}
      <div 
        className={`absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ${currentIntensity.blur} bg-opacity-30`}
        style={{
          backgroundColor: color,
          boxShadow: `0 0 40px ${color}`
        }}
      />
    </div>
  );
};

export default NeonGlow;
