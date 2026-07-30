// Shared inline-style fragments reused by every DCP Journey article body,
// so paragraph/heading typography stays identical across Part1..Part7
// without repeating the same style object seven times per file.
import type { CSSProperties } from 'react'

export const bodyP: CSSProperties = {
  font: "400 19px/1.75 'Source Serif 4',serif",
  color: '#2c2a25',
  margin: '0 0 24px',
  textAlign: 'justify',
  hyphens: 'auto',
}

export const h2Style: CSSProperties = {
  font: "400 26px/1.3 'Source Serif 4',serif",
  color: '#1c1b19',
  margin: '44px 0 16px',
  textWrap: 'pretty',
}

export const calloutBox: CSSProperties = {
  border: '1px solid #e5e2da',
  background: '#f4f2ec',
  borderRadius: 3,
  padding: '20px 22px',
  margin: '0 0 32px',
}

export const calloutLabel: CSSProperties = {
  font: "500 10px/1 'IBM Plex Mono',monospace",
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  color: '#8a877f',
  margin: '0 0 10px',
}

export const calloutBody: CSSProperties = {
  font: "400 16px/1.65 'Source Serif 4',serif",
  color: '#3a382f',
  margin: 0,
}

export const quoteWrap: CSSProperties = {
  margin: '36px 0',
  padding: '0 0 0 24px',
  borderLeft: '2px solid #1c1b19',
}

export const quoteText: CSSProperties = {
  font: "300 23px/1.5 'Source Serif 4',serif",
  color: '#1c1b19',
  margin: 0,
  textWrap: 'pretty',
}

export const tableWrap: CSSProperties = {
  border: '1px solid #e5e2da',
  background: '#fff',
  borderRadius: 3,
  margin: '0 0 32px',
  overflowX: 'auto',
}

export const th: CSSProperties = {
  textAlign: 'left',
  font: "500 10px/1.4 'IBM Plex Mono',monospace",
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: '#8a877f',
  padding: '14px 18px',
  borderBottom: '1px solid #e5e2da',
}

export const td: CSSProperties = {
  font: "400 14px/1.5 'IBM Plex Sans',sans-serif",
  color: '#3a382f',
  padding: '12px 18px',
  borderBottom: '1px solid #efece4',
}

export const tdLast: CSSProperties = {
  font: "400 14px/1.5 'IBM Plex Sans',sans-serif",
  color: '#3a382f',
  padding: '12px 18px',
}

export const listStyle: CSSProperties = {
  margin: '0 0 24px',
  paddingLeft: 22,
  font: "400 17px/1.7 'Source Serif 4',serif",
  color: '#2c2a25',
  textAlign: 'justify',
}

export const h3Style: CSSProperties = {
  font: "500 15px/1.4 'IBM Plex Sans',sans-serif",
  color: '#1c1b19',
  margin: '28px 0 12px',
}
