import { useNavigate } from 'react-router-dom'
import type { Post } from '../../data/blog'

// BlogArticleCard — one essay row, reused by BlogHome's index preview and
// BlogArticles' full listing (`compact` tightens the excerpt for the
// listing page, matching the source app's `post`/`post-compact` variants).
export default function BlogArticleCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  const navigate = useNavigate()
  const number = String(post.number).padStart(2, '0')

  return (
    <button
      type="button"
      onClick={() => navigate(`/research/blog/articles/${post.slug}`)}
      className="hover-bg-wash"
      style={{
        textAlign: 'left',
        background: 'none',
        border: 0,
        borderTop: '1px solid #e5e2da',
        padding: compact ? '18px 0' : '24px 0',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
        gap: '8px 32px',
        alignItems: 'baseline',
        width: '100%',
      }}
    >
      <div>
        <span style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#8a877f' }}>
          Essay {number} / 12 · {post.track}
        </span>
        <h3 style={{ font: `400 ${compact ? 19 : 22}px/1.3 'Source Serif 4',serif`, color: '#1c1b19', margin: '8px 0 0' }}>{post.title}</h3>
      </div>
      <div>
        <p style={{ font: "400 15px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0 }}>{post.excerpt}</p>
        <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '10px 0 0' }}>
          {post.displayDate} · {post.readingTime}
        </p>
      </div>
    </button>
  )
}
