import { motion } from 'framer-motion'
import { animatedScrollToSection } from '../../utils/animatedScroll'
import { ArrowRight, BadgeCheck, BarChart3, ClipboardCheck, Route, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import FaqAccordion from '../../components/domain/FaqAccordion'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'

const stats = [
  { label: 'Payment verification confidence', value: '99.9%' },
  { label: 'Ops visibility from order to receipt', value: 'End-to-end' },
  { label: 'Team onboarding window', value: '< 1 week' },
]

const features = [
  {
    title: 'Verified payment rails',
    description: 'Every paid state transition depends on webhook signature, amount checks, and reference validation.',
  },
  {
    title: 'Deterministic delivery pricing',
    description: 'Zone rules apply once and consistently so buyers and ops teams always see the same total.',
  },
  {
    title: 'Professional receipt workflow',
    description: 'Issue receipt PDFs automatically on paid orders to increase trust and reduce support friction.',
  },
  {
    title: 'Unified chat commerce workspace',
    description: 'Manage Telegram and WhatsApp-led demand in one operational workflow.',
  },
  {
    title: 'Lifecycle-first order tracking',
    description: 'Track each order as reserved, pending, paid, delivered, or expired with clear team ownership.',
  },
  {
    title: 'Multi-business tenancy controls',
    description: 'Operate multiple brands or stores securely without data bleed between teams.',
  },
]

const testimonials = [
  {
    quote: 'We went from screenshot payment disputes to instant payment truth. That alone changed how fast we fulfill.',
    role: 'Operations Manager, Fast-growing Retail Brand',
  },
  {
    quote: 'The product feels premium, but practical. Our support team now sees one source of truth for every order.',
    role: 'Founder, Social Commerce Company',
  },
  {
    quote: 'Receipts, delivery logic, and payment verification in one place made our checkout experience trustworthy.',
    role: 'Head of Customer Experience, D2C Team',
  },
]

const steps = [
  {
    icon: ShieldCheck,
    title: 'Capture order intent in chat',
    description: 'Structured order objects are created from chat demand so teams don’t operate from message threads.',
  },
  {
    icon: Route,
    title: 'Compute totals with delivery rules',
    description: 'Zone-aware delivery logic calculates deterministic totals in integer kobo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Verify payment and issue receipts',
    description: 'Orders become paid only after webhook checks, then receipts are generated automatically.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.24, ease: 'easeOut' },
}

export default function WaitlistLanding() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,23,42,0.13),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(4,120,87,0.18),transparent_30%),radial-gradient(circle_at_20%_85%,rgba(202,138,4,0.12),transparent_34%)]" />

      <div className="relative">
        <LandingNavbar />

        <Section className="pb-10 pt-8 sm:pt-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24, ease: 'easeOut' }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-3 py-1 text-[11px] font-medium text-brand-accent sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Premium commerce infrastructure for African chat-led businesses
              </p>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-4xl md:text-5xl">
                Run chat orders like a modern commerce operation.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay transforms WhatsApp and Telegram demand into structured, payable, auditable orders with verified payments,
                deterministic delivery fees, and receipt-backed customer trust.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => animatedScrollToSection('waitlist', { duration: 0.55 })} className="inline-flex items-center gap-2">
                  Join waitlist
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="secondary" onClick={() => animatedScrollToSection('demo', { duration: 0.5 })}>
                  See live demo
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-card-bg p-3">
                    <p className="text-lg font-semibold text-brand-primary">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal}>
              <Card className="depth-3d-soft overflow-hidden border-brand-primary/15 p-3 sm:p-4">
                <div className="rounded-xl border border-border bg-white p-3 sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Command center</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Payments verified
                    </span>
                  </div>
                  <img
                    src="/images/hero-dashboard.svg"
                    alt="Trolipay command center showing payments, order flow and operational status"
                    className="mt-3 w-full rounded-lg border border-border"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section id="demo" className="pt-4">
          <div className="grid gap-5 md:grid-cols-2">
            <motion.div {...reveal}>
              <Card className="depth-3d-soft border-brand-primary/10 p-3">
                <LiveChatPreview />
              </Card>
            </motion.div>
            <motion.div {...reveal}>
              <Card className="depth-3d-soft overflow-hidden border-brand-primary/10 p-3">
                <img src="/images/receipt-proof.svg" alt="Receipt generation and payment proof workflow" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="mb-4 inline-flex items-center gap-2 text-brand-accent">
            <WalletCards className="h-4 w-4" />
            <p className="text-sm font-medium">Why teams choose Trolipay</p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Professional tooling for chat-native commerce</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
            Built for operational clarity: every order has a source of truth, every payment is verifiable, and every fulfillment step
            is auditable.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.24 }}>
                <FeatureCard title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section>
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">How it works</h2>
              <p className="mt-2 text-sm text-text-muted sm:text-base">A predictable flow from chat intent to verified payment and trusted delivery.</p>
              <div className="mt-5 space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <motion.article
                      key={step.title}
                      {...reveal}
                      transition={{ duration: 0.24, delay: idx * 0.05 }}
                      className="rounded-xl border border-border bg-card-bg p-5"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-2.5 py-1 text-xs font-medium text-brand-accent">
                        <Icon className="h-3.5 w-3.5" />
                        Step {idx + 1}
                      </div>
                      <h3 className="mt-3 text-base font-semibold text-brand-primary sm:text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
                    </motion.article>
                  )
                })}
              </div>
            </div>

            <motion.div {...reveal} className="grid gap-4">
              <Card className="overflow-hidden p-3">
                <img src="/images/commerce-flow.svg" alt="Commerce process flow" className="w-full rounded-lg border border-border" />
              </Card>
              <Card className="overflow-hidden p-3">
                <img src="/images/investor-metrics.svg" alt="Operational metrics preview" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="mb-3 inline-flex items-center gap-2 text-brand-accent">
            <BarChart3 className="h-4 w-4" />
            <p className="text-sm font-medium">Proof from operators</p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Trusted by teams handling real order volume</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="mt-6 grid gap-4 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.role} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.24 }}>
                <TestimonialCard quote={testimonial.quote} role={testimonial.role} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="waitlist" className="pb-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
            <motion.div {...reveal} className="rounded-2xl border border-border bg-brand-primary p-6 text-white sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <BadgeCheck className="h-3.5 w-3.5" />
                Private access onboarding
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Launch a premium chat commerce workflow for your team.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">
                Join the waitlist for guided setup, payments verification, delivery rule configuration, and operations playbook support.
              </p>
              <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-slate-100">
                We prioritize teams handling active weekly order volumes and businesses focused on reliable payment confirmation.
              </div>
            </motion.div>

            <motion.div {...reveal}>
              <WaitlistForm intent="waitlist" />
            </motion.div>
          </div>
        </Section>

        <Section className="pt-4">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <motion.div {...reveal}>
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Frequently asked questions</h2>
                <p className="mt-2 text-sm text-text-muted">Everything needed to evaluate fit for your ops and checkout workflow.</p>
                <div className="mt-5">
                  <FaqAccordion />
                </div>
              </Card>
            </motion.div>

            <motion.div {...reveal}>
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Book a product walkthrough</h2>
                <p className="mt-2 text-sm text-text-muted">
                  See how Trolipay handles chat-to-order orchestration, payment verification, and receipt delivery in one system.
                </p>
                <div className="mt-5">
                  <WaitlistForm intent="demo" />
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        <LandingFooter />
      </div>
    </div>
  )
}
