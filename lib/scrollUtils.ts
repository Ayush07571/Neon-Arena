/**
 * Smooth scroll utility functions for Neon Arena
 */

/**
 * Smooth scroll to a specific element
 */
export const smoothScrollTo = (elementId: string, options?: ScrollIntoViewOptions) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
    ...options
  });
};

/**
 * Smooth scroll to a specific section
 */
export const scrollToSection = (sectionId: string) => {
  smoothScrollTo(sectionId);
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

/**
 * Get current scroll position
 */
export const getScrollPosition = () => {
  return {
    x: window.scrollX,
    y: window.scrollY
  };
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
};

/**
 * Add smooth scroll behavior to anchor links
 */
export const initSmoothScrollForAnchors = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href')?.substring(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
};

/**
 * Parallax scroll effect
 */
export const applyParallaxEffect = (elementId: string, speed: number = 0.5) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    return;
  }

  let ticking = false;
  
  const updateParallax = () => {
    const scrollY = window.scrollY;
    const translateY = scrollY * speed;
    
    element.style.transform = `translateY(${translateY}px)`;
    
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
};
