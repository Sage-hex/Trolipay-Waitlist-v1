import { motion } from 'framer-motion'
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
import { ArrowUpRight, BadgeCheck, ClipboardCheck, Route, ShieldCheck, Sparkles } from 'lucide-react'
=======
import { BadgeCheck, ClipboardCheck, Route, ShieldCheck } from 'lucide-react'
>>>>>>> main
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
    description: 'No manual mark-paid. Payment status updates only after verified webhook checks.',
  },
  {
    title: 'Automatic delivery fees',
    description: 'Configure delivery zones once and let fees calculate automatically per order.',
  },
  {
    title: 'Receipt PDFs',
    description: 'Generate and access receipt documents for paid and delivered orders.',
  },
  {
    title: 'Multi-business dashboard',
    description: 'Securely manage operations for each business with clear account boundaries.',
  },
  {
    title: 'Order status tracking',
    description: 'Track reserved, payment pending, paid, delivered, and expired states with clarity.',
  },
  {
    title: 'Telegram first, WhatsApp alongside',
    description: 'Operate where customers already buy, while keeping one operational dashboard.',
  },
]

const testimonials = [
  {
    quote: 'This gives our operations team real confidence in payment truth and delivery control.',
    role: 'Operations Lead, Retail Brand',
  },
  {
    quote: 'We finally have clean order flow from chat to payout visibility in one place.',
    role: 'Founder, DTC Team',
  },
  {
    quote: 'The dashboard feels premium and practical for day-to-day fulfillment execution.',
    role: 'Customer Success Manager, Commerce Partner',
  },
]

const steps = [
  {
    icon: ShieldCheck,
    title: 'Capture verified payments',
    description: 'Orders move to paid only through webhook-verified payment flow.',
  },
  {
    icon: Route,
    title: 'Apply delivery logic',
    description: 'Zone-based delivery fees are included automatically in totals.',
  },
  {
    icon: ClipboardCheck,
    title: 'Fulfill with receipts',
    description: 'Track order status and open receipt PDFs for completed transactions.',
  },
]

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function WaitlistLanding() {
  return (
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
    <div className="relative min-h-screen overflow-x-clip bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(15,23,42,0.14),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(4,120,87,0.14),transparent_36%),linear-gradient(to_bottom,rgba(15,23,42,0.06),transparent_22%)]" />
=======
    <div className="relative min-h-screen bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,120,87,0.10),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.08),transparent_30%)]" />
>>>>>>> main

      <div className="relative">
        <LandingNavbar />

<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
        <Section className="pb-12 pt-12 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
=======
        <Section className="pb-10 pt-12 md:pt-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
>>>>>>> main
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-3 py-1 text-xs font-medium text-brand-accent shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Investor-grade commerce infrastructure
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
                Turn WhatsApp/Telegram DMs into verified, paid orders.
              </h1>
              <p className="mt-4 text-sm text-text-muted md:text-base">
                Trolipay enforces webhook-verified payments, automatic delivery fees, receipt PDFs, and operational
                clarity from one premium admin dashboard.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
=======
              <h1 className="text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
                Turn WhatsApp/Telegram DMs into verified, paid orders.
              </h1>
              <p className="mt-4 text-sm text-text-muted md:text-base">
                Run webhook-verified payments, automatic delivery fees, receipt PDFs, and merchant operations from one
                premium admin dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
>>>>>>> main
                <Button onClick={() => scrollToSection('waitlist')}>Join the waitlist</Button>
                <Button variant="secondary" onClick={() => scrollToSection('demo')}>
                  Request a demo
                </Button>
              </div>
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-accent" />
                  Webhook payment truth
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-accent" />
                  Deterministic order lifecycle
                </span>
              </div>
=======
>>>>>>> main
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
              <Card className="overflow-hidden p-3">
                <img
                  src="/images/hero-dashboard.svg"
                  alt="Premium Trolipay admin dashboard preview"
                  className="h-auto w-full rounded-lg border border-border object-cover"
                />
=======
              <Card className="backdrop-blur-[1px]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-text-muted">Order #CC-1024</p>
                    <p className="mt-1 text-lg font-semibold text-brand-primary">Total ₦42,500</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">PAID</span>
                </div>
                <div className="mt-5 space-y-3 text-sm text-text-muted">
                  <p>Customer: Telegram • @customer_handle</p>
                  <p>Delivery: Lekki Zone • ₦2,500</p>
                  <p>Payment: Webhook verified</p>
                </div>
                <button
                  type="button"
                  disabled
                  className="mt-6 rounded-lg border border-border bg-white px-4 py-2 text-sm text-text-muted"
                >
                  Receipt PDF (available after generation)
                </button>
>>>>>>> main
              </Card>
            </motion.div>
          </div>
        </Section>

<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
        <Section className="py-0">
          <div className="rounded-2xl border border-border bg-brand-primary p-6 text-center shadow-sm">
            <p className="text-sm text-slate-100">
              Built for high-volume chat sellers: deterministic totals, verified payment state, and receipt-backed
              customer trust.
            </p>
=======
        <Section className="py-6">
          <div className="rounded-xl border border-border bg-card-bg/90 p-6 text-center text-sm text-text-muted shadow-sm backdrop-blur-[1px]">
            Trusted by growth teams building chat-first order operations with deterministic payment controls.
>>>>>>> main
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Everything your ops team needs</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </Section>

        <Section>
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">How it works</h2>
              <div className="mt-6 space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon
                  return (
                    <article
                      key={step.title}
                      className="rounded-xl border border-border bg-card-bg p-6 shadow-sm transition duration-150 ease-out hover:shadow-md"
                    >
                      <Icon className="h-5 w-5 text-brand-accent" />
                      <h3 className="mt-3 text-lg font-semibold text-brand-primary">{step.title}</h3>
                      <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>
            <Card className="p-3">
              <img src="/images/commerce-flow.svg" alt="Commerce process flow visualization" className="w-full rounded-lg border border-border" />
            </Card>
=======
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <article
                  key={step.title}
                  className="rounded-xl border border-border bg-card-bg p-6 shadow-sm transition duration-150 ease-out hover:shadow-md"
                >
                  <Icon className="h-5 w-5 text-brand-accent" />
                  <h3 className="mt-3 text-lg font-semibold text-brand-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                </article>
              )
            })}
>>>>>>> main
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">What teams are saying</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.role} quote={testimonial.quote} role={testimonial.role} />
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </Section>

        <Section id="waitlist">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-brand-accent">
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
              <ArrowUpRight className="h-4 w-4" />
=======
              <BadgeCheck className="h-4 w-4" />
>>>>>>> main
              <p className="text-sm font-medium">Join the waitlist</p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">Reserve early access</h2>
            <p className="mt-2 text-sm text-text-muted">Get product updates and priority onboarding guidance.</p>
            <div className="mt-6">
              <WaitlistForm intent="waitlist" />
            </div>
          </div>
        </Section>

        <Section id="demo" className="pt-0">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-2 text-brand-accent">
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-a1x9yl
              <ArrowUpRight className="h-4 w-4" />
=======
              <BadgeCheck className="h-4 w-4" />
>>>>>>> main
              <p className="text-sm font-medium">Request a demo</p>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">See the flow with your use case</h2>
            <p className="mt-2 text-sm text-text-muted">Share your channel focus and we will tailor the walkthrough.</p>
            <div className="mt-6">
              <WaitlistForm intent="demo" />
            </div>
          </div>
        </Section>

        <LandingFooter />
      </div>
    </div>
  )
}
