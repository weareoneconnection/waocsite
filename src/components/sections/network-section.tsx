'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { officialLinks } from '@/content/site';
import { SectionShell } from '@/components/ui/section-shell';
import { SectionTitle } from '@/components/ui/section-title';
import { useLanguage } from '@/components/ui/language-provider';

type LeaderboardRow = {
  wallet: string;
  points: number;
  completed?: number;
  missions?: number;
  updatedAt?: number;
};

type LeaderboardResponse = {
  ok: boolean;
  rows?: LeaderboardRow[];
  participants?: number;
  top1?: LeaderboardRow | null;
  error?: string;
};

type RawFieldNode = {
  id?: string | number;
  label?: string;
  name?: string;
  displayName?: string;
  score?: number;
  trust?: number;
  connections?: number;
  role?: string;
  type?: string;
  strength?: number;
};

type RawFieldEdge = {
  id?: string | number;
  source?: string | number;
  target?: string | number;
  fromBuilderId?: string | number;
  toBuilderId?: string | number;
  from?: string | number;
  to?: string | number;
  weight?: number;
  strength?: number;
};

type FieldStats = {
  builders: number;
  signals: number;
  links: number;
  circles: number;
};

type FieldPreviewResponse = {
  ok: boolean;
  stats?: FieldStats;
  graph?: {
    nodes?: RawFieldNode[];
    edges?: RawFieldEdge[];
    stats?: {
      totalBuilders?: number;
      totalEdges?: number;
    };
  };
  feed?: Array<Record<string, unknown>>;
  error?: string;
};

type GraphNodeView = {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  ring?: boolean;
};

type GraphEdgeView = {
  id: string;
  from: string;
  to: string;
  strength?: number;
};

