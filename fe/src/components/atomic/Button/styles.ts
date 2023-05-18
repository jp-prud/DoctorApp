import styled, { css } from "styled-components";

import { ButtonProps } from "./types";

export const StyledButton = styled.button<Partial<ButtonProps>>`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;
  border: transparent solid 2px;

  ${({ theme }) => css`
    padding-inline: ${theme.SIZE.MD}px;
  `};

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.COLORS.RED}!important;
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ theme, size = "MD" }) => css`
    min-height: ${theme.SIZE[size]}px;
  `}

  ${({ theme, variant }) =>
    (variant === "solid" &&
      css`
        background: ${theme.COLORS.BLUE};
      `) ||
    (variant === "outline" &&
      css`
        background: transparent;
        border-color: ${theme.COLORS.BLUE};
      `) ||
    (variant === "ghost" &&
      css`
        background: transparent;
      `) ||
    (variant === "link" &&
      css`
        background: transparent;
      `)}
`;

export const Title = styled.span<Partial<ButtonProps>>`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.SIZE.MD}px;
  `}

  ${({ theme, variant }) =>
    (variant === "outline" &&
      css`
        color: ${theme.COLORS.BLUE};
      `) ||
    (variant === "ghost" &&
      css`
        color: ${theme.COLORS.BLUE};
      `) ||
    (variant === "link" &&
      css`
        color: ${theme.COLORS.BLUE};
      `)}
`;
