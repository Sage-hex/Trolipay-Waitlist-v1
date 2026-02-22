import Section from '../../components/domain/Section'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-app-bg text-text">
      <Section className="py-12">
        <h1 className="text-3xl font-semibold text-brand-primary">Privacy Policy</h1>
        <p className="mt-4 max-w-3xl text-sm text-text-muted sm:text-base">
          We only collect business contact and qualification information needed to evaluate onboarding fit and run waitlist operations.
          Data is stored securely and is not sold to third parties.
        </p>
      </Section>
    </main>
  )
}
