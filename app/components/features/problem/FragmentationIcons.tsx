'use client';

import { motion } from 'framer-motion';
import { Users, Gamepad2, MessageSquare, Shield } from 'lucide-react';

export const FragmentationIcons = () => {
  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 2
      }
    })
  };

  const icons = [
    { Icon: Users, color: '#ff00ff', label: 'Fragmented Communities' },
    { Icon: Gamepad2, color: '#00ffff', label: 'Disconnected Players' },
    { Icon: MessageSquare, color: '#ffff00', label: 'Siloed Discussions' },
    { Icon: Shield, color: '#ff3333', label: 'Insecure Environments' }
  ];

  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-center p-8 bg-black/20 rounded-2xl backdrop-blur-sm border border-white/10">
      {icons.map(({ Icon, color, label }, index) => (
        <motion.div
          key={label}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          custom={index}
          className="flex flex-col items-center gap-4 group"
        >
          <div 
            className="p-6 rounded-full bg-black/40 border border-white/20 relative group-hover:border-opacity-50 transition-all duration-300"
            style={{ 
              boxShadow: `0 0 20px ${color}33`,
            }}
          >
            <Icon 
              size={48} 
              style={{ color }} 
              className="relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: color }}
            />
          </div>
          <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors text-center">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
