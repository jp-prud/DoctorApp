import { TouchableOpacityProps } from "react-native";

import { Size } from "src/@types/styled";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  size: Size | number;
  variant: ButtonVariant | "solid";
  block?: boolean;
  isLoading?: boolean;
};

export type ButtonVariant = "solid" | "ghost" | "outline" | "link";
