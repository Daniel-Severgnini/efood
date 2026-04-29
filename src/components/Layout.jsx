/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import logo from '../assets/images/logo-efood.png'
import { colors, layout } from '../styles/theme'

const texturedBackground = css`
  background-color: ${colors.light};
  background-image:
    linear-gradient(90deg, rgba(230, 103, 103, 0.08) 1px, transparent 1px),
    linear-gradient(rgba(230, 103, 103, 0.08) 1px, transparent 1px);
  background-size: 18px 18px;
`

export const PageViewport = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  background: ${colors.page};
  overflow: hidden;
  min-height: 100vh;
`

export const HomeViewport = styled(PageViewport)`
  min-height: 2148px;

  @media (max-width: 1366px) {
    min-height: auto;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`

export const ProfileViewport = styled(PageViewport)`
  min-height: 1624px;

  @media (max-width: 1366px) {
    min-height: auto;
  }

  @media (max-width: 768px) {
    min-height: auto;
  }
`

export const Inner = styled.div`
  width: min(${layout.contentWidth}px, calc(100% - 64px));
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 32px);
  }
`

const HeaderLogo = styled.img`
  display: block;
  width: 125px;
  height: 58px;
  max-width: 100%;
  object-fit: contain;
`

const HomeHeaderWrapper = styled.header`
  ${texturedBackground};
  min-height: 384px;
  padding-top: 24px;
  display: flex;
  align-items: flex-start;
`

const HomeHeaderContent = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomeHeadline = styled.h1`
  margin: 128px 0 0;
  max-width: 540px;
  text-align: center;
  color: ${colors.primary};
  font-size: 36px;
  line-height: 1.15;
  font-weight: 900;

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 32px;
  }
`

export function HomeHeader() {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderContent>
        <Link to='/' aria-label='Página inicial efood'>
          <HeaderLogo src={logo} alt='efood' />
        </Link>
        <HomeHeadline>Viva experiências gastronômicas no conforto da sua casa</HomeHeadline>
      </HomeHeaderContent>
    </HomeHeaderWrapper>
  )
}

const ProfileHeaderWrapper = styled.header`
  ${texturedBackground};
  min-height: 164px;
  padding-top: 24px;
`

const ProfileHeaderContent = styled(Inner)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 12px;
  }
`

const HeaderNavigation = styled(Link)`
  margin-top: 42px;
  font-size: 18px;
  font-weight: 900;

  &:hover {
    color: ${colors.primaryDark};
  }

  @media (max-width: 900px) {
    margin-top: 0;
    order: 2;
  }
`

const HeaderCart = styled(Link)`
  justify-self: end;
  margin-top: 42px;
  font-size: 18px;
  font-weight: 900;
  text-align: right;

  @media (max-width: 900px) {
    justify-self: center;
    margin-top: 0;
    order: 3;
    text-align: center;
  }
`

const LogoCenter = styled(Link)`
  justify-self: center;

  @media (max-width: 900px) {
    order: 1;
  }
`

export function ProfileHeader({ cartLabel = '0 produto(s) no carrinho', cartTo = '/carrinho' }) {
  return (
    <ProfileHeaderWrapper>
      <ProfileHeaderContent>
        <HeaderNavigation to='/'>Restaurantes</HeaderNavigation>
        <LogoCenter to='/' aria-label='Página inicial efood'>
          <HeaderLogo src={logo} alt='efood' />
        </LogoCenter>
        <HeaderCart to={cartTo}>{cartLabel}</HeaderCart>
      </ProfileHeaderContent>
    </ProfileHeaderWrapper>
  )
}

export const HomeRestaurantsSection = styled.main`
  background: ${colors.section};
  padding: 80px 0 120px;
`

export const ProfileProductsSection = styled.main`
  background: ${colors.section};
  padding: 56px 0 122px;
`

const HeroSection = styled.section`
  height: 280px;
  color: ${colors.white};
  background:
    linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${({ $image }) => $image}) center / cover no-repeat;
`

const HeroCuisine = styled.p`
  margin: 0;
  padding-top: 26px;
  font-size: 32px;
  font-weight: 100;
`

const HeroTitle = styled.h2`
  margin: 136px 0 0;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.1;

  @media (max-width: 768px) {
    margin-top: 96px;
    font-size: 32px;
  }
`

export function RestaurantHero({ cuisine, title, image }) {
  return (
    <HeroSection $image={image}>
      <Inner>
        <HeroCuisine>{cuisine}</HeroCuisine>
        <HeroTitle>{title}</HeroTitle>
      </Inner>
    </HeroSection>
  )
}

const FooterSection = styled.footer`
  min-height: 298px;
  background: ${colors.light};
  display: flex;
  justify-content: center;
  text-align: center;
`

const FooterContent = styled.div`
  padding: 42px 20px 20px;
  width: min(${layout.contentWidth}px, 100%);
`

const FooterLogoLink = styled(Link)`
  display: block;
  width: 125px;
  margin: 0 auto;
  line-height: 0;
`

const SocialRow = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

const SocialIconLink = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${colors.primary};
  color: ${colors.light};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: ${colors.primaryDark};
  }
`

const SocialGlyph = styled.svg`
  width: 14px;
  height: 14px;
  fill: currentColor;
`

function InstagramIcon() {
  return (
    <SocialGlyph viewBox='0 0 24 24' aria-hidden='true'>
      <path d='M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 2.2A3.8 3.8 0 1 1 8.2 13 3.8 3.8 0 0 1 12 9.2Zm6.4-3.1a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4Z' />
    </SocialGlyph>
  )
}

function FacebookIcon() {
  return (
    <SocialGlyph viewBox='0 0 24 24' aria-hidden='true'>
      <path d='M13.5 9H16V6h-2.5C10.46 6 8 8.46 8 11.5V14H6v3h2v5h3v-5h2.45l.55-3H11v-2.2c0-1 .8-1.8 1.8-1.8h.7Z' />
    </SocialGlyph>
  )
}

function XIcon() {
  return (
    <SocialGlyph viewBox='0 0 24 24' aria-hidden='true'>
      <path d='M14.1 10.2 20.6 3h-1.6l-5.6 6.2L8.8 3H3l6.9 10.1L3 21h1.6l6-6.8 4.7 6.8H21l-6.9-10.8Zm-2.7 3L10.7 12 5.2 4h2.6l4.4 6.4.7 1.1 5.8 8.4h-2.6l-4.7-6.7Z' />
    </SocialGlyph>
  )
}

const FooterText = styled.p`
  margin: 80px auto 0;
  max-width: 530px;
  color: ${colors.primary};
  font-size: 14px;
  line-height: 1.4;
`

export function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <FooterLogoLink to='/' aria-label='Página inicial efood'>
          <HeaderLogo src={logo} alt='efood' />
        </FooterLogoLink>
        <SocialRow>
          <SocialIconLink href='https://www.instagram.com' target='_blank' rel='noreferrer' aria-label='Instagram'>
            <InstagramIcon />
          </SocialIconLink>
          <SocialIconLink href='https://www.facebook.com' target='_blank' rel='noreferrer' aria-label='Facebook'>
            <FacebookIcon />
          </SocialIconLink>
          <SocialIconLink href='https://x.com' target='_blank' rel='noreferrer' aria-label='X (Twitter)'>
            <XIcon />
          </SocialIconLink>
        </SocialRow>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
          qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
      </FooterContent>
    </FooterSection>
  )
}


