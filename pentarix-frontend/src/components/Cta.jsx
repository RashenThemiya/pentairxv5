import { pageContainer } from './pageLayout'
import Button from './Button'
import RichText from './RichText'

const layouts = {
  economicCenter: {
    section: 'py-28 max-sm:py-16',
    content: pageContainer,
    card: 'rounded-[56px] bg-[radial-gradient(ellipse_at_top_right,rgba(119,53,20,.4),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(94,48,25,.3),transparent_40%)] bg-[#191919] px-8 py-20 text-center max-sm:rounded-[32px] max-sm:px-5 max-sm:py-14',
    title: 'mx-auto max-w-[700px] whitespace-pre-line text-[clamp(32px,4vw,52px)] font-bold leading-[1.05] tracking-[-.025em] text-white',
    description: 'mx-auto mt-9 max-w-[530px] text-[16px] leading-[1.6] text-[#929292]',
    actions: 'mt-8 flex flex-wrap justify-center gap-4',
    buttonSize: 'md',
  },
  healthcare: {
    section: 'bg-[#f7f7f7] py-20 text-center max-sm:py-14',
    content: pageContainer,
    title: 'mx-auto mb-7 max-w-[800px] text-[clamp(30px,4vw,48px)] font-semibold uppercase leading-[1.15] tracking-[-.025em] text-[#242529]',
    description: 'mx-auto mb-12 max-w-[720px] text-[15px] leading-[1.7] text-[#858993]',
    actions: 'flex flex-wrap items-center justify-center gap-6',
    buttonSize: 'lg',
  },
  home: {
    section: 'border-t border-[#eeeeee] py-[96px] pb-[112px] text-center max-md:py-20 max-sm:py-16',
    content: pageContainer,
    title: 'mb-4 whitespace-pre-line text-[clamp(36px,4.2vw,50px)] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-[#202020]',
    description: 'mx-auto mb-6 max-w-[500px] text-[12px] leading-[1.7] text-[#888888]',
    actions: 'justify-center',
    buttonSize: 'lg',
  },
  company: {
  section: 'py-24 max-sm:py-16',
  content: pageContainer,
  card: 'mx-auto w-full rounded-[28px] bg-[#191919] px-8 py-[72px] text-center text-white max-sm:px-5 max-sm:py-14',
  title: 'mb-4 whitespace-pre-line text-[clamp(32px,4.2vw,48px)] font-semibold leading-[1.1] tracking-[-.03em] text-white',
  description: 'mx-auto mb-6 max-w-[700px] text-[clamp(15px,1.5vw,19px)] leading-[1.65] text-[#a5a5a5]',
  actions: 'flex justify-center gap-4 max-sm:flex-wrap',
  buttonSize: 'lg',
},
  projects: {
    section: 'py-24 max-sm:py-16',
    content: pageContainer,
    card: 'rounded-[28px] bg-[linear-gradient(135deg,#141414_40%,#3a1d08)] px-6 py-[72px] text-center text-white',
    title: '',
    description: '',
    actions: 'ip-actions',
  },
  services: {
    section: 'py-24 max-sm:py-16',
    content: pageContainer,
    card: 'rounded-[28px] bg-[linear-gradient(135deg,#fff3ea,#fff_60%,#ffeee0)] px-6 py-[72px] text-center',
    title: '',
    description: '',
    actions: 'ip-actions',
  },
  insights: {
    section: 'py-24 text-center max-sm:py-16',
    content: pageContainer,
    title: 'ip-title',
    titleStyle: { fontSize: 'clamp(32px,4.2vw,48px)' },
    description: '',
    actions: 'ip-actions',
    actionsStyle: { justifyContent: 'center' },
  },
  research: {
    section: 'py-24 text-center max-sm:py-16',
    content: pageContainer,
    title: 'ip-title',
    titleStyle: { fontSize: 'clamp(30px,4vw,44px)' },
    description: '',
    actions: 'ip-actions',
    actionsStyle: { justifyContent: 'center' },
  },
}

export default function Cta({ data, variant = 'home' }) {
  const layout = layouts[variant === 'industry' ? 'healthcare' : variant === 'project' ? 'economicCenter' : variant]
  const actions = data.actions || [data.button]
  const cardClassName = layout.card
  const titleClassName = layout.title
  const descriptionClassName = layout.description
  const actionsClassName = layout.actions

  return (
    <section className={layout.section} id={variant === 'home' ? 'contact-cta' : undefined}>
      <div className={layout.content}>
        <div
          className={`${cardClassName || ''}${data.decoration ? ' relative isolate overflow-hidden' : ''}`}
          style={variant === 'company' ? { background: 'radial-gradient(ellipse at top right, rgba(70, 39, 20, .35), transparent 45%), #191919' } : undefined}
        >
          {data.decoration && <img src={data.decoration} alt="" className="pointer-events-none absolute right-10 top-1/2 -z-10 w-[160px] -translate-y-1/2 opacity-10 max-md:right-4 max-md:w-[110px]" loading="lazy" />}
          {data.eyebrow && <p className="mb-5 text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">{data.eyebrow}</p>}
          <h2 className={titleClassName} style={layout.titleStyle}>
            <RichText text={data.title} />
          </h2>
          <p className={descriptionClassName}>{data.text}</p>
          <div className={actionsClassName} style={layout.actionsStyle}>
            {actions.map(({ label, icon, ...button }) => (
              <Button key={label} size={layout.buttonSize} {...button}>
                <span className="inline-flex items-center gap-2">{label}{icon && <img loading="lazy" decoding="async" src={icon} alt="" className="size-5 object-contain" />}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
