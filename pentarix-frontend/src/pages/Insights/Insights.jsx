import { pageContainer as container } from '../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import { ArrowRight } from '../../components/Icons'
import agilityIcon from '../../assets/icons/insights/agility.png'
import { hero, stack, collaborations, insights, cta } from './insightsData'

function AgilityCard() {
  const { agility } = hero
  return (
    <aside className="ml-auto flex min-h-[340px] max-w-[300px] flex-col rounded-3xl bg-[#f8f8f8] p-8 shadow-[0_8px_30px_rgba(0,0,0,.05)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:ml-0">
      <span className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-white"><img loading="lazy" decoding="async" src={agilityIcon} alt="" aria-hidden="true" className="size-5 object-contain" /></span>
      <h3 className="text-base font-semibold">{agility.title}</h3>
      <p className="flex-1 text-sm text-[#9a9a9a]">{agility.text}</p>
      <div className="my-5 h-1 rounded bg-[#e6e6e1]"><i className="block h-full w-[92%] rounded bg-[#ff6a00]" /></div>
      <small className="flex justify-between text-[8px] uppercase tracking-[.12em] text-[#9a9a9a]">{agility.metric} <b>{agility.value}</b></small>
    </aside>
  )
}

export default function Insights() {
  const { susl } = collaborations
  const { featured } = insights

  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero
        className="bg-[#fafafa] [&>div]:grid-cols-[2fr_1fr] max-lg:[&>div]:grid-cols-1 [&>div>div>h1]:max-w-none"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        aside={<AgilityCard />}
      >
        <div className="mt-7 flex flex-wrap items-center gap-8 max-sm:gap-5">
  <div className="flex items-center -space-x-4">
    {hero.trustIcons.map(({ name, image }) => (
      <img loading="lazy" decoding="async" key={name} src={image} alt={name} className="relative size-[68px] shrink-0 object-contain max-sm:size-[54px]" />
    ))}
  </div>
  <span className="text-[clamp(16px,2vw,26px)] font-normal tracking-[-.015em] text-[#969eac]">{hero.trust}</span>
</div>
      </Hero>

      {/* Technology stack */}
      <section className="bg-[#f8f8f8] py-14 max-sm:py-10">
        <div className={`${container} grid grid-cols-5 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1`}>
          {stack.map((col) => (
            <div key={col.title} className="transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none rounded-2xl border border-[#efefea] bg-white p-5 shadow-[0_5px_18px_rgba(0,0,0,.025)] max-sm:p-5">
              <small className="text-[8px] font-bold uppercase tracking-[.15em] text-[#ff6a00]">{col.title}</small>
              <ul className="mt-4 grid gap-3">
                {col.items.map(({ name, icon }) => (
                  <li key={name} className="flex items-center gap-2.5 text-[10px] font-medium text-[#36383b]">
                    {icon ? <img loading="lazy" decoding="async" src={icon} alt="" aria-hidden="true" className="size-3.5 shrink-0 object-contain" /> : <i className="size-3.5 shrink-0 rounded bg-[#e6e8eb]" />}
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration */}
      {/* CTA */}
      <section className="py-20 text-center max-sm:py-14">
        <div className={container}>
          <h2 className="text-[clamp(24px,3vw,34px)] font-semibold tracking-[-.025em] text-[#252629]">{collaborations.title}</h2>
          <p className="mx-auto mt-2 max-w-[600px] text-[11px] leading-[1.6] text-[#969aa2]">{collaborations.text}</p>
          <div className="my-10 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:gap-3">
            {collaborations.partners.map((p) => (
              <div key={p.name} className={`transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none grid aspect-[21/8] place-items-center overflow-hidden rounded-[14px] border border-[#efefea] bg-white ${p.cls.includes('aws') ? 'border-transparent bg-[#203545]' : ''} ${p.cls.includes('atl') ? 'border-transparent bg-[#1868db]' : ''}`}>
                <img loading="lazy" decoding="async" src={p.image} alt={p.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>

          <div className="transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none grid grid-cols-[260px_1fr] items-center gap-10 rounded-[28px] bg-[#fff3ea] p-10 text-left max-lg:grid-cols-1 max-sm:p-6">
            <div className="grid aspect-square place-items-center rounded-2xl bg-white p-5"><img loading="lazy" decoding="async" src={susl.logo} alt="Sabaragamuwa University of Sri Lanka seal" className="size-full object-contain" /></div>
            <div>
              <small className="tc-label">{susl.label}</small>
              <h3 className="my-2.5 text-[26px] font-semibold">{susl.title}</h3>
              <p className="text-[13px] leading-[1.8] text-[#9a9a9a]">{susl.text}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {susl.tags.map((t) => <span key={t} className="rounded-full border border-[#e5e4e7] bg-white px-4 py-2 text-xs font-semibold">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights articles */}
      <section className="bg-[#f8f8f8] py-20 max-sm:py-14" id="insights">
        <div className={container}>
          <div className="mb-10 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <div><h2 className="text-[clamp(24px,3vw,34px)] font-semibold tracking-[-.025em] text-[#252629]">{insights.title}</h2><p className="mt-1 text-[10px] text-[#969aa2]">{insights.text}</p></div>
            <Link to={insights.linkTo} className="inline-flex items-center gap-2 text-[9px] font-semibold text-[#ff6a00]">{insights.linkLabel} <ArrowRight size={12} /></Link>
          </div>

          <article className="grid grid-cols-[1.2fr_.8fr] overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(0,0,0,.055)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:grid-cols-1">
            <div className="p-10 max-sm:p-6">
              <small className="text-[8px] font-bold uppercase tracking-[.15em] text-[#ff6a00]">{featured.tag}</small>
              <h3 className="my-4 max-w-[650px] text-[clamp(22px,2.7vw,34px)] font-semibold leading-[1.16] tracking-[-.02em] text-[#252629]">{featured.title}</h3>
              <p className="mb-6 max-w-[620px] text-[10px] leading-[1.8] text-[#9397a0]">{featured.text}</p>
              <div className="flex items-center gap-3"><i className="size-8 rounded-full bg-[linear-gradient(135deg,#ffb27a,#ff6a00)]" /><div><b className="block text-[9px] text-[#34363a]">{featured.author}</b><small className="text-[8px] text-[#9a9a9a]">{featured.meta}</small></div></div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden max-lg:min-h-[220px]">
              <img loading="lazy" decoding="async" src={featured.image} alt="Glowing network representing enterprise AI" className="absolute inset-0 size-full object-cover" />
            </div>
          </article>

          <div className="mt-7 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {insights.articles.map((a) => (
              <article key={a.title} className="overflow-hidden rounded-[20px] bg-white pb-4 shadow-[0_5px_20px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative mb-4 aspect-[1.55] overflow-hidden">
                  <img loading="lazy" decoding="async" src={a.image} alt={a.title} className="size-full object-cover" />
                </div>
                <div className="px-4">
                  <small className="text-[10px] font-bold uppercase tracking-[.14em] text-[#ff6a00]">{a.tag}</small>
                  <h3 className="my-1.5 text-[15px] font-semibold leading-[1.4] text-[#292a2d]">{a.title}</h3>
                  <p className="mb-3 text-[12px] leading-[1.6] text-[#92969e]">{a.text}</p>
                  <div className="flex items-center gap-2"><i className="size-5 rounded-full bg-[linear-gradient(135deg,#ffb27a,#ff6a00)]" /><small className="text-[8px] text-[#92969e]">{a.author} â€¢ {a.read}</small></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      {/* CTA */}
      <section className="py-20 text-center max-sm:py-14">
        <div className={container}>
          <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.08] tracking-[-.025em] text-[#202124]"><RichText text={cta.title} /></h2>
          <p className="mx-auto mt-5 max-w-[650px] text-[clamp(12px,1vw,15px)] leading-[1.6] text-[#8c929c]">{cta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cta.actions.map(({ label, ...btn }) => (
              <Button key={label} size="sm" {...btn}>{label}</Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
