'use client';

import { GlassmorphismCard } from './GlassmorphismCard';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  glowColor?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  Icon,
  glowColor = '#00ffff'
}) => {
  return (
    <GlassmorphismCard 
      glowColor={glowColor}
      enableTilt={true}
      className="h-full group cursor-pointer"
      padding="0"
    >
      <div className="p-8 h-full flex flex-col items-center text-center">
        <div 
          className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:border-opacity-50 transition-all duration-300 relative"
          style={{ 
            boxShadow: `0 0 20px ${glowColor}33`,
          }}
        >
          <Icon 
            size={40} 
            style={{ color: glowColor }} 
            className="relative z-10 group-hover:scale-110 transition-transform duration-300"
          />
          {/* Neon inner glow */}
          <div 
            className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ backgroundColor: glowColor }}
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>

        {/* Decorative corner highlights */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: glowColor }} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: glowColor }} />
      </div>
    </GlassmorphismCard>
  );
};
