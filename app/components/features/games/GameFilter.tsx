'use client';

import React from 'react';
import { Search, Filter } from 'lucide-react';

interface GameFilterProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
  onSearchChange: (query: string) => void;
  genres: string[];
}

export const GameFilter: React.FC<GameFilterProps> = ({
  activeGenre,
  onGenreChange,
  onSearchChange,
  genres
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
      {/* Search Input */}
      <div className="relative w-full md:w-96 group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
          <Search size={18} />
        </div>
        <input 
          type="text"
          placeholder="Locate Title // Sector_Query"
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-md font-mono text-sm uppercase tracking-wider"
        />
      </div>

      {/* Genre Pills */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
        <div className="flex items-center text-gray-500 mr-2">
          <Filter size={16} className="mr-2" />
          <span className="text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">Filter By</span>
        </div>
        
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`
              px-4 py-2 rounded-full text-[10px] font-bold font-mono uppercase tracking-[0.2em] whitespace-nowrap
              transition-all duration-300 border
              ${activeGenre === genre 
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20 hover:text-white'
              }
            `}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};
