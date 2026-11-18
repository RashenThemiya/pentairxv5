import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import { Check } from '../../../components/Icons'
import { pageContainer } from '../../../components/pageLayout'
import { hero, solutions, approach, dashboard, cta } from './aiDrivenData'

function OperationalPreview() {
  return (
    <figure className="rounded-[32px] border border-[#efefef] bg-white p-8 shadow-[0_14px_20px_rgba(0,0,0,.12)] max-sm:p-5">
      <figcaption className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <span aria-hidden="true" className="flex gap-2"><i className="size-2.5 rounded-full bg-[#ff6b6b]" /><i className="size-2.5 rounded-full bg-[#ffbf32]" /><i className="size-2.5 rounded-full bg-[#39d982]" /></span>
        <span className="rounded-full bg-[#f8f8f8] px-3 py-2 text-[10px] text-[#858993]">Illustrative Operational Overview</span>
      </figcaption>
      <div className="grid grid-cols-3 gap-4 max-sm:gap-2">
        {dashboard.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-[#f1f1f1] bg-[#f8f9fa] p-4 max-sm:p-2.5"><p className="text-[9px] uppercase tracking-[.04em] text-[#858993]">{metric.label}</p><p className="mt-2 text-[clamp(18px,2vw,25px)] font-bold text-[#343434]">{metric.value}</p><div aria-hidden="true" className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e4e6ea]"><span className="block h-full bg-[#ff6a00]" style={{ width: `${metric.progress}%` }} /></div></div>)}
      </div>
      <svg viewBox="0 0 440 230" role="img" aria-labelledby="operational-chart-title" className="mt-8 h-auto w-full">
        <title id="operational-chart-title">Illustrative trend increasing from January to June; sample data, not measured business results.</title>
        {[40, 80, 120, 160, 200].map((y, index) => <g key={y}><line x1="35" x2="425" y1={y} y2={y} stroke="#eeeeee" /><text x="24" y={y + 4} textAnchor="end" fontSize="10" fill="#858993">{80 - index * 20}</text></g>)}
        {[35, 113, 191, 269, 347, 425].map((x, index) => <g key={x}><line x1={x} x2={x} y1="20" y2="200" stroke="#f2f2f2" /><text x={x} y="216" textAnchor="middle" fontSize="10" fill="#858993">{dashboard.months[index]}</text></g>)}
        <path d="M35 124 C65 123 88 119 113 114 S165 94 191 94 S243 111 269 104 S321 62 347 54 S400 37 425 34 L425 200 L35 200 Z" fill="#ff6a00" fillOpacity=".09" />
        <path d="M35 124 C65 123 88 119 113 114 S165 94 191 94 S243 111 269 104 S321 62 347 54 S400 37 425 34" fill="none" stroke="#ff6a00" strokeWidth="3" />
        {[[35,124],[113,114],[191,94],[269,104],[347,54],[425,34]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="3.5" fill="#ff6a00" />)}
      </svg>
    </figure>
  )
}

export default function AiDriven() {
  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero eyebrow={hero.eyebrow} title={hero.title} description={hero.description} actions={hero.actions}
        contentClassName="lg:!grid-cols-2"
        aside={<img decoding="async" src={hero.image} alt="Team planning business improvements with notes on a glass board" width="1024" height="1024" fetchPriority="high" className="aspect-[1.2] w-full rounded-[36px] object-cover shadow-[0_20px_30px_rgba(0,0,0,.17)]" />}
      />

      <section className="pb-24 pt-14 max-sm:py-14" aria-labelledby="solutions-heading">
        <div className={pageContainer}>
          <div className="flex items-end gap-16"><div><h2 id="solutions-heading" className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.3] tracking-[-.025em] text-[#343434]">Where Intelligent Solutions Can Help</h2><p className="mt-4 text-[16px] leading-[1.75] text-[#858993]">Four key areas where we drive measurable digital transformation.</p></div><span aria-hidden="true" className="mb-3 h-px flex-1 bg-[#ededed] max-md:hidden" /></div>
          <div className="mt-14 grid auto-rows-fr grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {solutions.map((item) => <ProjectCapabilityCard key={item.title} {...item} className="h-full !border-transparent !bg-[#f8f8f8] !p-7 [&>span]:bg-white" />)}
          </div>
        </div>
      </section>

      <section id="our-approach" className="scroll-mt-24 bg-[#f8f8f8] py-24 max-sm:py-16" aria-labelledby="approach-heading">
        <div className={`${pageContainer} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div>
            <h2 id="approach-heading" className="whitespace-pre-line text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.25] tracking-[-.025em] text-[#343434]">{approach.title}</h2>
            <p className="mt-7 max-w-[480px] text-[16px] leading-[1.8] text-[#858993]">{approach.text}</p>
            <ul className="mt-8 space-y-6">{approach.points.map((point) => <li key={point.title} className="flex items-start gap-4"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#ffecd5] text-[#ff6a00]"><Check size={14} /></span><div><h3 className="text-[15px] font-semibold text-[#343434]">{point.title}</h3><p className="mt-1 text-[14px] leading-[1.7] text-[#858993]">{point.text}</p></div></li>)}</ul>
            <div className="mt-10 border-t border-[#e8e8e8] pt-7"><h3 className="text-[10px] font-medium uppercase tracking-[.15em] text-[#858993]">Core Industries</h3><ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">{approach.industries.map((industry) => <li key={industry} className="text-[12px] text-[#717787]">{industry}</li>)}</ul></div>
          </div>
          <OperationalPreview />
        </div>
      </section>
      <Cta data={cta} variant="project" />
    </main>
  )
}
