import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FeatureCard({ title, description }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="group rounded-2xl border border-border bg-card-bg p-5 shadow-sm"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-app-bg px-2.5 py-1 text-[11px] font-medium text-brand-accent">
        Core capability
        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="mt-3 text-base font-semibold text-brand-primary sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
    </motion.article>
  )
}
