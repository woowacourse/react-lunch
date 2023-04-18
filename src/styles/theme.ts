import { DefaultTheme } from 'styled-components';

const color = {
  primary: '#ec4a0a',
  lighten: '#f6a88a',
  grey100: '#ffffff',
  grey200: '#d0d5dd',
  grey300: '#667085',
  grey400: '#344054',
  grey500: '#000000',
};

const font = {
  title: 'normal 600 20px/24px Roboto',
  subtitle: 'normal 600 18px/28px Roboto',
  body: 'normal 400 16px/24px Roboto',
};

const theme: DefaultTheme = {
  color,
  font,
};

export default theme;
