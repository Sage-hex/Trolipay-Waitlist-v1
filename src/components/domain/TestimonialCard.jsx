export default function TestimonialCard({ quote, role }) {
  return (
    <article className="rounded-xl border border-border bg-card-bg p-6 shadow-sm">
      <p className="text-sm text-text">“{quote}”</p>
      <p className="mt-4 text-sm font-medium text-text-muted">{role}</p>
    </article>
  )
}
