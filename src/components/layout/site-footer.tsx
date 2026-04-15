'use client';

import Link from 'next/link';
import { officialLinks, navItems } from '@/content/site';
import { useLanguage } from '@/components/ui/language-provider';

const ecosystemLinks = [
  { label: 'OneAI', href: officialLinks.oneAI },
  { label: 'OneField', href: officialLinks.oneField },
  { label: 'One Mission', href: officialLinks.oneMission },
  { label: 'WAOC Genesis', href: officialLinks.genesis },
  { label: 'Meditation', href: officialLinks.meditation },
];

export function SiteFooter() {
  const { dict } = useLanguage();

  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-3 text-xl font-semibold text-white">WAOC</div>
          <p className="max-w-md text-sm leading-7 text-white/60">{dict.brand}</p>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/45">{dict.footer.tagline} {dict.footer.caution}</p>
        </div>

        <div>
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/42">Ecosystem</div>
          <div className="grid gap-3">
            {ecosystemLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/42">Navigation</div>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {dict.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/42">Official</div>
          <div className="grid gap-3 text-sm text-white/70">
            <Link href="/resources#links" className="transition hover:text-white">{dict.actions.verify}</Link>
            <Link href="/participate" className="transition hover:text-white">{dict.actions.enter}</Link>
            <Link href={officialLinks.oneAI} className="transition hover:text-white">oneai.network</Link>
            <Link href={officialLinks.oneField} className="transition hover:text-white">onefield.vercel.app</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
