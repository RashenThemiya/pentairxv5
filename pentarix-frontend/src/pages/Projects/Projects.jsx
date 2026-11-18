import { pageContainer as container } from '../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import { ArrowRight } from '../../components/Icons'
import tickIcon from '../../assets/icons/tick.png'
import posCardIcon from '../../assets/icons/projects/pos.png'
import chatbotCardIcon from '../../assets/icons/projects/aichatbot.png'
import bookingCardIcon from '../../assets/icons/projects/booking.png'
import multiServiceCardIcon from '../../assets/icons/projects/multiservice.png'
import { hero, intro, flagship, cards, caseStudy, domains, cta } from './projectsData'
import posImage from '../../assets/images/projects/pos.webp'
import hrImage from '../../assets/images/projects/hris.webp'
import schoolImage from '../../assets/images/projects/school.webp'
import chatbotImage from '../../assets/images/projects/dms.webp'
import flagshipImage from '../../assets/images/projects/dashboard.webp'
import bookingImage from '../../assets/images/projects/bookingengine.webp'
import mapImage from '../../assets/images/projects/image1.webp'
import assistantImage from '../../assets/images/projects/image2.png'
import serviceListImage from '../../assets/images/projects/image3.png'

export default function Projects() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero} />

      {/* Overview */}
      <section className="border-t border-[#f0f0ee] py-16 max-sm:py-12">
        <div className={`${container} grid grid-cols-[.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-sm:gap-6`}>
          <h2 className="max-w-[420px] text-[clamp(25px,2.5vw,36px)] font-semibold leading-[1.2] tracking-[-.025em] text-[#202124]"><RichText text={intro.title} /></h2>
          <div className="grid gap-4 text-[14px] leading-[1.8] text-[#8b9099] max-sm:text-[13px]">
            {intro.paragraphs.map((p, i) => (
              <p key={i}>
                {p.before}
                {p.strong && <b className="font-semibold text-[#34363a]">{p.strong}</b>}
                {p.after}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship */}
      <section className="pb-24 max-sm:pb-16">
        <div className={container}>
          <Link to={flagship.to} className="grid min-h-[420px] grid-cols-[42.7%_57.3%] overflow-hidden rounded-[28px] bg-[#1b1b1b] text-white shadow-[0_24px_60px_rgba(0,0,0,.18)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:grid-cols-1">
            <div className="p-10 max-sm:p-7">
              <div className="flex flex-wrap gap-2">
                {flagship.tags.map((t, i) => (
                  <span key={t} className={`rounded px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.12em] ${i === 1 ? 'pl-0 text-[#ff6a00]' : 'bg-white/10 text-[#ddd]'}`}>{t}</span>
                ))}
              </div>
              <h2 className="my-4 text-[clamp(24px,2.6vw,32px)] font-bold">{flagship.title}</h2>
              <p className="text-[13px] leading-[1.8] text-[#a9a9a9]">{flagship.text}</p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {flagship.columns.map((c) => (
                  <div key={c.title}>
                    <h6 className="mb-1.5 text-[9px] uppercase tracking-[.12em] text-[#ff6a00]">{c.title}</h6>
                    <p className="text-[10px] leading-[1.7] text-[#9a9a9a]">{c.text}</p>
                  </div>
                ))}
              </div>
              <span className="mt-6 grid size-10 place-items-center rounded-full bg-[#ff6a00]"><ArrowRight size={18} /></span>
            </div>
            <div className="relative min-h-[420px] overflow-hidden max-lg:min-h-[300px]">
              <img loading="lazy" decoding="async" src={flagshipImage} alt="DMS company analytics dashboard" className="absolute inset-0 size-full object-cover object-left-top" />
            </div>
          </Link>
        </div>
      </section>

      {/* Bento */}
      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={`${container} grid grid-cols-12 gap-6`}>
          <Link to={cards.pos.to} className="col-span-8 rounded-[28px] border border-[#efefea] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-5">
            <div className="flex items-start justify-between gap-4"><div><h3 className="text-[18px] font-semibold text-[#202124]">{cards.pos.title}</h3><p className="mt-1 max-w-[420px] text-[12px] leading-[1.6] text-[#9a9a9a]">{cards.pos.text}</p></div><img loading="lazy" decoding="async" src={posCardIcon} alt="" aria-hidden="true" className="size-9 shrink-0 object-contain" /></div>
            <div className="mt-6 aspect-[2.2] overflow-hidden rounded-2xl max-sm:aspect-[1.4]">
              <img loading="lazy" decoding="async" src={posImage} alt="POS sales dashboard on a tablet" className="size-full object-cover" />
            </div>
          </Link>

          <Link to={cards.chatbot.to} className="col-span-4 rounded-[36px] bg-[#191919] p-12 text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
            <span className="mb-9 inline-grid size-14 place-items-center rounded-2xl bg-[#303030]"><img loading="lazy" decoding="async" src={chatbotCardIcon} alt="" aria-hidden="true" className="size-10 object-contain" /></span>
            <h3 className="text-[28px] font-semibold leading-tight max-sm:text-[24px]">{cards.chatbot.title}</h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-white/60">{cards.chatbot.text}</p>
            <div className="mt-10 aspect-[1.82] overflow-hidden rounded-xl">
              <img loading="lazy" decoding="async" src={chatbotImage} alt="AI chatbot interface on a laptop" className="size-full object-cover" />
            </div>
            <ul className="mt-6 grid gap-4 text-[13px] uppercase tracking-[.12em] text-[#d1d5db]">
              {cards.chatbot.bullets.map((b) => <li key={b} className="flex items-center gap-3"><span className="size-2 shrink-0 rounded-full bg-[#ff6a00]" />{b}</li>)}
            </ul>
          </Link>

          <Link to={cards.hr.to} className="col-span-5 rounded-[28px] border border-[#efefea] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-5">
            <div className="mb-5 aspect-[1.7] overflow-hidden rounded-xl">
              <img loading="lazy" decoding="async" src={hrImage} alt="HR management dashboard on a laptop" className="size-full object-cover" />
            </div>
            <h3 className="text-[17px] font-semibold text-[#202124]">{cards.hr.title}</h3>
            <p className="mt-1 text-[11px] leading-[1.6] text-[#9a9a9a]">{cards.hr.text}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cards.hr.tags.map((t) => <span key={t} className="rounded-full bg-[#f5f5f3] px-2.5 py-1 text-[8px] font-medium text-[#555]">{t}</span>)}
            </div>
          </Link>

          <Link to={cards.booking.to} className="col-span-7 grid grid-cols-[1fr_.9fr] items-center gap-6 rounded-[36px] min-h-[446px] border border-[#efefea] bg-white p-12 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:grid-cols-1 max-sm:p-6">
            <div>
              <img loading="lazy" decoding="async" src={bookingCardIcon} alt="" aria-hidden="true" className="mb-9 size-14 object-contain" />
              <h3 className="text-[28px] font-semibold leading-tight text-[#202124] max-sm:text-[24px]">{cards.booking.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#858b95]">{cards.booking.text}</p>
            </div>
            <div className="h-[350px] overflow-hidden rounded-2xl max-sm:h-[260px]">
              <img loading="lazy" decoding="async" src={bookingImage} alt="Mobile healthcare booking app" className="size-full object-cover" />
            </div>
          </Link>

          <Link to={cards.school.to} className="col-span-6 rounded-[28px] border border-[#efefea] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-5">
            <h3 className="text-[16px] font-semibold text-[#202124]">{cards.school.title}</h3>
            <p className="mt-1 text-[11px] leading-[1.6] text-[#9a9a9a]">{cards.school.text}</p>
            <div className="mt-5 aspect-[2.2] overflow-hidden rounded-xl">
              <img loading="lazy" decoding="async" src={schoolImage} alt="School management dashboard" className="size-full object-cover object-left-top" />
            </div>
          </Link>

          <Link to={cards.multi.to} className="col-span-6 rounded-[36px] border border-[#f5e7df] bg-[#fff4ee] p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-5">
            <h3 className="flex items-center gap-4 text-[24px] font-semibold leading-tight text-[#202124] max-sm:gap-3 max-sm:text-[20px]"><img loading="lazy" decoding="async" src={multiServiceCardIcon} alt="" aria-hidden="true" className="size-12 shrink-0 object-contain" />{cards.multi.title}</h3>
            <p className="mt-6 text-[15px] leading-[1.6] text-[#858b95]">{cards.multi.text}</p>
            <div className="mt-20 grid grid-cols-3 gap-4 max-sm:mt-12 max-sm:gap-2">
              {[
                { src: mapImage, alt: 'Service location map' },
                { src: assistantImage, alt: 'AI service assistant' },
                { src: serviceListImage, alt: 'Service booking list' },
              ].map((image) => (
                <div key={image.src} className="h-[130px] overflow-hidden rounded-xl bg-white max-sm:h-[100px]">
                  <img loading="lazy" decoding="async" src={image.src} alt={image.alt} className="size-full object-cover" />
                </div>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* Case study */}
      <section className="py-20 max-sm:py-14">
        <div className={container}>
          <div className="rounded-[32px] border border-[#efefea] border-t-[4px] border-t-[#ff6a00] bg-white px-12 py-14 shadow-[0_16px_50px_rgba(0,0,0,.05)] max-sm:rounded-[24px] max-sm:px-6 max-sm:py-10">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">{caseStudy.eyebrow}</span>
              <h2 className="mt-3 text-[clamp(22px,2.5vw,32px)] font-semibold tracking-[-.02em] text-[#222]">{caseStudy.title}</h2>
              <p className="mx-auto mt-2 max-w-[620px] text-[15px] leading-[1.7] text-[#9a9a9a]">{caseStudy.text}</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-3 items-start gap-10 max-lg:grid-cols-1 max-sm:mt-8 max-sm:gap-7">
              {caseStudy.columns.map((c) => (
                <div key={c.number} className="min-w-0 text-left">
                  <b className="mb-4 grid size-8 place-items-center rounded-full bg-[#202124] text-[12px] text-white">{c.number}</b>
                  <h4 className="mb-2 text-[15px] font-semibold text-[#292a2d]">{c.title}</h4>
                  {c.text && <p className="text-justify text-[12px] leading-[1.75] text-[#91959d]">{c.text}</p>}
                  {c.features && (
                    <ul className="grid gap-2">
                      {c.features.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-justify text-[12px] leading-[1.5] text-[#555]">
                          <img loading="lazy" decoding="async" src={tickIcon} alt="" aria-hidden="true" className="mt-0.5 size-4 shrink-0 object-contain" />{t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="bg-[#f8f8f8] py-20 text-center max-sm:py-14">
        <div className={container}>
          <h2 className="text-[clamp(22px,2vw,28px)] font-semibold tracking-[-.02em] text-[#27282b]">{domains.title}</h2>
          <p className="mt-2 text-[14px] text-[#858b95]">{domains.text}</p>
          <div className="mx-auto mt-14 grid max-w-[1280px] grid-cols-6 gap-8 max-lg:grid-cols-3 max-lg:gap-5 max-sm:mt-8 max-sm:grid-cols-2 max-sm:gap-3">
            {domains.items.map(({ name, icon }) => (
              <span key={name} className="flex h-[82px] items-center justify-center gap-4 rounded-2xl border border-[#eaeaea] bg-white px-4 text-[16px] font-semibold text-[#27282b] shadow-[0_2px_5px_rgba(0,0,0,.035)] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_20px_rgba(70,70,70,.22)] max-sm:h-[68px] max-sm:gap-2 max-sm:px-2 max-sm:text-[13px]">
                <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="size-6 shrink-0 object-contain" />{name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 max-sm:py-10">
        <div className={container}>
          <div
            className="rounded-[56px] bg-[#171717] px-8 py-20 text-center text-white shadow-[0_28px_55px_rgba(0,0,0,.22)] max-sm:rounded-[36px] max-sm:px-5 max-sm:py-14"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 0% 0%, rgba(255,106,0,.22), transparent 32%), radial-gradient(ellipse at 100% 100%, rgba(255,106,0,.12), transparent 30%)',
            }}
          >
            <h2 className="mx-auto max-w-[1100px] text-[clamp(32px,4.2vw,58px)] font-semibold leading-[1.15] tracking-[-.03em]">{cta.title}</h2>
            <p className="mx-auto mt-6 max-w-[700px] text-[clamp(15px,1.5vw,19px)] leading-[1.65] text-[#a5a8b0]">{cta.text}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-6 max-sm:mt-8 max-sm:gap-4">
              {cta.actions.map(({ label, ...btn }) => (
                <Button key={label} size="lg" {...btn}>{label}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
