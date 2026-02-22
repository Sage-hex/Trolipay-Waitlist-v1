import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'
import { scrollToSection } from '../../utils/animatedScroll'

const pillars = [
  {
    title: 'Verified payment operations',
    description: 'Signature and amount validation ensure paid status is based on payment truth, not screenshots.',
  },
  {
    title: 'Deterministic totals',
    description: 'Delivery zone rules and integer-safe calculations keep totals consistent across channels.',
  },
  {
    title: 'Receipt-grade trust',
    description: 'Professional receipts and lifecycle state transitions improve customer confidence at scale.',
  },
]

const outcomes = [
  'Reduce payment disputes and fraud risk.',
  'Increase fulfillment speed across teams.',
  'Give ops + finance one shared source of truth.',
]

const testimonials = [
  {
    quote: 'Trolipay gave us control over a chaotic chat-order process in under one week.',
    role: 'Operations Manager, Retail Scale-up',
  },
  {
    quote: 'Our team now trusts every order timeline because payment state is objectively verified.',
    role: 'Founder, Social Commerce Brand',
  },
  {
    quote: 'Receipts and delivery logic helped us look far more premium to customers.',
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
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <motion.div {...reveal}>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-3 py-1 text-xs font-medium text-brand-accent">
                <Sparkles className="h-3.5 w-3.5" /> Trolipay waitlist • built for high-volume African chat commerce
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-5xl">
                A one-line path from chat message to verified revenue.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay is the operational layer between incoming chat demand and reliable fulfillment. It standardizes payment
                verification, delivery pricing, and receipt issuance—so your team scales without ambiguity.
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
                  See live flow
                </button>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {outcomes.map((item) => (
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
          <p className="text-sm font-medium">Why teams switch to Trolipay</p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Enterprise-grade outcomes for growth-stage operators</h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-6 grid gap-4 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.4 }}>
              <FeatureCard title={pillar.title} description={pillar.description} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Loved by operations-focused teams</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.role} quote={item.quote} role={item.role} />
          ))}
        </div>
      </Section>

      <LandingFooter />
    </div>
  )
}
