// Data: the "Beyond AI Prototypes" essay series, ported verbatim from the
// standalone blog/ Next.js app (data/posts.ts, lib/posts.ts, lib/slug.ts)
// so that app's repository can be retired once these pages live here.
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'quote'; text: string }
  | { type: 'code'; text: string }
  | { type: 'list'; items: string[] }

export type TrackName = 'Planning & Execution' | 'Architecture & Agents'

export interface Post {
  number: number
  slug: string
  title: string
  excerpt: string
  description: string
  date: string
  displayDate: string
  readingTime: string
  tags: string[]
  track: TrackName
  coverImage?: string
  coverAlt?: string
  body: ContentBlock[]
}

type EssaySeed = Omit<Post, 'body'> & {
  focus: string
  exampleTitle: string
  exampleBefore: string
  exampleAfter: string
  practicalMoves: string[]
}

const essaySeeds: EssaySeed[] = [
  {
    number: 1,
    slug: 'ai-changed-release-planning-more-than-coding',
    title: 'AI Has Changed Release Planning More Than Coding',
    excerpt: 'Why AI-first engineering needs stronger planning, testing, model flexibility, and governed workflows.',
    description:
      'AI accelerates implementation, but enterprise release readiness still depends on validation, NFRs, architecture, model flexibility, and governance. The bottleneck has moved - and so should planning.',
    date: '2026-05-03',
    displayDate: '03 May 2026',
    readingTime: '3 min read',
    tags: ['AI-first Engineering', 'Release Planning', 'Enterprise AI', 'Software Architecture'],
    track: 'Planning & Execution',
    coverImage: 'https://beyond-ai-prototypes.ghost.io/content/files/images/2026/05/post-01.png',
    coverAlt: 'AI Has Changed Release Planning More Than Coding - cover illustration',
    focus:
      'Most AI-first teams discover that faster implementation does not remove release risk. It moves planning attention toward validation, architecture, non-functional requirements, and operating confidence.',
    exampleTitle: 'Release planning with AI-generated changes',
    exampleBefore: 'Ship the generated workflow editor after implementation passes unit tests.',
    exampleAfter:
      'Ship only after tenant isolation tests, trace emission, prompt/version audit logs, rollback behavior, and failure-mode reviews are complete.',
    practicalMoves: [
      'Plan the production contract before implementation starts.',
      'Estimate validation and release-readiness work explicitly.',
      'Treat AI-generated code as a draft that must satisfy architecture and operating constraints.',
    ],
  },
  {
    number: 2,
    slug: 'ai-first-teams-need-testing-based-development',
    title: 'Why AI-First Teams Need Testing-Based Development',
    excerpt: 'When AI can generate code quickly, tests become the production contract.',
    description: 'When AI can generate code quickly, tests become the production contract.',
    date: '2026-05-04',
    displayDate: '04 May 2026',
    readingTime: '4 min read',
    tags: ['AI-first Engineering', 'Testing', 'Release Planning'],
    track: 'Planning & Execution',
    focus:
      'AI can produce plausible code quickly, so tests become the clearest way to describe what the system must actually guarantee in production.',
    exampleTitle: 'Acceptance criteria that carry production intent',
    exampleBefore: 'User can upload a document.',
    exampleAfter:
      'User can upload a document for the correct tenant, unauthorized access is rejected, duplicate retries are idempotent, trace IDs are emitted, and failed extraction is recoverable.',
    practicalMoves: [
      'Write acceptance criteria as production contracts.',
      'Include permissions, retries, observability, and recovery in test cases.',
      'Review generated tests for assumptions, not just coverage.',
    ],
  },
  {
    number: 3,
    slug: 'repository-ai-readiness-missing-input-estimation',
    title: 'Repository AI Readiness: The Missing Input in AI-Based Estimation',
    excerpt: 'AI productivity depends not only on the task, but on how prepared the repository is for AI-assisted change.',
    description:
      'AI productivity depends not only on the task, but on how prepared the repository is for AI-assisted change.',
    date: '2026-05-05',
    displayDate: '05 May 2026',
    readingTime: '4 min read',
    tags: ['AI-first Engineering', 'Estimation', 'Repository Readiness'],
    track: 'Planning & Execution',
    focus:
      'The same AI-assisted task can be simple in a well-structured repository and risky in a tangled one. Estimation has to account for repository readiness.',
    exampleTitle: 'Estimating a billing-rule change',
    exampleBefore: 'Ask AI to add a new billing rule and estimate one day because the diff looks small.',
    exampleAfter:
      'Check module boundaries, test fixtures, ownership, seed data, contract tests, and release toggles before estimating the change.',
    practicalMoves: [
      'Score repositories for test coverage, modularity, documentation, and local setup quality.',
      'Reserve time for repository cleanup when AI lacks reliable context.',
      'Use readiness as an input to release plans, not as a postmortem explanation.',
    ],
  },
  {
    number: 4,
    slug: 'hidden-problem-ai-design-applications-model-lock-in',
    title: 'The Hidden Problem in AI Design Applications: Model Lock-in',
    excerpt: 'When product quality depends on model behavior, provider flexibility becomes an architectural requirement.',
    description: 'When product quality depends on model behavior, provider flexibility becomes an architectural requirement.',
    date: '2026-05-06',
    displayDate: '06 May 2026',
    readingTime: '4 min read',
    tags: ['Model Flexibility', 'AI Product Architecture', 'Design Systems'],
    track: 'Planning & Execution',
    focus:
      'AI product quality can depend heavily on model behavior. If the product architecture assumes one provider forever, quality and cost decisions become trapped.',
    exampleTitle: 'Design generation provider choice',
    exampleBefore: 'Use one model directly from the layout-generation service.',
    exampleAfter:
      'Route layout, copy, and structured JSON generation through contracts so each task can move to the model that performs best under evaluation.',
    practicalMoves: [
      'Define model-facing contracts instead of provider-specific payloads in product code.',
      'Evaluate output quality per task, not just overall model preference.',
      'Keep prompts, schemas, and scoring rules versioned outside the provider integration.',
    ],
  },
  {
    number: 5,
    slug: 'designing-model-agnostic-ai-architecture',
    title: 'Designing a Model-Agnostic AI Architecture',
    excerpt: 'Provider abstraction is not enough. AI systems need contracts, evaluation, routing, and observability.',
    description: 'Provider abstraction is not enough. AI systems need contracts, evaluation, routing, and observability.',
    date: '2026-05-07',
    displayDate: '07 May 2026',
    readingTime: '5 min read',
    tags: ['Model Flexibility', 'Enterprise AI', 'Software Architecture'],
    track: 'Planning & Execution',
    focus:
      'A model-agnostic architecture is more than a wrapper. It needs stable input/output contracts, evaluation data, routing policy, and observability for model decisions.',
    exampleTitle: 'Switching summarization models safely',
    exampleBefore: 'Replace the provider SDK and hope summaries remain acceptable.',
    exampleAfter:
      'Run candidate models against a saved evaluation set, compare quality and latency, deploy behind routing policy, and monitor failures by model version.',
    practicalMoves: [
      'Separate product intent from provider-specific request formats.',
      'Create evaluation suites for critical AI behaviors.',
      'Log model, prompt, schema, latency, cost, and quality signals for each execution.',
    ],
  },
  {
    number: 6,
    slug: 'multi-agent-design-workflows-need-more-than-agents',
    title: 'Why Multi-Agent Design Workflows Need More Than Agents',
    excerpt: 'Agents can divide work, but quality needs constraints, review loops, scoring, and governance.',
    description: 'Agents can divide work, but quality needs constraints, review loops, scoring, and governance.',
    date: '2026-05-08',
    displayDate: '08 May 2026',
    readingTime: '4 min read',
    tags: ['Agents', 'Design Workflows', 'Governance'],
    track: 'Planning & Execution',
    focus:
      'Multi-agent systems do not become reliable just because work is split among specialized roles. They need constraints, review loops, scoring, and escalation.',
    exampleTitle: 'Agent review for generated designs',
    exampleBefore: 'Planner agent creates a page, designer agent improves it, exporter agent ships it.',
    exampleAfter:
      'Each step emits structured outputs, quality checks score hierarchy and accessibility, failed checks loop back, and publishing requires an approved workflow version.',
    practicalMoves: [
      'Make every agent boundary explicit with inputs, outputs, and failure behavior.',
      'Add quality gates that can reject or revise outputs.',
      'Keep human approval where business risk or brand quality requires it.',
    ],
  },
  {
    number: 7,
    slug: 'dag-based-orchestration-enterprise-ai-workflows',
    title: 'DAG-Based Orchestration for Enterprise AI Workflows',
    excerpt: 'Enterprise AI workflows need visible, versioned, auditable execution paths.',
    description: 'Enterprise AI workflows need visible, versioned, auditable execution paths.',
    date: '2026-05-09',
    displayDate: '09 May 2026',
    readingTime: '5 min read',
    tags: ['Workflow Orchestration', 'Enterprise AI', 'Auditability'],
    track: 'Architecture & Agents',
    focus:
      'Enterprise AI workflows need more structure than open-ended prompting. A DAG gives teams a visible, versioned, and auditable execution path.',
    exampleTitle: 'Claims intake workflow',
    exampleBefore: 'An agent reads an email, extracts data, calls tools, and decides the next action.',
    exampleAfter:
      'A DAG separates ingestion, classification, extraction, validation, human review, policy checks, and downstream updates with traceable node outputs.',
    practicalMoves: [
      'Represent critical workflows as explicit steps and dependencies.',
      'Version workflow definitions alongside prompts and schemas.',
      'Capture node-level inputs, outputs, retries, and approval decisions.',
    ],
  },
  {
    number: 8,
    slug: 'workflow-drafts-not-autonomous-chaos',
    title: 'Workflow Drafts, Not Autonomous Chaos',
    excerpt: 'AI should help design enterprise workflows, but approval and publishing must remain governed.',
    description: 'AI should help design enterprise workflows, but approval and publishing must remain governed.',
    date: '2026-05-10',
    displayDate: '10 May 2026',
    readingTime: '4 min read',
    tags: ['Workflow Drafts', 'Governance', 'Enterprise AI'],
    track: 'Architecture & Agents',
    focus:
      'AI can help teams draft workflows, but enterprise systems should distinguish between draft generation and approved execution.',
    exampleTitle: 'Drafting an onboarding workflow',
    exampleBefore: 'AI creates and immediately activates a new employee onboarding workflow.',
    exampleAfter:
      'AI proposes the workflow, owners review tool permissions and approval gates, security approves data access, and only a published version can run.',
    practicalMoves: [
      'Keep generated workflows in draft state by default.',
      'Require approvals before publishing executable workflows.',
      'Show diffs between workflow versions so reviewers can reason about risk.',
    ],
  },
  {
    number: 9,
    slug: 'tenant-boundaries-ai-agent-platforms',
    title: 'Tenant Boundaries in AI Agent Platforms',
    excerpt: 'Every prompt, tool call, document, trace, and workflow execution must respect tenant isolation.',
    description: 'Every prompt, tool call, document, trace, and workflow execution must respect tenant isolation.',
    date: '2026-05-11',
    displayDate: '11 May 2026',
    readingTime: '4 min read',
    tags: ['Tenant Isolation', 'Agents', 'Enterprise AI'],
    track: 'Architecture & Agents',
    focus:
      'AI agent platforms expand the number of surfaces where tenant isolation matters: prompts, retrieved context, tool calls, traces, files, and workflow state.',
    exampleTitle: 'Tenant-safe retrieval',
    exampleBefore: "Retrieve similar documents for the user's prompt from the shared vector index.",
    exampleAfter:
      'Filter retrieval by tenant and entitlement, verify tool calls carry tenant context, redact traces, and test that cross-tenant document IDs are rejected.',
    practicalMoves: [
      'Pass tenant context through every prompt, retrieval, tool, and trace boundary.',
      'Test cross-tenant denial paths as first-class acceptance criteria.',
      'Avoid shared indexes or logs unless isolation and redaction are designed in.',
    ],
  },
  {
    number: 10,
    slug: 'ai-first-release-planning-framework',
    title: 'Toward an AI-First Release Planning Framework',
    excerpt:
      'Planning should account for software complexity, model reliability, repository readiness, testing maturity, and production risk.',
    description:
      'Planning should account for software complexity, model reliability, repository readiness, testing maturity, and production risk.',
    date: '2026-05-12',
    displayDate: '12 May 2026',
    readingTime: '5 min read',
    tags: ['Release Planning', 'AI-first Engineering', 'Frameworks'],
    track: 'Architecture & Agents',
    focus:
      'AI-first release planning needs a framework that includes software complexity, model reliability, repository readiness, testing maturity, and production risk.',
    exampleTitle: 'Planning a customer-support AI feature',
    exampleBefore: 'Estimate the feature by UI screens, API work, and one model integration task.',
    exampleAfter:
      'Estimate data access, model evaluation, fallback paths, escalation, prompt governance, tenant isolation, observability, and post-release monitoring.',
    practicalMoves: [
      'Score work across product, software, model, data, and operating dimensions.',
      'Make release readiness visible before implementation starts.',
      'Use risk scores to decide where humans, tests, or staged rollout are required.',
    ],
  },
  {
    number: 11,
    slug: 'observability-auditability-ai-first-workflows',
    title: 'Observability and Auditability in AI-First Workflows',
    excerpt: 'If AI participates in decisions, teams must be able to trace what happened and why.',
    description: 'If AI participates in decisions, teams must be able to trace what happened and why.',
    date: '2026-05-13',
    displayDate: '13 May 2026',
    readingTime: '4 min read',
    tags: ['Observability', 'Auditability', 'Enterprise AI'],
    track: 'Architecture & Agents',
    focus:
      'When AI participates in decisions, teams need to reconstruct the path from input to output: prompts, model versions, retrieved context, tool calls, approvals, and errors.',
    exampleTitle: 'Investigating a wrong recommendation',
    exampleBefore: 'A user reports a bad recommendation and the team checks application logs.',
    exampleAfter:
      'The trace shows prompt version, model, retrieval results, policy checks, tool responses, confidence score, human override state, and final output.',
    practicalMoves: [
      'Emit trace IDs through AI calls, tools, queues, and workflow nodes.',
      'Store enough context to debug without leaking sensitive data.',
      'Design audit views for support, compliance, and engineering teams.',
    ],
  },
  {
    number: 12,
    slug: 'beyond-ai-prototypes-production-grade-ai-engineering',
    title: 'Beyond AI Prototypes: What Production-Grade AI Engineering Really Means',
    excerpt:
      'The closing essay. The future belongs to teams that can make AI reliable, governable, testable, and releasable.',
    description:
      'The closing essay. The future belongs to teams that can make AI reliable, governable, testable, and releasable.',
    date: '2026-05-14',
    displayDate: '14 May 2026',
    readingTime: '5 min read',
    tags: ['Production AI', 'AI-first Engineering', 'Enterprise AI'],
    track: 'Architecture & Agents',
    focus:
      'Production-grade AI engineering is the discipline of surrounding AI capability with the systems that make it reliable, governable, testable, observable, and releasable.',
    exampleTitle: 'Moving a demo into production',
    exampleBefore: 'The demo answers questions impressively against a curated document set.',
    exampleAfter:
      'The production system enforces permissions, evaluates answers, handles uncertainty, escalates risky cases, records traces, supports rollback, and monitors quality drift.',
    practicalMoves: [
      'Treat AI as part of a socio-technical production system.',
      'Invest in contracts, tests, governance, and operations as much as model integration.',
      'Measure success by release confidence and sustained trust, not demo quality alone.',
    ],
  },
]

