import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItem as addItemAction,
  clearCart as clearCartAction,
  removeItem as removeItemAction,
} from '../store/cartSlice'

export function useCart() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  const itemCount = items.length
  const totalValue = items.reduce((sum, item) => sum + item.priceValue, 0)
  const totalLabel = useMemo(
    () => totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('\u00a0', ' '),
    [totalValue],
  )

  const addItem = (product) => {
    dispatch(addItemAction(product))
  }

  const removeItem = (cartItemId) => {
    dispatch(removeItemAction(cartItemId))
  }

  const clearCart = () => {
    dispatch(clearCartAction())
  }

  return {
    items,
    itemCount,
    totalValue,
    totalLabel,
    addItem,
    removeItem,
    clearCart,
  }
}
