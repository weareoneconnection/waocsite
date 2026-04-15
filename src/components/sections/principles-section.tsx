'use client';

import { SectionShell } from '@/components/ui/section-shell';
import { SectionTitle } from '@/components/ui/section-title';
import { useLanguage } from '@/components/ui/language-provider';

export function PrinciplesSection() {
  const { dict } = useLanguage();
  return (
    <SectionShell id="principles">
      <div className="rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,166,59,0.18),transparent_35%),rgba(255,255,255,0.02)] p-8 sm:p-10">
        <SectionTitle eyebrow="Principles" title={dict.home.principlesTitle} />
        <div className="mt-8 flex flex-wrap gap-3">
          {dict.home.principles.map((item) => (
            <div key={item} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75">
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
