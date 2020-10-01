import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #ececec;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
