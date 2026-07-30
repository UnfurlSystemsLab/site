/*
 * Community — ways to participate ("isCommunity" block in the source
 * export): four participation cards, open questions list, roadmap, and a
 * code-of-conduct callout. Every CTA here is an external link (GitHub,
 * mailto) in the source, so no router navigation is needed on this page.
 */
export default function Community() {
  return (
    <div>
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 44px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
            Community
          </p>
          <h1 style={{ font: "300 clamp(30px,4vw,44px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 20px', maxWidth: '22ch', textWrap: 'pretty' }}>
            Question it, break it, or help build it.
          </h1>
          <p style={{ font: "400 18px/1.65 'Source Serif 4',serif", color: '#4a473f', margin: 0, maxWidth: '64ch', textWrap: 'pretty' }}>
            Nothing here is finished, which means the most useful contribution is often a disagreement, a domain
            example that breaks the model, or a gap report — not just code.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          <ParticipateCard title="Discuss an idea" body="Argue with a research article or propose a variant of the model in GitHub Discussions." href="https://github.com/orgs/UnfurlSystemsLab/discussions" cta="Open Discussions ↗" />
          <ParticipateCard title="Report a gap" body="Found a case the schema or a Lab doesn't cover? File it against the relevant repository." href="https://github.com/UnfurlSystemsLab/dcp/issues/new" cta="Open an issue ↗" />
          <ParticipateCard title="Bring a domain example" body="The model is tested by real cases. Tell us where it holds and where it doesn't." href="mailto:research@unfurl.systems?subject=Domain%20example" cta="Send an example ↗" />
          <ParticipateCard title="Contribute code" body="Each repository has its own contribution guide, issue templates, and code of conduct." href="https://github.com/UnfurlSystemsLab" cta="Browse repositories ↗" />
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Open questions right now
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            <li style={{ borderTop: '1px solid #e5e2da', padding: '18px 0', font: "400 17px/1.55 'Source Serif 4',serif", color: '#3a382f' }}>
              Should DCP bounds be a closed vocabulary or arbitrary predicates?{' '}
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>— raised in Part 3</span>
            </li>
            <li style={{ borderTop: '1px solid #e5e2da', padding: '18px 0', font: "400 17px/1.55 'Source Serif 4',serif", color: '#3a382f' }}>
              What does aggregate consent look like when claims compose across a whole assembly?{' '}
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>— raised in Part 6 draft</span>
            </li>
            <li style={{ borderTop: '1px solid #e5e2da', borderBottom: '1px solid #e5e2da', padding: '18px 0', font: "400 17px/1.55 'Source Serif 4',serif", color: '#3a382f' }}>
              How much of contract verification can happen without a live network call?{' '}
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>— open in Fabric</span>
            </li>
          </ul>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <h2 style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Roadmap and current priorities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            <RoadmapCard label="Now" body="Publish Parts 5–7, harden the bounds vocabulary." />
            <RoadmapCard label="Next" body="Open Studio screenshots and a walkthrough of a real assembly review." />
            <RoadmapCard label="Later" body="Formalize status automation between repositories and this site." />
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '44px 24px 64px' }}>
          <div style={{ border: '1px solid #e5e2da', borderRadius: 3, padding: 26, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, alignItems: 'center' }}>
            <div>
              <h2 style={{ font: "400 20px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 8px' }}>Code of conduct</h2>
              <p style={{ font: "400 14px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0 }}>
                Every repository and discussion space follows the same code of conduct. Read it before your first
                contribution.
              </p>
            </div>
            <a
              href="https://github.com/UnfurlSystemsLab/.github/blob/main/CODE_OF_CONDUCT.md"
              className="hover-border-ink"
              style={{ justifySelf: 'start', border: '1px solid #d9d5ca', borderRadius: 3, padding: '11px 16px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', textDecoration: 'none' }}
            >
              Read the code of conduct
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ParticipateCard({ title, body, href, cta }: { title: string; body: string; href: string; cta: string }) {
  return (
    <div style={{ border: '1px solid #ddd9ce', background: '#fff', borderRadius: 3, padding: 24 }}>
      <h2 style={{ font: "400 19px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 10px' }}>{title}</h2>
      <p style={{ font: "400 14px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: '0 0 16px' }}>{body}</p>
      <a href={href} style={{ font: "500 13px/1 'IBM Plex Sans',sans-serif", color: 'oklch(0.48 0.09 250)', textDecoration: 'none' }}>
        {cta}
      </a>
    </div>
  )
}

function RoadmapCard({ label, body }: { label: string; body: string }) {
  return (
    <div style={{ border: '1px solid #ddd9ce', background: '#fff', borderRadius: 3, padding: 18 }}>
      <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.1em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 10px' }}>{label}</p>
      <p style={{ font: "400 15px/1.55 'Source Serif 4',serif", color: '#1c1b19', margin: 0 }}>{body}</p>
    </div>
  )
}
