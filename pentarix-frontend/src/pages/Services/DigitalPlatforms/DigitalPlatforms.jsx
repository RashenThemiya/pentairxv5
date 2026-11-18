import { pageContainer as container } from '../../../components/pageLayout'
import Hero from '../../../components/Hero'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import Cta from '../../../components/Cta'
import RichText from '../../../components/RichText'
import { Award } from '../../../components/Icons'
import { hero, expertise, philosophy, cta } from './digitalPlatformsData'
import heroImage from '../../../assets/images/services/digitalPlatforms/img1.webp'
import teamImage from '../../../assets/images/services/digitalPlatforms/img2.webp'

const heading = 'text-[clamp(30px,3.6vw,46px)] font-semibold leading-[1.18] tracking-[-.025em] text-[#242529]'
const body = 'text-[16px] leading-[1.8] text-[#858993]'

export default function DigitalPlatforms() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        {...hero}
        aside={
          <img decoding="async" src={heroImage} alt="Laptop and phone displaying a business dashboard" width="1024" height="1024" fetchPriority="high" className="mx-auto aspect-[6/5] w-full max-w-[600px] rounded-[22px] object-cover shadow-[0_20px_35px_rgba(0,0,0,.15)]" />
        }
      />

      <section className="bg-[#f7f7f7] py-24 max-sm:py-14" aria-labelledby="expertise-title">
        <div className={container}>
          <h2 id="expertise-title" className={heading}><RichText text={expertise.title} /></h2>
          <div className="mt-12 grid grid-cols-2 gap-7 max-sm:mt-8 max-sm:grid-cols-1">
            {expertise.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="py-28 max-sm:py-16" aria-labelledby="philosophy-title">
        <div className={`${container} grid grid-cols-2 items-center gap-24 max-lg:gap-12 max-md:grid-cols-1`}>
          <div className="relative mx-auto w-full max-w-[540px] pb-10 pr-10 max-sm:pr-4">
            <img src={teamImage} alt="Three team members collaborating on a digital platform" width="1086" height="1448" loading="lazy" className="aspect-[4/5] w-full rounded-[24px] object-cover shadow-[0_20px_35px_rgba(0,0,0,.15)]" />
            <div className="absolute bottom-0 right-0 w-[62%] rounded-[18px] bg-[#f7f7f7] p-6 shadow-[0_12px_20px_rgba(0,0,0,.14)] max-sm:w-[78%] max-sm:p-5">
              <div className="flex items-center gap-3"><Award size={34} className="shrink-0 text-[#ff6a00]" /><h3 className="text-[15px] font-semibold text-[#626975]">{philosophy.badge.title}</h3></div>
              <p className="mt-4 text-[13px] leading-[1.6] text-[#858993]">{philosophy.badge.text}</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">{philosophy.eyebrow}</p>
            <h2 id="philosophy-title" className={`mt-6 ${heading}`}><RichText text={philosophy.title} /></h2>
            <p className={`mt-7 ${body}`}>{philosophy.text}</p>
            <ol className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 max-sm:gap-x-5">
              {philosophy.principles.map(({ title, text }, index) => (
                <li key={title}>
                  <span className="text-[30px] font-semibold text-[#ff6a00]" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-[15px] font-semibold text-[#626975]">{title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#858993]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="industry" />
    </main>
  )
}

