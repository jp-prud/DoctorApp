import styled, { css } from "styled-components/native";

import { TextInputProps } from 'react-native'

export default styled.TextInput<TextInputProps>`
  align-items: center;
  background: #fff;
  border-radius: 8px;

  ${({theme}) => css`
    height: ${theme.SIZE['5X']}px;
    padding-left: ${theme.SIZE.SM}px;
    padding-right: ${theme.SIZE.SM}px;
    border: 1px solid ${theme.COLORS.GRAY_200};
    font-size: ${theme.SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
    color: #666;
  `}
`;
