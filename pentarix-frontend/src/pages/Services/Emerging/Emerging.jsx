import { pageContainer as container } from '../../../components/pageLayout'
import Hero from '../../../components/Hero'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import { Check } from '../../../components/Icons'
import { hero, focus, strategy, cta, partners } from './emergingData'
import heroImage from '../../../assets/images/services/emerging/img1.webp'
import strategyImage from '../../../assets/images/services/emerging/img2.webp'

const heading = 'text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.18] tracking-[-.025em] text-[#242529]'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[.18em] text-[#ff6a00]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

export default function Emerging() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        {...hero}
        aside={
          <div className="relative mx-auto mb-6 w-full max-w-[600px]">
            <img decoding="async" src={heroImage} alt="Woman exploring virtual reality with a headset in a technology lab" width="1024" height="1024" fetchPriority="high" className="aspect-square w-full rounded-[24px] object-cover shadow-[0_20px_35px_rgba(0,0,0,.15)]" />
            <div className="absolute -bottom-6 -left-6 rounded-[18px] bg-[#ff6a00] px-6 py-5 text-white shadow-lg max-sm:left-3">
              <p className="text-[10px] font-semibold uppercase tracking-[.12em]">Status</p>
              <p className="mt-1 text-[19px] font-semibold">Lab Stage → Active</p>
            </div>
          </div>
        }
      />

      <section className="bg-[#f7f7f7] py-24 max-sm:py-14" aria-labelledby="focus-title">
        <div className={container}>
          <p className={eyebrow}>{focus.eyebrow}</p>
          <h2 id="focus-title" className={`mt-5 ${heading}`}><RichText text={focus.title} /></h2>
          <div className="mt-12 grid grid-cols-2 gap-7 max-sm:mt-8 max-sm:grid-cols-1">
            {focus.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="py-28 max-sm:py-16" aria-labelledby="strategy-title">
        <div className={`${container} grid grid-cols-2 items-center gap-24 max-lg:gap-12 max-md:grid-cols-1`}>
          <img src={strategyImage} alt="Team discussing business requirements and planning ideas on a whiteboard" width="1086" height="1448" loading="lazy" className="mx-auto aspect-[3/4] w-full max-w-[480px] object-cover" />
          <div>
            <p className={eyebrow}>{strategy.eyebrow}</p>
            <h2 id="strategy-title" className={`mt-5 ${heading}`}><RichText text={strategy.title} /></h2>
            <p className={`mt-8 ${body}`}>{strategy.text}</p>
            <ul className="mt-12 grid gap-8">
              {strategy.principles.map(({ title, text }) => (
                <li key={title} className="flex items-start gap-5">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white"><Check size={14} strokeWidth={3} /></span>
                  <div><h3 className="text-[18px] font-semibold text-[#626975]">{title}</h3><p className="mt-2 text-[14px] leading-[1.7] text-[#858993]">{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta data={cta} variant="industry" />
      <div className={`${container} grid grid-cols-4 gap-6 py-14 text-center text-[14px] font-semibold text-[#92969e] max-sm:grid-cols-2`} aria-label="Memberships and partners">
        {partners.map((partner) => <p key={partner}>{partner}</p>)}
      </div>
    </main>
  )
}

