'use client';

import { SectionShell } from '@/components/ui/section-shell';
import { SiteButton } from '@/components/ui/site-button';
import { useLanguage } from '@/components/ui/language-provider';

export function HeroSection() {
  const { dict } = useLanguage();

  return (
    <SectionShell className="pt-16 sm:pt-24 lg:pt-28">
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-6 py-16 shadow-glow sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,166,59,0.18),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(102,179,255,0.12),transparent_24%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_35%)]" />
        <div className="relative max-w-5xl">
          <div className="mb-5 inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-orange-200/90">
            {dict.home.badge}
          </div>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl">
            {dict.home.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">{dict.home.subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">{dict.home.helper}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <SiteButton href="/ecosystem">{dict.home.primary}</SiteButton>
            <SiteButton href="/resources#links" variant="secondary">{dict.home.secondary}</SiteButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
