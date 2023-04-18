import styled, {css} from 'styled-components/native';

import {ButtonProps} from './types';

export const Container = styled.TouchableOpacity<Partial<ButtonProps>>`
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;

  ${({block}) =>
    block &&
    css`
      width: 100%;
    `}

  ${({theme, size = 'MD'}) => css`
    min-height: ${theme.SIZE[size]}px;
  `}

  ${({theme, variant}) =>
    (variant === 'solid' &&
      css`
        background: ${theme.COLORS.GRAY_600};
      `) ||
    (variant === 'outline' &&
      css`
        background: transparent;
        color: ${theme.COLORS.GRAY_600};
        border-color: ${theme.COLORS.GRAY_600};
      `) ||
    (variant === 'ghost' &&
      css`
        background: transparent;
        color: ${theme.COLORS.GRAY_600};
      `) ||
    (variant === 'link' &&
      css`
        background: transparent;
        color: ${theme.COLORS.GRAY_500};
      `)}
`;

export const Title = styled.Text<Partial<ButtonProps>>`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.SIZE.MD}px;
  `}

  ${({theme, variant}) =>
    (variant === 'outline' &&
      css`
        color: ${theme.COLORS.GRAY_600};
      `) ||
    (variant === 'ghost' &&
      css`
        color: ${theme.COLORS.GRAY_600};
      `) ||
    (variant === 'link' &&
      css`
        color: ${theme.COLORS.GRAY_500};
      `)}
`;
