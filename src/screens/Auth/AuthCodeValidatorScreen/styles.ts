import styled from 'styled-components/native';

import Input from '@components/atomic/Input';

export const CodeInputWrapper = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const CodeInput = styled(Input)`
  width: 56px;
  height: 56px;
  text-align: center;
`;
