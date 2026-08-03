import { useNavigate } from 'react-router-dom'
import { LABS } from '../data/labs'

/*
 * Labs — Labs index ("isLabs" block in the source export). Legend of the
 * four status hues followed by a card per Lab (status, updated date, name,
 * description, repo, "Open Lab" link).
 */
export default function Labs() {
  const navigate = useNavigate()

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 44px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            Labs
          </p>
          <h1 style={{ font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 20px', maxWidth: '20ch', textWrap: 'pretty' }}>
            Where ideas are made concrete enough to be wrong.
          </h1>
          <p style={{ font: "400 18px/1.65 'Source Serif 4',serif", color: '#475569', margin: '0 0 28px', maxWidth: '64ch', textWrap: 'pretty' }}>
            A Lab is a specification, a prototype, or both. None of these are finished products. Status is shown on
            every card and carried through to the corresponding repository.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 28px' }}>
            <Legend color="#94a3b8" label="Research — an idea, not yet a spec" />
            <Legend color="#f59e0b" label="Draft spec — written down, still moving" />
            <Legend color="#7c3aed" label="Prototype — runs, not hardened" />
            <Legend color="#16a34a" label="Active development — changing week to week" />
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '48px 24px 64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: 24,
          }}
        >
          {LABS.map((lab) => (
            <button
              key={lab.slug}
              type="button"
              onClick={() => navigate(`/labs/${lab.slug}`)}
              className="hover-border-soft"
              style={{
                textAlign: 'left',
                border: '1px solid #e1e5ec',
                background: '#fff',
                borderRadius: 3,
                padding: 28,
                cursor: 'pointer',
                fontFamily: "'IBM Plex Sans',sans-serif",
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    font: "500 10px/1 'IBM Plex Mono',monospace",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: '#475569',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: color(lab.status) }} />
                  {lab.statusLabel}
                </span>
                <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>{lab.updated}</span>
              </div>
              <h2 style={{ font: "400 24px/1.25 'Source Serif 4',serif", color: '#0f172a', margin: 0 }}>{lab.name}</h2>
              <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, flex: 1 }}>{lab.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #eef0f3' }}>
                <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>{lab.repo}</span>
                <span style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#2b59d4' }}>Open Lab →</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

function color(status: string) {
  switch (status) {
    case 'draft-spec':
      return '#f59e0b'
    case 'active-development':
      return '#16a34a'
    case 'prototype':
      return '#7c3aed'
    default:
      return '#94a3b8'
  }
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      <span style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155' }}>{label}</span>
    </div>
  )
}
