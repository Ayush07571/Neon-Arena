'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Share2, Video } from 'lucide-react';

const SOCIAL_PLATFORMS = [
  { 
    name: 'Discord', 
    icon: MessageSquare, 
    href: '#', 
    color: '#5865F2',
    description: 'Join 50k+ players'
  },
  { 
    name: 'Twitter', 
    icon: Share2, 
    href: '#', 
    color: '#1DA1F2',
    description: 'Latest updates'
  },
  { 
    name: 'Twitch', 
    icon: Video, 
    href: '#', 
    color: '#9146FF',
    description: 'Live tournaments'
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {SOCIAL_PLATFORMS.map((platform, index) => (
        <motion.a
          key={platform.name}
          href={platform.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div 
            className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
            style={{ boxShadow: `0 0 20px ${platform.color}10` }}
          >
            <div 
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${platform.color}22` }}
            >
              <platform.icon size={24} style={{ color: platform.color }} />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-sm leading-tight">{platform.name}</h4>
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{platform.description}</p>
            </div>
          </div>
          
          {/* Neon glow effect on hover */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
            style={{ backgroundColor: platform.color }}
          />
        </motion.a>
      ))}
    </div>
  );
};
