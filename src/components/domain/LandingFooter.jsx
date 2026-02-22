export default function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-app-bg px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-primary">Trolipay</p>
          <p className="text-xs text-text-muted sm:text-sm">Reliable chat-commerce infrastructure for modern African SMEs.</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted sm:text-sm">
          <a href="#" className="transition hover:text-text">Privacy</a>
          <a href="#" className="transition hover:text-text">Terms</a>
          <a href="#" className="transition hover:text-text">Support</a>
          <p>© {year}</p>
        </div>
      </div>
    </footer>
  )
}
