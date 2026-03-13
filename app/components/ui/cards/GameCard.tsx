'use client';

import React from 'react';
import { GlassmorphismCard } from './GlassmorphismCard';
import { GameBadge } from '../badges/GameBadge';
import { Users, Trophy } from 'lucide-react';

interface GameCardProps {
  title: string;
  genre: string;
  players: string;
  tournaments: number;
  imageUrl: string;
  glowColor?: string;
  status?: 'active' | 'upcoming' | 'maintenance';
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  genre,
  players,
  tournaments,
  imageUrl,
  glowColor = '#00ffff',
  status = 'active'
}) => {
  return (
    <GlassmorphismCard 
      glowColor={glowColor}
      enableTilt={true}
      className="group h-full overflow-hidden flex flex-col"
      padding="0"
    >
      {/* Game Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <GameBadge variant={status === 'active' ? 'primary' : status === 'upcoming' ? 'secondary' : 'accent'}>
            {status}
          </GameBadge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em] mb-6">
          {genre}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm">
              <Users size={16} className="mr-2 text-cyan-500" />
              <span>{players} Active</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Trophy size={16} className="mr-2 text-yellow-500" />
              <span>{tournaments} Events</span>
            </div>
          </div>

          <div className="w-full h-px bg-white/10" />

          <button className="w-full py-3 bg-white/5 border border-white/10 rounded font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            View Sector Data
          </button>
        </div>

        {/* Decorative corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(circle at bottom right, ${glowColor}, transparent 70%)` 
          }}
        />
      </div>
    </GlassmorphismCard>
  );
};
