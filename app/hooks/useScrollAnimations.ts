'use client';

import { useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useScrollAnimations = (threshold: number = 0.2) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return { ref, controls, revealVariants };
};

export default useScrollAnimations;
