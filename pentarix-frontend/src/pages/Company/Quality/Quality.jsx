import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { pageContainer } from '../../../components/pageLayout'
import { hero, standards, approach, cta } from './qualityData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]'

export default function Quality() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} titleClassName="!max-w-none" contentClassName="[&>div]:max-w-none">
        <img decoding="async" src={hero.image} alt="Pentarix team reviewing project quality and security requirements" width="1448" height="1086" fetchPriority="high" className="mt-14 aspect-[2.4/1] w-full rounded-[28px] object-cover shadow-[0_14px_28px_rgba(0,0,0,.06)] max-sm:mt-9 max-sm:aspect-[1.4/1]" />
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={pageContainer}>
          <h2 className={heading}>{standards.title}</h2>
          <div aria-hidden="true" className="mt-5 h-[3px] w-16 rounded-full bg-[#ff6a00]" />
          <div className="mt-14 grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {standards.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="pb-12 pt-24 max-sm:pt-16">
        <div className={pageContainer}>
          <div className="grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{approach.eyebrow}</p>
              <h2 className={`mt-6 ${heading}`}><RichText text={approach.title} /></h2>
              <ul className="mt-10 space-y-6">
                {approach.items.map(({ icon, title }) => (
                  <li key={title} className="flex items-center gap-5 text-[17px] font-semibold text-[#343434]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fff7f0]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-6 object-contain" /></span>{title}
                  </li>
                ))}
              </ul>
            </div>
            <img src={approach.image} alt="Engineers reviewing application code and automated tests" width="1122" height="1402" loading="lazy" className="aspect-[1.2/1] w-full rounded-[32px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.14)]" />
          </div>
          <div aria-hidden="true" className="mx-auto mt-20 flex max-w-[650px] items-center justify-between px-6 opacity-35 max-sm:mt-12">
            {approach.decorations.map((icon) => <img loading="lazy" decoding="async" key={icon} src={icon} alt="" className="size-12 object-contain max-sm:size-9" />)}
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
