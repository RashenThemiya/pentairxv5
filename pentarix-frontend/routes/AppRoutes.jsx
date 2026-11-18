import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop'
import ScrollReveal from '../src/components/ScrollReveal'
import Home from '../src/pages/Home/Home'
const Company = lazy(() => import('../src/pages/Company/Company'))
const About = lazy(() => import('../src/pages/Company/About/About'))
const Minds = lazy(() => import('../src/pages/Company/Minds/Minds'))
const WhatDrives = lazy(() => import('../src/pages/Company/WhatDrives/WhatDrives'))
const Quality = lazy(() => import('../src/pages/Company/Quality/Quality'))
const WhyChoose = lazy(() => import('../src/pages/Company/WhyChoose/WhyChoose'))
const Partners = lazy(() => import('../src/pages/Company/Partners/Partners'))
const Technologies = lazy(() => import('../src/pages/Company/Technologies/Technologies'))
const Services = lazy(() => import('../src/pages/Services/Services'))
const Healthcare = lazy(() => import('../src/pages/Services/Healthcare/Healthcare'))
const Education = lazy(() => import('../src/pages/Services/Education/Education'))
const Retail = lazy(() => import('../src/pages/Services/Retail/Retail'))
const Hospitality = lazy(() => import('../src/pages/Services/Hospitality/Hospitality'))
const Distribution = lazy(() => import('../src/pages/Services/DistributionLogistics/Distribution'))
const PublicSector = lazy(() => import('../src/pages/Services/PublicSector/PublicSector'))
const DigitalPlatforms = lazy(() => import('../src/pages/Services/DigitalPlatforms/DigitalPlatforms'))
const Emerging = lazy(() => import('../src/pages/Services/Emerging/Emerging'))
const IndustrySpecific = lazy(() => import('../src/pages/Services/IndustrySpecific/IndustrySpecific'))
const Principles = lazy(() => import('../src/pages/Services/Principles/Principles'))
const Projects = lazy(() => import('../src/pages/Projects/Projects'))
const Research = lazy(() => import('../src/pages/Research/Research'))
const Innovation = lazy(() => import('../src/pages/Research/Innovation/Innovation'))
const AiAutomation = lazy(() => import('../src/pages/Research/AiAutomation/AiAutomation'))
const AiDriven = lazy(() => import('../src/pages/Research/AiDriven/AiDriven'))
const OurVision = lazy(() => import('../src/pages/Research/OurVision/OurVision'))
const Insights = lazy(() => import('../src/pages/Insights/Insights'))
const Blogs = lazy(() => import('../src/pages/Insights/Blogs/Blogs'))
const CaseStudies = lazy(() => import('../src/pages/Insights/CaseStudies/CaseStudies'))
const CareersContact = lazy(() => import('../src/pages/CareersContact/CareersContact'))
const EconomicCenter = lazy(() => import('../src/pages/Projects/EconomicCenter/EconomicCenter'))
const Hris = lazy(() => import('../src/pages/Projects/HRIS/Hris'))
const Dms = lazy(() => import('../src/pages/Projects/DMS/Dms'))
const School = lazy(() => import('../src/pages/Projects/SchoolManagement/School'))
const Pos = lazy(() => import('../src/pages/Projects/POS/Pos'))
const Hotel = lazy(() => import('../src/pages/Projects/Hotel/Hotel'))
const UniMedical = lazy(() => import('../src/pages/Projects/UniversityMedical/UniMedical'))
const AiChatbot = lazy(() => import('../src/pages/Projects/AiChatbot/AiChatbot'))
const ComingSoon = lazy(() => import('../src/pages/ComingSoon/ComingSoon'))
const NotFound = lazy(() => import('../src/pages/NotFound/NotFound'))

/**
 * All application routes live here.
 * Add new pages by importing them and adding a <Route> below.
 *
 * Placeholder routes render <ComingSoon /> until a real page is built.
 */
const PLACEHOLDER_ROUTES = [
  '/services/:slug',
  '/our-work/:slug',
  '/privacy-policy',
  '/terms-of-service',
]

