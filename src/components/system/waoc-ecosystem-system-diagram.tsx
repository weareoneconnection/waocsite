'use client';

import { useLanguage } from '@/components/ui/language-provider';

function LayerCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 text-left">
      <div className="text-sm font-medium text-white md:text-base">{title}</div>
      <div className="mt-2 text-sm leading-6 text-white/60">{body}</div>
    </div>
  );
}

export function WaocEcosystemSystemDiagram() {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';

  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black px-4 py-8 md:px-8 md:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.10),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_40%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.32em] text-orange-300/80">
            {isZh ? '系统架构图' : 'System Diagram'}
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
            {isZh ? 'WAOC 生态系统结构图' : 'WAOC Ecosystem Structure'}
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 md:text-base">
            {isZh
              ? '这张图展示 WAOC 如何从文明层原则出发，经由 OneAI 核心引擎，延伸到协调网络、执行层、身份层与价值层。'
              : 'This diagram shows how WAOC begins from civilizational principles, operates through the OneAI core engine, and extends into the coordination network, execution layer, identity layer, and value layer.'}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-orange-300/30 via-orange-300/20 to-transparent" />

          <div className="space-y-6">
            <div className="mx-auto max-w-3xl rounded-[28px] border border-orange-300/20 bg-orange-500/10 px-6 py-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.28em] text-orange-200/80">
                {isZh ? '文明层' : 'Civilization Layer'}
              </div>
              <div className="mt-3 text-base font-medium leading-8 text-orange-100 md:text-lg">
                {isZh
                  ? '爱 · 和平 · 团结 · 意识 · 人类命运共同体'
                  : 'Love · Peace · Unity · Consciousness · Shared Destiny of Humanity'}
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-gradient-to-b from-orange-300/40 to-transparent" />

            <div className="mx-auto max-w-xl rounded-[28px] border border-orange-300/25 bg-black/40 px-6 py-6 text-center shadow-[0_0_50px_rgba(255,140,0,0.12)]">
              <div className="text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
                {isZh ? '核心引擎' : 'Core Engine'}
              </div>
              <div className="mt-3 text-3xl font-semibold text-white">OneAI</div>
              <div className="mt-2 text-sm leading-7 text-white/60">
                {isZh
                  ? 'AI 原生协调引擎，负责把信号转化为结构，把结构转化为行动。'
                  : 'An AI-native coordination engine that turns signals into structure, and structure into action.'}
              </div>
            </div>

            <div className="mx-auto h-8 w-px bg-gradient-to-b from-orange-300/40 to-transparent" />

            <div className="grid gap-5 lg:grid-cols-3">
              <LayerCard
                title={isZh ? '协调网络 · OneField' : 'Coordination Network · OneField'}
                body={
                  isZh
                    ? '承接关系、信号、社群与记忆，形成可见的网络结构。'
                    : 'Holds relationships, signals, communities, and memory as a visible network structure.'
                }
              />
              <LayerCard
                title={isZh ? '执行层 · OneMission' : 'Execution Layer · OneMission'}
                body={
                  isZh
                    ? '将意图转化为任务、贡献与可验证行动。'
                    : 'Turns intention into missions, contribution, and verifiable action.'
                }
              />
              <LayerCard
                title={isZh ? '增长与叙事' : 'Growth & Narrative'}
                body={
                  isZh
                    ? '让协调结果进入传播、增长与持续扩展。'
                    : 'Extends coordination into distribution, growth, and narrative expansion.'
                }
              />
            </div>

            <div className="mx-auto h-8 w-px bg-gradient-to-b from-orange-300/40 to-transparent" />

            <div className="grid gap-5 lg:grid-cols-3">
              <LayerCard
                title={isZh ? '声誉' : 'Reputation'}
                body={
                  isZh
                    ? '贡献沉淀为长期声誉。'
                    : 'Contribution accumulates into durable reputation.'
                }
              />
              <LayerCard
                title={isZh ? 'WAOC NFT' : 'WAOC NFT'}
                body={
                  isZh
                    ? '作为身份与归属的锚点。'
                    : 'Acts as an anchor for identity and belonging.'
                }
              />
              <LayerCard
                title={isZh ? '贡献证明' : 'Proof of Contribution'}
                body={
                  isZh
                    ? '让行动形成记录、身份与信任。'
                    : 'Turns action into record, identity, and trust.'
                }
              />
            </div>

            <div className="mx-auto h-8 w-px bg-gradient-to-b from-orange-300/40 to-transparent" />

            <div className="mx-auto max-w-2xl rounded-[28px] border border-orange-300/20 bg-white/[0.03] px-6 py-5 text-center">
              <div className="text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
                {isZh ? '价值层' : 'Value Layer'}
              </div>
              <div className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                $WAOC · $ONEAI
              </div>
              <div className="mt-2 text-sm leading-7 text-white/60">
                {isZh
                  ? '价值来自协调后的行动，而不是脱离系统的抽象投机。'
                  : 'Value emerges from aligned coordination and action, rather than disconnected speculation.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}