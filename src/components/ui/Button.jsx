const variants = {
  primary:
    'bg-brand-primary text-white hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg',
  secondary:
    'bg-card-bg border border-border text-text hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
