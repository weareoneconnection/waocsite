'use client';

import { WaocDynamicSystemMap } from '@/components/system/waoc-dynamic-system-map';
import { SectionShell } from '@/components/ui/section-shell';
import { SectionTitle } from '@/components/ui/section-title';
import { useLanguage } from '@/components/ui/language-provider';

export function SystemSection() {
  const { dict } = useLanguage();

  return (
    <SectionShell id="system-map">
      <SectionTitle
        eyebrow="Ecosystem"
        title={dict.home.systemTitle}
        body={dict.home.systemCopy}
      />
      <div className="mt-10">
        <WaocDynamicSystemMap />
      </div>
    </SectionShell>
  );
}