'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { PricingCard } from '../components/ui/cards/PricingCard';
import { useSectionTransitions } from '../hooks/useSectionTransitions';

const PRICING_DATA = [
  {
    name: 'Operative',
    price: '$0',
    billingCycle: '/mo',
    features: [
      'Access to Public Arenas',
      'Basic Performance Stats',
      'Squad Finder Access',
      'Community Chat',
      'Weekly Tournaments'
    ],
    glowColor: '#4d4dff'
  },
  {
    name: 'Pro Gamer',
    price: '$19',
    billingCycle: '/mo',
    features: [
      'All Operative Features',
      'Advanced AI Analytics',
      'Unlimited Scrims',
      'Verified Reputation Badge',
      'Pro-Only Tournaments',
      'Priority Matchmaking'
    ],
    isPopular: true,
    glowColor: '#00ffff'
  },
  {
    name: 'Elite',
    price: '$49',
    billingCycle: '/mo',
    features: [
      'All Pro Features',
      '1-on-1 Coaching Session',
      'Team Management Tools',
      'Sponsorship Networking',
      'Early Access to Features',
      'Exclusive Physical Merch'
    ],
    glowColor: '#ff00ff'
  }
];

export const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="pricing"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
          >
            Access Tiers
          </motion.h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Choose your level of engagement and unlock professional-grade capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_DATA.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard {...tier} />
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-500 font-mono text-sm uppercase tracking-widest"
        >
          Secure Encrypted Transaction // Enterprise solutions available upon request
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
