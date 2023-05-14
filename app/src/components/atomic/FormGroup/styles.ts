import styled, {css} from 'styled-components/native';

import {FormGroupProps} from './';

export const Container = styled.View<Partial<FormGroupProps>>``;

export const InputTextHelper = styled.Text`
  margin-top: 4px;

  ${({theme}) => css`
    color: ${theme.COLORS.RED};
    font-size: ${theme.SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`;
