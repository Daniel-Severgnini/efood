import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const { addItem } = useCart()
  const selectedProduct = products[0]

  const handleAddToCart = () => {
    addItem(selectedProduct)
    navigate('/carrinho')
  }

  return (
    <ProfileScene actionTo='/perfil/modal'>
      <DimmingOverlay onClick={() => navigate('/perfil')} role='button' aria-label='Fechar modal' />
      <ModalContainer>
        <ModalClose as={Link} to='/perfil' aria-label='Fechar modal'>
          ×
        </ModalClose>
        <ModalImage src={selectedProduct.image} alt={selectedProduct.name} />
        <div>
          <ModalTitle>{selectedProduct.name}</ModalTitle>
          <ModalDescription>
            A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e
            sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A
            combinação de sabores é perfeita, com o molho de tomate suculento e levemente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É
            uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </ModalDescription>
          <ModalServing>Serve: de 2 a 3 pessoas</ModalServing>
          <ModalAdd type='button' onClick={handleAddToCart}>
            Adicionar ao carrinho - {selectedProduct.price}
          </ModalAdd>
        </div>
      </ModalContainer>
    </ProfileScene>
  )
}

export default ProfileModalPage
