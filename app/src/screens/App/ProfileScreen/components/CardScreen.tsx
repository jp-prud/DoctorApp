import {Text} from '@components/atomic/Text';
import {ScreensDTO} from '../ProfileScreen';

import {Container, ButtonWrapper} from './styles';

import ArrowIcon from '@assets/icons/arrow.svg';
import {useNavigation} from '@react-navigation/native';

export function CardScreen({title, link}: ScreensDTO) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate(link)}>
      <Text weight="500">{title}</Text>

      <ButtonWrapper>
        <ArrowIcon />
      </ButtonWrapper>
    </Container>
  );
}
