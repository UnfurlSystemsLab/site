import { useNavigate } from 'react-router-dom'
import { getAllPosts, publication, tracks } from '../../data/blog'
import BlogArticleCard from './BlogArticleCard'

/*
 * BlogHome — "Beyond AI Prototypes" series landing page, ported from the
 * standalone blog/ Next.js app's app/page.tsx (Hero + WhoFor + SeriesOverview
 * + TrackSection + essay index), restyled with this site's own type/color
 * tokens instead of the blueprint/cyan theme so the two tracks under
 * /research read as one system. Content is verbatim from data/blog.ts.
 */
export default function BlogHome() {
  const navigate = useNavigate()
  const posts = getAllPosts()

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '36px 24px 48px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button
              type="button"
              onClick={() => navigate('/research')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}
            >
              Research
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#c2beb2' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#3a382f' }}>Blog</span>
          </nav>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
            {publication.title} · {publication.positioning}
          </p>
          <h1 style={{ font: "300 clamp(30px,4.4vw,46px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 20px', maxWidth: '22ch', textWrap: 'pretty' }}>
            Beyond <em style={{ fontStyle: 'italic' }}>AI prototypes</em>.
          </h1>
          <p style={{ font: "400 18px/1.65 'Source Serif 4',serif", color: '#4a473f', margin: '0 0 28px', maxWidth: '62ch', textWrap: 'pretty' }}>
            {publication.tagline}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
            <a
              href="/downloads/beyond-ai-prototypes-journal.pdf"
              className="hover-dark"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#1c1b19', color: '#faf9f5', border: '1px solid #1c1b19', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", textDecoration: 'none' }}
            >
              Download PDF journal
            </a>
            <button
              type="button"
              onClick={() => navigate('/research/blog/articles')}
              className="hover-border-ink"
              style={{ background: 'none', color: '#1c1b19', border: '1px solid #d9d5ca', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", cursor: 'pointer' }}
            >
              Browse all essays
            </button>
            <button
              type="button"
              onClick={() => navigate('/research/blog/about')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: '12px 4px', font: "500 14px/1 'IBM Plex Sans',sans-serif", color: '#8a877f', cursor: 'pointer' }}
            >
              About this journal
            </button>
          </div>
          <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '18px 40px', margin: 0 }}>
            <StatItem label="Format" value="Launch series" />
            <StatItem label="Length" value="12 essays" />
            <StatItem label="Audience" value="Eng leaders" />
            <StatItem label="Tone" value="Engineering-led" />
          </dl>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da', background: '#f4f2ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
            Who this journal is for
          </p>
          <p style={{ font: "400 18px/1.65 'Source Serif 4',serif", color: '#3a382f', margin: '0 0 24px', maxWidth: '76ch', textWrap: 'pretty' }}>
            This journal is for engineering leaders, architects, AI platform teams, and product engineering teams
            who are moving beyond impressive AI demos and trying to make AI-first systems reliable, governable,
            testable, observable, and releasable.
          </p>
          <blockquote
            style={{
              margin: 0,
              padding: '18px 22px',
              border: '1px solid #ddd9ce',
              background: '#fff',
              borderRadius: 3,
              font: "300 22px/1.5 'Source Serif 4',serif",
              color: '#1c1b19',
              maxWidth: '76ch',
              textWrap: 'pretty',
            }}
          >
            Most AI prototypes fail not because the demo is weak, but because the engineering system around the
            demo is missing. Beyond AI Prototypes focuses on the production concerns that decide whether AI can be
            trusted in enterprise software: planning, testing, model flexibility, workflow governance,
            observability, auditability, and tenant boundaries.
          </blockquote>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #e5e2da' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 22px' }}>
            Two tracks
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {tracks.map((track) => (
              <div key={track.label} style={{ border: '1px solid #ddd9ce', background: '#fff', borderRadius: 3, padding: 24 }}>
                <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.1em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 12px' }}>
                  {track.label}
                </p>
                <h3 style={{ font: "400 21px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 10px' }}>{track.title}</h3>
                <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0 }}>{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px 64px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 22 }}>
            <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: 0 }}>
              The 12 essays
            </p>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>{publication.period}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post, i) => (
              <div key={post.slug} style={{ borderBottom: i === posts.length - 1 ? '1px solid #e5e2da' : undefined }}>
                <BlogArticleCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.1em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 6px' }}>{label}</dt>
      <dd style={{ font: "500 14px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', margin: 0 }}>{value}</dd>
    </div>
  )
}
