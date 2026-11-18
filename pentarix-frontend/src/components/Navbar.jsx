import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'
import { ChevronDown, Menu, Close, ArrowRight } from './Icons'
import { NAV_ITEMS } from '../data/navData'

// ─── Shared icon badge ────────────────────────────────────────────────────────
function NavIcon({ Icon, dark = false }) {
  return (
    <span className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${dark ? 'bg-[#351800] text-[#ff6a00]' : 'bg-[#ffe3d4] text-[#ff5a00]'}`}>
      <Icon size={17} />
    </span>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [openMenu,      setOpenMenu]      = useState(null)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const { pathname } = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    // Navigation changes must close transient menus before the next paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
    setOpenMenu(null)
    setMobileSection(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const solid = scrolled || mobileOpen || pathname !== '/'
  // The hero uses a dark image, so dropdowns opened over the transparent
  // navbar use the supplied dark palette. Scrolled pages use the light palette.
  const menuDark = !solid
  const panelClass = menuDark
    ? 'border-[#303034]/80 bg-[#19191b]/80 text-white shadow-2xl backdrop-blur-xl'
    : 'border-[#e5e4e7] bg-white text-black shadow-xl'
  const hoverClass = menuDark ? 'hover:bg-[#242426]' : 'hover:bg-[#f7f7f4]'
  const titleClass = menuDark ? 'text-white' : 'text-black'
  const descClass = menuDark ? 'text-[#a1a1aa]' : 'text-[#6b6b70]'

  // Hover helpers with a tiny delay so moving mouse to the panel doesn't flicker
  const menuEnter = (label) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const menuLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 80)
  }

  // Flatten all items from a mega nav entry for mobile
  const megaItems = (item) =>
    item.columns
      .filter((col) => col.type !== 'featured')
      .flatMap((col) => col.items)

  const hasDropdown = (item) => item.children || item.mega
  const isCurrentPath = (to) => to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`)
  const isNavItemActive = (item) => isCurrentPath(item.to) || (item.label === 'Careers' && (pathname === '/careers' || pathname === '/contact'))
  const scrollToTopIfCurrent = (to) => {
    const targetPath = typeof to === 'string' ? to.split(/[?#]/)[0] : to?.pathname
    const normalize = (path) => path?.replace(/\/+$/, '') || '/'
    if (normalize(targetPath) === normalize(pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${solid ? 'border-[#e5e4e7] bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-[1920px] items-center justify-between gap-8 px-[clamp(24px,3.5vw,68px)] max-md:px-6">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label="Pentarix home" onClick={() => scrollToTopIfCurrent('/')}>
          <Logo variant={solid ? 'dark' : 'light'} />
        </Link>

        {/* Desktop nav */}
        <nav className="flex items-center gap-8 max-lg:hidden" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => hasDropdown(item) && menuEnter(item.label)}
              onMouseLeave={menuLeave}
            >
              <NavLink
                to={item.to}
                onClick={() => scrollToTopIfCurrent(item.to)}
                className={({ isActive }) => `flex items-center gap-1.5 py-6 text-sm font-semibold transition-colors hover:text-[#ff6a00] ${isActive || isNavItemActive(item) ? 'text-[#ff6a00]' : solid ? 'text-black' : 'text-white'}`}
                aria-haspopup={hasDropdown(item) ? 'true' : undefined}
                aria-expanded={hasDropdown(item) ? openMenu === item.label : undefined}
              >
                {item.label}
                {hasDropdown(item) && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                  />
                )}
              </NavLink>

              {/* Rich single-column dropdown */}
              {item.children && (
                <ul className={`absolute left-1/2 top-[58px] ${item.label === 'Insights' ? 'w-[330px]' : 'w-[360px]'} max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-[20px] border p-3 transition ${panelClass} ${openMenu === item.label ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        className={`flex items-center gap-3 rounded-xl p-2.5 transition-colors ${hoverClass}`}
                        onClick={() => { setOpenMenu(null); scrollToTopIfCurrent(child.to) }}
                      >
                        <NavIcon Icon={child.Icon} dark={menuDark} />
                        <span className="flex flex-col">
                          <strong className={`text-sm font-semibold leading-5 ${titleClass}`}>{child.label}</strong>
                          {child.desc && <em className={`text-xs not-italic leading-4 ${descClass}`}>{child.desc}</em>}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="max-lg:hidden">
          <Button to="/contact" size="sm" onClick={() => scrollToTopIfCurrent('/contact')}>Contact Us</Button>
        </div>

        <button
          type="button"
          className="hidden text-black max-lg:block"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <Close size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mega menus (rendered as header siblings, position: absolute) ── */}
      {NAV_ITEMS.filter((i) => i.mega).map((item) => (
        <div
          key={item.label}
          className={`absolute left-1/2 top-[78px] -translate-x-1/2 rounded-[18px] border transition ${item.label === 'Services' ? 'w-[min(1114px,calc(100vw-2rem))]' : 'w-[min(810px,calc(100vw-2rem))]'} ${panelClass} ${openMenu === item.label ? 'visible opacity-100' : 'invisible opacity-0'}`}
          onMouseEnter={() => menuEnter(item.label)}
          onMouseLeave={menuLeave}
        >
          <div className={`grid gap-0 px-8 py-8 max-md:px-5 ${item.label === 'Services' ? 'grid-cols-[1.35fr_0.9fr_1fr]' : 'grid-cols-2'} max-lg:grid-cols-2 max-md:grid-cols-1`}>
            {item.columns.map((col, ci) =>
              col.type === 'featured' ? (
                <div
                key={ci}
                className={`flex flex-col rounded-2xl p-4 ${ci > 0 ? 'ml-4 max-md:ml-0 max-md:mt-6' : ''} ${menuDark ? 'bg-[#202022]' : 'bg-[#f0f0f0]'}`}
              >
                {/* Image fills whatever height is left after the text */}
                <div className="relative min-h-[160px] flex-1 overflow-hidden rounded-xl">
                  {col.image ? (
                    <img loading="lazy" decoding="async"
                      src={col.image}
                      alt={col.imageAlt || ''}
                      className="absolute inset-0 h-full w-full object-cover object-left-top"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#ff6a00,#321300_75%)]" />
                  )}
                </div>

                {/* Text block */}
                <div className="pt-5">
                  <strong className={`block text-[15px] leading-6 ${menuDark ? 'text-[#ff6a00]' : 'text-black'}`}>
                    {col.title}
                  </strong>
                  <p className={`mt-2 text-xs leading-5 ${descClass}`}>{col.desc}</p>
                  <Link
                to={col.to}
                onClick={() => scrollToTopIfCurrent(col.to)}
                className={`mt-5 inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:text-[#ff6a00] ${menuDark ? 'text-white' : 'text-[#555]'}`}
              >
                {col.cta} <ArrowRight size={13} />
              </Link>
                </div>
              </div>
              ) : (
                <div key={ci} className={`${col.slim ? 'col-span-1' : ''} ${ci > 0 ? 'border-l border-[#353539] pl-8 max-md:border-l-0 max-md:border-t max-md:border-t-[#353539] max-md:pl-0 max-md:pt-6' : ''} ${!menuDark && ci > 0 ? 'border-l-[#d4d4d8] max-md:border-t-[#d4d4d8]' : ''} ${ci === 0 ? 'pr-8 max-md:pr-0' : ci === 1 ? 'px-8 max-md:px-0' : 'pl-8 max-md:pl-0'}`}>
                  {col.heading && (
                  <p className={`mb-3 text-xs font-bold uppercase tracking-[.08em] ${menuDark ? 'text-white' : 'text-black'}`}>{col.heading}</p>
                  )}
                  <ul>
                    {col.items.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          className={`flex items-center gap-3 rounded-xl p-2 transition-colors ${hoverClass}`}
                          onClick={() => { setOpenMenu(null); scrollToTopIfCurrent(child.to) }}
                        >
                          <NavIcon Icon={child.Icon} dark={menuDark} />
                          <span className="flex flex-col">
                            <strong className={`text-sm font-semibold leading-5 ${titleClass}`}>{child.label}</strong>
                            {child.desc && <em className={`text-xs not-italic leading-4 ${descClass}`}>{child.desc}</em>}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      ))}

      {/* ── Mobile drawer ── */}
      <div className={`absolute inset-x-0 top-[72px] max-h-[calc(100vh-72px)] overflow-y-auto bg-white p-6 shadow-xl lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="border-b border-[#e5e4e7]">
            {hasDropdown(item) ? (
              <>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between py-4 text-left font-semibold ${isCurrentPath(item.to) ? 'text-[#ff6a00]' : 'text-black'}`}
                  aria-expanded={mobileSection === item.label}
                  onClick={() =>
                    setMobileSection(mobileSection === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={mobileSection === item.label ? 'rotate-180' : ''}
                  />
                </button>
                {mobileSection === item.label && (
                  <ul className="grid gap-1 pb-3">
                    {(item.mega ? megaItems(item) : item.children).map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to}
                          onClick={() => scrollToTopIfCurrent(child.to)}
                          className={({ isActive }) => `flex items-center gap-3 rounded-xl p-3 text-sm ${isActive ? 'bg-[#fff0e6] text-[#ff6a00]' : 'text-[#6b6375]'}`}
                        >
                          {child.Icon && <NavIcon Icon={child.Icon} />}
                          <span>{child.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                to={item.to}
                onClick={() => scrollToTopIfCurrent(item.to)}
                className={({ isActive }) => `block py-4 font-semibold ${isActive || isNavItemActive(item) ? 'text-[#ff6a00]' : 'text-black'}`}
              >
                {item.label}
              </NavLink>
            )}
          </div>
        ))}
        <Button to="/contact" fullWidth onClick={() => scrollToTopIfCurrent('/contact')}>Contact Us</Button>
      </div>
    </header>
  )
}
