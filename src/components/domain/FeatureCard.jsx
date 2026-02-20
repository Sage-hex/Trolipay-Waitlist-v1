import { motion } from 'framer-motion'

export default function FeatureCard({ title, description }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card-bg p-6 shadow-sm"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary opacity-90" />
      <h3 className="text-lg font-semibold text-brand-primary transition duration-150 ease-out group-hover:text-brand-accent">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
    </motion.article>
  )
}
