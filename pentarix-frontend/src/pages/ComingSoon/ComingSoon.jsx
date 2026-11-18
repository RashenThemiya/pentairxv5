import { pageContainer as container } from '../../components/pageLayout'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button'

export default function ComingSoon({ title }) {
  const { pathname } = useLocation()
  const heading =
    title ||
    pathname
      .split('/')
      .filter(Boolean)
      .pop()
      ?.split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')

  return (
    <main className="flex min-h-[70svh] items-center justify-center pb-[120px] pt-[152px] text-center">
      <div className={`${container} flex flex-col items-center`}>
        <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">Coming soon</span>
        <h1 className="my-5 text-[clamp(36px,5vw,64px)] font-semibold uppercase">{heading}</h1>
        <p className="mb-8 max-w-[520px] text-[#9a9a9a]">This page is under construction.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </main>
  )
}