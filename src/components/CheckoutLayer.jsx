import styled from 'styled-components'
import { colors, layout } from '../styles/theme'

export const DimmingOverlay = styled.div`
  position: absolute;
  inset: 0;
  right: ${({ $withDrawer }) => ($withDrawer ? `${layout.drawerWidth}px` : '0')};
  background: ${colors.overlay};
  z-index: 10;
  cursor: pointer;

  @media (max-width: 980px) {
    right: 0;
  }
`

export const RightDrawer = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: ${layout.drawerWidth}px;
  min-height: 100%;
  background: ${colors.primary};
  padding: 32px 8px;
  z-index: 20;

  @media (max-width: 980px) {
    position: relative;
    width: 100%;
    min-height: auto;
  }
`

export const DrawerTitle = styled.h3`
  margin: 0 0 16px;
  color: ${colors.light};
  font-size: 16px;
  font-weight: 900;
`

export const DrawerText = styled.p`
  margin: 0 0 14px;
  color: ${colors.light};
  font-size: 14px;
  line-height: 1.6;
`

export const CartList = styled.div`
  display: grid;
  gap: 16px;
`

export const CartItem = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 82px minmax(0, 1fr);
  gap: 8px 10px;
  padding: 8px;
  min-height: 100px;
  background: ${colors.light};
  align-items: start;

  @media (max-width: 440px) {
    grid-template-columns: 72px minmax(0, 1fr);
  }
`

export const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media (max-width: 440px) {
    width: 70px;
    height: 70px;
  }
`

export const CartName = styled.h4`
  margin: 0 0 8px;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 900;
`

export const CartPrice = styled.p`
  margin: 0;
  color: ${colors.primary};
  font-size: 14px;
`

export const CartDetails = styled.div`
  min-width: 0;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 24px;
  height: 24px;
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const RemoveIcon = styled.svg`
  color: ${colors.primary};
  width: 18px;
  height: 18px;
`

export const EmptyCartMessage = styled.p`
  margin: 0;
  padding: 20px 0;
  color: ${colors.light};
  font-size: 14px;
  line-height: 1.5;
`

export const TotalLine = styled.div`
  margin: 40px 0 16px;
  display: flex;
  justify-content: space-between;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 900;
`

const ActionBase = styled.button`
  width: 100%;
  height: 24px;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 900;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

export const PrimaryAction = styled(ActionBase)`
  background: ${colors.light};
  color: ${colors.primary};

  &:hover {
    background: ${colors.page};
  }
`

export const SecondaryAction = styled(ActionBase)`
  margin-top: 8px;
  background: transparent;
  color: ${colors.light};

  &:hover {
    color: ${colors.page};
  }
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${colors.light};
  font-size: 14px;
  font-weight: 900;
`

export const FormInput = styled.input`
  width: 100%;
  height: 32px;
  border: 0;
  padding: 0 8px;
  background: ${colors.light};
  color: #4b4b4b;
  font-size: 14px;
`

export const InputGroup = styled.div`
  margin-bottom: 8px;
`

export const FormError = styled.p`
  margin: 4px 0 0;
  color: ${colors.light};
  font-size: 12px;
  line-height: 1.35;
`

export const SplitRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 34px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  top: 532px;
  left: 50%;
  transform: translateX(-50%);
  width: min(1024px, calc(100% - 100px));
  min-height: 344px;
  background: ${colors.primary};
  padding: 32px;
  z-index: 20;
  color: ${colors.light};
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;

  @media (max-width: 980px) {
    position: relative;
    top: 0;
    left: auto;
    transform: none;
    width: calc(100% - 32px);
    margin: 30px auto;
    grid-template-columns: 1fr;
  }
`

export const ModalImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 900;
`

export const ModalDescription = styled.p`
  margin: 16px 0 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`

export const ModalServing = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 400;
`

export const ModalAdd = styled(PrimaryAction)`
  max-width: 220px;
`

export const ModalClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 0;
  background: transparent;
  color: ${colors.light};
  cursor: pointer;
  font-size: 16px;
`

