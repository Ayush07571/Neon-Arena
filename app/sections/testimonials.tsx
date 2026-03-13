'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { TypewriterTestimonials } from '../components/ui/typewriter-testimonial';

const TESTIMONIALS_DATA = [
  {
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
    audio: '', // Optional: Add filename if you have /public/audio/ files
    text: 'Neon Arena changed how our squad operates. The unified dashboard and scrim tools are indispensable for competitive play.',
    name: 'Alex "Void" Chen',
    jobtitle: 'Pro Gamer // Tier 1',
  },
  {
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop',
    audio: '',
    text: 'The reliability of the tournament infrastructure is unmatched. We saw a 40% increase in participant engagement since switching.',
    name: 'Sarah Jenkins',
    jobtitle: 'Tournament Director',
  },
  {
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop',
    audio: '',
    text: 'Building a toxic-free gaming environment was our priority. Neon Arena’s reputation system made it possible.',
    name: 'Marcus Wright',
    jobtitle: 'Community Lead',
  },
  {
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop',
    audio: '',
    text: 'I was skeptical at first, but this product delivered beyond my wildest dreams. It is robust, reliable, and has become essential.',
    name: 'Emily White',
    jobtitle: 'Project Lead',
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop',
    audio: '',
    text: 'This tool is a game-changer for data analysis. The visualisations are clear, and the insights gained are invaluable.',
    name: 'David Lee',
    jobtitle: 'Data Scientist',
  },
  {
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop',
    audio: '',
    text: 'I appreciate the continuous updates and improvements. The team behind this product clearly listens to user feedback.',
    name: 'Sarah Chen',
    jobtitle: 'Operations Manager',
  }
];

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black overflow-hidden"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a1a1a_0%,#000000_60%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-500"
          >
            Trusted by the Best
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
             Hover over the operatives to decrypt their transmissions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <TypewriterTestimonials testimonials={TESTIMONIALS_DATA} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
