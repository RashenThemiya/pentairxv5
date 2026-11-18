import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const hiddenClasses = ['opacity-0', 'translate-y-4']
const visibleClasses = ['opacity-100', 'translate-y-0']

export default function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sections = document.querySelectorAll('main > section')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.remove(...hiddenClasses)
        entry.target.classList.add(...visibleClasses)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0, rootMargin: '240px 0px 240px 0px' })

    sections.forEach((section) => {
      section.classList.add(...hiddenClasses, 'transition-[opacity,transform]', 'duration-[1000ms]', 'ease-out')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
