'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Bot,
  Sparkles,
  Coins,
  Shield,
  Hexagon,
  Orbit,
  Network,
  Waves,
  Star,
  CircleDashed,
} from 'lucide-react';
import { useLanguage } from '@/components/ui/language-provider';

type NodeItem = {
  id: string;
  label: string;
  x: number;
  y: number;
  icon?: React.ReactNode;
  tone?: 'orange' | 'gold' | 'blue' | 'white';
  description?: string;
};

const cx = 620;
const cy = 380;

function polarToCartesian(radius: number, angleDeg: number) {
  const angle = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function buildRing(radius: number, items: Array<Omit<NodeItem, 'x' | 'y'> & { angle: number }>) {
  return items.map((item) => {
    const p = polarToCartesian(radius, item.angle);
    return { ...item, x: p.x, y: p.y };
  });
}

function toneClasses(tone: NodeItem['tone'] = 'white', active = false) {
  const base = {
    orange: active
      ? 'border-orange-400/70 bg-orange-500/20 text-orange-100 shadow-[0_0_30px_rgba(255,115,0,0.35)]'
      : 'border-orange-400/30 bg-orange-500/10 text-orange-100',
    gold: active
      ? 'border-amber-300/70 bg-amber-400/20 text-amber-50 shadow-[0_0_30px_rgba(245,158,11,0.28)]'
      : 'border-amber-300/30 bg-amber-300/10 text-amber-50',
    blue: active
      ? 'border-sky-400/70 bg-sky-500/20 text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.28)]'
      : 'border-sky-400/30 bg-sky-500/10 text-sky-100',
    white: active
      ? 'border-white/50 bg-white/15 text-white shadow-[0_0_22px_rgba(255,255,255,0.18)]'
      : 'border-white/15 bg-white/5 text-white/90',
  } as const;

  return base[tone];
}

function RingLabel({ text, top }: { text: string; top: number }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.35em] text-white/35"
      style={{ top }}
    >
      {text}
    </div>
  );
}

function NodeCard({
  node,
  active,
  onEnter,
  onLeave,
}: {
  node: NodeItem;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border px-3 py-2 backdrop-blur-md transition-all ${toneClasses(node.tone, active)}`}
      style={{ left: node.x, top: node.y }}
    >
      <div className="flex items-center gap-2 whitespace-nowrap text-xs font-medium md:text-sm">
        <span className="opacity-90">{node.icon}</span>
        <span>{node.label}</span>
      </div>
    </motion.button>
  );
}

function FlowLine({ from, to, active = false }: { from: { x: number; y: number }; to: { x: number; y: number }; active?: boolean }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - 22;
  const path = `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;

  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)'}
        strokeWidth={active ? 2 : 1.25}
      />
      <motion.circle r="3" fill={active ? 'rgba(255,180,80,1)' : 'rgba(255,255,255,0.6)'}>
        <animateMotion dur={active ? '3.2s' : '5.2s'} repeatCount="indefinite" path={path} />
      </motion.circle>
    </g>
  );
}

