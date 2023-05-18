import styled, { css } from "styled-components";

import { FormGroupProps } from "./";

import { Text } from "../atomic/Text";

export const Container = styled.div<Partial<FormGroupProps>>`
  & + & {
    margin-top: 24px;
  }
`;

export const InputTextHelper = styled(Text)`
  margin-top: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-size: ${theme.SIZE.MD}px;
  `}
`;
