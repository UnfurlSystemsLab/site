import type { CSSProperties } from 'react'

// Shared style tokens for full Lab detail pages (DCP, Fabric, Studio),
// mirroring the section rhythm the design export established for /labs/dcp:
// alternating white/#eef1f6 full-width sections, a small-caps IBM Plex Mono
// section label, and Source Serif body copy.
export const sectionLabel: CSSProperties = {
  font: "500 11px/1 'IBM Plex Mono',monospace",
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: '#64748b',
  margin: '0 0 22px',
}

export const sectionBody: CSSProperties = {
  font: "400 17px/1.7 'Source Serif 4',serif",
  color: '#334155',
  margin: '0 0 20px',
  maxWidth: '76ch',
  textWrap: 'pretty',
}

export const h3Style: CSSProperties = {
  font: "400 19px/1.3 'Source Serif 4',serif",
  color: '#0f172a',
  margin: '32px 0 10px',
}

export const listStyle: CSSProperties = {
  margin: '0 0 20px',
  paddingLeft: 20,
  font: "400 16px/1.65 'Source Serif 4',serif",
  color: '#334155',
  maxWidth: '76ch',
}

export const calloutQuote: CSSProperties = {
  margin: '20px 0',
  padding: '16px 20px',
  border: '1px solid #dbe3ef',
  background: '#fff',
  borderRadius: 3,
  font: "400 17px/1.6 'Source Serif 4',serif",
  color: '#0f172a',
  maxWidth: '70ch',
}

export const codeBlock: CSSProperties = {
  border: '1px solid #e1e5ec',
  background: '#0f172a',
  borderRadius: 3,
  padding: '18px 20px',
  margin: '0 0 20px',
  overflowX: 'auto',
}

export const codeText: CSSProperties = {
  margin: 0,
  font: "400 13px/1.6 'IBM Plex Mono',monospace",
  color: '#e2e8f0',
}

export const monoSmall: CSSProperties = {
  font: "400 13px/1.6 'IBM Plex Sans',sans-serif",
  color: '#64748b',
  margin: 0,
  maxWidth: '76ch',
}
