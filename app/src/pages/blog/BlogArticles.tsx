import { useNavigate, useSearchParams } from 'react-router-dom'
import { getAllPosts, slugify } from '../../data/blog'
import BlogArticleCard from './BlogArticleCard'

// BlogArticles — full essay index, ported from blog/app/articles/page.tsx,
// including the `?tag=` filter (tag chips link here via BlogArticle's
// TagList-equivalent).
export default function BlogArticles() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag') ?? undefined

  const allPosts = getAllPosts()
  const posts = tag ? allPosts.filter((post) => post.tags.some((postTag) => slugify(postTag) === tag)) : allPosts
  const activeTag = tag ? allPosts.flatMap((post) => post.tags).find((postTag) => slugify(postTag) === tag) : undefined

  return (
    <div>
      <section style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '36px 24px 44px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <button
              type="button"
              onClick={() => navigate('/research')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}
            >
              Research
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <button
              type="button"
              onClick={() => navigate('/research/blog')}
              className="hover-text-ink"
              style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}
            >
              Blog
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#334155' }}>{activeTag ?? 'Articles'}</span>
          </nav>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            {activeTag ? 'Filtered index' : 'Index · 12 essays'}
          </p>
          <h1 style={{ font: "300 clamp(28px,4vw,40px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 20px', textWrap: 'pretty' }}>
            {activeTag ?? 'Articles'}
          </h1>
          <p style={{ font: "400 17px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, maxWidth: '64ch' }}>
            {activeTag
              ? `Essays filed under ${activeTag}.`
              : 'The complete series on AI-first release planning, model-flexible architecture, governed workflows, and production-grade enterprise AI systems.'}
          </p>
        </div>
      </section>

      <section>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '48px 24px 64px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 22 }}>
            <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: 0 }}>
              Essay index
            </p>
            <span style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>{String(posts.length).padStart(2, '0')} / 12</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.map((post, i) => (
              <div key={post.slug} style={{ borderBottom: i === posts.length - 1 ? '1px solid #e1e5ec' : undefined }}>
                <BlogArticleCard post={post} compact />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
