import {Image, ImageSourcePropType, useWindowDimensions} from 'react-native';
import {Container, Details} from './styles';
import {Text} from '@components/atomic/Text';

export interface OnboardingItemProps {
  index: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export function OnboardingItem({
  title,
  description,
  image,
}: OnboardingItemProps) {
  const {width} = useWindowDimensions();

  return (
    <Container style={{width}}>
      <Image
        source={image}
        style={[
          {flex: 0.7, justifyContent: 'center'},
          {width: width - 48, resizeMode: 'contain'},
        ]}
      />

      <Details>
        <Text align="center" size="XL" weight="700" color="BLUE">
          {title}
        </Text>

        <Text align="center" size="MD" color="GRAY_400">
          {description}
        </Text>
      </Details>
    </Container>
  );
}
