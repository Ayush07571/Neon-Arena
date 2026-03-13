'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  glowColor?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items,
  glowColor = '#00ffff'
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div 
            key={item.id}
            className={`border rounded-xl transition-all duration-300 backdrop-blur-md overflow-hidden ${
              isOpen ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
            }`}
            style={{ 
              borderColor: isOpen ? `${glowColor}50` : 'rgba(255, 255, 255, 0.1)',
              boxShadow: isOpen ? `0 0 20px ${glowColor}15` : 'none'
            }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown 
                  size={20} 
                  style={{ color: isOpen ? glowColor : 'rgb(156, 163, 175)' }} 
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
