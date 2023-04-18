import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      lighten: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
    };

    font: {
      title: string;
      subtitle: string;
      body: string;
    };
  }
}
