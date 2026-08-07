import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'

/*
 * Home — landing page ("isHome" block in the source export).
 * Sections: hero (vision statement + status card), three pillar cards
 * (Research/Labs/Community), the "Software, Assembled" illustration, DCP
 * Journey teaser, Labs teaser, open invitation.
 */
export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <Seo
        title="AI Agent Orchestration Platform | Unfurl Systems"
        description="Unfurl Systems builds an AI agent orchestration platform for model-agnostic, production-grade engineering workflows and research."
      />
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '76px 24px 64px',
          }}
        >
          <p
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 22px',
            }}
          >
            Our Vision
          </p>
          <h1
            style={{
              font: "600 clamp(32px,4.6vw,52px)/1.1 'Poppins',sans-serif",
              letterSpacing: '-0.02em',
              color: '#0f172a',
              margin: '0 0 32px',
              textWrap: 'pretty',
            }}
          >
            Our Vision
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '48px 64px',
              alignItems: 'stretch',
            }}
          >
          <p
            style={{
              font: "400 18px/1.6 'Source Serif 4',serif",
              color: '#475569',
              margin: 0,
              maxWidth: '58ch',
              textWrap: 'pretty',
            }}
          >
            At Unfurl Systems, we are researching AI-ready intelligent components for a future where code becomes
            easier to produce, but assembling the right components becomes the real engineering challenge. As
            software evolves from microservices to interconnected platforms of platforms, we believe components
            must be able to describe their capabilities, dependencies, boundaries, and faults so that humans and
            AI can safely understand, compose, and govern larger systems.
          </p>
          <div style={{ position: 'relative', border: '1px solid #e1e5ec', borderRadius: 3, overflow: 'hidden', background: '#0f172a' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/UnfurlSystems_poster.webp"
              aria-describedby="vision-demo-description"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/UnfurlSystems.mp4" type="video/mp4" />
            </video>
            <span id="vision-demo-description" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
              Animated visualization of the Unfurl System: a holographic assembly board showing components, ports,
              identity, validation, and telemetry connecting into a governed system.
            </span>
          </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/vision')}
            className="hover-text-ink"
            style={{ display: 'block', background: 'none', border: 0, padding: 0, margin: '16px 0 32px', cursor: 'pointer', font: "500 14px/1 'IBM Plex Sans',sans-serif", color: '#2b59d4' }}
          >
            Read the full vision statement →
          </button>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button
              type="button"
              onClick={() => navigate('/research')}
              className="hover-dark"
              style={{
                background: '#0f172a',
                color: '#f6f7f9',
                border: '1px solid #0f172a',
                borderRadius: 3,
                padding: '12px 18px',
                font: "500 14px/1 'IBM Plex Sans',sans-serif",
                cursor: 'pointer',
              }}
            >
              Explore the research
            </button>
            <button
              type="button"
              onClick={() => navigate('/labs')}
              className="hover-border-ink"
              style={{
                background: 'none',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                borderRadius: 3,
                padding: '12px 18px',
                font: "500 14px/1 'IBM Plex Sans',sans-serif",
                cursor: 'pointer',
              }}
            >
              View the Labs
            </button>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div
          style={{
            maxWidth: 1160,
            margin: '0 auto',
            padding: '56px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: 24,
          }}
        >
          <PillarCard
            onClick={() => navigate('/research')}
            eyebrow="01 · Research"
            title="The ideas and the reasoning"
            body="Problem framing, design philosophy, and the seven-part DCP Journey written for a broad technical audience."
            cta="Read the research →"
          />
          <PillarCard
            onClick={() => navigate('/labs')}
            eyebrow="02 · Labs"
            title="What exists today"
            body="Research specs and implementation Labs with current scope, status, and public repositories."
            cta="Inspect the Labs →"
          />
          <PillarCard
            onClick={() => navigate('/community')}
            eyebrow="03 · Community"
            title="Open questions"
            body="Where to disagree, bring a domain example, report a gap in the model, or contribute an implementation."
            cta="Take part →"
          />
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px' }}>
          <img
            src="/SoftwareAssembled.png"
            alt="Software, assembled: DCP from catalog to deployment, in five stages — reusable substrates, components, DCP catalog, draft assembly in Fabric Studio, and signed deployment assembly."
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3, border: '1px solid #e1e5ec' }}
          />
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div>
              <p
                style={{
                  font: "500 11px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#073eab',
                  margin: '0 0 12px',
                }}
              >
                Current research
              </p>
              <h2 style={{ font: "400 30px/1.2 'Source Serif 4',serif", color: '#0f172a', margin: 0 }}>
                The DCP Journey
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/research/dcp')}
              className="hover-border-ink"
              style={{
                background: 'none',
                border: '1px solid #cbd5e1',
                borderRadius: 3,
                padding: '10px 14px',
                font: "500 13px/1 'IBM Plex Sans',sans-serif",
                color: '#0f172a',
                cursor: 'pointer',
              }}
            >
              Series overview
            </button>
          </div>
          <p
            style={{
              font: "400 17px/1.65 'Source Serif 4',serif",
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: '62ch',
            }}
          >
            A connected seven-part argument: why component assembly currently has no harness, what a capability
            contract would need to say, and what a human review layer looks like once machines do most of the
            assembly. All seven parts are published.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 24, flexWrap: 'wrap' }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <span
                key={i}
                style={{ flex: 1, minWidth: 24, height: 3, background: '#0f172a', marginLeft: i ? 4 : 0 }}
              />
            ))}
            <span
              style={{
                font: "500 10px/1 'IBM Plex Mono',monospace",
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#073eab',
                marginLeft: 14,
              }}
            >
              7 of 7 published
            </span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            <button
              type="button"
              onClick={() => navigate('/research/dcp/part-1')}
              className="hover-border-ink"
              style={{
                textAlign: 'left',
                gridColumn: 'span 1',
                border: '1px solid #dbe3ef',
                background: '#fff',
                borderRadius: 3,
                padding: 24,
                cursor: 'pointer',
                fontFamily: "'IBM Plex Sans',sans-serif",
              }}
            >
              <p
                style={{
                  font: "500 10px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#2b59d4',
                  margin: '0 0 12px',
                }}
              >
                Start here · Part 1
              </p>
              <h3 style={{ font: "400 21px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 10px' }}>
                The Missing Harness
              </h3>
              <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 16px' }}>
                Every era had a harness; AI is becoming a new kind of consumer of capabilities, and the harness we
                give it today is still fragmented.
              </p>
              <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>10 min read</span>
            </button>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                border: '1px solid #dbe3ef',
                background: '#fff',
                borderRadius: 3,
                padding: '8px 24px',
              }}
            >
              {[
                ['02', 'The Baseline Shift', 2],
                ['03', 'The Capability Contract', 3],
                ['04', 'Draft Spec and Discussion', 4],
                ['05', 'The Human Harness', 5],
                ['06', 'Aggregation Is Abstraction', 6],
                ['07', 'The Living Assembly', 7],
              ].map(([num, title, part], i, arr) => (
                <button
                  key={part as number}
                  type="button"
                  onClick={() => navigate(`/research/dcp/part-${part}`)}
                  className="hover-fade"
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 0,
                    borderBottom: i < arr.length - 1 ? '1px solid #eef0f3' : undefined,
                    padding: '12px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    gap: 14,
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>{num}</span>
                  <span style={{ font: "400 16px/1.4 'Source Serif 4',serif", color: '#0f172a' }}>{title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px' }}>
          <p
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 12px',
            }}
          >
            Labs
          </p>
          <h2 style={{ font: "400 30px/1.2 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 12px' }}>
            Research specs and implementation Labs
          </h2>
          <p
            style={{
              font: "400 17px/1.65 'Source Serif 4',serif",
              color: '#475569',
              margin: '0 0 32px',
              maxWidth: '62ch',
            }}
          >
            Each Lab is a place where an idea from the research is being made concrete enough to be wrong in public.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20 }}>
            <LabCard
              onClick={() => navigate('/labs/dcp')}
              color="#f59e0b"
              status="Draft spec"
              title="Domain Claim Protocol"
              body="How a component states what it can do, what it needs, and under what conditions it may be used."
              repo="UnfurlSystemsLab/dcp"
            />
            <LabCard
              onClick={() => navigate('/labs/fabric')}
              color="#16a34a"
              status="Active development"
              title="Unfurl Fabric"
              body="A design-time compiler that matches needs to claims, validates the result, and produces a signed composition."
              repo="UnfurlSystemsLab/unfurl-fabric"
            />
            <LabCard
              onClick={() => navigate('/labs/studio')}
              color="#7c3aed"
              status="Prototype"
              title="Unfurl Studio"
              body="The human harness: a way to see, question, and govern an assembly that a machine proposed."
              repo="UnfurlSystemsLab/unfurl-ui"
            />
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px 72px', textAlign: 'center' }}>
          <p
            style={{
              font: "500 11px/1 'IBM Plex Mono',monospace",
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#073eab',
              margin: '0 0 18px',
            }}
          >
            Open invitation
          </p>
          <p
            style={{
              font: "300 26px/1.4 'Source Serif 4',serif",
              color: '#0f172a',
              margin: '0 0 26px',
              textWrap: 'pretty',
            }}
          >
            This work is evolving. Challenge the model, bring a domain example, or help implement it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => navigate('/community')}
              className="hover-dark"
              style={{
                background: '#0f172a',
                color: '#f6f7f9',
                border: '1px solid #0f172a',
                borderRadius: 3,
                padding: '12px 18px',
                font: "500 14px/1 'IBM Plex Sans',sans-serif",
                cursor: 'pointer',
              }}
            >
              Ways to take part
            </button>
            <a
              href="https://github.com/UnfurlSystemsLab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-border-ink"
              style={{
                background: 'none',
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                borderRadius: 3,
                padding: '12px 18px',
                font: "500 14px/1 'IBM Plex Sans',sans-serif",
                textDecoration: 'none',
              }}
            >
              Open the repositories
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function PillarCard({
  onClick,
  eyebrow,
  title,
  body,
  cta,
}: {
  onClick: () => void
  eyebrow: string
  title: string
  body: string
  cta: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover-border-soft"
      style={{
        textAlign: 'left',
        border: '1px solid #e1e5ec',
        background: '#fff',
        borderRadius: 3,
        padding: '26px 24px',
        cursor: 'pointer',
        fontFamily: "'IBM Plex Sans',sans-serif",
      }}
    >
      <p
        style={{
          font: "500 10px/1 'IBM Plex Mono',monospace",
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: '#073eab',
          margin: '0 0 14px',
        }}
      >
        {eyebrow}
      </p>
      <h2 style={{ font: "400 22px/1.25 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 10px' }}>{title}</h2>
      <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 16px' }}>{body}</p>
      <span style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#2b59d4' }}>{cta}</span>
    </button>
  )
}

function LabCard({
  onClick,
  color,
  status,
  title,
  body,
  repo,
}: {
  onClick: () => void
  color: string
  status: string
  title: string
  body: string
  repo: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover-border-soft"
      style={{
        textAlign: 'left',
        border: '1px solid #e1e5ec',
        background: '#fff',
        borderRadius: 3,
        padding: 22,
        cursor: 'pointer',
        fontFamily: "'IBM Plex Sans',sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
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
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color }} />
        {status}
      </span>
      <h3 style={{ font: "400 20px/1.25 'Source Serif 4',serif", color: '#0f172a', margin: 0 }}>{title}</h3>
      <p style={{ font: "400 14px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, flex: 1 }}>{body}</p>
      <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>{repo}</span>
    </button>
  )
}
