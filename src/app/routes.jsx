import { Routes, Route } from 'react-router-dom'
import WaitlistLanding from '../pages/WaitlistLanding'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WaitlistLanding />} />
    </Routes>
  )
}
