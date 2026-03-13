'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from '../components/ui/buttons/NeonButton';
import { useTiltEffect } from '../hooks/useTiltEffect';
import { ParticleSystem } from '../components/features/hero/ParticleSystem';
import { CyberpunkBackground } from '../components/features/hero/CyberpunkBackground';
import { NeonLogo } from '../components/features/hero/NeonLogo';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { renderCanvas } from '../components/ui/canvas';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    renderCanvas();
  }, []);

  const { ref: heroRef, tilt } = useTiltEffect({
    maxTiltAngle: 5,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <section 
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-black overflow-hidden pt-20"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background Effects */}
      <CyberpunkBackground glowIntensity={isVisible ? 0.8 : 0.4} />
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
        fill="#00ffff"
      />

      <ParticleSystem
        particleCount={70}
        glowColor="#00ffff"
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
      />

      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 z-50 w-full h-full"
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content: Brand & CTA */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-8"
            >
              <NeonLogo size="lg" glowColor="#00ffff" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-cyan-500 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              NEON ARENA
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-medium leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              The ultimate gaming hub for competitive players. 
              Command your sector and establish your legacy in the next generation of esports.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <NeonButton
                variant="primary"
                size="xl"
                onClick={() => {
                  const element = document.getElementById('problem');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ENTER THE ARENA
              </NeonButton>
              
              <NeonButton
                variant="secondary"
                size="xl"
                onClick={() => {
                  const element = document.getElementById('features');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                EXPLORE SPECS
              </NeonButton>
            </motion.div>
          </motion.div>

          {/* Right Content: Seamless 3D BOT */}
          <motion.div 
            className="w-full lg:w-1/2 h-[500px] md:h-[700px] relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="w-full h-full relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10" />
            </div>
            <div className="absolute w-64 h-64 bg-cyan-500/20 blur-[100px] -z-10 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-cyan-500/20" />
        <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-cyan-500/20" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-b-2 border-l-2 border-cyan-500/20" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-cyan-500/20" />
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
