import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;

    --text-white: #ffffff;

    --grey-100: #ffffff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000000;
  }

  * {
    box-sizing: border-box;
  }
  
  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
