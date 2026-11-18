import { useState } from 'react'
import Hero from '../../../components/Hero'
import Button from '../../../components/Button'
import Cta from '../../../components/Cta'
import { ArrowRight } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, featured, topics, cta } from './blogsData'

function TopicCard({ topic }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <article className="flex h-full flex-col rounded-[32px] border border-[#f1f1f1] bg-[#f8f8f8] p-8 max-sm:p-6">
      <span className="mb-7 grid size-14 place-items-center rounded-2xl bg-white"><img src={topic.icon} alt="" loading="lazy" className="size-7 object-contain" /></span>
      <h3 className="text-[21px] font-semibold leading-[1.4] text-[#343434]">{topic.title}</h3>
      <p className="mt-4 flex-1 text-[15px] leading-[1.75] text-[#858993]">{topic.text}</p>
      <button type="button" aria-expanded={expanded} aria-controls={`topic-${topic.id}`} onClick={() => setExpanded(!expanded)} className="mt-7 inline-flex self-start items-center gap-2 rounded text-[14px] font-semibold text-[#ff6a00] hover:text-[#cc5500] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]">
        {expanded ? 'Close Topic' : 'Explore Topic'}<ArrowRight size={15} />
      </button>
      <div id={`topic-${topic.id}`} hidden={!expanded}><p className="mt-5 border-t border-[#e5e5e5] pt-5 text-[15px] leading-[1.75] text-[#717787]">{topic.detail}</p></div>
    </article>
  )
}

export default function Blogs() {
  const [articleOpen, setArticleOpen] = useState(false)
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero} titleClassName="!max-w-[1000px]" />

      <section className="bg-[#f8f8f8] py-20 max-sm:py-12" aria-label="Featured insight">
        <div className={pageContainer}>
          <article className="overflow-hidden rounded-[36px] border border-[#ededed] bg-white max-sm:rounded-[24px]">
            <div className="grid grid-cols-[1.1fr_.9fr] max-md:grid-cols-1">
              <div className="flex flex-col items-start justify-center p-[clamp(24px,4vw,64px)]">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px]"><span className="font-semibold uppercase text-[#ff6a00]">Featured Insight</span><time dateTime={featured.dateTime} className="text-[#858993]">{featured.date}</time></div>
                <h2 className="mt-7 text-[clamp(25px,2.6vw,36px)] font-bold leading-[1.25] tracking-[-.02em] text-[#343434]">{featured.title}</h2>
                <p className="mt-6 text-[15px] leading-[1.8] text-[#858993]">{featured.text}</p>
                <Button className="mt-8" arrow aria-expanded={articleOpen} aria-controls="featured-article" onClick={() => setArticleOpen(!articleOpen)}>{articleOpen ? 'Close Article' : 'Read Article'}</Button>
              </div>
              <img decoding="async" src={featured.image} alt="Brain connected to documents and glowing knowledge networks" width="1024" height="1024" fetchPriority="high" className="h-full min-h-[440px] w-full object-cover max-md:aspect-[4/3] max-md:min-h-0" />
            </div>
            <div id="featured-article" hidden={!articleOpen} className="border-t border-[#ededed] p-[clamp(24px,4vw,64px)]">
              <div className="mx-auto max-w-[800px] space-y-8">{featured.sections.map((section) => <section key={section.title}><h3 className="text-[23px] font-semibold text-[#343434]">{section.title}</h3><p className="mt-4 text-[16px] leading-[1.85] text-[#717787]">{section.text}</p></section>)}</div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-24 max-sm:py-16" aria-labelledby="topics-heading">
        <div className={pageContainer}>
          <div className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-5">
            <div><h2 id="topics-heading" className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-.025em] text-[#343434]">Topics We Explore</h2><span aria-hidden="true" className="mt-4 block h-1 w-20 rounded-full bg-[#ff6a00]" /></div>
            <p className="max-w-[360px] text-[16px] leading-[1.7] text-[#858993]">Deep dives into the technologies shaping the future of digital enterprise.</p>
          </div>
          <div className="mt-14 grid auto-rows-fr grid-cols-3 gap-7 max-lg:grid-cols-2 max-md:auto-rows-auto max-md:grid-cols-1">{topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}</div>
        </div>
      </section>
      <div className="bg-[#f8f8f8]"><Cta data={cta} variant="project" /></div>
    </main>
  )
}
