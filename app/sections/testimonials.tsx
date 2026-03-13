'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { TestimonialCard } from '../components/ui/cards/TestimonialCard';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

const TESTIMONIALS_DATA = [
  {
    id: 't1',
    author: 'Alex "Void" Chen',
    role: 'Pro Gamer // Tier 1',
    content: 'Neon Arena changed how our squad operates. The unified dashboard and scrim tools are indispensable for competitive play.',
    avatar: '👨‍🚀',
    glowColor: '#00ffff'
  },
  {
    id: 't2',
    author: 'Sarah Jenkins',
    role: 'Tournament Director',
    content: 'The reliability of the tournament infrastructure is unmatched. We saw a 40% increase in participant engagement since switching.',
    avatar: '👩‍💻',
    glowColor: '#ff00ff'
  },
  {
    id: 't3',
    author: 'Marcus Wright',
    role: 'Community Lead',
    content: 'Building a toxic-free gaming environment was our priority. Neon Arena’s reputation system made it possible.',
    avatar: '🧔',
    glowColor: '#ffff00'
  }
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a1a1a_0%,#000000_60%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-500"
          >
            Trusted by the Best
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
             Real stories from the pioneers of the Neon Arena ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
