import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  cardName: '',
  cardNumber: '',
  cvv: '',
  expMonth: '',
  expYear: '',
}

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

function formatCvv(value) {
  return value.replace(/\D/g, '').slice(0, 3)
}

function formatLimitedDigits(value, limit) {
  return value.replace(/\D/g, '').slice(0, limit)
}

function PaymentPage() {
  const navigate = useNavigate()
  const { itemCount } = useCart()
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (itemCount === 0) {
      navigate('/carrinho', { replace: true })
    }
  }, [itemCount, navigate])

  const handleChange = (event) => {
    const { id, value } = event.target

    if (id === 'cardNumber') {
      setFormData((current) => ({ ...current, cardNumber: formatCardNumber(value) }))
      setErrors((current) => ({ ...current, cardNumber: undefined }))
      return
    }

    if (id === 'cvv') {
      setFormData((current) => ({ ...current, cvv: formatCvv(value) }))
      setErrors((current) => ({ ...current, cvv: undefined }))
      return
    }

    if (id === 'expMonth') {
      setFormData((current) => ({ ...current, expMonth: formatLimitedDigits(value, 2) }))
      setErrors((current) => ({ ...current, expMonth: undefined }))
      return
    }

    if (id === 'expYear') {
      setFormData((current) => ({ ...current, expYear: formatLimitedDigits(value, 4) }))
      setErrors((current) => ({ ...current, expYear: undefined }))
      return
    }

    setFormData((current) => ({ ...current, [id]: value }))
    setErrors((current) => ({ ...current, [id]: undefined }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!/^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)+$/.test(formData.cardName.trim())) {
      nextErrors.cardName = 'Nome no cartão deve conter nome e sobrenome.'
    }

    const cardNumberDigits = formData.cardNumber.replace(/\D/g, '')
    if (cardNumberDigits.length !== 16) {
      nextErrors.cardNumber = 'Número do cartão deve ter 16 dígitos.'
    }

    const cvvDigits = formData.cvv.replace(/\D/g, '')
    if (cvvDigits.length !== 3) {
      nextErrors.cvv = 'CVV deve ter 3 dígitos.'
    }

    const month = Number(formData.expMonth)
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      nextErrors.expMonth = 'Mês de vencimento inválido.'
    }

    const rawYear = formData.expYear.trim()
    const year = rawYear.length === 2 ? Number(`20${rawYear}`) : Number(rawYear)
    const currentYear = new Date().getFullYear()
    if (!Number.isInteger(year) || year < currentYear || year > currentYear + 20) {
      nextErrors.expYear = 'Ano de vencimento inválido.'
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

    navigate('/confirmacao')
  }

  return (
    <ProfileScene actionTo='/perfil/modal'>
      <DimmingOverlay $withDrawer onClick={() => navigate('/entrega')} aria-label='Voltar para a entrega' role='button' />
      <RightDrawer>
        <form onSubmit={handleSubmit} noValidate>
          <DrawerTitle>Pagamento - Valor a pagar R$ 190,90</DrawerTitle>

          <InputGroup>
            <FormLabel htmlFor='cardName'>Nome no cartão</FormLabel>
            <FormInput id='cardName' value={formData.cardName} onChange={handleChange} required />
            {errors.cardName && <FormError>{errors.cardName}</FormError>}
          </InputGroup>

          <SplitRow>
            <InputGroup>
              <FormLabel htmlFor='cardNumber'>Número do cartão</FormLabel>
              <FormInput
                id='cardNumber'
                value={formData.cardNumber}
                onChange={handleChange}
                inputMode='numeric'
                maxLength={19}
                placeholder='1234 5678 9012 3456'
                required
              />
              {errors.cardNumber && <FormError>{errors.cardNumber}</FormError>}
            </InputGroup>
            <InputGroup>
              <FormLabel htmlFor='cvv'>CVV</FormLabel>
              <FormInput
                id='cvv'
                value={formData.cvv}
                onChange={handleChange}
                inputMode='numeric'
                maxLength={3}
                placeholder='123'
                required
              />
              {errors.cvv && <FormError>{errors.cvv}</FormError>}
            </InputGroup>
          </SplitRow>

          <SplitRow>
            <InputGroup>
              <FormLabel htmlFor='expMonth'>Mês de vencimento</FormLabel>
              <FormInput
                id='expMonth'
                value={formData.expMonth}
                onChange={handleChange}
                inputMode='numeric'
                maxLength={2}
                placeholder='MM'
                required
              />
              {errors.expMonth && <FormError>{errors.expMonth}</FormError>}
            </InputGroup>
            <InputGroup>
              <FormLabel htmlFor='expYear'>Ano de vencimento</FormLabel>
              <FormInput
                id='expYear'
                value={formData.expYear}
                onChange={handleChange}
                inputMode='numeric'
                maxLength={4}
                placeholder='AAAA'
                required
              />
              {errors.expYear && <FormError>{errors.expYear}</FormError>}
            </InputGroup>
          </SplitRow>

          <PrimaryAction type='submit'>Finalizar pagamento</PrimaryAction>
          <SecondaryAction as={Link} to='/entrega'>
            Voltar para a edição de endereço
          </SecondaryAction>
        </form>
      </RightDrawer>
    </ProfileScene>
  )
}

export default PaymentPage
