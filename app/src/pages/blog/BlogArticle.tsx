import { Navigate, useNavigate, useParams } from 'react-router-dom'
import type { ContentBlock } from '../../data/blog'
import { getAdjacentPosts, getPostBySlug, publication, slugify } from '../../data/blog'
import { bodyP, h2Style, quoteWrap, quoteText, listStyle } from '../articles/shared'

// BlogArticle — essay detail page, ported from blog/app/articles/[slug]/page.tsx
// and components/ArticleLayout.tsx, TagList.tsx, Pagination.tsx. Body blocks
// reuse this site's article typography tokens (shared.ts) instead of the
// source app's separate CSS theme.
export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/research/blog/articles" replace />
  }

  const { previous, next } = getAdjacentPosts(post.slug)
  const READING_WIDTH = '700px'

  return (
    <div>
      <header style={{ borderBottom: '1px solid #e1e5ec' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '36px 24px 44px' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <button type="button" onClick={() => navigate('/research')} className="hover-text-ink" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>
              Research
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <button type="button" onClick={() => navigate('/research/blog')} className="hover-text-ink" style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#64748b' }}>
              Blog
            </button>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#94a3b8' }}>/</span>
            <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#334155' }}>Essay {String(post.number).padStart(2, '0')}</span>
          </nav>
          <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
            Essay {String(post.number).padStart(2, '0')} · {post.track} · {post.displayDate} · {post.readingTime}
          </p>
          <h1 style={{ font: "300 clamp(28px,4.2vw,40px)/1.2 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 18px', textWrap: 'pretty' }}>
            {post.title}
          </h1>
          <p style={{ font: "400 18px/1.55 'Source Serif 4',serif", color: '#475569', margin: '0 0 24px', textWrap: 'pretty' }}>{post.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center', paddingTop: 20, borderTop: '1px solid #e1e5ec' }}>
            <span style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#334155' }}>{publication.author}</span>
            <span style={{ font: "400 12px/1.5 'IBM Plex Mono',monospace", color: '#64748b' }}>{publication.authorBio}</span>
          </div>
        </div>
      </header>

      {post.coverImage && (
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <img
            src={post.coverImage}
            alt={post.coverAlt ?? post.title}
            style={{ width: '100%', height: 'auto', borderRadius: 3, border: '1px solid #e1e5ec', display: 'block', margin: '32px 0 0' }}
          />
        </div>
      )}

      <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '44px 24px 8px' }}>
        {post.body.map((block, i) => (
          <BlockView block={block} key={`${block.type}-${i}`} />
        ))}
      </div>

      <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '8px 24px 0' }}>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8, listStyle: 'none', margin: '0 0 0', padding: 0 }} aria-label="Article tags">
          {post.tags.map((t) => (
            <li key={t}>
              <button
                type="button"
                onClick={() => navigate(`/research/blog/articles?tag=${slugify(t)}`)}
                className="hover-border-ink"
                style={{ border: '1px solid #dbe3ef', background: '#fff', borderRadius: 2, padding: '5px 10px', font: "500 11px/1 'IBM Plex Mono',monospace", color: '#475569', cursor: 'pointer' }}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Article navigation" style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {previous && (
            <button
              type="button"
              onClick={() => navigate(`/research/blog/articles/${previous.slug}`)}
              className="hover-border-ink"
              style={{ textAlign: 'left', border: '1px solid #e1e5ec', background: 'none', borderRadius: 3, padding: 18, cursor: 'pointer' }}
            >
              <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>← Previous</p>
              <p style={{ font: "400 17px/1.35 'Source Serif 4',serif", color: '#0f172a', margin: 0 }}>{previous.title}</p>
            </button>
          )}
          {next && (
            <button
              type="button"
              onClick={() => navigate(`/research/blog/articles/${next.slug}`)}
              className="hover-border-ink"
              style={{ textAlign: 'left', border: '1px solid #e1e5ec', background: 'none', borderRadius: 3, padding: 18, cursor: 'pointer' }}
            >
              <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#64748b', margin: '0 0 10px' }}>Next →</p>
              <p style={{ font: "400 17px/1.35 'Source Serif 4',serif", color: '#0f172a', margin: 0 }}>{next.title}</p>
            </button>
          )}
        </div>
      </nav>

      <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '24px 24px 72px' }}>
        <div style={{ borderTop: '1px solid #e1e5ec', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#475569', margin: 0, maxWidth: '44ch' }}>
            Part of the {publication.title} launch series — {publication.positioning}.
          </p>
          <button
            type="button"
            onClick={() => navigate('/research/blog')}
            className="hover-border-ink"
            style={{ background: 'none', border: '1px solid #cbd5e1', borderRadius: 3, padding: '10px 14px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#0f172a', cursor: 'pointer' }}
          >
            Back to the journal
          </button>
        </div>
      </div>
    </div>
  )
}

function BlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p style={bodyP}>{block.text}</p>
    case 'heading':
      return block.level === 2 ? <h2 style={h2Style}>{block.text}</h2> : <h3 style={{ ...h2Style, font: "500 19px/1.35 'Source Serif 4',serif" }}>{block.text}</h3>
    case 'quote':
      return (
        <blockquote style={quoteWrap}>
          <p style={quoteText}>{block.text}</p>
        </blockquote>
      )
    case 'code':
      return (
        <div style={{ border: '1px solid #e1e5ec', background: '#0f172a', borderRadius: 3, padding: '18px 20px', margin: '0 0 24px', overflowX: 'auto' }}>
          <pre style={{ margin: 0, font: "400 13px/1.6 'IBM Plex Mono',monospace", color: '#e2e8f0' }}>
            <code>{block.text}</code>
          </pre>
        </div>
      )
    case 'list':
      return (
        <ul style={listStyle}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
  }
}
