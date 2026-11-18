import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Download, ArrowRight } from './Icons'

/**
 * Auto-playing preview of a multi-page PDF (e.g. the Pentarix Portfolio 2027 journal).
 *
 * Performance:
 *  - Pages are pre-rendered, compressed WebP images (~70 KB each), not the PDF itself.
 *  - Only the cover loads up front; each later page is fetched just before it is shown.
 *  - Autoplay runs only while the preview is on screen and the tab is visible,
 *    pauses on hover / keyboard focus, and is off for prefers-reduced-motion.
 *  - The full PDF is only downloaded when the visitor clicks "View" / "Download".
 *
 * Props
 *  - pages:    [{ src, label }]  page images in order; label is used for alt text + caption
 *  - pdf:      URL of the full PDF
 *  - eyebrow, title
 *  - interval: ms each page stays on screen
 */
export default function JournalPreview({ pages, pdf, eyebrow, title, interval = 3800, className = '' }) {
  const rootRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(() => new Set([0]))
  // Without IntersectionObserver (very old browsers) treat the preview as always visible.
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))
  const [hovering, setHovering] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const count = pages.length
  const playing = inView && pageVisible && !hovering && !userPaused && !reduceMotion && count > 1

  const goTo = useCallback(
    (next) => {
      const i = (next + count) % count
      // Make sure the target (and the one after it) are mounted so they are ready to show.
      setLoaded((prev) => (prev.has(i) && prev.has((i + 1) % count) ? prev : new Set([...prev, i, (i + 1) % count])))
      setIndex(i)
    },
    [count],
  )

  // Watch viewport visibility, tab visibility and the reduced-motion preference.
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReduceMotion(media.matches)
    media.addEventListener('change', onMotion)

    const onVisibility = () => setPageVisible(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', onVisibility)

    let observer
    if ('IntersectionObserver' in window && rootRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        setInView(entry.isIntersecting)
        // Once the preview is on screen, warm up the next page in the background.
        if (entry.isIntersecting) setLoaded((prev) => (prev.has(1 % count) ? prev : new Set([...prev, 1 % count])))
      }, { threshold: 0.35 })
      observer.observe(rootRef.current)
    }

    return () => {
      media.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
    }
  }, [count])

  // Autoplay: advance one page per interval while playing.
  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(() => goTo(index + 1), interval)
    return () => window.clearTimeout(id)
  }, [playing, index, interval, goTo])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1) }
  }

  const current = pages[index]

  return (
    <figure
      ref={rootRef}
      className={`group/journal relative m-0 w-full ${className}`}
      aria-roledescription="carousel"
      aria-label={title}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovering(false)}
      onKeyDown={onKeyDown}
    >
      {(eyebrow || title) && (
        <figcaption className="mb-5 flex items-end justify-between gap-4">
          <div>
            {eyebrow && <span className="block text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">{eyebrow}</span>}
            {title && <strong className="mt-1.5 block text-lg font-semibold text-black">{title}</strong>}
          </div>
          <span className="shrink-0 text-xs font-semibold tabular-nums text-[#9a9a9a]" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </figcaption>
      )}

      {/* The "book": two sheets behind the current page give it a journal look */}
      <div className="relative">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-[18px] bg-[#f1f1ec] shadow-sm transition-transform duration-500 group-hover/journal:rotate-[4deg] motion-reduce:transition-none" aria-hidden="true" />
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1.5deg] rounded-[18px] bg-[#e7e5df] shadow-sm" aria-hidden="true" />

        <a
          href={pdf}
          target="_blank"
          rel="noopener"
          className="relative block aspect-[900/1274] overflow-hidden rounded-[18px] bg-[#1d1f24] shadow-[0_24px_48px_rgba(20,24,30,.18)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_28px_56px_rgba(20,24,30,.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]"
          aria-label={`Open ${title} (PDF), page ${index + 1} of ${count}: ${current.label}`}
        >
          {pages.map((page, i) =>
            loaded.has(i) ? (
              <img
                key={page.src}
                src={page.src}
                alt={i === index ? `${title}, page ${i + 1}: ${page.label}` : ''}
                aria-hidden={i === index ? undefined : true}
                width="900"
                height="1274"
                loading={i === 0 ? 'lazy' : 'eager'}
                decoding="async"
                draggable="false"
                className={`absolute inset-0 size-full select-none object-cover transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  i === index ? 'translate-x-0 scale-100 opacity-100' : i < index ? '-translate-x-4 scale-[.98] opacity-0' : 'translate-x-4 scale-[.98] opacity-0'
                }`}
              />
            ) : null,
          )}

          {/* Section label */}
          <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-sm">
            {current.label}
          </span>
        </a>

        {/* Prev / next — visible on hover or keyboard focus, always visible on touch screens */}
        <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition-opacity duration-200 group-hover/journal:opacity-100 group-focus-within/journal:opacity-100 [@media(hover:none)]:opacity-100">
          <button type="button" onClick={() => goTo(index - 1)} className="pointer-events-auto grid size-9 place-items-center rounded-full bg-white/90 text-black shadow-md transition hover:bg-[#ff6a00] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]" aria-label="Previous page">
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={() => goTo(index + 1)} className="pointer-events-auto grid size-9 place-items-center rounded-full bg-white/90 text-black shadow-md transition hover:bg-[#ff6a00] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]" aria-label="Next page">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Progress: one segment per page; the active one fills while autoplay runs */}
      <div className="mt-6 flex items-center gap-3">
        {!reduceMotion && count > 1 && (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            className="grid size-7 shrink-0 place-items-center rounded-full border border-[#e5e4e7] text-black transition hover:border-[#ff6a00] hover:text-[#ff6a00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a00]"
            aria-label={userPaused ? 'Play page slideshow' : 'Pause page slideshow'}
          >
            {userPaused ? <Play size={12} /> : <Pause size={12} />}
          </button>
        )}
        <ol className="flex flex-1 gap-1.5" aria-label="Pages">
          {pages.map((page, i) => (
            <li key={page.src} className="flex-1">
              <button
                type="button"
                onClick={() => goTo(i)}
                className="group/dot block w-full py-2 focus-visible:outline-none"
                aria-label={`Page ${i + 1}: ${page.label}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <span className="relative block h-[3px] overflow-hidden rounded-full bg-[#e5e4e7] group-hover/dot:bg-[#d0d0d0] group-focus-visible/dot:ring-2 group-focus-visible/dot:ring-[#ff6a00]">
                  <span
                    key={i === index ? `active-${index}` : 'idle'}
                    className="journal-progress absolute inset-y-0 left-0 rounded-full bg-[#ff6a00]"
                    style={{
                      width: i < index ? '100%' : i === index && !playing ? '100%' : '0%',
                      animation: i === index && playing ? `journal-fill ${interval}ms linear forwards` : 'none',
                    }}
                  />
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href={pdf} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 text-[13px] font-bold text-black transition-colors hover:text-[#ff6a00]">
          View full portfolio
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <a href={pdf} download className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#9a9a9a] transition-colors hover:text-[#ff6a00]">
          <Download size={14} />
          Download PDF
        </a>
      </div>

      <style>{`
        @keyframes journal-fill { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </figure>
  )
}
