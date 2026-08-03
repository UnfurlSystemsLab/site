import { useNavigate } from 'react-router-dom'

/*
 * Research — research index ("isResearch" block in the source export).
 * Introduces the two tracks (DCP Journey series, Blog).
 */
export default function Research() {
  const navigate = useNavigate()

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 44px' }}>
          <p
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 18px',
            }}
          >
            Research
          </p>
          <h1
            style={{
              font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif",
              letterSpacing: '-0.02em',
              color: '#0f172a',
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
              color: '#475569',
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

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
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
              border: '1px solid #dbe3ef',
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
                  color: '#073eab',
                }}
              >
                Track 01 · Series
              </span>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>7 / 7 published</span>
            </div>
            <h2 style={{ font: "400 26px/1.2 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 12px' }}>
              The DCP Journey
            </h2>
            <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 20px' }}>
              Seven parts, read in order: from the missing harness, through the capability contract and its draft
              specification, to human review and runtime observation of a living assembly.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 18 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} style={{ flex: 1, height: 3, background: '#0f172a' }} />
              ))}
            </div>
            <span style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#2b59d4' }}>
              Start at Part 1 →
            </span>
          </button>
          <div
            style={{
              border: '1px solid #dbe3ef',
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
                  color: '#073eab',
                }}
              >
                Track 02 · Notes
              </span>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>12 essays</span>
            </div>
            <h2 style={{ font: "400 26px/1.2 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 12px' }}>Blog</h2>
            <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 20px' }}>
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
                color: '#2b59d4',
              }}
            >
              Browse the blog →
            </button>
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px 64px' }}>
          <div
            style={{
              border: '1px solid #e1e5ec',
              background: '#eef1f6',
              borderRadius: 3,
              padding: 28,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ font: "400 21px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 8px' }}>
                Disagree with something here?
              </h2>
              <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, maxWidth: '52ch' }}>
                Written arguments are easier to correct than shipped systems. Open a discussion thread or bring a
                domain example that breaks the model.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => navigate('/community')}
                style={{
                  background: '#0f172a',
                  color: '#f6f7f9',
                  border: '1px solid #0f172a',
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
