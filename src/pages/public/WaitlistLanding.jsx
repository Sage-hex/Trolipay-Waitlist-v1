import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, ClipboardCheck, Route, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import FaqAccordion from '../../components/domain/FaqAccordion'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'
import { scrollToSection } from '../../utils/animatedScroll'

const features = [
  {
    title: 'Webhook-verified payments',
    description: 'Order state changes to paid only after signature checks, reference validation, and exact amount confirmation.',
  },
  {
    title: 'Deterministic delivery pricing',
    description: 'Zone rules are configured once and applied consistently across all eligible orders and channels.',
  },
  {
    title: 'Receipt-grade trust signals',
    description: 'Verified payment events trigger receipt-ready workflows for support operations and customer confidence.',
  },
  {
    title: 'Lifecycle-first order control',
    description: 'Track each order from reserved to paid, delivered, expired, or refunded with operational clarity.',
  },
  {
    title: 'Multi-team readiness',
    description: 'Support multiple merchants/teams with clear boundaries and one premium operational surface.',
  },
  {
    title: 'Channel-native commerce orchestration',
    description: 'Keep WhatsApp and Telegram demand where it is while centralizing truth and fulfillment logic.',
  },
]

const testimonials = [
  {
    quote: 'We moved from screenshot uncertainty to payment truth. Fulfillment speed and team confidence improved immediately.',
    role: 'Operations Lead, Multi-store Retail Brand',
  },
  {
    quote: 'The product feels enterprise-grade but practical for fast-moving teams handling chat orders daily.',
    role: 'Founder, D2C Commerce Company',
  },
  {
    quote: 'Customers trust us more because verification and receipt generation are now consistent and professional.',
    role: 'Customer Experience Manager, Social Commerce Team',
  },
]

const steps = [
  {
    icon: ShieldCheck,
    title: 'Capture chat intent into structured orders',
    description: 'Convert buyer conversations into durable order objects your team can track and fulfill confidently.',
  },
  {
    icon: Route,
    title: 'Compute total with predictable delivery logic',
    description: 'Every subtotal, delivery fee, and final amount is generated deterministically for operational consistency.',
  },
  {
    icon: ClipboardCheck,
    title: 'Verify payment and fulfill with receipts',
    description: 'Paid state is triggered by verification events, then receipts and status transitions follow automatically.',
  },
]

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}

export default function WaitlistLanding() {
  return (
    <div className="min-h-screen bg-app-bg text-text">
      <LandingNavbar />

      <Section className="pb-10 pt-8 sm:pt-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-card-bg">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
            <motion.div {...reveal}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-3 py-1 text-xs font-medium text-brand-accent">
                <Sparkles className="h-3.5 w-3.5" /> Premium chat-commerce infrastructure for African businesses
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-5xl">
                Stop drowning in chat orders. Operate verified commerce at scale.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay transforms scattered WhatsApp and Telegram orders into structured, payable, and auditable workflows.
                Your team gets payment truth, deterministic delivery pricing, and receipt-backed trust—without changing where buyers chat.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('waitlist')}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-app-bg transition hover:opacity-95"
                >
                  Join waitlist <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('demo')}
                  className="rounded-lg border border-border bg-app-bg px-4 py-2 text-sm font-medium text-text transition hover:opacity-90"
                >
                  Watch live flow
                </button>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['Payment truth', 'Audit-ready lifecycle', 'Receipt-backed trust'].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-app-bg p-3">
                    <p className="inline-flex items-center gap-2 text-xs font-medium text-text">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" /> {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal} className="rounded-xl border border-border bg-app-bg p-3">
              <img src="/images/hero-dashboard.svg" alt="Trolipay operations dashboard" className="w-full rounded-lg border border-border" />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="demo" className="pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-3">
            <LiveChatPreview />
          </Card>
          <Card className="overflow-hidden p-3">
            <img src="/images/receipt-proof.svg" alt="Verified receipt workflow" className="w-full rounded-lg border border-border" />
          </Card>
        </div>
      </Section>

      <Section id="features">
        <div className="mb-4 flex items-center gap-2 text-brand-accent">
          <WalletCards className="h-4 w-4" />
          <p className="text-sm font-medium">Core platform capabilities</p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Designed for high-trust social commerce operations</h2>
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
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-brand-accent">
              <BarChart3 className="h-4 w-4" />
              <p className="text-sm font-medium">How Trolipay works</p>
            </div>
            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.article key={step.title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.07 }} className="rounded-xl border border-border bg-card-bg p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-2.5 py-1 text-xs font-medium text-brand-accent">
                      <Icon className="h-3.5 w-3.5" /> Step {index + 1}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-brand-primary">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
          <Card className="overflow-hidden p-3">
            <img src="/images/commerce-flow.svg" alt="Commerce process flow" className="w-full rounded-lg border border-border" />
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Trusted by teams handling real order volume</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.role} quote={item.quote} role={item.role} />
          ))}
        </div>
      </Section>

      <Section id="waitlist">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <motion.div {...reveal} className="rounded-2xl border border-border bg-brand-primary p-6 text-app-bg sm:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-app-bg/10 px-3 py-1 text-xs font-medium">
              <BadgeCheck className="h-3.5 w-3.5" /> Private beta onboarding
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Join the waitlist for guided setup.</h2>
            <p className="mt-3 text-sm leading-relaxed text-app-bg/85 sm:text-base">
              Get hands-on support to configure your catalog, payment verification rules, delivery zones, and fulfillment workflow.
            </p>
          </motion.div>
          <WaitlistForm intent="waitlist" />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Frequently asked questions</h2>
            <p className="mt-2 text-sm text-text-muted">Answers for operators, finance teams, and founders.</p>
            <div className="mt-5">
              <FaqAccordion />
            </div>
          </Card>

          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Request a product walkthrough</h2>
            <p className="mt-2 text-sm text-text-muted">See the full flow live from chat order to verified receipt.</p>
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
