'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FeatureGrid } from '../components/ui/layout/FeatureGrid';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { Trophy, Users, Zap, Target, Shield, LayoutGrid } from 'lucide-react';

const FEATURES_DATA = [
  {
    id: 'f1',
    title: 'Global Tournaments',
    description: 'Compete in daily tournaments with real prizes. Climb the global ranks and prove your worth in the arena.',
    Icon: Trophy,
    glowColor: '#00ffff'
  },
  {
    id: 'f2',
    title: 'Squad Formation',
    description: 'Find compatible teammates with our advanced matchmaking. Build your dream team and dominate together.',
    Icon: Users,
    glowColor: '#ff00ff'
  },
  {
    id: 'f3',
    title: 'Instant Scrims',
    description: 'Launch practice matches against players of similar skill level. Optimize your strategies in real-time.',
    Icon: Zap,
    glowColor: '#ffff00'
  },
  {
    id: 'f4',
    title: 'Performance Tracking',
    description: 'Deep-dive into your stats across all major titles. AI-driven insights to help you level up faster.',
    Icon: Target,
    glowColor: '#00ff00'
  },
  {
    id: 'f5',
    title: 'Verified Arena',
    description: 'A fair-play environment backed by advanced anti-cheat and a robust reputation system.',
    Icon: Shield,
    glowColor: '#ff3333'
  },
  {
    id: 'f6',
    title: 'Custom Dashboards',
    description: 'Every tool you need, exactly where you want it. Personalized gaming hub for maximum efficiency.',
    Icon: LayoutGrid,
    glowColor: '#4d4dff'
  }
];

export const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      {/* Dynamic background effect */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono tracking-widest text-sm uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
          >
            Elevate Your Gameplay
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Harness the power of professional-grade tools designed specifically for the next generation of competitive gamers.
          </motion.p>
        </div>

        <FeatureGrid features={FEATURES_DATA} />
      </div>

      {/* Side glow accents */}
      <div className="absolute left-0 top-1/4 w-32 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-32 h-96 bg-purple-500/10 blur-[100px] pointer-events-none" />
    </section>
  );
};

export default FeaturesSection;
