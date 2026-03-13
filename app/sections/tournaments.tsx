'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { TournamentCard } from '../components/ui/cards/TournamentCard';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { Zap } from 'lucide-react';

const TOURNAMENTS_DATA = [
  {
    id: 't1',
    title: 'Cyber Strike Masters',
    game: 'NEON_VALORANT',
    prizePool: '$25,000',
    startDate: '2026-04-15T18:00:00Z',
    participants: 48,
    maxParticipants: 64,
    glowColor: '#00ffff'
  },
  {
    id: 't2',
    title: 'Glitch Warfare League',
    game: 'CORE_DASH',
    prizePool: '$10,000',
    startDate: '2026-03-25T12:00:00Z',
    participants: 124,
    maxParticipants: 128,
    glowColor: '#ff00ff'
  },
  {
    id: 't3',
    title: 'Void Runner Pro',
    game: 'GRAVITY_ZERO',
    prizePool: '$5,000',
    startDate: '2026-03-30T15:00:00Z',
    participants: 12,
    maxParticipants: 32,
    glowColor: '#ffff00'
  }
];

export const TournamentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="tournaments"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#1a1a1a_0%,#000000_70%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-cyan-400 font-mono text-sm uppercase tracking-widest mb-4"
            >
              <Zap className="w-4 h-4" />
              <span>Live Deployment // Activating Arenas</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
            >
              Major Operations
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-sm md:text-right"
          >
            Securing prestige and rewards in global competitive operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURNAMENTS_DATA.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TournamentCard {...tournament} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10"
          >
            <span className="px-4 py-2 text-xs font-mono text-gray-500 uppercase">Incoming: Shadow_Run // Phase_4</span>
            <div className="px-4 py-2 bg-cyan-500/20 rounded-full">
               <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-widest">Awaiting Command</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
