/**
 * 3D and Particle Optimization utilities for Neon Arena
 */

import { getDeviceCapabilities } from './optimization';

/**
 * Returns an optimized particle count based on device performance
 */
export const getOptimizedParticleCount = (baseCount: number): number => {
  const { isHighPerformance, coreCount } = getDeviceCapabilities();
  
  if (isHighPerformance) {
    return baseCount;
  }
  
  // Scale down for mobile/low-end devices
  return Math.max(10, Math.floor(baseCount * (coreCount / 8)));
};

/**
 * Determines if heavy 3D effects should be rendered
 */
export const shouldRender3D = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const { isHighPerformance, memoryLimit } = getDeviceCapabilities();
  
  // Only render complex 3D if high performance and at least 4GB RAM
  return isHighPerformance && memoryLimit >= 4;
};

/**
 * Returns optimized frame budget for heavy animations
 */
export const getFrameBudget = (): number => {
  const { isHighPerformance } = getDeviceCapabilities();
  return isHighPerformance ? 16.67 : 33.33; // 60fps vs 30fps budget
};
