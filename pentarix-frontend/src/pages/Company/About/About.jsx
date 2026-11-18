import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import Button from '../../../components/Button'
import RichText from '../../../components/RichText'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { pageContainer } from '../../../components/pageLayout'
import FoundersShowcase from '../../../components/FoundersShowcase'
import { founders } from '../../../data/foundersData'
import { hero, facts, partners, journey, values, innovation, cta } from './aboutData'

const heading = 'whitespace-pre-line text-[clamp(28px,3.2vw,42px)] font-bold leading-[1.22] tracking-[-.025em] text-[#242424]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

export default function About() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero variant="centered" className="relative overflow-hidden" contentClassName="[&>div]:flex [&>div]:flex-col [&>div]:items-center" title={hero.title} description={hero.description} actions={hero.actions}>
        {/* Soft brand glow behind the intro */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[760px] w-[min(1200px,100%)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,106,0,.10),transparent)]" />

        {/* Key facts */}
        {/* 1px gaps over a grey background draw the dividers at every breakpoint */}
        <dl className="mx-auto mt-16 grid w-full max-w-[1040px] grid-cols-4 gap-px overflow-hidden rounded-[24px] border border-[#ededed] bg-[#f0f0f0] text-left shadow-[0_14px_40px_rgba(20,24,30,.06)] max-lg:grid-cols-2 max-sm:mt-12">
          {facts.map(({ value, suffix, label, note }) => (
            <div key={label} className="flex flex-col bg-white px-7 py-7 max-sm:px-5 max-sm:py-5">
              <dt className="order-2 mt-2 text-[14px] font-semibold text-[#242424] max-sm:text-[13px]">{label}</dt>
              <dd className="order-1 text-[44px] font-bold leading-none tracking-[-.03em] text-[#ff6a00] max-sm:text-[36px]">
                {value}
                {suffix && <span className="ml-1 text-[20px] font-semibold tracking-normal">{suffix}</span>}
              </dd>
              <dd className="order-3 mt-1 text-[12px] leading-[1.5] text-[#9297a1]">{note}</dd>
            </div>
          ))}
        </dl>

        {/* Partners */}
        <div className="mx-auto mt-8 flex w-full max-w-[1040px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]">
          <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#9297a1] max-sm:w-full max-sm:text-center">{partners.label}</span>
          {partners.items.map(({ name, kind }) => (
            <span key={name} className="flex items-center gap-2 max-sm:w-full max-sm:flex-col max-sm:gap-0.5 max-sm:text-center">
              <span className="size-1.5 rounded-full bg-[#ff6a00] max-sm:hidden" aria-hidden="true" />
              <span className="font-semibold text-[#3a3a3a]">{name}</span>
              <span className="text-[#a0a4ad] max-sm:text-[12px]"><span className="max-sm:hidden">· </span>{kind}</span>
            </span>
          ))}
        </div>
      </Hero>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <img src={journey.image} alt="Bright Pentarix office with workstations and collaborative spaces" width="1086" height="1448" loading="lazy" className="aspect-[.9/1] w-full rounded-[28px] object-cover shadow-[0_14px_20px_rgba(0,0,0,.12)]" />
          <div>
            <h2 className={heading}><RichText text={journey.title} /></h2>
            <div className={`mt-7 space-y-5 ${body}`}>{journey.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[.2em] text-[#626975]">Our partners</p>
            <ul className="mt-4 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {journey.partners.map(({ logo, name, fullName, kind, height }) => (
                <li key={name} className="group flex flex-col items-center rounded-2xl border border-[#ececec] bg-white px-4 pb-4 pt-5 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#ffd2b3] hover:shadow-[0_10px_24px_rgba(20,24,30,.08)] max-sm:flex-row max-sm:gap-4 max-sm:px-5 max-sm:py-4 max-sm:text-left">
                  <span className="grid h-14 w-full place-items-center max-sm:w-20 max-sm:shrink-0">
                    <img src={logo} alt={`${fullName || name} logo`} loading="lazy" decoding="async" className={`${height} w-auto max-w-full object-contain`} />
                  </span>
                  <span className="mt-3 block max-sm:mt-0">
                    <span className="block text-[12px] font-semibold leading-snug text-[#2a2a2a]">{name}</span>
                    <span className="mt-0.5 block text-[11px] text-[#9297a1]">{kind}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 max-sm:py-16">
        <div className={pageContainer}>
          <div className="text-center"><p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#ff6a00]">{values.eyebrow}</p><h2 className={`mt-4 ${heading}`}>{values.title}</h2></div>
          <div className="mt-14 grid grid-cols-3 gap-7 max-md:grid-cols-1">{values.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}</div>
        </div>
      </section>

      <FoundersShowcase
        founders={founders}
        description="Five founders, one shared vision: reliable, scalable and modern technology for Sri Lankan businesses and public institutions."
      />

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">{innovation.eyebrow}</p>
            <h2 className={`mt-6 ${heading}`}><RichText text={innovation.title} /></h2>
            <p className={`mt-7 ${body}`}>{innovation.text}</p>
            <Button to={innovation.link.to} variant="link" arrow className="mt-10">{innovation.link.label}</Button>
          </div>
          <img src={innovation.image} alt="Pentarix engineers collaborating on research and development" width="1086" height="1448" loading="lazy" className="aspect-[.95/1] w-full rounded-[28px] object-cover shadow-[0_18px_28px_rgba(0,0,0,.14)]" />
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
