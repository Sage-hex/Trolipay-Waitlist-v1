import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { scrollToSection } from '../../utils/animatedScroll'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function LandingNavbar() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-app-bg/90 backdrop-blur-lg">
      <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-[#C2410C] via-brand-accent to-[#CA8A04]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-app-bg">T</span>
          <div>
            <p className="text-sm font-semibold text-brand-primary sm:text-base">Trolipay</p>
            <p className="text-[10px] uppercase tracking-wide text-text-muted">Built for African SMEs</p>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card-bg text-text transition hover:opacity-90"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('features')}
            className="hidden rounded-lg border border-border bg-card-bg px-3 py-2 text-xs font-medium text-text transition hover:opacity-90 sm:inline-flex"
          >
            Features
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('waitlist')}
            className="rounded-lg bg-brand-primary px-3 py-2 text-xs font-medium text-app-bg transition hover:opacity-95 sm:text-sm"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  )
}
