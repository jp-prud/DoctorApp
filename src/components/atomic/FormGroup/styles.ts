import styled, { css } from "styled-components/native";

import { FormGroupProps } from "./types";

export const Container = styled.View<Partial<FormGroupProps>>`
  ${({ isSibling }) =>
    isSibling &&
    css`
      margin-top: 20px;
    `}
`;

export const InputTextHelper = styled.Text`
  margin-top: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-size: ${theme.SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`;
