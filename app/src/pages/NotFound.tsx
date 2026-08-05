import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'

/*
 * NotFound — catch-all route for paths outside the source export's page
 * set. Not part of the design source; kept minimal and on-brand so an
 * unmatched URL doesn't produce a blank page.
 */
export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
      <Seo title="Page Not Found | Unfurl Systems" description="The page you're looking for doesn't exist. Return to the Unfurl Systems homepage to continue." />
      <p style={{ font: "500 11px/1 'IBM Plex Mono',monospace", letterSpacing: '.14em', textTransform: 'uppercase', color: '#073eab', margin: '0 0 18px' }}>
        404
      </p>
      <h1 style={{ font: "600 clamp(28px,4vw,40px)/1.2 'Poppins',sans-serif", color: '#0f172a', margin: '0 0 20px' }}>
        This page does not exist.
      </h1>
      <button
        type="button"
        onClick={() => navigate('/')}
        style={{ background: '#0f172a', color: '#f6f7f9', border: '1px solid #0f172a', borderRadius: 3, padding: '12px 18px', font: "500 14px/1 'IBM Plex Sans',sans-serif", cursor: 'pointer' }}
      >
        Back to home
      </button>
    </div>
  )
}
