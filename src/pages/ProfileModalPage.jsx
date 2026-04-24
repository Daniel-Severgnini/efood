import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  DimmingOverlay,
  ModalAdd,
  ModalClose,
  ModalContainer,
  ModalDescription,
  ModalImage,
  ModalServing,
  ModalTitle,
} from '../components/CheckoutLayer'
import { ProfileScene } from '../components/ProfileScene'
import { useCart } from '../context/CartContext'
import { useRestaurants } from '../context/RestaurantsContext'

function findRestaurant(restaurants, restaurantId) {
  return restaurants.find((restaurant) => String(restaurant.id) === String(restaurantId))
}

function ProfileModalPage() {
  const { restaurantId, productId } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { restaurants, loading } = useRestaurants()

  const selectedRestaurant = findRestaurant(restaurants, restaurantId)
  const selectedProduct = selectedRestaurant?.products.find((product) => String(product.id) === String(productId))

  useEffect(() => {
    if (!loading && (!selectedRestaurant || !selectedProduct)) {
      navigate(`/perfil/${restaurantId ?? 1}`, { replace: true })
    }
  }, [loading, selectedRestaurant, selectedProduct, restaurantId, navigate])

  if (!selectedRestaurant || !selectedProduct) {
    return <ProfileScene restaurantId={restaurantId} />
  }

  const handleAddToCart = () => {
    addItem(selectedProduct)
    navigate('/carrinho')
  }

  return (
    <ProfileScene restaurantId={selectedRestaurant.id}>
      <DimmingOverlay
        onClick={() => navigate(`/perfil/${selectedRestaurant.id}`)}
        role='button'
        aria-label='Fechar modal'
      />
      <ModalContainer>
        <ModalClose as={Link} to={`/perfil/${selectedRestaurant.id}`} aria-label='Fechar modal'>
          ×
        </ModalClose>
        <ModalImage src={selectedProduct.image} alt={selectedProduct.name} />
        <div>
          <ModalTitle>{selectedProduct.name}</ModalTitle>
          <ModalDescription>{selectedProduct.modalDescription ?? selectedProduct.description}</ModalDescription>
          <ModalServing>Serve: {selectedProduct.serves ?? '1 pessoa'}</ModalServing>
          <ModalAdd type='button' onClick={handleAddToCart}>
            Adicionar ao carrinho - {selectedProduct.price}
          </ModalAdd>
        </div>
      </ModalContainer>
    </ProfileScene>
  )
}

export default ProfileModalPage
