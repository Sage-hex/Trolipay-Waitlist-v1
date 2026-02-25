import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-app-bg/95 backdrop-blur-sm">
      <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-[#C2410C] via-brand-accent to-[#CA8A04]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src="/brand/trolipay-mark.svg" alt="Trolipay logo" className="h-7 w-7 shrink-0 rounded-lg sm:h-8 sm:w-8" />
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-tight text-brand-primary sm:text-lg">Trolipay</span>
            <span className="block truncate text-[10px] uppercase tracking-wide text-text-muted sm:text-[11px]">Built for African SMEs</span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card-bg text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:h-9 sm:w-9"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <div className="hidden items-center gap-2 sm:flex sm:gap-3">
            <a
              href="/#waitlist"
              className="rounded-lg bg-brand-accent px-2.5 py-1.5 text-xs font-semibold text-white transition duration-150 ease-out hover:brightness-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg dark:text-[#0b0b0d] sm:px-4 sm:py-2 sm:text-sm"
            >
              Join waitlist
            </a>
            <a
              href="/#demo"
              className="rounded-lg border border-border bg-card-bg px-2.5 py-1.5 text-xs font-medium text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
            >
              Demo
            </a>
            <Link
              to="/about"
              className="rounded-lg border border-border bg-card-bg px-2.5 py-1.5 text-xs font-medium text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="rounded-lg border border-border bg-card-bg px-2.5 py-1.5 text-xs font-medium text-text transition duration-150 ease-out hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:px-4 sm:py-2 sm:text-sm"
            >
              FAQ
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card-bg text-text transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg sm:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-border bg-card-bg px-4 py-3 sm:hidden">
          <div className="grid gap-2">
            <a href="/#waitlist" onClick={closeMenu} className="rounded-lg bg-brand-accent px-3 py-2 text-sm font-semibold text-white dark:text-[#0b0b0d]">Join waitlist</a>
            <a href="/#demo" onClick={closeMenu} className="rounded-lg border border-border bg-app-bg px-3 py-2 text-sm font-medium text-text">Demo</a>
            <Link to="/about" onClick={closeMenu} className="rounded-lg border border-border bg-app-bg px-3 py-2 text-sm font-medium text-text">About</Link>
            <Link to="/faq" onClick={closeMenu} className="rounded-lg border border-border bg-app-bg px-3 py-2 text-sm font-medium text-text">FAQ</Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
