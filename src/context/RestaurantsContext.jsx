/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const RestaurantsContext = createContext(null)

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function formatPrice(value) {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function capitalize(value) {
  if (!value) {
    return ''
  }

  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

function normalizeProduct(product) {
  const description = normalizeText(product.descricao)
  const priceValue = Number(product.preco || 0)

  return {
    id: product.id,
    name: normalizeText(product.nome),
    description,
    modalDescription: description,
    image: normalizeText(product.foto),
    serves: normalizeText(product.porcao) || '1 pessoa',
    price: formatPrice(priceValue),
    priceValue,
  }
}

function normalizeRestaurant(restaurant) {
  const products = Array.isArray(restaurant.cardapio) ? restaurant.cardapio.map(normalizeProduct) : []
  const tags = [
    restaurant.destacado ? 'Destaque da semana' : null,
    capitalize(normalizeText(restaurant.tipo)),
  ].filter(Boolean)

  return {
    id: restaurant.id,
    name: normalizeText(restaurant.titulo),
    rating: Number(restaurant.avaliacao || 0).toFixed(1),
    description: normalizeText(restaurant.descricao),
    image: normalizeText(restaurant.capa),
    tags,
    cuisine: capitalize(normalizeText(restaurant.tipo)),
    heroImage: normalizeText(restaurant.capa),
    products,
  }
}

async function requestRestaurants() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error(`Falha ao buscar restaurantes: HTTP ${response.status}`)
  }

  const payload = await response.json()
  return Array.isArray(payload) ? payload.map(normalizeRestaurant) : []
}

export function RestaurantsProvider({ children }) {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchRestaurants = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const normalized = await requestRestaurants()
      setRestaurants(normalized)
    } catch (caughtError) {
      setRestaurants([])
      setError(caughtError instanceof Error ? caughtError.message : 'Nao foi possivel carregar os restaurantes.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadInitialRestaurants = async () => {
      try {
        const normalized = await requestRestaurants()

        if (!isMounted) {
          return
        }

        setRestaurants(normalized)
        setError('')
      } catch (caughtError) {
        if (!isMounted) {
          return
        }

        setRestaurants([])
        setError(caughtError instanceof Error ? caughtError.message : 'Nao foi possivel carregar os restaurantes.')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadInitialRestaurants()

    return () => {
      isMounted = false
    }
  }, [])

  const value = useMemo(
    () => ({
      restaurants,
      loading,
      error,
      refetch: fetchRestaurants,
    }),
    [restaurants, loading, error, fetchRestaurants],
  )

  return <RestaurantsContext.Provider value={value}>{children}</RestaurantsContext.Provider>
}

export function useRestaurants() {
  const context = useContext(RestaurantsContext)

  if (!context) {
    throw new Error('useRestaurants deve ser usado dentro de RestaurantsProvider')
  }

  return context
}
