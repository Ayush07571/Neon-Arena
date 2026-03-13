'use client';

import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

interface ParticleSystemProps {
  className?: string;
  particleCount?: number;
  glowColor?: string;
  mouseX?: number;
  mouseY?: number;
}

const SingleParticle = memo(({ particle }: { particle: Particle }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full pointer-events-none"
    style={{
      backgroundColor: particle.color,
      boxShadow: `0 0 6px ${particle.color}`,
      left: 0,
      top: 0
    }}
    animate={{ 
      opacity: particle.life / particle.maxLife,
      scale: particle.life / particle.maxLife,
      x: particle.x,
      y: particle.y
    }}
    transition={{ duration: 0.1, ease: "linear" }}
  />
));

SingleParticle.displayName = 'SingleParticle';

export const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  className = '',
  particleCount = 50,
  glowColor = '#00ffff',
  mouseX = 0,
  mouseY = 0
}) => {
  const createParticle = useCallback((x: number, y: number): Particle => ({
    id: Math.random(),
    x,
    y,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    life: Math.random() * 100,
    maxLife: 100,
    size: Math.random() * 2 + 1,
    color: glowColor
  }), [glowColor]);

  // Lazy initialization to avoid setState in useEffect
  const [particles, setParticles] = useState<Particle[]>(() => 
    Array.from({ length: particleCount }).map(() => createParticle(
      Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
    ))
  );

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setParticles(prev => prev.map(p => {
        const particle = { ...p };
        particle.life -= 0.5;
        
        if (particle.life <= 0) {
          particle.x = mouseX + (Math.random() - 0.5) * 50;
          particle.y = mouseY + (Math.random() - 0.5) * 50;
          particle.life = 100;
        } else {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }
        
        return particle;
      }));
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [mouseX, mouseY]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map(particle => (
        <SingleParticle key={particle.id} particle={particle} />
      ))}
    </div>
  );
};

export default ParticleSystem;
