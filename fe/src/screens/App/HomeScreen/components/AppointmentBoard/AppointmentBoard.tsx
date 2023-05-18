import { Text } from "../../../../../components/atomic/Text";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { Container } from "./styles";

interface AppointmentBoardProps {
  title: string;
  icon: any;
}

export function AppointmentBoard({ title, icon }: AppointmentBoardProps) {
  return (
    <Container>
      <header>
        <img src={icon} title={title} alt={title} width="20" />

        <Text size="LG">{title}</Text>

        <Text size="LG" weight="400" className="quantity-board">
          1
        </Text>
      </header>

      <ul>
        <AppointmentCard />
      </ul>
    </Container>
  );
}
