import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Noto Sans KR", sans-serif;
    /* hidden scroll */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body::-webkit-scrollbar,
  dialog::-webkit-scrollbar {
    /* hidden scroll */
    display: none;
  }

  body:has(dialog[open]) {
    overflow: hidden;
  }

  /* Colors *****************************************/
  :root {
    --primary-color: #ec4a0a;
    --lighten-color: #f6a88a;
    --darken-color:#db4105;
    --grey-100: #fff;
    --grey-200: #d0d5dd;
    --grey-300: #667085;
    --grey-400: #344054;
    --grey-500: #000;
  }

  /* Typography *************************************/
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

  /* Restaurant Category Images **********************/
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
  }
  .category > img {
    width: 36px;
    height: 36px;
  }

  /* Restaurant Info Texts ***************************/
  p.takingTime {
    color: var(--primary-color);
  }
  p.description {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  // reset.css
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  button,
  input,
  video,
  dialog {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
