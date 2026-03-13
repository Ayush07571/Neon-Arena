'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { LayoutGrid, Zap, Target, ShieldCheck } from 'lucide-react';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { LazyImage } from '../components/optimization/LazyImage';

export const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const solutions = [
    {
      title: "Unified Ecosystem",
      description: "Every tool you need—from scrims to tournaments—integrated into a single dashboard.",
      icon: LayoutGrid,
      color: "#00ffff"
    },
    {
      title: "Real-time Analytics",
      description: "Deep-dive into your performance with AI-driven insights that help you level up faster.",
      icon: Zap,
      color: "#ffff00"
    },
    {
      title: "Competitive Matchmaking",
      description: "Find players who match your skill and ambition, backed by a robust reputation system.",
      icon: Target,
      color: "#ff00ff"
    },
    {
      title: "Verified Communities",
      description: "Safety-first environments where toxicity is filtered out, and excellence is celebrated.",
      icon: ShieldCheck,
      color: "#00ff00"
    }
  ];

  return (
    <section 
      id="solution"
      ref={sectionRef}
      className="relative bg-black"
    >
      {/* Background radial gradient */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black z-0" />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 pt-24">
        {/* Text Content Header */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tight"
          >
            The Neon Solution
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Neon Arena isn&apos;t just another platform. It&apos;s the infrastructure for the next generation of esports. 
            We&apos;ve built a centralized hub that bridges the gap between casual play and professional competition.
          </motion.p>
        </motion.div>

        {/* Scroll Animation Preview */}
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {solutions.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group"
                  >
                    <div 
                      className="p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <item.icon size={28} style={{ color: item.color }} />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-tight">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            }
          >
            <div className="relative w-full h-full bg-black">
               <LazyImage
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070"
                  alt="Neon Arena Dashboard"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
               
               {/* Dashboard Overlay Mockup */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center animate-pulse">
                     <Zap size={48} className="text-cyan-400" />
                  </div>
               </div>
               
               <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-3">
                     <div className="h-1.5 w-40 bg-cyan-500/40 rounded-full" />
                     <div className="h-1.5 w-60 bg-purple-500/40 rounded-full" />
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Neural Link Stable</span>
                  </div>
               </div>
            </div>
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
