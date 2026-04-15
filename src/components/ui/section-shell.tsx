import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn('relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}
