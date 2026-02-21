import { motion } from 'framer-motion'

export default function TestimonialCard({ quote, role }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="rounded-xl border border-border bg-card-bg p-6 shadow-sm"
    >
      <p className="text-sm leading-relaxed text-text">“{quote}”</p>
      <p className="mt-4 text-sm font-medium text-text-muted">{role}</p>
    </motion.article>
  )
}
