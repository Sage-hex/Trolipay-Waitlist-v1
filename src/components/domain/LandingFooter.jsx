export default function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card-bg px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 text-sm text-text-muted md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="text-brand-accent transition duration-150 ease-out hover:underline">
            Privacy
          </a>
          <a href="#" className="text-brand-accent transition duration-150 ease-out hover:underline">
            Terms
          </a>
        </div>
        <p>© {year} ChatCommerce</p>
      </div>
    </footer>
  )
}
