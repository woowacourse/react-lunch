import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#ec4a0a",
  lighten: "#f6a88a",
  grey100: "#ffffff",
  grey200: "#d0d5dd",
  grey300: "#667085",
  grey400: "#344054",
  grey500: "#000000",
};

const fonts = {
  title: "font-size:20px; line-height:24px; font-weight:600;",
  subtitle: "font-size:18px; line-height:28px; font-weight:600;",
  page: "font-size:16px; line-height:24px; font-weight:700;",
  body: "font-size:16px; line-height:24px; font-weight:400;",
  caption: "font-size:14px; line-height:20px; font-weight:400;",
};

const buttons = {
  white: `background-color: ${colors.grey100}; color: ${colors.grey500}; border: solid 1px ${colors.grey500};`,
  orange: `background-color: ${colors.primary}; color: ${colors.grey100}; border: none;`,
};

export const theme: DefaultTheme = {
  colors,
  fonts,
  buttons,
};
