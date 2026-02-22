import Button from '../ui/Button'
import { animatedScrollToSection } from '../../utils/animatedScroll'

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-app-bg/95 backdrop-blur-sm">
      <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-[#C2410C] via-brand-accent to-[#CA8A04]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="inline-block h-7 w-7 shrink-0 rounded-lg bg-brand-primary sm:h-8 sm:w-8" />
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-tight text-brand-primary sm:text-lg">Trolipay</span>
            <span className="block truncate text-[10px] uppercase tracking-wide text-text-muted sm:text-[11px]">Built for African SMEs</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => animatedScrollToSection('demo', { duration: 0.9 })}
            className="rounded-lg border border-border bg-white px-2.5 py-1.5 text-xs font-medium text-text transition duration-150 ease-out hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
          >
            Demo
          </button>
          <a
            href="/auth/login"
            className="rounded-lg bg-brand-primary px-2.5 py-1.5 text-xs font-medium text-white transition duration-150 ease-out hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  )
}
