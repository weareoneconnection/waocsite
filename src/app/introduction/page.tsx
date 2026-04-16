'use client';

import { PageHero } from '@/components/sections/page-hero';
import { SectionShell } from '@/components/ui/section-shell';
import { useLanguage } from '@/components/ui/language-provider';
import { WaocEcosystemSystemDiagram } from '@/components/system/waoc-ecosystem-system-diagram';
function SectionBlock({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">
      <div>
        {eyebrow ? (
          <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-orange-300/80">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 text-[15px] leading-8 text-white/68 md:text-base md:leading-8">
        {children}
      </div>
    </div>
  );
}

function InfoCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <div className="text-lg font-medium text-white">{title}</div>
      <p className="mt-3 text-sm leading-7 text-white/65 md:text-base">
        {body}
      </p>
    </div>
  );
}

export default function IntroductionPage() {
  const { lang } = useLanguage();
  const isZh = lang === 'zh';

  return (
    <>
      <PageHero
        eyebrow={isZh ? '白皮书' : 'Whitepaper'}
        title={isZh ? 'WAOC 白皮书' : 'WAOC Whitepaper'}
        intro={
          isZh
            ? 'WAOC 是一个 AI 原生的协调网络，旨在将智能、行动、身份与价值整合为一个持续运作的系统。'
            : 'WAOC is an AI-native coordination network designed to align intelligence, action, identity, and value into a living system.'
        }
      />

      <SectionShell id="abstract" className="pt-12 md:pt-16">
        <SectionBlock
          eyebrow={isZh ? '摘要' : 'Abstract'}
          title={isZh ? 'WAOC 是什么' : 'What WAOC Is'}
        >
          <p>
            {isZh
              ? 'WAOC 不是一个单一产品，也不是一个普通社区。它是一个围绕“协调”而构建的系统性生态，试图在碎片化世界中重新建立信任、连接与行动之间的结构。'
              : 'WAOC is not a single product, nor a conventional community. It is a systems-level ecosystem built around coordination, designed to restore structure between trust, connection, and action in a fragmented world.'}
          </p>
          <p>
            {isZh
              ? '它通过 AI、网络结构、任务机制、贡献身份与价值层的组合，让分散的信号能够逐步转化为可持续的集体行动。'
              : 'By combining AI, network structures, mission systems, contribution-based identity, and value layers, WAOC transforms fragmented signals into sustainable collective action.'}
          </p>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="civilization-layer">
        <SectionBlock
          eyebrow={isZh ? '文明层' : 'Civilization Layer'}
          title={isZh ? 'WAOC 的哲学核心' : 'The Philosophical Core of WAOC'}
        >
          <p>
            {isZh
              ? 'WAOC 的底层并不仅仅是技术架构，它建立在一组更深层的原则之上。'
              : 'WAOC is not only rooted in technical architecture. It is grounded in a deeper set of principles.'}
          </p>

          <div className="rounded-[28px] border border-orange-300/20 bg-orange-500/10 px-6 py-5 text-base font-medium leading-8 text-orange-100 md:text-lg">
            {isZh
              ? '爱 · 和平 · 团结 · 意识 · 人类命运共同体'
              : 'Love · Peace · Unity · Consciousness · A Shared Destiny of Humanity'}
          </div>

          <p>
            {isZh
              ? '这些不是装饰性的口号，而是 WAOC 之所以存在的根本原因。因为在一个被竞争、分裂、噪音与短期激励主导的世界中，仅靠效率无法建立真正持久的协调。'
              : 'These are not decorative slogans. They are the reason WAOC exists. In a world shaped by competition, fragmentation, noise, and short-term incentives, efficiency alone cannot create durable coordination.'}
          </p>

          <p>
            {isZh
              ? 'WAOC 试图让系统重新回到这些原则之上，使协调不仅高效，而且有方向；不仅能执行，而且有意义。'
              : 'WAOC attempts to realign systems with these principles, so that coordination becomes not only efficient, but directional; not only executable, but meaningful.'}
          </p>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="ecosystem-overview">
        <SectionBlock
          eyebrow={isZh ? '生态概览' : 'Ecosystem Overview'}
          title={isZh ? 'WAOC 生态的整体结构' : 'The WAOC Ecosystem Structure'}
        >
          <p>
            {isZh
              ? 'WAOC 由多个层级与模块构成。它不是把不同工具简单拼接在一起，而是让每个部分围绕“协调”这一核心问题协同工作。'
              : 'WAOC is composed of multiple layers and modules. It is not a loose bundle of tools, but a coordinated system in which every component addresses the core problem of coordination.'}
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard
              title={isZh ? 'OneAI' : 'OneAI'}
              body={
                isZh
                  ? '智能引擎。将想法、叙事、任务和输入转化为结构化输出，推动认知、内容与执行。'
                  : 'The intelligence engine. It turns ideas, narratives, tasks, and raw input into structured outputs that drive cognition, content, and execution.'
              }
            />
            <InfoCard
              title={isZh ? 'OneField' : 'OneField'}
              body={
                isZh
                  ? '协调网络。把信号、关系、对话与贡献转化为可见网络、结构化记忆和动态拓扑。'
                  : 'The coordination network. It transforms signals, relationships, conversations, and contributions into visible networks, structured memory, and living topology.'
              }
            />
            <InfoCard
              title={isZh ? 'OneMission' : 'OneMission'}
              body={
                isZh
                  ? '执行层。用户在这里完成任务、形成贡献、积累声誉，并逐步建立自身在网络中的身份。'
                  : 'The execution layer. Here users complete missions, generate contributions, accumulate reputation, and gradually build identity within the network.'
              }
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <InfoCard
              title={isZh ? 'Identity Layer' : 'Identity Layer'}
              body={
                isZh
                  ? '身份层基于贡献形成，而不是预先分配。用户通过参与建立可持续的声誉、权重与协调能力。'
                  : 'Identity in WAOC emerges from contribution rather than being assigned in advance. Through participation, users build durable reputation, weight, and coordination capacity.'
              }
            />
            <InfoCard
              title={isZh ? 'Value Layer' : 'Value Layer'}
              body={
                isZh
                  ? '价值层通过 token、激励与网络行为之间的关系，让价值不再仅来自投机，而来自对齐后的协调与行动。'
                  : 'The value layer aligns tokens, incentives, and network behavior, so that value no longer comes only from speculation, but from aligned coordination and action.'
              }
            />
          </div>
        </SectionBlock>
      </SectionShell>
      <SectionShell id="ecosystem-diagram">
  <WaocEcosystemSystemDiagram />
</SectionShell>
      <SectionShell id="architecture">
        <SectionBlock
          eyebrow={isZh ? '系统结构' : 'System Architecture'}
          title={isZh ? '一个分层运行的协调系统' : 'A Layered Coordination System'}
        >
          <p>
            {isZh
              ? 'WAOC 的系统结构可以理解为一个分层网络：上层由文明原则提供方向，中层由协调机制和网络系统承接，底层由任务、身份与价值进行实际运作。'
              : 'WAOC can be understood as a layered network: the upper layer provides direction through civilizational principles, the middle layer operates through coordination systems and network structures, and the lower layer is expressed through missions, identity, and value.'}
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard
              title={isZh ? '文明层' : 'Civilization Layer'}
              body={
                isZh
                  ? '定义 WAOC 的方向与存在意义：爱、和平、团结、意识、人类命运共同体。'
                  : 'Defines the direction and reason for WAOC’s existence: love, peace, unity, consciousness, and a shared destiny of humanity.'
              }
            />
            <InfoCard
              title={isZh ? '协调层' : 'Coordination Layer'}
              body={
                isZh
                  ? '通过 OneField 连接关系，通过 OneAI 生成结构，通过 OneMission 落地行动。'
                  : 'Connects relationships through OneField, generates structure through OneAI, and turns coordination into action through OneMission.'
              }
            />
            <InfoCard
              title={isZh ? '身份与价值层' : 'Identity & Value Layer'}
              body={
                isZh
                  ? '让贡献转化为身份，让身份形成权重，让价值与行动重新建立联系。'
                  : 'Turns contribution into identity, identity into weight, and reconnects value with meaningful action.'
              }
            />
          </div>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="coordination-model">
        <SectionBlock
          eyebrow={isZh ? '协调模型' : 'Coordination Model'}
          title={isZh ? 'WAOC 如何运作' : 'How WAOC Operates'}
        >
          <p>
            {isZh
              ? 'WAOC 的核心不是单个功能，而是一个协调模型。这个模型定义了系统如何从信号走向价值。'
              : 'The core of WAOC is not a single feature, but a coordination model. This model defines how the system moves from signal to value.'}
          </p>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 text-base leading-8 text-white md:text-lg">
            {isZh
              ? '信号 → 协调 → 行动 → 贡献 → 身份 → 价值'
              : 'Signal → Coordination → Action → Contribution → Identity → Value'}
          </div>

          <p>
            {isZh
              ? '信号来自用户、系统、社交行为或 AI 输出；协调机制将这些信号整理为可执行结构；行动通过任务与行为发生；贡献被记录；身份从贡献中浮现；价值则在长期中由这些对齐后的行为产生。'
              : 'Signals originate from users, systems, social behavior, or AI output. Coordination mechanisms structure these signals into executable paths. Actions take place through missions and participation. Contributions are recorded. Identity emerges from contribution. Value is generated over time from these aligned behaviors.'}
          </p>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="why-waoc-exists">
        <SectionBlock
          eyebrow={isZh ? '存在原因' : 'Why WAOC Exists'}
          title={isZh ? '为什么 WAOC 必须存在' : 'Why WAOC Must Exist'}
        >
          <p>
            {isZh
              ? '现代世界并不缺乏信息、工具或表达能力。真正缺乏的是协调。人们每天都在交流、发布、反应，但这些行为很少能够形成持续、可验证、可叠加的行动结构。'
              : 'The modern world does not lack information, tools, or expressive capacity. What it lacks is coordination. People communicate, post, and react every day, but these behaviors rarely form durable, verifiable, and compounding structures of action.'}
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            <InfoCard
              title={isZh ? '信息碎片化' : 'Fragmented Information'}
              body={
                isZh
                  ? '信号很多，但意义很少。大量信息存在，却缺乏可对齐的结构。'
                  : 'Signals are abundant, but meaning is weak. Information exists everywhere, yet lacks structures for alignment.'
              }
            />
            <InfoCard
              title={isZh ? '社群碎片化' : 'Fragmented Communities'}
              body={
                isZh
                  ? '人们可以聚集，却难以形成真正的协同行动。'
                  : 'People can gather, but struggle to coordinate into meaningful collective action.'
              }
            />
            <InfoCard
              title={isZh ? '行动碎片化' : 'Fragmented Action'}
              body={
                isZh
                  ? '努力存在，但无法叠加，最终难以形成真实影响。'
                  : 'Effort exists, but does not compound, and therefore fails to create real impact.'
              }
            />
          </div>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="the-shift">
        <SectionBlock
          eyebrow={isZh ? '核心转变' : 'The Shift'}
          title={isZh ? '从连接走向协调' : 'From Connection to Coordination'}
        >
          <p>
            {isZh
              ? 'WAOC 建立在一个根本转变之上：从 connection 走向 coordination。连接本就存在，真正缺失的是如何把已有连接转化为有意义的、可持续的行动。'
              : 'WAOC is built on a fundamental shift: from connection to coordination. Connection already exists. What is missing is the ability to turn existing connections into meaningful and sustainable action.'}
          </p>

          <p>
            {isZh
              ? '这也是 WAOC 与普通社群、内容平台或工具型产品的区别。WAOC 不只是让人们说话，而是让人们形成结构、形成行动、形成身份，并最终形成价值。'
              : 'This is what distinguishes WAOC from conventional communities, content platforms, or utility products. WAOC does not simply let people speak; it enables structure, action, identity, and ultimately value to emerge.'}
          </p>
        </SectionBlock>
      </SectionShell>

      <SectionShell id="vision" className="pb-24">
        <SectionBlock
          eyebrow={isZh ? '愿景' : 'Vision'}
          title={isZh ? 'WAOC 的长期目标' : 'The Long-Term Vision of WAOC'}
        >
          <p>
            {isZh
              ? 'WAOC 是一个关于人类协调的长期实验。它的目标不是争夺注意力，而是在一个更高层次上重新建立人与人、人与系统、行动与价值之间的关系。'
              : 'WAOC is a long-term experiment in human coordination. Its goal is not to capture attention, but to rebuild relationships between people, systems, action, and value at a higher level of order.'}
          </p>

          <p>
            {isZh
              ? '它试图构建一个真正的协调层：在这里，智能能够被组织，贡献能够被记录，身份能够被形成，价值能够被对齐，而文明原则能够持续提供方向。'
              : 'It seeks to build a true coordination layer: a place where intelligence can be organized, contribution can be recorded, identity can be formed, value can be aligned, and civilizational principles can continuously provide direction.'}
          </p>

          <div className="rounded-[28px] border border-orange-300/20 bg-orange-500/10 px-6 py-5 text-base leading-8 text-orange-100 md:text-lg">
            {isZh
              ? 'WAOC 的目标，不是获取注意力，而是让行动真正对齐。'
              : 'The goal of WAOC is not to capture attention, but to align action.'}
          </div>
        </SectionBlock>
      </SectionShell>
    </>
  );
}