import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ScrollToTop — react-router doesn't reset scroll position on navigation
// (unlike full page loads), so this resets it on every pathname change.
// Rendered once inside BrowserRouter; renders nothing itself.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
