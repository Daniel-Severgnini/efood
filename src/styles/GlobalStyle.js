import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap');

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${colors.page};
    color: ${colors.primary};
    line-height: 1.4;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    font-family: inherit;
  }
`

