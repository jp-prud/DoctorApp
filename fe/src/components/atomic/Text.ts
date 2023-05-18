import styled, { css } from "styled-components";
import { Size } from "../../@types/styled";

interface TextProps {
  weight?: "200" | "300" | "400" | "500" | "600" | "700" | "800";
  color?: string;
  size?: Size | number;
  opacity?: number;
  align?: "left" | "center" | "right";
}

export const Text = styled.h1<TextProps>`
  ${({ theme }) => css`
    font-weight: ${({ weight }: TextProps) => weight};

    color: ${({ color }: TextProps) =>
      (color && theme.COLORS[color]) || theme.COLORS.GRAY_500};

    font-size: ${({ size }: TextProps) =>
      size ? `${theme.SIZE[size]}px` : "16px"};

    opacity: ${({ opacity }: TextProps) => opacity || 1};

    text-align: ${({ align }) => align || "left"};
  `}
`;
