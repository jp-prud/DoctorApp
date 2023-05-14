import styled, {css} from 'styled-components/native';

export const OptionsWrapper = styled.View`
  ${({theme}) => css`
    gap: ${theme.SIZE.MD}px;
  `}
`;

export const OptionCardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border-radius: 8px;

  ${({theme}) => css`
    padding: ${theme.SIZE.MD}px;
    gap: ${theme.SIZE.MD}px;
  `}
`;

export const Details = styled.View`
  gap: 4px;
`;
