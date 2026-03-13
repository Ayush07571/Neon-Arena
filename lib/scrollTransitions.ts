/**
 * Advanced scroll transitions for Neon Arena
 */

import { animate } from 'framer-motion';

export const scrollToSectionWithTransition = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  
  animate(startPosition, targetPosition, {
    type: "spring",
    stiffness: 100,
    damping: 30,
    mass: 1,
    onUpdate: (latest) => {
      window.scrollTo(0, latest);
    }
  });
};

export default scrollToSectionWithTransition;
