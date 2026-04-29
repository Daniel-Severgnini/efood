import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  DimmingOverlay,
  DrawerTitle,
  FormError,
  FormInput,
  FormLabel,
  InputGroup,
  PrimaryAction,
  RightDrawer,
  SecondaryAction,
  SplitRow,
} from '../components/CheckoutLayer'
import { ProfileScene } from '../components/ProfileScene'
import { useCart } from '../context/CartContext'

const initialForm = {
  receiver: '',
  address: '',
  city: '',
  zip: '',
  number: '',
  extra: '',
}

function formatZip(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8)

  if (digits.length <= 5) {
    return digits
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

function DeliveryPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { itemCount } = useCart()
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const activeRestaurantId = searchParams.get('restaurante')
  const cartQuery = activeRestaurantId ? `?restaurante=${activeRestaurantId}` : ''
  const cartPath = `/carrinho${cartQuery}`
  const paymentPath = `/pagamento${cartQuery}`

  useEffect(() => {
    if (itemCount === 0) {
      navigate(cartPath, { replace: true })
    }
  }, [cartPath, itemCount, navigate])

  const handleChange = (event) => {
    const { id, value } = event.target
    if (id === 'zip') {
      setFormData((current) => ({ ...current, zip: formatZip(value) }))
      setErrors((current) => ({ ...current, zip: undefined }))
      return
    }

    setFormData((current) => ({ ...current, [id]: value }))
    setErrors((current) => ({ ...current, [id]: undefined }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!/^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/.test(formData.receiver.trim())) {
      nextErrors.receiver = 'Digite nome e sobrenome válidos.'
    }

    if (formData.address.trim().length < 5) {
      nextErrors.address = 'Informe um endereço válido.'
    }

    if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(formData.city.trim())) {
      nextErrors.city = 'Informe uma cidade válida.'
    }

    const zipDigits = formData.zip.replace(/\D/g, '')
    if (zipDigits.length !== 8) {
      nextErrors.zip = 'CEP deve conter 8 números.'
    }

    if (!/^\d+$/.test(formData.number.trim()) || Number(formData.number.trim()) <= 0) {
      nextErrors.number = 'Número deve ser um valor numérico válido.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    navigate(paymentPath)
  }

  return (
    <ProfileScene restaurantId={activeRestaurantId}>
      <DimmingOverlay $withDrawer onClick={() => navigate(cartPath)} aria-label='Voltar para o carrinho' role='button' />
      <RightDrawer>
        <form onSubmit={handleSubmit} noValidate>
          <DrawerTitle>Entrega</DrawerTitle>

          <InputGroup>
            <FormLabel htmlFor='receiver'>Quem irá receber</FormLabel>
            <FormInput id='receiver' value={formData.receiver} onChange={handleChange} required />
            {errors.receiver && <FormError>{errors.receiver}</FormError>}
          </InputGroup>

          <InputGroup>
            <FormLabel htmlFor='address'>Endereço</FormLabel>
            <FormInput id='address' value={formData.address} onChange={handleChange} required />
            {errors.address && <FormError>{errors.address}</FormError>}
          </InputGroup>

          <InputGroup>
            <FormLabel htmlFor='city'>Cidade</FormLabel>
            <FormInput id='city' value={formData.city} onChange={handleChange} required />
            {errors.city && <FormError>{errors.city}</FormError>}
          </InputGroup>

          <SplitRow>
            <InputGroup>
              <FormLabel htmlFor='zip'>CEP</FormLabel>
              <FormInput
                id='zip'
                value={formData.zip}
                onChange={handleChange}
                inputMode='numeric'
                maxLength={9}
                placeholder='12345-678'
                required
              />
              {errors.zip && <FormError>{errors.zip}</FormError>}
            </InputGroup>
            <InputGroup>
              <FormLabel htmlFor='number'>Número</FormLabel>
              <FormInput id='number' value={formData.number} onChange={handleChange} inputMode='numeric' required />
              {errors.number && <FormError>{errors.number}</FormError>}
            </InputGroup>
          </SplitRow>

          <InputGroup>
            <FormLabel htmlFor='extra'>Complemento (opcional)</FormLabel>
            <FormInput id='extra' value={formData.extra} onChange={handleChange} />
          </InputGroup>

          <PrimaryAction type='submit'>Continuar com o pagamento</PrimaryAction>
          <SecondaryAction as={Link} to={cartPath}>
            Voltar para o carrinho
          </SecondaryAction>
        </form>
      </RightDrawer>
    </ProfileScene>
  )
}

export default DeliveryPage
