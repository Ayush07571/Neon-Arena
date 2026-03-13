'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SocialLinks } from '../components/ui/social/SocialLinks';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { Users, Shield, Zap } from 'lucide-react';

export const CommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  const stats = [
    { label: 'Active Players', value: '500K+', icon: Users, color: '#00ffff' },
    { label: 'Verified Communities', value: '1.2K', icon: Shield, color: '#ff00ff' },
    { label: 'Daily Operations', value: '15K', icon: Zap, color: '#ffff00' }
  ];

  return (
    <section 
      id="community"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111111_0%,#000000_100%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-gray-500"
          >
            Join the Network
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto"
          >
            Become part of a thriving ecosystem of competitive players, developers, and esports organizers. Your legacy starts here.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group"
              >
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: stat.color }}
                />
                <stat.icon className="w-8 h-8 mb-4 mx-auto" style={{ color: stat.color }} />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
             <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 -z-10" />
             <div className="inline-block px-8 bg-black">
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Connect with Us</span>
             </div>
          </div>

          <div className="mt-12">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
