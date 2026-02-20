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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight text-brand-primary">
          ChatCommerce
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
