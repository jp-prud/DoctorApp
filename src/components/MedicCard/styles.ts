import styled from 'styled-components/native';

import {Text} from '@components/atomic/Text';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  position: relative;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
  margin-right: ${({theme}) => theme.SIZE.MD}px;
`;

export const Details = styled.View`
  flex: 1;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const Title = styled(Text)`
  margin-bottom: 8px;
  max-width: 100%;
`;

export const Description = styled(Text)`
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
`;
