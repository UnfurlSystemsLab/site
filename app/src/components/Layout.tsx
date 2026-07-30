import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

/*
 * Layout — shared page chrome (sticky header/nav + footer).
 * Pattern: this is the site's single Composition root for chrome, reused by
 * every route so header/nav markup and its active-state logic exist in one
 * place (mirrors the source export's single <header>/<footer> wrapping every
 * `<sc-if>` page block).
 *
 * The nav's underline indicator is driven by the current route instead of
 * the export's `atResearch`/`atLabs`/... computed booleans.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  const atResearch = path.startsWith('/research')
  const atLabs = path.startsWith('/labs')
  const atCommunity = path.startsWith('/community')
  const atAbout = path.startsWith('/about')

  const navItem = (label: string, to: string, active: boolean) => (
    <button
      type="button"
      onClick={() => navigate(to)}
      style={{
        position: 'relative',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '10px 12px',
        font: "500 14px/1 'IBM Plex Sans',sans-serif",
        color: '#3a382f',
      }}
    >
      {label}
      {active && (
        <span
          style={{
            position: 'absolute',
            left: 12,
            right: 12,
            bottom: 2,
            height: 2,
            background: '#1c1b19',
          }}
        />
      )}
    </button>
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#faf9f5',
        color: '#1c1b19',
        fontFamily: "'IBM Plex Sans',system-ui,sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: 'rgba(250,249,245,0.94)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e5e2da',
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px 28px',
            minHeight: 62,
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'none',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              marginRight: 'auto',
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                background: '#1c1b19',
                display: 'block',
                transform: 'rotate(45deg)',
              }}
            />
            <span
              style={{
                font: "600 15px/1 'IBM Plex Sans',sans-serif",
                letterSpacing: '-0.01em',
                color: '#1c1b19',
              }}
            >
              Unfurl Systems
            </span>
          </button>
          <nav
            aria-label="Primary"
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4 }}
          >
            {navItem('Research', '/research', atResearch)}
            {navItem('Labs', '/labs', atLabs)}
            {navItem('Community', '/community', atCommunity)}
            {navItem('About', '/about', atAbout)}
            <a
              href="https://github.com/UnfurlSystemsLab"
              className="hover-border-ink"
              style={{
                marginLeft: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                border: '1px solid #d9d5ca',
                borderRadius: 3,
                padding: '7px 11px',
                font: "500 12px/1 'IBM Plex Mono',monospace",
                color: '#3a382f',
                textDecoration: 'none',
              }}
            >
              UnfurlSystemsLab <span style={{ color: '#8a877f' }}>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer style={{ borderTop: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '48px 24px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
            gap: 32,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span
                style={{ width: 11, height: 11, background: '#1c1b19', display: 'block', transform: 'rotate(45deg)' }}
              />
              <span style={{ font: "600 14px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19' }}>Unfurl Systems</span>
            </div>
            <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#6f6c62', margin: 0, maxWidth: '30ch' }}>
              A public research effort. Specifications and prototypes published here are not production-ready.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#8a877f',
                margin: '0 0 2px',
              }}
            >
              Site
            </p>
            <Link to="/research" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              Research
            </Link>
            <Link to="/labs" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              Labs
            </Link>
            <Link to="/community" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              Community
            </Link>
            <Link to="/about" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              About
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#8a877f',
                margin: '0 0 2px',
              }}
            >
              Code
            </p>
            <a href="https://github.com/UnfurlSystemsLab" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              GitHub organization
            </a>
            <a href="https://github.com/UnfurlSystemsLab/dcp" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              Contribution guide
            </a>
            <a
              href="https://github.com/UnfurlSystemsLab/dcp/issues"
              style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}
            >
              Issues and discussions
            </a>
            <Link to="/system" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              Visual system
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#8a877f',
                margin: '0 0 2px',
              }}
            >
              Contact
            </p>
            <a href="mailto:research@unfurl.systems" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f', textDecoration: 'none' }}>
              research@unfurl.systems
            </a>
            <span style={{ font: "400 13px/1.5 'IBM Plex Sans',sans-serif", color: '#6f6c62' }}>
              Privacy · Licence: CC BY 4.0 for writing, Apache 2.0 for code
            </span>
          </div>
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 40px' }}>
          <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#a8a49a', margin: 0 }}>
            © 2026 Unfurl Systems · Last site update 1 August 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
