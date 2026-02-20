export default function FeatureCard({ title, description }) {
  return (
    <article className="rounded-xl border border-border bg-card-bg p-6 shadow-sm transition duration-150 ease-out hover:shadow-md">
      <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
    </article>
  )
}
