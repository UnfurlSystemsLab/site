import { useNavigate } from 'react-router-dom'
import { bodyP, h2Style } from '../articles/shared'

// BlogAbout — ported verbatim from blog/app/about/page.tsx.
export default function BlogAbout() {
  const navigate = useNavigate()

  return (
    <div>
      <header style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '36px 24px 44px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <button type="button" onClick={() => navigate('/research')} className="hover-text-ink" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>
              Research
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <button type="button" onClick={() => navigate('/research/blog')} className="hover-text-ink" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>
              Blog
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#334155' }}>About</span>
          </nav>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>Page</p>
          <h1 style={{ font: "600 clamp(28px,4vw,40px)/1.2 'Poppins',sans-serif", letterSpacing: '-0.02em', color: '#0f172a', margin: 0, textWrap: 'pretty' }}>
            About this site
          </h1>
        </div>
      </header>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '44px 24px 72px' }}>
        <p style={bodyP}>
          Beyond AI Prototypes is an independent publication launched in May 2026 by Vinay Verma. It focuses on
          practical AI-first engineering, enterprise architecture, release planning, and governed agent workflows.
        </p>
        <h3 style={{ ...h2Style, font: "500 19px/1.35 'Source Serif 4',serif" }}>Access all areas</h3>
        <p style={bodyP}>
          The archive is designed as a working library for engineering leaders and builders moving from
          AI-assisted prototypes toward production-grade AI systems.
        </p>
        <h3 style={{ ...h2Style, font: "500 19px/1.35 'Source Serif 4',serif" }}>Fresh content, delivered</h3>
        <p style={bodyP}>
          New essays follow the series cadence and are organized around planning, testing, model flexibility,
          workflow orchestration, and operational confidence.
        </p>
        <h3 style={{ ...h2Style, font: "500 19px/1.35 'Source Serif 4',serif" }}>Meet people like you</h3>
        <p style={bodyP}>
          The publication is for teams that care about making AI systems reliable, governable, testable, and
          releasable.
        </p>
      </div>
    </div>
  )
}
