import React from 'react';

import {Image, ImageSourcePropType} from 'react-native';
import {Text} from '@components/atomic/Text';
import {Button} from '@components/atomic/Button';

import {Container, Details} from './styles';
import {EmptyStateProps} from './types';

export function EmptyState({
  title,
  description,
  imageContext,
  button: {label, redirectPage},
}: EmptyStateProps) {
  let imageSource: ImageSourcePropType;

  switch (imageContext) {
    case 'calendar':
      imageSource = require('@assets/images/EmptyCalendarState.png');
      break;
    default:
      throw new Error(`Invalid image option: ${imageContext}`);
  }

  return (
    <Container>
      <Image source={imageSource} />

      <Details>
        <Text size="XL" weight="700">{title}</Text>
        <Text>{description}</Text>
      </Details>

      <Button
        title={label}
        onPress={() => console.log(redirectPage)}
        size="5X"
        variant="solid"
        block
        style={{maxWidth: 240}}
      />
    </Container>
  );
}
