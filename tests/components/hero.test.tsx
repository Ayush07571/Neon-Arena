import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { HeroSection } from '../../app/sections/hero';

// Mock IntersectionObserver for testing
const mockIntersectionObserver = () => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

// Mock scrollIntoView for testing
const mockScrollIntoView = jest.fn();

// Mock ResizeObserver for testing
const mockResizeObserver = () => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
});

// Mock window object for testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn(() => ({ matches: false })),
});

describe('HeroSection', () => {
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Mock IntersectionObserver
    global.IntersectionObserver = mockIntersectionObserver;
    global.ResizeObserver = mockResizeObserver;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render hero section with correct structure', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveAttribute('aria-label', 'hero');
  });

  it('should initialize with animation state', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    // Initially, hero should not be visible
    const logo = screen.queryByText('NEON ARENA');
    expect(logo).not.toBeInTheDocument();
  });

  it('should become visible after initial animation', async () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    // Wait for initial animation
    await new Promise(resolve => setTimeout(resolve, 150));
    
    const logo = screen.queryByText('NEON ARENA');
    expect(logo).toBeInTheDocument();
  });

  it('should have 3D tilt effect on mouse movement', async () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    // Simulate mouse movement
    const logo = screen.queryByText('NEON ARENA');
    fireEvent.mouseMove(logo, { clientX: 100, clientY: 100 });
    
    // Check if tilt effect is applied (via transform style)
    await new Promise(resolve => setTimeout(resolve, 50));
    
    expect(logo).toHaveStyle({
      transform: expect.stringContaining('perspective')
    });
  });

  it('should handle smooth scroll to features section', () => {
    render(<HeroSection />);
    
    const ctaButton = screen.getByRole('button', { name: 'ENTER THE ARENA' });
    expect(ctaButton).toBeInTheDocument();
    
    fireEvent.click(ctaButton);
    
    // Check if scrollIntoView was called
    expect(mockScrollIntoView).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'smooth', block: 'start' })
    );
  });

  it('should render particle system with correct count', () => {
    render(<HeroSection />);
    
    const particles = screen.getAllByTestId(/particle-\d+/);
    expect(particles).toHaveLength(50);
  });

  it('should handle mouse tracking for particles', async () => {
    render(<HeroSection />);
    
    const particles = screen.getAllByTestId(/particle-\d+/);
    const firstParticle = particles[0];
    
    // Simulate mouse movement
    fireEvent.mouseMove(firstParticle, { clientX: 200, clientY: 200 });
    
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // Check if particle position updated
    expect(firstParticle).toHaveStyle({
      transform: expect.stringContaining('translate')
    });
  });

  it('should be accessible', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveAttribute('aria-label', 'hero');
    
    // Check for keyboard navigation
    const ctaButton = screen.getByRole('button', { name: 'ENTER THE ARENA' });
    expect(ctaButton).toHaveAttribute('tabIndex', '0');
  });

  it('should have responsive design', () => {
    // Test mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 768
    });
    
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    // Should adapt to mobile size
    expect(heroSection).toHaveClass('md:hidden');
  });

  it('should have proper semantic structure', () => {
    render(<HeroSection />);
    
    const heroSection = screen.getByRole('region');
    expect(heroSection).toBeInTheDocument();
    
    // Check for main element
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    
    // Check for heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('NEON ARENA');
  });
});
