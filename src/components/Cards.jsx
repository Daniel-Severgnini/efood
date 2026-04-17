import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../styles/theme'

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`

const RestaurantCardBox = styled.article`
  border: 1px solid ${colors.primary};
  background: ${colors.page};
`

const RestaurantImageWrap = styled.div`
  position: relative;
`

const RestaurantImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

const Tag = styled.span`
  background: ${colors.primary};
  color: ${colors.light};
  font-size: 14px;
  font-weight: 700;
  padding: 6px 8px;
`

const RestaurantBody = styled.div`
  padding: 10px;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

const RestaurantName = styled.h3`
  margin: 0;
  color: ${colors.primary};
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const RestaurantRate = styled.p`
  margin: 0;
  color: ${colors.primary};
  font-size: 30px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  span {
    color: #ffb930;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const RestaurantDescription = styled.p`
  margin: 16px 0;
  min-height: 124px;
  color: ${colors.primary};
  font-size: 18px;
  line-height: 1.4;

  @media (max-width: 768px) {
    min-height: auto;
    font-size: 16px;
  }
`

const MoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  color: ${colors.light};
  height: 34px;
  padding: 0 14px;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: ${colors.primaryDark};
  }
`

export function RestaurantsGrid({ restaurants }) {
  return (
    <HomeGrid>
      {restaurants.map((restaurant) => (
        <RestaurantCardBox key={restaurant.id}>
          <RestaurantImageWrap>
            <RestaurantImage src={restaurant.image} alt={restaurant.name} />
            <Tags>
              {restaurant.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </RestaurantImageWrap>
          <RestaurantBody>
            <TitleRow>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantRate>
                {restaurant.rating} <span aria-hidden='true'>★</span>
              </RestaurantRate>
            </TitleRow>
            <RestaurantDescription>{restaurant.description}</RestaurantDescription>
            <MoreButton to='/perfil'>Saiba mais</MoreButton>
          </RestaurantBody>
        </RestaurantCardBox>
      ))}
    </HomeGrid>
  )
}

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCardBox = styled.article`
  background: ${colors.primary};
  padding: 8px;
`

const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

const ProductName = styled.h3`
  margin: 8px 0;
  color: ${colors.light};
  font-size: 24px;
  font-weight: 900;
`

const ProductDescription = styled.p`
  margin: 0 0 8px;
  color: ${colors.light};
  font-size: 16px;
  line-height: 1.45;
  min-height: 164px;

  @media (max-width: 768px) {
    min-height: auto;
  }
`

const AddButton = styled(Link)`
  width: 100%;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  background: ${colors.light};
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: ${colors.page};
  }
`

export function ProductsGrid({ products, actionTo, actionLabel = 'Adicionar ao carrinho' }) {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCardBox key={product.id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <AddButton to={actionTo}>{actionLabel}</AddButton>
        </ProductCardBox>
      ))}
    </ProductGrid>
  )
}
