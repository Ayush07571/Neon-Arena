'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  image: string;
  audio: string;
  text: string;
  name: string;
  jobtitle: string;
};

type ComponentProps = {
  testimonials: Testimonial[];
};

export const TypewriterTestimonials: React.FC<ComponentProps> = ({ testimonials }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null); 
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean[]>(new Array(testimonials.length).fill(false));
  const [typedText, setTypedText] = useState('');
  const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentTextRef = useRef('');

  const stopAudio = useCallback(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause(); 
      audioPlayerRef.current.currentTime = 0; 
      audioPlayerRef.current.src = ''; 
      audioPlayerRef.current.load(); 
      audioPlayerRef.current = null; 
    }
  }, []); 

  const startTypewriter = useCallback((text: string) => {
    if (typewriterTimeoutRef.current) {
      clearTimeout(typewriterTimeoutRef.current);
    }
    setTypedText('');
    currentTextRef.current = text;
    
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setTypedText(text.slice(0, i));
        i++;
        typewriterTimeoutRef.current = setTimeout(type, 30); // Faster typing for better UX
      }
    };
    type();
  }, []);

  const stopTypewriter = useCallback(() => {
    if (typewriterTimeoutRef.current) {
      clearTimeout(typewriterTimeoutRef.current);
      typewriterTimeoutRef.current = null;
    }
    setTypedText('');
    currentTextRef.current = '';
  }, []); 

  const handleMouseEnter = useCallback((index: number) => {
    stopAudio(); 
    setHoveredIndex(index);
  
    // Optional: Only play if audio exists
    if (testimonials[index].audio) {
      const newAudio = new Audio(`/audio/${testimonials[index].audio}`);
      audioPlayerRef.current = newAudio; 
      newAudio.play().catch(e => {
          console.warn("Audio playback prevented or failed. Ensure audio files exist in /public/audio/", e);
      });
    }
    
    setHasBeenHovered(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    startTypewriter(testimonials[index].text);
  }, [testimonials, stopAudio, startTypewriter]); 

  const handleMouseLeave = useCallback(() => {
    stopAudio(); 
    setHoveredIndex(null);
    stopTypewriter();
  }, [stopAudio, stopTypewriter]);

  useEffect(() => {
    return () => {
      stopAudio(); 
      stopTypewriter(); 
    };
  }, [stopAudio, stopTypewriter]); 

  return (
    <div className="flex justify-center items-center gap-8 flex-wrap py-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(index)} 
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="relative p-1 rounded-full bg-gradient-to-br from-cyan-500/50 to-purple-500/50"
            animate={{ 
              boxShadow: (hoveredIndex === index) ? '0 0 20px #00ffff80' : '0 0 0px transparent'
            }}
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full border-2 border-black object-cover"
              animate={{ 
                borderColor: (hoveredIndex === index || hasBeenHovered[index]) ? '#00ffff' : '#333'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: -20 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-24 bg-black/80 backdrop-blur-xl text-white text-sm px-6 py-5 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,255,255,0.15)] max-w-xs w-72 z-50"
              >
                <div className="h-28 overflow-y-auto whitespace-pre-wrap scrollbar-hide font-medium leading-relaxed">
                  {typedText}
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-1 h-4 bg-cyan-400 ml-1 translate-y-0.5"
                  />
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-end">
                  <p className="font-bold text-cyan-400 tracking-tight">{testimonial.name}</p>
                  <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{testimonial.jobtitle}</p>
                </div>

                {/* Cyberpunk speech bubble tail */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 bg-black/80 border-r border-b border-cyan-500/30 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
