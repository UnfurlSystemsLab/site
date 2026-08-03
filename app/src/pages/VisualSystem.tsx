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
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 40px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            Visual system
          </p>
          <h1 style={{ font: "300 clamp(28px,3.6vw,40px)/1.18 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 18px', textWrap: 'pretty' }}>
            Reference for typography, color, spacing, and components.
          </h1>
          <p style={{ font: "400 17px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, maxWidth: '64ch' }}>
            Restrained, editorial, print-adjacent. The goal is a site that reads like a research journal rather than
            a product page — calm color, serif for reading, mono for status and metadata.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 22px' }}>
            Typography
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>Source Serif 4 — reading &amp; headlines</p>
              <p style={{ font: "300 34px/1.2 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#334155', margin: 0 }}>Body copy at 16–19px, 1.6–1.75 line height, max 700px measure.</p>
            </div>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>IBM Plex Sans — interface</p>
              <p style={{ font: "500 28px/1.2 'IBM Plex Sans',sans-serif", color: '#0f172a', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 15px/1.6 'IBM Plex Sans',sans-serif", color: '#334155', margin: 0 }}>Buttons, nav, labels, card titles that need to sit tight.</p>
            </div>
            <div>
              <p style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>IBM Plex Mono — status &amp; metadata</p>
              <p style={{ font: "500 24px/1.2 'IBM Plex Mono',monospace", color: '#0f172a', margin: '0 0 8px' }}>Aa Bb Cc 123</p>
              <p style={{ font: "400 13px/1.6 'IBM Plex Mono',monospace", color: '#334155', margin: 0 }}>Eyebrows, dates, status pills, code, repository paths.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 8px' }}>
            Brand Colours
          </h2>
          <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 26px', maxWidth: '70ch' }}>
            Shared with Unfurl Studio (<code style={{ font: "400 13px/1 'IBM Plex Mono',monospace" }}>unfurl-ui</code>): a
            cool neutral base, a deep brand blue (#073eab) carrying the wordmark and every eyebrow/label, a lighter
            indigo for links and focus states, plus a four-color status vocabulary carried over from Studio&#8217;s
            claim/port/pipe coloring (green · valid, amber · pending, red · refused, purple · offered).
          </p>

          <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 12px' }}>
            Neutral base
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 28 }}>
            <Swatch bg="#f6f7f9" hex="#f6f7f9" label="page background" bordered />
            <Swatch bg="#eef1f6" hex="#eef1f6" label="section alt" bordered />
            <Swatch bg="#fff" hex="#ffffff" label="card surface" bordered />
            <Swatch bg="#e1e5ec" hex="#e1e5ec" label="hairline border" bordered />
            <Swatch bg="#0f172a" hex="#0f172a" label="ink / primary text" />
          </div>

          <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 12px' }}>
            Text hierarchy
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 28 }}>
            <Swatch bg="#334155" hex="#334155" label="nav / heading-adjacent" />
            <Swatch bg="#475569" hex="#475569" label="body / secondary" />
            <Swatch bg="#64748b" hex="#64748b" label="muted / eyebrow" />
            <Swatch bg="#94a3b8" hex="#94a3b8" label="faint / dividers" bordered />
          </div>

          <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 12px' }}>
            Accent
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 14, marginBottom: 28 }}>
            <Swatch bg="#073eab" hex="#073eab" label="wordmark / label text" />
            <Swatch bg="#2b59d4" hex="#2b59d4" label="link / focus / accent" />
            <Swatch bg="#1d4ed8" hex="#1d4ed8" label="accent, hover/darken" />
            <Swatch bg="#93c5fd" hex="#93c5fd" label="underline / light accent" bordered />
            <Swatch bg="#dbeafe" hex="#dbeafe" label="selection background" bordered />
          </div>

          <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 12px' }}>
            Status vocabulary
          </p>
          <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#64748b', margin: '0 0 14px' }}>
            Research (neutral grey), draft spec (amber), prototype (violet), active development (green) — the same
            four hues Studio uses for offer/dependency/refusal/substrate ports.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <StatusDot color="#94a3b8" label="Research" />
            <StatusDot color="#f59e0b" label="Draft spec" />
            <StatusDot color="#7c3aed" label="Prototype" />
            <StatusDot color="#16a34a" label="Active development" />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 22px' }}>
            Spacing &amp; structure
          </h2>
          <p style={{ font: "400 15px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 14px', maxWidth: '70ch' }}>
            8px base unit. Section vertical padding 44–64px. Card padding 18–28px. Content max-width 1160px for
            grids, 700px for reading. 1px hairline borders (#e1e5ec) separate sections instead of shadows; cards use
            a 1px border and 3px radius, never a drop shadow or gradient.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 22px' }}>
            Mobile behavior notes
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, font: "400 16px/1.75 'Source Serif 4',serif", color: '#334155', maxWidth: '72ch' }}>
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
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 22px' }}>
            Components shown across the site
          </h2>
          <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 20px', maxWidth: '70ch' }}>
            Status strip, one-sentence definition, problem, architecture diagram + text alternative, scope table
            (implemented/specified/experimental/deferred), key concepts, examples, related research links,
            repository callout, participate block — see the DCP Lab page for the full pattern in context.
          </p>
          <button
            type="button"
            onClick={() => navigate('/labs/dcp')}
            className="hover-border-ink"
            style={{ background: 'none', border: '1px solid #cbd5e1', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#0f172a', cursor: 'pointer' }}
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
      <div style={{ height: 64, borderRadius: 3, background: bg, border: bordered ? '1px solid #e1e5ec' : undefined, marginBottom: 8 }} />
      <p style={{ font: "500 12px/1.3 'IBM Plex Mono',monospace", color: '#0f172a', margin: 0 }}>{hex}</p>
      <p style={{ font: "400 12px/1.3 'IBM Plex Sans',sans-serif", color: '#64748b', margin: 0 }}>{label}</p>
    </div>
  )
}

function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, font: "500 11px/1 'IBM Plex Mono',monospace", color: '#475569' }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      {label}
    </span>
  )
}
