'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScoreCounterProps {
  value: number;
  className?: string;
}

export const ScoreCounter: React.FC<ScoreCounterProps> = ({ 
  value, 
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  
  const displayValue = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.span 
      ref={ref}
      className={`font-mono tabular-nums ${className}`}
    >
      {displayValue}
    </motion.span>
  );
};
