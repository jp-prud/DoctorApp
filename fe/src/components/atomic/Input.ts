import styled, { css } from "styled-components";

import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export default styled.input<
  InputHTMLAttributes<HTMLInputElement> & FieldError & any
>`
  align-items: center;
  background: #fff;
  border-radius: 8px;
  width: 100%;

  ${({ theme }) =>
    css`
      height: ${theme.SIZE["5X"]}px;
      border: 1px solid ${theme.COLORS.GRAY_200};
      padding-inline: ${theme.SIZE.SM}px;
      font-size: ${theme.SIZE.SM}px;
      color: ${theme.COLORS.GRAY_500};

      &[disabled] {
        background: ${theme.COLORS.GRAY_100};
        color: ${theme.COLORS.GRAY_200};
      }
    `}

  ${({ theme, error }: any) =>
    error &&
    css`
      border-color: ${theme.COLORS.RED};
      color: ${theme.COLORS.RED};
    `}
`;
