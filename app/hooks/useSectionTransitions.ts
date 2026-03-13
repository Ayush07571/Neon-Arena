'use client';

import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface TransitionProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  glowIntensity: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export const useSectionTransitions = (targetRef: RefObject<HTMLElement | null>): TransitionProps => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transform values based on scroll progress
  // 0: start entering, 0.2: fully entered, 0.8: start leaving, 1: fully left
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  // Background glow intensity
  const glowIntensity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return {
    opacity,
    scale,
    y,
    glowIntensity,
    scrollYProgress
  };
};

export default useSectionTransitions;
