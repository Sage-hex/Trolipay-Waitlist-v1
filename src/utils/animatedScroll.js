import { animate } from 'framer-motion'

let activeScrollAnimation = null
let removeInterruptionListeners = null

function clearInterruptionListeners() {
  if (removeInterruptionListeners) {
    removeInterruptionListeners()
    removeInterruptionListeners = null
  }
}

function getDurationByDistance(distance) {
  // Keeps short jumps responsive while making long jumps noticeably slower/smoother.
  return Math.min(1.25, Math.max(0.65, distance / 1200))
}

export function animatedScrollToSection(sectionId, options = {}) {
  const element = document.getElementById(sectionId)
  if (!element) return

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY
  const distance = Math.abs(targetY - startY)

  if (distance < 2) return

  const duration = options.duration ?? getDurationByDistance(distance)
  const ease = options.ease ?? [0.22, 1, 0.36, 1]

  if (activeScrollAnimation) {
    activeScrollAnimation.stop()
  }
  clearInterruptionListeners()

  const interrupt = () => {
    if (activeScrollAnimation) {
      activeScrollAnimation.stop()
      activeScrollAnimation = null
    }
    clearInterruptionListeners()
  }

  const interruptionEvents = ['wheel', 'touchstart', 'keydown', 'mousedown']
  interruptionEvents.forEach((eventName) => {
    window.addEventListener(eventName, interrupt, { passive: true })
  })

  removeInterruptionListeners = () => {
    interruptionEvents.forEach((eventName) => {
      window.removeEventListener(eventName, interrupt)
    })
  }

  activeScrollAnimation = animate(startY, targetY, {
    duration,
    ease,
    onUpdate: (latest) => {
      window.scrollTo(0, Math.round(latest))
    },
    onComplete: () => {
      activeScrollAnimation = null
      clearInterruptionListeners()
    },
  })
}
