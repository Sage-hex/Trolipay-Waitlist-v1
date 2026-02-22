import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem('theme')
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function LandingNavbar() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-app-bg/95 backdrop-blur-sm">
      <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-[#C2410C] via-brand-accent to-[#CA8A04]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="inline-block h-7 w-7 shrink-0 rounded-lg bg-brand-accent sm:h-8 sm:w-8" />
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-tight text-brand-primary sm:text-lg">Trolipay</span>
            <span className="block truncate text-[10px] uppercase tracking-wide text-text-muted sm:text-[11px]">Built for African SMEs</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card-bg text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:h-9 sm:w-9"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#demo"
            className="rounded-lg border border-border bg-card-bg px-2.5 py-1.5 text-xs font-medium text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
          >
            Demo
          </a>
          <a
            href="/auth/login"
            className="rounded-lg bg-brand-accent px-2.5 py-1.5 text-xs font-semibold text-[#0b0b0d] transition duration-150 ease-out hover:brightness-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  )
}
