import { useNavigate } from 'react-router-dom'

/*
 * DcpJourney — series overview ("isDcp" block in the source export).
 * Breadcrumb, hero + "series at a glance" card, and the full sequence of
 * seven parts with publish dates and read times.
 */
const SEQUENCE: {
  part: number
  title: string
  published: string
  body: string
  leadsTo?: string
}[] = [
  {
    part: 1,
    title: 'The Missing Harness',
    published: 'Published 1 Aug 2026 · 10 min',
    body: 'Problem framing. Every era had a harness; AI is becoming a new kind of consumer of capabilities, and the harness we give it today is still fragmented.',
  },
  {
    part: 2,
    title: 'The Baseline Shift',
    published: 'Published 1 Aug 2026 · 9 min',
    body: 'The panic is not that AI can write code. Software work is moving from building isolated components to assembling governable systems.',
  },
  {
    part: 3,
    title: 'The Capability Contract',
    published: 'Published 1 Aug 2026 · 11 min',
    body: 'DCP named: claims, refusals, negotiation, and the three planes of description, negotiation, and invocation.',
    leadsTo: 'Leads to DCP Lab',
  },
  {
    part: 4,
    title: 'Draft Spec and Discussion',
    published: 'Published 1 Aug 2026 · 14 min',
    body: 'The working shape of the draft: core primitives, an illustrative claim fragment, aggregation, and questions for readers.',
  },
  {
    part: 5,
    title: 'The Human Harness',
    published: 'Published 1 Aug 2026 · 10 min',
    body: 'Why AI-native systems still need a UI humans can reason through. Introduces Unfurl Studio: the AI proposes, the human disposes, Fabric validates.',
    leadsTo: 'Leads to Studio Lab',
  },
  {
    part: 6,
    title: 'Aggregation Is Abstraction',
    published: 'Published 1 Aug 2026 · 12 min',
    body: 'Semantic zoom and aggregate capabilities, from a single component up through houses, colonies, and cities. Containment is not compatibility.',
  },
  {
    part: 7,
    title: 'The Living Assembly',
    published: 'Published 1 Aug 2026 · 12 min',
    body: 'Loading, monitoring, and evolving AI-native systems: contract hydration, faults as semantic events, and the accelerator pedal for systems.',
  },
]

