import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  Route,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import FaqAccordion from '../../components/domain/FaqAccordion'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const features = [
  {
    title: 'Webhook-verified payments',
    description: 'Order status moves to paid only after signature check, reference validation, and exact amount match.',
  },
  {
    title: 'Automatic delivery fees',
    description: 'Delivery zones and fees are configured once and applied deterministically to every eligible order.',
  },
  {
    title: 'Receipt PDFs',
    description: 'Generate professional receipt PDFs after verified payment for trust, support, and audit readiness.',
  },
  {
    title: 'Multi-business dashboard',
    description: 'Each merchant operates in a secure tenant boundary while maintaining a premium single-pane workflow.',
  },
  {
    title: 'Order status tracking',
    description: 'Reserved, payment pending, paid, delivered, expired—state transitions are clear and operationally useful.',
  },
  {
    title: 'Telegram first, WhatsApp alongside',
    description: 'Meet buyers in existing chat behavior while preserving one verifiable commerce backend flow.',
  },
]

const testimonials = [
  {
    quote: 'Trolipay removed payment ambiguity for our ops team. We now trust order state instantly.',
    role: 'Operations Lead, Multi-store Retail Brand',
  },
  {
    quote: 'It feels like enterprise infrastructure built for chat-native commerce realities.',
    role: 'Founder, High-volume D2C Team',
  },
  {
    quote: 'Receipt quality and payment verification changed customer trust in our checkout process.',
    role: 'Customer Success Lead, Social Commerce Operator',
  },
]

const steps = [
  {
    icon: ShieldCheck,
    title: 'Capture verified payments',
    description: 'Trolipay never trusts screenshots—payment truth is confirmed by webhook checks only.',
  },
  {
    icon: Route,
    title: 'Apply deterministic delivery logic',
    description: 'Zone-based delivery fees and totals are computed consistently in integer kobo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Fulfill with auditable records',
    description: 'Teams track lifecycle state and issue receipt PDFs with confidence.',
  },
]

const pillars = [
  'Chat is where demand already lives. Trolipay converts chat interactions into durable, payable order objects.',
  'Not a chatbot gimmick and not just payment links. Trolipay is a commerce engine with payment truth.',
  'Merchants gain deterministic totals, verifiable status, and receipt-backed customer trust at scale.',
]

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function WaitlistLanding() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(15,23,42,0.16),transparent_36%),radial-gradient(circle_at_84%_9%,rgba(4,120,87,0.18),transparent_38%)]" />

      <div className="relative">
        <LandingNavbar />

        <Section className="pb-12 pt-12 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-3 py-1 text-xs font-medium text-brand-accent shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Built for high-volume SME chat commerce
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                <span className="text-brand-primary">Stop drowning in chat orders. </span>
                <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
                  Run verified commerce from one engine.
                </span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
                Trolipay turns scattered WhatsApp/Telegram conversations into structured, payable, auditable orders with deterministic delivery fees and receipt-backed trust.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button onClick={() => scrollToSection('waitlist')}>Join the waitlist</Button>
                <Button variant="secondary" onClick={() => scrollToSection('demo')}>
                  Request a demo
                </Button>
              </div>
            </motion.div>

            <motion.div {...reveal} className="grid gap-4 md:grid-cols-[1fr_0.82fr]">
              <Card className="overflow-hidden border-brand-primary/20 p-3">
                <img src="/images/hero-dashboard.svg" alt="Premium Trolipay admin dashboard preview" className="w-full rounded-lg border border-border" />
              </Card>
              <Card className="overflow-hidden border-brand-primary/20 p-3">
                <img src="/images/chat-inbox.svg" alt="Busy chat inbox with many incoming customer orders" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section className="py-0">
          <motion.div {...reveal} className="rounded-2xl border border-border bg-brand-primary p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">Problem</p>
                <p className="mt-1 text-sm text-slate-100">SMEs juggle too many chats manually and lose orders to delay and confusion.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">Solution</p>
                <p className="mt-1 text-sm text-slate-100">Trolipay creates durable order objects with verified payment truth.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-300">Outcome</p>
                <p className="mt-1 text-sm text-slate-100">Faster fulfillment, less fraud risk, and premium customer trust signals.</p>
              </div>
            </div>
          </motion.div>
        </Section>

        <Section>
          <motion.div {...reveal} className="rounded-2xl border border-border bg-card-bg p-6 shadow-sm">
            <div className="flex items-center gap-2 text-brand-accent">
              <WalletCards className="h-4 w-4" />
              <p className="text-sm font-medium">What Trolipay is</p>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {pillars.map((item) => (
                <p key={item} className="rounded-xl border border-border bg-app-bg p-4 text-sm leading-relaxed text-text-muted">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </Section>

        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...reveal}>
              <Card className="overflow-hidden border-brand-primary/15 p-3">
                <img src="/images/investor-metrics.svg" alt="Investor metrics style dashboard visual" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
            <motion.div {...reveal}>
              <Card className="overflow-hidden border-brand-primary/15 p-3">
                <img src="/images/trust-architecture.svg" alt="Trust architecture visual" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Everything your ops team needs</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                <FeatureCard title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">How it works</h2>
              <p className="mt-2 text-sm text-text-muted">From chat command to verified payment to receipt-backed fulfillment.</p>
              <div className="mt-6 space-y-4">
                {steps.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <motion.article
                      key={step.title}
                      {...reveal}
                      transition={{ duration: 0.2, ease: 'easeOut', delay: idx * 0.04 }}
                      className="rounded-xl border border-border bg-card-bg p-6 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-accent" />
                        <ArrowRight className="h-4 w-4 text-text-muted" />
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-brand-primary">{step.title}</h3>
                      <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                    </motion.article>
                  )
                })}
              </div>
            </div>
            <motion.div {...reveal}>
              <Card className="p-3">
                <img src="/images/commerce-flow.svg" alt="Commerce process flow visualization" className="w-full rounded-lg border border-border" />
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section>
          <div className="mb-3 flex items-center gap-2 text-brand-accent">
            <BarChart3 className="h-4 w-4" />
            <p className="text-sm font-medium">Investor confidence signals</p>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">What teams are saying</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="mt-6 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.role} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.2, ease: 'easeOut' }}>
                <TestimonialCard quote={testimonial.quote} role={testimonial.role} />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </Section>

        <Section id="waitlist">
          <motion.div {...reveal} className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-brand-accent">
              <ArrowUpRight className="h-4 w-4" />
              <p className="text-sm font-medium">Join the waitlist</p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Reserve early access</h2>
            <p className="mt-2 text-sm text-text-muted">Pilot with us and become a design partner for chat-native payments infrastructure.</p>
            <div className="mt-6">
              <WaitlistForm intent="waitlist" />
            </div>
          </motion.div>
        </Section>

        <Section id="demo" className="pt-0">
          <motion.div {...reveal} className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-brand-accent">
              <BadgeCheck className="h-4 w-4" />
              <p className="text-sm font-medium">Request a demo</p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">See exactly how Trolipay fits your operations</h2>
            <p className="mt-2 text-sm text-text-muted">We will walk through your current chat checkout and map the verified lifecycle end to end.</p>
            <div className="mt-6">
              <WaitlistForm intent="demo" />
            </div>
          </motion.div>
        </Section>

        <LandingFooter />
      </div>
    </div>
  )
}
