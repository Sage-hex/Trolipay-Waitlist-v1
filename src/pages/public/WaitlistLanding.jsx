import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import WaitlistForm from '../../components/domain/WaitlistForm'
import Card from '../../components/ui/Card'
import LiveChatPreview from '../../components/domain/LiveChatPreview'

const heroText = 'Chat-commerce payments and fulfillment, verified from message to receipt.'

const proof = [
  { value: '12', label: 'Pilot merchants live' },
  { value: '18k+', label: 'Orders processed (90d)' },
  { value: '28%', label: 'Dispute reduction in pilots' },
]

const bullets = [
  'Verifies payments before state changes to PAID.',
  'Tracks orders from chat intent to receipt and delivery.',
  'Gives ops teams one auditable source of truth.',
]

const trustPoints = [
  'Webhook signature and amount matching before paid state updates.',
  'Receipt generation immediately after payment verification.',
  'Single timeline across chat, payment, and fulfillment events.',
]

const pilotFocus = [
  'High weekly order volume',
  'Clear payment failure/dispute problem',
  'Team ready for fast onboarding',
]

function TypingHeadline() {
  const [count, setCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        setCount((value) => {
          if (!isDeleting && value < heroText.length) return value + 1
          if (!isDeleting && value === heroText.length) {
            setIsDeleting(true)
            return value
          }
          if (isDeleting && value > 0) return value - 1
          setIsDeleting(false)
          return 0
        })
      },
      !isDeleting && count === heroText.length ? 1400 : isDeleting ? 18 : 34,
    )

    return () => window.clearTimeout(timeout)
  }, [count, isDeleting])

  return (
    <>
      {heroText.slice(0, count)}
      <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-brand-accent align-middle" />
    </>
  )
}

export default function WaitlistLanding() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-app-bg text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(4,120,87,0.10),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(126,200,139,0.12),transparent_70%)]" />
      <LandingNavbar />

      <Section className="pb-6 pt-8 sm:pt-12">
        <div className="grid gap-7 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card-bg px-3 py-1 text-[11px] font-medium text-brand-accent sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Investor-ready commerce infrastructure for African SMEs
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-brand-primary sm:text-4xl md:text-5xl">
              <TypingHeadline />
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Trolipay helps high-volume WhatsApp and Telegram sellers convert demand into structured orders, verify payment events,
              and run fulfillment with less risk.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="#waitlist"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(4,120,87,0.35)] transition hover:brightness-95 dark:text-[#0b0b0d]"
              >
                <span className="relative">
                  Apply for pilot
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition group-hover:scale-x-100" />
                </span>
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
              <motion.a href="#demo" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-lg border border-border bg-card-bg px-4 py-2 text-sm font-medium text-text transition hover:opacity-90">
                See workflow
              </motion.a>
            </div>

            <p className="mt-4 text-xs text-text-muted">Pilot decisions are communicated within 72 hours.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Card className="depth-3d-soft rounded-2xl border border-border bg-card-bg p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Proof snapshot</p>
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-app-bg px-2 py-0.5 text-[11px] font-medium text-brand-accent">
                  <BadgeCheck className="h-3.5 w-3.5" /> pilot data
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-app-bg p-3">
                    <p className="text-xl font-semibold text-brand-primary">{item.value}</p>
                    <p className="mt-1 text-xs text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-app-bg p-4">
                <p className="text-sm font-medium text-brand-primary">What this solves</p>
                <ul className="mt-3 space-y-2">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section id="demo" className="pt-3">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="rounded-2xl border border-border p-3 sm:p-4">
            <LiveChatPreview />
          </Card>
          <Card className="rounded-2xl border border-border p-5 sm:p-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-2.5 py-1 text-xs font-medium text-brand-accent">
              <ShieldCheck className="h-3.5 w-3.5" /> Trust posture
            </p>
            <h2 className="mt-3 text-xl font-semibold text-brand-primary sm:text-2xl">Minimal stack. Maximum accountability.</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Core verification controls are built into payment state transitions so operations teams can trust what they see.
            </p>
            <div className="mt-4 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-lg border border-border bg-app-bg p-3 text-sm text-text-muted">
                  {point}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section id="waitlist" className="pb-8 pt-5">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-2xl border border-border bg-card-bg p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-brand-primary sm:text-3xl">Apply for pilot access</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
              We prioritize operators with active order volume and measurable payment friction. This keeps onboarding focused and results-oriented.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-1">
              {pilotFocus.map((item) => (
                <p key={item} className="inline-flex items-center gap-2 rounded-lg border border-border bg-app-bg px-3 py-2 text-sm text-text-muted">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border bg-app-bg p-4 text-sm text-text-muted">Current intake cadence: monthly cohorts. Response SLA: 72 hours.</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <WaitlistForm intent="waitlist" />
          </motion.div>
        </div>
      </Section>

      <LandingFooter />
    </div>
  )
}
