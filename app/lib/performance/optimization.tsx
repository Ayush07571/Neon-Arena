// Performance optimization utilities for Neon Arena

import React, { useState, useEffect } from 'react';

/**
 * Check if device supports reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

/**
 * Check device performance capabilities
 */
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isHighPerformance: true, // Assume high performance for modern devices
      supportsWebGL: true,
      memoryLimit: 4, // 4GB minimum for 3D effects
      coreCount: 4
    };
  }
  
  // Basic detection for SSR safety
  const isHighPerformance = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 0) >= 4;
  
  return {
    isHighPerformance,
    supportsWebGL: true,
    memoryLimit: isHighPerformance ? 4 : 2,
    coreCount: typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : 2,
  };
};

/**
 * Optimize animation performance based on device
 */
export const getAnimationSettings = () => {
  const capabilities = getDeviceCapabilities();
  
  return {
    particleCount: capabilities.isHighPerformance ? 100 : 50,
    blurAmount: capabilities.isHighPerformance ? 12 : 8,
    enableParallax: capabilities.isHighPerformance,
    enable3D: capabilities.isHighPerformance,
    targetFPS: capabilities.isHighPerformance ? 60 : 30,
  };
};

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        callback(...args);
      }, delay - (now - lastCall));
    }
  };
}

/**
 * Memoization helper for expensive calculations
 */
export function useMemo<T>(factory: () => T, deps: React.DependencyList = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(factory, deps);
}

/**
 * Performance monitoring
 */
export const usePerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [frameTime, setFrameTime] = useState(0);

  useEffect(() => {
    let animationId: number;
    const lastTimeRef = { current: performance.now() };
    
    const measureFPS = (time: number) => {
      const delta = time - lastTimeRef.current;
      
      if (delta >= 1000) {
        lastTimeRef.current = time;
      }
      
      const currentFPS = Math.round(1000 / (time - (frameTime || time - 16)));
      setFps(currentFPS > 60 ? 60 : currentFPS);
      setFrameTime(time);
      
      animationId = requestAnimationFrame(measureFPS);
    };
    
    animationId = requestAnimationFrame(measureFPS);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [frameTime]);
  
  return { fps, frameTime };
};
