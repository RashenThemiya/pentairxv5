import { pageContainer as container } from '../../components/pageLayout'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/Hero'
import teamPhoto from '../../assets/images/home/moments/team.webp'
import clientMeetingPhoto from '../../assets/images/home/moments/client-meeting.webp'
import partnershipPhoto from '../../assets/images/home/moments/partnership-signing.webp'
import contactLowerImage from '../../assets/images/careers/contactlowerimage.webp'
import Button from '../../components/Button'
import RichText from '../../components/RichText'
import { MapPin } from '../../components/Icons'
import { hero, why, openings, contact, form as formData } from './careersContactData'

// Real photos of the Pentarix team (not stock) for the careers hero.
function TeamCollage() {
  const tile = 'relative overflow-hidden rounded-[22px] bg-[#e9e9e9] shadow-[0_14px_30px_rgba(0,0,0,.12)]'
  const img = 'size-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04] motion-reduce:transition-none'
  const label = 'pointer-events-none absolute bottom-3 left-3 whitespace-nowrap rounded-full bg-black/65 px-3 py-1 text-[10px] max-sm:bottom-2 max-sm:left-2 max-sm:px-2.5 max-sm:text-[9px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-sm'
  return (
    <div className="grid w-full max-w-[560px] grid-cols-2 gap-3 justify-self-end max-lg:justify-self-center">
      <figure className={`${tile} col-span-2 aspect-[2.1/1]`}>
        <img src={teamPhoto} alt="The Pentarix team standing together outdoors" width="1600" height="760" decoding="async" fetchPriority="high" className={`${img} object-[50%_35%]`} />
        <figcaption className={label}>The Pentarix team</figcaption>
      </figure>
      <figure className={`${tile} aspect-[1.35/1]`}>
        <img src={clientMeetingPhoto} alt="Pentarix team members in a client meeting" width="1600" height="668" loading="lazy" decoding="async" className={`${img} object-[55%_50%]`} />
        <figcaption className={label}>Client meetings</figcaption>
      </figure>
      <figure className={`${tile} aspect-[1.35/1]`}>
        <img src={partnershipPhoto} alt="Pentarix at the partnership signing with Sabaragamuwa University of Sri Lanka" width="1600" height="796" loading="lazy" decoding="async" className={`${img} object-[50%_45%]`} />
        <figcaption className={label}>Partnerships</figcaption>
      </figure>
    </div>
  )
}

const EMPTY = { name: '', email: '', company: '', type: formData.inquiryTypes[0], details: '' }

