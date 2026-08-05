import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import VisionStatement from './pages/VisionStatement'
import Research from './pages/Research'
import DcpJourney from './pages/DcpJourney'
import Article from './pages/Article'
import BlogHome from './pages/blog/BlogHome'
import BlogArticles from './pages/blog/BlogArticles'
import BlogArticle from './pages/blog/BlogArticle'
import BlogAbout from './pages/blog/BlogAbout'
import Labs from './pages/Labs'
import LabDetail from './pages/LabDetail'
import Community from './pages/Community'
import About from './pages/About'
import VisualSystem from './pages/VisualSystem'
import NotFound from './pages/NotFound'

/*
 * App — top-level route table.
 * Pattern: Composition root. Maps every `<sc-if>` page state from the
 * design export (isHome, isResearch, isDcp, isArticle, isLabs, isLab,
 * isCommunity, isAbout, isSystem) onto a real react-router-dom route, and
 * every `{{ go.* }}` navigation action onto the corresponding path.
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<VisionStatement />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/dcp" element={<DcpJourney />} />
          <Route path="/research/dcp/:partSlug" element={<Article />} />
          {/* "Beyond AI Prototypes" — the standalone blog/ Next.js app,
              ported in full so that repository can be retired. */}
          <Route path="/research/blog" element={<BlogHome />} />
          <Route path="/research/blog/articles" element={<BlogArticles />} />
          <Route path="/research/blog/articles/:slug" element={<BlogArticle />} />
          <Route path="/research/blog/about" element={<BlogAbout />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/:slug" element={<LabDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/system" element={<VisualSystem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