function maskWallet(wallet?: string) {
  const v = (wallet || '').trim();
  if (!v) return '—';
  if (v.length <= 10) return v;
  return `${v.slice(0, 4)}...${v.slice(-4)}`;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function cutLabel(text?: string, max = 16) {
  const v = (text || '').trim();
  if (v.length <= max) return v;
  return `${v.slice(0, max).trim()}…`;
}

function compactNumber(value?: number) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '—';
  if (value >= 1000) {
    const k = value / 1000;
    return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}K`;
  }
  return String(Math.trunc(value));
}

function buildPreviewGraph(graph?: FieldPreviewResponse['graph'] | null): {
  nodes: GraphNodeView[];
  edges: GraphEdgeView[];
} {
  const rawNodes: RawFieldNode[] = Array.isArray(graph?.nodes) ? graph!.nodes! : [];
  const rawEdges: RawFieldEdge[] = Array.isArray(graph?.edges) ? graph!.edges! : [];

  if (!rawNodes.length) {
    return {
      nodes: [{ id: 'field', label: 'Field', x: 50, y: 50, size: 18, ring: true }],
      edges: [],
    };
  }

  const normalizedNodes = rawNodes.map((n, i) => ({
    id: String(n.id || `n-${i}`),
    label: n.label || n.name || n.displayName || `Node ${i + 1}`,
    score: Number(n.score ?? 0),
    trust: Number(n.trust ?? 0),
    connections: Number(n.connections ?? 0),
  }));

  const normalizedEdges = rawEdges.map((e, i) => ({
    id: String(e.id || `e-${i}`),
    from: String(e.source || e.fromBuilderId || e.from || ''),
    to: String(e.target || e.toBuilderId || e.to || ''),
    strength: Number(e.weight ?? e.strength ?? 0),
  }));

  const degreeMap = new Map<string, number>();
  for (const node of normalizedNodes) degreeMap.set(node.id, 0);

  for (const edge of normalizedEdges) {
    if (degreeMap.has(edge.from)) degreeMap.set(edge.from, (degreeMap.get(edge.from) || 0) + 1);
    if (degreeMap.has(edge.to)) degreeMap.set(edge.to, (degreeMap.get(edge.to) || 0) + 1);
  }

  const rankedNodes = normalizedNodes
    .map((n) => ({
      ...n,
      importance:
        n.score * 0.42 +
        n.trust * 0.18 +
        n.connections * 10 +
        (degreeMap.get(n.id) || 0) * 12,
    }))
    .sort((a, b) => b.importance - a.importance);

  const selectedNodes = rankedNodes.slice(0, 10);
  const selectedIds = new Set(selectedNodes.map((n) => n.id));

  let selectedEdges = normalizedEdges
    .filter((e) => selectedIds.has(e.from) && selectedIds.has(e.to))
    .sort((a, b) => b.strength - a.strength)
    .slice(0, 12);

  const connectedIds = new Set<string>();
  for (const e of selectedEdges) {
    connectedIds.add(e.from);
    connectedIds.add(e.to);
  }

  const finalNodes = selectedNodes
    .filter((n, i) => connectedIds.has(n.id) || i < 6)
    .slice(0, 9);

  const finalIds = new Set(finalNodes.map((n) => n.id));

  selectedEdges = selectedEdges
    .filter((e) => finalIds.has(e.from) && finalIds.has(e.to))
    .slice(0, 10);

  const localDegree = new Map<string, number>();
  for (const n of finalNodes) localDegree.set(n.id, 0);
  for (const e of selectedEdges) {
    localDegree.set(e.from, (localDegree.get(e.from) || 0) + 1);
    localDegree.set(e.to, (localDegree.get(e.to) || 0) + 1);
  }

  const centerNode =
    finalNodes
      .slice()
      .sort((a, b) => {
        const da = localDegree.get(a.id) || 0;
        const db = localDegree.get(b.id) || 0;
        if (db !== da) return db - da;
        return b.importance - a.importance;
      })[0] || finalNodes[0];

  const satellites = finalNodes.filter((n) => n.id !== centerNode.id);

  const positioned = new Map<string, GraphNodeView>();

  positioned.set(centerNode.id, {
    id: centerNode.id,
    label: cutLabel(centerNode.label, 18),
    x: 44,
    y: 54,
    size: 18,
    ring: true,
  });

  const orbitSlots = [
    { x: 28, y: 30 },
    { x: 42, y: 22 },
    { x: 58, y: 26 },
    { x: 74, y: 32 },
    { x: 76, y: 54 },
    { x: 66, y: 72 },
    { x: 46, y: 78 },
    { x: 26, y: 68 },
  ];

  const sortedSatellites = satellites.sort((a, b) => {
    const edgeA = selectedEdges.find(
      (e) =>
        (e.from === centerNode.id && e.to === a.id) ||
        (e.to === centerNode.id && e.from === a.id)
    );
    const edgeB = selectedEdges.find(
      (e) =>
        (e.from === centerNode.id && e.to === b.id) ||
        (e.to === centerNode.id && e.from === b.id)
    );
    return (edgeB?.strength || 0) - (edgeA?.strength || 0);
  });

  sortedSatellites.forEach((node, i) => {
    const slot = orbitSlots[i % orbitSlots.length];
    const degree = localDegree.get(node.id) || 0;
    const size = clamp(10 + degree * 1.8 + Math.round((node.score || 50) / 18), 10, 15);

    positioned.set(node.id, {
      id: node.id,
      label: cutLabel(node.label, 16),
      x: slot.x,
      y: slot.y,
      size,
      ring: degree >= 3 || (node.trust ?? 0) >= 85,
    });
  });

  const nudge = (id: string, dx: number, dy: number) => {
    const node = positioned.get(id);
    if (!node) return;
    node.x = clamp(node.x + dx, 16, 84);
    node.y = clamp(node.y + dy, 18, 82);
  };

  for (const edge of selectedEdges) {
    const from = positioned.get(edge.from);
    const to = positioned.get(edge.to);
    if (!from || !to) continue;

    const strength = edge.strength || 60;
    if (strength >= 80) {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      nudge(edge.from, dx * 0.02, dy * 0.02);
      nudge(edge.to, -dx * 0.02, -dy * 0.02);
    }
  }

  return {
    nodes: Array.from(positioned.values()),
    edges: selectedEdges.map((e) => ({
      id: e.id,
      from: e.from,
      to: e.to,
      strength: e.strength || 60,
    })),
  };
}

function SignalGraph({
  nodes,
  edges,
}: {
  nodes: GraphNodeView[];
  edges: GraphEdgeView[];
}) {
  const map = new Map<string, GraphNodeView>(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.35)] md:h-[440px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(251,191,36,0.10)" />
            <stop offset="50%" stopColor="rgba(251,191,36,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>
          <filter id="previewEdgeBlur">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {edges.map((edge) => {
          const from = map.get(edge.from);
          const to = map.get(edge.to);
          if (!from || !to) return null;

          const strength = edge.strength || 60;
          const lineWidth = 1.2 + (strength / 100) * 2.8;
          const opacity = 0.18 + (strength / 100) * 0.62;

          return (
            <g key={edge.id}>
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="rgba(251,191,36,0.22)"
                strokeWidth={lineWidth + 4}
                strokeLinecap="round"
                opacity={opacity * 0.55}
                filter="url(#previewEdgeBlur)"
              />
              <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="url(#edgeGlow)"
                strokeWidth={lineWidth}
                strokeLinecap="round"
                opacity={opacity}
              />
            </g>
          );
        })}
      </svg>

      {nodes.map((node) => {
        const isPrimary = !!node.ring;
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div
              className={`relative flex items-center justify-center rounded-full border ${
                isPrimary
                  ? 'border-amber-300/70 bg-black/80'
                  : 'border-white/15 bg-black/68'
              }`}
              style={{
                width: `${node.size * 3.2}px`,
                height: `${node.size * 3.2}px`,
                boxShadow: isPrimary
                  ? '0 0 54px rgba(251,191,36,0.30)'
                  : '0 0 22px rgba(255,255,255,0.07)',
              }}
            >
              <span
                className="absolute rounded-full bg-gradient-to-br from-amber-200/65 to-amber-500/30"
                style={{
                  width: `${Math.max(10, node.size * 1.05)}px`,
                  height: `${Math.max(10, node.size * 1.05)}px`,
                }}
              />
              {isPrimary ? (
                <>
                  <span className="absolute inset-[-8px] rounded-full border border-amber-300/18 animate-ping" />
                  <span className="absolute inset-[-16px] rounded-full border border-amber-300/10" />
                </>
              ) : null}
            </div>

            <div className="mt-3 whitespace-nowrap text-center text-[11px] uppercase tracking-[0.16em] text-white/68">
              {node.label}
            </div>
          </div>
        );
      })}

    </div>
  );
}

function useNetworkData() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardRow[]>([]);
  const [leaderboardParticipants, setLeaderboardParticipants] = useState(0);
  const [field, setField] = useState<FieldPreviewResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const [leaderboardRes, fieldRes] = await Promise.all([
          fetch('/api/network/leaderboard', { cache: 'no-store' }),
          fetch('/api/network/field', { cache: 'no-store' }),
        ]);

        const leaderboardJson: LeaderboardResponse = await leaderboardRes.json();
        const fieldJson: FieldPreviewResponse = await fieldRes.json();

        if (!active) return;

        setLeaderboard(Array.isArray(leaderboardJson.rows) ? leaderboardJson.rows.slice(0, 5) : []);
        setLeaderboardParticipants(leaderboardJson.participants ?? 0);
        setField(fieldJson);
      } catch (error) {
        console.error('Failed to load network data', error);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  return {
    leaderboard,
    leaderboardParticipants,
    field,
    loading,
  };
}

export function NetworkSection() {
  const { dict, lang } = useLanguage();
  const isZh = lang === 'zh';
  const { leaderboard, leaderboardParticipants, field, loading } = useNetworkData();

  const topLeader = leaderboard[0];

  const stats = useMemo(() => {
    return (
      field?.stats ?? {
        builders: 0,
        signals: 0,
        links: 0,
        circles: 0,
      }
    );
  }, [field]);

  const previewGraph = useMemo(() => {
    return buildPreviewGraph(field?.graph ?? null);
  }, [field]);

  const leaderboardCards = [
    {
      label: 'Contributors',
      value: leaderboardParticipants || '—',
      helper: isZh ? '排行榜总参与者' : 'Leaderboard participants',
    },
    {
      label: 'Top Reputation',
      value: topLeader ? compactNumber(topLeader.points) : '—',
      helper: isZh ? '最高积分' : 'Top points',
    },
    {
      label: 'Leader',
      value: topLeader ? maskWallet(topLeader.wallet) : '—',
      helper: isZh ? '当前领先钱包' : 'Top wallet',
    },
    {
      label: 'Missions',
      value: topLeader ? (topLeader.completed ?? topLeader.missions ?? 0) : '—',
      helper: isZh ? '头部完成任务数' : 'Top completed missions',
    },
  ];

  const fieldCards = [
    {
      label: isZh ? 'Builders' : 'Builders',
      value: stats.builders,
      helper: isZh ? '识别节点' : 'recognized nodes',
    },
    {
      label: isZh ? 'Signals' : 'Signals',
      value: stats.signals,
      helper: isZh ? '实时社交输入' : 'live social inputs',
    },
    {
      label: isZh ? 'Links' : 'Links',
      value: stats.links,
      helper: isZh ? '结构化关系' : 'structured relations',
    },
    {
      label: isZh ? 'Circles' : 'Circles',
      value: stats.circles,
      helper: isZh ? '可见社群' : 'visible clusters',
    },
  ];

  return (
    <SectionShell id="network">
      <SectionTitle
        eyebrow="Network"
        title={dict.home.networkTitle}
        body={dict.home.networkCopy}
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.02fr_1fr]">
        <div
          id="leaderboard"
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-orange-300/80">
                One Mission
              </div>
              <h3 className="mt-2 text-3xl font-semibold text-white">
                {isZh ? '参与正在形成声誉' : 'Participation becomes reputation'}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                {isZh
                  ? '官网展示生态参与的可见证据：贡献者、积分、任务完成量与排行榜预览。'
                  : 'A proof layer for visible participation across the ecosystem: contributors, points, mission activity, and the leaderboard preview.'}
              </p>
            </div>

            <Link
              href={officialLinks.oneMission}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
            >
              {isZh ? '打开 One Mission' : 'Open One Mission'}
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {leaderboardCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[28px] border border-white/10 bg-black/20 p-5"
              >
                <div className="text-sm text-white/55">{card.label}</div>
                <div className="mt-3 text-4xl font-semibold text-white">{card.value}</div>
                <div className="mt-2 text-sm text-white/45">{card.helper}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-4">
            <div className="mb-3 text-lg font-medium text-white">
              {isZh ? '排行榜预览（Top 5）' : 'Leaderboard Preview (Top 5)'}
            </div>

            <div className="space-y-3">
              {loading ? (
                <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-6 text-sm text-white/55">
                  {isZh ? '正在加载真实排行榜数据...' : 'Loading live leaderboard data...'}
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-6 text-sm text-white/55">
                  {isZh ? '暂无排行榜数据' : 'No leaderboard data available'}
                </div>
              ) : (
                leaderboard.map((item, index) => (
                  <div
                    key={`${item.wallet}-${index}`}
                    className="grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-2xl border border-white/6 bg-white/[0.02] px-4 py-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-white/72">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-white">{maskWallet(item.wallet)}</div>
                      <div className="text-sm text-white/45">
                        {compactNumber(item.points)} pts · {item.completed ?? item.missions ?? 0} missions
                      </div>
                    </div>
                    <Link
                      href={officialLinks.oneMission}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {isZh ? '查看 →' : 'View →'}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div
          id="map"
          className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,166,59,0.2),transparent_35%),rgba(255,255,255,0.02)] p-6"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-orange-300/80">
                OneField
              </div>
              <h3 className="mt-2 text-3xl font-semibold text-white">
                {isZh ? '为活网络建立记忆' : 'Memory for a living network'}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {isZh
                  ? 'OneField 把对话、贡献与社交信号转化为结构化记忆、可见关系与协调行动。'
                  : 'OneField transforms conversation, contribution, and social signal into structured memory, visible relationships, and coordinated action.'}
              </p>
            </div>

            <Link
              href={officialLinks.oneField}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
            >
              {isZh ? '打开 OneField' : 'Open OneField'}
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fieldCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[28px] border border-white/10 bg-black/20 p-5"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                  {card.label}
                </div>
                <div className="mt-3 text-4xl font-semibold text-white">{card.value}</div>
                <div className="mt-2 text-sm text-white/45">{card.helper}</div>
              </div>
            ))}
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-black/20 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,190,80,0.16),transparent_40%)]" />

            <div className="relative">
              {loading ? (
                <div className="flex h-[420px] items-center justify-center text-sm text-white/55">
                  {isZh ? '正在加载真实网络数据...' : 'Loading live network data...'}
                </div>
              ) : (
                <SignalGraph nodes={previewGraph.nodes} edges={previewGraph.edges} />
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="rounded-full border border-white/10 bg-black/55 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/65">
                {isZh ? '网络预览' : 'Network Preview'}
              </div>
              <div className="rounded-full border border-orange-300/20 bg-orange-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-orange-100">
                {isZh ? '实时拓扑' : 'Live Topology'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}