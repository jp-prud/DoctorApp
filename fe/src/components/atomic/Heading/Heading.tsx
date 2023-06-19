import { Text } from "../Text";
import { Container } from "./styles";

interface HeadingProps {
  title: string;
  description?: string;
  icon?: any;
  RightComponent?: React.ReactNode
}

export function Heading({ title, description, icon, RightComponent }: HeadingProps) {
  return (
    <Container>
      <div className="details">
        <Text
          as="h1"
          size="XL"
          color="GRAY_600"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {icon && <img src={icon} title={title} alt={title} width="32" />}
          {title}
        </Text>

        <Text as="span" size="MD" color="GRAY_400">
          {description}
        </Text>
      </div>

      {RightComponent && RightComponent}
    </Container>
  );
}
