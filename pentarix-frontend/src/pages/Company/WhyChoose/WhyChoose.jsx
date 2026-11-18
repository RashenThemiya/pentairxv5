import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { pageContainer } from '../../../components/pageLayout'
import { hero, reasons, results, cta } from './whyChooseData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]'

export default function WhyChoose() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero variant="centered" eyebrow={hero.eyebrow} title={hero.title} description={hero.description} contentClassName="[&>div>span]:block [&>div>span]:text-center">
        <img decoding="async" src={hero.image} alt="Pentarix team reviewing a project together" width="1536" height="1024" fetchPriority="high" className="mx-auto mt-14 aspect-[1.5/1] w-full max-w-[800px] rounded-[28px] object-cover shadow-[0_14px_28px_rgba(0,0,0,.06)] max-sm:mt-9" />
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={pageContainer}>
          <h2 className={`text-center ${heading}`}>{reasons.title}</h2>
          <div aria-hidden="true" className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#ff6a00]" />
          <div className="mt-14 grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {reasons.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="pb-12 pt-24 max-sm:pt-16">
        <div className={pageContainer}>
          <div className="grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1">
            <img src={results.image} alt="Pentarix engineers checking product design and quality assurance results" width="1086" height="1448" loading="lazy" className="aspect-[.95/1] w-full rounded-[28px] object-cover" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{results.eyebrow}</p>
              <h2 className={`mt-6 ${heading}`}><RichText text={results.title} /></h2>
              <ul className="mt-10 space-y-6">
                {results.items.map(({ icon, title }) => (
                  <li key={title} className="flex items-center gap-5 text-[17px] font-semibold text-[#343434]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fff7f0]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-6 object-contain" /></span>{title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div aria-hidden="true" className="mx-auto mt-20 flex max-w-[650px] items-center justify-between px-6 opacity-35 max-sm:mt-12">
            {results.decorations.map((icon) => <img loading="lazy" decoding="async" key={icon} src={icon} alt="" className="size-12 object-contain max-sm:size-9" />)}
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
