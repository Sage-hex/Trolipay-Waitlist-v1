import Button from '../ui/Button'

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-app-bg/95 backdrop-blur-sm">
      <div className="pointer-events-none h-1 w-full bg-gradient-to-r from-[#C2410C] via-brand-accent to-[#CA8A04]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <span className="inline-block h-8 w-8 rounded-lg bg-brand-primary" />
          <span>
            <span className="block text-lg font-semibold tracking-tight text-brand-primary">Trolipay</span>
            <span className="block text-[11px] uppercase tracking-wide text-text-muted">Built for African SMEs</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => scrollToSection('demo')}>
            Request demo
          </Button>
          <a
            href="/auth/login"
            className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition duration-150 ease-out hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  )
}
