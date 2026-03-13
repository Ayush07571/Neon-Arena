'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { GlassmorphismCard } from '../components/ui/cards/GlassmorphismCard';
import { ScoreCounter } from '../components/ui/leaderboard/ScoreCounter';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { Trophy, Medal, Star } from 'lucide-react';

const LEADERBOARD_DATA = [
  { id: '1', rank: 1, username: 'CYBER_PHANTOM', score: 98550, country: 'JP', avatar: '👻', color: '#00ffff' },
  { id: '2', rank: 2, username: 'NEON_KNIGHT', score: 94200, country: 'US', avatar: '⚔️', color: '#ff00ff' },
  { id: '3', rank: 3, username: 'GLITCH_MASTER', score: 91150, country: 'DE', avatar: '👾', color: '#ffff00' },
  { id: '4', rank: 4, username: 'VOID_WALKER', score: 88400, country: 'KR', avatar: '🌌', color: '#00ff00' },
  { id: '5', rank: 5, username: 'PIXEL_PUNK', score: 85900, country: 'BR', avatar: '🎸', color: '#4d4dff' },
];

export const LeaderboardSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="leaderboard"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_70%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
          >
            <Trophy className="text-cyan-400 w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
          >
            Elite Rankings
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            The legends who dominate the Neon Arena. Updated in real-time across all sectors.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassmorphismCard 
            glowColor="#00ffff"
            padding="0"
            className="overflow-hidden border-white/5"
          >
            <div className="divide-y divide-white/10">
              {LEADERBOARD_DATA.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center justify-between p-6 hover:bg-white/5 transition-colors relative overflow-hidden"
                >
                  <div className="flex items-center space-x-6 relative z-10">
                    <div className="w-12 text-center">
                      {player.rank === 1 ? (
                        <Medal className="w-8 h-8 text-yellow-400 mx-auto drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                      ) : player.rank === 2 ? (
                        <Medal className="w-8 h-8 text-gray-300 mx-auto drop-shadow-[0_0_8px_rgba(209,213,219,0.5)]" />
                      ) : player.rank === 3 ? (
                        <Medal className="w-8 h-8 text-amber-600 mx-auto drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
                      ) : (
                        <span className="text-2xl font-mono text-gray-500">{player.rank}</span>
                      )}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      {player.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide">
                        {player.username}
                      </h3>
                      <span className="text-xs font-mono text-gray-500">{player.country}{" // SECTOR_X"}</span>
                    </div>
                  </div>
                  
                  <div className="text-right relative z-10">
                    <div className="flex items-center justify-end space-x-2">
                      <ScoreCounter 
                        value={player.score} 
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                      />
                      <Star className="w-4 h-4 text-cyan-500 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-widest">
                      Points Accredited
                    </span>
                  </div>

                  {/* Hover background glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${player.color}05, transparent)`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </GlassmorphismCard>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <button className="text-cyan-400 hover:text-cyan-300 font-mono text-sm uppercase tracking-widest flex items-center mx-auto space-x-2 group">
              <span>View Full Rankings</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
