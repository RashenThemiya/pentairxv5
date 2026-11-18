import { useEffect, useRef, useState } from 'react'
import RichText from './RichText'
import { pageContainer } from './pageLayout'
import { ChevronLeft, ChevronRight } from './Icons'

/**
 * "Meet Our Founders" — dark section with all founders side by side and a large
 * quote panel for the selected founder. Rotates automatically while on screen;
 * clicking a portrait (or the arrows) selects that founder.
 *
 * Autoplay pauses on hover / keyboard focus and when the tab is hidden,
 * and is off for prefers-reduced-motion.
 *
 * Props
 *  - founders: [{ name, role, image, quote }]
 *  - eyebrow, title (RichText markup), description
 *  - interval: ms per founder
 */
export default function FoundersShowcase({ founders, eyebrow = 'Leadership', title = 'Meet Our {Founders.}', description, interval = 6000, className = '' }) {
  const rootRef = useRef(null)
  const count = founders.length
  const [index, setIndex] = useState(0)
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))
  const [hovering, setHovering] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const playing = inView && pageVisible && !hovering && !reduceMotion && count > 1
  const go = (i) => setIndex((i + count) % count)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReduceMotion(media.matches)
    media.addEventListener('change', onMotion)
    const onVisibility = () => setPageVisible(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', onVisibility)
    let observer
    if ('IntersectionObserver' in window && rootRef.current) {
      observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 })
      observer.observe(rootRef.current)
    }
    return () => {
      media.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearTimeout(id)
  }, [playing, index, interval, count])

  // On small screens the portraits scroll horizontally: keep the active one centred in that row.
  const listRef = useRef(null)
  useEffect(() => {
    const list = listRef.current
    const item = list?.children[index]
    if (!list || !item || list.scrollWidth <= list.clientWidth) return
    list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.clientWidth) / 2, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [index, reduceMotion])

  const active = founders[index]

  return (
    <section
      ref={rootRef}
      className={`relative overflow-hidden bg-[#0c0e13] py-28 text-white max-sm:py-20 ${className}`}
      aria-label="Our founders"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovering(false)}
    >
      {/* Ambient glow + faint grid */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,.22),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 -left-40 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(43,108,255,.10),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className={`relative ${pageContainer}`}>
        <header className="mx-auto max-w-[720px] text-center">
          <span className="text-[11px] font-bold uppercase tracking-[.3em] text-[#ff6a00]">{eyebrow}</span>
          <h2 className="mt-4 text-[clamp(32px,3.6vw,52px)] font-semibold leading-[1.1] tracking-[-.02em]">
            <RichText text={title} />
          </h2>
          {description && <p className="mt-5 text-[15px] leading-[1.8] text-white/55">{description}</p>}
        </header>

        {/* Portraits */}
        <ul ref={listRef} className="relative mt-16 grid grid-cols-5 gap-5 max-lg:-mx-6 max-lg:flex max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:px-6 max-lg:pb-14 max-lg:pt-4 max-lg:-mb-10 max-lg:[scrollbar-width:none] max-sm:mt-8">
          {founders.map((f, i) => {
            const isActive = i === index
            return (
              <li key={f.name} className="max-lg:w-[min(46vw,220px)] max-lg:shrink-0 max-lg:snap-center">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-pressed={isActive}
                  aria-label={`${f.name}, ${f.role}`}
                  className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-black text-left transition-[transform,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e13] motion-reduce:transition-none ${
                    isActive ? '-translate-y-2 shadow-[0_0_0_2px_#ff6a00,0_24px_60px_-12px_rgba(255,106,0,.45)]' : 'opacity-60 shadow-[0_0_0_1px_rgba(255,255,255,.08)] hover:-translate-y-1 hover:opacity-100'
                  }`}
                >
                  <img
                    src={f.image}
                    alt=""
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                    className={`size-full object-cover object-top transition-[transform,filter] duration-700 ease-out motion-reduce:transition-none ${isActive ? 'scale-[1.03]' : 'grayscale-[45%] group-hover:grayscale-0'}`}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,.92),rgba(0,0,0,.5)_55%,transparent)] px-4 pb-4 pt-14">
                    <span className="block text-[15px] font-semibold leading-tight text-white max-xl:text-[14px]">{f.name}</span>
                    <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.18em] text-[#ff6a00]">{f.role}</span>
                  </span>
                  {/* Autoplay timer on the active portrait */}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
                      <span
                        key={`timer-${index}-${playing}`}
                        className="block h-full bg-[#ff6a00]"
                        style={{ width: playing ? undefined : '100%', animation: playing ? `founder-timer ${interval}ms linear forwards` : 'none' }}
                      />
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Quote panel */}
        <figure className="relative mx-auto mt-14 grid max-w-[980px] grid-cols-[auto_1fr] items-center gap-10 rounded-[28px] border border-white/10 bg-white/[.035] p-10 backdrop-blur-sm max-md:grid-cols-1 max-md:gap-6 max-md:p-7">
          <div className="relative mx-auto size-[120px] shrink-0 max-md:size-[88px]">
            <span aria-hidden="true" className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_200deg,#ff6a00,transparent_60%,#ff6a00)] opacity-80" />
            <img key={active.image} src={active.image} alt="" className="founder-fade relative size-full rounded-full border-4 border-[#0c0e13] bg-black object-cover object-top" />
          </div>

          <div aria-live={playing ? 'off' : 'polite'}>
            <svg aria-hidden="true" width="40" height="30" viewBox="0 0 40 30" className="mb-4 text-[#ff6a00] max-md:mx-auto">
              <path fill="currentColor" d="M0 30V17.4C0 7.8 5.2 1.9 15.6 0l1.7 4.2C11.7 5.9 9 9.1 8.6 13.6H16V30H0Zm22.7 0V17.4C22.7 7.8 27.9 1.9 38.3 0L40 4.2c-5.6 1.7-8.3 4.9-8.7 9.4h7.4V30H22.7Z" />
            </svg>
            <blockquote key={active.name} className="founder-fade text-[clamp(17px,1.5vw,22px)] font-medium leading-[1.65] text-white/85 max-md:text-center">
              {active.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-4 max-md:flex-col">
              <div key={`cap-${active.name}`} className="founder-fade max-md:text-center">
                <strong className="block text-[17px] font-semibold text-white">{active.name}</strong>
                <span className="mt-0.5 block text-[12px] font-semibold uppercase tracking-[.16em] text-white/45">{active.role}, Pentarix</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tabular-nums text-white/40" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                </span>
                <button type="button" onClick={() => go(index - 1)} aria-label="Previous founder" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#ff6a00] hover:bg-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => go(index + 1)} aria-label="Next founder" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#ff6a00] hover:bg-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]">
                  <ChevronRight size={18} />
                </button>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <style>{`
        @keyframes founder-timer { from { width: 0%; } to { width: 100%; } }
        @keyframes founder-fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .founder-fade { animation: founder-fade-in .6s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .founder-fade { animation: none; } }
      `}</style>
    </section>
  )
}
