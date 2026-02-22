export default function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-app-bg px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-brand-primary">Trolipay</p>
          <p className="mt-1 text-xs sm:text-sm">Reliable chat commerce infrastructure for African SMEs.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="/privacy" className="text-brand-accent transition duration-150 ease-out hover:underline">
            Privacy
          </a>
          <a href="/terms" className="text-brand-accent transition duration-150 ease-out hover:underline">
            Terms
          </a>
          <p className="text-xs sm:text-sm">© {year}</p>
        </div>
      </div>
    </footer>
  )
}