function buildBody(seed: EssaySeed): ContentBlock[] {
  return [
    { type: 'paragraph', text: seed.focus },
    {
      type: 'paragraph',
      text: 'The important shift is to make production expectations visible before AI-assisted implementation begins. The more capable the generation step becomes, the more valuable clear contracts, review loops, and operating evidence become.',
    },
    { type: 'heading', level: 2, text: seed.exampleTitle },
    { type: 'paragraph', text: `Before: ${seed.exampleBefore}` },
    { type: 'paragraph', text: `After: ${seed.exampleAfter}` },
    { type: 'heading', level: 2, text: 'Practical moves' },
    { type: 'list', items: seed.practicalMoves },
    {
      type: 'quote',
      text: 'The demo proves possibility. The engineering system proves whether that possibility can be trusted.',
    },
    {
      type: 'paragraph',
      text: 'For enterprise teams, the goal is not to slow AI adoption down. It is to make the path from prototype to release explicit enough that speed does not come at the cost of control.',
    },
  ]
}

export const posts: Post[] = essaySeeds.map(({ focus, exampleTitle, exampleBefore, exampleAfter, practicalMoves, ...post }) => ({
  ...post,
  body: buildBody({ ...post, focus, exampleTitle, exampleBefore, exampleAfter, practicalMoves }),
}))

