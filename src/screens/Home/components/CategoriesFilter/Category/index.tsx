import {Text} from '@components/atomic/Text';

import {CategoryProps} from '@types/index';

import {Container, IconWrapper} from './styles';

export function Category({title, icon, isSelected}: CategoryProps) {
  return (
    <Container isSelected={isSelected}>
      <IconWrapper>
        <Text size="SM">{icon}</Text>
      </IconWrapper>

      <Text size="MD" weight={700} color="#666">
        {title}
      </Text>
    </Container>
  );
}
