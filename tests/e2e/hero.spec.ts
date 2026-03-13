import { test, expect } from '@playwright/test';

import { HeroSection } from '../../app/sections/hero';

test.describe('Hero Section User Interactions', () => {
  test('should navigate to features section when CTA is clicked', async ({ page }) => {
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toBeVisible();
    
    const ctaButton = page.getByRole('button', { name: 'ENTER THE ARENA' });
    expect(ctaButton).toBeVisible();
    
    await ctaButton.click();
    
    // Should scroll to features section
    await expect(page).toHaveURL(/.*#features/);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toHaveAttribute('aria-label', 'hero');
    
    // Check for proper heading structure
    const heading = page.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('NEON ARENA');
  });

  test('should display 3D tilt effects on mouse movement', async ({ page }) => {
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toBeVisible();
    
    const logo = page.getByText('NEON ARENA');
    expect(logo).toBeVisible();
    
    // Move mouse around the logo
    await page.mouseMove(logo, { x: 100, y: 100 });
    
    // Check if 3D transform is applied
    await expect(logo).toHaveCSS('transform', /perspective/);
  });

  test('should render particle system with correct count', async ({ page }) => {
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toBeVisible();
    
    const particles = page.getByTestId(/particle-\d+/);
    expect(particles).toHaveCount(50);
  });

  test('should track mouse movement for particles', async ({ page }) => {
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toBeVisible();
    
    const firstParticle = page.getByTestId(/particle-1/);
    
    // Move mouse and check particle movement
    await page.mouseMove(firstParticle, { x: 200, y: 200 });
    
    await expect(firstParticle).toHaveCSS(/translate/);
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toHaveClass('md:hidden');
  });

  test('should have smooth scroll behavior', async ({ page }) => {
    await page.goto('/');
    
    const ctaButton = page.getByRole('button', { name: 'ENTER THE ARENA' });
    expect(ctaButton).toBeVisible();
    
    // Click and check URL
    await ctaButton.click();
    await expect(page).toHaveURL(/.*#features/);
  });

  test('should load all assets and animations', async ({ page }) => {
    await page.goto('/');
    
    // Wait for all animations to complete
    await page.waitForTimeout(2000);
    
    const heroSection = page.getByRole('region');
    expect(heroSection).toBeVisible();
    
    const logo = page.getByText('NEON ARENA');
    expect(logo).toBeVisible();
    
    const particles = page.getByTestId(/particle-\d+/);
    expect(particles).toHaveCount(50);
  });
});