export default function CareersContact() {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState(null)
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  // /contact shares this page and lands at the top of the contact section
  useEffect(() => {
    if (pathname === '/contact') {
      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ block: 'start' }), 0)
    }
  }, [pathname])

  const jobs = filter ? openings.jobs.filter((j) => j.dept === filter) : openings.jobs
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    // TODO: send `form` to your backend / email service here
    console.log('Contact form:', form)
    setSent(true)
    setForm(EMPTY)
  }

  const { labels, placeholders } = formData

  return (
    <main className="overflow-x-clip pt-[72px]">
      <Hero id="careers" {...hero} aside={<TeamCollage />} />

      {/* Why Pentarix */}
      <section className="bg-[#f8f8f8] py-16 text-center max-sm:py-12" id="why">
        <div className={container}>
          <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold">{why.title}</h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[#9a9a9a]">{why.text}</p>
          <div className="mx-auto mt-10 grid max-w-[1060px] grid-cols-3 gap-5 text-left max-lg:grid-cols-1">
            {why.perks.map(({ title, text, Icon }) => (
              <article key={title} className="rounded-[24px] border border-[#efefea] bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,.035)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none">
                <span className="mb-5 inline-grid size-11 place-items-center rounded-xl bg-[#fff0e6] text-[#ff6a00]"><Icon size={20} /></span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-[#9a9a9a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 max-sm:py-12" id="openings">
        <div className={container}>
          <div className="mb-10 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <div><h2 className="text-[clamp(24px,3vw,34px)] font-semibold tracking-[-.02em] text-[#242529]">{openings.title}</h2><p className="mt-1 text-[11px] text-[#92969e]">{openings.text}</p></div>
            <div className="flex flex-wrap gap-2.5">
              {openings.departments.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`rounded-full border border-[#e5e4e7] px-4 py-2 text-xs font-semibold transition hover:border-[#ff6a00] ${filter === d ? 'border-black bg-black text-white' : 'bg-white text-black'}`}
                  onClick={() => setFilter(filter === d ? null : d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {jobs.map((j) => (
              <article key={j.title} className="flex items-center gap-5 rounded-[20px] border border-[#efefea] bg-white px-5 py-4 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,24,30,0.12)] hover:ring-1 hover:ring-[#ff6a00] motion-reduce:transform-none motion-reduce:transition-none max-sm:flex-wrap max-sm:p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fff7f2] text-[10px] font-bold text-[#ff6a00]">{j.code}</span>
                <div className="flex-1">
                  <h3 className="text-[13px] font-semibold text-[#28292c]">{j.title}</h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3.5 text-[10px] text-[#9a9a9a]"><MapPin size={11} /> {j.place} <span>â— {j.type}</span> <span>â— {j.extra}</span></p>
                </div>
                <Button
                  href={`mailto:info@pentarixlabs.com?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                  variant="outline-dark"
                  size="sm"
                >
                  {openings.applyLabel}
                </Button>
              </article>
            ))}
            {jobs.length === 0 && <p className="p-8 text-center text-[#9a9a9a]">{openings.emptyText}</p>}
          </div>

          <div className="mt-8 rounded-[28px] bg-[#fff3ed] px-6 py-12 text-center max-sm:py-10">
            <h3 className="mb-3 text-[18px] font-semibold text-[#28292c]">{openings.pool.title}</h3>
            <p className="mx-auto mb-6 max-w-[520px] text-[11px] leading-[1.7] text-[#92969e]">{openings.pool.text}</p>
            <Button href={openings.pool.button.href}>{openings.pool.button.label}</Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="scroll-mt-[72px] flex flex-col justify-center bg-[#f8f8f8] py-10 max-sm:py-8 lg:min-h-[calc(80svh-72px)]" id="contact">
        <div className={container}>
          <div className="text-center">
            <span className="text-[8px] font-bold uppercase tracking-[.2em] text-[#ff6a00]">{contact.eyebrow}</span>
            <h2 className="my-3 text-[clamp(34px,4.4vw,52px)] font-semibold leading-[1.05] tracking-[-.025em] text-[#202124]">
              <RichText text={contact.title} />
            </h2>
            <p className="mx-auto max-w-[520px] text-[11px] leading-[1.7] text-[#92969e]">{contact.text}</p>
          </div>

          <div className="mt-10 grid grid-cols-[1fr_1.4fr] items-start gap-10 max-lg:grid-cols-1" id="contact-form">
            <div>
              <h3 className="mb-6 text-xl font-semibold">{contact.reachTitle}</h3>
              {contact.reach.map(({ Icon, label, value }) => (
                <div key={label} className="mb-6 flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-white text-[#ff6a00] shadow-[0_2px_10px_rgba(0,0,0,.06)]"><Icon size={16} /></span>
                  <div><small className="block text-[9px] uppercase tracking-[.15em] text-[#9a9a9a]">{label}</small><b className="text-sm text-black">{value}</b></div>
                </div>
              ))}
              <blockquote className="mt-8 rounded-3xl bg-[#181818] p-8 text-white">
                <p className="mb-5 text-sm leading-[1.6] text-[#e8e8e8]">{contact.quote.text}</p>
                <footer className="flex items-center gap-3"><i className="size-[34px] rounded-full border-2 border-[#ff6a00] bg-[linear-gradient(135deg,#ffb27a,#ff6a00)]" /><div><b className="block text-xs">{contact.quote.author}</b><small className="text-[9px] text-[#888]">{contact.quote.role}</small></div></footer>
              </blockquote>
            </div>

            <form className="grid grid-cols-2 gap-5 rounded-[28px] border border-[#efefea] bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,.05)] max-sm:grid-cols-1 max-sm:gap-4 max-sm:p-6" onSubmit={submit}>
              {sent ? (
                <div className="cc-sent">
                  <h3>{formData.success.title}</h3>
                  <p>{formData.success.text}</p>
                  <Button variant="outline-dark" size="sm" onClick={() => setSent(false)}>{formData.success.again}</Button>
                </div>
              ) : (
                <>
                  <label className="grid gap-2 text-[11px] font-bold text-black">{labels.name}<input className="w-full rounded-[10px] border border-transparent bg-[#f4f4f1] px-4 py-4 text-[13px] font-medium focus:border-[#ff6a00] focus:bg-white focus:outline-none" name="name" value={form.name} onChange={update} placeholder={placeholders.name} required /></label>
                  <label className="grid gap-2 text-[11px] font-bold text-black">{labels.email}<input className="w-full rounded-[10px] border border-transparent bg-[#f4f4f1] px-4 py-4 text-[13px] font-medium focus:border-[#ff6a00] focus:bg-white focus:outline-none" name="email" type="email" value={form.email} onChange={update} placeholder={placeholders.email} required /></label>
                  <label className="grid gap-2 text-[11px] font-bold text-black">{labels.company}<input className="w-full rounded-[10px] border border-transparent bg-[#f4f4f1] px-4 py-4 text-[13px] font-medium focus:border-[#ff6a00] focus:bg-white focus:outline-none" name="company" value={form.company} onChange={update} placeholder={placeholders.company} /></label>
                  <label className="grid gap-2 text-[11px] font-bold text-black">{labels.type}
                    <select className="w-full rounded-[10px] border border-transparent bg-[#f4f4f1] px-4 py-4 text-[13px] font-medium focus:border-[#ff6a00] focus:bg-white focus:outline-none" name="type" value={form.type} onChange={update}>
                      {formData.inquiryTypes.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                  <label className="col-span-full grid gap-2 text-[11px] font-bold text-black max-sm:col-span-1">{labels.details}
                    <textarea className="w-full resize-y rounded-[10px] border border-transparent bg-[#f4f4f1] px-4 py-4 text-[13px] font-medium focus:border-[#ff6a00] focus:bg-white focus:outline-none" name="details" rows={4} value={form.details} onChange={update} placeholder={placeholders.details} required />
                  </label>
                  <Button type="submit" fullWidth className="cc-form__full">{formData.submit}</Button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      <div className="h-[20svh] min-h-[150px] max-h-[280px] bg-cover bg-center grayscale max-sm:h-[160px]" style={{ backgroundImage: "url(" + contactLowerImage + ")" }} role="img" aria-label="Monochrome architectural detail" />
    </main>
  )
}