// SEO title/description per post, from the SEO keyword audit
// (unfurl-systems-seo-keyword data.csv) — each maps a real ranking
// opportunity onto its best-fit article rather than reusing one generic
// title site-wide.
export const SEO_BY_SLUG: Record<string, { title: string; description: string }> = {
  'ai-changed-release-planning-more-than-coding': {
    title: 'Why AI Changed Release Planning, Not Just Coding',
    description:
      "AI changed release planning, not just coding, and most teams haven't caught up. Unfurl Systems on what AI-first teams get wrong about shipping.",
  },
  'ai-first-teams-need-testing-based-development': {
    title: 'Test Driven Development AI-First Teams Need',
    description:
      'Test driven development AI teams actually need looks different from the textbook version. Unfurl Systems explains the real bottleneck.',
  },
  'repository-ai-readiness-missing-input-estimation': {
    title: "Repository AI Readiness Assessment: What's Missing",
    description:
      "Most checklists skip the repository itself. Unfurl Systems' AI readiness assessment framework starts with what's already in your codebase.",
  },
  'hidden-problem-ai-design-applications-model-lock-in': {
    title: 'AI Model Lock-In: The Hidden Design Problem',
    description:
      'AI model lock-in is a hidden cost of most application designs. Unfurl Systems on why architecture choices now limit your options later.',
  },
  'designing-model-agnostic-ai-architecture': {
    title: 'Designing Model-Agnostic AI Architecture',
    description:
      "A practical framework for model-agnostic AI architecture that isn't locked to one model provider, from Unfurl Systems' research team.",
  },
  'multi-agent-design-workflows-need-more-than-agents': {
    title: 'Multi-Agent Systems Need More Than Agents',
    description:
      "Well-designed multi-agent systems need real workflow design, not just more agents. Unfurl Systems on what's actually missing today.",
  },
  'dag-based-orchestration-enterprise-ai-workflows': {
    title: 'DAG Orchestration for Enterprise AI Workflows',
    description:
      'Why DAG orchestration outperforms ad hoc agent chaining for enterprise AI workflows. Unfurl Systems shares its research findings here.',
  },
  'workflow-drafts-not-autonomous-chaos': {
    title: 'A Human in the Loop AI Workflow, Not Chaos',
    description:
      'A human in the loop AI workflow beats fully autonomous chaos. Unfurl Systems on designing agent output as a reviewable draft, not a verdict.',
  },
  'tenant-boundaries-ai-agent-platforms': {
    title: 'Tenant Boundaries and AI Agent Governance',
    description:
      'Real AI agent governance starts with enforced tenant boundaries, not naming conventions. Unfurl Systems on multi-tenant platform design.',
  },
  'ai-first-release-planning-framework': {
    title: 'A Framework for AI Release Planning',
    description:
      "A concrete AI release planning framework for AI-first teams, drawn from Unfurl Systems' production engineering research and case studies.",
  },
  'observability-auditability-ai-first-workflows': {
    title: 'AI Agent Observability & Auditability, Explained',
    description:
      'AI agent observability is more than logs. Unfurl Systems on building auditability into AI-first workflows from day one, not bolting it on.',
  },
  'beyond-ai-prototypes-production-grade-ai-engineering': {
    title: 'Beyond AI Prototypes: An AI Development Platform',
    description:
      "Most AI prototypes never reach production. An AI development platform built for that gap is what Unfurl Systems' research addresses.",
  },
}

