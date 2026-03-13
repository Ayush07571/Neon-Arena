'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassmorphismCard } from './GlassmorphismCard';
import { Calendar, Users, Trophy } from 'lucide-react';

interface TournamentCardProps {
  title: string;
  game: string;
  prizePool: string;
  startDate: string;
  participants: number;
  maxParticipants: number;
  glowColor?: string;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({
  title,
  game,
  prizePool,
  startDate,
  participants,
  maxParticipants,
  glowColor = '#00ffff'
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(startDate).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <GlassmorphismCard 
      glowColor={glowColor}
      enableTilt={true}
      className="group h-full"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] mb-1 block">
              Live Tournament
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-500 text-sm font-mono uppercase">{game}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center min-w-[80px]">
            <Trophy className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <span className="text-sm font-bold text-white">{prizePool}</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { label: 'D', value: timeLeft.days },
            { label: 'H', value: timeLeft.hours },
            { label: 'M', value: timeLeft.minutes },
            { label: 'S', value: timeLeft.seconds }
          ].map((unit, i) => (
            <div key={i} className="bg-black/40 border border-white/5 rounded p-2 text-center">
              <span className="block text-xl font-bold text-white tabular-nums">{unit.value.toString().padStart(2, '0')}</span>
              <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest">{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 mt-auto">
          <div className="flex items-center text-sm text-gray-400">
            <Users className="w-4 h-4 mr-2 text-cyan-500" />
            <span>{participants} / {maxParticipants} Registered</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
            <span>Starts: {new Date(startDate).toLocaleDateString()}</span>
          </div>
          
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
            <motion.div 
              className="h-full bg-cyan-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${(participants / maxParticipants) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          
          <button className="w-full mt-6 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-sm uppercase tracking-widest rounded hover:bg-cyan-500 hover:text-black transition-all duration-300">
            Join Tournament
          </button>
        </div>
      </div>
    </GlassmorphismCard>
  );
};
