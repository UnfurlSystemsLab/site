import { useNavigate } from 'react-router-dom'

/*
 * Research — research index ("isResearch" block in the source export).
 * Introduces the two tracks (DCP Journey series, Blog) and lists recent
 * writing (the six most recent DCP parts plus the one blog post referenced
 * in the source).
 */
export default function Research() {
  const navigate = useNavigate()

  const recent: { kind: string; title: string; body: string; meta: string; to: string }[] = [
    {
      kind: 'DCP Journey · Part 7',
      title: 'The Living Assembly',
      body: 'Loading, monitoring, and evolving AI-native systems once the assembly is running.',
      meta: '1 August 2026 · 12 min',
      to: '/research/dcp/part-7',
    },
    {
      kind: 'DCP Journey · Part 6',
      title: 'Aggregation Is Abstraction',
      body: 'How intelligent systems scale across homes, colonies, cities, and software assemblies.',
      meta: '1 August 2026 · 12 min',
      to: '/research/dcp/part-6',
    },
    {
      kind: 'DCP Journey · Part 5',
      title: 'The Human Harness',
      body: 'Why AI-native systems still need a UI that humans can reason through.',
      meta: '1 August 2026 · 10 min',
      to: '/research/dcp/part-5',
    },
    {
      kind: 'DCP Journey · Part 4',
      title: 'Draft Spec and Discussion',
      body: 'The working shape of the draft, put on the table before the discussion.',
      meta: '1 August 2026 · 14 min',
      to: '/research/dcp/part-4',
    },
    {
      kind: 'DCP Journey · Part 3',
      title: 'The Capability Contract',
      body: 'Claims, refusals, negotiation, and the three planes that keep intelligence out of the hot path.',
      meta: '1 August 2026 · 11 min',
      to: '/research/dcp/part-3',
    },
    {
      kind: 'Blog · Beyond AI Prototypes',
      title: 'Beyond AI Prototypes: What Production-Grade AI Engineering Really Means',
      body: 'The closing essay of the 12-part launch series. The future belongs to teams that can make AI reliable, governable, testable, and releasable.',
      meta: '14 May 2026 · 5 min',
      to: '/research/blog/articles/beyond-ai-prototypes-production-grade-ai-engineering',
    },
    {
      kind: 'DCP Journey · Part 2',
      title: 'The Baseline Shift',
      body: 'If construction gets cheap, the scarce work moves to governed assembly.',
      meta: '1 August 2026 · 9 min',
      to: '/research/dcp/part-2',
    },
  ]

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 44px' }}>
          <p
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#8a877f',
              margin: '0 0 18px',
            }}
          >
            Research
          </p>
          <h1
            style={{
              font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif",
              letterSpacing: '-0.02em',
              color: '#1c1b19',
              margin: '0 0 20px',
              maxWidth: '20ch',
              textWrap: 'pretty',
            }}
          >
            Thinking in public, before it is settled.
          </h1>
          <p
            style={{
              font: "400 18px/1.65 'Source Serif 4',serif",
              color: '#4a473f',
              margin: 0,
              maxWidth: '64ch',
              textWrap: 'pretty',
            }}
          >
            Two tracks. The DCP Journey is a single connected argument, published in order. The blog is everything
            else: notes from implementation, dead ends, and short essays that do not belong to the series.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '44px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 20,
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/research/dcp')}
            className="hover-border-ink"
            style={{
              textAlign: 'left',
              border: '1px solid #ddd9ce',
              background: '#fff',
              borderRadius: 3,
              padding: '28px 26px',
              cursor: 'pointer',
              fontFamily: "'IBM Plex Sans',sans-serif",
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  font: "500 10px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#8a877f',
                }}
              >
                Track 01 · Series
              </span>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>7 / 7 published</span>
            </div>
            <h2 style={{ font: "400 26px/1.2 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 12px' }}>
              The DCP Journey
            </h2>
            <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: '0 0 20px' }}>
              Seven parts, read in order: from the missing harness, through the capability contract and its draft
              specification, to human review and runtime observation of a living assembly.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 18 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} style={{ flex: 1, height: 3, background: '#1c1b19' }} />
              ))}
            </div>
            <span style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: 'oklch(0.48 0.09 250)' }}>
              Start at Part 1 →
            </span>
          </button>
          <div
            style={{
              border: '1px solid #ddd9ce',
              background: '#fff',
              borderRadius: 3,
              padding: '28px 26px',
              fontFamily: "'IBM Plex Sans',sans-serif",
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  font: "500 10px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#8a877f',
                }}
              >
                Track 02 · Notes
              </span>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>12 essays</span>
            </div>
            <h2 style={{ font: "400 26px/1.2 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 12px' }}>Blog</h2>
            <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: '0 0 20px' }}>
              Beyond AI Prototypes: a 12-essay launch series on AI-first release planning, model-flexible
              architecture, governed workflows, and production-grade enterprise AI.
            </p>
            <button
              type="button"
              onClick={() => navigate('/research/blog')}
              style={{
                background: 'none',
                border: 0,
                padding: 0,
                cursor: 'pointer',
                font: "500 13px/1 'IBM Plex Sans',sans-serif",
                color: 'oklch(0.48 0.09 250)',
              }}
            >
              Browse the blog →
            </button>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '52px 24px' }}>
          <h2
            style={{
              font: "500 13px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: '#8a877f',
              margin: '0 0 26px',
            }}
          >
            Recent writing
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recent.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => navigate(item.to)}
                className="hover-bg-wash"
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 0,
                  borderTop: '1px solid #e5e2da',
                  borderBottom: i === recent.length - 1 ? '1px solid #e5e2da' : undefined,
                  padding: '24px 0',
                  cursor: 'pointer',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                  gap: '8px 32px',
                  alignItems: 'baseline',
                }}
              >
                <div>
                  <span
                    style={{
                      font: "500 10px/1 'IBM Plex Mono',monospace",
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#8a877f',
                    }}
                  >
                    {item.kind}
                  </span>
                  <h3 style={{ font: "400 22px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '8px 0 0' }}>
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0 }}>
                    {item.body}
                  </p>
                  <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '10px 0 0' }}>
                    {item.meta}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px 64px' }}>
          <div
            style={{
              border: '1px solid #e5e2da',
              background: '#f4f2ec',
              borderRadius: 3,
              padding: 28,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ font: "400 21px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 8px' }}>
                Disagree with something here?
              </h2>
              <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0, maxWidth: '52ch' }}>
                Written arguments are easier to correct than shipped systems. Open a discussion thread or bring a
                domain example that breaks the model.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => navigate('/community')}
                style={{
                  background: '#1c1b19',
                  color: '#faf9f5',
                  border: '1px solid #1c1b19',
                  borderRadius: 3,
                  padding: '11px 16px',
                  font: "500 13px/1 'IBM Plex Sans',sans-serif",
                  cursor: 'pointer',
                }}
              >
                Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
