import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import { pageContainer } from '../../../components/pageLayout'
import { hero, purpose, expertise, edge, cta } from './whatDrivesData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

function PurposeCard({ title, icon, decoration, text }) {
  return (
    <article className="relative overflow-hidden rounded-[36px] border border-[#efefef] bg-white p-10 max-sm:rounded-[28px] max-sm:p-7">
      <img loading="lazy" decoding="async" src={decoration} alt="" className="pointer-events-none absolute right-7 top-7 size-24 object-contain opacity-10 max-sm:size-16" />
      <span className="relative mb-7 inline-grid size-14 place-items-center rounded-2xl bg-[#fff0e6]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-8 object-contain" /></span>
      <h2 className="relative text-[28px] font-bold tracking-[-.02em] text-[#252525]">{title}</h2>
      <p className={`relative mt-6 ${body}`}>{text}</p>
    </article>
  )
}

function ExpertiseCard({ title, icon, text }) {
  return (
    <article className="rounded-[28px] border border-[#efefef] bg-white px-7 py-9 text-center max-sm:px-5 max-sm:py-7">
      <span className="mx-auto mb-6 grid size-12 place-items-center rounded-full bg-[#fff7f0]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-6 object-contain" /></span>
      <h3 className="whitespace-pre-line text-[18px] font-bold leading-[1.4] text-[#282828]">{title}</h3>
      <p className="mx-auto mt-4 max-w-[200px] text-[14px] leading-[1.75] text-[#9297a1]">{text}</p>
    </article>
  )
}

export default function WhatDrives() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} contentClassName="[&>div]:max-w-none">
        <img decoding="async" src={hero.image} alt="Pentarix colleagues reviewing a digital product on a tablet" width="1448" height="1086" fetchPriority="high" className="mt-14 aspect-[2.4/1] w-full rounded-[28px] object-cover shadow-[0_14px_28px_rgba(0,0,0,.06)] max-sm:mt-9 max-sm:aspect-[1.4/1]" />
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16" aria-label="Our vision and mission">
        <div className={`${pageContainer} grid grid-cols-2 gap-8 max-md:grid-cols-1`}>
          {purpose.map((item) => <PurposeCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="py-24 max-sm:py-16">
        <div className={pageContainer}>
          <h2 className={`text-center ${heading}`}>{expertise.title}</h2>
          <div aria-hidden="true" className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#ff6a00]" />
          <div className="mt-14 grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {expertise.items.map((item) => <ExpertiseCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={edge.image} alt="Pentarix team combining interface design and software engineering" width="1448" height="1086" loading="lazy" className="aspect-[1.3/1] w-full rounded-[32px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.14)]" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{edge.eyebrow}</p>
            <h2 className={`mt-6 ${heading}`}><RichText text={edge.title} /></h2>
            <p className={`mt-7 ${body}`}>{edge.text}</p>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-4">
              {edge.badges.map(({ icon, label }) => <li key={label} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.03em] text-[#535353]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-5 object-contain" />{label}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
