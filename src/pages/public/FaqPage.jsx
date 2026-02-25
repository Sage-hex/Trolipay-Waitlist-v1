import LandingNavbar from '../../components/domain/LandingNavbar'
import LandingFooter from '../../components/domain/LandingFooter'
import Section from '../../components/domain/Section'
import Card from '../../components/ui/Card'
import FaqAccordion from '../../components/domain/FaqAccordion'

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-app-bg text-text">
      <LandingNavbar />
      <Section className="pb-8 pt-8 sm:pt-12">
        <Card className="rounded-2xl border border-border p-5 sm:p-6">
          <h1 className="text-2xl font-semibold tracking-tight text-brand-primary sm:text-3xl">Frequently asked questions</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            Everything investors and SME operators typically ask about onboarding, payment verification, receipts, and chat-commerce operations.
          </p>
          <div className="mt-5">
            <FaqAccordion />
          </div>
        </Card>
      </Section>
      <LandingFooter />
    </div>
  )
}
