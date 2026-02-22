import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeatureCard({ title, description }) {
  return (
    <motion.article
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card-bg p-6 shadow-sm"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.05),transparent_45%,rgba(4,120,87,0.08))] opacity-80" />
      <div className="relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-3 py-1 text-xs font-medium text-brand-accent">
          <span>Core capability</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
      </div>
    </motion.article>
  )
}
