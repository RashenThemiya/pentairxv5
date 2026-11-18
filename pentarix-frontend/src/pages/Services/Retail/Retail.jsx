import { pageContainer as container } from '../../../components/pageLayout'
import Button from '../../../components/Button'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import { Check } from '../../../components/Icons'
import { hero, operations, caseStudy, certifications, cta } from './retailData'
import heroImage from '../../../assets/images/services/retail/img1.webp'
import caseImage from '../../../assets/images/services/retail/img2.webp'
import dashboardImage from '../../../assets/images/services/retail/img3.webp'

const eyebrow = 'text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]'
const text = 'text-[15px] leading-[1.7] text-[#858993]'

export default function Retail() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        {...hero}
        aside={
          <div className="relative mx-auto w-full max-w-[470px] max-md:mt-3">
            <img decoding="async" src={heroImage} alt="Retail cashier scanning a product at the checkout" width="1122" height="1402" fetchPriority="high" className="aspect-square w-full rounded-[22px] object-cover shadow-[0_18px_35px_rgba(0,0,0,.12)]" />
            <div className="absolute -bottom-5 -right-6 rounded-xl bg-[#ff6a00] px-7 py-5 text-white shadow-[0_18px_30px_rgba(0,0,0,.2)] max-sm:right-3">
              <p className="text-[36px] font-bold leading-none">200ms</p>
              <p className="mt-2 text-[9px] font-bold uppercase tracking-[.13em]">Transaction Latency</p>
            </div>
          </div>
        }
      />
      <section className="bg-[#f7f7f7] py-20 max-sm:py-14" aria-labelledby="operations-title">
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
            <p className={eyebrow}>Featured Case Study</p>
            <h2 id="case-study-title" className="mt-5 max-w-[490px] text-[clamp(34px,4vw,50px)] font-semibold leading-[1.15] tracking-[-.025em] text-[#242529]">{caseStudy.title}</h2>
            <p className={`mt-7 ${text}`}>{caseStudy.text}</p>
            <ul className="mt-10 grid grid-cols-2 gap-x-7 gap-y-8 max-sm:grid-cols-1">
              {caseStudy.features.map(({ title, text: description }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white"><Check size={12} strokeWidth={3} /></span>
                  <div><h3 className="text-[15px] font-semibold text-[#626975]">{title}</h3><p className="mt-1 text-[13px] leading-[1.6] text-[#858993]">{description}</p></div>
                </li>
              ))}
            </ul>
            <Button to={caseStudy.to} variant="link" className="mt-12">Explore POS System</Button>
          </div>
          <div className="relative mx-auto mt-10 w-full max-w-[540px] pr-4 max-md:mt-4">
            <img src={caseImage} alt="Cashier completing a sale using the retail POS system" width="1122" height="1402" loading="lazy" className="aspect-[4/5] w-full rounded-[22px] object-cover shadow-[0_18px_35px_rgba(0,0,0,.12)]" />
            <img src={dashboardImage} alt="Retail analytics dashboard showing sales and business performance" width="1024" height="1024" loading="lazy" className="absolute -right-2 -top-6 aspect-square w-[38%] rounded-[22px] border-[10px] border-white object-cover shadow-[0_12px_30px_rgba(0,0,0,.1)] max-sm:right-0" />
          </div>
        </div>
      </section>

      <Cta data={cta} variant="industry" />
      <div className={`${container} grid grid-cols-4 gap-6 py-14 text-center text-[14px] font-semibold text-[#92969e] max-sm:grid-cols-2`} aria-label="Certifications and partners">
        {certifications.map((certification) => <p key={certification}>{certification}</p>)}
      </div>
    </main>
  )
}




