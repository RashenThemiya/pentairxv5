import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Auto-playing photo slideshow with a slow pan/zoom ("Ken Burns") on each slide.
 * Wide photos pan from `from` to `to` (CSS object-position), so group shots
 * show everyone even inside a narrower frame.
 *
 * Performance: only the first photo loads up front; each next photo is mounted
 * one slide ahead. Autoplay runs only while on screen and the tab is visible,
 * pauses on hover / focus, and is off for prefers-reduced-motion.
 *
 * Props
 *  - slides:   [{ src, alt, eyebrow, title, caption, from = '50% 50%', to = '50% 50%' }]
 *  - interval: ms per slide
 *  - className: sizing for the frame (e.g. aspect ratio + radius)
 */
export default function PhotoSlideshow({ slides, interval = 4000, className = '' }) {
  const rootRef = useRef(null)
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [prev, setPrev] = useState(null)
  const [loaded, setLoaded] = useState(() => new Set([0]))
  const [inView, setInView] = useState(() => !('IntersectionObserver' in window))
  const [hovering, setHovering] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const playing = inView && pageVisible && !hovering && !reduceMotion && count > 1

  const goTo = useCallback(
    (next) => {
      const i = (next + count) % count
      if (i === index) return
      setPrev(index)
      setIndex(i)
      setLoaded((s) => (s.has(i) && s.has((i + 1) % count) ? s : new Set([...s, i, (i + 1) % count])))
    },
    [count, index],
  )

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
        if (entry.isIntersecting) setLoaded((s) => (s.has(1 % count) ? s : new Set([...s, 1 % count])))
      }, { threshold: 0.3 })
      observer.observe(rootRef.current)
    }
    return () => {
      media.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
      observer?.disconnect()
    }
  }, [count])

  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(() => goTo(index + 1), interval)
    return () => window.clearTimeout(id)
  }, [playing, index, interval, goTo])

  const current = slides[index]
  // The pan runs a little longer than the slide so it is still moving during the cross-fade.
  const panDuration = interval + 1200

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden bg-[#1d1f24] shadow-[0_24px_48px_rgba(20,24,30,.16)] ${className}`}
      aria-roledescription="carousel"
      aria-label="Pentarix in action"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovering(false)}
    >
      {slides.map((slide, i) => {
        if (!loaded.has(i)) return null
        const active = i === index
        const animate = !reduceMotion && (active || i === prev)
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={active ? slide.alt : ''}
            aria-hidden={active ? undefined : true}
            loading={i === 0 ? 'lazy' : 'eager'}
            decoding="async"
            draggable="false"
            className={`absolute inset-0 size-full select-none object-cover transition-opacity duration-[900ms] ease-out motion-reduce:transition-none ${active ? 'opacity-100' : 'opacity-0'}`}
            style={{
              '--from': slide.from || '50% 50%',
              '--to': slide.to || '50% 50%',
              objectPosition: slide.from || '50% 50%',
              animation: animate ? `photo-pan ${panDuration}ms cubic-bezier(.4,0,.6,1) forwards` : 'none',
              animationPlayState: playing || !active ? 'running' : 'paused',
            }}
          />
        )
      })}

      {/* Caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.78))] px-7 pb-6 pt-24 text-white max-sm:px-5 max-sm:pb-5">
        <div key={index} className="photo-caption">
          {current.eyebrow && <span className="block text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">{current.eyebrow}</span>}
          {current.title && <strong className="mt-1.5 block text-xl font-semibold leading-tight max-sm:text-lg">{current.title}</strong>}
          {current.caption && <p className="mt-1 text-[13px] text-white/75">{current.caption}</p>}
        </div>
      </div>

      {/* Story-style progress bars, clickable */}
      {count > 1 && (
        <ol className="absolute inset-x-5 top-4 flex gap-1.5" aria-label="Photos">
          {slides.map((slide, i) => (
            <li key={slide.src} className="flex-1">
              <button
                type="button"
                onClick={() => goTo(i)}
                className="group/bar block w-full py-1.5 focus-visible:outline-none"
                aria-label={`Show photo ${i + 1}: ${slide.title}`}
                aria-current={i === index ? 'true' : undefined}
              >
                <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/35 group-focus-visible/bar:ring-2 group-focus-visible/bar:ring-[#ff6a00]">
                  <span
                    key={i === index ? `on-${index}` : 'off'}
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{
                      width: i < index || (i === index && !playing) ? '100%' : '0%',
                      animation: i === index && playing ? `photo-progress ${interval}ms linear forwards` : 'none',
                    }}
                  />
                </span>
              </button>
            </li>
          ))}
        </ol>
      )}

      <style>{`
        @keyframes photo-pan {
          from { object-position: var(--from); transform: scale(1.08); }
          to   { object-position: var(--to);   transform: scale(1); }
        }
        @keyframes photo-progress { from { width: 0%; } to { width: 100%; } }
        @keyframes photo-caption-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        .photo-caption { animation: photo-caption-in .7s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .photo-caption { animation: none; } }
      `}</style>
    </div>
  )
}
