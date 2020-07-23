import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './src/theme/GlobalStyle'
import theme from './src/theme/theme'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
