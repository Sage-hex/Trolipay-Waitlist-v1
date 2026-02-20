import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleCheck, CircleX, Info, X } from 'lucide-react'
import { dismissToast, subscribeToasts } from './toastStore'

const toastTypes = {
  success: {
    icon: CircleCheck,
    style: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  error: {
    icon: CircleX,
    style: 'border-red-200 bg-red-50 text-red-800',
  },
  info: {
    icon: Info,
    style: 'border-border bg-card-bg text-text',
  },
}

export default function Toast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => subscribeToasts(setToasts), [])

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const config = toastTypes[toast.type] ?? toastTypes.info
          const Icon = config.icon

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className={`pointer-events-auto flex items-start gap-3 rounded-lg border px-4 py-3 shadow-sm ${config.style}`}
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0" />
              <p className="flex-1 text-sm">{toast.message}</p>
              <button
                type="button"
                onClick={() => dismissToast(toast.id)}
                className="rounded-md p-1 transition duration-150 ease-out hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
