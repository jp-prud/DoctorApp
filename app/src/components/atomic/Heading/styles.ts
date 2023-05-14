import styled, {css} from 'styled-components/native';

import {Size} from 'src/@types/styled';

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text<{size: Size}>`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  ${({theme, size}) =>
    size === size &&
    css`
      font-size: ${theme.SIZE[size]}px;
    `}
`;

export const Subtitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.SIZE.MD}px;
    margin-top: 12px;
  `}
`;
