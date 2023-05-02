import {Text} from '@components/atomic/Text';

import {Container, RenderIconWrapper, Indicator} from './styles';

export interface ScreenButtonProps {
  title: string;
  renderIcon: any;
  isActive?: boolean;
}

export function ScreenTabBarButton({title, renderIcon, isActive}: ScreenButtonProps) {
  return (
    <Container isActive={isActive}>
      <RenderIconWrapper>{renderIcon}</RenderIconWrapper>

      <Text>{title}</Text>

      {isActive && <Indicator />}
    </Container>
  );
}
