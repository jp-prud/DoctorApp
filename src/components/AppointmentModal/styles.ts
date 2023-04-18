import styled from 'styled-components/native';

import {Text} from '@components/atomic/Text';
import {Button} from '@components/atomic/Button';

export const Overlay = styled.View`
  background: rgba(0, 0, 0, 0.6);
  align-items: stretch;
  justify-content: center;
  flex: 1;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #fafafa;
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  margin-top: 22px;
  align-items: center;
`;

export const HeaderContent = styled.View`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const DescriptionDoctor = styled(Text)`
  max-width: 190px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;

export const ReturnStep = styled(Button)`
  margin-top: 8px;
`;
