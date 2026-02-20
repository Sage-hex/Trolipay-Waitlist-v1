import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './app/routes'
import Toast from './components/ui/Toast'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toast />
    </BrowserRouter>
  )
}
