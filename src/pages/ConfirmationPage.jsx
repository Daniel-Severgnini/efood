import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { DimmingOverlay, DrawerText, DrawerTitle, PrimaryAction, RightDrawer } from '../components/CheckoutLayer'
import { ProfileScene } from '../components/ProfileScene'
import { useCart } from '../context/CartContext'

function createOrderId() {
  const random = Math.floor(100000000 + Math.random() * 900000000)
  return String(random)
}

function ConfirmationPage() {
  const navigate = useNavigate()
  const { itemCount, clearCart } = useCart()
  const orderId = useMemo(() => createOrderId(), [])

  useEffect(() => {
    if (itemCount === 0) {
      navigate('/carrinho', { replace: true })
    }
  }, [itemCount, navigate])

  const handleFinish = () => {
    clearCart()
    navigate('/')
  }

  return (
    <ProfileScene>
      <DimmingOverlay $withDrawer onClick={() => navigate('/pagamento')} aria-label='Voltar para pagamento' role='button' />
      <RightDrawer>
        <DrawerTitle>Pedido realizado - ({orderId})</DrawerTitle>
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
