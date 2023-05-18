import { ButtonHTMLAttributes } from "react";
import { Size } from "../../../@types/styled";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  danger?: boolean;
  onClick(): void;
  title: string;
  size: Size | number;
  variant: ButtonVariant | "solid";
  block?: boolean;
};

export type ButtonVariant = "solid" | "ghost" | "outline" | "link";
