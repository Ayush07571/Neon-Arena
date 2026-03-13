# UI Component Contracts: Neon Arena Landing Page

**Date**: 2025-03-13  
**Purpose**: Define interfaces and contracts for reusable UI components

## Glassmorphism Card Contract

### Interface Definition
```typescript
interface GlassmorphismCardProps {
  // Content
  children: React.ReactNode;
  
  // Visual Styling
  glowColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  blurAmount?: number;
  opacity?: number;
  
  // Sizing
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  
  // Interactions
  isHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
  onClick?: () => void;
  
  // 3D Effects
  enableTilt?: boolean;
  maxTiltAngle?: number;
  
  // Animation
  animationDuration?: number;
  easing?: string;
  
  // Accessibility
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

### Implementation Requirements
- **Performance**: Must maintain 60fps during hover animations
- **Accessibility**: Must support keyboard navigation and screen readers
- **Responsive**: Must adapt to different screen sizes
- **Browser Support**: Must work on Chrome 90+, Firefox 88+, Safari 14+

### Visual Specifications
- **Glass Effect**: backdrop-filter: blur() with semi-transparent background
- **Neon Glow**: box-shadow with color-specific glow intensity
- **Border**: Subtle border with glassmorphism aesthetic
- **3D Tilt**: CSS transform3d for perspective rotation

## Neon Button Contract

### Interface Definition
```typescript
interface NeonButtonProps {
  // Content
  children: React.ReactNode;
  
  // Styling Variants
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  glowIntensity?: number; // 0-1
  
  // Behavior
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  
  // Events
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  
  // Animation
  animationType?: 'pulse' | 'glow' | 'slide' | 'bounce';
  animationDuration?: number;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  tabIndex?: number;
  
  // Styling
  className?: string;
  style?: React.CSSProperties;
}
```

### Implementation Requirements
- **Hover Effects**: Neon glow intensity must scale from 0.4 to 1.0
- **Loading State**: Must show skeleton or spinner with reduced opacity
- **Disabled State**: Must reduce opacity to 0.5 and remove hover effects
- **Focus Management**: Must show visible focus ring with neon color

### Color Specifications
- **Primary**: Cyan neon (#00ffff) with white glow
- **Secondary**: Magenta neon (#ff00ff) with purple glow
- **Tertiary**: Yellow neon (#ffff00) with orange glow

## Navigation Component Contract

### Interface Definition
```typescript
interface NavigationProps {
  // Data
  sections: Array<{
    id: string;
    title: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  
  // State
  activeSection: string;
  scrollProgress: number;
  isVisible: boolean;
  
  // Behavior
  onSectionChange: (sectionId: string) => void;
  enableSmoothScroll?: boolean;
  scrollDuration?: number;
  
  // Styling
  theme?: 'light' | 'dark' | 'cyberpunk';
  position?: 'fixed' | 'sticky' | 'relative';
  showProgress?: boolean;
  
  // Accessibility
  ariaLabel?: string;
  skipToContentId?: string;
  
  // Animation
  transitionDuration?: number;
  easingFunction?: string;
}
```

### Implementation Requirements
- **Smooth Scrolling**: Must use Lenis for 60fps scroll behavior
- **Active State**: Must highlight current section with neon glow
- **Progress Indicator**: Must show scroll progress with neon line
- **Mobile Responsive**: Must collapse to hamburger menu on small screens

## 3D Hero Section Contract

### Interface Definition
```typescript
interface HeroSectionProps {
  // Content
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  logoUrl?: string;
  
  // Call to Action
  primaryCTA?: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };
  secondaryCTA?: {
    text: string;
    onClick: () => void;
    variant?: 'secondary' | 'tertiary';
  };
  
  // 3D Effects
  enableParallax?: boolean;
  enableMouseTilt?: boolean;
  particleCount?: number;
  gridDensity?: 'low' | 'medium' | 'high';
  
  // Animation
  animationDuration?: number;
  autoRotate?: boolean;
  
  // Performance
  reduceMotion?: boolean;
  quality?: 'low' | 'medium' | 'high';
  
  // Events
  onScrollProgress?: (progress: number) => void;
  onMouseMove?: (event: MouseEvent) => void;
}
```

### Implementation Requirements
- **3D Performance**: Must maintain 60fps with particle effects
- **Mouse Interaction**: Must respond to mouse movement with 3D tilt
- **Parallax Scrolling**: Background must move at different speed than content
- **Fallback**: Must work without WebGL on older browsers

## Feature Card Grid Contract

### Interface Definition
```typescript
interface FeatureCardGridProps {
  // Data
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    category: string;
  }>;
  
  // Layout
  columns?: number;
  gap?: string | number;
  maxWidth?: string;
  
  // Behavior
  enableHover?: boolean;
  enableTilt?: boolean;
  staggerAnimation?: boolean;
  
  // Filtering
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  
  // Loading
  loading?: boolean;
  skeletonCount?: number;
  
  // Responsive
  responsiveColumns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}
