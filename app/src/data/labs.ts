// Data: the three Labs shown across the Home, Research, and Labs index pages.
// Status hues follow the visual-system page: research (neutral grey),
// draft spec (amber, 75deg), prototype (violet, 275deg), active development
// (green, 155deg).
export type LabStatus = 'draft-spec' | 'active-development' | 'prototype' | 'research'

export interface LabSummary {
  slug: string
  status: LabStatus
  statusLabel: string
  name: string
  description: string
  repo: string
  updated: string
}

export const STATUS_COLOR: Record<LabStatus, string> = {
  research: '#94a3b8',
  'draft-spec': '#f59e0b',
  prototype: '#7c3aed',
  'active-development': '#16a34a',
}

export const LABS: LabSummary[] = [
  {
    slug: 'dcp',
    status: 'draft-spec',
    statusLabel: 'Draft spec',
    name: 'Domain Claim Protocol',
    description:
      'How a component states what it can do, what it needs, and under what conditions it may be used or invoked.',
    repo: 'UnfurlSystemsLab/dcp',
    updated: 'Updated 12 Jul',
  },
  {
    slug: 'fabric',
    status: 'active-development',
    statusLabel: 'Active development',
    name: 'Unfurl Fabric',
    description:
      'The design-time compiler: catalog, needs, matching, validation, contract signing, and deployment planning.',
    repo: 'UnfurlSystemsLab/unfurl-fabric',
    updated: 'Updated 24 Jul',
  },
  {
    slug: 'studio',
    status: 'prototype',
    statusLabel: 'Prototype',
    name: 'Unfurl Studio',
    description: 'The human harness for visually inspecting and governing DCP and Fabric assemblies.',
    repo: 'UnfurlSystemsLab/unfurl-ui',
    updated: 'Updated 3 Jul',
  },
]

export function getLab(slug: string): LabSummary | undefined {
  return LABS.find((l) => l.slug === slug)
}
