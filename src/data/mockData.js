const restaurantImages = {
  hokiSushi:
    'https://images.unsplash.com/photo-1562436260-126d541901e0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
  laDolceVita:
    'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhc3RhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1400',
  bellaNapoli:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=80&w=1400',
  trattoriaRoma:
    'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhc3RhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1400',
  sapporoHouse:
    'https://images.unsplash.com/photo-1554502078-ef0fc409efce?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1400',
  fornoCapuano:
    'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=80&w=1400',
  mareItaliana:
    'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=80&w=1400',
  sakuraPrime:
    'https://images.unsplash.com/photo-1628676825875-031ad212c31e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGklMjByb2xsfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1400',
}

const productImages = {
  marguerita:
    'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  diavola:
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  quatroQueijos:
    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  burrata:
    'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  fruttiDiMare:
    'https://images.unsplash.com/photo-1571560022451-1de73036421c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1200',
  risottoCamarao:
    'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  salmaoRoll:
    'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGklMjByb2xsfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
  tempuraRoll:
    'https://images.unsplash.com/photo-1628676825875-031ad212c31e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VzaGklMjByb2xsfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=80&w=1200',
}

export const restaurants = [
  {
    id: 1,
    name: 'Hoki Sushi',
    rating: '4.9',
    description:
      'Combinados de sushi e sashimi preparados na hora, com cortes precisos e ingredientes frescos para um jantar leve e elegante.',
    image: restaurantImages.hokiSushi,
    tags: ['Destaque da semana', 'Japonesa'],
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: '4.8',
    description:
      'Massas artesanais e molhos classicos da cozinha italiana, com receitas autorais que equilibram conforto e sofisticacao.',
    image: restaurantImages.laDolceVita,
    tags: ['Italiana'],
  },
  {
    id: 3,
    name: 'Bella Napoli',
    rating: '4.7',
    description:
      'Pizzas de fermentacao lenta com molho de tomate encorpado e queijos selecionados, assadas no ponto ideal.',
    image: restaurantImages.bellaNapoli,
    tags: ['Italiana'],
  },
  {
    id: 4,
    name: 'Trattoria Roma',
    rating: '4.6',
    description:
      'Pratos tradicionais com massa fresca e finalizacao artesanal, pensados para quem busca sabor italiano autentico.',
    image: restaurantImages.trattoriaRoma,
    tags: ['Italiana'],
  },
  {
    id: 5,
    name: 'Sapporo House',
    rating: '4.8',
    description:
      'Especialidades japonesas com rolls criativos, peixes selecionados e apresentacao cuidadosa em cada pedido.',
    image: restaurantImages.sapporoHouse,
    tags: ['Japonesa'],
  },
  {
    id: 6,
    name: 'Forno Capuano',
    rating: '4.7',
    description:
      'Pizzaria artesanal com receitas napolitanas, massa leve de longa fermentacao e cobertura farta na medida certa.',
    image: restaurantImages.fornoCapuano,
    tags: ['Pizzaria'],
  },
  {
    id: 7,
    name: 'Mare Italiana',
    rating: '4.5',
    description:
      'Culinaria mediterranea com frutos do mar e massas especiais, trazendo frescor e temperos delicados ao cardapio.',
    image: restaurantImages.mareItaliana,
    tags: ['Frutos do mar'],
  },
  {
    id: 8,
    name: 'Sakura Prime',
    rating: '4.8',
    description:
      'Linha premium de sushi com selecao diaria de ingredientes, ideal para quem quer uma experiencia japonesa completa.',
    image: restaurantImages.sakuraPrime,
    tags: ['Japonesa'],
  },
]

export const profileInfo = {
  cuisine: 'Italiana',
  name: 'La Dolce Vita Trattoria',
  heroImage: restaurantImages.laDolceVita,
}

