'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface JoinButtonProps {
  onClick?: () => void;
  className?: string;
}

export const JoinButton: React.FC<JoinButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-12 py-6 bg-cyan-500 rounded-lg group overflow-hidden ${className}`}
    >
      {/* Background animated pulse */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Button content */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        <ShieldCheck className="w-8 h-8 text-black" />
        <span className="text-2xl font-black text-black tracking-[0.2em] uppercase">
          Initialize Access
        </span>
      </div>

      {/* Extreme glow */}
      <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
      <div className="absolute -inset-4 bg-cyan-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity -z-20 animate-pulse" />
    </motion.button>
  );
};
