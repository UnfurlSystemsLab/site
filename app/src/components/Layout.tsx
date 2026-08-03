import { useEffect, useRef, useState, type ReactNode } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Close the mobile menu on outside click/tap, and on Escape.
  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const atResearch = path.startsWith('/research')
  const atLabs = path.startsWith('/labs')
  const atCommunity = path.startsWith('/community')
  const atAbout = path.startsWith('/about')

  const go = (to: string) => {
    setMenuOpen(false)
    navigate(to)
  }

  const navItem = (label: string, to: string, active: boolean) => (
    <button
      type="button"
      onClick={() => go(to)}
      style={{
        position: 'relative',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '10px 12px',
        font: "500 14px/1 'IBM Plex Sans',sans-serif",
        color: '#334155',
        textAlign: 'left',
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
            background: '#0f172a',
          }}
        />
      )}
    </button>
  )

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f7f9',
        color: '#0f172a',
        fontFamily: "'IBM Plex Sans',system-ui,sans-serif",
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        ref={headerRef}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: 'rgba(246,247,249,0.94)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e1e5ec',
        }}
      >
        {/*
         * Breakpoint behavior (nav row <-> hamburger dropdown) needs a media
         * query, which inline styles can't express — scoped via classnames
         * below, matching the site's ≤720px mobile cutoff.
         */}
        <style>{`
          .unfurl-nav-toggle { display: none; }
          .unfurl-nav-links { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
          @media (max-width: 720px) {
            .unfurl-nav-toggle { display: inline-flex; }
            .unfurl-nav-links {
              display: flex;
              position: absolute;
              left: 0;
              right: 0;
              top: 100%;
              flex-direction: column;
              align-items: stretch;
              gap: 0;
              background: #f6f7f9;
              border-bottom: ${menuOpen ? '1px' : '0px'} solid #e1e5ec;
              padding: 0 24px;
              max-height: ${menuOpen ? '320px' : '0px'};
              padding-top: ${menuOpen ? '8px' : '0px'};
              padding-bottom: ${menuOpen ? '16px' : '0px'};
              opacity: ${menuOpen ? 1 : 0};
              overflow: hidden;
              pointer-events: ${menuOpen ? 'auto' : 'none'};
              transition: max-height 260ms ease, opacity 180ms ease, padding-top 260ms ease, padding-bottom 260ms ease, border-color 260ms ease;
            }
          }
        `}</style>
        <div
          style={{
            position: 'relative',
            maxWidth: 1160,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px 28px',
            minHeight: 76,
          }}
        >
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="unfurl-nav-toggle"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              background: '#fff',
              border: '1px solid #94a3b8',
              borderRadius: 3,
              cursor: 'pointer',
              padding: 0,
              order: -1,
            }}
          >
            <span style={{ position: 'relative', width: 16, height: 12, display: 'inline-block' }}>
              {[0, 5, 10].map((top, i) => {
                // Animates the three bars into an X: the middle bar fades
                // out, the top/bottom bars slide to center and rotate.
                const isMiddle = i === 1
                const transform = menuOpen
                  ? isMiddle
                    ? 'translateY(5px) scaleX(0)'
                    : `translateY(${i === 0 ? 5 : -5}px) rotate(${i === 0 ? 45 : -45}deg)`
                  : 'translateY(0) rotate(0)'
                return (
                  <span
                    key={top}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top,
                      width: 16,
                      height: 2,
                      background: '#0f172a',
                      opacity: menuOpen && isMiddle ? 0 : 1,
                      transform,
                      transition: 'transform 220ms ease, opacity 150ms ease',
                    }}
                  />
                )
              })}
            </span>
          </button>
          <button
            type="button"
            onClick={() => go('/')}
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
            <img src="/logo.svg" alt="" width={44} height={44} style={{ display: 'block' }} />
            <span
              style={{
                font: "700 20px/1 'Poppins',sans-serif",
                letterSpacing: '-0.01em',
                color: '#073eab',
              }}
            >
              Unfurl Systems&trade;
            </span>
          </button>
          <nav aria-label="Primary" className="unfurl-nav-links">
            {navItem('Research', '/research', atResearch)}
            {navItem('Labs', '/labs', atLabs)}
            {navItem('Community', '/community', atCommunity)}
            {navItem('About', '/about', atAbout)}
            <a
              href="https://github.com/UnfurlSystemsLab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-border-ink"
              style={{
                marginLeft: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                border: '1px solid #cbd5e1',
                borderRadius: 3,
                padding: '7px 11px',
                font: "500 12px/1 'IBM Plex Mono',monospace",
                color: '#334155',
                textDecoration: 'none',
              }}
            >
              UnfurlSystemsLab <span style={{ color: '#64748b' }}>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer style={{ borderTop: '1px solid #e1e5ec', background: '#eef1f6' }}>
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
              <img src="/logo.svg" alt="" width={20} height={20} style={{ display: 'block' }} />
              <span style={{ font: "600 14px/1 'IBM Plex Sans',sans-serif", color: '#073eab' }}>Unfurl Systems&trade;</span>
            </div>
            <p style={{ font: "400 13px/1.6 'IBM Plex Sans',sans-serif", color: '#64748b', margin: 0, maxWidth: '30ch' }}>
              A public research effort. Specifications and prototypes published here are not production-ready.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#073eab',
                margin: '0 0 2px',
              }}
            >
              Site
            </p>
            <Link to="/research" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              Research
            </Link>
            <Link to="/labs" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              Labs
            </Link>
            <Link to="/community" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              Community
            </Link>
            <Link to="/about" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              About
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#073eab',
                margin: '0 0 2px',
              }}
            >
              Code
            </p>
            <a href="https://github.com/UnfurlSystemsLab" target="_blank" rel="noopener noreferrer" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              GitHub organization
            </a>
            <a href="https://github.com/UnfurlSystemsLab/dcp?tab=contributing-ov-file" target="_blank" rel="noopener noreferrer" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              Contribution guide
            </a>
            <a
              href="https://github.com/UnfurlSystemsLab/dcp/issues"
              target="_blank"
              rel="noopener noreferrer"
              style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}
            >
              Issues and discussions
            </a>
            <Link to="/system" className="hover-text-ink" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              Visual system
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
            <p
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#073eab',
                margin: '0 0 2px',
              }}
            >
              Contact
            </p>
            <a href="mailto:research@unfurlsystems.com" style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155', textDecoration: 'none' }}>
              research@unfurlsystems.com
            </a>
            <span style={{ font: "400 13px/1.5 'IBM Plex Sans',sans-serif", color: '#64748b' }}>
              Privacy · Licence: CC BY 4.0 for writing, Apache 2.0 for code
            </span>
          </div>
        </div>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px 40px' }}>
          <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#94a3b8', margin: 0 }}>
            © 2026 Unfurl Systems · Last site update 1 August 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
