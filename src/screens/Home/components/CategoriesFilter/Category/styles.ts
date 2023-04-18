import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {CategoryProps} from '@types/index';
import {css} from 'styled-components';

const isAndroid = Platform.OS === 'android';

export const Container = styled.TouchableOpacity<Partial<CategoryProps>>`
  flex: 1;
  min-width: 72px;
  align-items: center;
  opacity: 0.5;

  ${({isSelected}: CategoryProps) =>
    isSelected &&
    css`
      opacity: 1;
    `}
`;

export const IconWrapper = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1})
  elevation: 2;
  margin-bottom: 8px;
`;
