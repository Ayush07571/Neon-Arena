# Quickstart Guide: Neon Arena Landing Page

**Date**: 2025-03-13  
**Purpose**: Rapid development setup and initial deployment guide for the cyberpunk gaming hub

## Prerequisites

### Development Environment
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or yarn 1.22.0+)
- **Git**: Latest version for version control
- **VS Code**: Recommended with official extensions

### Required Accounts & Services
- **GitHub**: For code repository and CI/CD
- **Vercel** (recommended): For Next.js deployment
- **Figma**: For design assets and prototypes
- **Chrome DevTools**: For performance debugging

## Project Setup

### 1. Repository Initialization
```bash
# Clone the repository
git clone <repository-url>
cd neon-arena

# Install dependencies
npm install

# Create development branch
git checkout -b develop/neon-arena-landing
```

### 2. Environment Configuration
```bash
# Create environment file
cp .env.example .env.local

# Configure environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### 3. Development Server
```bash
# Start development server
npm run dev

# Open browser
# Application available at http://localhost:3000
```

## Development Workflow

### Daily Development Setup
1. **Pull latest changes**: `git pull origin develop`
2. **Create feature branch**: `git checkout -b feature/your-feature-name`
3. **Start dev server**: `npm run dev`
4. **Open browser**: Navigate to `http://localhost:3000`
5. **Open VS Code**: Start coding with live reload

### Code Quality Tools
```bash
# Lint code
npm run lint

# Format code
npm run format

# Type checking
npm run type-check

# Run tests
npm run test
```

## Component Development

### Creating New Sections
1. **Create section component** in `app/sections/`
2. **Add to section registry** in `app/lib/sections.ts`
3. **Update navigation** in `app/components/ui/navigation/`
4. **Add scroll tracking** in `app/hooks/useScrollProgress.ts`

### Glassmorphism Card Pattern
```typescript
// components/ui/cards/GlassmorphismCard.tsx
import { motion } from 'framer-motion';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  glowColor = 'cyan',
  className = ''
}) => {
  return (
    <motion.div
      className={`
        backdrop-blur-md bg-white/10 
        border border-white/20 rounded-lg
        shadow-lg shadow-cyan-500/20
        ${className}
      `}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: `0 0 30px ${glowColor}40`
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
```

### Neon Button Pattern
```typescript
// components/ui/buttons/NeonButton.tsx
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md'
}) => {
  const baseClasses = 'relative overflow-hidden font-bold';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} rounded-lg border-2`}
      style={{
        borderColor: variant === 'primary' ? '#00ffff' : '#ff00ff',
        boxShadow: `0 0 20px ${variant === 'primary' ? '#00ffff40' : '#ff00ff40'}`
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 30px ${variant === 'primary' ? '#00ffff60' : '#ff00ff60'}`
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {/* Neon glow effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-50"
        style={{
          background: `linear-gradient(45deg, ${variant === 'primary' ? '#00ffff' : '#ff00ff'}, transparent)`,
          filter: 'blur(8px)'
        }}
      />
    </motion.button>
  );
};
```

## Animation Implementation

### Smooth Scrolling Setup
```typescript
// hooks/useSmoothScroll.ts
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
```

### 3D Tilt Effect
```typescript
// hooks/useTiltEffect.ts
import { useState, useRef, MouseEvent } from 'react';

interface TiltAngles {
  x: number;
  y: number;
}

export const useTiltEffect = (maxTilt: number = 15) => {
  const [tilt, setTilt] = useState<TiltAngles>({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
    const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;

    setTilt({
      x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
      y: Math.max(-maxTilt, Math.min(maxTilt, rotateY))
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return {
    ref,
    tilt,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};
```

## Performance Optimization

### Image Optimization
```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-pulse" />
      )}
    </div>
  );
};
```

### Animation Performance Monitoring
```typescript
// hooks/useAnimationPerformance.ts
import { useEffect, useRef } from 'react';

export const useAnimationPerformance = () => {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let animationId: number;

    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime.current;

      if (deltaTime >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / deltaTime);
        console.log(`Animation FPS: ${fps}`);
        
        if (fps < 55) {
          console.warn('Animation performance below 60fps');
        }

        frameCount.current = 0;
        lastTime.current = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);
};
```

## Testing Setup

### Unit Testing with Jest
```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### E2E Testing with Playwright
```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npm run test:e2e

# Run tests in headed mode
npm run test:e2e:headed
```

### Component Testing with Cypress
```bash
# Open Cypress test runner
npm run test:cypress:open

# Run Cypress tests headless
npm run test:cypress:run
```

## Deployment

### Build for Production
```bash
# Create production build
npm run build

# Test production build locally
npm run start

# Analyze bundle size
npm run analyze
```

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Environment Variables for Production
```bash
# Vercel environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=production_analytics_id
NEXT_PUBLIC_API_URL=https://api.neon-arena.com
```

## Troubleshooting

### Common Issues

#### Animation Performance Issues
- **Problem**: Janky animations below 60fps
- **Solution**: Check Chrome DevTools Performance tab, reduce particle count, use CSS transforms
- **Command**: `npm run analyze` to check bundle size

#### Neon Color Contrast Issues
- **Problem**: Text not readable with neon backgrounds
- **Solution**: Use glassmorphism overlays, increase contrast ratio, test with color blind simulator
- **Tool**: WebAIM Contrast Checker

#### 3D Rendering Issues
- **Problem**: Three.js not rendering on mobile
- **Solution**: Check WebGL support, implement canvas 2D fallback, reduce geometry complexity
- **Command**: Test on actual devices, not just browser emulation

#### Build Failures
- **Problem**: TypeScript errors during build
- **Solution**: Check `npm run type-check`, update type definitions, verify imports
- **Command**: `npm run lint --fix`

### Performance Monitoring
```bash
# Lighthouse performance audit
npm run lighthouse

# Bundle analyzer
npm run analyze

# Core Web Vitals monitoring
# Visit: /__nextjs/chunks/lighthouse-runtime.js
```

## Development Best Practices

### Code Organization
- Keep components under 200 lines
- Use custom hooks for shared logic
- Separate UI from business logic
- Use TypeScript strict mode

### Performance Guidelines
- Optimize images before importing
- Use React.memo for expensive components
- Implement proper loading states
- Test on actual devices

### Accessibility Standards
- Test with screen readers
- Verify keyboard navigation
- Check color contrast ratios
- Respect motion preferences

### Git Workflow
```bash
# Feature development workflow
git checkout develop
git pull origin develop
git checkout -b feature/amazing-new-feature
# ... develop and test ...
git add .
git commit -m "feat: amazing new feature"
git push origin feature/amazing-new-feature
# Create pull request
```

## Next Steps

After completing this quickstart:

1. **Review the constitution**: Ensure all principles are followed
2. **Check the specification**: Verify all requirements are met
3. **Run tests**: Ensure all tests pass
4. **Performance audit**: Confirm 60fps and accessibility standards
5. **Deploy**: Push to production with confidence

For additional help, refer to the main specification document or constitution guidelines.
