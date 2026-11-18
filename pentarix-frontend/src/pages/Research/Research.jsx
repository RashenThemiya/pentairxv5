import { pageContainer as container } from '../../components/pageLayout'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import { Check } from '../../components/Icons'
import suslLogo from '../../assets/logos/susl.webp'
import mlImage from '../../assets/images/research/ml.webp'
import visionImage from '../../assets/images/research/computervision.webp'
import engineBackground from '../../assets/images/research/bg.webp'
import { hero, commitment, machineLearning, nlp, vision, flow, academia, engine, field, cta } from './researchData'

export default function Research() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero {...hero} />

      {/* Research commitment */}
      <section className="border-t border-[#f0f0ee] py-16 max-sm:py-12">
        <div className={`${container} grid grid-cols-[.8fr_1.2fr] gap-16 max-lg:grid-cols-1 max-sm:gap-6`}>
          <div>
            <h2 className="max-w-[360px] text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.2] tracking-[-.025em] text-[#242529]">{commitment.title}</h2>
            <i className="mt-5 block h-0.5 w-10 bg-[#ff6a00]" />
          </div>
          <div className="grid gap-4 text-[13px] leading-[1.8] text-[#91959d]">
            {commitment.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ML & DL */}
      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={container}>
          <div className="grid grid-cols-2 items-center gap-14 max-lg:grid-cols-1 max-sm:gap-8">
            <div className="relative aspect-[1.25] overflow-hidden rounded-[24px] shadow-[0_14px_32px_rgba(0,0,0,.14)] max-sm:aspect-[1.25]">
              <img loading="lazy" decoding="async" src={mlImage} alt="Machine learning server racks" className="size-full object-cover" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[.17em] text-[#ff6a00]">{machineLearning.eyebrow}</span>
              <h2 className="my-3 text-[clamp(30px,2.8vw,38px)] font-semibold leading-[1.2] tracking-[-.02em] text-[#242529]">{machineLearning.title}</h2>
              <p className="text-[16px] leading-[1.8] text-[#91959d]">{machineLearning.text}</p>
              <ol className="mt-6 grid gap-4">
                {machineLearning.points.map((pt) => (
                  <li key={pt.number} className="flex gap-4 border-b border-[#e5e4e7] pb-4">
                    <b className="text-[14px] font-bold text-[#ff6a00]">{pt.number}</b>
                    <div><h4 className="mb-1 text-[16px] font-semibold text-[#26272a]">{pt.title}</h4><p className="text-[13px] leading-[1.6] text-[#91959d]">{pt.text}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-[72px] grid grid-cols-12 gap-6">
            <article className="col-span-4 rounded-[32px] border border-[#efefea] bg-white p-12 shadow-[0_8px_30px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
              <img loading="lazy" decoding="async" src={nlp.Icon} alt="" aria-hidden="true" className="mb-9 size-16 object-contain max-sm:mb-7 max-sm:size-14" />
              <h3 className="text-[28px] font-semibold leading-tight text-[#252629] max-sm:text-[24px]">{nlp.title}</h3>
              <p className="mt-6 text-[15px] leading-[1.7] text-[#858b95]">{nlp.text}</p>
              <ul className="mt-10 grid gap-5 text-[15px] font-medium text-[#414348] max-sm:mt-8 max-sm:gap-4 max-sm:text-[13px]">
                {nlp.checks.map((t) => (
                  <li key={t} className="flex items-center gap-3"><span className="text-[#ff6a00]"><Check size={13} strokeWidth={3} /></span>{t}</li>
                ))}
              </ul>
            </article>
            <article className="col-span-8 rounded-[36px] bg-[#191919] p-16 text-white transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-lg:col-span-12 max-sm:p-6">
              <span className="text-[12px] font-bold uppercase tracking-[.17em] text-[#ff6a00]">{vision.eyebrow}</span>
              <h3 className="my-4 text-[clamp(32px,3.2vw,48px)] font-semibold leading-[1.1]">{vision.title}</h3>
              <p className="max-w-[800px] text-[clamp(15px,1.5vw,20px)] leading-[1.6] text-white/55">{vision.text}</p>
              <div className="relative mt-12 aspect-[3.2] overflow-hidden rounded-2xl max-sm:mt-8 max-sm:aspect-[1.5]">
                <img loading="lazy" decoding="async" src={visionImage} alt="Computer vision monitoring a warehouse" className="size-full object-cover" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00] px-6 py-3 text-[14px] font-semibold text-white shadow-lg">{vision.badge}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Efficiency */}
      <section className="py-20 max-sm:py-14">
        <div className={`${container} grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-sm:gap-8`}>
          <div>
            <h2 className="max-w-[440px] text-[clamp(24px,2.6vw,34px)] font-semibold leading-[1.18] tracking-[-.025em] text-[#28292c]"><RichText text={flow.title} /></h2>
            <p className="my-4 mb-7 max-w-[470px] text-[11px] leading-[1.8] text-[#91959d]">{flow.text}</p>
            <div className="flex gap-10">
              {flow.stats.map((s) => (
                <div key={s.label}><b className="block text-[23px] font-semibold text-[#292a2d]">{s.value}</b><span className="text-[8px] uppercase tracking-[.13em] text-[#9a9a9a]">{s.label}</span></div>
              ))}
            </div>
          </div>
          <div className="relative">
            <span className="absolute -left-10 -top-10 z-0 size-40 rounded-full bg-[#fff0e8]" />
            <div className="relative z-10 rounded-[56px] bg-[#f8f8f8] p-16 shadow-[0_8px_26px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-sm:p-6">
            <h3 className="relative mb-10 text-[clamp(24px,2.4vw,32px)] font-semibold leading-tight text-[#292a2d] max-sm:mb-8">{flow.rpa.title}</h3>
            <div className="relative grid gap-12 max-sm:gap-8">
              {flow.rpa.items.map((it) => (
                <div key={it.title} className="flex gap-6 max-sm:gap-4">
                  <img loading="lazy" decoding="async" src={it.icon} alt="" aria-hidden="true" className="size-12 shrink-0 object-contain max-sm:size-10" />
                  <div>
                    <h4 className="mb-2 text-[18px] font-semibold text-[#34363a] max-sm:text-[16px]">{it.title}</h4>
                    <p className="text-[15px] leading-[1.7] text-[#858b95] max-sm:text-[13px]">{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Academia */}
      <section className="bg-[#fffaf6] py-20 text-center max-sm:py-14">
        <div className={container}>
          <span className="text-[11px] font-bold uppercase tracking-[.17em] text-[#ff6a00]">{academia.eyebrow}</span>
          <h2 className="mx-auto mb-9 mt-2 text-[clamp(22px,2.5vw,32px)] font-semibold tracking-[-.02em] text-[#292a2d]">{academia.title}</h2>
          <div className="mx-auto grid max-w-[1080px] scale-[1.03] grid-cols-[200px_1fr] items-center gap-10 rounded-[28px] border border-[#f1e9e5] bg-white p-9 text-left shadow-[0_12px_30px_rgba(255,106,0,.06)] max-lg:grid-cols-1 max-sm:scale-100 max-sm:gap-6 max-sm:p-6">
            <div className="flex flex-col items-center text-center">
              <img loading="lazy" decoding="async" src={suslLogo} alt="Sabaragamuwa University of Sri Lanka seal" className="mb-3 size-[120px] rounded-full object-contain" />
              <b className="text-[12px] font-semibold text-[#4b4c50]">{academia.logo.name}</b><small className="mt-1 text-[9px] uppercase tracking-[.15em] text-[#9a9a9a]">{academia.logo.sub}</small>
            </div>
            <div>
              <h3 className="text-[20px] font-semibold text-[#292a2d]">{academia.labTitle}</h3>
              <p className="my-3 text-[12px] leading-[1.7] text-[#91959d]">{academia.text}</p>
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                {academia.boxes.map((b) => (
                  <div key={b.title} className="transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none rounded-xl bg-[#f8f8f8] p-3"><h5 className="mb-1 text-[11px] font-semibold text-[#383a3d]">{b.title}</h5><p className="text-[9px] leading-[1.5] text-[#92969e]">{b.text}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engine */}
      <section className="py-20 max-sm:py-14">
        <div className={container}>
          <div className="mb-8 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <div><h2 className="text-[clamp(23px,2.5vw,32px)] font-semibold tracking-[-.02em] text-[#292a2d]">{engine.title}</h2><p className="mt-1 text-[12px] text-[#969aa2]">{engine.text}</p></div>
            <span className="text-[9px] font-semibold text-[#ff6a00]">{engine.sheet}</span>
          </div>
          <div className="relative flex min-h-[420px] items-center justify-center gap-28 overflow-hidden rounded-[56px] bg-cover bg-center px-16 py-16 max-lg:min-h-0 max-lg:flex-col max-sm:gap-8 max-sm:rounded-[32px] max-sm:px-6 max-sm:py-12" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${engineBackground})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="absolute left-[15%] right-[15%] top-1/2 hidden border-t border-dashed border-[#ff6a00]/35 lg:block" />
            {engine.nodes.map(({ id, Icon, label, title, text, featured }) => (
              <div key={id} className={`transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none relative z-10 flex w-[190px] min-h-[255px] flex-col items-center justify-center gap-4 rounded-[24px] p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,.07)] ${featured ? '!w-[256px] !min-h-[320px] rounded-[28px] bg-[#1b1b1b] !p-10 text-white shadow-[0_14px_30px_rgba(0,0,0,.2)]' : 'bg-white'}`}>
                {featured ? (
                  <img loading="lazy" decoding="async" src={Icon} alt="" aria-hidden="true" className="size-16 object-contain" />
                ) : (
                  <img loading="lazy" decoding="async" src={Icon} alt="" aria-hidden="true" className="size-12 object-contain" />
                )}
                <small className={`text-[11px] font-bold uppercase tracking-[.12em] ${featured ? 'text-[#ff9a50]' : 'text-[#a1a4aa]'}`}>{label}</small>
                <b className={`text-[16px] ${featured ? 'text-white' : 'text-[#34363a]'}`}>{title}</b>
                {text && <p className="text-[11px] leading-[1.5] text-white/55">{text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field */}
      <section className="bg-[#f8f8f8] py-16 max-sm:py-12">
        <div className={container}>
          <h2 className="mb-7 text-[16px] font-semibold text-[#292a2d]">{field.title}</h2>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {field.items.map((f) => (
              <article key={f.title} className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,.045)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative mb-3 aspect-[1.7] overflow-hidden">
                  <img loading="lazy" decoding="async" src={f.image} alt={f.title} className={`size-full object-cover ${f.title === 'Bio-Data Analysis' ? 'scale-[1.25]' : ''}`} />
                </div>
                <div className="px-4 pb-4">
                  <small className="text-[10px] font-bold uppercase tracking-[.15em] text-[#ff6a00]">{f.tag}</small>
                  <h3 className="mb-1 mt-1 text-[15px] font-semibold text-[#292a2d]">{f.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-[#92969e]">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center max-sm:py-16">
        <div className={container}>
          <h2 className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-.025em] text-[#292a2d]">{cta.title}</h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[10px] leading-[1.7] text-[#9397a0]">{cta.text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {cta.actions.map(({ label, ...btn }) => (
              <Button key={label} size="sm" {...btn}>{label}</Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
