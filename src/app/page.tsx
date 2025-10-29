'use client';

import { useState, useEffect } from 'react';
import { StickyHeader } from '@/components/sections/StickyHeader';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { DemoVideoSection } from '@/components/sections/DemoVideoSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';

export default function AutoMinutesLanding() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader isVisible={isSticky} />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <UseCasesSection />
      <SocialProofSection />
      <DemoVideoSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
