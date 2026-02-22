import Section from '../../components/domain/Section'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-app-bg text-text">
      <Section className="py-12">
        <h1 className="text-3xl font-semibold text-brand-primary">Terms of Service</h1>
        <p className="mt-4 max-w-3xl text-sm text-text-muted sm:text-base">
          Waitlist and demo submissions are for business onboarding evaluation. Access to pilot features is discretionary and subject
          to operational capacity and risk review.
        </p>
      </Section>
    </main>
  )
}
