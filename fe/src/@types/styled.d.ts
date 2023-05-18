import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export type DefaultTheme = ThemeType;
}

export type Size =
  | "SM"
  | "MD"
  | "LG"
  | "XL"
  | "XXL"
  | "XXXL"
  | "4X"
  | "5X"
  | "6X"
  | "7X"
  | "8X";