export function WaocDynamicSystemMap() {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  const t = {
    en: {
      eyebrow: 'WAOC Dynamic System Map',
      title: 'AI-Native Coordination Network',
      copy:
        'Centered on OneAI, operating through OneField as the coordination network, extending into execution, identity, and tokenized value — all guided by a civilization layer.',
      helper: 'Hover nodes to explore the system. The highlighted path shows how coordination becomes contribution, identity, and value.',
      narrative: 'System Narrative',
      companion: 'Homepage Hero Companion',
      companionCopy:
        'This map presents WAOC as one living coordination system, with OneField as the network field rather than a standalone app.',
      activeNode: 'Active Node',
      defaultActive: 'WAOC aligns intelligence, execution, identity, and tokenized value inside OneField toward a shared destiny of humanity.',
      bullets: [
        'Core: OneAI as the intelligence engine',
        'Field: OneField as the coordination network',
        'Ring 1: Narrative, Growth, Mission execution',
        'Ring 2: NFT, reputation, proof of contribution',
        'Ring 3: One Mission, OneAI Bot, OneClaw, Meditation',
        'Ring 4: $WAOC, $ONEAI, Solana identity rail',
        'Outer Halo: Love · Unity · Peace · Consciousness · Shared Destiny of Humanity',
      ],
      layers: {
        civilization: 'Civilization Layer',
        token: 'Token Layer',
        execution: 'Execution Layer',
        identity: 'Identity Layer',
        coordination: 'Coordination Layer',
        oneField: 'OneField · The Coordination Network',
        flow: 'Live coordination flow',
      },
      civilizationWords: ['Love', 'Unity', 'Peace', 'Consciousness', 'Shared Destiny of Humanity'],
      signals: 'Signals · Agents · Humans · Actions',
      labels: {
        narrative: 'Narrative Engine',
        growth: 'Growth Engine',
        missionEngine: 'Mission Engine',
        nft: 'WAOC NFT',
        reputation: 'Reputation',
        proof: 'Proof of Contribution',
        bot: 'OneAI Bot',
        claw: 'OneClaw',
        mission: 'One Mission',
        meditation: 'Meditation App',
        waoc: '$WAOC · BSC',
        oneai: '$ONEAI · BSC',
        solana: 'Solana Identity Rail',
      },
    },
    zh: {
      eyebrow: 'WAOC 动态系统图',
      title: 'AI 原生协调网络',
      copy:
        '以 OneAI 为核心，通过 OneField 作为协调网络场，延伸到执行、身份与代币化价值，并由文明层整体引导。',
      helper: '悬浮节点即可查看系统说明。高亮路径展示协调如何转化为贡献、身份与价值。',
      narrative: '系统叙事',
      companion: '首页主叙事说明',
      companionCopy: '这张图把 WAOC 呈现为一个活着的协调系统，而 OneField 是整个网络场，而不是一个独立应用。',
      activeNode: '当前节点',
      defaultActive: 'WAOC 在 OneField 内部对齐智能、执行、身份与代币化价值，并朝向共享的人类命运前进。',
      bullets: [
        '核心：OneAI 是智能引擎',
        '场域：OneField 是协调网络',
        '第一圈：叙事、增长、任务执行',
        '第二圈：NFT、声誉、贡献证明',
        '第三圈：One Mission、OneAI Bot、OneClaw、冥想应用',
        '第四圈：$WAOC、$ONEAI、Solana 身份轨道',
        '外层光环：爱 · 合一 · 和平 · 意识 · 人类命运共同体',
      ],
      layers: {
        civilization: '文明层',
        token: '价值层',
        execution: '执行层',
        identity: '身份层',
        coordination: '协调层',
        oneField: 'OneField · 协调网络',
        flow: '实时协调流',
      },
      civilizationWords: ['爱', '合一', '和平', '意识', '人类命运共同体'],
      signals: '信号 · 智能体 · 人 · 行动',
      labels: {
        narrative: '叙事引擎',
        growth: '增长引擎',
        missionEngine: '任务引擎',
        nft: 'WAOC NFT',
        reputation: '声誉',
        proof: '贡献证明',
        bot: 'OneAI Bot',
        claw: 'OneClaw',
        mission: 'One Mission',
        meditation: '冥想应用',
        waoc: '$WAOC · BSC',
        oneai: '$ONEAI · BSC',
        solana: 'Solana 身份轨道',
      },
    },
  }[lang];

  const coordinationNodes = buildRing(150, [
    {
      id: 'narrative',
      label: t.labels.narrative,
      angle: 0,
      icon: <Sparkles className="h-4 w-4" />,
      tone: 'orange',
      description: lang === 'en' ? 'Shapes signal into coherent story and alignment.' : '把信号塑造成可传播、可对齐的叙事。',
    },
    {
      id: 'growth',
      label: t.labels.growth,
      angle: 120,
      icon: <Network className="h-4 w-4" />,
      tone: 'orange',
      description: lang === 'en' ? 'Distributes momentum across the ecosystem.' : '把动能分发到整个生态系统。',
    },
    {
      id: 'mission-engine',
      label: t.labels.missionEngine,
      angle: 240,
      icon: <Orbit className="h-4 w-4" />,
      tone: 'orange',
      description: lang === 'en' ? 'Turns intent into tasks, actions, and contribution.' : '把意图转化为任务、行动与贡献。',
    },
  ]);

  const identityNodes = buildRing(255, [
    {
      id: 'nft',
      label: t.labels.nft,
      angle: 30,
      icon: <Hexagon className="h-4 w-4" />,
      tone: 'gold',
      description: lang === 'en' ? 'A symbolic and functional identity anchor.' : '象征性与功能性兼具的身份锚点。',
    },
    {
      id: 'reputation',
      label: t.labels.reputation,
      angle: 150,
      icon: <Shield className="h-4 w-4" />,
      tone: 'gold',
      description: lang === 'en' ? 'Social capital built through real contribution.' : '由真实贡献沉淀出的社会资本。',
    },
    {
      id: 'proof',
      label: t.labels.proof,
      angle: 270,
      icon: <Star className="h-4 w-4" />,
      tone: 'gold',
      description: lang === 'en' ? 'Every meaningful action can become record and trust.' : '每一次有意义的行动都能成为记录与信任。',
    },
  ]);

  const executionNodes = buildRing(360, [
    {
      id: 'oneai-bot',
      label: t.labels.bot,
      angle: 332,
      icon: <Bot className="h-4 w-4" />,
      tone: 'white',
      description: lang === 'en' ? 'Autonomous coordination across communities and channels.' : '跨社群与渠道的自动协调执行层。',
    },
    {
      id: 'oneclaw',
      label: t.labels.claw,
      angle: 22,
      icon: <Waves className="h-4 w-4" />,
      tone: 'white',
      description: lang === 'en' ? 'Execution arm for automation, response, and traction.' : '用于自动化、响应与推进的执行臂。',
    },
    {
      id: 'onemission',
      label: t.labels.mission,
      angle: 92,
      icon: <Orbit className="h-4 w-4" />,
      tone: 'white',
      description: lang === 'en' ? 'Contribution layer where users act, earn, and build identity.' : '用户行动、积累、建立身份的贡献层。',
    },
    {
      id: 'meditation',
      label: t.labels.meditation,
      angle: 252,
      icon: <Sparkles className="h-4 w-4" />,
      tone: 'white',
      description: lang === 'en' ? 'Consciousness entry point aligned with the civilization layer.' : '与文明层对应的意识入口。',
    },
  ]);

  const tokenNodes = buildRing(430, [
    {
      id: 'waoc-bsc',
      label: t.labels.waoc,
      angle: 120,
      icon: <Coins className="h-4 w-4" />,
      tone: 'orange',
      description: lang === 'en' ? 'Primary value layer for incentives, growth, and ecosystem alignment.' : '激励、增长与生态对齐的主要价值层。',
    },
    {
      id: 'oneai-bsc',
      label: t.labels.oneai,
      angle: 48,
      icon: <Coins className="h-4 w-4" />,
      tone: 'orange',
      description: lang === 'en' ? 'AI economy token inside the broader WAOC coordination system.' : '更大 WAOC 协调系统中的 AI 经济代币。',
    },
    {
      id: 'solana-identity',
      label: t.labels.solana,
      angle: 220,
      icon: <Coins className="h-4 w-4" />,
      tone: 'blue',
      description: lang === 'en' ? 'Identity and contribution records anchored on Solana.' : '锚定在 Solana 上的身份与贡献记录。',
    },
  ]);

  const allNodes = useMemo(
    () => [...coordinationNodes, ...identityNodes, ...executionNodes, ...tokenNodes],
    [coordinationNodes, identityNodes, executionNodes, tokenNodes]
  );

  const activeNode = allNodes.find((n) => n.id === activeId) || null;
  const corePoint = { x: cx, y: cy };

  return (
    <section className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,110,0,0.16),transparent_26%),radial-gradient(circle_at_center,rgba(255,200,100,0.08),transparent_44%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 grid gap-8 p-6 md:p-10 xl:grid-cols-[1.2fr_420px]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.02] p-2 md:p-4">
          <div className="mb-4 flex flex-col gap-3 px-3 pt-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-orange-300/80">{t.eyebrow}</div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">{t.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 md:text-base">{t.copy}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70 backdrop-blur-md md:max-w-[280px]">{t.helper}</div>
          </div>

          <div className="relative mx-auto aspect-[16/10] w-full max-w-[1240px] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)]">
            <RingLabel text={t.layers.civilization} top={26} />
            <RingLabel text={t.layers.token} top={80} />
            <RingLabel text={t.layers.execution} top={128} />
            <RingLabel text={t.layers.identity} top={176} />
            <RingLabel text={t.layers.coordination} top={226} />

            <svg viewBox="0 0 1240 760" className="absolute inset-0 h-full w-full">
              <defs>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,180,80,0.95)" />
                  <stop offset="45%" stopColor="rgba(255,110,0,0.45)" />
                  <stop offset="100%" stopColor="rgba(255,110,0,0)" />
                </radialGradient>
              </defs>

              {[500, 430, 360, 255, 150].map((radius, index) => (
                <motion.circle
                  key={radius}
                  cx={cx}
                  cy={cy}
                  r={radius}
                  fill="none"
                  stroke={index === 1 ? 'rgba(255,200,120,0.14)' : index === 4 ? 'rgba(255,160,60,0.22)' : 'rgba(255,255,255,0.12)'}
                  strokeDasharray={index === 4 ? '6 10' : '4 10'}
                  animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 48 + index * 14, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}

              {coordinationNodes.map((n) => (
                <FlowLine key={`coord-${n.id}`} from={corePoint} to={{ x: n.x, y: n.y }} active={activeId === n.id || activeId === 'oneai-core'} />
              ))}
              {identityNodes.map((n, i) => (
                <FlowLine
                  key={`id-${n.id}`}
                  from={{ x: coordinationNodes[i % coordinationNodes.length].x, y: coordinationNodes[i % coordinationNodes.length].y }}
                  to={{ x: n.x, y: n.y }}
                  active={activeId === n.id}
                />
              ))}
              {executionNodes.map((n, i) => (
                <FlowLine
                  key={`exec-${n.id}`}
                  from={{ x: identityNodes[i % identityNodes.length].x, y: identityNodes[i % identityNodes.length].y }}
                  to={{ x: n.x, y: n.y }}
                  active={activeId === n.id}
                />
              ))}
              {tokenNodes.map((n, i) => (
                <FlowLine
                  key={`token-${n.id}`}
                  from={{ x: executionNodes[i % executionNodes.length].x, y: executionNodes[i % executionNodes.length].y }}
                  to={{ x: n.x, y: n.y }}
                  active={activeId === n.id}
                />
              ))}

              <path d={`M ${cx} ${cy} Q ${cx + 80} ${cy + 140} ${executionNodes[2].x} ${executionNodes[2].y}`} fill="none" stroke="rgba(255,140,40,0.42)" strokeWidth="3" strokeLinecap="round" />
              <path d={`M ${executionNodes[2].x} ${executionNodes[2].y} Q ${cx - 20} ${cy + 110} ${identityNodes[2].x} ${identityNodes[2].y}`} fill="none" stroke="rgba(255,140,40,0.42)" strokeWidth="3" strokeLinecap="round" />
              <path d={`M ${identityNodes[2].x} ${identityNodes[2].y} Q ${cx - 160} ${cy + 40} ${identityNodes[1].x} ${identityNodes[1].y}`} fill="none" stroke="rgba(255,140,40,0.42)" strokeWidth="3" strokeLinecap="round" />
              <path d={`M ${identityNodes[1].x} ${identityNodes[1].y} Q ${cx - 120} ${cy - 150} ${tokenNodes[0].x} ${tokenNodes[0].y}`} fill="none" stroke="rgba(255,140,40,0.42)" strokeWidth="3" strokeLinecap="round" />
              <path d={`M ${tokenNodes[0].x} ${tokenNodes[0].y} Q ${cx - 200} ${cy - 220} ${cx} ${cy}`} fill="none" stroke="rgba(255,140,40,0.42)" strokeWidth="3" strokeLinecap="round" />

              <motion.circle r="4" fill="rgba(255,190,110,1)">
                <animateMotion
                  dur="7s"
                  repeatCount="indefinite"
                  path={`M ${cx} ${cy} Q ${cx + 80} ${cy + 140} ${executionNodes[2].x} ${executionNodes[2].y} Q ${cx - 20} ${cy + 110} ${identityNodes[2].x} ${identityNodes[2].y} Q ${cx - 160} ${cy + 40} ${identityNodes[1].x} ${identityNodes[1].y} Q ${cx - 120} ${cy - 150} ${tokenNodes[0].x} ${tokenNodes[0].y} Q ${cx - 200} ${cy - 220} ${cx} ${cy}`}
                />
              </motion.circle>

              <circle cx={cx} cy={cy} r="118" fill="url(#coreGlow)" />
            </svg>

            <div className="pointer-events-none absolute inset-0 z-[1]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,130,30,0.08),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_62%)]" />
              <div className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />
              <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
              <div className="absolute left-1/2 top-[16%] -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/55 backdrop-blur-sm">{t.layers.oneField}</div>
              <div className="absolute bottom-[13%] left-1/2 -translate-x-1/2 text-center text-[11px] uppercase tracking-[0.28em] text-white/38">{t.signals}</div>
            </div>

            <motion.div
              className="absolute left-1/2 top-1/2 z-20 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orange-300/25 bg-black/60 backdrop-blur-xl"
              animate={{ boxShadow: ['0 0 40px rgba(255,120,0,0.18)', '0 0 80px rgba(255,120,0,0.28)', '0 0 40px rgba(255,120,0,0.18)'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-3 rounded-full border border-orange-300/20" />
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/30 bg-orange-500/15 text-orange-100">
                  <Brain className="h-6 w-6" />
                </div>
                <div className="text-xl font-semibold tracking-tight md:text-2xl">OneAI</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/45">Core Engine</div>
              </div>
            </motion.div>

            {[...coordinationNodes, ...identityNodes, ...executionNodes, ...tokenNodes].map((node) => (
              <NodeCard key={node.id} node={node} active={activeId === node.id} onEnter={() => setActiveId(node.id)} onLeave={() => setActiveId(null)} />
            ))}

            <div className="pointer-events-none absolute inset-0">
              {t.civilizationWords.map((word, index) => {
                const angle = index * (360 / t.civilizationWords.length) + 12;
                const p = polarToCartesian(438, angle);
                return (
                  <motion.div
                    key={word}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm md:text-xs"
                    style={{ left: p.x, top: p.y }}
                    animate={{ opacity: [0.45, 0.9, 0.45] }}
                    transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {word}
                  </motion.div>
                );
              })}
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/50 backdrop-blur-sm">
              <CircleDashed className="h-3.5 w-3.5" /> {t.layers.flow}
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
          <div>
            <div className="mb-2 text-[11px] uppercase tracking-[0.35em] text-orange-300/80">{t.narrative}</div>
            <h3 className="text-2xl font-semibold tracking-tight">{t.companion}</h3>
            <p className="mt-3 text-sm leading-6 text-white/65">{t.companionCopy}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
            <div className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/45">{t.activeNode}</div>
            {activeNode ? (
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90">
                  {activeNode.icon}
                  <span>{activeNode.label}</span>
                </div>
                <p className="text-sm leading-6 text-white/70">{activeNode.description}</p>
              </div>
            ) : (
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-500/10 px-3 py-1.5 text-sm text-orange-100">
                  <Brain className="h-4 w-4" />
                  <span>OneAI Core Engine</span>
                </div>
                <p className="text-sm leading-6 text-white/70">{t.defaultActive}</p>
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3">
            {t.bullets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
