export default function Card({ children, className = '' }) {
  return <section className={`rounded-xl border border-border bg-card-bg p-6 shadow-sm ${className}`}>{children}</section>
}
