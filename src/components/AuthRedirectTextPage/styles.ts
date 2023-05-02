import styled from 'styled-components/native';

import {Button} from '@components/atomic/Button';

export const TextWrapper = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: auto;
`;

export const Description = styled.Text`
  margin-right: -2px;
`;

export const CTA = styled(Button)`
  padding-left: 4px;
  padding-right: 4px;
  font-size: 14px;
`;
