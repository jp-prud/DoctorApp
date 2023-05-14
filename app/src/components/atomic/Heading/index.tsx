import {TextProps} from 'react-native';

import {Container, TitleContainer, Title, Subtitle, BackButton} from './styles';

import {TitleProps} from './types';

import SmallArrowIcon from '@assets/icons/small-arrow.svg';

import {useNavigation} from '@react-navigation/native';

export function Heading({
  title,
  subtitle,
  size = 'XL',
  hasBackButton = false,
  ...rest
}: TitleProps & TextProps) {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <TitleContainer>
        {hasBackButton && (
          <BackButton onPress={() => navigation.goBack()}>
            <SmallArrowIcon />
          </BackButton>
        )}

        <Title size={size}>{title}</Title>
      </TitleContainer>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
