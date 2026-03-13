'use client';

import { GlassmorphismCard } from './GlassmorphismCard';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  author: string;
  role: string;
  content: string;
  avatar: string;
  glowColor?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  role,
  content,
  avatar,
  glowColor = '#00ffff'
}) => {
  return (
    <GlassmorphismCard 
      glowColor={glowColor}
      enableTilt={true}
      className="group h-full flex flex-col"
    >
      <div className="p-8 flex flex-col h-full relative">
        <Quote 
          className="absolute top-4 right-8 w-12 h-12 opacity-5 -z-10 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500"
          style={{ color: glowColor }}
        />
        
        <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10 font-medium">
          &quot;{content}&quot;
        </p>
        
        <div className="mt-auto flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-white/30 transition-colors flex items-center justify-center text-2xl bg-white/5">
            {avatar}
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wide group-hover:text-cyan-400 transition-colors">
               {author}
            </h4>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest leading-none mt-1">
               {role}
            </p>
          </div>
        </div>
        
        {/* Glow accent */}
        <div 
           className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-30 transition-opacity blur-md"
           style={{ backgroundColor: glowColor }}
        />
      </div>
    </GlassmorphismCard>
  );
};
