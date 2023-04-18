import { Container, Title, Subtitle } from "./styles";

import { TitleProps } from "./types";

export function Heading({ content, size, subtitle }: TitleProps) {
  return (
    <Container>
      <Title size={size}>{content}</Title>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
}
