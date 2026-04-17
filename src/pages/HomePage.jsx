import { restaurants } from '../data/mockData'
import { RestaurantsGrid } from '../components/Cards'
import { Footer, HomeHeader, HomeRestaurantsSection, HomeViewport, Inner } from '../components/Layout'

function HomePage() {
  return (
    <HomeViewport>
      <HomeHeader />
      <HomeRestaurantsSection>
        <Inner>
          <RestaurantsGrid restaurants={restaurants} />
        </Inner>
      </HomeRestaurantsSection>
      <Footer />
    </HomeViewport>
  )
}

export default HomePage

