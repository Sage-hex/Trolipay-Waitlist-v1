import { animate } from 'framer-motion'

let activeScrollAnimation = null

// Simple, predictable framer-motion scroll helper.
export function animatedScrollToSection(sectionId, options = {}) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY

  if (activeScrollAnimation) activeScrollAnimation.stop()

  activeScrollAnimation = animate(startY, targetY, {
    duration: options.duration ?? 1.1,
    ease: options.ease ?? [0.25, 0.1, 0.25, 1],
    onUpdate: (latest) => {
      window.scrollTo(0, Math.round(latest))
    },
    onComplete: () => {
      activeScrollAnimation = null
    },
  })
}
