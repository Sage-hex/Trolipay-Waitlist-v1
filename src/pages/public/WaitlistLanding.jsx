import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Wallet, Workflow, Zap } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import WaitlistForm from '../../components/domain/WaitlistForm'
import FaqAccordion from '../../components/domain/FaqAccordion'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'
import { scrollToSection } from '../../utils/animatedScroll'

const features = [
  {
    title: 'Chat → structured order objects',
    description: 'Every incoming request becomes a clear order with customer, amount, delivery zone, and owner.',
  },
  {
    title: 'Payment verification before paid state',
    description: 'No screenshot assumptions. Paid status depends on reference, signature, and amount checks.',
  },
  {
    title: 'Deterministic delivery fee logic',
    description: 'Zone configuration is applied consistently so totals remain predictable across channels.',
  },
  {
    title: 'Receipt-backed customer confidence',
    description: 'Generate clean receipts after verified payment to improve trust and support operations.',
  },
  {
    title: 'Lifecycle-first fulfillment flow',
    description: 'Track order transitions from reserved to paid, delivered, expired, or refunded with clarity.',
  },
  {
    title: 'Operator-friendly for small teams',
    description: 'Built for African SMEs that need premium process quality without enterprise complexity.',
  },
]

const investorSignals = [
  { icon: TrendingUp, label: 'Conversion integrity', value: 'Higher paid-order confidence' },
  { icon: Wallet, label: 'Revenue certainty', value: 'Reduced disputed settlements' },
  { icon: Workflow, label: 'Operational velocity', value: 'Faster order-to-fulfillment cycle' },
]

const testimonials = [
  {
    quote: 'We stopped losing time proving payments in chat. Our team now fulfills with confidence.',
    role: 'Operations Lead, Fashion Retail SME',
  },
  {
    quote: 'Trolipay gave us structure. We now know exactly what to do from order capture to delivery.',
    role: 'Founder, Social Commerce Brand',
  },
  {
    quote: 'Receipt workflow and deterministic totals made our customer experience feel premium overnight.',
    role: 'Customer Success Lead, D2C Team',
  },
]

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}

export default function WaitlistLanding() {
  return (
    <div className="min-h-screen bg-app-bg text-text">
      <LandingNavbar />

      <Section className="pt-8 sm:pt-12">
        <div className="surface-grid overflow-hidden rounded-3xl border border-border bg-card-bg">
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.06fr_0.94fr]">
            <motion.div {...reveal}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-3 py-1 text-xs font-medium text-brand-accent">
                <Sparkles className="h-3.5 w-3.5" /> Trolipay waitlist • built for African chat-commerce operators
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-5xl">
                Stop guessing in chat. Run verified commerce with confidence.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay helps you turn WhatsApp and Telegram demand into structured, payable, and auditable orders.
                Your team gets payment truth, deterministic delivery totals, and receipt-backed trust in one flow.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('waitlist')}
                  className="btn-gloom inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-app-bg transition hover:opacity-95"
                >
                  Join waitlist <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="rounded-lg border border-border bg-card-bg px-4 py-2 text-sm font-medium text-text transition hover:opacity-90"
                >
                  See live demo
                </button>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {[
                  'Reduce payment disputes',
                  'Fulfill faster with clear status',
                  'Give finance + ops one source of truth',
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-card-bg p-3">
                    <p className="inline-flex items-start gap-2 text-xs leading-relaxed text-text">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent" /> {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal} id="waitlist" className="rounded-2xl border border-border bg-card-bg p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between gap-2 rounded-xl border border-border bg-app-bg px-3 py-2">
                <p className="inline-flex items-center gap-2 text-xs font-medium text-brand-accent">
                  <Zap className="h-3.5 w-3.5" /> Early access onboarding
                </p>
                <span className="text-xs text-text-muted">Private beta</span>
              </div>
              <WaitlistForm intent="waitlist" />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="demo" className="pt-4">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-3">
            <LiveChatPreview />
          </Card>
          <Card className="overflow-hidden p-3">
            <img src="/images/hero-dashboard.svg" alt="Trolipay command center" className="w-full rounded-lg border border-border" />
          </Card>
        </div>
      </Section>

      <Section id="features">
        <div className="mb-4 inline-flex items-center gap-2 text-brand-accent">
          <ShieldCheck className="h-4 w-4" />
          <p className="text-sm font-medium">What Trolipay gives your business</p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">A premium operating layer for fast-moving commerce teams</h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
              <FeatureCard title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card-bg p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Investor confidence signals</h2>
          <p className="mt-2 text-sm text-text-muted">Operational leverage that compounds with transaction volume.</p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {investorSignals.map((signal) => {
              const Icon = signal.icon
              return (
                <div key={signal.label} className="rounded-xl border border-border bg-app-bg p-4">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card-bg text-brand-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-wide text-text-muted">{signal.label}</p>
                  <p className="mt-1 text-sm font-medium text-brand-primary">{signal.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Loved by operations-focused teams</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.role} quote={item.quote} role={item.role} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Frequently asked questions</h2>
            <p className="mt-2 text-sm text-text-muted">Everything teams ask before moving from chat chaos to verified operations.</p>
            <div className="mt-5">
              <FaqAccordion />
            </div>
          </Card>

          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Book a live product walkthrough</h2>
            <p className="mt-2 text-sm text-text-muted">See exactly how chat demand becomes verified revenue in your own workflow.</p>
            <div className="mt-5">
              <WaitlistForm intent="demo" />
            </div>
          </Card>
        </div>
      </Section>

      <LandingFooter />
    </div>
  )
}
