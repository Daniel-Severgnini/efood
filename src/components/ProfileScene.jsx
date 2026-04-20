import { products, profileInfo } from '../data/mockData'
import {
  Footer,
  Inner,
  ProfileHeader,
  ProfileProductsSection,
  ProfileViewport,
  RestaurantHero,
} from './Layout'
import { ProductsGrid } from './Cards'
import { useCart } from '../context/CartContext'

const defaultActionTo = (product) => `/perfil/modal/${product.id}`

export function ProfileScene({ children, actionTo = defaultActionTo, cartLabel }) {
  const { itemCount } = useCart()
  const resolvedCartLabel = cartLabel ?? `${itemCount} produto(s) no carrinho`

  return (
    <ProfileViewport>
      <ProfileHeader cartLabel={resolvedCartLabel} />
      <RestaurantHero cuisine={profileInfo.cuisine} title={profileInfo.name} image={profileInfo.heroImage} />
      <ProfileProductsSection>
        <Inner>
          <ProductsGrid products={products} actionTo={actionTo} />
        </Inner>
      </ProfileProductsSection>
      <Footer />
      {children}
    </ProfileViewport>
  )
}

