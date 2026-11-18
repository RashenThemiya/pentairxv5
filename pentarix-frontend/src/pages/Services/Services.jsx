import { pageContainer as container } from '../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import { Check, ArrowRight } from '../../components/Icons'
import { hero, approach, digital, ai, enterprise, custom, industries, spotlight, stack, cta } from './servicesData'
import servicesCardImage from '../../assets/images/services/servicescard.png'
import laptopImage from '../../assets/images/services/laptop.webp'
import aiBackground from '../../assets/images/services/aibg.webp'

export default function Services() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero} className="[&>div>div]:!max-w-[1000px] [&>div>div>h1]:!max-w-[1000px]" />

      {/* Approach */}
      <section className="border-t border-[#f0f0ee] py-16 max-sm:py-12">
        <div className={`${container} grid grid-cols-[.8fr_1fr_1fr] gap-10 max-lg:grid-cols-1`}>
          <h2 className="max-w-[300px] text-[clamp(22px,2.4vw,30px)] font-semibold leading-[1.2] tracking-[-.02em] text-[#242529]">
            {approach.title}
          </h2>
          {approach.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[11px] leading-[1.8] text-[#92969e]">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Service offerings */}
      <section className="bg-[#f8f8f8] py-16 max-sm:py-12">
        <div className={`${container} grid grid-cols-12 gap-5`}>
          <article
            id="digital-platforms"
            className="scroll-mt-24 relative col-span-7 overflow-hidden rounded-[24px] border border-[#efefea] bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
            <span className="mb-4 inline-grid size-9 place-items-center rounded-lg bg-[#fff0e6] text-[#ff6a00]">
              <img loading="lazy" decoding="async" src={digital.icon} alt="" aria-hidden="true" className="size-5 object-contain" />
            </span>
            <h3 className="mb-2 text-[18px] font-semibold text-[#252629]">{digital.title}</h3>
            <p className="max-w-[420px] text-[11px] leading-[1.7] text-[#92969e]">{digital.text}</p>
            <ul className="my-5 grid gap-2.5">
              {digital.checks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[10px] font-medium text-[#44464a]">
                  <Check size={11} strokeWidth={3} className="shrink-0 text-[#ff6a00]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to={digital.link.to} className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-bold text-[#ff6a00] hover:underline">
              {digital.link.label} <ArrowRight size={11} />
            </Link>
            <img loading="lazy" decoding="async" src={servicesCardImage} alt="" aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[210px] max-w-[45%] object-contain opacity-10"/>
          </article>

          <div className="relative col-span-5 min-h-[300px] overflow-hidden rounded-[24px] bg-[linear-gradient(150deg,#fff,#e7e7e4)] max-lg:col-span-12">
            <img loading="lazy" decoding="async" src={laptopImage} alt="Laptop displaying a digital platform" className="absolute inset-0 size-full object-cover" />
          </div>

          <article className="col-span-5 rounded-[24px] bg-[#191919] p-8 text-white transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
            <span className="mb-4 inline-grid size-9 place-items-center rounded-lg bg-[#ff6a00]/15 text-[#ff6a00]">
              <ai.Icon size={17} />
            </span>
            <h3 className="mb-2 text-[18px] font-semibold">{ai.title}</h3>
            <p className="text-[11px] leading-[1.7] text-white/55">{ai.text}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {ai.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-white/10 bg-white/[.06] px-3 py-2 text-center text-[9px] text-white/75">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="col-span-7 grid grid-cols-[1fr_1.1fr] items-center gap-6 rounded-[24px] border border-[#efefea] bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:grid-cols-1 max-sm:p-6">
            <div>
              <span className="mb-4 inline-grid size-9 place-items-center rounded-lg bg-[#fff0e6] text-[#ff6a00]">
                <img loading="lazy" decoding="async" src={enterprise.icon} alt="" aria-hidden="true" className="size-5 object-contain" />
              </span>
              <h3 className="mb-2 text-[18px] font-semibold text-[#252629]">{enterprise.title}</h3>
              <p className="text-[11px] leading-[1.7] text-[#92969e]">{enterprise.text}</p>
              <Button to={enterprise.button.to} variant="dark" size="sm" className="mt-5">
                {enterprise.button.label}
              </Button>
            </div>
            <ol className="grid gap-3 rounded-[24px] bg-[#f8f8f8] p-8 max-sm:p-5">
              {enterprise.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-5">
                  <b className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[16px] font-semibold text-[#ff6a00]">0{index + 1}</b>
                  <span className="text-[14px] font-semibold text-[#303236]">{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="col-span-6 flex min-h-[280px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[#d9d9d3] p-8 text-center transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12">
            <h3 className="mb-2 text-[17px] font-semibold text-[#252629]">{custom.title}</h3>
            <p className="mb-5 max-w-xs text-[10px] leading-[1.7] text-[#92969e]">{custom.text}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {custom.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#e5e5e2] bg-white px-3 py-1.5 text-[9px] font-medium text-[#4d4f52]">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="col-span-6 rounded-[24px] border border-[#efefea] bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
            <h3 className="text-[17px] font-semibold text-[#252629]">{industries.title}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {industries.items.map(({ name, text, icon }) => (
                <div key={name} className="rounded-xl bg-[#f8f8f8] p-3.5">
                  <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="size-4 object-contain" />
                  <b className="my-1 block text-[11px] font-semibold text-[#303236]">{name}</b>
                  <p className="text-[9px] leading-[1.5] text-[#92969e]">{text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* AI spotlight */}
      <section className="py-16 max-sm:py-12">
        <div className={container}>
          <div className="grid grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[28px] bg-white shadow-[0_16px_45px_rgba(0,0,0,.09)] max-lg:grid-cols-1">
            <div className="p-10 max-sm:p-6">
              <span className="inline-block rounded bg-[#ff6a00]/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[.15em] text-[#ff6a00]">
                {spotlight.tag}
              </span>
              <h2 className="my-3 text-[clamp(24px,3vw,34px)] font-semibold tracking-[-.02em] text-[#252629]">{spotlight.title}</h2>
              <p className="mb-6 text-[11px] leading-[1.7] text-[#92969e]">{spotlight.text}</p>

              <h4 className="mb-3 border-l-[3px] border-[#ff6a00] pl-2.5 text-[12px] font-semibold text-[#303236]">
                {spotlight.capabilitiesTitle}
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-[10px] text-[#5d6065] max-sm:grid-cols-1">
                {spotlight.capabilities.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <Check size={10} className="text-[#ff6a00]" /> {item}
                  </li>
                ))}
              </ul>

              <h4 className="mb-2 mt-5 border-l-[3px] border-[#252629] pl-2.5 text-[12px] font-semibold text-[#303236]">
                {spotlight.technologiesTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {spotlight.technologies.map((technology) => (
                  <span key={technology} className="rounded-lg bg-[#f4f4f1] px-3 py-1.5 text-[9px] text-[#555]">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flex min-h-[340px] items-center justify-center p-8 max-sm:min-h-[260px]"
              style={{
                backgroundImage: `linear-gradient(rgba(10, 8, 8, .58), rgba(10, 8, 8, .58)), url(${aiBackground})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <blockquote className="max-w-[420px] rounded-2xl border border-white/20 bg-white/[.14] p-6 text-white backdrop-blur-[10px]">
                <h5 className="mb-2 text-[13px] font-semibold">{spotlight.quote.title}</h5>
                <p className="mb-4 text-[10px] leading-[1.7] text-white/75">{spotlight.quote.text}</p>
                <footer className="flex flex-wrap items-center gap-2.5 text-[9px] font-semibold">
                  <i className="size-7 rounded-full bg-[linear-gradient(135deg,#ffb27a,#ff6a00)]" />
                  {spotlight.quote.author}
                  <small className="w-full pl-[38px] font-normal text-white/55">{spotlight.quote.role}</small>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="bg-[#f8f8f8] py-16 text-center max-sm:py-12">
        <div className={container}>
          <h2 className="text-[clamp(22px,2.5vw,30px)] font-semibold tracking-[-.02em] text-[#252629]">{stack.title}</h2>
          <p className="mx-auto mt-2 max-w-[560px] text-[10px] text-[#92969e]">{stack.text}</p>
          <div className="mt-8 grid grid-cols-6 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {stack.items.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 rounded-xl border border-[#efefea] bg-white px-3 py-5 text-[10px] font-semibold text-[#303236] shadow-[0_4px_14px_rgba(0,0,0,.03)] transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_20px_rgba(70,70,70,.22)]">
                {item.icon ? (
                  <img loading="lazy" decoding="async" src={item.icon} alt="" aria-hidden="true" className="size-6 object-contain" />
                ) : (
                  <i className="grid size-6 place-items-center rounded-md text-[8px] font-bold not-italic text-white" style={{ backgroundColor: item.color }}>Go</i>
                )}
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 max-sm:py-10">
        <div className={container}>
          <div
            className="rounded-[48px] bg-[#fafafa] px-8 py-16 text-center max-sm:rounded-[32px] max-sm:px-5 max-sm:py-12"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 0% 0%, rgba(255,106,0,.08), transparent 42%), radial-gradient(ellipse at 100% 100%, rgba(255,106,0,.09), transparent 38%)',
            }}
          >
            <h2 className="mx-auto max-w-[1100px] text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-.03em] text-[#1b1b1b]">{cta.title}</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[clamp(13px,1.2vw,16px)] leading-[1.6] text-[#737b87]">{cta.text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {cta.actions.map(({ label, ...button }) => (
                <Button key={label} size="lg" {...button}>{label}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
