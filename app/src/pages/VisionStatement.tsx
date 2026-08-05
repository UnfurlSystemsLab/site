import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'

/*
 * VisionStatement — the full "Our Vision" essay, linked from the Home
 * page's shortened opening statement via "Read the full vision statement".
 */
export default function VisionStatement() {
  const navigate = useNavigate()
  const width = '700px'

  return (
    <div>
      <Seo
        title="Our Vision: AI-Ready Intelligent Components | Unfurl Systems"
        description="Unfurl Systems' vision for AI agent orchestration: software components that describe their capabilities, dependencies, boundaries, and faults so humans and AI can safely compose larger systems."
      />
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '56px 24px 44px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}
            >
              Home
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#334155' }}>Vision</span>
          </nav>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            Vision
          </p>
          <h1 style={{ font: "600 clamp(30px,4vw,42px)/1.18 'Poppins',sans-serif", letterSpacing: '-0.02em', color: '#0f172a', margin: 0, textWrap: 'pretty' }}>
            Our Vision
          </h1>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '44px 24px 24px' }}>
          <p style={{ font: "400 19px/1.7 'Source Serif 4',serif", color: '#0f172a', margin: '0 0 24px', textWrap: 'pretty' }}>
            At Unfurl Systems, we are researching how to create AI-ready intelligent components — software
            components that can describe what they do, what they need, where their responsibilities begin and end,
            and how they can participate safely in larger systems.
          </p>
          <p style={{ font: "400 17px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 24px' }}>
            Software engineering is entering a new phase. As AI makes code easier and less expensive to produce,
            writing individual pieces of software will no longer be the primary challenge. The greater challenge
            will be discovering, understanding, selecting, assembling, governing, and operating the right
            components together.
          </p>
          <p style={{ font: "400 17px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 24px' }}>
            This progression is already visible. Software has moved from monolithic applications to microservices,
            distributed platforms, and increasingly to platforms of platforms. Systems are becoming more
            interconnected, more dynamic, and more difficult for any single person or team to understand
            completely.
          </p>
          <p style={{ font: "400 17px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 24px' }}>
            At the same time, the baseline of software engineering is being redefined. Developers will still write
            code, but more of their work will involve composing existing capabilities, resolving dependencies,
            defining boundaries, validating interactions, and ensuring that the resulting system remains
            understandable and governable.
          </p>
          <p style={{ font: "400 17px/1.65 'Source Serif 4',serif", color: '#334155', margin: '0 0 20px' }}>
            We believe the next generation of software infrastructure will require components that are not merely
            executable, but self-describing and assembly-ready. Humans, AI systems, and other components should be
            able to understand:
          </p>
          <ul style={{ margin: '0 0 28px', paddingLeft: 22, font: "400 17px/1.75 'Source Serif 4',serif", color: '#334155' }}>
            <li>what a component offers,</li>
            <li>what it depends on,</li>
            <li>what it owns,</li>
            <li>what it refuses,</li>
            <li>what constraints apply,</li>
            <li>how it can fail,</li>
            <li>and how it affects the larger assembly.</li>
          </ul>
          <p style={{ font: "400 18px/1.7 'Source Serif 4',serif", color: '#0f172a', margin: 0, textWrap: 'pretty' }}>
            Our research explores the foundations required for that future: a world where humans and AI can
            inspect, assemble, govern, operate, and evolve intelligent systems together.
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: width, margin: '0 auto', padding: '32px 24px 64px', display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button
            type="button"
            onClick={() => navigate('/research')}
            className="hover-dark"
            style={{ background: '#0f172a', color: '#f6f7f9', border: '1px solid #0f172a', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", cursor: 'pointer' }}
          >
            Explore the research
          </button>
          <button
            type="button"
            onClick={() => navigate('/labs')}
            className="hover-border-ink"
            style={{ background: 'none', color: '#0f172a', border: '1px solid #cbd5e1', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", cursor: 'pointer' }}
          >
            View the Labs
          </button>
        </div>
      </section>
    </div>
  )
}
