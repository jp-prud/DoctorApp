import styled, {css} from 'styled-components/native';

import ViewWrapper from '@components/atomic/ViewWrapper';

export const Container = styled(ViewWrapper)``;

export const Form = styled.View`
  ${({theme}) => css`
    gap: ${theme.SIZE.MD}px;
  `}
`;

export const FooterWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: ${({theme}) => theme.SIZE.MD}px;
`;
