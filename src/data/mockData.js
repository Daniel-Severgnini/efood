import pastaImg from '../assets/images/home-pasta.png'
import pizzaImg from '../assets/images/profile-pizza.png'
import sushiImg from '../assets/images/home-sushi.png'

export const restaurants = [
  {
    id: 1,
    name: 'Hoki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente e peça já!',
    image: sushiImg,
    tags: ['Destaque da semana', 'Japonesa'],
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pastaImg,
    tags: ['Italiana'],
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pastaImg,
    tags: ['Italiana'],
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pastaImg,
    tags: ['Italiana'],
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pastaImg,
    tags: ['Italiana'],
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pastaImg,
    tags: ['Italiana'],
  },
]

export const profileInfo = {
  cuisine: 'Italiana',
  name: 'La Dolce Vita Trattoria',
  heroImage: pastaImg,
}

export const products = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: 'Pizza Marguerita',
  description:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  image: pizzaImg,
  price: 'R$ 60,90',
  priceValue: 60.9,
}))

