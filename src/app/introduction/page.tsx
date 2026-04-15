'use client';

import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';

export default function IntroductionPage() {
  const { dict, lang } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Introduction" title={dict.pages.introduction.title} intro={dict.pages.introduction.intro} />
      <SectionShell id="why">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70">{lang === 'en' ? 'WAOC is not defined by a single asset or application. It represents a long-term effort to restore trust, coordination, and connection in an increasingly fragmented world.' : 'WAOC 不由某个单一资产或应用定义。它代表的是一种长期努力：在日益碎片化的世界中，恢复信任、协调与连接。'}</div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70">{lang === 'en' ? 'By using transparent and verifiable systems as a foundation, WAOC seeks to align technology with human values over time.' : '以透明且可验证的系统为基础，WAOC 希望让技术在时间中逐渐与人类价值重新对齐。'}</div>
        </div>
      </SectionShell>
    </>
  );
}
