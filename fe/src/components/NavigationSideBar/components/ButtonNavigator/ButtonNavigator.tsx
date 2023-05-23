import { Text } from "../../../atomic/Text";
import { ActiveScreenIcon, Container } from "./styles";

interface ButtonNavigatorProps {
  title: string;
  path: string;
  icon: any;
}

export function ButtonNavigator({ title, path, icon }: ButtonNavigatorProps) {
  return (
    <Container to={path}>
      {({ isActive }) => (
        <>
          <img src={icon} alt={title} title={title} />

          <Text
            align="center"
            weight="600"
            size="SM"
            as="h1"
            color={isActive ? "BLUE" : "GRAY_400"}
          >
            {title}
          </Text>

          {isActive && <ActiveScreenIcon />}
        </>
      )}
    </Container>
  );
}
