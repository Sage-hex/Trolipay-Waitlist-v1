import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const conversation = [
  { id: 1, sender: 'customer', text: 'Hi, I want 2 black tote bags.' },
  { id: 2, sender: 'bot', text: 'Got it. Added 2x Black Tote Bag. Delivery zone?' },
  { id: 3, sender: 'customer', text: 'Lekki Phase 1.' },
  { id: 4, sender: 'bot', text: 'Delivery fee is ₦2,500. Total is ₦42,500. Sending payment link now.' },
  { id: 5, sender: 'bot', text: 'Payment verified ✅ Receipt generated. Order is now PAID.' },
]

export default function LiveChatPreview() {
  const [visibleCount, setVisibleCount] = useState(1)
  const [showTyping, setShowTyping] = useState(true)

  useEffect(() => {
    const timers = []

    for (let i = 1; i < conversation.length; i += 1) {
      timers.push(
        window.setTimeout(() => {
          setVisibleCount(i + 1)
          setShowTyping(i !== conversation.length - 1)
        }, 1200 * i),
      )
    }

    timers.push(
      window.setTimeout(() => {
        setVisibleCount(1)
        setShowTyping(true)
      }, 1200 * conversation.length + 1800),
    )

    const interval = window.setInterval(() => {
      setVisibleCount(1)
      setShowTyping(true)

      for (let i = 1; i < conversation.length; i += 1) {
        timers.push(
          window.setTimeout(() => {
            setVisibleCount(i + 1)
            setShowTyping(i !== conversation.length - 1)
          }, 1200 * i),
        )
      }

      timers.push(
        window.setTimeout(() => {
          setVisibleCount(1)
          setShowTyping(true)
        }, 1200 * conversation.length + 1800),
      )
    }, 1200 * conversation.length + 3000)

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      window.clearInterval(interval)
    }
  }, [])

  const visibleMessages = useMemo(() => conversation.slice(0, visibleCount), [visibleCount])

  return (
    <div className="rounded-lg border border-border bg-app-bg p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">Live chat order flow</p>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Real-time demo</span>
      </div>

      <div className="space-y-2">
        <AnimatePresence initial={false}>
          {visibleMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`max-w-[90%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                message.sender === 'bot'
                  ? 'bg-emerald-50 text-emerald-900'
                  : 'ml-auto bg-blue-50 text-blue-900'
              }`}
            >
              {message.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {showTyping ? (
          <motion.div
            key="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2 py-1"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-text-muted [animation-delay:240ms]" />
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
