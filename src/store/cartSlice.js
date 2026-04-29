import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(product) {
        return {
          payload: {
            cartItemId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            priceValue: Number(product.priceValue || 0),
          },
        }
      },
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.cartItemId !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
