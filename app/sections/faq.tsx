'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FAQAccordion } from '../components/ui/faq/FAQAccordion';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

const FAQ_DATA = [
  {
    id: 'q1',
    question: 'What platforms does Neon Arena support?',
    answer: 'We currently support PC (Windows), PlayStation 5, and Xbox Series X/S. Mobile support is currently in closed beta.'
  },
  {
    id: 'q2',
    question: 'How does the reputation system work?',
    answer: 'Our proprietary AI analyzes match behavior, community interactions, and verified reports to assign a "Trust Score". High scores unlock exclusive tournaments and rewards.'
  },
  {
    id: 'q3',
    question: 'Are there entry fees for tournaments?',
    answer: 'Many of our daily tournaments are free to enter for all registered Operatives. Major prize pool events may require a Pro Gamer tier or a small credit entry fee.'
  },
  {
    id: 'q4',
    question: 'Can I create my own community on the platform?',
    answer: 'Yes! Pro Gamer and Elite tier members can initialize their own sectors, recruit members, and organize private scrims or tournaments.'
  },
  {
    id: 'q5',
    question: 'What kind of data analytics do you provide?',
    answer: 'We provide deep-dive metrics including heatmaps, aim consistency, tactical positioning, and squad synergy scores across all supported titles.'
  }
];

export const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a_0%,#000000_100%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
          >
            System Knowledge
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
             Frequently asked questions about the Neon Arena ecosystem.
          </p>
        </div>

        <FAQAccordion items={FAQ_DATA} />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Can&apos;t find what you&apos;re looking for?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
          >
             Contact System Admin
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
