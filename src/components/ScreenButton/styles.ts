import styled, {css} from 'styled-components/native';
import {ScreenButtonProps} from '.';

export const Container = styled.View<Partial<ScreenButtonProps>>`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({isActive}) =>
    isActive &&
    css`
      opacity: 0.7;
    `}
`;

export const RenderIconWrapper = styled.View`
  margin-bottom: 4px;
`;

export const Indicator = styled.View`
  width: 12px;
  height: 1.5px;
  background: ${({theme}) => theme.COLORS.GRAY_400};
  border-radius: 2px;
  margin-top: 4px;
  position: absolute;
  bottom: 8px;
`;
