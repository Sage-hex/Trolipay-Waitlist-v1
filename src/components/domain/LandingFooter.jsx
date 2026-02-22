export default function LandingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-app-bg px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Trolipay, Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-text">Privacy</a>
          <a href="#" className="transition hover:text-text">Terms</a>
          <a href="#" className="transition hover:text-text">Status</a>
          <a href="#" className="transition hover:text-text">Docs</a>
        </div>
      </div>
    </footer>
  )
}
