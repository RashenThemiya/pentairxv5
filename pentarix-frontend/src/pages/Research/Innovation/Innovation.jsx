import { useState } from 'react'
import Hero from '../../../components/Hero'
import Button from '../../../components/Button'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { Check } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, focus, collaboration, cta } from './innovationData'

export default function Innovation() {
  const [publicationsOpen, setPublicationsOpen] = useState(false)

  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}
        contentClassName="lg:!grid-cols-2"
        aside={<img decoding="async" src={hero.image} alt="Research team exploring an electronics prototype in the lab" width="1448" height="1086" fetchPriority="high" className="aspect-[4/3] w-full rounded-[28px] object-cover shadow-[0_20px_30px_rgba(0,0,0,.17)]" />}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button aria-expanded={publicationsOpen} aria-controls="innovation-publications" onClick={() => setPublicationsOpen(!publicationsOpen)}>View Publications</Button>
          <Button href="#our-lab" variant="outline-dark">Our Lab</Button>
        </div>
        <div id="innovation-publications" hidden={!publicationsOpen} className="mt-6 rounded-2xl border border-[#ededed] bg-[#f8f8f8] p-5">
          <h2 className="text-[18px] font-semibold text-[#343434]">Research Publications</h2>
          <p className="mt-2 text-[14px] leading-[1.75] text-[#858993]">Publications will be listed here as they become available.</p>
        </div>
      </Hero>

      <section className="pb-24 pt-16 max-sm:py-14" aria-labelledby="research-focus-heading">
        <div className={pageContainer}>
          <div className="text-center">
            <h2 id="research-focus-heading" className="text-[clamp(28px,3vw,40px)] font-bold tracking-[-.025em] text-[#343434]">Our Research Focus</h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[16px] leading-[1.75] text-[#858993]">Our areas of interest bring together emerging technologies and practical business needs.</p>
          </div>
          <div className="mt-14 grid auto-rows-fr grid-cols-3 gap-7 max-lg:grid-cols-2 max-md:grid-cols-1">
            {focus.map((item) => <ProjectCapabilityCard key={item.title} {...item} className="h-full !border-transparent !bg-[#f8f8f8] [&>span]:bg-white" />)}
          </div>
        </div>
      </section>

      <section id="our-lab" className="scroll-mt-24 bg-[#f8f8f8] py-24 max-sm:py-16" aria-labelledby="collaboration-heading">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-16 max-lg:gap-10 max-md:grid-cols-1`}>
          <div className="grid aspect-[1.85] grid-cols-2 grid-rows-2 gap-4 max-sm:gap-3">
            {collaboration.images.map((image, index) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className={`size-full rounded-[20px] border-4 border-white object-cover shadow-md max-sm:rounded-xl ${index === 0 ? 'row-span-2' : ''}`} />)}
          </div>
          <div>
            <h2 id="collaboration-heading" className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.25] tracking-[-.025em] text-[#343434]">{collaboration.title}</h2>
            <p className="mt-7 text-[16px] leading-[1.8] text-[#858993]">{collaboration.text}</p>
            <ul className="mt-8 space-y-4">{collaboration.points.map((point) => <li key={point} className="flex items-center gap-4 text-[15px] leading-[1.6] text-[#343434]"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ffecd5] text-[#ff6a00]"><Check size={17} /></span>{point}</li>)}</ul>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
