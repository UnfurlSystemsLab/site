import { useMemo } from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { ARTICLES, ARTICLE_COUNT } from '../data/articles'
import Part1 from './articles/Part1'
import Part2 from './articles/Part2'
import Part3 from './articles/Part3'
import Part4 from './articles/Part4'
import Part5 from './articles/Part5'
import Part6 from './articles/Part6'
import Part7 from './articles/Part7'

const READING_WIDTH = '700px'
const SHOW_ALT = true

/*
 * Article — DCP Journey part detail page ("isArticle" block in the source
 * export, parameterized by `articlePart`). Renders the shared header
 * (breadcrumb, part number, title, subtitle, byline), the part-specific
 * body from src/pages/articles/PartN.tsx, an optional "Related Lab" card
 * (parts 3 and 4 only, matching `hasRelatedLab` in the source), and
 * previous/next series navigation.
 */
export default function Article() {
  const { partSlug } = useParams<{ partSlug: string }>()
  const navigate = useNavigate()
  const partNum = Number(partSlug?.replace(/^part-/, ''))

  const meta = useMemo(() => ARTICLES[partNum], [partNum])

  if (!meta) {
    return <Navigate to="/research/dcp" replace />
  }

  const hasPrev = partNum > 1
  const hasNext = partNum < ARTICLE_COUNT
  const prevMeta = hasPrev ? ARTICLES[partNum - 1] : undefined
  const nextMeta = hasNext ? ARTICLES[partNum + 1] : undefined

  return (
    <div>
      <article>
        <header style={{ borderBottom: '1px solid #e5e2da' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '36px 24px 44px' }}>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 32 }}>
              <button
                type="button"
                onClick={() => navigate('/research')}
                className="hover-text-ink"
                style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}
              >
                Research
              </button>
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#c2beb2' }}>/</span>
              <button
                type="button"
                onClick={() => navigate('/research/dcp')}
                className="hover-text-ink"
                style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}
              >
                DCP Journey
              </button>
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#c2beb2' }}>/</span>
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#3a382f' }}>Part {meta.part}</span>
            </nav>
            <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 18px' }}>
              Part {meta.part} of {ARTICLE_COUNT}
            </p>
            <h1 style={{ font: "300 clamp(30px,4.2vw,44px)/1.15 'Source Serif 4',serif", letterSpacing: '-0.02em', color: '#1c1b19', margin: '0 0 18px', textWrap: 'pretty' }}>
              {meta.title}
            </h1>
            <p style={{ font: "400 20px/1.55 'Source Serif 4',serif", color: '#5c594f', margin: '0 0 28px', textWrap: 'pretty' }}>
              {meta.subtitle}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center', paddingTop: 22, borderTop: '1px solid #e5e2da' }}>
              <span style={{ font: "400 13px/1 'IBM Plex Sans',sans-serif", color: '#3a382f' }}>Vinay Verma</span>
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>{meta.date}</span>
              <span style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#8a877f' }}>{meta.readTime} read</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  border: '1px solid #e5e2da',
                  background: '#fff',
                  padding: '4px 9px',
                  borderRadius: 2,
                  font: "500 10px/1 'IBM Plex Mono',monospace",
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: '#5c594f',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#9a978d' }} />
                Research
              </span>
            </div>
          </div>
        </header>

        <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '44px 24px 8px' }}>
          {partNum === 1 && <Part1 />}
          {partNum === 2 && <Part2 />}
          {partNum === 3 && <Part3 showAlt={SHOW_ALT} />}
          {partNum === 4 && <Part4 />}
          {partNum === 5 && <Part5 />}
          {partNum === 6 && <Part6 showAlt={SHOW_ALT} />}
          {partNum === 7 && <Part7 />}
        </div>

        {meta.hasRelatedLab && (
          <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '24px 24px 0' }}>
            <div
              style={{
                border: '1px solid #e5e2da',
                background: '#fff',
                borderRadius: 3,
                padding: 24,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
                gap: 20,
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#8a877f', margin: '0 0 10px' }}>
                  Related Lab
                </p>
                <h3 style={{ font: "400 19px/1.3 'Source Serif 4',serif", color: '#1c1b19', margin: '0 0 8px' }}>Domain Claim Protocol</h3>
                <p style={{ font: "400 14px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0 }}>
                  The current technical shape: schema, validation rules, worked examples, and what is still
                  unspecified.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    border: '1px solid #e5e2da',
                    padding: '4px 9px',
                    borderRadius: 2,
                    font: "500 10px/1 'IBM Plex Mono',monospace",
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    color: '#5c594f',
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'oklch(0.68 0.14 75)' }} />
                  Draft spec
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/labs/dcp')}
                  style={{
                    background: '#1c1b19',
                    color: '#faf9f5',
                    border: '1px solid #1c1b19',
                    borderRadius: 3,
                    padding: '10px 15px',
                    font: "500 13px/1 'IBM Plex Sans',sans-serif",
                    cursor: 'pointer',
                  }}
                >
                  Open the DCP Lab
                </button>
                <a
                  href="https://github.com/UnfurlSystemsLab/dcp"
                  className="hover-text-ink"
                  style={{ font: "400 12px/1 'IBM Plex Mono',monospace", color: '#6f6c62', textDecoration: 'none' }}
                >
                  UnfurlSystemsLab/dcp ↗
                </a>
              </div>
            </div>
          </div>
        )}

        <nav aria-label="Series navigation" style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '24px 24px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {hasPrev && prevMeta && (
              <button
                type="button"
                onClick={() => navigate(`/research/dcp/part-${prevMeta.part}`)}
                className="hover-border-ink"
                style={{ textAlign: 'left', border: '1px solid #e5e2da', background: 'none', borderRadius: 3, padding: 18, cursor: 'pointer' }}
              >
                <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 10px' }}>← Previous</p>
                <p style={{ font: "400 17px/1.35 'Source Serif 4',serif", color: '#1c1b19', margin: 0 }}>{prevMeta.title}</p>
              </button>
            )}
            {hasNext && nextMeta && (
              <button
                type="button"
                onClick={() => navigate(`/research/dcp/part-${nextMeta.part}`)}
                className="hover-border-ink"
                style={{ textAlign: 'left', border: '1px solid #e5e2da', background: 'none', borderRadius: 3, padding: 18, cursor: 'pointer' }}
              >
                <p style={{ font: "400 11px/1 'IBM Plex Mono',monospace", color: '#8a877f', margin: '0 0 10px' }}>Next →</p>
                <p style={{ font: "400 17px/1.35 'Source Serif 4',serif", color: '#1c1b19', margin: 0 }}>{nextMeta.title}</p>
              </button>
            )}
          </div>
        </nav>

        <div style={{ maxWidth: READING_WIDTH, margin: '0 auto', padding: '24px 24px 72px' }}>
          <div style={{ borderTop: '1px solid #e5e2da', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ font: "400 16px/1.6 'Source Serif 4',serif", color: '#5c594f', margin: 0, maxWidth: '44ch' }}>
              Found a hole in this argument, or a domain where it does not hold? That is the most useful thing you
              can send us.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href="https://github.com/UnfurlSystemsLab/dcp/discussions"
                className="hover-border-ink"
                style={{ border: '1px solid #d9d5ca', borderRadius: 3, padding: '10px 14px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', textDecoration: 'none' }}
              >
                Discuss this part
              </a>
              <button
                type="button"
                onClick={() => navigate('/community')}
                className="hover-border-ink"
                style={{ background: 'none', border: '1px solid #d9d5ca', borderRadius: 3, padding: '10px 14px', font: "500 13px/1 'IBM Plex Sans',sans-serif", color: '#1c1b19', cursor: 'pointer' }}
              >
                Community
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
