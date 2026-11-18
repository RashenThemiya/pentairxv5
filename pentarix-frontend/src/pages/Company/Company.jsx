import { pageContainer as container } from '../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import RichText from '../../components/RichText'
import Cta from '../../components/Cta'
import suslLogo from '../../assets/logos/susl.webp'
import { ArrowRight } from '../../components/Icons'
import { hero, legacy, missionVision, pillars, leadership, academia, cta } from './companyData'

export default function Company() {
  return (
    <main className="overflow-x-clip bg-white pt-[72px] text-[#202124]">
      <Hero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        aside={<p className="self-center pt-10 text-[12px] leading-[1.85] text-[#8b929c] lg:translate-y-[72px] max-lg:translate-y-0 max-md:max-w-[560px] max-md:pt-0">{hero.side}</p>}
      />

      {/* Legacy */}
      <section className="bg-[#f7f7f7] py-[96px] max-md:py-16">
        <div className={`${container} grid grid-cols-2 items-center gap-[72px] max-md:grid-cols-1 max-md:gap-10`}>
          <div className="aspect-square w-full overflow-hidden rounded-[28px] shadow-[0_18px_35px_rgba(20,24,30,.12)]">
            <img loading="lazy" decoding="async" src={legacy.image} alt="Pentarix office building" className="size-full scale-[1.08] object-cover object-center" />
          </div>
          <div className="max-w-[570px]">
            <h2 className="mb-7 text-[clamp(27px,2.5vw,36px)] font-semibold leading-[1.16] tracking-[-.025em] text-[#202124]">
              <RichText text={legacy.title} />
            </h2>
            {legacy.paragraphs.map((p) => (
              <p key={p} className="text-[13px] leading-[1.9] text-[#858d98] [&+p]:mt-5">
                {p}
              </p>
            ))}
            <div className="mt-10 flex gap-[112px] max-sm:gap-14">
              {legacy.stats.map((s) => (
                <div key={s.label}>
                  <b className="block text-[27px] font-semibold leading-none text-[#ff6a00]">{s.value}</b>
                  <span className="mt-2 block text-[9px] font-medium uppercase tracking-[.16em] text-[#a0a6ae]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-[96px] max-md:py-16">
        <div className={`${container} grid grid-cols-2 gap-[60px] max-md:gap-6 max-sm:grid-cols-1`}>
          {missionVision.map(({ id, icon, title, text, dark }) => (
            <article
              key={id}
              className={`min-h-[340px] rounded-[30px] p-[48px] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-md:min-h-[280px] max-md:p-8 ${dark ? 'bg-[#191919] text-white' : 'bg-[#f8f8f8] text-[#202124]'}`}
            >
              <span className={`mb-6 inline-grid size-[48px] place-items-center rounded-[12px] ${dark ? 'bg-[#292929] text-[#ff6a00]' : 'bg-white text-[#ff6a00]'}`}>
                <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="size-7 object-contain" />
              </span>
              <h3 className={`mb-4 text-[23px] font-semibold tracking-[-.015em] ${dark ? 'text-white' : 'text-[#202124]'}`}>
                {title}
              </h3>
              <p className={`text-[13px] leading-[1.8] ${dark ? 'text-[#a4a4a4]' : 'text-[#858d98]'}`}>
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-[#ededed] py-[78px] text-center max-md:py-16">
        <div className={container}>
          <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[.22em] text-[#ff6a00]">
            {pillars.eyebrow}
          </span>
          <h2 className="mb-[54px] text-[28px] font-semibold leading-tight tracking-[-.02em] text-[#242424]">
            {pillars.title}
          </h2>
          <div className="mx-auto grid max-w-[960px] grid-cols-3 gap-9 text-left max-md:gap-5 max-sm:grid-cols-2 max-sm:gap-4">
            {pillars.items.map(({ title, text, Icon, icon }) => (
              <article
                key={title}
                className="min-h-[240px] rounded-[18px] border border-[#ededed] bg-white p-[30px] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-md:min-h-[210px] max-md:p-5"
              >
                {icon ? <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="mb-6 size-6 object-contain" /> : <Icon size={21} className="mb-6 text-[#ff6a00]" />}
                <h3 className="mb-3 text-[16px] font-semibold leading-[1.3] text-[#242424]">{title}</h3>
                <p className="text-[11px] leading-[1.8] text-[#89909a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#f7f7f7] py-[96px] max-md:py-16">
        <div className={container}>
          <div className="mb-[54px] flex items-end justify-between gap-8 max-sm:mb-8 max-sm:flex-col max-sm:items-start">
            <div>
              <h2 className="mb-4 whitespace-pre-line text-[clamp(28px,3vw,38px)] font-semibold leading-[1.05] tracking-[-.025em] text-[#202124]">
                <RichText text={leadership.title} />
              </h2>
              <p className="max-w-[510px] text-[12px] leading-[1.8] text-[#8a919b]">{leadership.text}</p>
            </div>
            <Link
              to={leadership.joinTo}
              className="shrink-0 rounded-full bg-white px-6 py-3 text-[10px] font-semibold text-[#303030] transition hover:bg-[#ff6a00] hover:text-white"
            >
              {leadership.joinLabel}
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-7">
            {leadership.team.map((m) => (
              <article key={m.name} className="group min-w-0">
                <div className="mb-5 aspect-[.82] w-full rounded-[20px] border border-transparent bg-[linear-gradient(160deg,#c9c9c7,#6e6e6c)] grayscale transition-colors duration-300 group-hover:border-[#ff6a00]" />
                <h3 className="text-[14px] font-semibold leading-[1.35] text-[#242424]">{m.name}</h3>
                <small className="mt-1 block text-[10px] leading-[1.4] text-[#ff6a00]">{m.role}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic collaboration */}
      <section className="py-[96px] max-md:py-16">
        <div className={`${container} grid grid-cols-2 items-center gap-[80px] max-md:grid-cols-1 max-md:gap-10`}>
          <div className="max-w-[560px]">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[.2em] text-[#ff6a00]">
              {academia.eyebrow}
            </span>
            <h2 className="mb-6 whitespace-pre-line text-[clamp(32px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-.025em] text-[#202124]">
              <RichText text={academia.title} />
            </h2>
            <p className="text-[16px] leading-[1.8] text-[#858d98]">
              {academia.textBefore}
              <span className="font-medium text-[#30343a]">{academia.partner}</span>
              {academia.textAfter}
            </p>
            <Link to={academia.link.to} className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#303030] transition hover:text-[#ff6a00]">
              {academia.link.label} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative rounded-[28px] bg-white p-[10px] shadow-[0_16px_40px_rgba(20,24,30,.14)]">
            <img loading="lazy" decoding="async" src={suslLogo} alt="Sabaragamuwa University of Sri Lanka logo" className="absolute left-1/2 top-1/2 z-10 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,.16)]" />
            <div className="aspect-[1.3] overflow-hidden rounded-[20px]">
              <img loading="lazy" decoding="async" src={academia.image} alt="Sabaragamuwa University of Sri Lanka campus" className="size-full scale-[1.08] object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <Cta data={cta} variant="company" />
    </main>
  )
}
