'use client';

import { HeroSection } from './sections/hero';
import { ProblemSection } from './sections/problem';
import { SolutionSection } from './sections/solution';
import FeaturesSection from './sections/features';
import FeaturedGamesSection from './sections/featured-games';
import { LeaderboardSection } from './sections/leaderboard';
import { TournamentsSection } from './sections/tournaments';
import { CommunitySection } from './sections/community';
import { TestimonialsSection } from './sections/testimonials';
import { PricingSection } from './sections/pricing';
import { FAQSection } from './sections/faq';
import { ContactSection } from './sections/contact';
import { FinalCTASection } from './sections/final-cta';
import { MainLayout } from './components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <FeaturedGamesSection />
      <LeaderboardSection />
      <TournamentsSection />
      <CommunitySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
    </MainLayout>
  );
}
