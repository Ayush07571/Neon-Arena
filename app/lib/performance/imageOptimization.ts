/**
 * Image optimization utilities for Neon Arena
 */

interface OptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
}

/**
 * Generates an optimized image URL (simulated for CDN/Next.js)
 */
export const getOptimizedImageUrl = (url: string, options: OptimizationOptions = {}): string => {
  if (!url) return '';
  
  const { width = 800, height, quality = 75, format = 'webp' } = options;
  
  // Simulation of a CDN transform URL
  // In a real app, this would use Next.js <Image /> or a specific CDN API
  const params = new URLSearchParams();
  params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  params.append('q', quality.toString());
  params.append('fm', format);
  
  // Return placeholder if not a real URL
  if (url.startsWith('http')) {
    return `${url}${url.includes('?') ? '&' : '?'}${params.toString()}`;
  }
  
  return url;
};

/**
 * Returns optimized sizes string for responsive images
 */
export const getResponsiveSizes = (baseWidth: string = '100vw'): string => {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${baseWidth}`;
};
