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
import { useRestaurants } from '../context/RestaurantsContext'

function resolveRestaurant(restaurants, restaurantId) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return null
  }

  if (!restaurantId) {
    return restaurants[0]
  }

  return restaurants.find((restaurant) => String(restaurant.id) === String(restaurantId)) ?? restaurants[0]
}

export function ProfileScene({ children, actionTo, cartLabel, restaurantId }) {
  const { itemCount } = useCart()
  const { restaurants, loading, error } = useRestaurants()
  const resolvedCartLabel = cartLabel ?? `${itemCount} produto(s) no carrinho`
  const restaurant = resolveRestaurant(restaurants, restaurantId)
  const products = restaurant?.products ?? []
  const defaultActionTo = (product) => `/perfil/${restaurant?.id ?? 1}/modal/${product.id}`
  const resolvedActionTo = actionTo ?? defaultActionTo

  return (
    <ProfileViewport>
      <ProfileHeader cartLabel={resolvedCartLabel} />
      {restaurant && <RestaurantHero cuisine={restaurant.cuisine} title={restaurant.name} image={restaurant.heroImage} />}
      <ProfileProductsSection>
        <Inner>
          {loading && <p>Carregando cardapio...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && <ProductsGrid products={products} actionTo={resolvedActionTo} />}
        </Inner>
      </ProfileProductsSection>
      <Footer />
      {children}
    </ProfileViewport>
  )
}
