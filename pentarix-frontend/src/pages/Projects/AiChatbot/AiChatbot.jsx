import { pageContainer as container } from '../../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import RichText from '../../../components/RichText'
import { ArrowRight } from '../../../components/Icons'
import { hero, capabilities, operations, more, cta } from './aiChatbotData'


export default function AiChatbot() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        actions={hero.actions}
        titleClassName="whitespace-pre-line tracking-[-.035em]"
        aside={
          <img decoding="async"
            src={hero.image}
            alt="Customer using an AI support chatbot on a mobile phone"
            width="1122"
            height="1402"
            className="aspect-[1.2/1] w-full rounded-[32px] object-cover object-center shadow-[0_18px_28px_rgba(0,0,0,.15)]"
            fetchPriority="high"
          />
        }
      />

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={container}>
          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-[.3em] text-[#ff6a00]">{capabilities.eyebrow}</span>
            <h2 className="mt-3 text-[clamp(26px,3.2vw,40px)] font-bold leading-tight tracking-[-.025em] text-[#242424]">{capabilities.title}</h2>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-7 max-md:grid-cols-2 max-sm:mt-10 max-sm:grid-cols-1 max-sm:gap-5">
            {capabilities.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="py-28 max-sm:py-16">
        <div className={`${container} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div className="relative pb-8 pr-6 max-sm:pr-4">
            <img src={operations.image} alt="Support team reviewing business knowledge and product documentation" width="1086" height="1448" className="aspect-square w-full rounded-[28px] object-cover" loading="lazy" />
            <img src={operations.detailImage} alt="Mobile customer support interface with appointment information" width="1086" height="1448" className="absolute bottom-0 right-0 aspect-square w-[56%] rounded-[20px] border-4 border-white object-cover shadow-[0_16px_28px_rgba(0,0,0,.18)]" loading="lazy" />
          </div>
          <div>
            <h2 className="whitespace-pre-line text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]"><RichText text={operations.title} /></h2>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.7] text-[#9297a1]">
              {operations.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden="true">
                {[{ image: hero.image, position: '26% 35%' }, { image: operations.image, position: '85% 30%' }, { image: hero.image, position: '70% 35%' }].map(({ image, position }, index) => (
                  <span key={index} className="size-10 rounded-full border-2 border-white bg-cover" style={{ backgroundImage: `url("${image}")`, backgroundSize: '350%', backgroundPosition: position }} />
                ))}
              </div>
              <p className="max-w-[160px] text-[12px] font-semibold leading-[1.5] text-[#ff6a00]">{operations.trust}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-20 max-sm:py-14">
        <div className={container}>
          <h2 className="mb-8 text-[clamp(22px,2vw,28px)] font-semibold tracking-[-.02em] text-[#27282b]">{more.title}</h2>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {more.items.map((item) => (
              <Link key={item.title} to={item.to} className="group relative top-0 flex min-h-[240px] flex-col items-start rounded-[24px] border border-[#efefea] bg-cover bg-center p-7 text-white shadow-[0_8px_30px_rgba(0,0,0,.12)] transition-[top,box-shadow,border-color] duration-200 hover:-top-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.2)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transition-none" style={{ backgroundImage: `linear-gradient(180deg, transparent 42%, rgba(0,0,0,.32) 66%, rgba(0,0,0,.94) 100%), url("${item.image}")`, backgroundPosition: item.imagePosition || 'center' }}>
                <span className="rounded-full bg-black/45 px-2.5 py-1 text-[8px] font-medium text-white backdrop-blur-sm">{item.tag}</span>
                <div className="mt-auto flex w-full items-end justify-between gap-3 pt-16">
                  <h3 className="text-[18px] font-semibold text-white">{item.title}</h3>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white transition group-hover:translate-x-1"><ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta data={cta} variant="project" />
    </main>
  )
}
