import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import FeatureCard from '../../components/domain/FeatureCard'
import TestimonialCard from '../../components/domain/TestimonialCard'
import FaqAccordion from '../../components/domain/FaqAccordion'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'

const features = [
  { title: 'Payment verification', description: 'Webhook signatures, references, and amount checks before marking any order as paid.' },
  { title: 'Delivery automation', description: 'Deterministic zone pricing keeps checkout totals trustworthy and consistent.' },
  { title: 'Receipt workflow', description: 'Issue clean receipts immediately after verified payment for support and trust.' },
  { title: 'Operational clarity', description: 'Track every order stage in one workspace from chat request to delivery complete.' },
  { title: 'Multi-team readiness', description: 'Separate teams and business contexts safely with predictable workflows.' },
  { title: 'Channel-native commerce', description: 'Use existing WhatsApp/Telegram demand without breaking your internal controls.' },
]

const testimonials = [
  { quote: 'The dashboard gives us confidence to fulfill without waiting for screenshot confirmation.', role: 'Operations Lead, Retail Brand' },
  { quote: 'It feels like GitHub-level workflow clarity for chat commerce.', role: 'Founder, D2C Startup' },
  { quote: 'Customers trust us more now that payment and receipt handling is immediate.', role: 'CX Manager, Social Store' },
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
                <Sparkles className="h-3.5 w-3.5" /> Inspired by clean developer-product UX
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-primary sm:text-5xl">
                Professional chat commerce, built with workflow clarity.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
                Trolipay turns chat orders into verified, traceable operations—so your team can ship faster with less manual confusion.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#waitlist" className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-app-bg transition hover:opacity-95">
                  Start with waitlist <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="rounded-lg border border-border bg-app-bg px-4 py-2 text-sm font-medium text-text transition hover:opacity-90">
                  Watch live flow
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['Payment truth', 'Audit-ready flow', 'Faster fulfillment'].map((item) => (
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
          <ShieldCheck className="h-4 w-4" />
          <p className="text-sm font-medium">Core platform capabilities</p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Everything your operations team expects</h2>
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
        <h2 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">What teams say after switching</h2>
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
              Get hands-on support to configure chat order workflows, verification rules, and delivery logic.
            </p>
          </motion.div>
          <WaitlistForm intent="waitlist" />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <Card className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-brand-primary sm:text-2xl">Frequently asked questions</h2>
            <p className="mt-2 text-sm text-text-muted">Answers for technical and operations teams.</p>
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
