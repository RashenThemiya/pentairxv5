import { ArrowRight } from './Icons'
import { Link } from 'react-router-dom' 

/**
 * Reusable button.
 *
 * Props
 *  - variant: 'primary' (solid orange pill) | 'outline' (white outline, for dark bg)
 *             | 'outline-dark' (black outline, for light bg) | 'link' (text + arrow)
 *  - size:    'sm' | 'md' | 'lg'
 *  - href:    renders an <a> when provided, otherwise a <button>
 *  - arrow:   show a trailing arrow icon
 *  - fullWidth
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  arrow = false,
  fullWidth = false,
  className = '',
  ...rest
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-transparent font-semibold leading-none transition duration-200',
    size === 'sm' ? 'px-6 py-3.5 text-sm' : size === 'lg' ? 'px-11 py-5 text-lg' : 'px-8 py-4 text-[15px]',
    fullWidth && 'w-full',
    variant === 'primary' && 'bg-[#ff6a00] text-white hover:-translate-y-px hover:bg-[#e05c00] hover:shadow-[0_8px_24px_rgba(255,106,0,.35)]',
    variant === 'outline' && '!border-black bg-white text-black hover:-translate-y-px hover:!border-black hover:bg-[#f3f3f3] hover:text-black',
    variant === 'outline-dark' && '!border-black bg-transparent text-black hover:-translate-y-px hover:!border-black hover:bg-black hover:text-white',
    variant === 'link' && 'self-start !justify-start !px-0 !py-0 rounded-none border-0 bg-transparent text-[13px] font-bold text-black hover:text-[#ff6a00]',
    variant === 'dark' && 'bg-[#0b0b0b] text-white hover:-translate-y-px hover:bg-[#2a2a2a] hover:shadow-[0_8px_24px_rgba(0,0,0,.25)]',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {(arrow || variant === 'link') && <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
