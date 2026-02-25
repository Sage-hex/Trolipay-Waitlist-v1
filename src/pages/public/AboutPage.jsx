import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import Card from '../../components/ui/Card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-app-bg text-text">
      <LandingNavbar />
      <Section className="pb-8 pt-8 sm:pt-12">
        <Card className="rounded-2xl border border-border p-5 sm:p-7">
          <p className="font-handwriting text-xl text-brand-accent sm:text-2xl">What we are building</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">
            Trolipay is building trusted commerce infrastructure for chat-first businesses.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            We help SME teams run WhatsApp and Telegram sales with verified payments, clear order states, and receipt-backed customer trust.
            Instead of managing business-critical workflows in scattered chats and screenshots, Trolipay gives one operational source of truth.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-app-bg p-4">
              <p className="font-handwriting text-lg text-brand-accent">Problem</p>
              <p className="mt-1 text-sm text-text-muted">Payment disputes, manual tracking, and fulfillment confusion in chat-led sales.</p>
            </div>
            <div className="rounded-xl border border-border bg-app-bg p-4">
              <p className="font-handwriting text-lg text-brand-accent">Solution</p>
              <p className="mt-1 text-sm text-text-muted">Verification-first payment flow, deterministic order states, and faster operations visibility.</p>
            </div>
            <div className="rounded-xl border border-border bg-app-bg p-4">
              <p className="font-handwriting text-lg text-brand-accent">Outcome</p>
              <p className="mt-1 text-sm text-text-muted">More trusted checkouts, fewer disputes, and scalable process control for SME teams.</p>
            </div>
          </div>
        </Card>
      </Section>
      <LandingFooter />
    </div>
  )
}
