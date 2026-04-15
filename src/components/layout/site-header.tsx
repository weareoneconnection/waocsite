'use client';

import Link from 'next/link';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '@/content/site';
import { SiteButton } from '@/components/ui/site-button';
import { useLanguage } from '@/components/ui/language-provider';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dict, lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center gap-3 sm:gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white sm:h-12 sm:w-12">
              W
            </div>

            <div className="min-w-0">
              <div className="text-sm font-semibold text-white sm:text-base">WAOC</div>
              <div className="whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs sm:tracking-[0.24em]">
                {dict.brand}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <div key={item.key} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/72 transition hover:bg-white/6 hover:text-white 2xl:px-4"
                >
                  {dict.nav[item.key]}
                  <ChevronDown className="h-4 w-4 text-white/45 transition group-hover:text-orange-300" />
                </Link>

                <div className="pointer-events-none invisible absolute left-1/2 top-full z-30 mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-3xl border border-white/10 bg-black/95 p-3 opacity-0 shadow-2xl shadow-black/30 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/6 hover:text-white"
                    >
                      {dict.nav[child.key]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
            >
              <Globe className="h-4 w-4" />
              {dict.actions.switchLang}
            </button>

            <SiteButton href="/resources#links" variant="secondary">
              {dict.actions.verify}
            </SiteButton>

            <SiteButton href="/participate">{dict.actions.enter}</SiteButton>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/8"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
            </button>

            <Link
              href="/resources#links"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-xs font-medium text-white/80 transition hover:bg-white/8 hover:text-white sm:px-4 sm:text-sm"
            >
              Verify
            </Link>

            <Link
              href="/participate"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffb52b,#ff8a1a)] px-3 text-xs font-semibold text-black shadow-[0_0_24px_rgba(255,155,40,0.24)] transition hover:opacity-95 sm:px-4 sm:text-sm"
            >
              Enter
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/8 bg-black/95 px-4 py-4 xl:hidden sm:px-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-2"
              >
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {dict.nav[item.key]}
                </Link>

                <div className="grid gap-1 px-1 pb-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-2xl px-3 py-2 text-sm text-white/65 transition hover:bg-white/6 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {dict.nav[child.key]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
            >
              <Globe className="mr-2 h-4 w-4" />
              {dict.actions.switchLang}
            </button>

            <SiteButton href="/resources#links" variant="secondary" className="w-full">
              {dict.actions.verify}
            </SiteButton>

            <SiteButton href="/participate" className="w-full sm:col-span-2">
              {dict.actions.enter}
            </SiteButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}