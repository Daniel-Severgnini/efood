import { RestaurantsGrid } from '../components/Cards'
import { Footer, HomeHeader, HomeRestaurantsSection, HomeViewport, Inner } from '../components/Layout'
import { useRestaurants } from '../context/RestaurantsContext'

function HomePage() {
  const { restaurants, loading, error } = useRestaurants()

  return (
    <HomeViewport>
      <HomeHeader />
      <HomeRestaurantsSection>
        <Inner>
          {loading && <p>Carregando restaurantes...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && <RestaurantsGrid restaurants={restaurants} />}
        </Inner>
      </HomeRestaurantsSection>
      <Footer />
    </HomeViewport>
  )
}

export default HomePage
