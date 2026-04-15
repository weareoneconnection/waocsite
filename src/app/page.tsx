import { EntrancesSection } from '@/components/sections/entrances-section';
import { FinalCtaSection } from '@/components/sections/final-cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { NetworkSection } from '@/components/sections/network-section';
import { PrinciplesSection } from '@/components/sections/principles-section';
import { SystemSection } from '@/components/sections/system-section';
import { WhySection } from '@/components/sections/why-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <SystemSection />
      <NetworkSection />
      <EntrancesSection />
      <PrinciplesSection />
      <FinalCtaSection />
    </>
  );
}
