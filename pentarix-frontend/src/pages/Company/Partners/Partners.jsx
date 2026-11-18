import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { pageContainer } from '../../../components/pageLayout'
import { hero, partnership, benefits, cta } from './partnersData'

export default function Partners() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}
        aside={<img decoding="async" src={hero.image} alt="Business partners shaking hands in a bright office" width="1024" height="1024" fetchPriority="high" className="aspect-[1.15/1] w-full rounded-[32px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.16)]" />}
      />

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-[.55fr_1.45fr] items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={partnership.image} alt="Sabaragamuwa University of Sri Lanka emblem over a collaborative software project" width="331" height="620" loading="lazy" className="mx-auto w-full max-w-[380px] rounded-[32px] object-contain max-md:max-w-[300px]" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{partnership.eyebrow}</p>
            <h2 className="mt-5 whitespace-pre-line text-[clamp(27px,3vw,40px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]"><RichText text={partnership.title} /></h2>
            <p className="mt-5 text-[18px] font-semibold text-[#ff6a00]">{partnership.subtitle}</p>
            <p className="mt-7 text-[16px] leading-[1.8] text-[#858993]">{partnership.text}</p>
            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {partnership.stats.map(({ value, label }) => <div key={label} className="flex flex-col"><dt className="text-[11px] font-semibold uppercase tracking-[.1em] text-[#343434]">{label}</dt><dd className="-order-1 mb-2 text-[32px] font-bold leading-tight text-[#ff6a00]">{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="pb-6 pt-24 max-sm:pt-16" aria-label="Partnership opportunities">
        <div className={pageContainer}>
          <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1">
            {benefits.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
          <div aria-hidden="true" className="mx-auto mt-20 flex max-w-[900px] items-center justify-between gap-5 px-6 opacity-35 max-sm:mt-12 max-sm:px-0">
            {benefits.decorations.map((icon) => <img loading="lazy" decoding="async" key={icon} src={icon} alt="" className="size-10 object-contain max-sm:size-7" />)}
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
