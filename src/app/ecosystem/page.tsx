'use client';

import { PageHero } from '@/components/sections/page-hero';
import { SystemSection } from '@/components/sections/system-section';
import { EntrancesSection } from '@/components/sections/entrances-section';
import { useLanguage } from '@/components/ui/language-provider';

export default function EcosystemPage() {
  const { dict } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Ecosystem" title={dict.pages.ecosystem.title} intro={dict.pages.ecosystem.intro} />
      <SystemSection />
      <EntrancesSection />
    </>
  );
}
