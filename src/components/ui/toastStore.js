const listeners = new Set()
let toasts = []

function emit() {
  for (const listener of listeners) {
    listener(toasts)
  }
}

export function subscribeToasts(listener) {
  listeners.add(listener)
  listener(toasts)

  return () => {
    listeners.delete(listener)
  }
}

export function dismissToast(id) {
  toasts = toasts.filter((toast) => toast.id !== id)
  emit()
}

export function showToast({ type = 'info', message }) {
  if (!message) return

  const id = crypto.randomUUID()
  toasts = [...toasts, { id, type, message }]
  emit()

  window.setTimeout(() => {
    dismissToast(id)
  }, 3200)
}