export const products = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'Molho de tomate San Marzano, mussarela fior di latte e manjericao fresco, finalizada com azeite extra virgem.',
    modalDescription:
      'Pizza classica italiana com massa leve, molho de tomate fresco e cobertura equilibrada. Uma opcao tradicional para quem busca sabor autentico e textura macia com borda crocante.',
    image: productImages.marguerita,
    serves: '2 pessoas',
    price: 'R$ 60,90',
    priceValue: 60.9,
  },
  {
    id: 2,
    name: 'Pizza Diavola',
    description:
      'Pizza de borda alta com pepperoni artesanal e toque picante equilibrado, mantendo o sabor marcante da receita classica.',
    modalDescription:
      'Receita intensa com pepperoni artesanal, molho encorpado e pimenta na medida certa. Indicada para quem gosta de um perfil mais forte sem perder o equilibrio dos ingredientes.',
    image: productImages.diavola,
    serves: '2 pessoas',
    price: 'R$ 64,90',
    priceValue: 64.9,
  },
  {
    id: 3,
    name: 'Quatro Queijos',
    description:
      'Blend cremoso de gorgonzola, parmesao, provolone e mussarela sobre massa de fermentacao lenta e textura macia.',
    modalDescription:
      'Combinacao de quatro queijos selecionados para entregar cremosidade e sabor marcante em cada fatia. Massa de fermentacao lenta para melhor textura e digestibilidade.',
    image: productImages.quatroQueijos,
    serves: '2 pessoas',
    price: 'R$ 62,90',
    priceValue: 62.9,
  },
  {
    id: 4,
    name: 'Pizza Burrata',
    description:
      'Disco napolitano com tomate assado e burrata cremosa adicionada ao sair do forno para manter a leveza do recheio.',
    modalDescription:
      'Pizza especial com tomate assado e burrata fresca adicionada no final do preparo, preservando cremosidade e aroma. Sabor delicado, ideal para quem prefere um prato mais suave.',
    image: productImages.burrata,
    serves: '2 pessoas',
    price: 'R$ 68,90',
    priceValue: 68.9,
  },
  {
    id: 5,
    name: 'Frutti di Mare',
    description:
      'Preparacao com camarao, polvo e mexilhoes, finalizada com ervas frescas e toque citrico para realcar os frutos do mar.',
    modalDescription:
      'Prato de frutos do mar com camarao, polvo e mexilhoes salteados. Finalizacao com ervas e toque citrico para destacar frescor e equilibrio de sabores.',
    image: productImages.fruttiDiMare,
    serves: '1 pessoa',
    price: 'R$ 58,90',
    priceValue: 58.9,
  },
  {
    id: 6,
    name: 'Risotto de Camarao',
    description:
      'Arroz arboreo cremoso com caldo reduzido, camaroes salteados na manteiga de ervas e finalizacao suave com parmesao.',
    modalDescription:
      'Risotto cremoso preparado com arroz arboreo, caldo reduzido e camaroes grelhados. Receita individual com textura aveludada e finalizacao de parmesao.',
    image: productImages.risottoCamarao,
    serves: '1 pessoa',
    price: 'R$ 66,90',
    priceValue: 66.9,
  },
  {
    id: 7,
    name: 'Salmao Roll',
    description:
      'Uramaki de salmao com arroz temperado, cream cheese suave e acabamento com gergelim tostado para mais textura.',
    modalDescription:
      'Roll de salmao com arroz temperado e recheio cremoso, finalizado com gergelim para contraste de textura. Opcao leve e equilibrada para refeicao individual.',
    image: productImages.salmaoRoll,
    serves: '1 pessoa',
    price: 'R$ 54,90',
    priceValue: 54.9,
  },
  {
    id: 8,
    name: 'Tempura Roll',
    description:
      'Hot roll empanado em panko crocante, recheado com peixe fresco e cebolinha, servido com molho tare levemente adocicado.',
    modalDescription:
      'Hot roll crocante preparado com panko e recheio de peixe fresco. Acompanha molho tare e entrega um perfil mais intenso, ideal para quem gosta de contraste entre crocante e cremoso.',
    image: productImages.tempuraRoll,
    serves: '1 pessoa',
    price: 'R$ 56,90',
    priceValue: 56.9,
  },
]
