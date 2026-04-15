'use client';

import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { SectionShell } from '@/components/ui/section-shell';
import { SectionTitle } from '@/components/ui/section-title';
import { useLanguage } from '@/components/ui/language-provider';

const items = [
  { key: 'OneAI', href: officialLinks.oneAI, en: 'Intelligence and execution layer', zh: '智能与执行层' },
  { key: 'OneField', href: officialLinks.oneField, en: 'Coordination network and structured memory', zh: '协调网络与结构化记忆' },
  { key: 'One Mission', href: officialLinks.oneMission, en: 'Participation, contribution, and reputation', zh: '参与、贡献与声誉' },
  { key: 'WAOC Genesis', href: officialLinks.genesis, en: 'Origin collection of the WAOC field', zh: 'WAOC 场域的起源集合' },
  { key: 'Meditation', href: officialLinks.meditation, en: 'Consciousness-facing entry', zh: '面向意识的入口' },
];

export function EntrancesSection() {
  const { dict, lang } = useLanguage();
  return (
    <SectionShell id="products">
      <SectionTitle eyebrow="Entrances" title={dict.home.entrancesTitle} />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <Link key={item.key} href={item.href} className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-orange-300/25 hover:bg-white/[0.05]">
            <div className="text-xl font-semibold text-white">{item.key}</div>
            <p className="mt-4 min-h-[84px] text-sm leading-7 text-white/60">{lang === 'zh' ? item.zh : item.en}</p>
            <div className="mt-6 text-sm text-orange-200 transition group-hover:text-orange-100">{dict.actions.open} →</div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
