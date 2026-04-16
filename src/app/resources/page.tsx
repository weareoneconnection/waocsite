'use client';

import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';

function ResourceCard({
  title,
  href,
  description,
  tag,
  contract,
  actionLabel,
}: {
  title: string;
  href: string;
  description: string;
  tag: string;
  contract?: string;
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

      <div className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
        {title}
      </div>

      <p className="mt-3 text-sm leading-7 text-white/60 md:text-[15px]">
        {description}
      </p>

      <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-xs text-white/50 break-all">
        {href}
      </div>

      {contract ? (
        <div className="mt-3 rounded-2xl border border-orange-300/20 bg-orange-500/10 px-4 py-3 text-xs text-orange-200 break-all">
          Contract: {contract}
        </div>
      ) : null}

      <div className="mt-4 text-sm text-orange-200/85 transition group-hover:translate-x-1">
        {actionLabel} →
      </div>
    </Link>
  );
}

function FaqCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <div className="text-lg font-medium text-white">{question}</div>
      <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
        {answer}
      </p>
    </div>
  );
}

export default function ResourcesPage() {
  const { dict, lang } = useLanguage();
  const isZh = lang === 'zh';

  const resources = [
    {
      title: 'OneAI',
      href: officialLinks.oneAI,
      tag: isZh ? '智能引擎' : 'AI Engine',
      description: isZh
        ? 'OneAI 是 WAOC 的智能引擎，用于生成内容、结构化输入、任务辅助与协调执行。'
        : 'OneAI is the intelligence engine of WAOC, used for content generation, structured output, mission assistance, and coordination workflows.',
      actionLabel: isZh ? '打开资源' : 'Open Resource',
    },
    {
      title: 'OneField',
      href: officialLinks.oneField,
      tag: isZh ? '协调网络' : 'Network Layer',
      description: isZh
        ? 'OneField 是 WAOC 的协调网络，用于展示关系、记忆、拓扑结构与社群信号。'
        : 'OneField is the coordination network of WAOC, designed to visualize relationships, memory, topology, and community signals.',
      actionLabel: isZh ? '打开资源' : 'Open Resource',
    },
    {
      title: 'One Mission',
      href: officialLinks.oneMission,
      tag: isZh ? '执行层' : 'Execution Layer',
      description: isZh
        ? 'One Mission 是 WAOC 的行动层，用户通过任务参与、贡献并积累声誉。'
        : 'One Mission is the execution layer of WAOC, where users participate through missions, contribute, and build reputation.',
      actionLabel: isZh ? '打开资源' : 'Open Resource',
    },
    {
      title: 'WAOC Genesis',
      href: officialLinks.genesis,
      tag: isZh ? '身份入口' : 'Identity Entry',
      description: isZh
        ? 'WAOC Genesis 代表生态中的身份与起点，可作为 NFT、归属与长期参与的入口。'
        : 'WAOC Genesis represents identity and origin within the ecosystem, serving as an entry point for NFT, belonging, and long-term participation.',
      actionLabel: isZh ? '打开资源' : 'Open Resource',
    },
    {
      title: 'Meditation',
      href: officialLinks.meditation,
      tag: isZh ? '意识层' : 'Consciousness',
      description: isZh
        ? 'Meditation 模块承接 WAOC 文明层中的意识维度，使系统不仅高效，也保有方向。'
        : 'The Meditation module reflects the consciousness dimension of WAOC’s civilization layer, grounding the system in direction as well as efficiency.',
      actionLabel: isZh ? '打开资源' : 'Open Resource',
    },
    {
      title: 'ONEAI Token',
      href: 'https://dexscreener.com/bsc/0x3162d180fe80e11898aa932d4584f22091e77305',
      tag: isZh ? '价值层 · AI' : 'Value Layer · AI',
      description: isZh
        ? 'ONEAI 作为 AI 经济层资产，连接智能、执行与价值流动。这里提供官方 Dex 查看入口与官方合约。'
        : 'ONEAI functions as the AI-native economic asset connecting intelligence, execution, and value flow. This card provides the official Dex view and official contract.',
      contract: '0xc2de1bd5bd3113b344904d137a8309effde14444',
      actionLabel: isZh ? '查看代币' : 'View Token',
    },
    {
      title: 'WAOC Token',
      href: 'https://dexscreener.com/solana/3mjvsq4kg51kfsczcafshfhjfs5st361a55ipyderdw9',
      tag: isZh ? '价值层 · 协调' : 'Value Layer · Coordination',
      description: isZh
        ? 'WAOC 代表生态中的协调价值与身份价值，这里提供官方 Dex 查看入口与官方合约。'
        : 'WAOC represents coordination value and identity value within the ecosystem. This card provides the official Dex view and official contract.',
      contract: '82gi7mybA1yHi56FcCC9wvTPzew5hsxP2wdHv4nYpump',
      actionLabel: isZh ? '查看代币' : 'View Token',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={dict.pages.resources.title}
        intro={dict.pages.resources.intro}
      />

      <SectionShell id="overview" className="pt-12 md:pt-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
              {isZh ? '官方资源中心' : 'Official Resource Center'}
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {isZh
                ? '所有 WAOC 官方入口都在这里'
                : 'All official WAOC entry points in one place'}
            </h2>
          </div>

          <div className="space-y-4 text-[15px] leading-8 text-white/68">
            <p>
              {isZh
                ? '本页面用于集中展示 WAOC 生态的所有官方资源与正式入口，帮助用户快速进入不同模块，同时避免因为错误链接、旧链接或非官方入口而造成混乱。'
                : 'This page centralizes all official WAOC resources and verified ecosystem entry points, helping users access each module clearly while reducing confusion caused by unofficial, outdated, or incorrect links.'}
            </p>
            <p>
              {isZh
                ? '它不仅是一个链接页，更是 WAOC 的官方资源中心：从智能引擎、协调网络、任务系统，到身份入口与价值层资产，都在这里被统一组织。'
                : 'It is more than a link directory. It functions as WAOC’s official resource center, organizing the intelligence engine, coordination network, mission system, identity entry points, and value-layer assets into one coherent structure.'}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="links">
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
            {isZh ? '官方链接' : 'Official Links'}
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {isZh
              ? '生态入口与系统模块'
              : 'Ecosystem Entrances and System Modules'}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <ResourceCard
              key={item.title}
              title={item.title}
              href={item.href}
              tag={item.tag}
              description={item.description}
              contract={item.contract}
              actionLabel={item.actionLabel}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="value-layer">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
              {isZh ? '价值层' : 'Value Layer'}
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {isZh
                ? 'WAOC 与 ONEAI 作为生态价值层'
                : 'WAOC and ONEAI as the ecosystem value layer'}
            </h2>
          </div>

          <div className="space-y-4 text-[15px] leading-8 text-white/68">
            <p>
              {isZh
                ? '在 WAOC 生态中，token 不只是孤立的交易资产，而是价值层的一部分。它们与协调、身份、贡献、激励和长期网络结构相关联。'
                : 'Within the WAOC ecosystem, tokens are not presented as isolated trading assets, but as part of the value layer. They relate to coordination, identity, contribution, incentives, and long-term network structure.'}
            </p>
            <p>
              {isZh
                ? 'ONEAI 更偏向 AI 经济与执行价值，WAOC 更偏向生态协调与身份价值。两者共同构成系统中的价值表达。'
                : 'ONEAI is more closely aligned with AI-native execution and economic flow, while WAOC is more closely aligned with ecosystem coordination and identity value. Together, they form the value expression of the system.'}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="principles">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[28px] border border-orange-300/20 bg-orange-500/10 p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-orange-200/80">
              {isZh ? '使用原则' : 'Usage Principle'}
            </div>
            <div className="mt-3 text-lg font-medium text-orange-100">
              {isZh ? '只使用官方链接' : 'Use official links only'}
            </div>
            <p className="mt-3 text-sm leading-7 text-orange-100/80 md:text-base">
              {isZh
                ? '当你浏览 WAOC 生态时，请优先使用本页面列出的正式入口与官方合约信息。'
                : 'When exploring the WAOC ecosystem, use the verified entrances and official contract information listed on this page whenever possible.'}
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {isZh ? '统一入口' : 'Unified Access'}
            </div>
            <div className="mt-3 text-lg font-medium text-white">
              {isZh
                ? '官方官网是生态网关'
                : 'The official website is the ecosystem gateway'}
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
              {isZh
                ? '本网站作为 WAOC 官方生态网关，用于统一组织、解释和连接不同产品、入口与价值层资源。'
                : 'This website functions as the official WAOC ecosystem gateway, organizing, explaining, and connecting multiple products, entry points, and value-layer resources.'}
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {isZh ? '持续扩展' : 'Expandable Layer'}
            </div>
            <div className="mt-3 text-lg font-medium text-white">
              {isZh
                ? '资源中心会持续增长'
                : 'This resource layer will expand over time'}
            </div>
            <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
              {isZh
                ? '后续文档、FAQ、品牌资产、白皮书、媒体资料、合作材料与 token 说明都可以在这里继续扩展。'
                : 'Over time, documentation, FAQs, brand assets, whitepapers, media kits, partner resources, and token-related material can all be expanded here.'}
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq">
        <div className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
            FAQ
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {isZh ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <FaqCard
            question={
              isZh
                ? '为什么需要这个 Resources 页面？'
                : 'Why does WAOC need a Resources page?'
            }
            answer={
              isZh
                ? '因为 WAOC 不是单一产品，而是一个由多个系统模块构成的生态。Resources 页面帮助用户快速识别正式入口，并降低信息混乱。'
                : 'Because WAOC is not a single product. It is an ecosystem composed of multiple system modules. This page helps users identify official entry points quickly and reduces informational confusion.'
            }
          />

          <FaqCard
            question={
              isZh
                ? '这里的链接是官方入口吗？'
                : 'Are the links on this page official?'
            }
            answer={
              isZh
                ? '是的。本页面列出的系统入口、Dex 链接与合约信息应被视为 WAOC 官方资源。'
                : 'Yes. The system entrances, Dex links, and contract information listed on this page should be treated as official WAOC resources.'
            }
          />

          <FaqCard
            question={
              isZh
                ? '为什么 token 信息放在 Resources 页面？'
                : 'Why are token details placed on the Resources page?'
            }
            answer={
              isZh
                ? '因为 Resources 页面承担官方验证入口的作用，适合统一承载系统资源、合约地址与价值层信息，同时避免首页过度 token 化。'
                : 'Because the Resources page functions as an official verification layer. It is the right place to unify system links, contract addresses, and value-layer information without making the homepage feel overly token-centric.'
            }
          />

          <FaqCard
            question={
              isZh
                ? '官网与 OneAI / OneField / OneMission 的关系是什么？'
                : 'How does the website relate to OneAI, OneField, and OneMission?'
            }
            answer={
              isZh
                ? '官网负责统一解释 WAOC 的愿景、结构与生态入口；OneAI、OneField、OneMission 则分别对应智能层、协调网络层与执行层。'
                : 'The website explains WAOC’s vision, structure, and ecosystem access. OneAI, OneField, and OneMission represent the intelligence layer, coordination network, and execution layer respectively.'
            }
          />
        </div>
      </SectionShell>

      <SectionShell id="closing" className="pb-24">
        <div className="rounded-[32px] border border-orange-300/20 bg-orange-500/10 px-6 py-8 text-center md:px-10 md:py-10">
          <div className="text-[11px] uppercase tracking-[0.28em] text-orange-200/80">
            {isZh ? '官方提醒' : 'Official Notice'}
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-orange-100 md:text-4xl">
            {isZh
              ? '从这里进入 WAOC 生态'
              : 'Enter the WAOC ecosystem from here'}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-orange-100/80 md:text-base">
            {isZh
              ? '当你需要进入 WAOC 相关产品、系统、身份入口或价值层资源时，请优先从本页面开始，以确保你使用的是正确且经过验证的官方资源。'
              : 'Whenever you need to access WAOC-related products, systems, identity entry points, or value-layer resources, start from this page first to ensure you are using the correct and verified official resources.'}
          </p>
        </div>
      </SectionShell>
    </>
  );
}
