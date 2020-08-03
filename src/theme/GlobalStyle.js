import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Epilogue';
    font-size: 17px;
  }

  body, html {
    height: 100%;
    width: 100%;
    font-family: 'Epilogue';
    font-size: 17px;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    overflow-anchor: none;
  }

  body {
    overflow-y: scroll;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #380807;
    outline: none;
  }
`;

export default GlobalStyle;
