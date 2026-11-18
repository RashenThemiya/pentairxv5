import { pageContainer as container } from '../../../components/pageLayout'
import Hero from '../../../components/Hero'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import { Check } from '../../../components/Icons'
import { hero, competency, partnership, cta, certifications } from './principlesData'
import heroImage from '../../../assets/images/services/principles/img1.webp'
import partnershipImage from '../../../assets/images/services/principles/img2.webp'

const heading = 'text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.18] tracking-[-.025em] text-[#242529]'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[.18em] text-[#ff6a00]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

export default function Principles() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        {...hero}
        aside={
          <div className="relative mx-auto mb-6 w-full max-w-[600px]">
            <img decoding="async" src={heroImage} alt="Two developers reviewing code together at their workstations" width="1254" height="1254" fetchPriority="high" className="aspect-square w-full rounded-[24px] object-cover" />
            <div className="absolute -bottom-6 -right-6 rounded-[18px] bg-[#ff6a00] px-7 py-5 text-white shadow-lg max-sm:right-3">
              <p className="text-[42px] font-semibold leading-none">99.9%</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.12em]">System Availability</p>
            </div>
          </div>
        }
      />

      <section id="methodology" className="scroll-mt-24 bg-[#f7f7f7] py-24 max-sm:py-14" aria-labelledby="competency-title">
        <div className={container}>
          <div className="text-center">
            <p className={eyebrow}>{competency.eyebrow}</p>
            <h2 id="competency-title" className={`mt-5 ${heading}`}><RichText text={competency.title} /></h2>
            <p className={`mx-auto mt-6 max-w-[850px] ${body}`}>{competency.text}</p>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-7 max-lg:grid-cols-2 max-sm:mt-8 max-sm:grid-cols-1">
            {competency.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="py-24 max-sm:py-16" aria-labelledby="partnership-title">
        <div className={`${container} grid grid-cols-[1.1fr_1fr] items-center gap-24 max-lg:gap-12 max-md:grid-cols-1`}>
          <div>
            <p className={eyebrow}>{partnership.eyebrow}</p>
            <h2 id="partnership-title" className={`mt-5 ${heading}`}><RichText text={partnership.title} /></h2>
            <p className={`mt-8 ${body}`}>{partnership.text}</p>
            <ul className="mt-12 grid grid-cols-2 gap-x-7 gap-y-8 max-sm:grid-cols-1">
              {partnership.features.map(({ title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white"><Check size={14} strokeWidth={3} /></span>
                  <div><h3 className="text-[17px] font-semibold text-[#626975]">{title}</h3><p className="mt-2 text-[14px] leading-[1.7] text-[#858993]">{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <img src={partnershipImage} alt="Development team collaborating on ongoing product improvements" width="1122" height="1402" loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-[540px] rounded-[24px] object-cover" />
        </div>
      </section>

      <Cta data={cta} variant="industry" />
      <div className={`${container} grid grid-cols-4 gap-6 py-14 text-center text-[14px] font-semibold text-[#92969e] max-sm:grid-cols-2`} aria-label="Certifications and partners">
        {certifications.map((certification) => <p key={certification}>{certification}</p>)}
      </div>
    </main>
  )
}

