import {Text} from '@components/atomic/Text';
import {ScreensDTO} from '../ProfileScreen';

import {Container, ButtonWrapper} from './styles';

import ArrowIcon from '@assets/icons/arrow.svg';

export function CardScreen({title}: ScreensDTO) {
  return (
    <Container>
      <Text weight="500">{title}</Text>

      <ButtonWrapper>
        <ArrowIcon />
      </ButtonWrapper>
    </Container>
  );
}
