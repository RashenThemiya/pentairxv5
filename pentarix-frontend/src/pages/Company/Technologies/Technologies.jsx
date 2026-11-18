import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Button from '../../../components/Button'
import Cta from '../../../components/Cta'
import { pageContainer } from '../../../components/pageLayout'
import { hero, stack, cta } from './technologiesData'

function TechnologyCard({ title, icon, color, tools }) {
  return (
    <article className="flex h-full flex-col items-center rounded-[32px] border border-[#ececec] bg-white px-5 py-9 text-center">
      <span className={`mb-6 grid size-14 place-items-center rounded-2xl ${color}`}>
        <img src={icon} alt="" className="size-8 object-contain" loading="lazy" />
      </span>
      <h3 className="max-w-[150px] text-[20px] font-semibold leading-[1.4] text-[#242424]">{title}</h3>
      <ul className="mt-4 flex flex-col items-center gap-2">
        {tools.map((tool) => <li key={tool} className="rounded-full bg-[#f8f8f9] px-3 py-1 text-[12px] leading-tight text-[#717787]">{tool}</li>)}
      </ul>
    </article>
  )
}

export default function Technologies() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description}
        contentClassName="lg:!grid-cols-2 lg:!gap-16"
        aside={
          <div className="relative">
            <img decoding="async" src={hero.image} alt="Modern software development workspace with code on three monitors" width="1024" height="1024" fetchPriority="high" className="aspect-square w-full rounded-[36px] object-cover shadow-[0_20px_30px_rgba(0,0,0,.16)]" />
            <div className="absolute bottom-7 left-7 flex max-w-[calc(100%-32px)] items-center gap-4 rounded-[20px] bg-white/95 px-5 py-5 shadow-lg max-sm:bottom-4 max-sm:left-4 max-sm:gap-3 max-sm:p-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#ff6a00]"><img loading="lazy" decoding="async" src={hero.reliabilityIcon} alt="" className="size-7 brightness-0 invert" /></span>
              <div><p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[#ff6a00]">Reliability</p><p className="mt-1 text-[15px] font-semibold text-[#242424]">99.9% Uptime Stack</p></div>
            </div>
          </div>
        }
      >
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Button href="#technology-stack" className="shadow-[0_10px_18px_rgba(255,106,0,.25)]">Our Ecosystem</Button>
          <Link to="/company/minds" className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]">
            <span className="flex -space-x-3">{hero.people.map((person) => <img loading="lazy" decoding="async" key={person} src={person} alt="" width="44" height="44" className="size-11 rounded-full border-2 border-white object-cover" />)}</span>
            <span className="text-[12px] leading-[1.4] text-[#717787] group-hover:text-[#ff6a00]">Expert<br />Team</span>
          </Link>
        </div>
      </Hero>

      <section id="technology-stack" className="scroll-mt-24 bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={pageContainer}>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#ff6a00]">The Stack</p>
            <h2 className="mt-5 text-[clamp(28px,3.3vw,44px)] font-bold leading-[1.2] tracking-[-.025em] text-[#242424]">Our Core Technology Stack</h2>
          </div>
          <div className="mt-16 grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-sm:mt-10 max-sm:gap-4 max-[380px]:grid-cols-1">
            {stack.map((item) => <TechnologyCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
