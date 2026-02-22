import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, BarChart3, ClipboardCheck, Route, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import FaqAccordion from '../../components/domain/FaqAccordion'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'

const traction = [
  { label: 'Pilot merchants', value: '12', note: 'active evaluation cohort' },
  { label: 'Orders processed in pilots', value: '18k+', note: 'last 90 days snapshot' },
  { label: 'Payment dispute reduction', value: '28%', note: 'pilot baseline comparison' },
]

const features = [
  { title: 'Verified payment rails', description: 'Paid transitions require webhook signature, amount checks, and reference validation.' },
  { title: 'Deterministic delivery pricing', description: 'Zone rules apply once so buyer, ops, and finance teams see the same total.' },
  { title: 'Receipt-backed trust', description: 'Issue receipt PDFs immediately after paid verification to reduce support friction.' },
  { title: 'Unified chat commerce workspace', description: 'Operate Telegram and WhatsApp demand with one structured fulfillment workflow.' },
  { title: 'Lifecycle-first order tracking', description: 'Track orders as reserved, pending, paid, delivered, or expired with clear ownership.' },
  { title: 'Multi-business tenancy controls', description: 'Run multiple stores with tenant isolation and permission boundaries.' },
]

const testimonials = [
  { quote: 'We reduced payment-confirmation back-and-forth and cut weekly dispute handling time.', role: 'Head of Ops, Lagos Fashion House (Pilot)' },
  { quote: 'Our support team now tracks one order timeline instead of scattered chat screenshots.', role: 'Founder, D2C Skincare Brand (Pilot)' },
  { quote: 'Receipt and delivery consistency improved trust with repeat customers in under a month.', role: 'CX Lead, Consumer Electronics Seller (Pilot)' },
]

const steps = [
  { icon: ShieldCheck, title: 'Capture structured order intent', description: 'Convert chat demand into canonical order objects before payment collection.' },
  { icon: Route, title: 'Compute total with delivery logic', description: 'Apply zone-aware pricing once in integer kobo to prevent mismatch and leakage.' },
  { icon: ClipboardCheck, title: 'Verify payment and issue receipt', description: 'Mark paid only after webhook checks, then automatically deliver receipt proof.' },
]

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}

export default function WaitlistLanding() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(15,23,42,0.12),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(4,120,87,0.14),transparent_30%)]" />
      <div className="relative">
        <LandingNavbar />

        <Section className="pb-8 pt-8 sm:pt-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-3 py-1 text-[11px] font-medium text-brand-accent sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Chat commerce infrastructure for African operators
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-4xl md:text-5xl">
                Reduce payment disputes and fulfill chat orders with audit-ready precision.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay helps high-volume chat-first businesses convert messages into payable orders, verify payments, and maintain one trusted fulfillment timeline.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#waitlist" className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-95">
                  Apply for pilot waitlist
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="rounded-lg border border-border bg-card-bg px-4 py-2 text-sm font-medium text-text transition hover:opacity-90">
                  Review workflow demo
                </a>
              </div>

              <p className="mt-4 text-xs text-text-muted">Pilot acceptance decisions are sent within 72 hours.</p>
            </motion.div>

            <motion.div {...reveal}>
              <Card className="depth-3d-soft overflow-hidden border-brand-primary/15 p-3 sm:p-4">
                <div className="rounded-xl border border-border bg-card-bg p-3 sm:p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Operational command center</p>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card-bg px-2 py-0.5 text-[11px] font-medium text-brand-accent">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Payment checks active
                    </span>
                  </div>
                  <img src="/images/hero-dashboard.svg" alt="Trolipay dashboard showing payments, order flow, and operational status" className="mt-3 w-full rounded-lg border border-border" />
                </div>
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section className="pt-2">
          <div className="mb-3 inline-flex items-center gap-2 text-brand-accent">
            <BarChart3 className="h-4 w-4" />
            <p className="text-sm font-medium">Traction snapshot (pilot data)</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {traction.map((item) => (
              <Card key={item.label} className="p-4">
                <p className="text-2xl font-semibold text-brand-primary">{item.value}</p>
                <p className="mt-1 text-sm text-text">{item.label}</p>
                <p className="mt-1 text-xs text-text-muted">{item.note}</p>
              </Card>
            ))}
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
                <img src="/images/receipt-proof.svg" alt="Receipt generation and payment verification workflow" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="mb-4 inline-flex items-center gap-2 text-brand-accent">
            <WalletCards className="h-4 w-4" />
            <p className="text-sm font-medium">Core product capabilities</p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Infrastructure for predictable chat commerce operations</h2>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
                <FeatureCard title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section>
          <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">How the workflow operates</h2>
              <p className="mt-2 text-sm text-text-muted sm:text-base">From chat demand to verified payment and tracked delivery.</p>
              <div className="mt-5 space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <motion.article key={step.title} {...reveal} transition={{ duration: 0.5, delay: idx * 0.08 }} className="rounded-xl border border-border bg-card-bg p-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-2.5 py-1 text-xs font-medium text-brand-accent">
                        <Icon className="h-3.5 w-3.5" /> Step {idx + 1}
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
                <img src="/images/investor-metrics.svg" alt="Operational metrics summary" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Operator evidence</h2>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.role} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45 }}>
                <TestimonialCard quote={testimonial.quote} role={testimonial.role} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section>
          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Trust and compliance posture</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-app-bg p-4 text-sm text-text-muted">Data handling: merchant and lead data scoped to onboarding and operations workflows.</div>
              <div className="rounded-lg border border-border bg-app-bg p-4 text-sm text-text-muted">Reliability: payment state transitions rely on webhook verification before paid status.</div>
              <div className="rounded-lg border border-border bg-app-bg p-4 text-sm text-text-muted">Governance: tenant isolation and permission boundaries for multi-store operations.</div>
            </div>
          </Card>
        </Section>

        <Section id="waitlist" className="pb-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
            <motion.div {...reveal} className="rounded-2xl border border-border bg-brand-primary p-6 text-white sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                <BadgeCheck className="h-3.5 w-3.5" /> Qualification-based onboarding
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Apply for pilot access</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-100 sm:text-base">We prioritize teams with active order flow, measurable payment friction, and clear expansion plans.</p>
              <div className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-slate-100">Current review SLA: 72 hours. New pilot cohort opens monthly.</div>
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
                <p className="mt-2 text-sm text-text-muted">Answers for operations, implementation, and pilot onboarding.</p>
                <div className="mt-5"><FaqAccordion /></div>
              </Card>
            </motion.div>
            <motion.div {...reveal}>
              <Card className="p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Request a product walkthrough</h2>
                <p className="mt-2 text-sm text-text-muted">Share your volume and market details so we can tailor the walkthrough.</p>
                <div className="mt-5"><WaitlistForm intent="demo" /></div>
              </Card>
            </motion.div>
          </div>
        </Section>

        <LandingFooter />
      </div>
    </div>
  )
}
