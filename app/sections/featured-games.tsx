'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameCard } from '../components/ui/cards/GameCard';
import { GameFilter } from '../components/features/games/GameFilter';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

const GAMES_DATA = [
  {
    id: 'g1',
    title: 'Neon Strike',
    genre: 'FPS',
    players: '125K',
    tournaments: 12,
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070',
    glowColor: '#00ffff',
    status: 'active' as const
  },
  {
    id: 'g2',
    title: 'Void Runner',
    genre: 'Racing',
    players: '45K',
    tournaments: 8,
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2071',
    glowColor: '#ff00ff',
    status: 'active' as const
  },
  {
    id: 'g3',
    title: 'Core Breach',
    genre: 'Strategy',
    players: '89K',
    tournaments: 15,
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2130',
    glowColor: '#ffff00',
    status: 'active' as const
  },
  {
    id: 'g4',
    title: 'Shadow Protocol',
    genre: 'Stealth',
    players: '0',
    tournaments: 0,
    imageUrl: 'https://images.unsplash.com/photo-1552824734-8046768ffecb?auto=format&fit=crop&q=80&w=2070',
    glowColor: '#00ff00',
    status: 'upcoming' as const
  },
  {
    id: 'g5',
    title: 'Cyber Legion',
    genre: 'MOBA',
    players: '210K',
    tournaments: 24,
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2076',
    glowColor: '#4d4dff',
    status: 'active' as const
  },
  {
    id: 'g6',
    title: 'Aether Drift',
    genre: 'RPG',
    players: '67K',
    tournaments: 5,
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070',
    glowColor: '#ff3333',
    status: 'active' as const
  }
];

const GENRES = ['All', 'FPS', 'Racing', 'Strategy', 'MOBA', 'RPG', 'Stealth'];

export const FeaturedGamesSection = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);
  
  const [activeGenre, setActiveGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesGenre = activeGenre === 'All' || game.genre === activeGenre;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [activeGenre, searchQuery]);

  return (
    <section 
      id="games"
      ref={sectionRef}
      className="min-h-screen relative py-24 bg-black"
    >
      {/* Background radial gradient */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 font-mono tracking-[0.3em] text-sm uppercase mb-4 block">
              Deployment Matrix
            </span>
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500 mb-6">
              Active Sectors
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Engage in verified arenas across the network. Real-time telemetry and competitive infrastructure ready.
            </p>
          </motion.div>
        </div>

        <GameFilter 
          activeGenre={activeGenre}
          genres={GENRES}
          onGenreChange={setActiveGenre}
          onSearchChange={setSearchQuery}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GameCard {...game} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGames.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 font-mono text-lg uppercase tracking-widest">
              {"// NO SECTORS LOCATED WITH CURRENT FILTERS //"}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedGamesSection;
