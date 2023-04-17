const theme = {
  primary: '#ec4a0a',
  primaryLighten: '#f6a88a',
  textWhite: '#ffffff',
  grey: {
    '100': '#f5f5f5',
    '200': '#d0d5dd',
    '300': '#667085',
    '400': '#344054',
    '500': '#000000',
  },
} as const;

export type Theme = typeof theme;

export default theme;
