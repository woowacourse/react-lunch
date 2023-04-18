import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  html,
  body {
    font-family: sans-serif;
    font-size: 16px;
  }

  :root {
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;
    --grey-100: #ffffff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000000;
  }

  .overflow-hidden {
    overflow: hidden;
  }
`;

export default GlobalStyle;