```

### Implementation Requirements
- **Stagger Animation**: Cards must animate in sequence on scroll
- **Category Filtering**: Must support filtering by feature category
- **Responsive Layout**: Must adapt columns for different screen sizes
- **Loading State**: Must show skeleton cards with glassmorphism

## Leaderboard Contract

### Interface Definition
```typescript
interface LeaderboardProps {
  // Data
  entries: Array<{
    rank: number;
    username: string;
    score: number;
    country: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'playing';
  }>;
  
  // Behavior
  maxEntries?: number;
  enableAnimation?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
  
  // Filtering
  selectedRegion?: string;
  onRegionChange?: (region: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  
  // Pagination
  pageSize?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  
  // Animation
  scoreAnimationDuration?: number;
  enableNumberScrolling?: boolean;
}
```

### Implementation Requirements
- **Score Animation**: Must animate number changes with smooth scrolling
- **Live Updates**: Must support real-time score updates
- **Performance**: Must handle 1000+ entries without performance degradation
- **Accessibility**: Must be navigable with keyboard and screen readers

## Tournament Card Contract

### Interface Definition
```typescript
interface TournamentCardProps {
  // Data
  tournament: {
    id: string;
    title: string;
    game: string;
    prizePool: number;
    startDate: Date;
    endDate: Date;
    participantCount: number;
    status: 'upcoming' | 'live' | 'completed' | 'registration';
    imageUrl?: string;
  };
  
  // Display Options
  showCountdown?: boolean;
  showPrizePool?: boolean;
  showParticipantCount?: boolean;
  currency?: string;
  
  // Behavior
  onClick?: () => void;
  enableHover?: boolean;
  
  // Animation
  countdownAnimation?: 'flip' | 'slide' | 'pulse';
  statusGlow?: boolean;
  
  // Responsive
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
}
```

### Implementation Requirements
- **Countdown Timer**: Must update every second with smooth transitions
- **Status Indicators**: Must show live/upcoming/completed with appropriate colors
- **Currency Formatting**: Must format prize amounts with proper locale
- **Hover Effects**: Must enhance card with neon glow on hover

## FAQ Accordion Contract

### Interface Definition
```typescript
interface FAQAccordionProps {
  // Data
  items: Array<{
    id: string;
    question: string;
    answer: string;
    category?: string;
  }>;
  
  // Behavior
  allowMultipleOpen?: boolean;
  initialOpenItems?: string[];
  onItemToggle?: (itemId: string, isOpen: boolean) => void;
  
  // Animation
  animationDuration?: number;
  easing?: string;
  staggerAnimation?: boolean;
  
  // Search
  enableSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
  
  // Categorization
  groupByCategory?: boolean;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}
```

### Implementation Requirements
- **Smooth Expansion**: Must animate height changes with proper easing
- **Keyboard Navigation**: Must be operable with Tab and Enter/Space keys
- **Search Functionality**: Must filter questions in real-time
- **Accessibility**: Must use proper ARIA attributes for expandable content

## Performance Contracts

### Animation Performance
```typescript
interface AnimationPerformanceMetrics {
  frameRate: number; // Target: 60fps
  frameTime: number; // Target: <16.67ms
  memoryUsage: number; // Target: <100MB
  cpuUsage: number; // Target: <50%
}
```

### Bundle Size Constraints
```typescript
interface BundleSizeLimits {
  javascript: number; // Max: 2MB gzipped
  css: number; // Max: 500KB gzipped
  images: number; // Max: 5MB total
  fonts: number; // Max: 1MB total
}
```

## Accessibility Contracts

### Color Contrast Requirements
```typescript
interface ContrastRequirements {
  minimumRatio: 4.5; // WCAG 2.1 AA standard
  enhancedRatio: 7.0; // WCAG 2.1 AAA enhanced
  neonOnDark: 3.0; // Minimum for neon colors on dark backgrounds
  textOnNeon: 4.5; // Minimum for text on neon backgrounds
}
```

### Motion Preferences
```typescript
interface MotionPreferences {
  reducedMotion: boolean; // From prefers-reduced-motion
  customSpeed: number; // 0.5 to 2.0 multiplier
  disableParallax: boolean; // User preference
  disableParticles: boolean; // User preference
}
```

## Testing Contracts

### Component Test Requirements
```typescript
interface ComponentTestSpec {
  // Visual Testing
  snapshotTests: boolean;
  visualRegressionTests: boolean;
  responsiveTests: boolean;
  
  // Interaction Testing
  hoverStates: boolean;
  clickEvents: boolean;
  keyboardNavigation: boolean;
  
  // Performance Testing
  animationPerformance: boolean;
  memoryLeaks: boolean;
  bundleSize: boolean;
  
  // Accessibility Testing
  screenReaderTests: boolean;
  colorContrastTests: boolean;
  motionReductionTests: boolean;
}
```

These contracts ensure consistent implementation across all components while maintaining the cyberpunk aesthetic and performance standards of the Neon Arena landing page.
