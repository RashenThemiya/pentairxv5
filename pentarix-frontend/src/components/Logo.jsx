import logoImg from '../assets/logos/Logo.png'

// Pentarix logo: Logo.png mark + "PENTARIX" wordmark.
// variant="light" -> white wordmark (for dark backgrounds)
// variant="dark"  -> black wordmark (for light backgrounds)
export default function Logo({ variant = 'dark', iconOnly = false, height = 34, className = '' }) {
  const wordColor = variant === 'light' ? '#ffffff' : '#0b0b0b'

  return (
    <span
      className={`logo ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, lineHeight: 1 }}
      aria-label="Pentarix"
    >
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        height={height}
        width={height}
        style={{ display: 'block', objectFit: 'contain' }}
      />
      {!iconOnly && (
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: height * 0.74,
            letterSpacing: '0.2em',
            color: wordColor,
            transition: 'color 0.25s ease',
          }}
        >
          PENTARIX
        </span>
      )}
    </span>
  )
}
