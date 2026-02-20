import { motion } from 'framer-motion'
import { BadgeCheck, ClipboardCheck, Route, ShieldCheck } from 'lucide-react'
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
    <div className="relative min-h-screen bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,120,87,0.10),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.08),transparent_30%)]" />

      <div className="relative">
        <LandingNavbar />

        <Section className="pb-10 pt-12 md:pt-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
                Turn WhatsApp/Telegram DMs into verified, paid orders.
              </h1>
              <p className="mt-4 text-sm text-text-muted md:text-base">
                Run webhook-verified payments, automatic delivery fees, receipt PDFs, and merchant operations from one
                premium admin dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => scrollToSection('waitlist')}>Join the waitlist</Button>
                <Button variant="secondary" onClick={() => scrollToSection('demo')}>
                  Request a demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
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
              </Card>
            </motion.div>
          </div>
        </Section>

        <Section className="py-6">
          <div className="rounded-xl border border-border bg-card-bg/90 p-6 text-center text-sm text-text-muted shadow-sm backdrop-blur-[1px]">
            Trusted by growth teams building chat-first order operations with deterministic payment controls.
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
              <BadgeCheck className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4" />
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
