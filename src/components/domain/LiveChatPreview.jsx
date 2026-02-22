import { useEffect, useMemo, useRef, useState } from 'react'
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
  const messagesRef = useRef(null)

  useEffect(() => {
    const cycleMs = 1200 * conversation.length + 3000

    function runSequence() {
      setVisibleCount(1)
      setShowTyping(true)

      for (let i = 1; i < conversation.length; i += 1) {
        window.setTimeout(() => {
          setVisibleCount(i + 1)
          setShowTyping(i !== conversation.length - 1)
        }, 1200 * i)
      }

      window.setTimeout(() => {
        setVisibleCount(1)
        setShowTyping(true)
      }, 1200 * conversation.length + 1800)
    }

    runSequence()
    const interval = window.setInterval(runSequence, cycleMs)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!messagesRef.current) return
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [visibleCount, showTyping])

  const visibleMessages = useMemo(() => conversation.slice(0, visibleCount), [visibleCount])

  return (
    <div className="rounded-lg border border-border bg-app-bg p-3 sm:p-4">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2 sm:items-center">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-text-muted sm:text-xs">Live chat order flow</p>
        <span className="rounded-full border border-border bg-card-bg px-2 py-0.5 text-[10px] font-medium text-brand-accent">Real-time demo</span>
      </div>

      <div ref={messagesRef} className="chat-preview-scrollbar-hidden min-h-72 space-y-2 overflow-y-auto rounded-lg border border-border bg-card-bg p-2.5 sm:h-72 sm:min-h-0 sm:p-3">
        <AnimatePresence initial={false}>
          {visibleMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`max-w-[96%] break-words rounded-2xl border px-2.5 py-2 text-xs leading-relaxed sm:max-w-[90%] sm:px-3 ${
                message.sender === 'bot' ? 'border-emerald-400/30 bg-emerald-500/10 text-text' : 'ml-auto border-blue-400/30 bg-blue-500/10 text-text'
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
            className="inline-flex items-center gap-1 rounded-full border border-border bg-app-bg px-2 py-1"
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
