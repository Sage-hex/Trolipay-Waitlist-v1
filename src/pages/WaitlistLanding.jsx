import { Sparkles } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { showToast } from '../components/ui/toastStore'

export default function WaitlistLanding() {
  return (
    <main className="min-h-screen bg-app-bg px-8 py-8 text-text">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Card>
          <div className="flex items-center gap-2 text-brand-accent">
            <Sparkles className="h-4 w-4" />
            <p className="text-sm font-medium">Trolipay Waitlist</p>
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-brand-primary">Premium waitlist landing placeholder</h1>
          <p className="mt-2 text-sm text-text-muted">
            Router is active and this is the initial route at <code>/</code>. UI primitives and local toasts are ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => showToast({ type: 'success', message: 'Welcome! Waitlist submission coming next.' })}>
              Show Success Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() => showToast({ type: 'info', message: 'This is a local toast system with no dependencies.' })}
            >
              Show Info Toast
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}
