// Data: metadata for the seven DCP Journey articles.
// Ported verbatim from the `ARTICLES` map embedded in the design export's
// <script type="text/x-dc"> block, so titles/dates/read-times match the
// design-tool source exactly.
export interface ArticleMeta {
  part: number
  title: string
  subtitle: string
  date: string
  readTime: string
  hasRelatedLab: boolean
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
  },
  2: {
    part: 2,
    title: 'The Baseline Shift',
    subtitle:
      'The panic is not that AI can write code. The real shift is that software work is moving from building isolated components to assembling governable systems.',
    date: '1 August 2026',
    readTime: '9 min',
    hasRelatedLab: false,
  },
  3: {
    part: 3,
    title: 'The Capability Contract',
    subtitle:
      'DCP gives components a way to describe their domain, boundaries, needs, offers, conflicts, operational ports, and faults — a capability contract for an AI-native world.',
    date: '1 August 2026',
    readTime: '11 min',
    hasRelatedLab: true,
  },
  4: {
    part: 4,
    title: 'Draft Spec and Discussion',
    subtitle:
      'A public-review draft for an AI-native capability contract, published first, explained next, and opened for contribution after that.',
    date: '1 August 2026',
    readTime: '14 min',
    hasRelatedLab: true,
  },
  5: {
    part: 5,
    title: 'The Human Harness',
    subtitle:
      'If DCP is the AI harness, there must also be a human harness — the surface through which people inspect, manipulate, validate, and govern AI-native assemblies without losing the underlying truth.',
    date: '1 August 2026',
    readTime: '10 min',
    hasRelatedLab: false,
  },
  6: {
    part: 6,
    title: 'Aggregation Is Abstraction',
    subtitle:
      'Aggregation is not the act of piling capabilities together. It is the act of giving a collection a new, meaningful surface — the scaling principle behind homes, colonies, and cities.',
    date: '1 August 2026',
    readTime: '12 min',
    hasRelatedLab: false,
  },
  7: {
    part: 7,
    title: 'The Living Assembly',
    subtitle:
      'A system is not complete when it is assembled. It becomes real when humans can load it, observe it, stress it, trace it, and safely evolve it.',
    date: '1 August 2026',
    readTime: '12 min',
    hasRelatedLab: false,
  },
}

export const ARTICLE_COUNT = 7