/**
 * Every page except Home is code-split so the first visit only downloads the
 * page being viewed. Once the browser is idle, the remaining page chunks are
 * fetched in the background so later navigation is still instant.
 */
const pageModules = import.meta.glob(['../src/pages/**/*.jsx', '!../src/pages/Home/**'])

function usePrefetchPages() {
  useEffect(() => {
    if (navigator.connection?.saveData) return
    let cancelled = false
    const queue = Object.values(pageModules)
    const idle = (fn) =>
      'requestIdleCallback' in window ? window.requestIdleCallback(fn, { timeout: 4000 }) : window.setTimeout(fn, 300)
    // One chunk per idle slot, so prefetching never creates a long main-thread task.
    const next = () => {
      if (cancelled || queue.length === 0) return
      queue.shift()().catch(() => {}).finally(() => idle(next))
    }
    const schedule = () => window.setTimeout(() => idle(next), 2000)
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
    return () => {
      cancelled = true
      window.removeEventListener('load', schedule)
    }
  }, [])
}

// Keeps the footer from jumping up while a page chunk is loading.
const PageFallback = () => <main className="min-h-[100svh]" aria-busy="true" />

export default function AppRoutes() {
  usePrefetchPages()

  return (
    // ScrollToTop / ScrollReveal sit inside the boundary so their effects run
    // only after the (lazy) page has actually rendered its DOM.
    <Suspense fallback={<PageFallback />}>
      <ScrollToTop />
      <ScrollReveal />
      <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/company"      element={<Company />} />
      <Route path="/company/about" element={<About />} />
      <Route path="/company/minds" element={<Minds />} />
      <Route path="/company/what-drives-us-forward" element={<WhatDrives />} />
      <Route path="/company/quality" element={<Quality />} />
      <Route path="/company/why-choose" element={<WhyChoose />} />
      <Route path="/company/partners" element={<Partners />} />
      <Route path="/company/technologies" element={<Technologies />} />
      <Route path="/services"   element={<Services />} />
      <Route path="/services/healthcare" element={<Healthcare />} />
      <Route path="/services/education" element={<Education />} />
      <Route path="/services/retail" element={<Retail />} />
      <Route path="/services/hospitality" element={<Hospitality />} />
      <Route path="/services/distribution-logistics" element={<Distribution />} />
      <Route path="/services/public-sector" element={<PublicSector />} />
      <Route path="/services/digital-platforms" element={<DigitalPlatforms />} />
      <Route path="/services/emerging" element={<Emerging />} />
      <Route path="/services/industry-specific" element={<IndustrySpecific />} />
      <Route path="/services/principles" element={<Principles />} />
      <Route path="/services/digital-products" element={<DigitalPlatforms />} />
      <Route path="/our-work"   element={<Projects />} />
      <Route path="/research"   element={<Research />} />
      <Route path="/research/innovation" element={<Innovation />} />
      <Route path="/research/ai-automation" element={<AiAutomation />} />
      <Route path="/research/ai-driven-transformation" element={<AiDriven />} />
      <Route path="/research/our-vision" element={<OurVision />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/insights/blogs" element={<Blogs />} />
      <Route path="/insights/case-studies" element={<CaseStudies />} />
      {/* Careers and Contact share the same page */}
      <Route path="/careers"    element={<CareersContact />} />
      <Route path="/contact"    element={<CareersContact />} />

      <Route path="/our-work/economic-center-system" element={<EconomicCenter />} />
      <Route path="/our-work/hris" element={<Hris />} />
      <Route path="/our-work/distribution-system" element={<Dms />} />
      <Route path="/our-work/ai-chatbot" element={<AiChatbot />} />
      <Route path="/our-work/school-management" element={<School />} />
      <Route path="/our-work/pos-system" element={<Pos />} />
      <Route path="/our-work/hotel-booking" element={<Hotel />} />
      <Route path="/our-work/medical-center-system" element={<UniMedical />} />

      {PLACEHOLDER_ROUTES.map((path) => (
        <Route key={path} path={path} element={<ComingSoon />} />
      ))}

      <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
