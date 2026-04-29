import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  CartDetails,
  CartImage,
  CartItem,
  CartList,
  CartName,
  CartPrice,
  DimmingOverlay,
  EmptyCartMessage,
  PrimaryAction,
  RemoveButton,
  RemoveIcon,
  RightDrawer,
  TotalLine,
} from '../components/CheckoutLayer'
import { ProfileScene } from '../components/ProfileScene'
import { useCart } from '../context/CartContext'

function CartPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { items, itemCount, totalLabel, removeItem } = useCart()
  const lastCartRestaurantId = items[itemCount - 1]?.restaurantId
  const activeRestaurantId = searchParams.get('restaurante') ?? lastCartRestaurantId
  const cartQuery = activeRestaurantId ? `?restaurante=${activeRestaurantId}` : ''
  const profilePath = activeRestaurantId ? `/perfil/${activeRestaurantId}` : '/perfil'

  const handleProceed = () => {
    if (itemCount === 0) {
      return
    }

    navigate(`/entrega${cartQuery}`)
  }

  return (
    <ProfileScene restaurantId={activeRestaurantId}>
      <DimmingOverlay $withDrawer onClick={() => navigate(profilePath)} aria-label='Fechar carrinho' role='button' />
      <RightDrawer>
        <CartList>
          {itemCount === 0 && <EmptyCartMessage>Seu carrinho esta vazio. Adicione um item para continuar.</EmptyCartMessage>}
          {items.map((item) => (
            <CartItem key={item.cartItemId}>
              <CartImage src={item.image} alt={item.name} />
              <CartDetails>
                <CartName>{item.name}</CartName>
                <CartPrice>{item.price}</CartPrice>
              </CartDetails>
              <RemoveButton
                type='button'
                onClick={() => removeItem(item.cartItemId)}
                aria-label={`Remover ${item.name} do carrinho`}
              >
                <RemoveIcon viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75'>
                  <path d='M3 6h18' />
                  <path d='M8 6V4h8v2' />
                  <path d='M19 6v14H5V6' />
                  <path d='M10 11v6M14 11v6' />
                </RemoveIcon>
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>

        <TotalLine>
          <span>Valor total</span>
          <span>{totalLabel}</span>
        </TotalLine>

        <PrimaryAction type='button' onClick={handleProceed} disabled={itemCount === 0}>
          Continuar com a entrega
        </PrimaryAction>
      </RightDrawer>
    </ProfileScene>
  )
}

export default CartPage
