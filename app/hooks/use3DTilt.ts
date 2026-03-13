'use client';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const use3DTilt = (maxRotate: number = 15) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [0, 1], [maxRotate, -maxRotate]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-maxRotate, maxRotate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width;
    const yPct = mouseY / height;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

export default use3DTilt;
