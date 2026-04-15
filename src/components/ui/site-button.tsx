import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SiteButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const styles = {
    primary:
      'border-orange-300/30 bg-gradient-to-r from-orange-500 to-amber-400 text-black shadow-[0_0_36px_rgba(255,138,38,0.25)] hover:scale-[1.01]',
    secondary: 'border-white/14 bg-white/5 text-white hover:bg-white/8',
    ghost: 'border-transparent bg-transparent text-white/70 hover:text-white',
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200',
        styles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
