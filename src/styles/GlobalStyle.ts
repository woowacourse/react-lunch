import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
