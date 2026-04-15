'use client';

import { SectionShell } from '@/components/ui/section-shell';
import { SiteButton } from '@/components/ui/site-button';
import { useLanguage } from '@/components/ui/language-provider';

export function FinalCtaSection() {
  const { dict } = useLanguage();
  return (
    <SectionShell>
      <div className="rounded-[40px] border border-orange-300/18 bg-[radial-gradient(circle_at_center,rgba(255,166,59,0.18),transparent_45%),rgba(255,255,255,0.02)] px-6 py-14 text-center sm:px-10">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">{dict.home.ctaTitle}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">{dict.home.ctaCopy}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <SiteButton href="/participate">{dict.actions.enter}</SiteButton>
          <SiteButton href="/resources#links" variant="secondary">{dict.actions.verify}</SiteButton>
        </div>
      </div>
    </SectionShell>
  );
}
