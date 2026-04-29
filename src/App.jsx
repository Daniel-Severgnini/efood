import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import CartPage from './pages/CartPage'
import ConfirmationPage from './pages/ConfirmationPage'
import DeliveryPage from './pages/DeliveryPage'
import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage'
import ProfileModalPage from './pages/ProfileModalPage'
import ProfilePage from './pages/ProfilePage'
import { RestaurantsProvider } from './context/RestaurantsContext'

function App() {
  return (
    <RestaurantsProvider>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/perfil' element={<Navigate to='/perfil/1' replace />} />
        <Route path='/perfil/:restaurantId' element={<ProfilePage />} />
        <Route path='/perfil/:restaurantId/modal/:productId' element={<ProfileModalPage />} />
        <Route path='/carrinho' element={<CartPage />} />
        <Route path='/entrega' element={<DeliveryPage />} />
        <Route path='/pagamento' element={<PaymentPage />} />
        <Route path='/confirmacao' element={<ConfirmationPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </RestaurantsProvider>
  )
}

export default App
