import styled, {css} from 'styled-components/native';

import {ButtonProps} from './types';

export const Container = styled.TouchableOpacity<Partial<ButtonProps>>`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;
  outline: transparent solid 2px;
  outline-offset: 2px;

  ${({theme}) => css`
    padding-left: ${theme.SIZE.MD}px;
    padding-right: ${theme.SIZE.MD}px;
  `};

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
        background: ${theme.COLORS.BLUE};
      `) ||
    (variant === 'outline' &&
      css`
        background: transparent;
        border-color: ${theme.COLORS.BLUE};
      `) ||
    (variant === 'ghost' &&
      css`
        background: transparent;
      `) ||
    (variant === 'link' &&
      css`
        background: transparent;
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
        color: ${theme.COLORS.BLUE};
      `) ||
    (variant === 'ghost' &&
      css`
        color: ${theme.COLORS.BLUE};
      `) ||
    (variant === 'link' &&
      css`
        color: ${theme.COLORS.BLUE};
      `)}
`;
