/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function createCartItem(product) {
  return {
    cartItemId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    productId: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    priceValue: product.priceValue,
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product) => {
    setItems((current) => [...current, createCartItem(product)])
  }

  const removeItem = (cartItemId) => {
    setItems((current) => current.filter((item) => item.cartItemId !== cartItemId))
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.length

  const totalValue = useMemo(() => items.reduce((sum, item) => sum + item.priceValue, 0), [items])

  const totalLabel = useMemo(
    () => totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('\u00a0', ' '),
    [totalValue],
  )

  const value = useMemo(
    () => ({
      items,
      itemCount,
      totalValue,
      totalLabel,
      addItem,
      removeItem,
      clearCart,
    }),
    [items, itemCount, totalValue, totalLabel],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider')
  }

  return context
}
