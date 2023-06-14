import { Text } from "../../../../../components/atomic/Text";
import { Appointment } from "../../../AppointmentScreen/AppointmentScreen";
import { AppointmentCard } from "../AppointmentCard/AppointmentCard";
import { Container } from "./styles";

interface AppointmentBoardProps {
  title: string;
  icon: any;
  appointments: Appointment[];
}

export function AppointmentBoard({
  title,
  icon,
  appointments,
}: AppointmentBoardProps) {
  return (
    <Container>
      <header>
        <img src={icon} title={title} alt={title} width="20" />

        <Text size="LG">{title}</Text>

        <Text size="LG" weight="400" className="quantity-board">
          {appointments.length}
        </Text>
      </header>

      {appointments.length > 0 && (
        <ul>
          {appointments?.map((appointment) => (
            <AppointmentCard key={appointment._id} appointment={appointment} />
          ))}
        </ul>
      )}
    </Container>
  );
}
