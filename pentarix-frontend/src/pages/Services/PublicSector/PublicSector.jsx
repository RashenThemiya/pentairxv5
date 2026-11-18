import { pageContainer as container } from '../../../components/pageLayout'
import Button from '../../../components/Button'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import { Check } from '../../../components/Icons'
import { hero, operations, caseStudy, certifications, cta } from './publicSectorData'
import heroImage from '../../../assets/images/services/publicSector/img1.webp'
import caseImage from '../../../assets/images/services/publicSector/img2.webp'
import technologyImage from '../../../assets/images/services/dms-techy.webp'

const eyebrow = 'text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]'
const text = 'text-[15px] leading-[1.7] text-[#858993]'

export default function PublicSector() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        {...hero}
        aside={
          <div className="relative mx-auto w-full max-w-[470px] max-md:mt-3">
            <img decoding="async" src={heroImage} alt="Fresh produce stalls inside a public economic center" width="1024" height="1024" fetchPriority="high" className="aspect-square w-full rounded-[22px] object-cover shadow-[0_18px_35px_rgba(0,0,0,.12)]" />
            <div className="absolute -bottom-5 -right-6 rounded-xl bg-[#ff6a00] px-7 py-5 text-white shadow-[0_18px_30px_rgba(0,0,0,.2)] max-sm:right-3">
              <p className="text-[36px] font-bold leading-none">Live</p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[.13em]">Market Analytics</p>
            </div>
          </div>
        }
      />
      <section className="scroll-mt-24 bg-[#f7f7f7] py-20 max-sm:py-14" id="modern-governance" aria-labelledby="operations-title">
        <div className={container}>
          <div className="text-center">
            <p className={eyebrow}>{operations.eyebrow}</p>
            <h2 id="operations-title" className="mt-4 text-[clamp(28px,3.2vw,40px)] font-semibold leading-tight tracking-[-.025em] text-[#242529]">{operations.title}</h2>
            <p className={`mx-auto mt-5 max-w-[800px] ${text}`}>{operations.text}</p>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {operations.items.map(({ Icon, id, title, text: description }) => (
              <article key={title} id={id} className="scroll-mt-24 rounded-[22px] border border-[#e6e7eb] bg-white p-8 max-sm:p-6">
                <span className="mb-7 inline-grid size-14 place-items-center rounded-2xl bg-[#fff0e6] text-[#ff6a00]"><Icon size={26} /></span>
                <h3 className="text-[20px] font-semibold text-[#626975]">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#858993]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-sm:py-16" aria-labelledby="case-study-title">
        <div className={`${container} grid grid-cols-2 items-center gap-24 max-lg:gap-12 max-md:grid-cols-1`}>
          <div>
            <p className={eyebrow}>Portfolio Spotlight</p>
            <h2 id="case-study-title" className="mt-5 max-w-[490px] text-[clamp(34px,4vw,50px)] font-semibold leading-[1.15] tracking-[-.025em] text-[#242529]">{caseStudy.title}</h2>
            <p className={`mt-7 ${text}`}>{caseStudy.text}</p>
            <ul className="mt-10 grid gap-7">
              {caseStudy.features.map((title) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white"><Check size={12} strokeWidth={3} /></span>
                  <h3 className="text-[17px] font-semibold text-[#626975]">{title}</h3>
                </li>
              ))}
            </ul>
            <Button to={caseStudy.to} variant="link" className="mt-12">Explore Project</Button>
          </div>
          <div className="relative mx-auto mt-10 w-full max-w-[540px] pr-4 max-md:mt-4">
            <img src={caseImage} alt="Portfolio dashboard interface showing company analytics" width="1536" height="1024" loading="lazy" className="aspect-[4/5] w-full rounded-[22px] object-cover object-center shadow-[0_18px_35px_rgba(0,0,0,.12)]" />
            <div className="absolute -right-2 -top-6 w-[54%] rounded-[24px] border border-[#e6e7eb] bg-white p-5 shadow-[0_18px_35px_rgba(0,0,0,.15)] max-sm:right-0 max-sm:p-3">
              <div className="mb-4 flex items-center justify-between gap-2 text-[12px] font-semibold text-[#626975]">
                <span>Admin Dashboard</span><span className="size-2 rounded-full bg-green-500" aria-hidden="true" />
              </div>
              <img src={technologyImage} alt="Cloud hosting servers with orange lighting" width="2048" height="768" loading="lazy" className="aspect-[5/3] w-full rounded-xl object-cover" />
              <div className="mt-3 h-3 w-3/4 rounded bg-[#f7f7f7]" aria-hidden="true" />
              <div className="mt-2 h-8 rounded-lg bg-[#ff6a00]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>


      <div className={`${container} grid grid-cols-4 gap-6 py-14 text-center text-[14px] font-semibold text-[#92969e] max-sm:grid-cols-2`} aria-label="Certifications and partners">
        {certifications.map((certification) => <p key={certification}>{certification}</p>)}
      </div>
      <Cta data={cta} variant="industry" />
    </main>
  )
}






