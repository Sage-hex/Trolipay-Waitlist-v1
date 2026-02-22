import { motion } from 'framer-motion'

export default function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 px-4 py-12 sm:px-6 md:py-20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </motion.section>
  )
}
