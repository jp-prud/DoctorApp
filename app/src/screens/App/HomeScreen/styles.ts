import styled from 'styled-components/native';

import {Platform} from 'react-native';

import ViewWrapper from '@components/atomic/ViewWrapper';

const isAndroid = Platform.OS === 'android';

export const Container = styled(ViewWrapper)``;

export const Header = styled.View`
  height: 54px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;

export const DoctorListContainer = styled.View`
  flex: 1;
  padding: 10px;
`;
