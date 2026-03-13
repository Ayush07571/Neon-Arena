# Data Model: Neon Arena Landing Page

**Date**: 2025-03-13  
**Purpose**: Define data structures and entities for the gaming hub landing page

## Core Entities

### Section
**Purpose**: Represents each landing page section with configuration and state  
**Fields**:
- `id`: string - Unique section identifier
- `title`: string - Section display title
- `component`: React.ComponentType - Section component to render
- `isVisible`: boolean - Whether section is currently in viewport
- `animationState`: 'idle' | 'animating' | 'complete' - Animation status
- `scrollProgress`: number - Scroll progress through section (0-1)

**Validation Rules**:
- `id` must be unique across all sections
- `title` cannot be empty
- `scrollProgress` must be between 0 and 1

### NavigationItem
**Purpose**: Represents navigation menu items with smooth scroll behavior  
**Fields**:
- `id`: string - Unique navigation identifier
- `label`: string - Display text for navigation item
- `targetSection`: string - Target section ID for smooth scroll
- `isActive`: boolean - Whether this is the current active section
- `icon`: React.ReactNode - Icon component for navigation item
- `glowIntensity`: number - Current neon glow intensity (0-1)

**Validation Rules**:
- `targetSection` must correspond to existing section ID
- `glowIntensity` must be between 0 and 1
- `label` cannot be empty

### FeatureCard
**Purpose**: Represents feature showcase cards with glassmorphism effects  
**Fields**:
- `id`: string - Unique feature identifier
- `title`: string - Feature display title
- `description`: string - Feature description text
- `icon`: React.ReactNode - Feature icon or illustration
- `isHovered`: boolean - Hover state for neon effects
- `tiltAngle`: { x: number, y: number } - 3D tilt rotation angles
- `glowColor`: string - Neon glow color (hex or CSS variable)

**Validation Rules**:
- `title` and `description` cannot be empty
- `tiltAngle.x` and `tiltAngle.y` must be between -30 and 30 degrees
- `glowColor` must be valid CSS color value

### GameCard
**Purpose**: Represents featured games with interactive hover effects  
**Fields**:
- `id`: string - Unique game identifier
- `title`: string - Game title
- `genre`: string - Game category/genre
- `playerCount`: number - Number of active players
- `rating`: number - Game rating (1-5)
- `imageUrl`: string - Game thumbnail URL
- `isHovered`: boolean - Hover state for effects
- `glowIntensity`: number - Dynamic glow intensity
- `badgeColor`: string - Category badge color

**Validation Rules**:
- `title` and `genre` cannot be empty
- `rating` must be between 1 and 5
- `playerCount` must be non-negative
- `imageUrl` must be valid URL or path

### LeaderboardEntry
**Purpose**: Represents leaderboard player rankings with animated counters  
**Fields**:
- `id`: string - Unique player identifier
- `rank`: number - Player ranking position
- `username`: string - Player display name
- `score`: number - Current score with animation target
- `animatedScore`: number - Currently displayed animated score
- `country`: string - Player country code
- `avatar`: string - Player avatar URL
- `isHighlighted`: boolean - Whether entry should glow

**Validation Rules**:
- `rank` must be positive integer
- `username` cannot be empty
- `score` and `animatedScore` must be non-negative
- `country` must be valid 2-letter country code

### Tournament
**Purpose**: Represents esports tournaments with countdown timers  
**Fields**:
- `id`: string - Unique tournament identifier
- `title`: string - Tournament name
- `game`: string - Associated game title
- `prizePool`: number - Total prize amount
- `startDate`: Date - Tournament start date
- `endDate`: Date - Tournament end date
- `participantCount`: number - Number of participants
- `status`: 'upcoming' | 'live' | 'completed' | 'registration'
- `timeRemaining`: number - Seconds remaining (for countdown)
- `imageUrl`: string - Tournament banner URL

**Validation Rules**:
- `title` and `game` cannot be empty
- `prizePool` and `participantCount` must be non-negative
- `startDate` must be before `endDate`
- `status` must be one of allowed values

### Testimonial
**Purpose**: Represents user testimonials with social proof  
**Fields**:
- `id`: string - Unique testimonial identifier
- `author`: string - Reviewer name
- `role`: string - Author's role/title
- `content`: string - Testimonial text content
- `rating`: number - Star rating (1-5)
- `avatar`: string - Author avatar URL
- `gameTitle`: string - Game being reviewed
- `isHovered`: boolean - Hover state for glassmorphism effect

