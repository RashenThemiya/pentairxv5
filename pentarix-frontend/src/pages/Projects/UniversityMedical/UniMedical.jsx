import { pageContainer as container } from '../../../components/pageLayout'
import { Link } from 'react-router-dom'
import Hero from '../../../components/Hero'
import Cta from '../../../components/Cta'
import ProjectCapabilityCard from '../../../components/ProjectCapabilityCard'
import RichText from '../../../components/RichText'
import { ArrowRight, Users as User } from '../../../components/Icons'
import { hero, capabilities, operations, more, cta } from './uniMedicalData'


function AppointmentPreview({ appointments }) {
  return (
    <div className="absolute bottom-[8%] right-0 w-[65%] rounded-[24px] border border-[#f0f0f0] bg-white p-5 shadow-[0_16px_28px_rgba(0,0,0,.16)] max-sm:w-[72%] max-sm:rounded-2xl max-sm:p-3" aria-label="Example appointment dashboard">
      <h3 className="mb-4 text-[13px] font-bold text-[#252525] max-sm:text-[11px]">Today's Appointments</h3>
      <ul className="space-y-3">
        {appointments.map(({ name, time, type, color }) => (
          <li key={name} className="flex items-center gap-3 rounded-xl bg-[#f8f9fb] p-3 max-sm:gap-2 max-sm:p-2">
            <span className={`grid size-8 shrink-0 place-items-center rounded-full ${color}`}><User size={15} /></span>
            <div><p className="text-[12px] font-semibold text-[#252525] max-sm:text-[10px]">{name}</p><p className="mt-1 text-[10px] text-[#9297a1] max-sm:text-[9px]">{time} · {type}</p></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default function UniMedical() {
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
            alt="University doctor consulting with a student"
            width="1448"
            height="1086"
            className="aspect-square w-full rounded-[32px] object-cover object-center shadow-[0_18px_28px_rgba(0,0,0,.15)]"
            fetchPriority="high"
          />
        }
      />

      <section className="bg-[#f8f8f8] py-24 max-sm:py-16">
        <div className={container}>
          <div className="text-center">

            <h2 className="mt-3 text-[clamp(26px,3.2vw,40px)] font-bold leading-tight tracking-[-.025em] text-[#242424]">{capabilities.title}</h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.7] text-[#9297a1]">{capabilities.text}</p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-7 max-md:grid-cols-2 max-sm:mt-10 max-sm:grid-cols-1 max-sm:gap-5">
            {capabilities.items.map((item) => <ProjectCapabilityCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="py-28 max-sm:py-16">
        <div className={`${container} grid grid-cols-2 items-center gap-20 max-lg:gap-10 max-md:grid-cols-1`}>
          <div className="relative mx-auto w-full max-w-[560px] pb-6 pr-12 max-sm:pr-8">
            <img src={operations.image} alt="Nurse checking a student's blood pressure at the medical center" width="1086" height="1448" className="aspect-[.75/1] w-full rounded-[28px] border-4 border-white object-cover shadow-[0_16px_30px_rgba(0,0,0,.12)]" loading="lazy" />
            <AppointmentPreview appointments={operations.appointments} />
          </div>
          <div>
            <h2 className="whitespace-pre-line text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.25] tracking-[-.025em] text-[#242424]"><RichText text={operations.title} /></h2>
            <p className="mt-7 text-[16px] leading-[1.8] text-[#9297a1]">{operations.text}</p>
            <ul className="mt-9 space-y-6">
              {operations.details.map(({ icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fff5eb]"><img loading="lazy" decoding="async" src={icon} alt="" className="size-6 object-contain" /></span>
                  <div><h3 className="text-[16px] font-semibold text-[#252525]">{title}</h3><p className="mt-1 text-[14px] leading-[1.6] text-[#9297a1]">{text}</p></div>
                </li>
              ))}
            </ul>
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
