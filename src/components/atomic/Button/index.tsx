import {ActivityIndicator} from 'react-native';

import {Container, Title} from './styles';

import {ButtonProps} from './types';

export function Button({title, isLoading, variant, ...rest}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={variant === 'solid' ? '#fff' : undefined} />
      ) : (
        <Title variant={variant} {...rest}>
          {title}
        </Title>
      )}
    </Container>
  );
}
