'use client';

import { motion } from 'framer-motion';

interface NeonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: string;
}

export const NeonLogo: React.FC<NeonLogoProps> = ({ 
  className = '', 
  size = 'lg',
  glowColor = '#00ffff'
}) => {
  const sizeMap = {
    sm: 64,
    md: 96, 
    lg: 128,
    xl: 192
  };

  const currentSize = sizeMap[size];

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateY: 0,
        transition: { duration: 1.5, ease: "easeOut" }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      style={{
        width: currentSize,
        height: currentSize,
      }}
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 blur-[40px] opacity-30 rounded-full"
        style={{ backgroundColor: glowColor }}
      />

      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* External Hexagon Frame */}
        <motion.path
          d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
          stroke={glowColor}
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />

        {/* Internal Hexagon */}
        <motion.path
          d="M50 15 L82 32.5 L82 67.5 L50 85 L18 67.5 L18 32.5 Z"
          stroke={glowColor}
          strokeWidth="1"
          opacity="0.5"
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [0.95, 1, 0.95]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Central Core 'N' Shape */}
        <motion.path
          d="M35 35 L35 65 M35 35 L65 65 M65 35 L65 65"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            filter: `drop-shadow(0 0 12px ${glowColor})`
          }}
        />

        {/* Decorative Scanning Line */}
        <motion.line
          x1="15" y1="30" x2="85" y2="30"
          stroke={glowColor}
          strokeWidth="0.5"
          animate={{ 
            y1: [25, 75, 25],
            y2: [25, 75, 25],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Corner Accents */}
        <path d="M10 27.5 L20 22" stroke={glowColor} strokeWidth="1" />
        <path d="M90 27.5 L80 22" stroke={glowColor} strokeWidth="1" />
        <path d="M50 5 L50 15" stroke={glowColor} strokeWidth="1" />
        <path d="M50 95 L50 85" stroke={glowColor} strokeWidth="1" />
      </svg>

      {/* Internal Rotating Ring */}
      <motion.div
        className="absolute inset-4 border border-white/10 rounded-full border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};
