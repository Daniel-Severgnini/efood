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
import { products } from '../data/mockData'

function ProfileModalPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const selectedProduct = products.find((product) => String(product.id) === productId)

  useEffect(() => {
    if (!selectedProduct) {
      navigate('/perfil', { replace: true })
    }
  }, [selectedProduct, navigate])

  if (!selectedProduct) {
    return null
  }

  const handleAddToCart = () => {
    addItem(selectedProduct)
    navigate('/carrinho')
  }

  return (
    <ProfileScene>
      <DimmingOverlay onClick={() => navigate('/perfil')} role='button' aria-label='Fechar modal' />
      <ModalContainer>
        <ModalClose as={Link} to='/perfil' aria-label='Fechar modal'>
          x
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
