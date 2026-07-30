import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

/*
 * LabShell — shared chrome for a full Lab detail page (breadcrumb, status +
 * last-updated hero, CTA buttons, and the closing repository/participate
 * sections). Body content differs per Lab (see DcpBody.tsx, FabricBody.tsx,
 * StudioBody.tsx); this shell holds the layout every Lab page shares so the
 * three don't re-implement the same header/footer markup.
 * Pattern: Template Method — the shell owns the fixed page skeleton, the
 * body slot supplies the per-Lab content.
 */
export default function LabShell({
  breadcrumbLabel,
  statusLabel,
  statusColor,
  updated,
  title,
  subtitle,
  repo,
  repoDescription,
  secondaryHref,
  secondaryLabel,
  children,
}: {
  breadcrumbLabel: string
  statusLabel: string
  statusColor: string
  updated: string
  title: string
  subtitle: string
  repo: string
  repoDescription: string
  secondaryHref?: string
  secondaryLabel?: string
  children: ReactNode
}) {
  const navigate = useNavigate()
  const repoUrl = `https://github.com/${repo}`

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '36px 24px 44px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button
              type="button"
              onClick={() => navigate('/labs')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}
            >
              Labs
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#c2beb2' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#3a382f' }}>{breadcrumbLabel}</span>
          </nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                border: '1px solid #ddd9ce',
                background: '#fff',
                padding: '6px 10px',
                borderRadius: 2,
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#5c594f',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusColor }} />
              {statusLabel}
            </span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#a8a49a' }}>{updated}</span>
          </div>
          <h1 style={{ font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 20px', textWrap: 'pretty' }}>
            {title}
          </h1>
          <p style={{ font: "400 20px/1.6 'Source Serif 4',serif", color: '#4a473f', margin: '0 0 28px', maxWidth: '60ch', textWrap: 'pretty' }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={repoUrl}
              className="hover-dark"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1c1b19', color: '#faf9f5', border: '1px solid #1c1b19', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", textDecoration: 'none' }}
            >
              View the repository ↗
            </a>
            {secondaryHref && secondaryLabel && (
              <a
                href={secondaryHref}
                className="hover-border-ink"
                style={{ background: 'none', color: '#1c1b19', border: '1px solid #d9d5ca', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", textDecoration: 'none' }}
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        </div>
      </section>

      {children}

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#1c1b19' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, alignItems: 'center' }}>
          <div>
            <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#a8a49a', margin: '0 0 12px' }}>Repository</p>
            <h2 style={{ font: "400 24px/1.3 'Source Serif 4',serif", color: '#faf9f5', margin: '0 0 8px' }}>{repo}</h2>
            <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#c9c6bc', margin: 0 }}>{repoDescription}</p>
          </div>
          <a
            href={repoUrl}
            style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#faf9f5', color: '#1c1b19', border: '1px solid #faf9f5', borderRadius: 3, padding: '13px 20px', font: "500 14px/1 'IBM Plex Sans',sans-serif", textDecoration: 'none' }}
          >
            Open on GitHub ↗
          </a>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px 64px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, alignItems: 'center' }}>
          <div>
            <h2 style={{ font: "400 22px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 8px' }}>Participate</h2>
            <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0, maxWidth: '52ch' }}>
              Report a gap, propose a domain example, or open a discussion about this Lab.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-end' }}>
            <a href={`${repoUrl}/issues`} className="hover-border-ink" style={{ border: '1px solid #d9d5ca', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', textDecoration: 'none' }}>
              Open an issue
            </a>
            <a href={`${repoUrl}/discussions`} className="hover-border-ink" style={{ border: '1px solid #d9d5ca', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', textDecoration: 'none' }}>
              Join the discussion
            </a>
            <button
              type="button"
              onClick={() => navigate('/community')}
              style={{ background: '#1c1b19', color: '#faf9f5', border: '1px solid #1c1b19', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", cursor: 'pointer' }}
            >
              Community hub
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export function LabSection({ background, children }: { background?: string; children: ReactNode }) {
  return (
    <section style={{ borderBottom: '1px solid #e5e2da', background }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>{children}</div>
    </section>
  )
}

export function RelatedResearchLink({ kind, title, to }: { kind: string; title: string; to: string }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className="hover-border-soft"
      style={{ textAlign: 'left', border: '1px solid #e5e2da', background: '#fff', borderRadius: 3, padding: 18, cursor: 'pointer' }}
    >
      <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 8px' }}>{kind}</p>
      <p style={{ font: "400 17px/1.35 'Source Serif 4',serif", color: '#1c1b19', margin: 0 }}>{title}</p>
    </button>
  )
}
