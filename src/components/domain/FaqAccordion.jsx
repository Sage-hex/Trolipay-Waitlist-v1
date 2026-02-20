import { ChevronDown, ShieldCheck } from 'lucide-react'

const faqs = [
  {
    question: 'How are payments verified?',
    answer: 'Trolipay marks paid only after webhook signature verification, reference validation, and exact amount checks.',
  },
  {
    question: 'Do delivery fees apply automatically?',
    answer: 'Yes. Delivery zone rules are configured once and applied deterministically to eligible orders.',
  },
  {
    question: 'Can I download receipts?',
    answer: 'Yes. Verified paid orders can produce professional PDF receipts for customer trust and records.',
  },
  {
    question: 'Is this multi-business ready?',
    answer: 'Yes. Trolipay is built with multi-tenant boundaries so each business operates securely in its own scope.',
  },
  {
    question: 'Which channels are supported?',
    answer: 'Telegram-first with WhatsApp alongside, while preserving one unified operational workflow.',
  },
  {
    question: 'How fast can a team launch?',
    answer: 'Teams can onboard quickly by setting catalog, delivery zones, and payout setup, then going live in chat.',
  },
]

export default function FaqAccordion() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          className="group rounded-xl border border-border bg-card-bg p-5 shadow-sm transition duration-150 ease-out hover:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-app-bg text-xs font-semibold text-brand-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-semibold text-brand-primary">{faq.question}</p>
            </div>
            <ChevronDown className="h-4 w-4 text-text-muted transition duration-150 ease-out group-open:rotate-180" />
          </summary>
          <div className="mt-4 rounded-lg border border-border bg-app-bg p-4">
            <p className="text-sm leading-relaxed text-text-muted">{faq.answer}</p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-brand-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Built for verifiable commerce operations
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
