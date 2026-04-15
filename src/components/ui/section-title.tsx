import type { ReactNode } from 'react';

export function SectionTitle({
  eyebrow,
  title,
  body,
  align = 'left',
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <div className="mb-4 text-[11px] uppercase tracking-[0.38em] text-orange-300/80">{eyebrow}</div>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-white/70">{body}</p> : null}
      {children}
    </div>
  );
}
