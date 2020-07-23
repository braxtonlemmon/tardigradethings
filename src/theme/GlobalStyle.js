import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Epilogue',
  }

  body, html {
    height: 100%;
    width: 100%;
    font-family: 'Epilogue'
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;

  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`

export default GlobalStyle
