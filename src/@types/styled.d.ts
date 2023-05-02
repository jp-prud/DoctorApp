import 'styled-components';
import theme from '../theme';

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

export type Size =
  | 'SM'
  | 'MD'
  | 'LG'
  | 'XL'
  | 'XXL'
  | 'XXXL'
  | '4X'
  | '5X'
  | '6X'
  | '7X'
  | '8X';
