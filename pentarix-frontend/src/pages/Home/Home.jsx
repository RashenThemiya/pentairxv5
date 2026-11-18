import { pageContainer as container } from '../../components/pageLayout'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import tickIcon from '../../assets/icons/tick.png'
import JournalPreview from '../../components/JournalPreview'
import PhotoSlideshow from '../../components/PhotoSlideshow'
import { hero, partners, intro, journal, digitalCard, smallCards, cloudCard, excellence, labs, work, cta } from './homeData'

const bg = (image) => (image ? { backgroundImage: `url(${image})` } : undefined)

export default function Home() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const track = marqueeRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!track || prefersReducedMotion) return

    const distance = track.scrollWidth / 2
    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${distance}px)` },
      ],
      { duration: (distance / 35) * 1000, iterations: Infinity, easing: 'linear' },
    )

    return () => animation.cancel()
  }, [])

  return (
    <main className="overflow-x-clip">
      <Hero variant="home" {...hero} scrollHint />

      {/* Partner strip — marquee */}
      <section className="overflow-hidden border-b border-[#e5e4e7] bg-white py-5" aria-label="Memberships and partners">
        <div
          ref={marqueeRef}
          className="flex w-max"
          aria-hidden="true"
          onMouseEnter={() => marqueeRef.current?.getAnimations()[0]?.pause()}
          onMouseLeave={() => marqueeRef.current?.getAnimations()[0]?.play()}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center gap-14 px-7">
              {partners.map(({ label, Icon, image }) => (
                <li key={label} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[13px] font-semibold tracking-[.04em] text-[#808080]">
                  {image ? <img loading="lazy" decoding="async" src={image} alt="" className="h-[13px] w-auto max-w-[72px] shrink-0 object-contain grayscale brightness-0 opacity-50" /> : <Icon size={15} />}
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-[120px] max-sm:py-16" id="about">
        <div className={`${container} grid grid-cols-[minmax(0,1fr)_clamp(280px,22vw,380px)] items-center gap-[clamp(40px,4.5vw,88px)] max-lg:grid-cols-1`}>
          <div>
            {/* Slightly smaller in the two-column layout so the first line still fits beside the journal */}
            <h2 className="mb-14 text-[clamp(36px,4.6vw,56px)] font-semibold uppercase lg:text-[clamp(34px,2.9vw,56px)]">
              <RichText text={intro.title} />
            </h2>
            <div className="grid max-w-[760px] grid-cols-2 gap-12 text-sm leading-[1.9] max-sm:grid-cols-1">
              {intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <JournalPreview {...journal} className="justify-self-end max-lg:mx-auto max-lg:max-w-[380px] max-lg:justify-self-center" />
        </div>
      </section>

      {/* Services bento */}
      <section className="bg-[#f8f8f8] py-16" id="services">
        <div className={`${container} grid grid-cols-12 gap-6`}>
          <article className="col-span-6 flex overflow-hidden rounded-2xl bg-white shadow-sm transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:flex-col">
            <div className="flex flex-1 flex-col justify-center p-8">
              <span className="mb-5 inline-grid size-10 place-items-center rounded-[10px] bg-[#fff0e6] text-[#ff6a00]">
                <img loading="lazy" decoding="async" src={digitalCard.icon} alt="" aria-hidden="true" className="size-5 object-contain" />
              </span>
              <h3 className="mb-3 text-[26px] font-semibold">{digitalCard.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#9a9a9a]">{digitalCard.text}</p>
              <ul className="mt-6 grid gap-3 text-[14px] font-medium">
                {digitalCard.checks.map((t) => (
                  <li key={t} className="flex items-center gap-3"><img loading="lazy" decoding="async" src={tickIcon} alt="" aria-hidden="true" className="size-5 shrink-0" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="min-h-[260px] flex-[0_0_46%] overflow-hidden max-sm:min-h-[190px]"><img loading="lazy" decoding="async" src={digitalCard.image} alt="Digital product platform dashboard" className="size-full object-cover" /></div>
          </article>

          {smallCards.map(({ id, icon, title, text, to, image }) => (
            <article key={id} className={`col-span-3 flex flex-col rounded-2xl bg-white ${image ? 'p-8 py-7 max-sm:p-7' : 'p-8'} shadow-sm transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-6 max-sm:col-span-12`}>
              <span className="mb-6 inline-grid size-10 place-items-center rounded-[10px] bg-[#f1f1ec]">
                <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="size-5 object-contain" />
              </span>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="flex-1 text-[13px] leading-[1.7] text-[#9a9a9a]">{text}</p>
              {image && <img loading="lazy" decoding="async" src={image} alt={`${title} illustration`} className="mt-4 h-[100px] w-full rounded-lg object-cover" />}
              <Button to={to} variant="link" className={`mt-4 ${id === 'industry' ? '!text-[#ff6a00] hover:!text-[#ff6a00]' : ''}`}>
                Learn More
              </Button>
            </article>
          ))}

          <article className="col-span-9 flex min-h-[246px] items-center justify-between overflow-hidden rounded-2xl bg-[linear-gradient(90deg,#1a1a1a_55%,#2a1608)] px-8 text-white transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:p-7">
            <div>
              <h3 className="mb-3 text-2xl font-semibold">{cloudCard.title}</h3>
              <p className="max-w-[360px] text-[#b5b5b5]">{cloudCard.text}</p>
              <div className="mt-6 flex gap-2.5">
                {cloudCard.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/25 px-3.5 py-1.5 text-[11px] text-[#d0d0d0]">{t}</span>
                ))}
              </div>
            </div>
            <img loading="lazy" decoding="async" src={cloudCard.image} alt="Cloud infrastructure servers" className="h-[184px] w-[184px] rounded-[10px] object-cover max-sm:h-[180px] max-sm:w-full" />
          </article>
        </div>
      </section>

      {/* Software engineering excellence */}
      <section className="py-[104px] max-sm:py-16" id="Insights">
        <div className={`${container} grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1`}>
          <PhotoSlideshow slides={excellence.slides} interval={4000} className="aspect-[1.5] w-full rounded-3xl" />
          <div>
            <span className="eyebrow">{excellence.eyebrow}</span>
            <h2 className="my-5 mb-6 text-[clamp(32px,3.6vw,44px)] font-semibold">{excellence.title}</h2>
            <p className="text-sm leading-[1.8]">{excellence.text}</p>
            <ol className="mt-8 grid gap-5">
              {excellence.points.map((pt) => (
                <li key={pt.number} className="flex items-start gap-4">
                  <span className="text-2xl font-semibold text-[#ff6a00]">{pt.number}</span>
                  <div>
                    <h4 className="mb-1 text-[15px] font-bold">{pt.title}</h4>
                    <p className="text-xs text-[#9a9a9a]">{pt.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Pentarix Labs / research */}
      <section className="bg-[#191919] py-[140px] text-white max-sm:py-20" id="research">
        <div className={container}>
          <span className="mb-4 block text-center text-[12px] font-semibold uppercase tracking-[.42em] text-[#ff6a00]">{labs.eyebrow}</span>
          <h2 className="mx-auto mb-[84px] max-w-[760px] text-center text-[clamp(40px,4vw,68px)] font-semibold uppercase leading-[1.05] tracking-[.015em] text-white max-sm:mb-12 max-sm:text-[36px]">
            <RichText text={labs.title} />
          </h2>
          <div className="mx-auto grid grid-cols-3 gap-8 text-left max-lg:grid-cols-1 max-lg:gap-5">
            {labs.items.map((r) => (
              <article key={r.tag} className="flex min-h-[302px] flex-col items-start rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.04))] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur-[12px] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-sm:min-h-[270px] max-sm:p-7">
                <span className="mb-5 text-[10px] font-medium uppercase tracking-[.12em] text-[#ff6a00]">// {r.tag}</span>
                <h3 className="mb-3 max-w-[310px] text-[22px] font-semibold leading-[1.35] text-white">{r.title}</h3>
                <p className="mb-7 flex-1 text-[13px] leading-[1.55] text-[#969ba5]">{r.text}</p>
                <Button to={labs.linkTo} variant="link" className="!justify-start self-start !px-0 !py-0 !text-[14px] !font-semibold !text-white hover:!text-white">
                  {labs.linkLabel}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impactful solutions */}
      <section className="py-24 pb-[120px] max-sm:py-16" id="work">
        <div className={container}>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="eyebrow">{work.eyebrow}</span>
              <h2 className="text-[clamp(36px,4.6vw,56px)] font-semibold">{work.title}</h2>
            </div>
            <Link to={work.linkTo} className="mb-1 text-[13px] font-semibold text-[#202124] underline decoration-[#ff6a00] decoration-1 underline-offset-[8px]">
              {work.linkLabel}
            </Link>
          </div>

          <div className="grid grid-cols-[1.15fr_1fr] grid-rows-[repeat(2,300px)] gap-6 max-sm:grid-cols-1 max-sm:grid-rows-none">
            {work.projects.map((p) => (
              <Link key={p.id} to={p.to} className={`transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none relative flex min-h-[300px] items-end overflow-hidden rounded-3xl text-white ${p.className.includes('large') ? 'row-span-2' : ''}`}>
                <div className={`absolute inset-0 bg-cover ${p.id === 'hris' ? 'bg-left' : 'bg-center'}`} style={bg(p.image)} />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.85),rgba(0,0,0,.1)_60%)]" />
                {p.badge && <span className="absolute left-5 top-5 rounded-full bg-[#ff6a00] px-3 py-1 text-[9px] font-bold tracking-[.15em]">{p.badge}</span>}
                {p.tag && <span className="absolute left-4 top-4 rounded bg-black/70 px-2 py-1 text-[8px]">{p.tag}</span>}
                <div className="relative p-7">
                  <h3 className="mb-1.5 text-[clamp(22px,2.4vw,28px)] font-semibold">{p.title}</h3>
                  <p className="text-[13px] text-[#d4d4d4]">{p.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#eeeeee] py-24 pb-28 text-center max-sm:py-16">
        <div className={container}>
          <h2 className="mx-auto mb-7 max-w-[900px] whitespace-pre-line text-[clamp(56px,5vw,76px)] font-semibold uppercase leading-[1.05] tracking-[-.035em] text-[#202020] max-sm:text-[42px]">
            <RichText text={cta.title} />
          </h2>
          <p className="mx-auto mb-7 max-w-[700px] text-[clamp(16px,1.5vw,20px)] leading-[1.65] text-[#737b87]">{cta.text}</p>
          <Button to={cta.button.to} size="lg" className="shadow-[0_12px_20px_rgba(255,106,0,.24)]">
            {cta.button.label}
          </Button>
        </div>
      </section>
    </main>
  )
}
