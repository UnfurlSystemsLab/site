import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'

/*
 * About — research posture ("isAbout" block in the source export):
 * mission statement, research-first principle, principles list,
 * maintainers, and contact CTA.
 */
export default function About() {
  const navigate = useNavigate()
  const width = '700px'

  return (
    <div>
      <Seo
        title="About Unfurl Systems | AI Research Group"
        description="Unfurl Systems is an independent research group building the human and AI harness for intelligent systems, from research to product."
      />
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '56px 24px 40px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            About
          </p>
          <h1 style={{ font: "600 clamp(30px,4vw,42px)/1.18 'Poppins',sans-serif", letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 22px', textWrap: 'pretty' }}>
            A research posture, not a product roadmap.
          </h1>
          <p style={{ font: "400 19px/1.7 'Source Serif 4',serif", color: '#334155', margin: '0 0 24px', textWrap: 'pretty' }}>
            Unfurl Systems studies how software components can describe themselves, compose under contract, and stay
            legible to the people accountable for them. We publish the reasoning as we go, alongside the
            specifications and prototypes that reasoning produces.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "400 24px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 16px' }}>
            Research-first, not launch-first
          </h2>
          <p style={{ font: "400 17px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 20px', textWrap: 'pretty' }}>
            We would rather publish an argument with visible gaps than a polished claim we can't yet back up. Nothing
            on this site should be read as an announcement of a finished product. Specifications are drafts until
            they say otherwise; prototypes are prototypes.
          </p>
          <div style={{ borderLeft: '2px solid #0f172a', paddingLeft: 20 }}>
            <p style={{ font: "300 21px/1.5 'Source Serif 4',serif", color: '#0f172a', margin: 0, textWrap: 'pretty' }}>
              Published specifications and prototypes on this site are not necessarily production-ready, and we say
              so on every page where it matters.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "400 24px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 20px' }}>Principles</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <Principle title="Status is not optional" body="Every idea, spec, and prototype carries a maturity label, on the site and in its repository." />
            <Principle title="Summarize, don't duplicate" body="The website explains; the repository is the source of truth for what actually runs." />
            <Principle title="Disagreement is useful input" body="A well-argued objection or a domain counterexample moves the work forward faster than agreement does." />
            <Principle title="Publish only what's ready to be read" body="We would rather ship four public Labs with clear boundaries than promote every internal experiment." last />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e1e5ec', background: '#eef1f6' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '44px 24px' }}>
          <h2 style={{ font: "400 24px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 18px' }}>Maintainers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Maintainer name="Ruth Calder" role="DCP specification and the research writing" />
            <Maintainer name="Theo Marsh" role="Fabric and the matching engine" />
            <Maintainer name="Priya Ostrander" role="Studio and the human-review interface" />
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '44px 24px 64px' }}>
          <h2 style={{ font: "400 21px/1.3 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 10px' }}>Talk to us</h2>
          <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#475569', margin: '0 0 18px' }}>
            Questions about the research posture, a maintainer introduction, or a collaboration idea.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href="mailto:research@unfurlsystems.com"
              style={{ background: '#0f172a', color: '#f6f7f9', border: '1px solid #0f172a', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", textDecoration: 'none' }}
            >
              research@unfurlsystems.com
            </a>
            <button
              type="button"
              onClick={() => navigate('/community')}
              className="hover-border-ink"
              style={{ background: 'none', border: '1px solid #cbd5e1', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#0f172a', cursor: 'pointer' }}
            >
              Community
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Principle({ title, body, last }: { title: string; body: string; last?: boolean }) {
  return (
    <div style={{ borderTop: '1px solid #e1e5ec', borderBottom: last ? '1px solid #e1e5ec' : undefined, padding: '18px 0' }}>
      <h3 style={{ font: "500 16px/1.3 'IBM Plex Sans',sans-serif", color: '#0f172a', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0 }}>{body}</p>
    </div>
  )
}

function Maintainer({ name, role }: { name: string; role: string }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
      <span style={{ font: "500 15px/1.4 'IBM Plex Sans',sans-serif", color: '#0f172a', minWidth: 120 }}>{name}</span>
      <span style={{ font: "400 14px/1.5 'Source Serif 4',serif", color: '#475569' }}>{role}</span>
    </div>
  )
}
