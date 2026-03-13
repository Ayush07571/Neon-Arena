'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FragmentationIcons } from '../components/features/problem/FragmentationIcons';
import { GlassmorphismCard } from '../components/ui/cards/GlassmorphismCard';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

export const ProblemSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section 
      id="problem"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-20 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0"
      >
        {/* Background radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            The Gaming Paradox
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            In an era of hyper-connectivity, the gaming community has never been more fragmented. 
            Siloed platforms, toxic environments, and disconnected experiences are killing the spirit of play.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="mb-20">
          <FragmentationIcons />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Community Burnout",
              description: "Managing 15 different Discord servers just to stay connected with your squad is exhausting.",
              color: "#ff00ff"
            },
            {
              title: "Skill Stagnation",
              description: "Without a centralized hub for competitive data, tracking your growth across titles is impossible.",
              color: "#00ffff"
            },
            {
              title: "Toxic Echo Chambers",
              description: "Isolated communities often breed toxicity, making it harder for new players to find their place.",
              color: "#ffff00"
            }
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassmorphismCard 
                glowColor={item.color}
                className="h-full"
                padding="1.5rem"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </GlassmorphismCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative neon lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
    </section>
  );
};

export default ProblemSection;
