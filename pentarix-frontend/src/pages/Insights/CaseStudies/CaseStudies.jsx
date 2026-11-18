import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import { ArrowRight } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, categories, projects, cta } from './caseStudiesData'

function CaseStudyCard({ project }) {
  return (
    <article className="h-full">
      <Link to={project.to} className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-[#efefef] bg-white transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00] max-sm:rounded-[24px]">
        <div className="relative aspect-[1.95] overflow-hidden">
          <img src={project.image} alt={project.title} loading="lazy" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" />
          <span className="absolute left-5 top-5 max-w-[calc(100%-40px)] rounded-lg bg-[#fffaf2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.03em] text-[#ff6a00] max-sm:left-4 max-sm:top-4">{project.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-8 max-sm:p-6">
          <h2 className="text-[clamp(22px,2vw,28px)] font-semibold leading-[1.3] tracking-[-.015em] text-[#343434]">{project.title}</h2>
          <p className="mb-7 mt-4 text-[15px] leading-[1.75] text-[#858993]">{project.text}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-[#ff6a00]">Explore Project<ArrowRight size={15} /></span>
        </div>
      </Link>
    </article>
  )
}

export default function CaseStudies() {
  const [category, setCategory] = useState('All')
  const filteredProjects = category === 'All' ? projects : projects.filter((project) => project.category === category)

  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero}>
        <div role="group" aria-label="Filter case studies by category" className="mt-8 flex flex-wrap gap-3">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-3 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00] ${category === item ? 'bg-[#ff6a00] text-white' : 'bg-[#f8f8f8] text-[#717787] hover:bg-[#fff0e5] hover:text-[#cc5500]'}`}>{item}</button>)}
        </div>
      </Hero>

      <section className="bg-[#f8f8f8] py-16 max-sm:py-12" aria-label="Project case studies">
        <div className={pageContainer}>
          <p role="status" className="sr-only">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} shown for {category}</p>
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">{filteredProjects.map((project) => <CaseStudyCard key={project.to} project={project} />)}</div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
