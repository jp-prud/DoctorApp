import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 16px;
  margin-bottom: 32px;

  ${({theme}) => css`
    padding: 0 ${theme.SIZE.MD}px ${theme.SIZE.XL}px;
  `}
`;

export const Details = styled.View`
  text-align: center;
  align-items: center;
  gap: 4px;
  ${({theme}) => css`
    margin-bottom: ${theme.SIZE.XXXL}px;
  `}
`;
