import { createGlobalStyle } from 'styled-components'
import { purple } from './utils'
export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit
}

body {
  margin: 0;
  padding: 8em 0 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${purple};
}


`
