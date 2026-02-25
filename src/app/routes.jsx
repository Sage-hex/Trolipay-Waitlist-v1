import { Navigate, Route, Routes } from 'react-router-dom'
import WaitlistLanding from '../pages/public/WaitlistLanding'
import PrivacyPage from '../pages/public/PrivacyPage'
import TermsPage from '../pages/public/TermsPage'
import FaqPage from '../pages/public/FaqPage'
import AboutPage from '../pages/public/AboutPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WaitlistLanding />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
