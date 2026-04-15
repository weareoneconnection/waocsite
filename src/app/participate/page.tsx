'use client';

import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';

export default function ParticipatePage() {
  const { dict, lang } = useLanguage();
  const cards = [
    ['One Mission', officialLinks.oneMission, lang === 'en' ? 'Start with contribution and reputation.' : '从贡献与声誉开始。'],
    ['OneField', officialLinks.oneField, lang === 'en' ? 'Explore the network and structured memory.' : '探索网络与结构化记忆。'],
    ['OneAI', officialLinks.oneAI, lang === 'en' ? 'Use the intelligence and execution layer.' : '使用智能与执行层。'],
    ['Genesis', officialLinks.genesis, lang === 'en' ? 'Enter through the origin collection.' : '通过起源集合进入。'],
  ];
  return (
    <>
      <PageHero eyebrow="Participate" title={dict.pages.participate.title} intro={dict.pages.participate.intro} />
      <SectionShell id="paths">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, href, body]) => (
            <Link key={String(title)} href={String(href)} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70 transition hover:bg-white/[0.05] hover:text-white">
              <div className="text-xl font-semibold text-white">{title}</div>
              <div className="mt-4 leading-7">{body}</div>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
