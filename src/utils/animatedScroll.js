import { animate } from 'framer-motion'

let activeScroll = null

export function scrollToSection(sectionId, duration = 0.9) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const from = window.scrollY
  const to = element.getBoundingClientRect().top + window.scrollY - 72

  if (activeScroll) activeScroll.stop()

  activeScroll = animate(from, to, {
    duration,
    ease: [0.22, 1, 0.36, 1],
    onUpdate: (value) => window.scrollTo(0, Math.round(value)),
    onComplete: () => {
      activeScroll = null
    },
  })
}
