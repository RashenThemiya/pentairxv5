import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { ChevronDown } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, roadmap, collaboration, cta } from './ourVisionData'

export default function OurVision() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}
        contentClassName="lg:!grid-cols-2"
        aside={<img decoding="async" src={hero.image} alt="Business and technology professionals collaborating in a modern workplace" width="1024" height="1024" fetchPriority="high" className="mx-auto aspect-square w-full max-w-[560px] rounded-[44px] object-cover shadow-[0_20px_30px_rgba(0,0,0,.17)] max-sm:rounded-[28px]" />}
      >
        <a href="#vision-roadmap" aria-label="Explore our vision roadmap" className="mt-8 inline-grid size-11 place-items-center rounded-full text-[#9297a1] transition-colors hover:bg-[#fff5eb] hover:text-[#ff6a00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]"><ChevronDown size={22} /></a>
      </Hero>

      <section id="vision-roadmap" className="scroll-mt-24 bg-[#f8f8f8] py-24 max-sm:py-16" aria-labelledby="roadmap-heading">
        <div className={pageContainer}>
          <div className="text-center"><h2 id="roadmap-heading" className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.3] tracking-[-.025em] text-[#343434]">{roadmap.title}</h2><p className="mt-4 text-[16px] leading-[1.75] text-[#858993]">{roadmap.text}</p></div>
          <div className="mt-14 grid auto-rows-fr grid-cols-4 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {roadmap.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} className="h-full text-center" />)}
          </div>
        </div>
      </section>

      <section className="pb-10 pt-24 max-sm:pt-16" aria-labelledby="collaboration-heading">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={collaboration.image} alt="Researchers discussing an electronics prototype and technical plans in a lab" width="1086" height="1448" loading="lazy" className="mx-auto aspect-[.87] w-full max-w-[500px] rounded-[36px] border-4 border-[#f2f2f2] object-cover shadow-[0_10px_16px_rgba(0,0,0,.12)] max-sm:rounded-[28px]" />
          <div>
            <h2 id="collaboration-heading" className="whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.25] tracking-[-.025em] text-[#343434]">{collaboration.title}</h2>
            <p className="mt-7 max-w-[520px] text-[17px] leading-[1.8] text-[#858993]">{collaboration.text}</p>
            <ul className="mt-8 flex flex-wrap gap-3">{collaboration.badges.map(({ icon, label }) => <li key={label} className="inline-flex items-center gap-3 rounded-2xl border border-[#f1f1f1] bg-[#f8f9fa] px-5 py-3 text-[13px] font-medium text-[#626975]"><img src={icon} alt="" className="size-4 shrink-0 object-contain" loading="lazy" />{label}</li>)}</ul>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
