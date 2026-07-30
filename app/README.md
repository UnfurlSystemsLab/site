# Unfurl Systems — Site

The Unfurl Systems research site (home, Research, the DCP Journey series, Labs,
Community, About), built with Vite + React + TypeScript + react-router-dom.

This app is a faithful rebuild of the design mockup at
`site/design/Research lab website design-handoff/.../Unfurl Systems Site.dc.html`
(a design-tool export using a custom `{{ go.x }}` navigation binding and
`sc-if` page-conditional syntax). Every `go.*` action was converted to a real
route, every `sc-if` block to its own page component, and `style-hover`
attributes to real CSS `:hover` rules. Copy is transcribed verbatim from the
source — nothing here is placeholder text.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and produce a production build in dist/
npm run preview  # serve the production build locally
npm run lint      # oxlint
```

## Structure

```
src/
  App.tsx              route table
  main.tsx              entry point
  components/
    Layout.tsx          shared sticky header/nav + footer, route-driven active state
  pages/
    Home.tsx
    Research.tsx        research index (DCP Journey + Blog tracks)
    DcpJourney.tsx       DCP Journey series overview
    articles/
      Part1.tsx … Part7.tsx   the seven DCP Journey articles
      shared.ts          shared article layout/typography helpers
    Article.tsx          blog entry point (aliases to Part 1 — the source
                         has no separate blog content; go.article always
                         resolves to go.part1 there too)
    Labs.tsx             labs index
    LabDetail.tsx        Lab detail (full content for DCP; hero-only for
                         Fabric/Studio, matching what the source provides)
    Community.tsx
    About.tsx
    VisualSystem.tsx     visual-system reference page (footer link)
    NotFound.tsx         404 for unmatched paths (not in the source design)
  data/
    articles.ts          structured DCP Journey article metadata
    labs.ts               structured Labs metadata
  styles/
    global.css            ported reset, fonts, and hover-state utility classes
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/research` | Research index |
| `/research/dcp` | DCP Journey overview |
| `/research/dcp/part-1` … `/part-7` | DCP Journey articles |
| `/research/blog` | Blog (alias to Part 1) |
| `/labs` | Labs index |
| `/labs/dcp` | DCP Lab detail |
| `/labs/fabric` | Unfurl Fabric Lab |
| `/labs/studio` | Unfurl Studio Lab |
| `/community` | Community |
| `/about` | About |
| `/system` | Visual system reference |
| `*` | 404 |

## Notes

- Fonts (Source Serif 4, IBM Plex Sans, IBM Plex Mono) are loaded via Google
  Fonts `<link>` tags in `index.html`, matching the source's `<helmet>`.
- The `Unfurl Systems Website.html` file under `site/design/` is a bundled
  build artifact from the design tool, not source — it was not used here.