export function getSeoForSlug(slug: string) {
  return SEO_BY_SLUG[slug]
}

export const tracks = [
  {
    label: 'Track 1',
    title: 'Planning & Execution',
    description:
      'Planning, testing, estimation, repository readiness, model flexibility, and execution practices for AI-first engineering teams.',
  },
  {
    label: 'Track 2',
    title: 'Architecture & Agents',
    description:
      'Workflow orchestration, governance, tenant boundaries, observability, auditability, and production-grade AI platform architecture.',
  },
]

export const publication = {
  title: 'Beyond AI Prototypes',
  author: 'Vinay Verma',
  authorBio: 'Engineering Manager focused on AI-first enterprise architecture, release planning, and governed agent workflows.',
  tagline: 'Planning, testing, governing, and releasing AI-first software.',
  positioning: 'Vol. I · A 12-essay launch series · Published from 03-14 May 2026',
  period: '03-14 May 2026',
  timezone: 'Asia/Kolkata',
  volume: 'Vol. I',
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getAllPosts() {
  return [...posts].sort((a, b) => a.number - b.number)
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

export function getAdjacentPosts(slug: string) {
  const allPosts = getAllPosts()
  const index = allPosts.findIndex((post) => post.slug === slug)

  return {
    previous: index > 0 ? allPosts[index - 1] : undefined,
    next: index >= 0 && index < allPosts.length - 1 ? allPosts[index + 1] : undefined,
  }
}
