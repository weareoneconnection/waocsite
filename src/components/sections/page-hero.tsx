'use client';

import type { ReactNode } from 'react';
import { SectionShell } from '@/components/ui/section-shell';

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <SectionShell className="pt-16">
      <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        <div className="text-[11px] uppercase tracking-[0.34em] text-orange-300/80">{eyebrow}</div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{intro}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </SectionShell>
  );
}
