export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
