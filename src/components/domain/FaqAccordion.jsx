const faqs = [
  {
    question: 'How are payments verified?',
    answer: 'Orders are only paid after webhook verification. There is no manual mark-paid flow.',
  },
  {
    question: 'Do delivery fees apply automatically?',
    answer: 'Yes. Delivery zones are configured once and fees are added to order totals automatically.',
  },
  {
    question: 'Can I download receipts?',
    answer: 'Paid orders can surface receipt PDFs from the admin dashboard.',
  },
  {
    question: 'Is this multi-business ready?',
    answer: 'Yes. Merchants manage their own data in a dedicated admin dashboard experience.',
  },
  {
    question: 'Which channels are supported?',
    answer: 'Telegram-first and WhatsApp alongside, with shared operational visibility.',
  },
  {
    question: 'How quickly can we start?',
    answer: 'Join the waitlist or request a demo, and we will guide your onboarding path.',
  },
]

export default function FaqAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-xl border border-border bg-card-bg p-5 shadow-sm">
          <summary className="cursor-pointer list-none text-sm font-semibold text-brand-primary">{faq.question}</summary>
          <p className="mt-3 text-sm text-text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}
