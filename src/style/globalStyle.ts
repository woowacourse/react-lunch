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
    --font-color: #fcfcfd;
    --backdrop-color: #00000059;
    --divide-color: #e9eaed;
  }

  .text-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }

  .text-subtitle {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  .text-body {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .text-caption {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
