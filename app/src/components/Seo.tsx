import { useEffect } from 'react'

/*
 * Seo — per-route <title> and meta description, since this is a
 * client-rendered SPA where index.html only supplies one static default.
 * Pattern: a tiny head-manager, applied on mount/update rather than pulling
 * in react-helmet for a handful of tags.
 */
export default function Seo({ title, description, canonical }: { title: string; description: string; canonical?: string }) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content') ?? null
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)

    let link: HTMLLinkElement | null = null
    if (canonical) {
      link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription)
      }
      if (link) {
        link.remove()
      }
    }
  }, [title, description, canonical])

  return null
}