export default function DcpJourney() {
  const navigate = useNavigate()

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '36px 24px 48px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button
              type="button"
              onClick={() => navigate('/research')}
              className="hover-text-ink"
              style={{
                background: 'none',
                border: 0,
                padding: 0,
                cursor: 'pointer',
                font: "400 12px/1 'IBM Plex Mono',monospace",
                color: '#64748b',
              }}
            >
              Research
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#334155' }}>DCP Journey</span>
          </nav>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 40 }}>
            <div>
              <p
                style={{
                  font: "500 11px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#073eab',
                  margin: '0 0 18px',
                }}
              >
                Seven parts · read in order
              </p>
              <h1
                style={{
                  font: "600 clamp(30px,4vw,46px)/1.13 'Poppins',sans-serif",
                  letterSpacing: '-0.02em',
                  color: '#0f172a',
                  margin: '0 0 20px',
                  textWrap: 'pretty',
                }}
              >
                The DCP Journey
              </h1>
              <p
                style={{
                  font: "400 18px/1.65 'Source Serif 4',serif",
                  color: '#475569',
                  margin: '0 0 24px',
                  maxWidth: '56ch',
                  textWrap: 'pretty',
                }}
              >
                One argument in seven moves. It starts with a problem — we assemble software out of components we
                cannot interrogate — and ends with what it would take to observe, test, and evolve an assembly while
                it is running.
              </p>
              <p
                style={{
                  font: "400 15px/1.6 'Source Serif 4',serif",
                  color: '#64748b',
                  margin: 0,
                  maxWidth: '56ch',
                }}
              >
                You can read a part on its own, but the parts build. If you only read two, read Part 1 and Part 3.
              </p>
            </div>
            <div style={{ border: '1px solid #e1e5ec', background: '#fff', borderRadius: 3, padding: 22 }}>
              <p
                style={{
                  font: "500 10px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#073eab',
                  margin: '0 0 16px',
                }}
              >
                Series at a glance
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                <GlanceRow label="Published" value="7 of 7" />
                <GlanceRow label="Full series reading time" value="~78 min" />
                <GlanceRow label="Labs referenced" value="DCP, Studio" />
                <GlanceRow label="Last updated" value="1 Aug 2026" />
              </div>
              <button
                type="button"
                onClick={() => navigate('/research/dcp/part-1')}
                style={{
                  marginTop: 20,
                  width: '100%',
                  background: '#0f172a',
                  color: '#f6f7f9',
                  border: '1px solid #0f172a',
                  borderRadius: 3,
                  padding: '11px 16px',
                  font: "500 13px/1 'IBM Plex Sans',sans-serif",
                  cursor: 'pointer',
                }}
              >
                Start at Part 1
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <h2
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 30px',
            }}
          >
            The sequence
          </h2>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SEQUENCE.map((item, i) => (
              <li
                key={item.part}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  gap: 20,
                  padding: i === SEQUENCE.length - 1 ? '0' : '0 0 26px',
                  borderLeft: i === SEQUENCE.length - 1 ? '1px solid transparent' : '1px solid #dbe3ef',
                  marginLeft: 20,
                  paddingLeft: 28,
                }}
              >
                <div
                  style={{
                    gridColumn: '1/-1',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
                    gap: '12px 32px',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <span
                      style={{
                        font: "500 10px/1 'IBM Plex Mono',monospace",
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        color: item.part === 7 ? '#2b59d4' : '#64748b',
                      }}
                    >
                      {item.part === 7 ? 'Part 7 · Latest' : `Part ${item.part}`}
                    </span>
                    <h3 style={{ font: "400 22px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '8px 0 0' }}>
                      {item.title}
                    </h3>
                    <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '10px 0 0' }}>
                      {item.published}
                    </p>
                    {item.leadsTo && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 7,
                          marginTop: 12,
                          border: '1px solid #dbe3ef',
                          background: '#fff',
                          padding: '4px 8px',
                          borderRadius: 2,
                          font: "500 10px/1 'IBM Plex Mono',monospace",
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: '#475569',
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: item.part === 3 ? '#f59e0b' : '#7c3aed',
                          }}
                        />
                        {item.leadsTo}
                      </span>
                    )}
                  </div>
                  <div>
                    <p style={{ font: "400 15px/1.65 'Source Serif 4',serif", color: '#475569', margin: '0 0 12px' }}>
                      {item.body}
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate(`/research/dcp/part-${item.part}`)}
                      style={{
                        background: 'none',
                        border: 0,
                        padding: 0,
                        cursor: 'pointer',
                        font: "500 13px/1 'IBM Plex Sans',sans-serif",
                        color: '#2b59d4',
                      }}
                    >
                      Read Part {item.part} →
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <h2
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 10px',
            }}
          >
            Where the series lands
          </h2>
          <p
            style={{
              font: "400 16px/1.65 'Source Serif 4',serif",
              color: '#475569',
              margin: '0 0 28px',
              maxWidth: '60ch',
            }}
          >
            Each part points at the Lab where the idea is being made concrete. The Labs carry the current technical
            shape; the articles carry the reasoning.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            <button
              type="button"
              onClick={() => navigate('/labs/dcp')}
              className="hover-border-soft"
              style={{
                textAlign: 'left',
                border: '1px solid #e1e5ec',
                background: '#fff',
                borderRadius: 3,
                padding: 20,
                cursor: 'pointer',
                fontFamily: "'IBM Plex Sans',sans-serif",
              }}
            >
              <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>
                Parts 3–4 →
              </p>
              <h3 style={{ font: "400 18px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 8px' }}>
                DCP Lab
              </h3>
              <p style={{ font: "400 14px/1.55 'Source Serif 4',serif", color: '#475569', margin: 0 }}>
                Draft specification, schema overview, examples.
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate('/labs/studio')}
              className="hover-border-soft"
              style={{
                textAlign: 'left',
                border: '1px solid #e1e5ec',
                background: '#fff',
                borderRadius: 3,
                padding: 20,
                cursor: 'pointer',
                fontFamily: "'IBM Plex Sans',sans-serif",
              }}
            >
              <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>
                Parts 5, 7 →
              </p>
              <h3 style={{ font: "400 18px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 8px' }}>
                Studio Lab
              </h3>
              <p style={{ font: "400 14px/1.55 'Source Serif 4',serif", color: '#475569', margin: 0 }}>
                The human review and governance prototype.
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function GlanceRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
      <span style={{ font: "400 13px/1.4 'IBM Plex Sans',sans-serif", color: '#475569' }}>{label}</span>
      <span style={{ font: "500 13px/1.4 'IBM Plex Mono',monospace", color: '#0f172a' }}>{value}</span>
    </div>
  )
}
