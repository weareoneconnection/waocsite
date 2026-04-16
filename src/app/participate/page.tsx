'use client';

import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';

function PathCard({
  title,
  href,
  description,
  tag,
  actionLabel,
}: {
  title: string;
  href: string;
  description: string;
  tag: string;
  actionLabel: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-white/70 transition hover:border-orange-300/20 hover:bg-white/[0.05] hover:text-white"
    >
      <div className="inline-flex rounded-full border border-orange-300/15 bg-orange-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-orange-200/80">
        {tag}
      </div>

      <div className="mt-4 text-xl font-semibold text-white">{title}</div>

      <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>

      <div className="mt-5 text-sm text-orange-200/85">
        {actionLabel} →
      </div>
    </Link>
  );
}

function StepCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/20 bg-orange-500/10 text-sm text-orange-100">
        {number}
      </div>

      <div className="mt-4 text-lg font-medium text-white">{title}</div>
      <p className="mt-3 text-sm leading-7 text-white/65">{body}</p>
    </div>
  );
}

export default function ParticipatePage() {
  const { dict, lang } = useLanguage();
  const isZh = lang === 'zh';

  const paths = [
    {
      title: 'One Mission',
      href: officialLinks.oneMission,
      tag: isZh ? '执行层' : 'Execution Layer',
      description: isZh
        ? '从任务、贡献与声誉开始。'
        : 'Start with missions, contribution, and reputation.',
      actionLabel: isZh ? '开始参与' : 'Start',
    },
    {
      title: 'OneField',
      href: officialLinks.oneField,
      tag: isZh ? '协调网络' : 'Network',
      description: isZh
        ? '探索网络与结构化记忆。'
        : 'Explore the network and structured memory.',
      actionLabel: isZh ? '进入网络' : 'Explore',
    },
    {
      title: 'OneAI',
      href: officialLinks.oneAI,
      tag: isZh ? '智能层' : 'AI Layer',
      description: isZh
        ? '使用智能与执行层。'
        : 'Use intelligence and execution layer.',
      actionLabel: isZh ? '打开 OneAI' : 'Open',
    },
    {
      title: 'Genesis',
      href: officialLinks.genesis,
      tag: isZh ? '身份入口' : 'Identity',
      description: isZh
        ? '通过起源集合进入。'
        : 'Enter through the origin collection.',
      actionLabel: isZh ? '进入' : 'Enter',
    },
    {
      title: 'OneAI Bot',
      href: 'https://t.me/WAOCOneAIBot',
      tag: isZh ? '机器人入口' : 'Bot Entry',
      description: isZh
        ? '通过机器人快速进入系统与互动。'
        : 'Fastest way to enter and interact with WAOC.',
      actionLabel: isZh ? '进入 Bot' : 'Enter Bot',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Participate"
        title={dict.pages.participate.title}
        intro={dict.pages.participate.intro}
      />

      {/* PATHS */}
      <SectionShell id="paths">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {paths.map((item) => (
            <PathCard key={item.title} {...item} />
          ))}
        </div>
      </SectionShell>

      {/* HOW TO START */}
      <SectionShell id="how">
        <div className="grid gap-5 lg:grid-cols-3">
          <StepCard
            number="01"
            title={isZh ? '进入入口' : 'Enter'}
            body={
              isZh
                ? '选择一个入口开始。'
                : 'Choose an entry point.'
            }
          />
          <StepCard
            number="02"
            title={isZh ? '开始行动' : 'Act'}
            body={
              isZh
                ? '参与任务或互动。'
                : 'Start participating and interacting.'
            }
          />
          <StepCard
            number="03"
            title={isZh ? '形成贡献' : 'Contribute'}
            body={
              isZh
                ? '积累声誉与身份。'
                : 'Build contribution and reputation.'
            }
          />
        </div>
      </SectionShell>

      {/* COMMUNITY */}
      <SectionShell id="community">
        <div className="mb-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
            {isZh ? '社区层' : 'Community Layer'}
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-4xl">
            {isZh ? '保持连接' : 'Stay Connected'}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {/* X */}
          <Link
            href="https://x.com/waoconnectone?s=21"
            target="_blank"
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05]"
          >
            <div className="text-xl text-white font-semibold">X</div>
            <p className="mt-3 text-sm text-white/65">
              {isZh
                ? '关注叙事与信号'
                : 'Follow signals and narrative'}
            </p>
          </Link>

          {/* TG */}
          <Link
            href="https://t.me/WAOCGlobalCommunity"
            target="_blank"
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05]"
          >
            <div className="text-xl text-white font-semibold">Telegram</div>
            <p className="mt-3 text-sm text-white/65">
              {isZh
                ? '加入社区协同'
                : 'Join community coordination'}
            </p>
          </Link>

          {/* BOT */}
          <Link
            href="https://t.me/WAOCOneAIBot"
            target="_blank"
            className="rounded-[28px] border border-orange-300/20 bg-orange-500/10 p-6 hover:bg-orange-500/20"
          >
            <div className="text-xl text-orange-100 font-semibold">OneAI Bot</div>
            <p className="mt-3 text-sm text-orange-100/80">
              {isZh
                ? '最快进入 WAOC 的方式'
                : 'Fastest way into WAOC'}
            </p>
          </Link>

        </div>
      </SectionShell>

      <SectionShell id="cta" className="pb-24">
  <div className="text-center rounded-[32px] border border-orange-300/20 bg-orange-500/10 px-6 py-10">
    
    <h2 className="text-2xl md:text-4xl text-orange-100 font-semibold">
      {isZh ? '开始参与 WAOC' : 'Start with WAOC'}
    </h2>

    <p className="mt-4 text-orange-100/80 max-w-2xl mx-auto">
      {isZh
        ? '如果不知道从哪里开始，可以从任务或机器人入口开始，然后逐步进入更深层的协调与价值体系。'
        : 'If you are unsure where to begin, start with missions or the bot, then gradually move into deeper coordination and value layers.'}
    </p>

    {/* CTA Buttons */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">

      {/* Mission */}
      <Link
        href={officialLinks.oneMission}
        target="_blank"
        className="rounded-full bg-orange-500 px-6 py-3 text-sm text-white hover:bg-orange-400"
      >
        {isZh ? '开始任务' : 'Start Mission'}
      </Link>

      {/* Bot */}
      <Link
        href="https://t.me/WAOCOneAIBot"
        target="_blank"
        className="rounded-full border border-orange-300/30 px-6 py-3 text-sm text-orange-100 hover:bg-orange-500/20"
      >
        {isZh ? '进入 Bot' : 'Enter Bot'}
      </Link>

      {/* Token（弱化） */}
      <Link
        href="https://dexscreener.com/bsc/0x3162d180fe80e11898aa932d4584f22091e77305"
        target="_blank"
        className="text-sm text-white/60 hover:text-white underline underline-offset-4"
      >
        {isZh ? '探索价值层 →' : 'Explore Value Layer →'}
      </Link>

    </div>
  </div>
</SectionShell>
    </>
  );
}
