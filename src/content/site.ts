export type Lang = 'en' | 'zh';

export const navItems = [
  {
    key: 'introduction',
    href: '/introduction',
    children: [
      { href: '/introduction', key: 'overview' },
      { href: '/introduction#why', key: 'why' },
      { href: '/introduction#principles', key: 'principles' },
    ],
  },
  {
    key: 'ecosystem',
    href: '/ecosystem',
    children: [
      { href: '/ecosystem#system-map', key: 'systemMap' },
      { href: '/ecosystem#products', key: 'products' },
      { href: '/ecosystem#layers', key: 'layers' },
    ],
  },
  {
    key: 'network',
    href: '/network',
    children: [
      { href: '/network#leaderboard', key: 'leaderboard' },
      { href: '/network#map', key: 'networkMap' },
      { href: '/network#flow', key: 'coordinationFlow' },
    ],
  },
  {
    key: 'participate',
    href: '/participate',
    children: [
      { href: '/participate#start', key: 'start' },
      { href: '/participate#paths', key: 'paths' },
      { href: '/participate#links', key: 'officialLinks' },
    ],
  },
  {
    key: 'resources',
    href: '/resources',
    children: [
      { href: '/resources#links', key: 'officialLinks' },
      { href: '/resources#faq', key: 'faq' },
      { href: '/resources#notes', key: 'notes' },
    ],
  },
] as const;

export const officialLinks = {
  oneField: 'https://onefield.vercel.app/',
  oneMission: 'https://one-mission.vercel.app/',
  oneAI: 'https://oneai.network',
  genesis: 'https://waoc-genesis-mint.vercel.app/',
  meditation: 'https://waoc-meditation-mvp-test.vercel.app/',
};