**Validation Rules**:
- `author`, `role`, `content`, and `gameTitle` cannot be empty
- `rating` must be between 1 and 5
- `content` length must be between 10 and 500 characters

### PricingPlan
**Purpose**: Represents subscription pricing tiers with neon highlights  
**Fields**:
- `id`: string - Unique plan identifier
- `name`: string - Plan display name
- `price`: number - Monthly cost in USD
- `currency`: string - Currency code (default: 'USD')
- `features`: string[] - List of included features
- `isPopular`: boolean - Whether this is the recommended plan
- `isHovered`: boolean - Hover state for neon effects
- `glowColor`: string - Plan-specific neon glow color
- `billingCycle`: 'monthly' | 'yearly' - Billing frequency

**Validation Rules**:
- `name` cannot be empty
- `price` must be non-negative
- `features` array cannot be empty
- `billingCycle` must be one of allowed values

### FAQItem
**Purpose**: Represents expandable FAQ items with smooth animations  
**Fields**:
- `id`: string - Unique FAQ identifier
- `question`: string - FAQ question text
- `answer`: string - FAQ answer content
- `isExpanded`: boolean - Current expanded state
- `category`: string - FAQ category for grouping
- `isAnimating`: boolean - Animation state for expand/collapse

**Validation Rules**:
- `question` and `answer` cannot be empty
- `question` length must be between 10 and 200 characters
- `answer` length must be between 20 and 1000 characters
- `category` must be predefined category

## State Management

### Global State Structure
```typescript
interface NeonArenaState {
  // Navigation
  activeSection: string;
  navigationItems: NavigationItem[];
  scrollProgress: number;
  
  // User Interactions
  hoveredElements: Set<string>;
  tiltAngles: Map<string, { x: number; y: number }>;
  
  // Animation States
  isScrolling: boolean;
  scrollDirection: 'up' | 'down' | null;
  animationFrameId: number | null;
  
  // Performance
  reducedMotion: boolean;
  viewportSize: { width: number; height: number };
  
  // Content Data
  features: FeatureCard[];
  games: GameCard[];
  leaderboard: LeaderboardEntry[];
  tournaments: Tournament[];
  testimonials: Testimonial[];
  pricingPlans: PricingPlan[];
  faqItems: FAQItem[];
}
```

## Component Props Interfaces

### HeroSectionProps
```typescript
interface HeroSectionProps {
  onEnterArena: () => void;
  onMouseMove: (event: MouseEvent) => void;
  isVisible: boolean;
  scrollProgress: number;
}
```

### NavigationProps
```typescript
interface NavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}
```

### GlassmorphismCardProps
```typescript
interface GlassmorphismCardProps {
  children: React.ReactNode;
  glowColor?: string;
  blurAmount?: number;
  opacity?: number;
  borderColor?: string;
  isHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
  tilt?: boolean;
}
```

## Data Flow Patterns

### Scroll Progress Tracking
1. User scrolls → Lenis detects scroll position
2. Calculate progress for each section (0-1)
3. Update section visibility states
4. Trigger scroll-based animations
5. Update active navigation item

### Hover Effect Management
1. Mouse enters element → Set hovered state
2. Calculate tilt angles based on mouse position
3. Apply neon glow with calculated intensity
4. Mouse leaves element → Reset hover state
5. Animate transition back to default state

### Animation Performance Optimization
1. Use requestAnimationFrame for smooth 60fps updates
2. Throttle scroll events to prevent performance issues
3. Use CSS transforms instead of layout properties
4. Implement object pooling for particle effects
5. Lazy load animations when elements enter viewport

## Validation Rules Summary

### Performance Constraints
- All animations must maintain 60fps on target devices
- Memory usage should not exceed 100MB for animations
- Bundle size should be under 2MB gzipped
- First contentful paint under 1.5 seconds

### Accessibility Requirements
- All interactive elements must be keyboard navigable
- Color contrast ratios must meet WCAG 2.1 AA standards
- Motion must respect prefers-reduced-motion setting
- All images must have alt text
- Forms must have proper labels and error states

### Data Integrity
- All IDs must be unique within their collections
- Required fields cannot be null or undefined
- Numeric values must be within defined ranges
- Enum values must match predefined options
