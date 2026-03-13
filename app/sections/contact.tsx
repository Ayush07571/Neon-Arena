'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ContactForm } from '../components/ui/forms/ContactForm';
import { useSectionTransitions } from '../hooks/useSectionTransitions';
import { Terminal } from 'lucide-react';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { opacity, scale, y } = useSectionTransitions(sectionRef);

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center py-24 bg-black"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#111111_0%,#000000_100%)]" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-cyan-400 font-mono text-sm uppercase tracking-widest mb-6"
            >
              <Terminal size={16} />
              <span>Direct Comms Channel // Sector 7</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-gray-500"
            >
              Contact System Admin
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xl mb-12 leading-relaxed"
            >
              Need technical support, sponsorship inquiries, or partnership opportunities? Establish an uplink with our team.
            </motion.p>

            <div className="space-y-6">
              {[
                { label: 'Uplink Node', value: 'admin@neon-arena.io' },
                { label: 'Secure Line', value: '+1 (555) 010-1101' },
                { label: 'HQ Coordinates', value: 'Neo-Tokyo, Sector 4' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">{item.label}</span>
                  <span className="text-white font-bold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
            >
              <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[15px] border border-white/5 shadow-2xl">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
