// Data: metadata for the seven DCP Journey articles.
// Ported verbatim from the `ARTICLES` map embedded in the design export's
// <script type="text/x-dc"> block, so titles/dates/read-times match the
// design-tool source exactly. seoTitle/seoDescription/focusKeyword were
// added from the SEO keyword audit (unfurl-systems-seo-keyword data.csv) —
// each part maps to its own real topic instead of sharing one generic
// "DCP Framework" placeholder.
export interface ArticleMeta {
  part: number
  title: string
  subtitle: string
  date: string
  readTime: string
  hasRelatedLab: boolean
  seoTitle: string
  seoDescription: string
}

export const ARTICLES: Record<number, ArticleMeta> = {
  1: {
    part: 1,
    title: 'The Missing Harness',
    subtitle:
      'Every major computing shift has created a new harness that makes raw capability understandable and governable. AI is becoming a new kind of consumer of capabilities, and the harness we give it today is still fragmented.',
    date: '1 August 2026',
    readTime: '10 min',
    hasRelatedLab: false,
    seoTitle: 'The Missing Harness: Why AI Needs Context Engineering | DCP Journey Part 1',
    seoDescription:
      'Every computing era had a harness. Unfurl Systems on why AI needs a new one — and how context engineering for components becomes the missing layer.',
  },
  2: {
    part: 2,
    title: 'The Baseline Shift',
    subtitle:
      'The panic is not that AI can write code. The real shift is that software work is moving from building isolated components to assembling governable systems.',
    date: '1 August 2026',
    readTime: '9 min',
    hasRelatedLab: false,
    seoTitle: 'The Baseline Shift: AI-First Software Development | DCP Journey Part 2',
    seoDescription:
      'AI-first software development is moving the baseline from writing components to assembling governed systems. Part 2 of Unfurl Systems’ DCP Journey.',
  },
  3: {
    part: 3,
    title: 'The Capability Contract',
    subtitle:
      'DCP gives components a way to describe their domain, boundaries, needs, offers, conflicts, operational ports, and faults — a capability contract for an AI-native world.',
    date: '1 August 2026',
    readTime: '11 min',
    hasRelatedLab: true,
    seoTitle: 'The Capability Contract: Introducing DCP | DCP Journey Part 3',
    seoDescription:
      'Unfurl Systems introduces the Domain Claim Protocol (DCP): claims, refusals, negotiation, and the three planes that keep AI agent orchestration out of the runtime hot path.',
  },
  4: {
    part: 4,
    title: 'Draft Spec and Discussion',
    subtitle:
      'A public-review draft for an AI-native capability contract, published first, explained next, and opened for contribution after that.',
    date: '1 August 2026',
    readTime: '14 min',
    hasRelatedLab: true,
    seoTitle: 'DCP Draft Spec and Discussion | Domain Claim Protocol Part 4',
    seoDescription:
      'The public working draft of the Domain Claim Protocol: core primitives, the claim schema, aggregation, and open questions for the AI agent framework community.',
  },
  5: {
    part: 5,
    title: 'The Human Harness',
    subtitle:
      'If DCP is the AI harness, there must also be a human harness — the surface through which people inspect, manipulate, validate, and govern AI-native assemblies without losing the underlying truth.',
    date: '1 August 2026',
    readTime: '10 min',
    hasRelatedLab: false,
    seoTitle: 'The Human Harness: AI Agent Governance UI | DCP Journey Part 5',
    seoDescription:
      'Why AI-native systems still need a human-in-the-loop review layer. Unfurl Systems introduces Unfurl Studio and the case for AI agent governance.',
  },
  6: {
    part: 6,
    title: 'Aggregation Is Abstraction',
    subtitle:
      'Aggregation is not the act of piling capabilities together. It is the act of giving a collection a new, meaningful surface — the scaling principle behind homes, colonies, and cities.',
    date: '1 August 2026',
    readTime: '12 min',
    hasRelatedLab: false,
    seoTitle: 'Aggregation Is Abstraction: Scaling AI Agent Orchestration | DCP Journey Part 6',
    seoDescription:
      'How intelligent systems scale from a single component to homes, colonies, and cities. Unfurl Systems on semantic zoom and aggregate capabilities.',
  },
  7: {
    part: 7,
    title: 'The Living Assembly',
    subtitle:
      'A system is not complete when it is assembled. It becomes real when humans can load it, observe it, stress it, trace it, and safely evolve it.',
    date: '1 August 2026',
    readTime: '12 min',
    hasRelatedLab: false,
    seoTitle: 'The Living Assembly: Fault Tolerance for AI Systems | DCP Journey Part 7',
    seoDescription:
      'Loading, monitoring, and evolving AI-native systems. Unfurl Systems on fault tolerance, observability, and safely evolving a running assembly.',
  },
}

export const ARTICLE_COUNT = 7
