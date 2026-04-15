'use client';

import { PageHero } from '@/components/sections/page-hero';
import { NetworkSection } from '@/components/sections/network-section';
import { useLanguage } from '@/components/ui/language-provider';

export default function NetworkPage() {
  const { dict } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Network" title={dict.pages.network.title} intro={dict.pages.network.intro} />
      <NetworkSection />
    </>
  );
}
