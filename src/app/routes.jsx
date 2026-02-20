<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-ka9wmo
import { Navigate, Route, Routes } from 'react-router-dom'
import WaitlistLanding from '../pages/public/WaitlistLanding'
=======
import { Routes, Route } from 'react-router-dom'
import WaitlistLanding from '../pages/WaitlistLanding'
>>>>>>> main

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WaitlistLanding />} />
<<<<<<< codex/scaffold-vite-react-app-with-tailwind-css-ka9wmo
      <Route path="*" element={<Navigate to="/" replace />} />
=======
>>>>>>> main
    </Routes>
  )
}
