import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react'
import { subscribeToasts } from './toastStore'

const typeMeta = {
  success: {
    icon: CheckCircle2,
    style: 'border-emerald-500/30 bg-emerald-500/10 text-text',
  },
  warning: {
    icon: AlertCircle,
    style: 'border-amber-500/30 bg-amber-500/10 text-text',
  },
  info: {
    icon: Info,
    style: 'border-border bg-card-bg text-text',
  },
}

export default function Toast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const unsubscribe = subscribeToasts((nextToasts) => {
      setToasts(nextToasts)
    })

    return unsubscribe
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-xl space-y-3">
        <AnimatePresence initial={false}>
          {toasts.map((toast) => {
            const meta = typeMeta[toast.type] ?? typeMeta.info
            const Icon = meta.icon

            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className={`pointer-events-auto flex items-start justify-between gap-3 rounded-xl border px-4 py-3 shadow-sm ${meta.style}`}
              >
                <div className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0" />
                  <p className="text-sm leading-relaxed">{toast.message}</p>
                </div>
                <button
                  type="button"
                  onClick={toast.dismiss}
                  className="rounded-md p-1 transition duration-150 ease-out hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"
                  aria-label="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