export const dictionaries = {
  en: {
    brand: 'We Are One Connection',
    actions: {
      verify: 'Verify Links',
      enter: 'Enter Ecosystem',
      open: 'Open',
      learnMore: 'Learn more',
      seeAll: 'See all',
      switchLang: '中文',
    },
    nav: {
      introduction: 'Introduction',
      ecosystem: 'Ecosystem',
      network: 'Network',
      participate: 'Participate',
      resources: 'Resources',
      overview: 'Overview',
      why: 'Why WAOC',
      principles: 'Principles',
      systemMap: 'System Map',
      products: 'Products',
      layers: 'Layers',
      leaderboard: 'Leaderboard',
      networkMap: 'Network Map',
      coordinationFlow: 'Coordination Flow',
      start: 'Start Here',
      paths: 'Participation Paths',
      officialLinks: 'Official Links',
      faq: 'FAQ',
      notes: 'Notes',
    },
    home: {
      badge: 'Official WAOC Gateway',
      title: 'WAOC is a long-term effort to restore trust, coordination, and human connection.',
      subtitle:
        'Through transparent and verifiable systems, WAOC aligns technology with human values over time.',
      helper: 'An official gateway to the WAOC ecosystem, its structure, and its verified entrances.',
      primary: 'Explore the ecosystem',
      secondary: 'Verify official links',
      whyTitle: 'Why WAOC exists',
      whyLead:
        'In a fragmented world, trust, coordination, and meaningful participation do not emerge automatically. WAOC exists to help restore them through systems that can be seen, understood, and verified.',
      whyCards: [
        {
          title: 'Trust needs verifiable systems',
          body: 'WAOC treats transparency and verifiability as the foundation for long-term trust.',
        },
        {
          title: 'Coordination needs shared structure',
          body: 'Without shared structure, signal becomes noise. WAOC creates systems that turn activity into alignment.',
        },
        {
          title: 'Connection needs meaningful participation',
          body: 'Human connection deepens when people can contribute, be recognized, and return over time.',
        },
      ],
      systemTitle: 'The WAOC ecosystem framework',
      systemCopy:
        'WAOC is not a single application. It is a living ecosystem where intelligence, participation, identity, memory, and value interact.',
      networkTitle: 'A living network',
      networkCopy:
        'Participation, memory, and coordination are already visible across the ecosystem.',
      entrancesTitle: 'Official ecosystem entrances',
      principlesTitle: 'What WAOC is built around',
      principles: ['Trust', 'Coordination', 'Human Connection', 'Verifiable Systems', 'Shared Destiny'],
      ctaTitle: 'Enter the ecosystem through official pathways.',
      ctaCopy: 'Use official links only when exploring or participating in WAOC.',
    },
    pages: {
      introduction: {
        title: 'Introduction',
        intro: 'WAOC is a long-term effort to restore trust, coordination, and human connection.',
      },
      ecosystem: {
        title: 'Ecosystem',
        intro: 'A structured ecosystem of intelligence, participation, memory, identity, and value.',
      },
      network: {
        title: 'Network',
        intro: 'A visible network of participation, memory, and coordination.',
      },
      participate: {
        title: 'Participate',
        intro: 'Different paths into the WAOC ecosystem, from contribution to exploration.',
      },
      resources: {
        title: 'Resources',
        intro: 'Official links, frequently asked questions, and verification notes.',
      },
    },
    footer: {
      tagline: 'Official WAOC ecosystem gateway.',
      caution: 'Always verify links before participating.',
    },
  },
  zh: {
    brand: '我们是一种连接',
    actions: {
      verify: '验证官方链接',
      enter: '进入生态',
      open: '打开',
      learnMore: '了解更多',
      seeAll: '查看全部',
      switchLang: 'EN',
    },
    nav: {
      introduction: '介绍',
      ecosystem: '生态',
      network: '网络',
      participate: '参与',
      resources: '资源',
      overview: '总览',
      why: '为什么是 WAOC',
      principles: '原则',
      systemMap: '系统图',
      products: '产品入口',
      layers: '层级结构',
      leaderboard: '排行榜',
      networkMap: '网络图',
      coordinationFlow: '协调流',
      start: '开始',
      paths: '参与路径',
      officialLinks: '官方链接',
      faq: '常见问题',
      notes: '说明',
    },
    home: {
      badge: 'WAOC 官方主站',
      title: 'WAOC 是一项长期努力，旨在恢复信任、协调与人类连接。',
      subtitle: '通过透明且可验证的系统，WAOC 让技术与人类价值在时间中逐步对齐。',
      helper: '这里是 WAOC 生态结构、核心理念与官方入口的总入口。',
      primary: '探索生态',
      secondary: '验证官方链接',
      whyTitle: '为什么 WAOC 存在',
      whyLead: '在一个日益碎片化的世界里，信任、协调与有意义的参与不会自动出现。WAOC 希望通过可见、可理解、可验证的系统，帮助它们重新形成。',
      whyCards: [
        {
          title: '信任需要可验证的系统',
          body: 'WAOC 把透明性与可验证性当作长期信任的基础。',
        },
        {
          title: '协调需要共享结构',
          body: '没有共享结构，信号就会变成噪音。WAOC 让活动沉淀为方向。',
        },
        {
          title: '连接需要有意义的参与',
          body: '当人们能够贡献、被识别、并持续返回时，连接才会真正加深。',
        },
      ],
      systemTitle: 'WAOC 生态框架',
      systemCopy: 'WAOC 不是单一应用，而是一个由智能、参与、身份、记忆与价值共同构成的活生态。',
      networkTitle: '一个活着的网络',
      networkCopy: '参与、记忆与协调，已经在生态中形成可见结构。',
      entrancesTitle: '官方生态入口',
      principlesTitle: 'WAOC 所围绕的核心',
      principles: ['信任', '协调', '人类连接', '可验证系统', '共同命运'],
      ctaTitle: '通过官方路径进入生态。',
      ctaCopy: '探索和参与 WAOC 时，请只使用官方链接。',
    },
    pages: {
      introduction: {
        title: '介绍',
        intro: 'WAOC 是一项长期努力，旨在恢复信任、协调与人类连接。',
      },
      ecosystem: {
        title: '生态',
        intro: '一个由智能、参与、记忆、身份与价值构成的结构化生态。',
      },
      network: {
        title: '网络',
        intro: '一个可被观察的参与、记忆与协调网络。',
      },
      participate: {
        title: '参与',
        intro: '进入 WAOC 生态的不同路径，从贡献到探索。',
      },
      resources: {
        title: '资源',
        intro: '官方链接、常见问题与验证说明。',
      },
    },
    footer: {
      tagline: 'WAOC 官方生态入口。',
      caution: '参与前请先验证官方链接。',
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Lang];
