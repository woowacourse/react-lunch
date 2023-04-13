import 'styled-components';
import theme from '../../theme';

type Color = keyof typeof theme.color;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<Color, string>;
  }
}
