import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { DimmingOverlay, DrawerText, DrawerTitle, PrimaryAction, RightDrawer } from '../components/CheckoutLayer'
import { ProfileScene } from '../components/ProfileScene'
import { useCart } from '../context/CartContext'
import { clearCheckout } from '../store/checkoutSlice'

function ConfirmationPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { itemCount, clearCart } = useCart()
  const order = useSelector((state) => state.checkout.order)
  const activeRestaurantId = searchParams.get('restaurante')
  const cartQuery = activeRestaurantId ? `?restaurante=${activeRestaurantId}` : ''
  const cartPath = `/carrinho${cartQuery}`
  const paymentPath = `/pagamento${cartQuery}`
  const orderId = order?.orderId

  useEffect(() => {
    if (itemCount === 0) {
      navigate(cartPath, { replace: true })
      return
    }

    if (!orderId) {
      navigate(paymentPath, { replace: true })
    }
  }, [cartPath, itemCount, navigate, orderId, paymentPath])

  const handleFinish = () => {
    clearCart()
    dispatch(clearCheckout())
    navigate('/')
  }

  return (
    <ProfileScene restaurantId={activeRestaurantId}>
      <DimmingOverlay $withDrawer onClick={() => navigate(paymentPath)} aria-label='Voltar para pagamento' role='button' />
      <RightDrawer>
        <DrawerTitle>Pedido realizado - {orderId ?? ''}</DrawerTitle>
        <DrawerText>
          Estamos felizes em informar que seu pedido já está em processo de preparação, e em breve, será entregue
          no endereço fornecido.
        </DrawerText>
        <DrawerText>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
        </DrawerText>
        <DrawerText>
          Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua
          segurança e bem-estar durante a refeição.
        </DrawerText>
        <DrawerText>
          Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </DrawerText>
        <PrimaryAction type='button' onClick={handleFinish}>
          Concluir
        </PrimaryAction>
      </RightDrawer>
    </ProfileScene>
  )
}

export default ConfirmationPage
