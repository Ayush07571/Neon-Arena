'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { JoinButton } from '../components/ui/buttons/JoinButton';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

export const FinalCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="final-cta"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]" />
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            className="text-cyan-400 font-mono tracking-[0.5em] text-sm uppercase mb-8 block"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            System Authorization Required
          </motion.span>
          
          <h2 className="text-5xl md:text-8xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 leading-tight">
            YOUR ARENA<br />AWAITS
          </h2>
          
          <p className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            The next generation of competitive gaming infrastructure is online. 
            Establish your presence and claim your sector today.
          </p>

          <div className="flex flex-col items-center">
            <JoinButton />
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center space-x-8 text-gray-600 font-mono text-xs uppercase tracking-widest"
            >
              <span>Verified Operatives: 512,042</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full" />
              <span>Sectors Active: 1,204</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full" />
              <span>System Uptime: 99.99%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative side glows */}
      <div className="absolute left-0 top-0 w-1/4 h-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/4 h-full bg-purple-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default FinalCTASection;
