'use client';

import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';

export default function ResourcesPage() {
  const { dict, lang } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Resources" title={dict.pages.resources.title} intro={dict.pages.resources.intro} />
      <SectionShell id="links">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {Object.entries({
            OneAI: officialLinks.oneAI,
            OneField: officialLinks.oneField,
            'One Mission': officialLinks.oneMission,
            'WAOC Genesis': officialLinks.genesis,
            Meditation: officialLinks.meditation,
          }).map(([label, href]) => (
            <Link key={label} href={href} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70 transition hover:bg-white/[0.05] hover:text-white">
              <div className="text-lg font-semibold text-white">{label}</div>
              <div className="mt-3 break-all text-sm">{href}</div>
            </Link>
          ))}
        </div>
      </SectionShell>
      <SectionShell id="faq">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70">{lang === 'en' ? 'Use official links only when exploring WAOC. This site is the official ecosystem gateway.' : '探索 WAOC 时请只使用官方链接。本网站是 WAOC 官方生态入口。'}</div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70">{lang === 'en' ? 'Additional documents, FAQs, and brand assets can be expanded here over time.' : '后续可在这里继续扩展文档、FAQ 与品牌资产。'}</div>
        </div>
      </SectionShell>
    </>
  );
}
