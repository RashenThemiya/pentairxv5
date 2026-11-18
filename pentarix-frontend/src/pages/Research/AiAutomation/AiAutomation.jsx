import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { ArrowRight } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, opportunities, assistance, future, cta } from './aiAutomationData'

function SupportPreview() {
  return (
    <figure className="overflow-hidden rounded-[28px] border border-[#efefef] bg-white p-7 shadow-[0_14px_20px_rgba(0,0,0,.12)] max-sm:p-5">
      <figcaption className="flex items-center gap-3 border-b border-[#f0f0f0] pb-5">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff6a00]"><img loading="lazy" decoding="async" src={assistance.supportIcon} alt="" className="size-5 object-contain brightness-0 invert" /></span>
        <div><p className="text-[14px] font-semibold text-[#343434]">Support Assistant</p><p className="mt-1 text-[10px] uppercase tracking-[.15em] text-[#858993]">Conversation Preview</p></div>
      </figcaption>
      <div className="flex flex-col gap-4 py-5">
        {assistance.messages.map((message, index) => <p key={index} className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13px] leading-[1.7] ${message.role === 'user' ? 'self-end bg-[#ff6a00] text-white' : 'self-start bg-[#f3f4f6] text-[#717787]'}`}><span className="sr-only">{message.role === 'user' ? 'Customer: ' : 'Assistant: '}</span>{message.text}</p>)}
      </div>
      <div aria-hidden="true" className="flex items-center justify-between rounded-full bg-[#f8f8f8] px-4 py-3"><span className="text-[11px] text-[#9a9a9a]">Type a message...</span><img loading="lazy" decoding="async" src={assistance.sendIcon} alt="" className="size-4 object-contain" /></div>
    </figure>
  )
}

export default function AiAutomation() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} actions={hero.actions}
        contentClassName="lg:!grid-cols-2"
        aside={<img decoding="async" src={hero.image} alt="Researcher working with a robotic arm in a technology lab" width="1024" height="1024" fetchPriority="high" className="aspect-[1.27] w-full rounded-[36px] object-cover shadow-[0_20px_30px_rgba(0,0,0,.17)]" />}
      />

      <section id="opportunities" className="scroll-mt-24 pb-24 pt-14 max-sm:py-14" aria-labelledby="opportunities-heading">
        <div className={pageContainer}>
          <h2 id="opportunities-heading" className="text-center text-[clamp(28px,3vw,40px)] font-bold leading-[1.3] tracking-[-.025em] text-[#343434]">Three Areas of Opportunity</h2>
          <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-20 rounded-full bg-[#ff6a00]" />
          <div className="mt-14 grid auto-rows-fr grid-cols-3 gap-7 max-lg:grid-cols-2 max-md:grid-cols-1">
            {opportunities.map((item) => <ProjectCapabilityCard key={item.title} {...item} className="h-full !border-transparent !bg-[#f8f8f8] [&>span]:bg-white" />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16" aria-labelledby="assistance-heading">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-16 max-lg:gap-10 max-md:grid-cols-1`}>
          <div>
            <h2 id="assistance-heading" className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.25] tracking-[-.025em] text-[#343434]">{assistance.title}</h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#858993]">{assistance.text}</p>
            <Link to={assistance.to} className="mt-7 inline-flex items-center gap-3 rounded text-[15px] font-semibold leading-[1.6] text-[#ff6a00] hover:text-[#cc5500] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a00]">Explore AI Customer Support Chatbot<ArrowRight size={18} className="shrink-0" /></Link>
          </div>
          <SupportPreview />
        </div>
      </section>

      <section className="pt-20 max-sm:pt-14" aria-labelledby="future-heading">
        <div className={pageContainer}>
          <div className="flex items-start gap-7 rounded-r-[28px] border-l-[5px] border-[#ff6a00] bg-[#fff7ed] p-10 max-sm:gap-4 max-sm:p-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[#ffead4] bg-white max-sm:size-11"><img src={future.icon} alt="" loading="lazy" className="size-6 object-contain" /></span>
            <div><h2 id="future-heading" className="text-[21px] font-semibold leading-[1.4] text-[#343434]">{future.title}</h2><p className="mt-3 text-[15px] leading-[1.8] text-[#858993]">{future.text}</p></div>
          </div>
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
