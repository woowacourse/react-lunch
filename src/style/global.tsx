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
    font-family: 'Roboto';
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

  .close_background {
    opacity: 0 !important;
  }

  .close_bottom_sheet {
    -webkit-transform: translateY(100%) !important;
            transform: translateY(100%) !important;
    opacity: 0 !important;
  }
`;

export default GlobalStyle;
