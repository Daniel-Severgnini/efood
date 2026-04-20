import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import CartPage from './pages/CartPage'
import ConfirmationPage from './pages/ConfirmationPage'
import DeliveryPage from './pages/DeliveryPage'
import HomePage from './pages/HomePage'
import PaymentPage from './pages/PaymentPage'
import ProfileModalPage from './pages/ProfileModalPage'
import ProfilePage from './pages/ProfilePage'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/perfil' element={<ProfilePage />} />
        <Route path='/perfil/modal/:productId' element={<ProfileModalPage />} />
        <Route path='/perfil/modal' element={<Navigate to='/perfil' replace />} />
        <Route path='/carrinho' element={<CartPage />} />
        <Route path='/entrega' element={<DeliveryPage />} />
        <Route path='/pagamento' element={<PaymentPage />} />
        <Route path='/confirmacao' element={<ConfirmationPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </CartProvider>
  )
}

export default App

