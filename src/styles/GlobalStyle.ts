import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
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

  h1 {
    overflow: hidden;
  }

  :root {
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;
    --grey-100: #ffffff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000000;

    --lunch-title: normal 600 20px/24px Roboto;
    --lunch-subtitle: normal 600 18px/28px Roboto;
    --lunch-body: normal 400 16px/24px Roboto;
  }
`;
