import { pageContainer as container } from '../../components/pageLayout'
import Button from '../../components/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-[70svh] items-center justify-center pb-[120px] pt-[152px] text-center">
      <div className={`${container} flex flex-col items-center`}>
        <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#ff6a00]">Error 404</span>
        <h1 className="my-5 text-[clamp(36px,5vw,64px)] font-semibold uppercase">
          Page not <span className="text-[#ff6a00]">found.</span>
        </h1>
        <p className="mb-8 max-w-[520px] text-[#9a9a9a]">The page you are looking for doesn&rsquo;t exist or has moved.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </main>
  )
}