import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { Mail, Phone, MapPin } from './Icons'
import { FEATURED_WORK, SERVICES, QUICK_LINKS, SOCIALS, BADGES, CONTACT, TAGLINE, LEGAL_LINKS } from '../data/footerData'

export default function Footer() {
  const { pathname } = useLocation()

  const scrollToTopIfCurrent = (to) => {
    const targetPath = typeof to === 'string' ? to.split(/[?#]/)[0] : to?.pathname
    const normalize = (path) => path?.replace(/\/+$/, '') || '/'
    if (normalize(targetPath) === normalize(pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0b0b0b] text-sm text-[#9a9a9a]">
      <div className="mx-auto max-w-[1360px] px-8">
        <div className="flex items-start justify-between gap-10 border-b border-white/10 px-10 py-16 max-lg:flex-col max-lg:px-0">
          <div>
            <Link to="/" aria-label="Pentarix home" onClick={() => scrollToTopIfCurrent('/')}>
              <Logo variant="light" height={34} />
            </Link>
            <p className="mt-5 max-w-[230px] leading-[1.7]">{TAGLINE}</p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {BADGES.map((b) => (
              <img loading="lazy" decoding="async"
                key={b.alt}
                src={b.src}
                alt={b.alt}
                className="block h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 justify-between gap-14 px-20 py-[72px] max-lg:grid-cols-2 max-lg:px-0 max-sm:grid-cols-1">
          <div>
            <h4 className="mb-6 text-[13px] font-semibold text-white">Featured Work</h4>
            <ul className="grid gap-3.5">
              {FEATURED_WORK.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-[#ff6a00]" to={item.to} onClick={() => scrollToTopIfCurrent(item.to)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-semibold text-white">Services</h4>
            <ul className="grid gap-3.5">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link className="transition-colors hover:text-[#ff6a00]" to={item.to} onClick={() => scrollToTopIfCurrent(item.to)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-semibold text-white">Quick Links</h4>
            <ul className="grid gap-3.5">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    className="transition-colors hover:text-[#ff6a00]"
                    to={item.to}
                    onClick={() => scrollToTopIfCurrent(item.to)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[13px] font-semibold text-white">Contact</h4>
            <ul className="grid gap-3.5">
              <li className="flex items-center gap-3 text-sm text-[#c9c9c9]">
                <Mail className="shrink-0 text-[#ff6a00]" size={16} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#c9c9c9]">
                <Phone className="shrink-0 text-[#ff6a00]" size={16} />
                <span>
                  {CONTACT.phones.map((p, i) => (
                    <span key={p.href}>
                      {i > 0 && ' | '}
                      <a href={p.href}>{p.label}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#c9c9c9]">
                <MapPin className="shrink-0 text-[#ff6a00]" size={16} />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={label} className="grid size-7 place-items-center rounded-full border border-[#555] text-[#9a9a9a] transition hover:border-[#ff6a00] hover:text-[#ff6a00]">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 py-8 pb-12 text-xs max-sm:flex-col max-sm:items-start">
          <p>© {new Date().getFullYear()} Pentarix. All rights reserved.</p>
          <div className="flex gap-8 max-sm:gap-4">
            {LEGAL_LINKS.map((l) => (
              <Link className="hover:text-[#ff6a00]" key={l.to} to={l.to} onClick={() => scrollToTopIfCurrent(l.to)}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
