import { useNavigate } from 'react-router-dom'

/*
 * VisualSystem — design-reference page ("isSystem" block in the source
 * export, reached via the footer's "Visual system" link / `go.system`).
 * Typography, color, spacing, mobile-behavior notes, and a pointer back to
 * the Lab-page component pattern.
 */
export default function VisualSystem() {
  const navigate = useNavigate()

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 40px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
            Visual system
          </p>
          <h1 style={{ font: "300 clamp(28px,3.6vw,40px)/1.18 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 18px', textWrap: 'pretty' }}>
            Reference for typography, color, spacing, and components.
          </h1>
          <p style={{ font: "400 17px/1.6 'Source Serif 4',serif", color: '#4a473f', margin: 0, maxWidth: '64ch' }}>
            Restrained, editorial, print-adjacent. The goal is a site that reads like a research journal rather than
            a product page — calm color, serif for reading, mono for status and metadata.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Typography
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 10px' }}>Source Serif 4 — reading &amp; headlines</p>
              <p style={{ font: "300 34px/1.2 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#3a382f', margin: 0 }}>Body copy at 16–19px, 1.6–1.75 line height, max 700px measure.</p>
            </div>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 10px' }}>IBM Plex Sans — interface</p>
              <p style={{ font: "500 28px/1.2 'IBM Plex Sans',sans-serif", color: '#1c1b19', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 15px/1.6 'IBM Plex Sans',sans-serif", color: '#3a382f', margin: 0 }}>Buttons, nav, labels, card titles that need to sit tight.</p>
            </div>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 10px' }}>IBM Plex Mono — status &amp; metadata</p>
              <p style={{ font: "500 24px/1.2 'IBM Plex Mono',monospace", color: '#1c1b19', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 13px/1.6 'IBM Plex Mono',monospace", color: '#3a382f', margin: 0 }}>Eyebrows, dates, status pills, code, repository paths.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Color
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14 }}>
            <Swatch bg="#faf9f5" hex="#faf9f5" label="page background" bordered />
            <Swatch bg="#f4f2ec" hex="#f4f2ec" label="section alt" bordered />
            <Swatch bg="#1c1b19" hex="#1c1b19" label="ink / primary text" />
            <Swatch bg="oklch(0.48 0.09 250)" hex="oklch(.48 .09 250)" label="link accent" />
          </div>
          <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: '20px 0 0' }}>
            Status hues share lightness/chroma, vary only in hue: research (neutral grey), draft spec (amber, 75°),
            prototype (violet, 275°), active development (green, 155°).
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 14 }}>
            <StatusDot color="#9a978d" label="Research" />
            <StatusDot color="oklch(0.68 0.14 75)" label="Draft spec" />
            <StatusDot color="oklch(0.6 0.12 275)" label="Prototype" />
            <StatusDot color="oklch(0.6 0.12 155)" label="Active development" />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Spacing &amp; structure
          </h2>
          <p style={{ font: "400 15px/1.65 'Source Serif 4',serif", color: '#3a382f', margin: '0 0 14px', maxWidth: '70ch' }}>
            8px base unit. Section vertical padding 44–64px. Card padding 18–28px. Content max-width 1160px for
            grids, 700px for reading. 1px hairline borders (#e5e2da) separate sections instead of shadows; cards use
            a 1px border and 3px radius, never a drop shadow or gradient.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Mobile behavior notes
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, font: "400 16px/1.75 'Source Serif 4',serif", color: '#3a382f', maxWidth: '72ch' }}>
            <li>Header nav wraps to a second row under ~560px rather than collapsing to a hamburger; four labels plus the GitHub pill fit two lines comfortably and stay keyboard/tab visible.</li>
            <li>
              All grids are{' '}
              <code style={{ font: "400 13px/1 'IBM Plex Mono',monospace", background: '#fff', padding: '2px 5px', borderRadius: 2 }}>repeat(auto-fit,minmax(...))</code>, so
              Lab/article/pillar cards reflow to one column with no separate mobile layout to maintain.
            </li>
            <li>Reading measure caps at 700px and never needs adjustment on mobile; padding drops from 24px to 16–20px at the section level only.</li>
            <li>Diagram figures (contract lifecycle, DCP flow) stack their steps into a single column under ~480px; the plain-text alternative under each figure is always present, not mobile-only.</li>
            <li>Status pills and metadata rows wrap via flex-wrap rather than truncating — status must never be hidden behind a "more" affordance.</li>
            <li>Sticky header stays but drops box-shadow-like elevation in favor of the hairline border, keeping it visually quiet on small screens.</li>
            <li>Tap targets (nav items, card buttons, footer links) hold a minimum 44px effective height via padding even where the visible label is small.</li>
          </ul>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px 64px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Components shown across the site
          </h2>
          <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: '0 0 20px', maxWidth: '70ch' }}>
            Status strip, one-sentence definition, problem, architecture diagram + text alternative, scope table
            (implemented/specified/experimental/deferred), key concepts, examples, related research links,
            repository callout, participate block — see the DCP Lab page for the full pattern in context.
          </p>
          <button
            type="button"
            onClick={() => navigate('/labs/dcp')}
            className="hover-border-ink"
            style={{ background: 'none', border: '1px solid #d9d5ca', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', cursor: 'pointer' }}
          >
            View the Lab template →
          </button>
        </div>
      </section>
    </div>
  )
}

function Swatch({ bg, hex, label, bordered }: { bg: string; hex: string; label: string; bordered?: boolean }) {
  return (
    <div>
      <div style={{ height: 64, borderRadius: 3, background: bg, border: bordered ? '1px solid #e5e2da' : undefined, marginBottom: 8 }} />
      <p style={{ font: "500 12px/1.3 'IBM Plex Mono',monospace", color: '#1c1b19', margin: 0 }}>{hex}</p>
      <p style={{ font: "400 12px/1.3 'IBM Plex Sans',sans-serif", color: '#8a877f', margin: 0 }}>{label}</p>
    </div>
  )
}

function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, font: "500 11px/1 'IBM Plex Mono',monospace", color: '#5c594f' }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      {label}
    </span>
  )
}
