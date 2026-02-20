import { Navigate, Route, Routes } from 'react-router-dom'
import WaitlistLanding from '../pages/public/WaitlistLanding'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WaitlistLanding />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
