import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

const initialState = {
  delivery: {
    receiver: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    extra: '',
  },
  payment: {
    cardName: '',
    cardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: '',
  },
  order: null,
  status: 'idle',
  error: '',
}

function onlyDigits(value) {
  return String(value ?? '').replace(/\D/g, '')
}

function normalizeYear(value) {
  const rawYear = String(value ?? '').trim()
  return rawYear.length === 2 ? Number(`20${rawYear}`) : Number(rawYear)
}

function createCheckoutPayload({ items, delivery, payment }) {
  return {
    products: items.map((item) => ({
      id: item.productId,
      price: Number(item.priceValue || 0),
    })),
    delivery: {
      receiver: delivery.receiver,
      address: {
        description: delivery.address,
        city: delivery.city,
        zipCode: delivery.zip,
        number: Number(delivery.number),
        complement: delivery.extra,
      },
    },
    payment: {
      card: {
        name: payment.cardName,
        number: onlyDigits(payment.cardNumber),
        code: Number(onlyDigits(payment.cvv)),
        expires: {
          month: Number(payment.expMonth),
          year: normalizeYear(payment.expYear),
        },
      },
    },
  }
}

export const submitCheckout = createAsyncThunk(
  'checkout/submitCheckout',
  async ({ items, delivery, payment }, { rejectWithValue }) => {
    try {
      const response = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createCheckoutPayload({ items, delivery, payment })),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        return rejectWithValue(payload?.message ?? 'Nao foi possivel concluir o pedido.')
      }

      return payload
    } catch {
      return rejectWithValue('Nao foi possivel conectar com a API de checkout.')
    }
  },
)

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setDeliveryData(state, action) {
      state.delivery = action.payload
    },
    setPaymentData(state, action) {
      state.payment = action.payload
    },
    clearCheckout(state) {
      state.delivery = initialState.delivery
      state.payment = initialState.payment
      state.order = null
      state.status = 'idle'
      state.error = ''
    },
    clearCheckoutError(state) {
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitCheckout.pending, (state) => {
        state.status = 'loading'
        state.error = ''
        state.order = null
      })
      .addCase(submitCheckout.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.order = action.payload
      })
      .addCase(submitCheckout.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Nao foi possivel concluir o pedido.'
      })
  },
})

export const { clearCheckout, clearCheckoutError, setDeliveryData, setPaymentData } = checkoutSlice.actions

export default checkoutSlice.reducer
