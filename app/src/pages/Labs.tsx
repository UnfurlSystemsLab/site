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
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 44px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
            Labs
          </p>
          <h1 style={{ font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 20px', maxWidth: '20ch', textWrap: 'pretty' }}>
            Where ideas are made concrete enough to be wrong.
          </h1>
          <p style={{ font: "400 18px/1.65 'Source Serif 4',serif", color: '#4a473f', margin: '0 0 28px', maxWidth: '64ch', textWrap: 'pretty' }}>
            A Lab is a specification, a prototype, or both. None of these are finished products. Status is shown on
            every card and carried through to the corresponding repository.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 28px' }}>
            <Legend color="#9a978d" label="Research — an idea, not yet a spec" />
            <Legend color="oklch(0.68 0.14 75)" label="Draft spec — written down, still moving" />
            <Legend color="oklch(0.6 0.12 275)" label="Prototype — runs, not hardened" />
            <Legend color="oklch(0.6 0.12 155)" label="Active development — changing week to week" />
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
                border: '1px solid #e5e2da',
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
                    color: '#5c594f',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: color(lab.status) }} />
                  {lab.statusLabel}
                </span>
                <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#a8a49a' }}>{lab.updated}</span>
              </div>
              <h2 style={{ font: "400 24px/1.25 'Source Serif 4',serif", color: '#1c1b19', margin: 0 }}>{lab.name}</h2>
              <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0, flex: 1 }}>{lab.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #efece4' }}>
                <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>{lab.repo}</span>
                <span style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: 'oklch(0.48 0.09 250)' }}>Open Lab →</span>
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
      return 'oklch(0.68 0.14 75)'
    case 'active-development':
      return 'oklch(0.6 0.12 155)'
    case 'prototype':
      return 'oklch(0.6 0.12 275)'
    default:
      return '#9a978d'
  }
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      <span style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f' }}>{label}</span>
    </div>
  )
}
