import { animate } from 'framer-motion'

let activeScrollAnimation = null

export function animatedScrollToSection(sectionId, { duration = 0.5, ease = 'easeOut' } = {}) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY

  if (activeScrollAnimation) {
    activeScrollAnimation.stop()
  }

  activeScrollAnimation = animate(startY, targetY, {
    duration,
    ease,
    onUpdate: (latest) => window.scrollTo(0, latest),
  })
}
