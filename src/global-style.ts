// global-style.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    /* Colors *****************************************/
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;
    --grey-100: #ffffff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000000;

    /* Texts *****************************************/
    --text-title: 600 20px/24px san-serif;
    --text-subtitle: 600 18px/28px san-serif;
    --text-body: 400 16px/24px san-serif;
    --text-caption: 400 14px/20px san-serif;
  }
`;
